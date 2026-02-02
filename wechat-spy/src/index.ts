#!/usr/bin/env node
import axios from 'axios'
import * as cheerio from 'cheerio'
import TurndownService from 'turndown'
import * as fs from 'fs'
import * as path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

interface Config {
  urls: string[]
  outputDir: string
  options?: {
    delay?: number
    userAgent?: string
    selector?: string
  }
}

interface FetchResult {
  url: string
  title: string
  markdown: string
  success: boolean
  error?: string
}

const turndown = new TurndownService({
  headingStyle: 'atx',
  codeBlockStyle: 'fenced',
  bulletListMarker: '-',
})

// 移除脚本和样式标签
turndown.remove(['script', 'style', 'nav', 'footer', 'aside'])

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

function sanitizeFilename(title: string): string {
  return title
    .replace(/[<>:"/\\|?*]/g, '')
    .replace(/\s+/g, '_')
    .substring(0, 100)
}

async function fetchPage(
  url: string,
  userAgent?: string
): Promise<{ html: string; title: string }> {
  const response = await axios.get(url, {
    headers: {
      'User-Agent':
        userAgent ||
        'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36',
      Accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
      'Accept-Language': 'zh-CN,zh;q=0.9,en;q=0.8',
    },
    timeout: 30000,
  })

  const $ = cheerio.load(response.data)

  // 针对微信公众号文章提取标题
  let title = ''
  const isWechat = url.includes('mp.weixin.qq.com')

  if (isWechat) {
    // 微信文章标题选择器
    title =
      $('#activity-name').text().trim() ||
      $('.rich_media_title').text().trim() ||
      $('meta[property="og:title"]').attr('content')?.trim() ||
      ''
  }

  // 通用标题提取
  if (!title) {
    title =
      $('meta[property="og:title"]').attr('content')?.trim() ||
      $('h1').first().text().trim() ||
      $('title').text().trim() ||
      new URL(url).hostname
  }

  return { html: response.data, title }
}

function htmlToMarkdown(html: string, selector?: string, url?: string): string {
  const $ = cheerio.load(html)
  const isWechat = url?.includes('mp.weixin.qq.com')

  // 移除不需要的元素
  $('script, style, nav, footer, aside, .ads, #ads').remove()

  // 微信公众号文章特殊处理
  if (isWechat) {
    // 移除微信底部UI元素
    $('#js_pc_qr_code').remove()
    $('#js_profile_qrcode').remove()
    $('.qr_code_pc_outer').remove()
    $('.rich_media_tool').remove()
    $('.rich_media_area_extra').remove()
    $('#js_tags').remove()
    $('#js_view_source').remove()
    $('.wx_follow_nickname').remove()
    $('.reward_area').remove()
    $('#content_bottom_area').remove()
    $('#js_temp_bottom_area').remove()

    // 提取微信文章主体内容
    const wechatContent = $('#js_content').html()
    if (wechatContent) {
      let md = turndown.turndown(wechatContent)
      // 清理微信特有的冗余文字
      md = cleanWechatText(md)
      return md
    }
  }

  // 如果指定了选择器，只提取该部分
  let content: string = $.html()
  if (selector && $(selector).length > 0) {
    content = $(selector).html() || $.html()
  } else {
    // 尝试找主要内容区域
    const mainSelectors = [
      'article',
      'main',
      '.content',
      '.post',
      '.article',
      '#content',
      '#main',
    ]
    let found = false
    for (const sel of mainSelectors) {
      if ($(sel).length > 0) {
        content = $(sel).html() || ''
        found = true
        break
      }
    }
    if (!found) {
      content = $('body').html() || $.html()
    }
  }

  return turndown.turndown(content)
}

function cleanWechatText(text: string): string {
  // 移除微信特有的冗余内容
  const patterns = [
    // 底部操作提示
    /预览时标签不可点/g,
    /微信扫一扫\s*关注该公众号/g,
    /微信扫一扫\s*使用小程序/g,
    /微信扫一扫可打开此内容[，,\s]*使用完整服务/gs,
    /继续滑动看下一个/g,
    /轻触阅读原文/g,
    /向上滑动看下一个/g,
    /× 分析/g,
    /作者头像/g,
    // 按钮链接
    /\[知道了\]\(javascript:;?\)/g,
    /\[取消\]\(javascript:void\(0\);?\)/g,
    /\[允许\]\(javascript:void\(0\);?\)/g,
    // 底部乱码式文字
    /：[\s,，。]*视频\s*小程序\s*赞[\s,，]*轻点两下取消赞[\s,，]*在看[\s,，]*轻点两下取消在看[\s,，]*分享[\s,，]*留言[\s,，]*收藏[\s,，]*听过/gs,
    /[：:]\s*[,，\s]+[,，\s。]+视频.*?听过/gs,
    // 关注区域
    /🙋‍♀️\s*关注我们/g,
    /关注我们/g,
    // 公众号名称（在文章末尾单独出现的）
    /\n+印记中文\n*/g,
  ]

  let cleaned = text
  for (const pattern of patterns) {
    cleaned = cleaned.replace(pattern, '')
  }

  // 移除末尾的图片链接（通常是公众号头像等）
  cleaned = cleaned.replace(
    /!\[.*?\]\(http:\/\/mmbiz\.qpic\.cn\/.*?\)\s*$/g,
    ''
  )

  // 清理多余的空行
  cleaned = cleaned.replace(/\n{3,}/g, '\n\n')

  return cleaned.trim()
}

async function processUrl(url: string, config: Config): Promise<FetchResult> {
  try {
    console.log(`正在抓取: ${url}`)

    const { html, title } = await fetchPage(url, config.options?.userAgent)
    const markdown = htmlToMarkdown(html, config.options?.selector, url)

    // 添加元信息
    const fullMarkdown = `# ${title}\n\n> 原文链接: ${url}\n> 抓取时间: ${new Date().toLocaleString(
      'zh-CN'
    )}\n\n---\n\n${markdown}`

    return {
      url,
      title,
      markdown: fullMarkdown,
      success: true,
    }
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : String(error)
    console.error(`抓取失败 ${url}: ${errorMessage}`)
    return {
      url,
      title: '',
      markdown: '',
      success: false,
      error: errorMessage,
    }
  }
}

async function saveMarkdown(
  result: FetchResult,
  outputDir: string
): Promise<string> {
  const filename = sanitizeFilename(result.title) + '.md'
  const filepath = path.join(outputDir, filename)

  fs.writeFileSync(filepath, result.markdown, 'utf-8')
  console.log(`已保存: ${filepath}`)

  return filepath
}

async function main(): Promise<void> {
  // 读取配置文件
  const configPath = process.argv[2] || 'urls.json'

  if (!fs.existsSync(configPath)) {
    console.error(`配置文件不存在: ${configPath}`)
    console.log('\n用法: npx ts-node src/index.ts [配置文件路径]')
    console.log('默认配置文件: urls.json')
    process.exit(1)
  }

  const config: Config = JSON.parse(fs.readFileSync(configPath, 'utf-8'))

  // 创建输出目录
  const outputDir = path.resolve(config.outputDir || './output')
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true })
  }

  console.log(`\n开始抓取 ${config.urls.length} 个网页...\n`)

  const results: FetchResult[] = []
  const delay = config.options?.delay || 1000

  for (let i = 0; i < config.urls.length; i++) {
    const url = config.urls[i]
    const result = await processUrl(url, config)
    results.push(result)

    if (result.success) {
      await saveMarkdown(result, outputDir)
    }

    // 请求间隔，避免被封
    if (i < config.urls.length - 1) {
      await sleep(delay)
    }
  }

  // 输出统计
  const successCount = results.filter((r) => r.success).length
  const failCount = results.filter((r) => !r.success).length

  console.log('\n========== 完成 ==========')
  console.log(`成功: ${successCount}`)
  console.log(`失败: ${failCount}`)

  if (failCount > 0) {
    console.log('\n失败的URL:')
    results
      .filter((r) => !r.success)
      .forEach((r) => console.log(`  - ${r.url}: ${r.error}`))
  }

  console.log(`\n输出目录: ${outputDir}`)
}

main().catch(console.error)

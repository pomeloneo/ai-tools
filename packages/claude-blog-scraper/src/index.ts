import axios from 'axios';
import * as cheerio from 'cheerio';
import TurndownService from 'turndown';
import fs from 'fs-extra';
import path from 'path';
import { URL } from 'url';

const rawUrls = [
    "https://claude.com/blog/category/agents",
    "https://claude.com/blog/category/claude-code",
    "https://claude.com/blog/category/enterprise-ai",
    "https://claude.com/blog/category/announcements",
    "/blog/cowork-research-preview",
    "/blog/how-enterprises-are-building-ai-agents-in-2026",
    "/blog/improving-frontend-design-through-skills",
    "/blog/building-ai-agents-in-financial-services",
    "/blog/claude-code-on-the-web",
    "/blog/claude-and-slack",
    "/blog/claude-for-chrome",
    "/blog/how-anthropic-teams-use-claude-code",
    "/blog/integrations",
    "/blog/max-plan",
    "/blog-product/claude-enterprise",
    "/blog-usecases/agents",
    "/blog-usecases/business",
    "/blog-usecases/financial-services",
    "/blog-usecases/productivity",
    "/blog-usecases/sales",
    "/blog-usecases/legal",
    "/blog/cowork-plugins",
    "#",
    "/blog-product/claude-code",
    "/blog/complete-guide-to-building-skills-for-claude",
    "/blog-usecases/coding",
    "/blog/contribution-metrics",
    "/blog/how-leading-retailers-are-turning-ai-pilots-into-enterprise-wide-transformation",
    "/blog-product/claude-apps",
    "/blog-usecases/work",
    "/blog/claude-team-updates",
    "/blog-usecases/content-creation",
    "/blog-usecases/design",
    "/blog/interactive-tools-in-claude",
    "/blog/how-anthropic-uses-claude-marketing",
    "/blog-product/claude-developer-platform",
    "/blog/building-multi-agent-systems-when-and-how-to-use-them",
    "/blog/building-agents-with-skills-equipping-agents-for-specialized-work",
    "/blog/eight-trends-defining-how-software-gets-built-in-2026",
    "/blog/extending-claude-capabilities-with-skills-mcp-servers",
    "/blog/making-claude-a-better-electrical-engineer",
    "/blog/how-to-configure-hooks",
    "/blog/how-anthropic-uses-claude-legal",
    "/blog/claude-code-and-slack",
    "/blog/key-benefits-transitioning-agentic-coding",
    "/blog/using-claude-md-files",
    "/blog/your-thinking-partner",
    "/blog/how-to-create-skills-key-steps-limitations-and-examples",
    "/blog/building-companies-with-claude-code",
    "/blog/skills-explained",
    "/blog/best-practices-for-prompt-engineering",
    "/blog/building-ai-agents-for-startups",
    "/blog/what-is-model-context-protocol",
    "/blog/introduction-to-agentic-coding",
    "/blog-usecases/health-care-and-life-sciences",
    "/blog/building-ai-agents-in-healthcare-and-life-sciences",
    "/blog/how-brex-improves-code-quality-and-productivity-with-claude-code",
    "/blog/fix-software-bugs-faster-with-claude",
    "/blog/integrate-apis-seamlessly",
    "/blog/equipping-agents-for-the-real-world-with-agent-skills",
    "/blog/productivity-platforms",
    "/blog/skills",
    "/blog/scaling-agentic-coding",
    "/blog/build-responsive-web-layouts",
    "/blog/claude-code-plugins",
    "/blog/beyond-permission-prompts-making-claude-code-more-secure-and-autonomous",
    "/blog/optimize-code-performance-quickly",
    "/blog/driving-ai-transformation-with-claude",
    "/blog/building-agents-with-the-claude-agent-sdk",
    "/blog/context-management",
    "/blog/claude-now-available-in-microsoft-365-copilot",
    "/blog/create-files",
    "/blog/claude-code-and-new-admin-controls-for-business-plans",
    "/blog/prompt-caching",
    "/blog/1m-context",
    "/blog/automate-security-reviews-with-claude-code",
    "/blog/claude-powered-artifacts",
    "/blog/connectors-directory",
    "/blog-usecases/learning",
    "/blog/introducing-citations-api",
    "/blog/claude-code-remote-mcp",
    "/blog/agent-capabilities-api",
    "/blog/web-search-api",
    "/blog/research",
    "/blog-usecases/government",
    "/blog/claude-on-google-cloud-fedramp-high",
    "/blog/web-search",
    "/blog/token-saving-updates",
    "/blog/upgraded-anthropic-console",
    "/blog/trainium2-and-distillation",
    "/blog/analysis-tool",
    "/blog/prompt-improver",
    "/blog/message-batches-api",
    "/blog/claude-for-enterprise",
    "/blog/workspaces",
    "/blog/artifacts",
    "/blog/android-app",
    "/blog/fine-tune-claude-3-haiku",
    "/blog/evaluate-prompts",
    "/blog/tool-use-ga",
    "/blog/prompt-generator",
    "/blog/team-plan-and-ios",
    "/blog/claude-2-1-prompting",
    "/blog/amazon-bedrock-general-availability",
    "/blog/claude-2-amazon-bedrock",
    "https://assets.anthropic.com/m/66daaa23018ab0fd/original/Anthropic-enterprise-ebook-digital.pdf",
    "/blog",
    "/ja-jp/blog",
    "/de-de/blog",
    "/fr-fr/blog",
    "/ko-kr/blog"
];

const OUTPUT_DIR = path.join(__dirname, '../output');
const PDF_DIR = path.join(OUTPUT_DIR, 'pdfs');
const BASE_URL = 'https://claude.com';

const turndownService = new TurndownService({
    headingStyle: 'atx',
    codeBlockStyle: 'fenced'
});

async function main() {
    await fs.ensureDir(OUTPUT_DIR);
    await fs.ensureDir(PDF_DIR);

    const processedUrls = new Set<string>();
    const processedPdfs = new Set<string>();

    for (const rawUrl of rawUrls) {
        if (rawUrl === '#' || rawUrl.includes('/blog/category/') || rawUrl.endsWith('/blog') || rawUrl.endsWith('/blog/')) {
            console.log(`Skipping: ${rawUrl}`);
            continue;
        }

        // Handle full URLs and relative paths
        let url = rawUrl;
        if (!url.startsWith('http')) {
            url = `${BASE_URL}${rawUrl.startsWith('/') ? '' : '/'}${rawUrl}`;
        }

        if (processedUrls.has(url)) continue;
        processedUrls.add(url);

        console.log(`Processing: ${url}`);

        try {
            if (url.endsWith('.pdf')) {
                const fileName = path.basename(url);
                const filePath = path.join(PDF_DIR, fileName); // Save to PDF_DIR
                const response = await axios({
                    url,
                    method: 'GET',
                    responseType: 'stream'
                });
                const writer = fs.createWriteStream(filePath);
                response.data.pipe(writer);
                await new Promise<void>((resolve, reject) => {
                    writer.on('finish', () => resolve());
                    writer.on('error', reject);
                });
                console.log(`Saved PDF: ${fileName}`);
            } else {
                const response = await axios.get(url, {
                    headers: {
                        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
                    }
                });

                const $ = cheerio.load(response.data);

                // Try to find the content container
                // Based on previous analysis: w-richtext, article, or similar
                let contentHtml = '';
                let contentElement: cheerio.Cheerio<any> | null = null;

                // Selectors to try in order of preference
                const selectors = [
                    '.u-rich-text-blog', // Most specific for blog content
                    '.w-richtext',
                    '.blog_post_content_wrap',
                    'article',
                    'main',
                    '.post-content',
                    '#main-content'
                ];

                for (const selector of selectors) {
                    const element = $(selector);
                    if (element.length > 0) {
                        contentElement = element;
                        // Remove empty elements or hidden ones if necessary
                        element.find('.w-condition-invisible').remove();
                        contentHtml = element.html() || '';
                        break;
                    }
                }

                if (!contentHtml || !contentElement) {
                    console.warn(`Could not find content for ${url}, skipping.`);
                    const errorMsg = `No content found for: ${url}\n`;
                    await fs.appendFile(path.join(OUTPUT_DIR, 'error_logs.txt'), errorMsg);
                    continue;
                }

                // Extract PDF links from the content
                const pdfLinks: string[] = [];
                // Look for PDF links in the entire parsed body, not just the main content area
                // Sometimes PDF links might be in footers or related sections
                $('a').each((_, el) => {
                    const href = $(el).attr('href');
                    if (href && (
                        href.toLowerCase().endsWith('.pdf') || 
                        href.toLowerCase().includes('.pdf?') // Handle query params like ?hsLang=en
                    )) {
                        pdfLinks.push(href);
                    }
                });

                // Download PDFs found in the content
                for (const pdfLink of pdfLinks) {
                    try {
                        let pdfUrl = pdfLink;
                        if (!pdfUrl.startsWith('http')) {
                            // Resolve relative URLs if necessary (though usually they are absolute in content)
                            // Assuming most are absolute or relative to domain root, but let's be safe
                            if (pdfUrl.startsWith('/')) {
                                pdfUrl = `${BASE_URL}${pdfUrl}`;
                            } else {
                                // relative to current page? unlikely for PDFs usually, but logic could be added here
                            }
                        }

                        if (processedPdfs.has(pdfUrl)) continue;
                        processedPdfs.add(pdfUrl);

                        const pdfFileName = path.basename(new URL(pdfUrl).pathname);
                        const pdfFilePath = path.join(PDF_DIR, pdfFileName);

                        console.log(`Downloading PDF found in content: ${pdfUrl}`);

                        const pdfResponse = await axios({
                            url: pdfUrl,
                            method: 'GET',
                            responseType: 'stream',
                            timeout: 15000, // 15 seconds timeout
                            headers: {
                                'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
                            }
                        });
                        
                        const writer = fs.createWriteStream(pdfFilePath);
                        pdfResponse.data.pipe(writer);
                        await new Promise<void>((resolve, reject) => {
                            writer.on('finish', () => resolve());
                            writer.on('error', (err) => {
                                writer.close();
                                reject(err);
                            });
                        });
                        console.log(`Saved embedded PDF: ${pdfFileName}`);

                    } catch (err) {
                        console.error(`Failed to download embedded PDF ${pdfLink}:`, err instanceof Error ? err.message : String(err));
                    }
                }

                let title = $('title').text().trim().replace(/ \| Claude$/, '');
                // Fallback to h1 if title is missing or generic
                const h1 = $('h1').text().trim();
                if (h1) title = h1;

                if (!title) {
                    title = path.basename(url);
                }

                const markdown = turndownService.turndown(contentHtml);

                // Add Front Matter
                const frontMatter = `---
title: "${title.replace(/"/g, '\\"')}"
url: "${url}"
---

`;
                const finalMarkdown = `${frontMatter}# ${title}\n\n${markdown}`;

                // Generate filename from Title
                // Sanitize filename
                let fileName = title.replace(/[<>:"/\\|?*]+/g, '-').replace(/\s+/g, '_').substring(0, 100);
                if (!fileName.endsWith('.md')) {
                    fileName += '.md';
                }

                await fs.writeFile(path.join(OUTPUT_DIR, fileName), finalMarkdown);
                console.log(`Saved Markdown: ${fileName}`);
            }
        } catch (error) {
            const errorMsg = `Failed to process ${url}: ${error instanceof Error ? error.message : String(error)}\n`;
            console.error(errorMsg.trim());
            await fs.appendFile(path.join(OUTPUT_DIR, 'error_logs.txt'), errorMsg);
        }

        // Simple rate limiting
        await new Promise(resolve => setTimeout(resolve, 500));
    }
}

main().catch(console.error);

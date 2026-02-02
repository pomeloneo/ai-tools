# Node 中文周刊 #206 - 用 pnpm 构建供应链安全防线实战

> 原文链接: http://mp.weixin.qq.com/s?__biz=MzIzOTkwMjM0OQ==&mid=2247545047&idx=1&sn=f63f6fbeb7585069feea4e3f4bde53e9&chksm=e9217b35de56f2234b294719a34314619c2323c5b96743b0dd27dc114c091e56e0616d092591#rd
> 抓取时间: 2026/2/2 23:51:05

---

> 本期看点：分享使用 pnpm 免受 npm 供应链攻击的实践，Node.js 即将发布安全更新修复 5 个安全漏洞，npm 发布流程全方位加固指南，TypeScript 7 进展预计性能提升超过 10 倍，Platformatic Kafka 客户端性能提升 223%。

> 编辑：TimLi

🔥 本周热门

**我们是如何保护新闻编辑部免受 npm 供应链攻击的** —— **Seattle Times** 的一位软件工程师分享了他们最近试用 pnpm 替代 `npm`，尤其看重它在客户端安全方面的能力。虽然不是正式的案例分析，但技术细节讲得挺清楚，如果你所在的团队也想提升依赖管理安全性，这篇文章值得一读。

**长按识别二维码查看原文**   

https://pnpm.io/blog/2025/12/05/newsroom-npm-supply-chain-security

Ryan Sobol

**⚠️  Node.js 2025 年 12 月 15 日安全发布通告** —— Node.js 即将于下周一（或之后几天）发布 v25.x、24.x、22.x 和 20.x 的新版本，用于修复 5 个安全漏洞（其中 3 个为高危）。我们会在下期周报及时分享更多信息。

**长按识别二维码查看原文**   

https://nodejs.org/en/blog/vulnerability/december-2025-security-releases

The Node.js Project

**不再用 Token：npm 发布流程全方位加固** —— 最近 npm 接连曝出多起安全事件，11ty 作者 Zach 做了全面自查，分享了一些适合所有包发布者参考的安全小技巧。

**长按识别二维码查看原文**   

https://www.zachleat.com/web/npm-security/

Zach Leatherman

**TypeScript 7 进展** —— v6.0 会是 TypeScript 最后一个基于 JavaScript 的版本，之后官方准备推出用 Go 实现的原生新版本 v7.0，预计速度提升将超过 10 倍。

**长按识别二维码查看原文**   

https://devblogs.microsoft.com/typescript/progress-on-typescript-7-december-2025/

Daniel Rosenwasser (Microsoft)

**我们怎样让 `@platformatic/kafka` 性能提升 223%** —— Platformatic 去年推出的 Kafka 客户端 刚面世时，现有方案兼容性和性能都不尽如人意，于是他们自己优化了多处瓶颈，文中有详细测试方法和动手细节，值得借鉴。

**长按识别二维码查看原文**   

https://blog.platformatic.dev/how-we-made-platformatickafka-223-faster-and-what-we-learned-along-the-way

Paolo Insogna (Platformatic)

📄 **用 `fs.promises.glob` 替换 `glob-all` 的最佳实践** SiteLint

**长按识别二维码查看原文**   

https://www.sitelint.com/blog/replacing-glob-all-with-fs-promises-glob-in-node-js

📄 **合理利用 JSDoc 进行 JavaScript 类型标注的细节** Jared White

**长按识别二维码查看原文**   

https://thathtml.blog/2025/12/nuances-of-typing-with-jsdoc/

📄 **用 GitHub Copilot Spaces 更快排查故障** Andrea Griffiths (GitHub)

**长按识别二维码查看原文**   

https://github.blog/ai-and-ml/github-copilot/how-to-use-github-copilot-spaces-to-debug-issues-faster/

🛠  代码与工具

**ts-exec：用 SWC 在 Node 上运行 TypeScript** —— Adonis 创作者推出的新方案，让你在 Node 上跑 TypeScript。虽然 Node 22.18+ 本身支持了 类型剥离（type stripping），但 `ts-exec` 能直接支持 JSX、装饰器等特性，比 ts-node 和 tsx 更有优势。

**长按识别二维码查看原文**   

https://github.com/poppinss/ts-exec

Harminder Virk

**iceberg-js：Apache Iceberg 的 JavaScript 客户端** —— 一个极简、厂商无关的 JavaScript 客户端，专门对接 Apache Iceberg 的 REST Catalog API。

**长按识别二维码查看原文**   

https://supabase.com/blog/introducing-iceberg-js

Katerina Skroumpelou (Supabase)

**Remend：自动恢复损坏的流式 Markdown 内容** —— 让你应用程序能智能处理不完整的 Markdown，尤其 LLM 等生成内容很有用。代码来自 Vercel 的 Streamdown 库，是 `react-markdown` 的升级替代，专门用于 AI 场景下的 Markdown 流式渲染。

**长按识别二维码查看原文**   

https://vercel.com/changelog/new-npm-package-for-automatic-recovery-of-broken-streaming-markdown

Hayden Bleasel (Vercel)

📢  其他生态

这里还有一些本周值得关注的生态圈事件：

-   Anthropic（以 Claude LLM 闻名）收购了 **Bun** JavaScript 运行时的开发公司，Bun 之后依然会保持开源哦。
    
    **长按识别二维码查看原文**   
    
    https://bun.com/blog/bun-joins-anthropic
    
-   还有条 Bun 相关：新版 Bun v1.3.4 支持 `URLPattern`、测试用的可控定时器，还内置了 `console.log` 支持 `%j` 格式化，和 Node 一样好用。
    
    **长按识别二维码查看原文**   
    
    https://bun.sh/blog/bun-v1.3.4
    
-   🎧 微软推出了 VS Code Insiders 播客，团队会聊聊新功能、相关生态，内容比发行说明还丰富。
    
    **长按识别二维码查看原文**   
    
    https://code.visualstudio.com/blogs/2025/12/03/introducing-vs-code-insiders-podcast
    
-   Gleb Bahmutov 这月一直连载 **Cypress vs Playwright** 日历专栏，天天都有新干货。
    
    **长按识别二维码查看原文**   
    
    https://cypresstips.substack.com/
    
-   Oxlint 推出了类型感知的 lint，目前还在 alpha 测试，体验感兴趣可以试试。
    
    **长按识别二维码查看原文**   
    
    https://oxc.rs/blog/2025-12-08-type-aware-alpha
    
-   🎂 JavaScript 正好在 30 年前的新闻稿里首次对外公布。
    
    **长按识别二维码查看原文**   
    
    https://web.archive.org/web/20070916144913/http://wp.netscape.com/newsref/pr/newsrelease67.html
    
      
    

**版本发布：**

-   **GitHub Actions** 的 setup-node 6.1 —— 让 GitHub Actions 安装 Node 的步骤有个小幅升级。
    
-   **🤖 OpenAI Node v6.10** —— OpenAI 官方 Node 库更新，支持 `gpt-5.1-codex-max`、模型 compaction 等新功能。
    
-   **jsdom v27.3** —— 纯 JS 实现的 WHATWG DOM 和 HTML 标准更新。
    
-   **📸 exiftool-vendored.js v34.0** —— 用 ExifTool 获取照片元数据的最佳选择升级啦。
    
-   **Mongoose v9.0.1** —— MongoDB 常用对象建模库发布新版本。
    
-   **hot-shots v11.4** —— 支持 statsd、DogStatsD、Telegraf 的 Node.js 客户端。
    
-   **pnpm v10.25** —— 高效的包管理器，又更加好用啦。
    
-   **Prisma v7.1** —— Node.js/TypeScript 的热门 ORM 工具，更新至 7.1。
    
-   **Prettier v3.7** —— 代码格式化神器再添新特性！
    
-   **Drizzle ORM v0.45**
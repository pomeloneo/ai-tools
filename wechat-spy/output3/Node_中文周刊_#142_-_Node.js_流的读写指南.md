# Node 中文周刊 #142 - Node.js 流的读写指南

> 原文链接: http://mp.weixin.qq.com/s?__biz=MzIzOTkwMjM0OQ==&mid=2247533522&idx=1&sn=8ca287eea361c6cd6a9cca8300162917&chksm=e9210830de568126e0260831d312f3df8ffd6b01fcf25751f4e26efcc8d29320f3e6a9953343#rd
> 抓取时间: 2026/2/2 23:52:21

---

> 本期看点：来自 Fastify 创始人（也是 Node.js TSC 成员）Matteo 的最新文章说明了在合适的场景下，使用 Node 强大的数据流功能的好处，以及如何处理背压和错误管理。

> 编辑：TimLi

🔥 本周热门

**Node.js 流的读写指南** — 这是来自 Fastify 创始人（也是 Node.js TSC 成员）Matteo 的最新文章。文中说明了使用 Node 强大的 数据流功能 的好处，以及如何处理背压和错误管理。

**长按识别二维码查看原文**   

https://blog.platformatic.dev/a-guide-to-reading-and-writing-nodejs-streams

Matteo Collina

**`node:sqlite` 的开发进展** — 上周我们介绍了将 SQLite 和客户端库包含到 Node 正式版中的努力。事情进展迅速，这个功能提议将在即将发布的 Node v22.5 中包含。你可以在 这个 CodeSandbox 示例 中看到它的工作方式。

**长按识别二维码查看原文**   

https://github.com/nodejs/node/pull/53752#issuecomment-2227295638

Node.js GitHub 仓库  

**NPM 供应链安全：为何我们对未来充满乐观** — 我们经常链接到关于 npm 被用于分发恶意软件、恶意包等的故事，但 Robat 反思了通过双因素验证（2FA）、包来源和社区努力使情况改进了多少。

**长按识别二维码查看原文**   

https://blog.scottlogic.com/2024/07/09/supply-chain-security-in-npm-we-can-be-optimistic-about-the-future.html

Robat William

⚠️ 相关新闻，Socket 报告 一个未验证的 npm 账号接管漏洞 被在暗网论坛上出售。

**长按识别二维码查看原文**   

https://socket.dev/blog/unverified-npm-account-takeover-vulnerability-for-sale-on-dark-web-forum

**开发者评测 Snapdragon X 笔记本** — 具体来说是联想 Yoga Slim 7x。这是一篇面向开发者的新市场选项的评测。虽然不全是关于 Node，但他确实尝试在 Windows on ARM 上运行 Node，并遇到了一些初期问题。

**长按识别二维码查看原文**   

https://www.wezm.net/v2/posts/2024/yoga-7x-snapdragon-developer-review/

Wesley Moore

**📄 为什么 `page.goto()` 让你的 Playwright 测试变慢** Stefan Judis

**长按识别二维码查看原文**   

https://www.checklyhq.com/blog/why-page-goto-is-slowing-down-your-playwright-test/

**📄 Playwright vs. Puppeteer：哪个更好？** Lekh 和 Vasilis (Apify)

**长按识别二维码查看原文**   

https://blog.apify.com/playwright-vs-puppeteer/

**📄 使用 Kafka 和 Node 构建全栈应用** Lucia Cerchie (Confluent)

**长按识别二维码查看原文**   

https://www.confluent.io/blog/building-full-stack-app-with-kafka-and-nodejs/

**快讯：**

-   Deno v1.45 已发布，并继续显著提升其对 Node.js 的兼容性。它还增加了对工作空间和 monorepo 的支持。
    
    **长按识别二维码查看原文**   
    
    https://deno.com/blog/v1.45
    
-   Node 的 subreddit 讨论了一个古老的问题：MongoDB vs. Postgres？
    
    **长按识别二维码查看原文**   
    
    https://www.reddit.com/r/node/comments/1e1r5tu/people\_who\_work\_on\_large\_scale\_applications\_what/?rdt=45651
    
-   npm 注册表已经开始 从包版本元数据中删除 README，以减少包 packuments 的大小。
    
    **长按识别二维码查看原文**   
    
    https://github.blog/changelog/2024-07-09-leaner-npm-packument-metadata-contents/
    
-   Tabular-JSON 是一个提案中的 JSON 超集，增加了对类似 CSV 的表格和可选引号的支持。
    
    **长按识别二维码查看原文**   
    
    https://tabular-json.org/
    
      
    

🛠 代码与工具

**Micro Agent：一个为你编写代码的 AI Agent** — 当然，你可以让 ChatGPT、Copilot 或 Claude 为你编写代码，但你知道有时结果如何……有没有更好的方法？Micro Agent 是一个基于 Node 的工具，它先编写测试用例，然后反复改进解决方案，直到测试通过。

**长按识别二维码查看原文**   

https://github.com/BuilderIO/micro-agent

Builder․io

💡 Steve Sewell 和 Vishwas Gopinath 在这里详细介绍了它的工作原理。

**长按识别二维码查看原文**   

https://www.builder.io/blog/micro-agent

**why-is-node-running：找出 Node 为什么在运行** — 大多数时候你知道为什么你的应用在运行，但当你不知道时，这可以帮助你找出是什么让它继续运行。

**长按识别二维码查看原文**   

https://github.com/mafintosh/why-is-node-running

Mathias Buus

**Poku 2.0：一个跨平台的 JS 测试运行器** — Poku 的理念 是“将 JavaScript 的本质带回测试”。它可以在 Node、Bun 和 Deno 上以同样的方式运行，并自动检测 ESM、CommonJS 和 TypeScript。

**长按识别二维码查看原文**   

https://poku.io/

Weslley Araújo

**tsoa：使用 TypeScript 构建符合 OpenAPI 的 REST API** — 使用基于 TypeScript 的控制器和模型作为 API 的单一信息源，然后从中生成 OpenAPI 规范。

**长按识别二维码查看原文**   

https://github.com/lukeautry/tsoa

Luke Autry  

**版本发布：**

-   **ESLint v9.7.0** – 现在支持正则表达式中的 ECMAScript 2025 重复捕获组。
    
-   **Typegoose v12.6** – 将 Mongoose 8.5 模型定义为 TypeScript 类。
    
-   **Path-to-RegExp v7.1** – 将路径字符串（例如 `/user/:name`）转换为正则表达式。
    
-   **xero-node v9.0** – 流行的 Xero 会计系统的 Node SDK。
    
-   **ClickHouse JS v1.4** – 官方的 ClickHouse DB JS 客户端。
    
-   **tsdav v2.1** – WebDAV、CALDAV 和 CARDDAV 客户端库。
    
-   **NestJS Throttler v6.0** – NestJS 的速率限制模块。
    
-   **Polyglot.js v2.6** – Airbnb 的 I18n 助手库。
    
-   **Soap v1.1** – 一个 SOAP 客户端和服务器库。
    

🙋🏻‍♀️
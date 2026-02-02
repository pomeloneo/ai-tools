# Node 中文周刊 #149 - Express 5.0 接近发布

> 原文链接: http://mp.weixin.qq.com/s?__biz=MzIzOTkwMjM0OQ==&mid=2247534821&idx=1&sn=e09b8d89bb3103f46f2520e1e449e22c&chksm=e9210307de568a1194f08f4a1ceb675843c1403597feb897d59dc183b6757ba27ee36f49b59f#rd
> 抓取时间: 2026/2/2 23:52:13

---

> 本期看点：本期内容包括 Express 5.0 发布、`setImmediate()` 对比 `setTimeout()`、如何创建每周 Google Analytics 报告并发布到 Slack 等。

> 编辑：TimLi

🔥 本周热门

**Express.js v5.0 接近发布** —— 在经历了一段时间的停滞后，Express 今年早些时候重新活跃起来，制定了一个推动 Express 前进的宏伟计划。这个过程的第一个成果就是 v5.0 版本。新版本将 Node 18 作为最低支持版本，改进了错误处理，优化了项目工具，引入了威胁模型，并更新了许多依赖项。

**长按识别二维码查看原文**   

https://github.com/expressjs/express/releases/tag/v5.0.0

Wesley Todd

💡 注意，目前还没有官方发布公告，虽然已经在 Github 发布了 5.0 源码，但是在 npm 注册表上，5.0 版本仍被标记为 `next`，所以安装时请注意这一点。

**长按识别二维码查看原文**   

https://www.npmjs.com/package/express?activeTab=versions

**`setImmediate()` 对比 `setTimeout()`** —— 虽然 `setImmediate` 在浏览器中被认为已过时，但在 Node 中它的不同行为仍然有用武之地。

**长按识别二维码查看原文**   

https://www.trevorlasn.com/blog/setimmediate-vs-settimeout-in-javascript

Trevor Lasn

**用 4 美元/月的 Hetzner 虚拟机来避免"无服务器税"？** —— 对于许多用例来说，启用一个便宜的服务器可能比使用无服务器方案更经济实惠、更方便。

**长按识别二维码查看原文**   

https://shipixen.com/tutorials/self-host-web-app-on-a-hetzner-virtual-machine

Shipixen

**将 Slonik 集成到 Express.js 中** —— Slonik 是一个类型安全的 Node Postgres 客户端，让你能以可组合的方式构建 SQL 查询。

**长按识别二维码查看原文**   

https://contra.com/p/bgA66gkW-integrating-slonik-with-expressjs

Gajus Kuizinas

**📄 如何创建每周 Google Analytics 报告并发布到 Slack** Paul Scanlon

**长按识别二维码查看原文**   

https://www.smashingmagazine.com/2024/09/how-create-weekly-google-analytics-report-posts-slack/

**📄 保护 Node 应用程序免受供应链攻击** Leonardo Zanivan (Auth0)

**长按识别二维码查看原文**   

https://auth0.com/blog/secure-nodejs-applications-from-supply-chain-attacks/

**📄 使用 pgvector 和 JavaScript 实现过滤语义搜索** Team Timescale

**长按识别二维码查看原文**   

https://www.timescale.com/blog/implementing-filtered-semantic-search-using-pgvector-and-javascript/

**📄 如何使用 Playwright 检测失效链接** Stefan Judis (Checkly)

**长按识别二维码查看原文**   

https://www.checklyhq.com/blog/how-to-detect-broken-links-with-playwright/

**快讯：**

-   TypeScript v5.6 已发布，全面支持迭代器助手，支持任意模块标识符，新增 `--noUncheckedSideEffectImports` 选项以导入模块而不导入任何值，并改进了 Node 中 CommonJS 和 ES 模块的处理。
    
    **长按识别二维码查看原文**   
    
    https://devblogs.microsoft.com/typescript/announcing-typescript-5-6/
    
-   Cloudflare Workers 大幅改进了对 npm 包的支持。这个流行的无服务器平台现在支持更多 Node.js API。
    
    **长按识别二维码查看原文**   
    
    https://blog.cloudflare.com/more-npm-packages-on-cloudflare-workers-combining-polyfills-and-native-code/
    
-   pg-boss 是一个基于 Postgres 的流行 Node 后台任务系统。Wasp 团队采访了它的维护者，他分享了更多关于它存在的原因、工作原理以及为什么值得关注 pg-boss v10.0 的细节。
    
    **长按识别二维码查看原文**   
    
    https://github.com/timgit/pg-boss
    
      
    

🛠 代码与工具

**Jimp v1.6：无需原生依赖的 Node 图像处理库** —— 大多数图像库，如功能强大的 Sharp，都依赖外部库来完成繁重工作。但 Jimp 可以独立处理 BMP、GIF、JPEG、PNG 和 TIFF 格式，实现模糊、颜色调整、调整大小、旋转等功能。GitHub 仓库。

**长按识别二维码查看原文**   

https://jimp-dev.github.io/jimp/

jimp 贡献者

💡 作为纯 JavaScript 库，Jimp 也可以在浏览器中使用。

**长按识别二维码查看原文**   

https://jimp-dev.github.io/jimp/guides/browser/

**jsdiff v7.0：JavaScript 文本差异实现** —— 可以通过多种方式比较字符串的差异，包括创建补丁。这里有一个在线演示。

**长按识别二维码查看原文**   

https://github.com/kpdecker/jsdiff

Kevin Decker

**Rockpack v4.4：另一种 React 应用程序构建器** —— 类似于 Create React App，目标是尽可能缩短项目设置时间，但 Rockpack 在如何推进方面有不同的观点，并包含了许多想法，包括服务器端渲染、代码检查和测试。GitHub 仓库。

**长按识别二维码查看原文**   

https://alexsergey.github.io/rockpack/

Alex Sergey

**node-html-to-image v5.0：从 HTML 生成图像** —— 封装了 Puppeteer，还允许你使用 Handlebars 为 HTML 添加额外的逻辑。

**长按识别二维码查看原文**   

https://github.com/frinyvonnick/node-html-to-image

Yvonnick Frin  

**版本发布：**

-   **create-fastify v5.0** – 快速生成 Fastify 项目。你甚至不需要先安装它，可以直接使用 `npm init fastify app_name_here`。
    
-   **file-type v19.5** – 检测文件、流或数据的文件类型。现在支持 WebVTT。
    
-   **better-sqlite v11.3** – 一种从 Node 使用 SQLite 的简洁方式。现在使用 SQLite 3.46.1。
    
-   **Faker v9.0** – 生成大量假数据。升级指南。
    
-   **pnpm v9.10** – 快速、高效的包管理器。
    
-   **ESLint v9.10** – 现在包含类型定义。
    
-   **ini v5.0** – npm 的 INI 文件解析器/序列化器。
    

🙋🏻‍♀️
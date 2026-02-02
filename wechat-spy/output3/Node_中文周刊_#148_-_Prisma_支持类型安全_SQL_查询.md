# Node 中文周刊 #148 - Prisma 支持类型安全 SQL 查询

> 原文链接: http://mp.weixin.qq.com/s?__biz=MzIzOTkwMjM0OQ==&mid=2247534644&idx=1&sn=e4459e370d4373e13a3d1879410758a5&chksm=e92103d6de568ac003276150f8d3f9e858b85b4e9efc53a02bf0e9f4adc7612cf3dda10be071#rd
> 抓取时间: 2026/2/2 23:52:14

---

> 本期看点：Prisma 发布了支持类型安全 SQL 查询的 v5.19.0 版本，Node 发布了 v22.8.0 版本，如何用 Atomic 在 Node 中进行多线程编程，以及和 Ryan Dahl 讨论 Deno 2。

> 编辑：TimLi

🔥 本周热门

**Prisma v5.19.0 现已支持"Typed SQL"** —— Prisma 是 Node.js / TypeScript 世界中流行的声明式驱动 ORM。其新版本使得以类型安全的方式编写原始 SQL 查询成为可能。

**长按识别二维码查看原文**   

https://www.prisma.io/blog/announcing-typedsql-make-your-raw-sql-queries-type-safe-with-prisma-orm

Nikolas Burk  

**Node v22.8.0（当前版本）发布** —— 这个版本刚好在我们点击"发送"之前发布！:-) 虽然改进较小，但还是有一些值得注意的地方，包括一个用于启用模块磁盘代码缓存的新 API（而不是使用 `NODE_COMPILE_CACHE` 环境变量），以及一种设置代码覆盖率测量所需阈值的方法。

**长按识别二维码查看原文**   

https://nodejs.org/en/blog/release/v22.8.0

Rafael Gonzaga

**使用 Atomics 在 Node.js 中进行多线程编程** —— Worker 线程使你能够编写多线程 Node 应用程序，但在它们之间共享资源可能很快变得棘手。Atomics 可以帮助你避免一些痛苦。

**长按识别二维码查看原文**   

https://pavel-romanov.com/multithreading-in-nodejs-using-atomics-for-safe-shared-memory-operations

Pavel Romanov

**▶ 与 Ryan Dahl 讨论 Deno 2** —— 与 Deno 创始人 Ryan Dahl（也是 Node 的原创始人）聊即将发布的 Deno 2.0、其新功能，以及它如何无缝集成流行框架如 Next.js。Ryan 分享了创建 Deno 的动机、其对简单性和安全性的强调，并就不断发展的 JavaScript 生态系统发表了看法。

**长按识别二维码查看原文**   

https://www.youtube.com/watch?v=tZBCq8Ijkgw

Syntax․fm

**如何使用 OpenTofu 和 GitHub Actions 将 Node 部署到 AWS Lambda** —— 有人在 Hacker News 上开玩笑说这是企业级部署 Node.js 应用程序的方式。虽然涉及很多工具，但这是许多开发者的现实，Meysam 详细介绍了各个步骤。

**长按识别二维码查看原文**   

https://developer-friendly.blog/blog/2024/09/02/how-to-deploy-nodejs-to-aws-lambda-with-opentofu--github-actions/

Meysam Azad  

**▶ 幕后：VS Code 的制作过程** —— 与两位在流行的基于 Electron 的编辑器工程团队工作的首席工程师进行的详细对话。

**长按识别二维码查看原文**   

https://www.youtube.com/watch?v=BDU63r4bS9Q

Holland、Rieken 和 Pasero（微软）

**为什么 Playwright 比 Selenium 更稳定** —— "Playwright 速度如此之快，以至于它从一开始就迫使你正确编写 UI 测试。而 Selenium 则不然。"

**长按识别二维码查看原文**   

https://justin.searls.co/links/2024-08-29-why-playwright-is-less-flaky-than-selenium/

Justin Searls

**我如何为 JavaScript 服务创建了一个 3.78MB 的 Docker 镜像** —— 这是一种相当非常规的方法。Shenzilong

**长按识别二维码查看原文**   

https://shenzilong.cn/record/How%20I%20Created%20a%203.78MB%20Docker%20Image%20for%20a%20JavaScript%20Service

**Sentry 如何在其 JavaScript SDK 上使用突变测试** Lukas Stracke（Sentry）

**长按识别二维码查看原文**   

https://sentry.engineering/blog/js-mutation-testing-our-sdks

**如何在使用 App Router 的 Next.js for Node 中处理错误** Antonello Zanini

**长按识别二维码查看原文**   

https://blog.appsignal.com/2024/08/28/how-to-handle-errors-in-nextjs-for-node-with-the-app-router.html

**Wasp 是 Web 开发的 JavaScript 版 Django 吗？** Sam Jakshtis（Wasp）

**长按识别二维码查看原文**   

https://wasp-lang.dev/blog/2024/08/20/django-vs-wasp

🛠 代码与工具

**yocto-spinner：微型终端加载动画** —— 来自模块开发大师 Sindre Sorhus 的新项目：一个微小的、尽可能简单的终端加载动画/进度控制。（'Yocto' 是一个公制前缀，比 nano、pico、femto、atto 甚至 zepto 还要小。）

**长按识别二维码查看原文**   

https://github.com/sindresorhus/yocto-spinner

Sindre Sorhus

**google-spreadsheet：Node 的 Google Sheets API 封装** —— 从 Node 操作 Google 在线电子表格，无论是在单元格、行、工作表还是文档级别。支持多种身份验证选项，你还可以导出表格以供下载。GitHub 仓库。

**长按识别二维码查看原文**   

https://theoephraim.github.io/node-google-spreadsheet/

Theo Ephraim

**Light My Request：假 HTTP 注入库** —— 将假的 HTTP 请求/响应注入到 Node HTTP 服务器中，用于模拟服务器逻辑、编写测试或调试。不使用套接字连接，因此可以在非活动服务器（未处于监听模式的服务器）上运行。

**长按识别二维码查看原文**   

https://github.com/fastify/light-my-request

Fastify

**multicast-stream：创建多个消费者可以独立使用的多播流** —— 本周我们从 Sindre 那里得到了两个新库。这个是一个多播流，允许多个消费者独立读取相同的数据。

**长按识别二维码查看原文**   

https://github.com/sindresorhus/multicast-stream

Sindre Sorhus  

**版本发布：**

-   **Path-to-RegExp v8.0** —— 将路径字符串（如 `/user/:name`）转换为正则表达式。
    
-   **Mongoose v8.6** —— 流行的 MongoDB 对象建模库。
    
-   **LogTape v0.5** —— 适用于 Deno、Node、Bun 和浏览器的无依赖日志库。
    
-   **Wasp v0.14.1** —— Wasp 是一个使用 Node、React 和 Prisma 的类 Rails 框架。
    
-   **Discord.js v14.16** —— 与 Discord API 交互的官方库。
    
-   **NVM Desktop v3.4** —— NVM的桌面版本。
    
-   **zx v8.1.5** —— Google 的更好的 Node shell 脚本工具。
    
-   **hyperid v3.3** —— 快速唯一 ID 生成库。
    
-   **Pino v9.4** —— 快速的面向 JSON 的日志记录器。
    

🙋🏻‍♀️
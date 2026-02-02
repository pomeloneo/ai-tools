# Node 中文周刊 #46 - 关于 npm 搜索更优解的提案

> 原文链接: http://mp.weixin.qq.com/s?__biz=MzIzOTkwMjM0OQ==&mid=2247507961&idx=1&sn=09edb9864d34f9cb259a649d7aaf1e8b&chksm=e921941bde561d0db9fdb39e5947f93cb6e6391c5265a2cc2db55e555400230f995cfc3a09b3#rd
> 抓取时间: 2026/2/2 23:54:25

---

> 本期看点：有位社区开发者提出了关于 npm 搜索更优解的提案；Node.js 即将在 7 月 5 日左右为 v14.x、v16.x 和 v18.x 版本发布一些安全版本更新，以解决三个中等严重性问题和两个高严重性问题。

> 编辑：Yucohny、loveloki

## 🔥 本周热门

**使用 Node.js 的文件系统** — Dr. Axel 最近似乎对 Node 颇有兴趣，这周他特别深入地探讨了 Node 文件系统 API 的不同部分，以及如何使用这些 API 执行各种任务。

**长按识别二维码查看原文**   

https://2ality.com/2022/06/nodejs-file-system.html

Dr. Axel Rauschmayer

**Node.js 应该支持 Web Workers 吗？** — **Web Workers** 让浏览器可以在后台运行线程，减少主线程的负担。浏览器和 Deno 都支持 Web Workers，但是 Node 也有自己的 **Worker Threads**，Sindre 认为它应该和规范保持一致。

**长按识别二维码查看原文**   

https://github.com/nodejs/node/issues/43583

Sindre Sorhus

**Prisma v4.0 发布** — 虽然没有官方博客进行说明，但是可以看这个讨论视频：**Prisma v4.0 带来了什么？**，以及一份 **升级指南**。

**长按识别二维码查看原文**   

https://github.com/prisma/prisma/releases/tag/4.0.0

Prisma

**快讯：**

-   Node.js 即将在 7 月 5 日左右为 v14.x、v16.x 和 v18.x 版本 **发布一些安全版本更新**，以解决三个中等严重性问题和两个高严重性问题。
    
    **长按识别二维码查看原文**   
    
    https://nodejs.org/en/blog/vulnerability/july-2022-security-releases/  
    
-   有位社区开发者对现有 npm 包的搜索方式感到失望，并进一步 **提出了关于 npm 搜索更优解的提案**。
    
    **长按识别二维码查看原文**   
    
    https://astoilkov.com/better-npm-search-proposal  
    
-   Reddit 上的 Node 开发人员发表了帖子，询问 MongoDB 在行业中是否像在教程中一样受欢迎。**评论区有许多有趣的内容** 😏。
    
    **长按识别二维码查看原文**   
    
    https://www.reddit.com/r/node/comments/vn2awc/is\_mongo\_as\_popular\_in\_the\_job\_world\_as\_it\_is/  
    
-   _State of JavaScript_ 和 _State of CSS_ 的发起者又带来了新的调查：**State of GraphQL**。
    
    **长按识别二维码查看原文**   
    
    https://www.stateofgraphql.com/en-us/  
    
-   Node.js 在 Stack Overflow 最新的 **最受欢迎的 Web 技术列表** 中夺得第一，React 紧随其后。
    
    **长按识别二维码查看原文**   
    
    https://survey.stackoverflow.co/2022/#section-most-popular-technologies-web-frameworks-and-technologies  
    

## 🛠 代码与工具

**Serverless-Express v4.9：在 AWS Lambda 和 Azure Functions 上运行现有框架** — 你可以使用 Express、Koa、Hapi 或其他常见的方式来实现 HTTP APIs，这个库提供了让它们在 AWS Lambda 或 Azure Functions 上运行所必需的包装器。

**长按识别二维码查看原文**   

https://github.com/vendia/serverless-express

Vendia Inc

**node-mbus：\`libmbus\` 的 Node 实现** — 该库提供对 **libmbus** 的选定功能的访问，以通过串行或 TCP 连接与 mbus 设备进行通信。

**长按识别二维码查看原文**   

https://github.com/Apollon77/node-mbus

Ingo Fischer

**QuickReader：适用于浏览器和 Node 的高性能流读取器** — 这个想法是通过流在下载的同时读取指定格式的数据，而不必等待下载完成才能进行读取。

**长按识别二维码查看原文**   

https://github.com/EtherDream/QuickReader

EtherDream

**DeploySentinel：调试 Flaky Cypress 的新工具** — 这是一个新的测试工具，暂时需要使用邮件申请才能使用，但是首页提供了方便的 **试用预览** 你看后一定会感兴趣。

**长按识别二维码查看原文**   

https://www.deploysentinel.com/

Deploy Sentinel

**SQSLite：集成测试 AWS SQS 的轻量级模块** — Jenny 在 OpenJS World 2022 上发表了关于 **如何构建 SQSLite** 的演讲。

**长按识别二维码查看原文**   

https://github.com/jennyEckstein/sqslite

Jenny Eckstein

**lru-cache v7.12.0：面向 Node 的 LRU 缓存实现**。

**长按识别二维码查看原文**   

https://github.com/isaacs/node-lru-cache

Isaac Z. Schlueter and Contributors

**⚡️ 版本发布：**

**Fastify v4.2** – 快速、低开销的 Web 框架。

**长按识别二维码查看原文**   

https://github.com/fastify/fastify/releases/tag/v4.2.0

**Kafka.js v2.1** – 适用于 Node 的现代 Apache Kafka 客户端。

**长按识别二维码查看原文**   

https://github.com/tulios/kafkajs

**pnpm v7.4** – 快速、节省空间的包管理器。

**长按识别二维码查看原文**   

https://github.com/pnpm/pnpm

**ioredis v5.1** – 以性能为中心的 Redis 客户端库。

**长按识别二维码查看原文**   

https://github.com/luin/ioredis

**Bree v9.1** – 强大的作业调度程序。

**长按识别二维码查看原文**   

https://github.com/breejs/bree

**qs v6.11** – 支持查询嵌套字符串的解析器。

**长按识别二维码查看原文**   

https://github.com/ljharb/qs

**cron-parser v4.5** – 用于解析 crontab 指令的库。

**长按识别二维码查看原文**   

https://github.com/harrisiirak/cron-parser

**zx v7.0.4** – Google 用于更好地编写 JS shell 脚本的工具。

**长按识别二维码查看原文**   

https://github.com/google/zx

**Instauto v9.1.9** – Instagram 机器人/自动化库。

**长按识别二维码查看原文**   

https://github.com/mifi/instauto

## 🙋🏻‍♀️
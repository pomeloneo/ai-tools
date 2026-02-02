# Node 中文周刊 #12 - 淘宝 NPM 镜像站域名变更

> 原文链接: http://mp.weixin.qq.com/s?__biz=MzIzOTkwMjM0OQ==&mid=2247495630&idx=1&sn=7d75633a4a81ea7f10debffc7da23816&chksm=e921a42cde562d3abe8bbead52babd6791796dd09c06209b89a765653ecb25af4292eea54a00#rd
> 抓取时间: 2026/2/2 23:55:07

---

> 本期看点：上周 TypeScript 4.5 进入了 RC 阶段，但是这次发布却推迟了对 Node 中 ESM 的支持。另外，淘宝 NPM 镜像站域名发生变更，新域名为 **npmmirror.com**

> 编辑：Xleine 、gaao、辛宝Otto

## 🔥 本周热门

**Node 处理错误的综合指南** — Node 提供了足够多的方式来发现错误并抛出异常 —— 本篇文章主要介绍了一些处理报错的常见方式。

**长按识别二维码查看原文**   

https://www.honeybadger.io/blog/errors-nodejs/

Ayooluwa Isaiah（Honeybadger）

**TypeScript 推迟了对 Node 中 ESM 的支持** — TypeScript 4.5 已经进入了 **RC 阶段**，但对于 Node.js 新模块设置的支持将推迟到未来版本。关于此次更新更深入的讨论请点击 **GitHub issue** 查看。

**长按识别二维码查看原文**   

https://www.infoworld.com/article/3637149/typescript-delays-esm-support-for-nodejs.html

Paul Krill

**快讯：**

-   **淘宝 NPM 镜像站切换为新域名 npmmirror.com**，老 npm.taobao.org 和 registry.npm.taobao.org 域名将于 2022 年 05 月 31 日零时起停止服务。
    
-   **给开发者的建议 - 阅读源码****：** Node.js TSC 成员和 `undici` 的创建者 Matteo Collina 建议多 **"阅读"** 你正在使用或学习的任何库的源代码，以提高自身的编码能力。
    
    **长按识别二维码查看原文**   
    
    https://twitter.com/matteocollina/status/1455581471859744770  
    

**如何使用 Node 创建一个爬取亚马逊商品的爬虫** — 想学习爬虫？本文将手把手带你了解并使用 Node 创建一个爬取亚马逊商品的爬虫！

**长按识别二维码查看原文**   

https://www.smashingmagazine.com/2021/10/building-amazon-product-scraper-nodejs/

Robert Sfichi

**💬 讨论：如何辨别一个 NPM 包的安全性呢？** — 最近有些 NPM 包频繁遭到恶意代码的注入，那么在使用 NPM 包时应该如何审核包的安全性呢？关于这个问题 Hacker News 上有专门的页面进行讨论。详情可点击查看。

**长按识别二维码查看原文**   

https://news.ycombinator.com/item?id=29078836

Hacker News

**使用 TypeScript 创建 Serverless UI** — **Serverless UI** 是一个命令行工具，可以让你轻松地将基于 Node 的 serverless 应用程序部署到 AWS Lambda。

**长按识别二维码查看原文**   

https://www.smashingmagazine.com/2021/11/deep-dive-into-serverless-ui-typescript/

Ikeh Akinyemi

**在 Node.js 中如何设计错误提示信息和日志记录库** — 如果这个标题激起了你的兴趣，那么这篇文章的内容必定不会让你失望。

**长按识别二维码查看原文**   

https://blog.appsignal.com/2021/11/03/designing-error-messages-and-a-logging-strategy-in-nodejs.html

Fernando Doglio

**使用 AWS Lambda 和 Amazon S3 构建 Object 差异检查器** — 这个想法是因为 Lambda 函数可以记录上传到 S3 的对象或文件版本之间的差异。

**长按识别二维码查看原文**   

https://aws.amazon.com/blogs/compute/building-a-difference-checker-with-amazon-s3-and-aws-lambda/

James Beswick

👾  **如何在 macOS 上使用 Cypress 修复 \`Unable to Load Node-API Library\` 的问题** — 这是一个比较特殊的问题，如果你之前碰到了它，我想你当时一定急的抓耳挠腮。如果这个问题你还没有解决的话，那么这篇文章将帮助你解决这个问题。

**长按识别二维码查看原文**   

https://spin.atomicobject.com/2021/11/01/fixing-unable-load-node-api-library/

Patrick Bacon

**如何利用 Node.js 将文件上传至由 Exepress 创建的服务器上呢？** — 本文主要介绍了如何在 FormData 和 Multer 库的帮助下，通过使用 Node.js 的 multipart/form-data 向 Express 服务器上传文件。

**长按识别二维码查看原文**   

https://www.twilio.com/blog/handle-file-uploads-node-express

Ashley Boucher（Twilio）

**在红帽的 OpenShift 日志系统中使用 Pino Logs** — 源于 OpenShift，**Pino** 是一个流行的、面向 JSON 的记录器，适用于 Node。

**长按识别二维码查看原文**   

https://developers.redhat.com/articles/2021/10/28/consume-pino-logs-nodejs-applications

Ash Cripps（Red Hat）

**使用 esbuild 打包你的 Express 应用**。

**长按识别二维码查看原文**   

https://devtails.medium.com/bundling-your-node-js-express-app-with-esbuild-5aecc36c5047

Adam Berg

## 🛠 代码与工具

**Oclif：Heroku 的 Node 的开放 CLI 框架** — 用于构建命令行接口的成熟框架，无论是几个简单的标志还是大量的子命令都可以胜任。它来自于 Heroku 自己大量使用的 CLI 工具。**GitHub 仓库地址。**

**长按识别二维码查看原文**   

https://oclif.io/

Heroku

**Prisma v3.4.0：流行的**“**下一代**”** ORM 和工具集** — v3.4.0 添加了对 PostgreSQL 14 的支持，另外还增加了在 MongoDB 中将 `orderBy` 与聚合组一起使用的功能。

**长按识别二维码查看原文**   

https://github.com/prisma/prisma/releases/tag/3.4.0

Prisma

**p-map v5.3：映射 Promises** — 与 `Promise.all()` 不同的地方在于它能够控制并发或决定是否在出错的时候停止迭代。

**长按识别二维码查看原文**   

https://github.com/sindresorhus/p-map

Sindre Sorhus

**PDFKit：面向 Node 和浏览器的 PDF 生成库** — 这里有一个 **有趣的在线示例**，可以直接在浏览器中运行。**GitHub 仓库地址**。

**长按识别二维码查看原文**   

http://pdfkit.org/

Devon Govett

**node-dev v7.1：零配置的 Node 进程重启工具** — 观察被 `require` 的文件，当该文件被更新时会自动重启 node 进程。

**长按识别二维码查看原文**   

https://github.com/fgnass/node-dev

Felix Gnass

**node-dark-mode：控制 macOS 的黑暗模式**。

**长按识别二维码查看原文**   

https://github.com/sindresorhus/node-dark-mode

Sindre Sorhus

## 🙋🏻‍♀️
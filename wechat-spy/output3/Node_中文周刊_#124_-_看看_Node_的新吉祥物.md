# Node 中文周刊 #124 - 看看 Node 的新吉祥物

> 原文链接: http://mp.weixin.qq.com/s?__biz=MzIzOTkwMjM0OQ==&mid=2247528863&idx=1&sn=21aff783ab92979008333ee53a279d21&chksm=e9213a7dde56b36baf27bae9805f9471d8565afd2ed1ab6c19c484bd2807fca1c8e003ae2652#rd
> 抓取时间: 2026/2/2 23:52:43

---

> 本期看点：在 Twitter/X 上，Node 官方账号最近公布了 Node.js 吉祥物设计大赛的结果，Node 的新吉祥物是由 Angela Angelini 设计的“火箭龟”。不过，Reddit 上的人似乎并不是很喜欢？

> 编辑：Yucohny、loveloki

## 🔥 本周热门

**🚀🐢 看看 Node 的新吉祥物** —— 在 Twitter/X 上，Node 官方账号最近公布了 Node.js 吉祥物设计大赛的结果，Node 的新吉祥物是 **由 Angela Angelini 设计** 的“火箭龟”（如上图）。不过，Reddit 上的人似乎 **并不是很喜欢**？

**长按识别二维码查看原文**   

https://twitter.com/nodejs/status/1759953849849167878

Node.js 项目

**JSR：关于 Deno 新 JavaScript 包注册表的最新信息** —— Deno 团队正在筹备 **JSR**（仍需在等待名单中申请），这是一个新的 JavaScript 包注册表（它不仅仅是像 pnpm 或 Yarn 一样的包管理工具），以解决各种 npm 的限制，包括那些甚至不打算使用 Deno 的 Node 用户。

**长按识别二维码查看原文**   

https://socket.dev/blog/jsr-new-javascript-package-registry

Sarah Gooding

**在 Node 中防止 SQL 注入攻击** —— 了解更多 SQL 注入攻击构成威胁的原因和位置，以及一些保护 Node 应用程序免受它们影响的初步方法。

**长按识别二维码查看原文**   

https://snyk.io/blog/preventing-sql-injection-attacks-node-js/

Lucien Chemaly

**使用 RHEL 和 Fedora 在边缘上运行 Node.js 应用程序**

**长按识别二维码查看原文**   

https://developers.redhat.com/articles/2024/02/21/run-nodejs-applications-edge-rhel-and-fedora

Michael Dawson

**在工作线程之间高效传输二进制数据**

**长按识别二维码查看原文**   

https://advancedweb.hu/how-to-transfer-binary-data-efficiently-across-worker-threads-in-nodejs/

Tamás Sallai

**以 JSDoc 作为替代 TypeScript 语法的探索**

**长按识别二维码查看原文**   

https://alexharri.com/blog/jsdoc-as-an-alternative-typescript-syntax

Alex Harri

**快讯：**

-   📅 上周，我们提到了即将推出的有关 Node.js 的蜜罐纪录片（你可以 ▶️ **在此观看预告片**），它将在 3 月 21 日 发布 —— 还要等待几周 :-)
    

**长按识别二维码查看原文**   

https://www.youtube.com/watch?v=SfWPqr04srM

-   Git v2.44 是 Git 于 2024 年的第一个发布的新版本，Taylor Blau 介绍了其中的增强功能。
    

**长按识别二维码查看原文**   

https://github.blog/2024-02-23-highlights-from-git-2-44/

## 🛠 代码与工具

**Systeminformation：一个用于 Node 的系统信息库** —— 如果你想查询你的 Node 程序正在运行的环境，这个库一定适合你！这里包含了获取关于音频设备、蓝牙设备、打印机、USB、CPU、架构、WiFi 等等的信息。

**长按识别二维码查看原文**   

https://github.com/sebhildebrandt/systeminformation

Sebastian Hildebrandt

**node-rate-limiter-flexible v5.0：通过键限制动作数量并保护应用免受暴力攻击** —— 可以使用 Redis、进程内存、memcached、MongoDB、Postgres 或其他方式来计算单个进程或分布式环境中的动作数量。现在支持 Prisma。

**长按识别二维码查看原文**   

https://github.com/animir/node-rate-limiter-flexible

Roman Animir

**Readability.js：从 HTML 文档中提取可读内容** —— 这是 Firefox 的 **Reader View** 所使用的库的独立版本。我们已经有几年没有介绍这个库了，但它仍然在持续改进。

**长按识别二维码查看原文**   

https://github.com/mozilla/readability

Mozilla

**SQS Consumer v8.2：无需样板代码构建基于 Amazon SQS 的应用程序** —— 通过定义处理 SQS 消息处理的异步函数，更简单地构建基于 SQS（简单队列服务）的应用程序。

**长按识别二维码查看原文**   

https://github.com/bbc/sqs-consumer

BBC

**AWS Lambda Web Adapter：在 AWS Lambda 上运行典型的 HTTP Web 应用程序** —— 这是一个由 Rust 驱动的的很方便的适配器，通过让应用程序保持其通常的 HTTP 服务方式，并通过此适配器进行桥接，使得更容易地在 AWS 的无服务器平台上运行任何语言构建的应用程序。

**长按识别二维码查看原文**   

https://github.com/awslabs/aws-lambda-web-adapter

Amazon Web Services Labs

**版本发布：**

-   **np v10.0** – 更好的 `npm publish`。
    
-   **Mongoose v8.2** – MongoDB 对象建模方法。
    
-   **Nodemon v3.1** – 监视 Node 应用程序的变化并重新启动它们。
    
-   **webdav-client v5.4** – 用于 Node 和浏览器的 WebDAV 客户端库。
    
-   **AdminJS v7.6.1** – Node 应用程序的自动管理界面。
    
-   **JZZ v1.8** – 用于 Node 和浏览器的 MIDI 库。
    
-   **Mikro ORM v6.1.5** – 用于 Node.js 的 TypeScript ORM。
    
-   **NestJS REST API Boilerplate v1.1**
    

## 🙋🏻‍♀️
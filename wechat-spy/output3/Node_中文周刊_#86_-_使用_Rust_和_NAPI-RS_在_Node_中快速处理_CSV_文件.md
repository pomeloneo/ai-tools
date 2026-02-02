# Node 中文周刊 #86 - 使用 Rust 和 NAPI-RS 在 Node 中快速处理 CSV 文件

> 原文链接: http://mp.weixin.qq.com/s?__biz=MzIzOTkwMjM0OQ==&mid=2247519282&idx=1&sn=cb850e5dc802d58ce134b111f40194f6&chksm=e921c7d0de564ec6f1c188851b94999fabe93fc3dd736849e0e2414287eaa386c1abe0677f3d#rd
> 抓取时间: 2026/2/2 23:53:32

---

> 本期看点：NAPI-RS 是一个用于在 Rust 中构建预编译的 Node.js 插件的框架。本文探讨了如何将其用于实际用途，即能够以高性能处理 CSV 数据。

> 编辑：Otto-J、Yucohny

## 🔥 本周热门

**使用 Rust 和 NAPI-RS 在 Node 中快速处理 CSV 文件** — **NAPI-RS** 是一个用于在 Rust 中构建预编译的 Node.js 插件的框架。本文探讨了如何将其用于实际用途，即能够以高性能处理 CSV 数据。

**长按识别二维码查看原文**   

https://www.alxolr.com/articles/how-to-process-a-csv-file-five-times-faster-in-node-js-with-rust-and-napi-rs

Alexandru Olaru

**使用 Node 和 Connect 构建现代 gRPC 微服务** — 这篇有趣的教程深入探讨了 Dopt 工程师如何使用 Node 和 **Connect** 构建 gRPC 驱动的内部微服务。这是一篇基于真实的、生产级别的经验的教程。

**长按识别二维码查看原文**   

https://blog.dopt.com/building-a-modern-grpc-powered-microservice

Joe McKenney

**剖析 npm 恶意软件：五个软件包及其邪恶的安装脚本** — npm 相关的安全问题仍然是一个大话题，而一个常见的安全漏洞是在安装包时运行的安装脚本。

**长按识别二维码查看原文**   

https://blog.sandworm.dev/dissecting-npm-malware-five-packages-and-their-evil-install-scripts

Gabi Dobocan (Sandworm)

**Postgres 触发器如何简化你的后端开发**——触发器是一种特殊类型的函数，可以自动响应特定的数据库事件，例如表插入、删除或更新，从而使您能够将某些逻辑转移到数据库本身。

**长按识别二维码查看原文**   

https://themythicalengineer.com/how-postgres-triggers-can-simplify-your-backend-development.html

The Mythical Engineer

🐘 另外，如果你是 Postgres 用户，**Postgres Weekly** 是我们的 Postgres 专注的新闻邮件:-)

**使用无状态架构构建和 Docker 化 Node 应用** —— 然后将其部署到 Kinsta 平台上。

**长按识别二维码查看原文**   

https://www.smashingmagazine.com/2023/04/building-dockerizing-nodejs-app-stateless-architecture-kinsta/

Smashing Magazine

**在 Ubuntu 20.04 LTS 上安装 Node.js 20**

**长按识别二维码查看原文**   

https://joshtronic.com/2023/04/23/how-to-install-nodejs-20-on-ubuntu-2004-lts/

Josh Sherman

**快讯：**

-   **NodeSource 与 GitHub 正在合作**，将 NodeSource 的认证模块功能集成到 GitHub Actions 中。
    

**长按识别二维码查看原文**   

https://nodesource.com/blog/strengthening-nodejs-security

-   上周讨论了 Node.js 20 的发布，如果你想深入了解新的实验性权限模型，**这里有完整的文档**。
    

**长按识别二维码查看原文**   

https://nodejs.org/api/permissions.html#permissions

## 🛠 代码与工具

**Linker.js：从 Node 访问 C、C++、Rust 和 Go 库** — 一个动态 C 共享库链接器，提供了一个接口来访问任何 C 共享库（C、C++、Rust 和 Go 都可以生成）。目前仅支持 Linux。

**长按识别二维码查看原文**   

https://github.com/bitair-org/linker.js

Bitair

**SuperTest：简单的 HTTP 断言** — 如果你有一个 HTTP API 需要测试，可以试试 SuperTest。SuperTest 提供了一种流利的 API，用于链接请求和期望。SuperTest 使用了 **superagent** 实现，并且也支持 HTTP/2。

**长按识别二维码查看原文**   

https://github.com/ladjs/supertest

TJ Holowaychuk et al.

**chalk-animation：在终端输出丰富动画** — 为文本提供各种不同的效果，包括彩虹效果、脉动和抖动。

**长按识别二维码查看原文**   

https://github.com/bokub/chalk-animation

Boris K

**版本发布：**

-   **p-map v6.0**  
    ↳ 并发地映射 promises。
    
-   **lowdb v6.0**  
    ↳ 易于使用的本地 JSON 数据库。
    
-   **npm-publish v2.0**  
    ↳ GitHub Action 用于发布到 NPM。
    
-   **DOCX v8.0.3**  
    ↳ 从 JavaScript 中操作 `.docx` 文件。
    
-   **file-type v18.3**  
    ↳ 检测 Buffer/Uint8Array 的文件类型。
    
-   **xmlbuilder2 v3.1**  
    ↳ XML 构建库。
    
-   **grammY v1.16**  
    ↳ Telegram 机器人框架。
    
-   **Mongoose v7.0.5**  
    ↳ MongoDB 对象建模方法。
    

-   **Prisma v4.13**  
    ↳ 用于 GraphQL 服务器的现代数据库访问。
    

## 🙋🏻‍♀️
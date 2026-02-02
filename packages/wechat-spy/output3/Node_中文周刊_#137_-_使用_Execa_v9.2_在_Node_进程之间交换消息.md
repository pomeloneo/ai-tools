# Node 中文周刊 #137 - 使用 Execa v9.2 在 Node 进程之间交换消息

> 原文链接: http://mp.weixin.qq.com/s?__biz=MzIzOTkwMjM0OQ==&mid=2247532302&idx=1&sn=8ab3077b592a69c7d1df079e0173495e&chksm=e92134ecde56bdfa03fc889c0539bfce1fe5edee76af6a1926988b87a07ddbebdc4aa7d5a844#rd
> 抓取时间: 2026/2/2 23:52:27

---

> 本期看点：最新版本的 execa 进程执行库引入了进程间通信方法。维护者 ehmicky 在文中里展示了让这一切实现的优雅 API。

> 编辑：Yucohny、TimLi

🔥 本周热门

**`setTimeout` 可能是 Node 内存泄漏的原因** —— Sentry 团队遇到了 Node 处理 `setTimeout` 创建的超时问题，具体来说是由于持有 `setTimeout` 返回的 `Timeout` 对象导致的问题。

**长按识别二维码查看原文**   

https://lucumr.pocoo.org/2024/6/5/node-timeout/

Armin Ronacher

**使用 Execa v9.2 在 Node 进程之间交换消息** —— 最新版本的 execa 进程执行库 引入了进程间通信方法。维护者 ehmicky 在文中里展示了让这一切实现的优雅 API。

**长按识别二维码查看原文**   

https://itnext.io/ipc-made-easy-with-execa-9-2-939c6a358731?gi=a36e108ecc7a

ehmicky  

**📄 JSR 是我们一直在等待的 JavaScript 包注册表吗？**

**长按识别二维码查看原文**   

https://lev.engineer/blog/jsr-the-javascript-package-registry-we-ve-been-waiting-for

Lev Gelfenbuim  

**📄 每位开发者必须知道的 12 个 Git 命令**

**长按识别二维码查看原文**   

https://github.blog/2024-06-10-top-12-git-commands-every-developer-must-know/

Kedasha Kerr（GitHub）  

**快讯：**

-   TypeScript v5.5 的第一个候选版本 已经发布。Theo 称其为 ▶️近年来最大的 TypeScript 更新。
    
    **长按识别二维码查看原文**   
    
    https://devblogs.microsoft.com/typescript/announcing-typescript-5-5-rc/
    
-   TEO 是一个新的模式驱动的 Web API 框架，它非常特别地同时支持 Rust、Python 与 Node.js。只需要提供模式，TEO 便能生成代码。
    
    **长按识别二维码查看原文**   
    
    https://teodev.io/
    
      
    

🛠 代码与工具

**uuid v10：使用 JavaScript 生成符合 RFC 规范的 UUID** —— 最新版涵盖了 UUID v1、v3、v4、v5、v6、v7 和 v8。现在支持所有主要浏览器和 Node 18 及以上版本。v10.0 放弃了对 Node 12 和 14 的支持，并增加了对更多类型的 RFC9562 UUID（即 v6、v7 和 v8）的支持。

**长按识别二维码查看原文**   

https://github.com/uuidjs/uuid

Robert Kieffer 及贡献者

**Lambda API v1.1：适用于无服务器应用程序的轻量级 Web 框架** —— 一个精简的框架，采用类似 Express 的方式来构建在 AWS Lambda 上运行的无服务器 JavaScript 应用程序，通过 API Gateway 运行。

**长按识别二维码查看原文**   

https://github.com/jeremydaly/lambda-api

Jeremy Daly

**Merge Anything v6.0：递归合并对象和其他类型** —— 如果需要比 `Object.assign()` 更深入的合并功能，可以试试这个工具。

**长按识别二维码查看原文**   

https://github.com/mesqueeb/merge-anything

Luca Ban

**GraphQL.js 的 GraphQL 查询复杂性分析** —— 提供 GraphQL 查询分析和验证功能，以拒绝复杂查询，从而帮助保护 GraphQL 服务器免受资源耗尽和某些 DoS 攻击。

**长按识别二维码查看原文**   

https://github.com/slicknode/graphql-query-complexity

Ivo Meißner  

**Unleash v6.0：Node.js 驱动的“功能切换”服务** —— 这是一个用于在应用程序中远程切换功能的系统。其用 JavaScript 构建，但也有 Java、Go、Ruby、Python、PHP、Rust 和 .NET Core 的客户端。

**长按识别二维码查看原文**   

https://github.com/Unleash/unleash

Unleash

**CodeFlattener：将 Node 代码压缩为单个 JavaScript 文件以供分析** —— 这不是一个典型的构建工具。它的目的是将代码压缩到足够小，以便可以更容易地传递给 LLM 和其他 AI 工具进行分析。

**长按识别二维码查看原文**   

https://github.com/bchr02/CodeFlattener

Bill Christo

**版本发布：**

-   **c8 v10.0** – 使用 Node 内置功能的代码覆盖率报告。
    
-   **YouTube.js v10.0** – 使用 YouTube 内部 API 的非官方方式。
    
-   **pnpm v9.3** – 快速、高效的包管理器。
    
-   **npm-package-json-lint v8.0** – Node 项目的 `package.json` 文件的 linter。
    
-   **Ottoman v2.5** – 现在开始支持事务。
    
-   **Electron Packager v31.0** – 自定义和打包 Electron 应用程序。
    
-   **ExpressoTS v2.12** – 用于服务器端应用的 TypeScript 框架。
    
-   **rpc-websockets v9.0** – 通过 WebSockets 的 JSON-RPC v2.0。
    
-   **strong-soap v4.1** – 全功能的 SOAP 驱动程序。
    
-   **Javet v3.1.3** – Java + V8。将 JavaScript 嵌入到 Java 中。
    

🙋🏻‍♀️
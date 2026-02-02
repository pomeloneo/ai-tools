# Node 中文周刊 #146 - Node.js 借助新的自动化流程发布了以往俩倍的安全补丁

> 原文链接: http://mp.weixin.qq.com/s?__biz=MzIzOTkwMjM0OQ==&mid=2247534382&idx=2&sn=593a98231b07a93689df56f33d224234&chksm=e9210cccde5685dae2e845ce6598210a6b85518e22fc15cdb23f3ce0d5c70a46949928f7b7f0#rd
> 抓取时间: 2026/2/2 23:52:16

---

> 本期看点：Node 项目实现了安全发布流程的自动化，使发布次数翻了一番。同时，Next 10 小组正在重新评估不受支持的实验性功能，以加强安全性。

> 编辑：TimLi

🔥 本周热门

**Node.js 借助新的自动化流程发布了以往俩倍的安全补丁** —— Node 项目实现了安全发布流程的自动化，使发布次数翻了一番。同时，Next 10 小组正在重新评估不受支持的实验性功能，以加强安全性。

**长按识别二维码查看原文**   

https://socket.dev/blog/node-js-doubles-security-releases-with-newly-automated-process

Sarah Gooding (Socket)  

**Node v22.6.0 (Current) 发布** —— v22.6 在我们发送上一期简报后几小时就发布了，目前仍是最新的 Current 版本。它引入了新的类型注释剥离功能（通过 `--experimental-strip-types`），并对网络检查提供了实验性支持。

**长按识别二维码查看原文**   

https://nodejs.org/en/blog/release/v22.6.0

Rafael Gonzaga

**Puppeteer 正式支持 Firefox** —— 从 23 版本开始，谷歌原本只支持 Chrome 的 Puppeteer 浏览器自动化库现在也为 Firefox 提供了一流支持。

**长按识别二维码查看原文**   

https://hacks.mozilla.org/2024/08/puppeteer-support-for-firefox/

Mozilla Hacks  

**JavaScript 中常见的内存泄漏原因** —— 文章通过一些基础示例，重点介绍了 Node.js 和 Deno 等基于 V8 的运行时中的内存泄漏问题。

**长按识别二维码查看原文**   

https://www.trevorlasn.com/blog/common-causes-of-memory-leaks-in-javascript

Trevor Indrek Lasn

**在 Node-RED 中通过 WASM 和 PGlite 运行 Postgres** —— Node-RED 是一个流行的基于 Node.js 的"低代码"编程环境，你可以在浏览器中构建"流程"来连接代码。

**长按识别二维码查看原文**   

https://conoroneill.net/2024/08/18/running-postgres-inside-node-red-via-wasm-and-pglite/

Conor O'Neill

**📄 Node 原生测试运行器的高级用法** Damilola Olatunji

**长按识别二维码查看原文**   

https://blog.appsignal.com/2024/08/07/advanced-use-cases-of-the-nodejs-native-test-runner.html

**📄 在 Node 中用 Microsoft Entra ID 实现 SAML SSO** Sheshbabu Chinnakonda

**长按识别二维码查看原文**   

https://www.sheshbabu.com/posts/implementing-saml-authentication-in-node-js/

**📄 如何调试 Docker 容器中的 Node.js 应用程序** Tamas Kadlecsik  

**长按识别二维码查看原文**   

https://blog.risingstack.com/how-to-debug-a-node-js-app-in-a-docker-container/

**快讯：**  

-   Bun 团队一直在开发 node:cluster 支持，吞吐量结果令人印象深刻。
    
    **长按识别二维码查看原文**   
    
    https://bun.sh/
    
-   说到 Bun，Bun v1.1.23 已经发布，进一步提高了与 Node.js 的兼容性，支持 `TextEncoderStream` 和 `TextDecoderStream` Web API，`Float16Array`，并改进了性能。
    
    **长按识别二维码查看原文**   
    
    https://bun.sh/blog/bun-v1.1.23
    
-   安全公司 Phylum 写了一篇关于 npm 的"大垃圾堆"的文章，指出最近发布的 npm 包中约 70% 是为了利用奖励开源贡献的去中心化协议而设计的"垃圾"。
    
    **长按识别二维码查看原文**   
    
    https://blog.phylum.io/the-great-npm-garbage-patch/
    
      
    

🛠 代码与工具

**LogTape：零依赖的简单日志库** —— 我很喜欢这种新风格的库，它承诺支持所有主要运行时（Node、Deno、Bun），以及边缘函数和浏览器开发工具。

**长按识别二维码查看原文**   

https://github.com/dahlia/logtape

Hong Minhee

**Volta v2.0：快速安装和运行 JavaScript 工具** —— 一个长期存在的由 Rust 驱动的工具，用于安装和切换 JavaScript 相关工具（如 Node、TypeScript、Yarn 等）..."无论是哪种包管理器、Node 运行时或操作系统"。GitHub 仓库在此。

**长按识别二维码查看原文**   

https://volta.sh/

Volta

**EICRUD：基于 NestJS 的 CRUD/授权框架** —— 我们最近提到过这个项目，但它刚刚添加了生成 OpenAPI 架构的功能，这样你就可以更轻松地在其他地方生成客户端。GitHub 仓库在此。

**长按识别二维码查看原文**   

https://eicrud.com/

Antoine Crosetti

**Protobuf-ES 2.0 正式发布** —— 这是一个完全兼容的 JavaScript/TypeScript Protobuf 实现。Protobuf / protocol buffers 是谷歌创建的一种语言和平台无关的结构化数据序列化方式。

**长按识别二维码查看原文**   

https://buf.build/blog/protobuf-es-v2

Stamm and Perez (Buf)

**版本发布：**

-   **Cheerio v1.0** – 用于解析和操作 HTML 和 XML 的库。
    
-   **OpenAI Fetch v3.0** – 基于 `fetch` 的极简 OpenAI 客户端，现在支持 OpenAI 的结构化输出功能。
    
-   **eta (η) v3.5** – 适用于 Node、Deno 和浏览器的嵌入式 JS 模板引擎。
    
-   **Create Node CLI v2.0** – 快速创建新 Node CLI 应用程序的工具。
    
-   **ExpressoTS v2.16** – 用于服务器端应用程序的 TypeScript 框架。
    
-   **express-validator v7.2** – Express.js 的 validator.js 中间件。
    

🙋🏻‍♀️
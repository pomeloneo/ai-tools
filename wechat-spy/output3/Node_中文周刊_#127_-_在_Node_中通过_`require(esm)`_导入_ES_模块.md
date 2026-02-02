# Node 中文周刊 #127 - 在 Node 中通过 `require(esm)` 导入 ES 模块

> 原文链接: http://mp.weixin.qq.com/s?__biz=MzIzOTkwMjM0OQ==&mid=2247529623&idx=1&sn=41702fc633ec84fca9c9eaaea5094d80&chksm=e9213f75de56b6639f3d1edb8d66876afb3afb2bd7eafd46eafde2909bf636b558cc7ce05863#rd
> 抓取时间: 2026/2/2 23:52:39

---

> 本期看点：Joyee 写了一篇关于实验性支持通过 `require()` 导入同步 ES 模块相关历史的文章，这个很早前就被提出的特性曾因为技术和文化因素而迟迟没有结果。

> 编辑：Yucohny、loveloki

## 🔥 本周热门

**在 Node 中通过 \`require(esm)\` 导入 ES 模块** —— Joyee 写了一篇关于 **实验性支持通过** **`require()` 导入同步 ES 模块** 相关历史的文章，这个很早前就被提出的特性曾因为技术和文化因素而迟迟没有结果。

**长按识别二维码查看原文**   

https://joyeecheung.github.io/blog/2024/03/18/require-esm-in-node-js/

Joyee Cheung

**使用 TypeScript 构建 Node 应用程序** —— 学习如何设置 TypeScript 以使用 pnpm、Node、TypeScript 和 ES 模块构建 Node 应用程序以获得无缝的开发体验。

**长按识别二维码查看原文**   

https://www.totaltypescript.com/typescript-and-node

Matt Pocock

**Worker thread 的初学者指南** —— **Worker thread** 提供了一种创建以及并行运行独立的 JavaScript 执行线程的方式。

**长按识别二维码查看原文**   

https://betterstack.com/community/guides/scaling-nodejs/nodejs-workers-explained/

Stanley Ulili

**使用 OpenAI 和 Node 解析 Hacker News 谁在招聘板块内容**

**长按识别二维码查看原文**   

https://www.jbernier.com/p?id=hn-who-is-hiring-chatgpt

Jeremy Bernier

**ESM 与 CommonJS 的比较**

**长按识别二维码查看原文**   

https://wanago.io/2024/03/18/ecmascript-modules-esm-commonjs/

Marcin Wanago

**▶** **Drizzle 真的比 Prisma 好吗？**

**长按识别二维码查看原文**   

https://www.youtube.com/watch?v=cTu9-C2rd-0

Kyle Cook

**在 Fastify 中使用 Server Action**

**长按识别二维码查看原文**   

https://hire.jonasgalvez.com.br/2024/mar/04/server-actions-in-fastify/

Jonas Galvez

**快讯：**

-   ▶️ Stack Overflow 播客 **采访了 Node 的创造者 Ryan Dahl**，讨论了为什么要创建 **Deno**、JSR、边缘函数以及 JavaScript 的未来。
    

**长按识别二维码查看原文**   

https://stackoverflow.blog/2024/03/19/why-the-creator-of-node-js-r-created-a-new-javascript-runtime/

-   Deno 项目推出了 **deployctl**，这是一个用于与 Deno Deploy 一起工作的命令行工具。
    

**长按识别二维码查看原文**   

https://deno.com/blog/deployctl

-   如果你是一位使用 Windows 的开发者并且渴望使用 **Bun**，不要放弃 —— **对 Windows 的支持已经接近尾声了**，目前已经达到 93% 的测试通过率。
    

**长按识别二维码查看原文**   

https://bun.sh/blog/bun-v1.0.33#windows-support-is-close

## 🛠 代码与工具

**Eta v3.4：适用于 Node、Deno 和浏览器的嵌入式 JavaScript 模板引擎** —— 它标榜比具有许多相同的特性的 EJS 更加轻量和快速（看起来有点像是 Ruby 的 ERB）。这里是它的 **GitHub 仓库**。

**长按识别二维码查看原文**   

https://eta.js.org/

Ben Gubler

**VineJS：表单数据验证库** —— 对后端接收到的数据进行快速验证，提供运行时和静态类型安全，以及对表单和 JSON 格式数据的处理。为什么使用 VineJS 而不是 Zod？**他们对此做出了做出了一些解释**。

**长按识别二维码查看原文**   

https://vinejs.dev/docs/introduction

VineJS Contributors

**date-fns v3.6：现代的日期处理库** —— 自我们介绍这个“lodash 版日期处理库”以来已经过去了好几年，它现在有 **超过 100 个** 时间和日期处理函数，并且仍然在频繁更新。**这里是它的 GitHub 仓库**。

**长按识别二维码查看原文**   

https://date-fns.org/

Sasha Koss

💡 灵感来自 date-fns 的 **Tempo** 提供了另一套时间和日期的处理函数。

**长按识别二维码查看原文**   

https://tempo.formkit.com/

**版本发布：**

-   **Happy DOM v14.0** – JavaScript 实现的无 UI Web 浏览器。
    
-   **date-fns v3.6** – ⏳ 现代的 JavaScript 日期处理库 ⌛️ ⌛️
    
-   **Nightwatch.js v3.5** – Node.js 端到端测试框架。
    
-   **ExpressoTS v2.9** – 用于服务端的 TypeScript 框架。
    
-   **RxDB v15.12** –离线优先的反应式数据库。
    
-   **lmdb-js v3.0** – LMDB 的数据存储包装器。
    
-   **x-crawl v9.0** – 灵活的 Node.js 多功能爬虫库。
    
-   **Undici v6.9** – HTTP/1.1 客户端。
    
-   **Javet v3.1** – Java + V8。将 JavaScript 嵌入 Java。
    

## 🙋🏻‍♀️
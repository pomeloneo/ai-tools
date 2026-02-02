# Node 中文周刊 #182 - php-node：PHP 和 Node 融合的全新方式

> 原文链接: http://mp.weixin.qq.com/s?__biz=MzIzOTkwMjM0OQ==&mid=2247541927&idx=1&sn=ee9412afb2b34013225df7742b9ea870&chksm=e9216f45de56e6539c219cf3fcb2287f7c95c2d3ecaf1fd951b54c0b1c192bc45b2258a1cece#rd
> 抓取时间: 2026/2/2 23:51:34

---

> 本期看点：php-node 项目实现 PHP 和 Node.js 的无缝融合，使用 Node.js 和 Llama Stack 实现 AI 安全防护，使用 qnm 来诊断你的 npm 依赖，Zigar：在 Node 和 Electron 项目中编写和使用 Zig 代码。

> 编辑：TimLi

🔥 本周热门

**php-node：PHP 和 Node 融合的全新方式** —— 我敢打赌有些读者对混合使用 PHP 和 Node.js 会有强烈的看法，但这确实是一个很棒的项目。php-node 是一个 Node 原生模块，让你可以在 Node 环境中运行 PHP 应用程序。为什么要这样做？可以用来迁移遗留应用程序、构建混合 PHP/JS 应用程序，或者在 Node 应用程序中调用 PHP（比如这篇文章中提到的 WordPress）。

**长按识别二维码查看原文**   

https://blog.platformatic.dev/seamlessly-blend-php-with-nodejs

Matteo Collina 等

**使用 Node.js 和 Llama Stack 实现 AI 安全防护** —— Llama Stack 是 Meta 开发的框架，用于在 Node、Python、Swift 或 Kotlin 中构建 AI 应用程序。

**长按识别二维码查看原文**   

https://developers.redhat.com/articles/2025/05/28/implement-ai-safeguards-nodejs-and-llama-stack

Michael Dawson（Red Hat）

**📄 使用 Trunker 在 Express 中管理功能开关** —— Trunker 是一个用于实现功能开关的 Express 中间件。Miguel Migliorelli

**长按识别二维码查看原文**   

https://blog.migliorelli.dev/posts/managing-feature-flags-in-express-js-with-trunker

**📄 使用可选链编写更可靠的 JavaScript** —— 使用 `might?.be?.a?.good?.idea` 可能是个好主意。Matt Smith

**长按识别二维码查看原文**   

https://allthingssmitty.com/2025/06/02/write-more-reliable-javascript-with-optional-chaining/

**📄 构建 Linux 版 Electron 应用程序** —— 虽然 Electron 是跨平台的，但仍需要注意平台特定的一些问题。Liu Liu（DoltHub）

**长按识别二维码查看原文**   

https://www.dolthub.com/blog/2025-05-29-building-a-linux-electron-app/

**📄 使用 Pino 在 Node.js 中实现生产级日志记录** Ayooluwa Isaiah（Dash0）

**长按识别二维码查看原文**   

https://www.dash0.com/guides/logging-in-node-js-with-pino

**快讯：**

-   Joyee Cheung 分享了她最近关于在 Node 中桥接 CommonJS 和 ESM 的演讲幻灯片。
    
    **长按识别二维码查看原文**   
    
    https://github.com/joyeecheung/talks/blob/master/webhackfest\_2025/bridging-commonjs-and-esm-in-nodejs.pdf
    
-   OpenJS Foundation 现已成为 CVE 编号颁发机构（CNA），负责其托管的 40 多个流行 JavaScript 项目，包括 ESLint、Express 和 Electron。
    
    **长按识别二维码查看原文**   
    
    https://socket.dev/blog/openjs-foundation-is-now-a-cna
    
-   SQLite-JS 是一个有趣的 SQLite 扩展，让你可以用 JavaScript 编写自定义 SQLite 函数。
    
    **长按识别二维码查看原文**   
    
    https://github.com/sqliteai/sqlite-js
    
-   DigitalOcean 展示了其新的基于 Node 的 MCP 服务器，让你可以通过 AI 代理/Claude 等管理 DO 托管的应用程序。
    
    **长按识别二维码查看原文**   
    
    https://www.digitalocean.com/community/tutorials/control-apps-using-mcp-server
    
      
    

🛠 代码与工具

**qnm：探索 `node_modules` 的命令行工具** —— 如果你曾经被 `node_modules` 中的内容搞得晕头转向，这个工具可以帮你更好地了解里面有什么。你可以使用模糊搜索找到特定的内容，还能查看哪些模块占用最多空间（现在就可以用 `npx qnm doctor` 试试）。

**长按识别二维码查看原文**   

https://github.com/ranyitz/qnm

Ran Yitzhaki

**Zigar：在 Node 和 Electron 项目中编写和使用 Zig 代码** —— Zig 是一种系统编程语言，本质上是 C/C++ 的超集（Bun 就是用它编写的）。**Zigar** 让你能在 JavaScript 项目中更轻松地编写和使用 C/C++/Zig 代码。

**长按识别二维码查看原文**   

https://github.com/chung-leong/zigar

Chung Leong

**🤖 OpenAI Client 5.x：在 Node 中使用 OpenAI 的模型** —— OpenAI 官方 JavaScript 库的最新版本现已支持其所有最新模型和实时 API（查看 v5.0 更新日志）。它还支持 Deno 和 Bun。

**长按识别二维码查看原文**   

https://github.com/openai/openai-node

OpenAI

**Opossum v8.5：异步函数的断路器** —— 你可以设置在特定超时后触发失败，或在达到特定错误阈值时完全失败等。GitHub 仓库。

**长按识别二维码查看原文**   

https://nodeshift.dev/opossum/

Red Hat

**🏖️ Beachpatrol：自动化日常网页浏览器操作的命令行工具** —— 这是在 macOS 或 Linux 上使用 Playwright 控制常规非无头浏览器实例的高级方法。本质上是一种方法，让你仍然可以使用可见的浏览器进行正常操作，同时具备额外的自动化功能。

**长按识别二维码查看原文**   

https://github.com/sebastiancarlos/beachpatrol

Sebastian Carlos

📢 其他 JavaScript 相关

以下是广泛 JavaScript 领域中其他一些有趣的故事，以防你错过：

-   TC39 第 108 次会议上周举行，多个提案取得进展，比如种子伪随机数进入第 2 阶段，`Error.isError` 进入第 4 阶段。
    
    **长按识别二维码查看原文**   
    
    https://github.com/tc39/agendas/blob/main/2025/05.md
    
-   Stack Overflow 年度开发者调查迎来第十五年。
    
    **长按识别二维码查看原文**   
    
    https://stackoverflow.blog/2025/05/29/not-just-a-vibe-the-stack-overflow-developer-survey-is-really-here/
    
-   深入了解即将推出的 Temporal API 以及它将如何帮助解决 JavaScript 中处理日期和时间的问题。
    
    **长按识别二维码查看原文**   
    
    https://waspdev.com/articles/2025-05-24/temporal-api
    
-   Sean Gillespie 思考高效 monorepo 的要素。
    
    **长按识别二维码查看原文**   
    
    https://blog.swgillespie.me/posts/monorepo-ingredients/
    
      
    

**版本发布：**

-   **ESLint v9.28.0** —— 这个流行的代码检查/静态分析工具为核心规则增加了更多 TypeScript 语法支持。
    
-   **Express Zod API v24.0** —— 快速的模式验证和自定义中间件。支持新的 Zod 4。
    
-   **Bun v1.2.15** —— 新增 `bun audit` 工具用于执行项目依赖的安全审计。
    
-   **📄 pdf2html v4.0** —— 使用 Apache Tika 和 PDFBox 将 PDF 转换为 HTML（需要 JRE 环境）。
    
-   **Ink v6.0** —— 使用 React 构建命令行应用程序。现在支持 React 19 并要求 Node.js 20。
    
-   **Ts.ED v8.11** —— 基于 Express 的 Node + TypeScript 框架。
    
-   **Tinypool v1.1** —— 小巧、精简的 Node 工作线程池实现。
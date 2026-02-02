# JavaScript 中文周刊 #213 - Google 发布 Angular v21

> 原文链接: http://mp.weixin.qq.com/s?__biz=MzIzOTkwMjM0OQ==&mid=2247544742&idx=1&sn=8bc9c35b5d479a9897321fcaf0f394c9&chksm=e9216444de56ed52c6383ddae45b0b470f47dc6faeaf09edecb4b043a7487d3a1d64959a4626#rd
> 抓取时间: 2026/2/2 23:49:29

---

> 本期看点：Angular v21 引入 signal form、MCP 服务与 AI Tutor，TC39 第 111 次会议多项提案推进至 Stage 2 及以上，Webpack Bundle Analyzer v5.0 提供更直观的打包分析，Prisma v7.0 默认启用纯 JavaScript 客户端

> 编辑： TimLi

🔥 本周热点

**Google 发布 Angular v21** —— Google 团队这次算是拼了，发布了重量级 JavaScript 框架的全新大版本！他们还做了一个 复古游戏风的新版本冒险解读 网页，详细介绍了新特性。比如更现代的基于 signal 的 form 方案、支持 AI 工作流的 MCP 服务器、注重无障碍的无头组件库，还有全新的 “Angular AI Tutor” ，帮你快速上手各种新能力。视频内容也很棒，值得一看！

**长按识别二维码查看原文**   

https://javascriptweekly.com/link/177388/web

Google

**快讯：**

-   Devographics 每年一次的 **State of React** 调查 又开始啦，感兴趣的同学快去参与一下吧。也可以看看去年的结果。
    
    **长按识别二维码查看原文**   
    
    https://survey.devographics.com/en-US/survey/state-of-react/2025
    
-   🎤 TypeScript 的 Daniel Rosenwasser 和 Jake Bailey 去 TypeScript.fm 播客，聊了下 TypeScript 6 和 7 的新动向。
    
    **长按识别二维码查看原文**   
    
    https://share.transistor.fm/s/ad05eae6
    
-   📗 TC-39 成员 James M. Snell 正在为 Manning 出一本 **JavaScript in Depth** 新书，计划 2026 年中出版，目前已有四章可以抢先读。
    
    **长按识别二维码查看原文**   
    
    https://www.manning.com/books/javascript-in-depth
    
-   React Native 近期将支持 CSS Grid。
    
    **长按识别二维码查看原文**   
    
    https://github.com/facebook/yoga/pull/1865
    
      
    

📖 文章与视频

照片感谢 Rob Palmer 授权使用

**本周 TC39 会议：** 负责 JavaScript 语言标准的 Ecma TC39 委员会本周进行了第 111 次会议**(上图就是现场)**，集中讨论了不少语法新特性。会议纪要还得再等几周才会公开，但有些提案已经有进展啦：

**长按识别二维码查看原文**   

https://github.com/tc39/agendas/blob/main/2025/11.md

-   Iterator Sequencing 升级到 stage 4。
    
    **长按识别二维码查看原文**   
    
    https://github.com/tc39/proposal-iterator-sequencing
    
-   Joint Iteration、Iterator Join、Await dictionary of Promises 进入 stage 2.7。
    
    **长按识别二维码查看原文**   
    
    https://github.com/tc39/proposal-joint-iteration
    
-   `Error.captureStackTrace`、`import .. with {type: "text"}`、`Object.keysLength` 都进入 stage 2。
    
    **长按识别二维码查看原文**   
    
    https://github.com/tc39/proposal-error-capturestacktrace
    
-   Intl Unit Protocol 达到 stage 1，主要为度量单位的标注提供新协议。
    
    **长按识别二维码查看原文**   
    
    https://github.com/sffc/proposal-intl-unit-protocol
    
-   Typed Array Find Within 也进入 stage 1，大家可以把它理解为专门针对 TypedArray 的“原生 indexOf”。
    
    **长按识别二维码查看原文**   
    
    https://docs.google.com/presentation/d/1RIhMpf4gY2wX0KZcmCUU6i9l9Ay7WBu0vY4vIsJUwTg/edit?slide=id.g38e87ed9df8\_0\_0#slide\=id.g38e87ed9df8\_0\_0
    

**注：想了解 TC39 各阶段具体含义点这里**

**长按识别二维码查看原文**   

https://tc39.es/process-document/

**Tooltip 组件其实没必要存在** —— Dominik 用一贯犀利的方式，挑战了“独立 tooltip 组件”这个常见观点。他认为：tooltip 组件如果离开具体的 UI 场景，实在是个错误抽象。这种思路其实对很多 UI 交互元素都适用，值得大家深入思考一下。

**长按识别二维码查看原文**   

https://tkdodo.eu/blog/tooltip-components-should-not-exist

Dominik Dorfmeister (TkDodo)

**用 JavaScript 宏在 LibreOffice 里实现 Wordle** —— 这是个很有意思的项目，重在开脑洞，原来 LibreOffice 居然能用 JavaScript 来写脚本！

**长按识别二维码查看原文**   

https://bojidar-bg.dev/blog/2025-11-11-wordle-libreoffice/

Bojidar Marinov

**GitHub Actions 实现 NPM 密钥的自动轮换** —— 如果你写了自动发布到 npm 的流程，最近 npm 的安全规则更新可能已经让你抓狂。这篇文章介绍了一种无需完全切换到 trusted publishing 也能搞定自动轮换密钥的方案。

**长按识别二维码查看原文**   

https://michaelheap.com/rotate-all-npm-tokens-github-actions/

Michael Heap

**Chrome DevTools 六个你可能不知道的酷操作** —— 系列文章，第一篇先讲前三个小技巧，第二篇讲剩下的。涉及时间函数、DOM 监听、用户操作录制等实用功能，Chrome DevTools 的能力远比你想象丰富。

**长按识别二维码查看原文**   

https://www.readwriterachel.com/things-i-learned/2025/11/09/devtools-1.html

Rachel Kaufman

📄 **TypeScript 默认不变性的实践探索** —— **“我很好奇 TypeScript 是否有办法让所有值默认就是不可变？”** Evan Hahn

**长按识别二维码查看原文**   

https://evanhahn.com/typescript-immutability-experiment/

📄 **用 GSAP 打造电影感 3D 滚动动画** Joseph Santamaria

**长按识别二维码查看原文**   

https://tympanus.net/codrops/2025/11/19/how-to-build-cinematic-3d-scroll-experiences-with-gsap/

📄 **我们如何把 76,000 个测试从 Enzyme 迁移到 React Testing Library** —— HubSpot 巨量 React 测试迁移实战。Charley Pugmire (HubSpot)

**长按识别二维码查看原文**   

https://product.hubspot.com/blog/migrated-from-enzyme-to-react-testing-library

📄 **Node.js 代码中“官方”废弃一个方法怎么做** —— 你有没有用过 Node 的 `deprecate` 方法？ Stefan Judis

**长按识别二维码查看原文**   

https://www.stefanjudis.com/today-i-learned/deprecate-method-in-node-js/

🛠 代码与工具

**Webpack Bundle Analyzer v5.0：可视化 Webpack 输出** —— 这可是 Webpack 官方的分析插件和 CLI 工具，能把你的 bundle 结构用缩放可交互的树状图展现出来，让你一目了然每块代码占多少空间，然后当然就可以对症下药优化啦！

**长按识别二维码查看原文**   

https://github.com/webpack/webpack-bundle-analyzer

Webpack Project

**TanStack DB v0.5：支持基于查询的同步** —— TanStack DB 是面向前端的响应式数据存储，支持差分数据流、高性能实时关系查询、亚毫秒级增量更新与乐观写入。在 v0.5 版本里，一个组件的查询直接变成 API 请求。**"只需写好 query，TanStack DB 会自动搞定具体要取啥数据。"**

**长按识别二维码查看原文**   

https://tanstack.com/blog/tanstack-db-0.5-query-driven-sync

Willis、De Parre、Matthews

**Brimstone：用 Rust 写的全新 JavaScript 引擎** —— JS 引擎百花齐放，这里还有个大全。Brimstone 优势在于对标准支持度很高（97% 规范），且体积极小，不过目前还在开发中。

**长按识别二维码查看原文**   

https://github.com/Hans-Halverson/brimstone

Hans Halverson

**VueFinder：Vue 3 的文件管理组件** —— 提供原生风格、可响应的文件浏览体验，方便你整理、预览和管理各种文件。

**长按识别二维码查看原文**   

https://vuefinder.ozdemir.be/

Yusuf Özdemir

**is-online v12.0：检测网络是否在线** —— Node 和浏览器都能用，多种方式判断网络连接是否真的畅通。

**长按识别二维码查看原文**   

https://github.com/sindresorhus/is-online

Sindre Sorhus

📢 其他生态

开发圈还有这些值得关注的内容：

-   这周二 Cloudflare 大面积故障你被波及了吗？可以看看 详尽复盘，虽说很尴尬，但作为事故分析文档写得非常出色，挺值得一读的。
    
    **长按识别二维码查看原文**   
    
    https://blog.cloudflare.com/18-november-2025-outage/
    
-   📗 WebAssembly from the Ground Up 出了本新书，用 JavaScript 带你一步一步写一个编译器（需要付费）。可先看看 30 页样章，内容很有料，前景可期。
    
    **长按识别二维码查看原文**   
    
    https://wasmgroundup.com/
    
-   还有一段字体公司乱要授权费的故事，条理清晰，吐槽到位。
    
    **长按识别二维码查看原文**   
    
    https://www.insanityworks.org/randomtangent/2025/11/14/monotype-font-licencing-shake-down
    
-   Josef Strzibny 分析了 Reddit 新发布的各编程子版块“活跃度”数据，看结果点此。结果 `/r/node`、`/r/react` 和 `/r/nextjs` 的活跃度都比 `/r/javascript` 强不少，程序员真是喜欢小众圈子啊。
    
    **长按识别二维码查看原文**   
    
    https://strzibny.name/blog/comparing-programming-language-communities-on-reddit
    

-   上面 Hacker News 这个因自动校正闹出的标题，属实让人笑喷 😂。如果你喜欢巴赫或者管风琴，点这里听“新”曲子。
    
    **长按识别二维码查看原文**   
    
    https://www.youtube.com/watch?v=w4JR0N7rOw8
    
-   Amazon RDS for PostgreSQL 已支持 Postgres 18
    
    **长按识别二维码查看原文**   
    
    https://aws.amazon.com/about-aws/whats-new/2025/11/amazon-rds-postgresql-major-version-18/
    

**版本发布：**

-   **Prisma v7.0** —— Node.js 和 TypeScript 中非常受欢迎的 ORM，目前 Prisma Client 已完全移除对 Rust 的依赖并成为默认选项。
    
-   **pnpm v10.23** —— 高速且节省空间的包管理器。
    
-   **Node.js v25.2.1（当前版）**，**Astro v5.16**
    
-   **PlayCanvas glTF Viewer v5.7** —— 支持 glTF 2.0 和 PLY 的 3D 模型查看器。
    
-   **Wasp v0.19** —— Wasp 是基于 Node、React 和 Prisma 的类似 Rails 的全栈框架。
    
-   **Neo.mjs v11.7** —— 支持多线程、桌面级体验的快速 Web 应用程序开发框架。
    
-   **Inquirer.js v13.0** —— Node.js 下超级热门的命令行交互控件库。
    
-   **Plotly.js v3.3** —— 独立的数据可视化库。
    
-   **Rockpack v7.0** —— React 应用程序的脚手架/代码生成工具。
    
-   **Fresh v2.2** —— 基于 Deno 的 Web 框架。
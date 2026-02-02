# React 中文周刊 #228 - React Compiler 进入候选发布阶段

> 原文链接: http://mp.weixin.qq.com/s?__biz=MzIzOTkwMjM0OQ==&mid=2247541285&idx=1&sn=07889ca75cfc4726a4f364312feca15e&chksm=e92169c7de56e0d101b0f610e7d09ba29ff4cffad7649f26b90bfd377bdb337fc017040ea80a#rd
> 抓取时间: 2026/2/2 23:42:21

---

> 本期看点：React Compiler 达到稳定状态并进入候选发布阶段，同时新增实验性 swc 支持；Dan Abramov 探讨 React Server Components 如何实现"不可能组件"；Tailwind 与 Linaria 性能对比研究发布，Vercel 发布 React Router 安全漏洞修复说明。

> 编辑：TimLi

🔥 本周热门

**React Compiler 进入候选发布阶段** —— 自从 2024 年初首次公布计划以来，React Compiler 经过了大量开发，现在已经达到了"稳定且接近最终版本"的状态，预计将在未来几个月内正式发布。团队还与 `swc` 项目展开合作，在本次发布中包含了实验性的 `swc` 支持。

**长按识别二维码查看原文**   

https://react.dev/blog/2025/04/21/react-compiler-rc

Lauren Tan 和 Mofei Zhang

💡 如果你需要回顾 React Compiler 是什么，可以查看官方说明。

**长按识别二维码查看原文**   

https://react.dev/learn/react-compiler

**不可能的组件** —— Dan Abramov 在他的"大局观"系列文章中继续探讨所谓"不可能"组件的概念。这些组件混合了仅服务端和仅客户端的功能，文章讲解了 React Server Components 如何帮助打破这种界限，最后还提供了一个可以亲自尝试的示例。

**长按识别二维码查看原文**   

https://overreacted.io/impossible-components/

Dan Abramov

💡 如果"不可能组件"这个概念听起来很熟悉，那是因为 Darius Cepulis 一年前写过一篇名为 React 19 让你能够编写不可能的组件的文章，从不同角度探讨了类似的主题。

**长按识别二维码查看原文**   

https://www.mux.com/blog/react-19-server-components-and-actions

**Tailwind vs Linaria：性能对比研究** —— Linaria 提供了一种在 JS 中直接编写 CSS 的方式，但在构建时会生成真实的 CSS 文件。

**长按识别二维码查看原文**   

https://www.developerway.com/posts/tailwind-vs-linaria-performance

Nadia Makarevich

**📄 在 React 应用程序中自动化受保护路由的 Cypress E2E 测试** Emeka Okoli

**长按识别二维码查看原文**   

https://react.statuscode.com/link/168320/web

**📄 2025 年基于 React 的静态站点生成器对比** Morel、Radakovic 和 Dwivedi

**长按识别二维码查看原文**   

https://crystallize.com/blog/react-static-site-generators

**📄 如何在 RedwoodSDK 中使用 React Server Function 流** Herman Stander

**长按识别二维码查看原文**   

https://rwsdk.com/blog/redwoodsdk-streaming-guide

**📄 使用 Vercel 的 AI SDK 构建全栈 AI 聊天应用程序** Robin Wieruch

**长按识别二维码查看原文**   

https://www.robinwieruch.de/react-ai-sdk-chat/

**快讯：**

-   我们最近提到过 RedwoodJS 的计划要分成两部分：Redwood GraphQL 和 RedwoodSDK。后者现在有了一个全新的主页来展示其愿景。
    
    **长按识别二维码查看原文**   
    
    https://redwoodjs.com/
    
-   Vercel 发布了关于 React Router 安全漏洞的简要说明，该漏洞已在 Remix 2.16.3 / React Router 7.4.1 中修复。
    
    **长按识别二维码查看原文**   
    
    https://vercel.com/changelog/protection-against-react-router-vulnerability-cve-2025-31137
    
      
    

🛠 代码与工具

**Frimousse：轻量级、无样式、可组合的 React 表情选择器** —— 这个选择器具有无障碍特性，并且不会显示设备不支持的表情符号。你可以在这里查看演示。

**长按识别二维码查看原文**   

https://github.com/liveblocks/frimousse

liveblocks

**Spectacle：创建精美的 React 驱动演示文稿** —— 一个基于 React 的库，使用 JSX 语法创建精美的演示文稿。它支持代码实时演示、添加交互元素、可滚动代码块、图形特效等功能。

**长按识别二维码查看原文**   

https://nearform.com/open-source/spectacle/

Nearform

**React Three Map 1.0：在 2D 地图中引入 3D 对象** —— 这是一个连接 React Three Fiber 和 react-map-gl 的桥梁，可以创造出像这样有趣的效果。

**长按识别二维码查看原文**   

https://github.com/RodrigoHamuy/react-three-map

oyar

**ChartDB：开源数据库架构图编辑器** —— 可以从头开始创建新的架构，或者快速导入现有架构。支持 Postgres、MySQL、SQL Server、SQLite 等数据库，使用 React 构建。你可以自行部署或在线试用。使用 AGPL 许可证。

**长按识别二维码查看原文**   

https://github.com/chartdb/chartdb

ChartDB Team

📢 其他

以下是 JavaScript 生态圈中一些你可能错过的有趣故事：

-   📊 我们是 Val Town JavaScript 平台的忠实粉丝。Orestis Papadopoulos 展示了如何使用它快速为他的网站添加基本分析功能。
    
    **长按识别二维码查看原文**   
    
    https://www.val.town/
    
-   高效的 `npm` 替代品 pnpm 10.9 已发布，支持安装 JSR 包。
    
    **长按识别二维码查看原文**   
    
    https://github.com/pnpm/pnpm/releases/tag/v10.9.0
    
-   Microsoft Edge 团队正在提议增强 `console.context()` 方法，通过视觉调整和过滤机制使其对开发者更有用。
    
    **长按识别二维码查看原文**   
    
    https://blogs.windows.com/msedgedev/2025/04/22/contextual-logging-with-console-context/
    
-   Matteo Collina 深入研究了 Node.js 的内存使用情况以及如何调优 V8 的垃圾回收。
    
    **长按识别二维码查看原文**   
    
    https://blog.platformatic.dev/optimizing-nodejs-performance-v8-memory-management-and-gc-tuning
    
-   Trevor I. Lasn 解释了 `Float16Array` 类型。
    
    **长按识别二维码查看原文**   
    
    https://www.trevorlasn.com/blog/float16array-javascript
    
      
    

**版本发布：**

-   **📺 React Lite YouTube Embed v2.5** —— 一种更快、更清洁、更私密的 YouTube 视频嵌入方式。
    
-   **Next.js v15.4 Canary** —— 过去几天发布了多个 canary 版本。
    
-   **json-edit-react v1.26** —— 用于编辑/查看 JSON/对象数据的 React 组件。
    
-   **React Spinners v0.17** —— 加载旋转器组件集合。
    
-   **React Suite v5.80** —— React 组件套件。（示例）
    
-   **React Uploady v1.10** —— 用于文件上传的组件和 hooks。
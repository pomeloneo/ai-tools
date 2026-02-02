# React 中文周刊 #221 - Lynx：抖音团队推出的 React Native 替代方案

> 原文链接: http://mp.weixin.qq.com/s?__biz=MzIzOTkwMjM0OQ==&mid=2247540494&idx=1&sn=79bcfc8c2eafe4a51f3ace5fad8d7f5b&chksm=e92114ecde569dfad0e13e6e15a08e0b8475781c28cfa91993914488d8b4fe0dce39476688f5#rd
> 抓取时间: 2026/2/2 23:42:37

---

> 本期看点：抖音团队发布基于 QuickJS 的原生应用开发框架 Lynx，TanStack Form v1.0 正式发布提供类型安全的表单状态管理，Next.js 15.2 推出全新调试体验并支持流式元数据，React Scan 工具助力优化 React 应用性能，TypeScript 5.8 发布并增强 Node.js 支持。

> 编辑：TimLi

🔥 本周热门

**Lynx：React Native 的新选择？** —— 这个标题可能有点夸张，但 Lynx 确实是一个全新的框架，用于构建基于 JavaScript 的原生应用程序。它借鉴了 React Native 的思路，但目标是提供更模块化和灵活的解决方案（最终将支持多个框架）。这个项目来自抖音团队，并已在其内部使用，还配备了自己的基于 QuickJS 的 JavaScript 引擎。

**长按识别二维码查看原文**   

https://lynxjs.org/blog/lynx-unlock-native-for-more

Xuan Huang 和 Lynx 团队

**TanStack Form v1.0：Headless、类型安全的表单状态管理** —— 这是一个筹备了两年多终于发布 v1.0 的项目。它提供了类型安全、框架无关（但与 React 关系密切）、headless 且同构的表单处理方案。如果你已经在使用 Formik 或 React Hook Form，想了解它们之间的区别，可以看看这个对比表格。

**长按识别二维码查看原文**   

https://tanstack.com/blog/announcing-tanstack-form-v1

Tanner Linsley

**▶ 如何用 React Scan 优化你的慢速 React 应用程序** —— React Scan 是一个很实用的工具，可以轻松检测和发现 React 应用程序中的性能问题。如果你还没被说服要尝试它，不妨看看 Jack Herrington 这个 8 分钟的演示视频。

**长按识别二维码查看原文**   

https://www.youtube.com/watch?v=3EnathFYgz8

Jack Herrington

**React Server Actions 实现 Toast 反馈** —— Robin 详细介绍了如何一步步实现 toast 通知，为用户提供实时反馈。

**长按识别二维码查看原文**   

https://www.robinwieruch.de/react-server-actions-toast/

Robin Wieruch

**📄 使用 React 19 的 `cache()` 避免服务器组件的瀑布式获取** Aurora Scharff

**长按识别二维码查看原文**   

https://aurorascharff.no/posts/avoiding-server-component-waterfall-fetching-with-react-19-cache/

**📄 使用 React Three Fiber 创建风格化的水效果** —— 效果非常漂亮！Thalles Lopes

**长按识别二维码查看原文**   

https://tympanus.net/codrops/2025/03/04/creating-stylized-water-effects-with-react-three-fiber/

**📄 不存在真正的同构 Layout Effect** Shane Friedman

**长按识别二维码查看原文**   

https://smoores.dev/post/no\_such\_thing\_isomorphic\_layout\_effect/

**📄 为什么我们放弃了 Next.js** Stewart 和 Snelling

**长按识别二维码查看原文**   

https://northflank.com/blog/why-we-ditched-next-js-and-never-looked-back

**📄 如何为表单编写 Zod Schema 类型** Philip Jones

**长按识别二维码查看原文**   

https://pgjones.dev/blog/how-to-type-zod-form-schemas-2025/

🛠 代码与工具

**React Data Table：响应式动态表格组件** —— 简洁但功能丰富。内置列排序和分页等功能。提供了大量演示和代码示例。GitHub 仓库。

**长按识别二维码查看原文**   

https://reactdatatable.com/

John Betancur

**使用现代依赖的 Electron 应用程序模板** —— 一个基础模板，集成了 React 19、Tailwind CSS 4、shadcn/ui、Electron Vite、Biome，并包含 GitHub Actions 发布工作流。

**长按识别二维码查看原文**   

https://github.com/daltonmenezes/electron-app

Dalton Menezes

**🕒 react-timer-hook：用于处理计时器、秒表和时间状态的 Hook** —— 提供 `useTimer`、`useStopwatch` 和 `useTime` 三个 Hook，用于在组件中实现各种时间相关的逻辑和状态。

**长按识别二维码查看原文**   

https://github.com/amrlabib/react-timer-hook

Amr Labib

**PDFSlick v2.2：查看和交互 PDF 文档** —— 一个功能完整的 PDF 查看器，支持 React、Solid、Svelte 等 JS 框架。基于 PDF.js 构建，使用 Zustand 为文档提供响应式存储。查看演示。

**长按识别二维码查看原文**   

https://pdfslick.dev/

Vancho Stojkov

📢 其他

以下是 JavaScript 生态圈中一些你可能错过的有趣故事：

-   TypeScript v5.8 已发布，这次更新主要关注 Node.js 相关特性，包括新增的 `--erasableSyntaxOnly` 标志，用于防止使用那些无法在 Node 中直接运行的 TypeScript 特有功能。
    
    **长按识别二维码查看原文**   
    
    https://devblogs.microsoft.com/typescript/announcing-typescript-5-8/
    
-   如果你是一个对 TypeScript 工具链和开发体验感到困惑的 JavaScript 开发者，Dr. Axel Rauschmayer 写了一篇《什么是 TypeScript？》的概述。
    
    **长按识别二维码查看原文**   
    
    https://2ality.com/2025/02/what-is-typescript.html
    
-   QuickJS Sandbox 提供了一种在 QuickJS 驱动的沙箱环境中安全运行 JavaScript 代码的方式 —— 这里有在线演示。
    
    **长按识别二维码查看原文**   
    
    https://sebastianwessel.github.io/quickjs/
    
-   free-for.dev 是一个非常实用的大型列表（超过 1000 项），收录了具有免费开发者层级的托管工具和在线服务。
    
    **长按识别二维码查看原文**   
    
    https://free-for.dev/#/
    

**版本发布：**

-   **⭐ Next.js 15.2** —— 重新设计了调试体验，增加了流式元数据，以及对 React View Transitions 的实验性支持。
    
-   **react-responsive v10.0.1** —— 在 React 中使用 CSS 媒体查询。
    
-   **React Native Windows v0.78.0** —— 用于构建原生 Windows 应用程序的框架。
    
-   **React Native Testing Library v13.1** —— React Native 组件测试工具。
    
-   **react-movable v3.4.1** —— React 中列表和表格的垂直拖放功能。
    
-   **React hCaptcha Component v1.12.0** —— 如果你想要一个 reCAPTCHA 的替代品。
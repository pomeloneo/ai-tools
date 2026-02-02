# React 中文周刊 #222 - 如何从 Enzyme 迁移到 React Testing Library

> 原文链接: http://mp.weixin.qq.com/s?__biz=MzIzOTkwMjM0OQ==&mid=2247540599&idx=1&sn=5b428d1585c71ae24c0afe8b6560b541&chksm=e9211495de569d83de5778f2aadee061a6ca1c195fad4e14c7d55ca91087f8c94e4ac7b2d2e4#rd
> 抓取时间: 2026/2/2 23:42:35

---

> 本期看点：纽约时报分享从 Enzyme 迁移到 React Testing Library 的系统性方法，Next.js 官方详解如何构建 API，使用 useMemo 之前应该做的优化，React Three Fiber 教程展示如何重新实现 Crossy Road 游戏，React Complex Tree 提供高级树形组件。

> 编辑：TimLi

🔥 本周热门

**纽约时报如何从 Enzyme 迁移到 React Testing Library** —— 这篇文章深入探讨了纽约时报在不影响终端用户和其他开发者的情况下，逐步升级其 React 测试方法所面临的技术挑战和采取的策略。

**长按识别二维码查看原文**   

https://open.nytimes.com/how-the-new-york-times-systematically-migrated-from-enzyme-into-react-testing-library-b3ea538d001c?gi=2832c1fe6140

Felipe Buenaño（纽约时报开放团队）

💡 如果你喜欢这篇文章，你可能也会对纽约时报升级到 React 18 的经验分享感兴趣。

**长按识别二维码查看原文**   

https://open.nytimes.com/enhancing-the-new-york-times-web-performance-with-react-18-d6f91a7c5af8?gi=9541c40ad5eb

**使用 Next.js 构建 API** —— 这是一篇详细的官方介绍，讲解了如何使用 Next.js 的 App Router 和路由处理程序来构建可供网页、移动端和第三方客户端使用的公共 API 的核心概念。

**长按识别二维码查看原文**   

https://nextjs.org/blog/building-apis-with-nextjs

Lee Robinson

**URL 是存储 React 状态的绝佳位置** —— 这是一个颇具争议的观点，当然它更适合某些特定场景而非所有情况。作者认为，"有时候，存储状态的最佳位置就是 URL 本身。"

**长按识别二维码查看原文**   

https://iamsahaj.xyz/blog/react-state-in-the-url/

Sahaj Jain

**使用 React Three Fiber 重新实现 Crossy Road 游戏** —— 这是一套精心制作的教程，介绍如何使用 React Three Fiber 重新实现经典的 Crossy Road 游戏。教程同时提供了文字和视频形式。

**长按识别二维码查看原文**   

https://javascriptgametutorials.com/tutorials/react-three-fiber/crossy-road

Hunor Márton Borbély

**📄 不要重新发明模态框，使用 React Native Reusables** —— 快速了解 React Native Reusables，这是一套类似 `shadcn/ui` 的组件库。Jared Surato

**长按识别二维码查看原文**   

https://spin.atomicobject.com/modal-react-native-reusables/

**📄 预渲染的 Next.js 网站到底能承受多大流量？** Martijn Hols

**长按识别二维码查看原文**   

https://martijnhols.nl/blog/how-much-traffic-can-a-pre-rendered-nextjs-site-handle

**📺 React Router 中间件来了** —— 这是一个 20 分钟的视频，介绍 React Router v7 如何处理中间件。Alem Tuzlak

**长按识别二维码查看原文**   

https://www.youtube.com/watch?v=H9WmtBchWtQ

**📄 超越 React.memo：更智能的性能优化方法** Christian Ekrem

**长按识别二维码查看原文**   

https://cekrem.github.io/posts/beyond-react-memo-smarter-performance-optimization/

**📄 为什么 React 为 LLM 工作流提供了最佳模型** Evan Boyle

**长按识别二维码查看原文**   

https://www.gensx.com/blog/why-react-is-the-best-backend-workflow-engine

🛠 代码与工具

**React Complex Tree：一个无障碍树形组件** —— 这是一个高级树形组件，支持多选、拖放、重命名和键盘控制。

**长按识别二维码查看原文**   

https://rct.lukasbach.com/

Lukas Bach

**Search Input Query：搜索输入查询解析器和 React 组件** —— 这个库可以接收结构化搜索查询，解析它，生成 SQL，同时还提供了用于输入此类查询的 React 组件。这是一种有趣的方法。

**长按识别二维码查看原文**   

https://github.com/williamcotton/search-input-query

William Cotton

**UVCanvas：从 React 渲染着色画布** —— 这些示例非常精彩，一看就能明白——从简洁明了的效果到类似 macOS 屏幕保护程序和熔岩灯般的体验。

**长按识别二维码查看原文**   

https://uvcanvas.com/

Latent Cat

**⌘K：一个快速、可组合、无样式的"命令菜单"控件** —— 主页包含了各种风格的精美示例。GitHub 仓库。需要 React 18+。

**长按识别二维码查看原文**   

https://cmdk.paco.me/

Paco Coursey

**🔎 React Native 包检查器** —— 一个在线工具，用于检查 React Native 包与"新架构"的兼容性。

**长按识别二维码查看原文**   

https://react-native-package-checker.vercel.app/

Sandip Shiwakoti

**Ink v5.2：使用 React 构建交互式命令行应用程序** —— 这是一个基于终端的 React 渲染器，让你可以使用 React 风格的组件构建命令行应用程序。

**长按识别二维码查看原文**   

https://github.com/vadimdemedes/ink

Vadim Demedes

📢 其他

以下是一些你可能错过的广泛领域内的有趣故事：

-   Deno 团队做了一个 Node 和 Deno 的 TypeScript 支持对比。
    
    **长按识别二维码查看原文**   
    
    https://deno.com/blog/typescript-in-node-vs-deno
    
-   TypeScript 正在将其编译器移植到 Go 语言。最大的收益？构建速度提升 10 倍。
    
    **长按识别二维码查看原文**   
    
    https://socket.dev/blog/typescript-porting-compiler-to-go
    
-   🤖 LM Studio 是一个流行的用于处理本地 LLM 模型的桌面应用程序，它现在有了官方的 `lmstudio-js` 库，可以通过 JavaScript 与之交互。
    
    **长按识别二维码查看原文**   
    
    https://lmstudio.ai/
    
-   还没被 TypeScript 说服？Dr. Axel Rauschmayer 为你准备了一个"推销词"。如果有人能说服我，那一定是他！
    
    **长按识别二维码查看原文**   
    
    https://2ality.com/2025/03/typescript-sales-pitch.html
    

**版本发布：**

-   **React Aria 3 月 5 日发布** —— Adobe 强大组件集的重要更新，现在新增了 `Toast`、`Tree` 和 `Virtualizer` 组件。
    
-   **Reassure v1.4** —— React 和 React Native 的性能测试伴侣。
    
-   **react-jsx-parser v2.4** —— 解析 JSX 并输出渲染的组件。
    
-   **Motion v12.5**
# React 中文周刊 #239 - Untitled UI React 全新 UI 组件库发布

> 原文链接: http://mp.weixin.qq.com/s?__biz=MzIzOTkwMjM0OQ==&mid=2247542849&idx=1&sn=7868bb3744cffb820841c9251c0e7e56&chksm=e92163a3de56eab55497d0d42eb0c6d576f2673d78e68fe18ee0cee0a3fb23cdba26fdaaabba#rd
> 抓取时间: 2026/2/2 23:41:56

---

> 本期看点：Untitled UI React 基于 Tailwind CSS 和 React Aria 构建的大型开源组件库正式发布，React Compiler 新官方文档预发布，Zustand 状态管理入门指南，React Router 和 RSC 谁是未来？Reagraph：基于 WebGL 的 React 网络图可视化工具。

> 编辑：TimLi

🔥 本周热门

**Untitled UI React：一个全新的 UI 组件库** —— 这是一个基于 Tailwind CSS 和 React Aria 构建的大型开源（MIT 许可）组件集合，让你可以"复制、粘贴并构建"——这里有完整的介绍。不过，它并非完全开源，还提供了一个"PRO"版本，包含更多组件、示例和 Figma 集成功能。

**长按识别二维码查看原文**   

https://www.untitledui.com/react

Untitled UI

**React Compiler 新文档发布** —— React 团队一直在努力改进 React Compiler 的官方文档。虽然这个预先优化工具目前还处于候选发布阶段，但如果你想深入了解，这份改进后的文档是个不错的开始。

**长按识别二维码查看原文**   

https://react.dev/learn/react-compiler

React 团队

**▶ Figma MCP 对战 Claude：UI 构建大比拼** —— Jack 在 Figma 中设计了一个基础应用程序视图，想将其转换为可用的 React 代码。哪种方式更好呢？是截图后让 Claude Code 尝试实现，还是使用 Figma 自己的 MCP 服务器来完成工作？（8 分钟视频）

**长按识别二维码查看原文**   

https://www.youtube.com/watch?v=uGp5kTPWaqY

Jack Herrington

**Zustand 状态管理入门指南** —— Zustand 这个"轻量级"状态管理方案现在已经成熟、流行且经过实战检验。如果你一直在等待一份全面的入门指南，这篇文章正是为你准备的。

**长按识别二维码查看原文**   

https://frontendmasters.com/blog/introducing-zustand/

Adam Rackis

**React Router 与 React Server Components：未来发展方向** —— 如果你是 React Router 用户，并且想要使用 React Server Components，来看看未来会有什么变化："影响可能比你想象的更大。"

**长按识别二维码查看原文**   

https://remix.run/blog/react-router-and-react-server-components

Ebey 和 Dalgleish

📄 **如何使用 Matter.js 和 React Native Skia 构建 2D 游戏物理效果** Daniel Friyia（Expo）

**长按识别二维码查看原文**   

https://expo.dev/blog/build-2d-game-style-physics-with-matter-js-and-react-native-skia

📄 **我们将 Next.js 站点迁移到 Eleventy 后性能提升了 24%** —— Eleventy (11ty) 是一个流行的基于 Node 的静态站点生成器。Dan Webb

**长按识别二维码查看原文**   

https://etch.co/blog/we-migrated-our-site-to-eleventy-and-increased-performance-by-24-percent

📄 **使用 Okta 创建带有社交登录认证的 React PWA** Emmanuel Folaranmi（Okta）

**长按识别二维码查看原文**   

https://developer.okta.com/blog/2025/07/22/react-pwa

🛠 代码、工具和库

  

**Reagraph：基于 WebGL 的 React 网络图可视化工具** —— 它有详细的文档和完整的 Storybook 实例，包含大量示例代码。GitHub 仓库。

**长按识别二维码查看原文**   

https://reagraph.dev/

REAGRAPH

**React Unity WebGL v10.0：在 React 应用程序中嵌入 Unity WebGL 应用程序** —— Unity 最出名的是作为 3D 游戏开发平台，但也可用于更广泛的应用场景。React Unity WebGL 现已迎来 8 岁生日，它可以帮助你将基于 WebGL 的 Unity 应用程序与 React 应用程序集成，并实现两者之间的通信。GitHub 仓库。

**长按识别二维码查看原文**   

https://react-unity-webgl.dev/

Jeffrey Lanters

**React CodeMirror：CodeMirror 编辑器组件** —— CodeMirror 是一个流行的 JavaScript 代码编辑器，这个组件让它在 React 中更容易使用。主页上有一个完整的、可定制的演示展示了其潜力。GitHub 仓库。

**长按识别二维码查看原文**   

https://uiwjs.github.io/react-codemirror/

UIW

**fluent-state：流畅、不可变的 React 本地状态管理工具** —— 一个基于代理的 hook，用于深层嵌套的响应式状态、计算响应式状态和内置效果——零样板代码，无需 reducer，没有魔法。

**长按识别二维码查看原文**   

https://github.com/marsbos/fluent-state

Marcel Bos

📢 其他

以下是一些其他有趣的 JavaScript 生态圈新闻，以防你错过：

-   Platformatic 推出了在 Node.js 中运行 Laravel 应用程序的方法。
    
    **长按识别二维码查看原文**   
    
    https://blog.platformatic.dev/laravel-nodejs-php-in-watt-runtime
    
-   Bun v1.2.19 已发布，新增了使用类似 pnpm 的隔离式符号链接 `node_modules` 的选项（通过 `bun install`），交互式包更新器，VS Code Test Explorer 集成，更快的集成 Postgres 客户端等功能。
    
    **长按识别二维码查看原文**   
    
    https://bun.sh/blog/bun-v1.2.19
    
-   eslint-config-prettier 包最近遭到破坏，这里有关于事件经过和原因的分析。
    
    **长按识别二维码查看原文**   
    
    https://safedep.io/eslint-config-prettier-major-npm-supply-chain-hack/
    
-   bhvr 是一个有趣的新尝试，旨在使用 Hono 和 Vite 创建基于 React 的全栈应用程序框架。（bhvr 代表 Bun、Hono、Vite 和 React。）
    
    **长按识别二维码查看原文**   
    
    https://bhvr.dev/
    
      
    

**版本发布：**

-   **React Markdown Editor v4.0.8** —— 简单的 Markdown 编辑器，支持语法高亮，不依赖大型编辑器组件。（演示）
    
-   **Yet Another React Lightbox v3.25** —— 现代 React 灯箱组件。
    
-   **React Native Audio API v0.6.5** —— 基于 Web Audio API 的音频引擎。
    
-   **React Admin v5.10** —— 用于构建 B2B 前端界面的框架。
    
-   **React Stripe.js v3.8** —— Stripe.js 和 Stripe Elements 的组件。
    
-   **React Native Rich Text Editor v1.10**
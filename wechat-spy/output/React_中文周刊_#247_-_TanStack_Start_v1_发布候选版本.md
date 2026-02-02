# React 中文周刊 #247 - TanStack Start v1 发布候选版本

> 原文链接: http://mp.weixin.qq.com/s?__biz=MzIzOTkwMjM0OQ==&mid=2247543793&idx=1&sn=d9d1b6aef44005f509c5c75996af7651&chksm=e9216013de56e9052b1da3af32f3dbdeb7e3e24614becb67825800d0c0a3151ec63649691247#rd
> 抓取时间: 2026/2/2 23:41:38

---

> 本期看点：TanStack Start v1 发布候选版本；React Router 7.9.0 中中间件功能现已稳定；React Old Icons：2000+ 经典复古图标;nuqs：类型安全的搜索参数状态管理。

> 编辑：TimLi

🔥 本周热门

**TanStack Start v1 发布候选版本** —— 这个一年前首次出现在我们视野中的 TanStack Router 驱动的全栈框架，现已发布 v1.0 候选版本。这个版本预计将与最终的 1.0 版本基本一致。用他们自己的话说："这是构建类型安全、高性能 React 应用程序的新篇章，无需繁重的抽象层。"

**长按识别二维码查看原文**   

https://tanstack.com/blog/announcing-tanstack-start-v1

Tanner Linsley

**React Router 中的中间件功能现已稳定** —— 在 React Router 7.9.0 版本中，通过 `future.v8_middleware` 标志，中间件功能已经稳定。来看看它能解决哪些问题，以及它带来的新模式。

**长按识别二维码查看原文**   

https://remix.run/blog/middleware

Matt Brophy (Remix)

**你可能需要 `useSyncExternalStore`** —— "当你看到一个 `useEffect` 更新 `useState` 并返回一个值时，你可能需要的是 `useSyncExternalStore`。"

**长按识别二维码查看原文**   

https://swizec.com/blog/you-may-be-looking-for-a-useSyncExternalStore/

Swizec Teller

**📄 如何组织 Expo 应用程序的文件夹结构** —— 这永远是值得做对的事情。Kadi Kraman (Expo)

**长按识别二维码查看原文**   

https://expo.dev/blog/expo-app-folder-structure-best-practices

**📄 约束的规范：Elm 教会我关于 React 的 `useReducer` 的事** Christian Ekrem

**长按识别二维码查看原文**   

https://cekrem.github.io/posts/the-discipline-of-constraints-elm-usereducer-lessons/

**📄 使用 React Three Fiber 创建沉浸式 3D 天气可视化** Carter Rink

**长按识别二维码查看原文**   

https://tympanus.net/codrops/2025/09/18/creating-an-immersive-3d-weather-visualization-with-react-three-fiber/

**📄 在 React 中使用 Framer Motion 制作元素动画** Sukanta Biswas

**长按识别二维码查看原文**   

https://medium.com/@biswas.sukanta47/animating-elements-through-framer-motion-with-react-js-cdcfb2ce68b8

**快讯：**

-   🇫🇷 React Paris 2026 将于明年 3 月 26-27 日举行，演讲征集截止到 11 月 26 日。
    
    **长按识别二维码查看原文**   
    
    https://react.paris/
    
-   InfoQ 分享了关于 Preact 11 beta 版本特性的更新，这是这个流行的轻量级 React 替代方案的最新更新。
    
    **长按识别二维码查看原文**   
    
    https://www.infoq.com/news/2025/09/preact-11-beta/
    
-   💰 Cloudflare 解释了为什么要与 Netlify 和 Webflow 合作赞助 Astro 和 TanStack，这两个 React 生态系统中的重要项目。
    
    **长按识别二维码查看原文**   
    
    https://blog.cloudflare.com/cloudflare-astro-tanstack/
    
      
    

🛠 代码与工具

**React Old Icons：2000+ 经典复古图标** —— 虽然我不确定你会在哪里或如何使用它，但这次怀旧之旅确实让我很享受。这是一个组件库，提供了来自各种复古操作系统（如 Windows 95）和应用程序的数千个图标。不过，这些图标的所有权需要你谨慎使用。GitHub 仓库。

**长按识别二维码查看原文**   

https://gsnoopy.github.io/react-old-icons/

Gustavo Borges

**eslint-plugin-react-you-might-not-need-an-effect** —— 多么有趣的项目名称！这是一个 ESLint 插件，用于捕获不必要的 `useEffect`，你可能正在过度使用它。

**长按识别二维码查看原文**   

https://github.com/NickvanDyke/eslint-plugin-react-you-might-not-need-an-effect

Nick van Dyke

**nuqs：类型安全的搜索参数状态管理** —— 想象一下 `useState`，但状态存储在 URL 查询字符串中并与之同步。支持 Next.js、普通 React、Remix、React Router、TanStack Router 和通过适配器的自定义路由器。GitHub 仓库。

**长按识别二维码查看原文**   

https://nuqs.dev/

François Best

**🗓️ react-native-big-calendar：类似 GCal / Outlook 风格的日历组件** —— 你可以在项目的 Storybook 上体验一些演示。

**长按识别二维码查看原文**   

https://github.com/acro5piano/react-native-big-calendar

Kay Gosho

📢 其他

以下是 JavaScript 生态圈中一些其他有趣的故事，以防你错过：

-   GitHub 的安全研究高级总监分享了 GitHub 对更安全的 npm 供应链的计划，以应对最近的事件。
    
    **长按识别二维码查看原文**   
    
    https://github.blog/security/supply-chain-security/our-plan-for-a-more-secure-npm-supply-chain/
    
-   Jake Archibald 探讨了使用响应流和获取上传流来测量下载/上传进度的局限性。
    
    **长按识别二维码查看原文**   
    
    https://jakearchibald.com/2025/fetch-streams-not-for-progress/
    
-   Alem Tuzlak 比较了 Solid 和 React，得出结论说 Solid "让我看到了 React 可能成为的样子，但可能永远不会实现。"
    
    **长按识别二维码查看原文**   
    
    https://react.statuscode.com/link/174725/web
    
-   ▶️ Vue 的 Evan You 最近接受了 Laravel 项目的 Nuno Maduro 的采访，谈到了他在 Google 的背景、Vue.js 的创建过程、Next.js 和 Nuxt 之间的关系，以及他目前在 void(0) 的工作。
    
    **长按识别二维码查看原文**   
    
    https://www.youtube.com/watch?v=FS0Ds0nIC8E
    
-   IINA 是 macOS 上一个流行的开源媒体播放器，它刚刚添加了基于 JavaScript 的插件系统，让用户可以扩展其功能。
    
    **长按识别二维码查看原文**   
    
    https://iina.io/
    

**版本发布：**

-   **react-medium-image-zoom v5.4** —— 受 Medium.com 启发的图片组件。（多个在线示例。）
    
-   **react-jsx-parser v2.4.1** —— 解析 JSX 并输出渲染的组件。
    
-   **Wasp v0.18** —— Wasp 是一个使用 Node、React 和 Prisma 的类 Rails 框架。
    
-   **Ink v6.3.1** —— 使用 React 构建命令行应用程序。
    
-   **ESLint v9.36.0**
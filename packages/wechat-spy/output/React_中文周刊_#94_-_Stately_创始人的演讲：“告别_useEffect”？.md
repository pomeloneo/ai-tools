# React 中文周刊 #94 - Stately 创始人的演讲：“告别 useEffect”？

> 原文链接: http://mp.weixin.qq.com/s?__biz=MzIzOTkwMjM0OQ==&mid=2247507177&idx=1&sn=2a3f1b5e76df80c7654f5f0dc2b1901a&chksm=e921970bde561e1d335701a80134c71b6b389829851ece730bfed2a0ecf036017701cab9d7f7#rd
> 抓取时间: 2026/2/2 23:47:12

---

> 本期看点：本期为大家带来了构建可在 React 中使用的具备互操作性的 Web Components 与 Remix Conf 2022 概览等优秀文章。点击本期周刊查看更多精彩文章！

> 编辑：Tmk、syjstc、edison-hm、whatwewant

## 🔥 本周热门

▶  **David Khourshid 在 Reactathon Talk 的主题演讲：“告别 useEffect”？** — **Stately** 的创始人 David Khourshid 提出，可以通过 event handler 结合状态机来简化对 effect 的处理，而不是使用 “useEffect”。因为 “useEffect” 使得很多开发者苦不堪言，而且有些场景 \`useEffect\` 也不是最优解。

**长按识别二维码查看原文**   

https://www.youtube.com/watch?v=HPoC-k7Rxwo

David Khourshid

**构建可在 React 中使用的具备互操作性的 Web Components** — 如果你正在使用不同的框架，如 React、Svelte、Vue 等，那么通常会为每个框架选择相应的组件库。但如果你想以与框架无关的方式实现编写一次组件即可到处运行的话，Web Components 提供了一种方案。

**长按识别二维码查看原文**   

https://css-tricks.com/building-interoperable-web-components-react/

Adam Rackis

**Remix Conf 2022 概览** — 本文是对最近在犹他州盐湖城结束的 **Remix Conf 2022** 的一篇独家总结。

**长按识别二维码查看原文**   

https://crystallize.com/blog/remix-conf-2022

Sébastien Morel

**Plasmo: “就像是用于开发浏览器扩展的 Next.js”** — 一个面向 React 和 TypeScript，用于构建浏览器扩展的框架，包含实时重新加载、自动部署到主要扩展市场等功能。

**长按识别二维码查看原文**   

https://github.com/PlasmoHQ/plasmo

Plasmo

**快讯**

-   Gatsby 的 Patrick Sullivan **介绍了一下 Gatsby 框架和 Gatsby Cloud 的最新更新**。
    
    **长按识别二维码查看原文**   
    
    https://www.gatsbyjs.com/blog/launch-week-the-latest-updates-to-gatsby-cloud-and-the-gatsby-framework/  
    
-   **React Norway** 将于 6 月 24 日在挪威拉尔维克举行。如果你无法亲自前往，也可以选择虚拟门票。
    
    **长按识别二维码查看原文**   
    
    https://reactnorway.com/  
    

**如何在 Go 二进制文件中嵌入 React 应用程序** — **Go** 是一种用于编写后端 API 的流行语言，您可以将 Go 应用程序编译为单个、易于共享的二进制文件。你也可以把你的前端应用也放在里面。

**长按识别二维码查看原文**   

https://www.smartinary.com/blog/how-to-embed-a-react-app-in-a-go-binary/

Nils Caspar

**如何使用 React-Markdown 创建一个可“复制代码”的按钮组件** — 结合 **react-markdown** 和 **react-syntax-highlighter** 可以实现只需单击一次按钮即可快速轻松地复制代码。

**长按识别二维码查看原文**   

https://designly.biz/blog/post/react-markdown-how-to-create-a-copy-code-button

Jay Simons (Designly Blog)

**使用 3D 渲染对 React 18 的并发功能进行压力测试** — React 18 包含了备受期待的 **并发特性**。本文介绍了如何利用这一强大的新功能逐步优化一个 3D 可视化的示例。

**长按识别二维码查看原文**   

https://dawchihliou.github.io/articles/stress-testing-concurrent-features-in-react-18

Daw-Chih Liou

**你应该如何选择 Framer Motion 和 Motion One？** — **Framer Motion** 和 **Motion One** 的作者比较了这两个 JavaScript 动画库。他认为如果你使用 React，Framer Motion 会是更好的选择。

**长按识别二维码查看原文**   

https://motion.dev/blog/should-you-use-framer-motion-or-motion-one

Matt Perry

如何阅读 React-Query 的源码 — 本文介绍了作者如何探索和理解陌生的代码库。

**长按识别二维码查看原文**   

https://alexkondov.com/reading-source-code-react-query/

Alex Kondov

## 🛠  代码与工具

Planby：一款可用于实现类似 EPG 时间线的 React 组件 — 类似于有线电视或流媒体服务上的“电子节目指南（EPG）”，你可以 **在这里** 查看一些自定义示例。

**长按识别二维码查看原文**   

https://github.com/karolkozer/planby

karol kozer

gl-react：简化 WebGL 着色器 — 一款用于编写和组合 **WebGL 着色器** 的库，支持创建复杂的动画图形效果，**点此查看示例**。

**长按识别二维码查看原文**   

https://github.com/gre/gl-react

Gaëtan Renaudeau

Locofy：将 Figma 设计稿像素级还原为 React 代码 — 将 **Figma** 设计稿直接转换成生产级别的 React 代码。

**长按识别二维码查看原文**   

https://www.locofy.ai/convert/figma-to-react

Locofy

ReactiveMaps v3.0：构建地理搜索界面的 UI 组件库 — 新版本支持 OpenStreetMaps 和谷歌地图，并支持为 **Elasticsearch、OpenSearch** 和 **MongoDB Atlas Search** 后端创建丰富的搜索体验。

**长按识别二维码查看原文**   

https://blog.reactivesearch.io/reactivemaps-3-0-release-geo-search-uis

ReactiveSearch Blog

**⚡️ 好库推荐：**

**react-text-transition v2.0** — 一款以动画的方式展现文本变化的组件

**react-pin-field** — 一款简单易用的 React 组件，实现了 MFA（Multi-factor authentication） 之一的 PIN 码

**react-chartjs-2 v4.2** — Chart.js 的 React 封装

**Ruck** — 一款 Deno 平台下的 React Web 应用框架，无需打包过程

## 🙋🏻‍♀️
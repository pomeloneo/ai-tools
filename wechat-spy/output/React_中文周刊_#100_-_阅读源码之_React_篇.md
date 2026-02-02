# React 中文周刊 #100 - 阅读源码之 React 篇

> 原文链接: http://mp.weixin.qq.com/s?__biz=MzIzOTkwMjM0OQ==&mid=2247508732&idx=1&sn=4a78734d69d267a21891af13ec0b3637&chksm=e921e91ede566008418986acb5bc69b72c2d11688a985e43096e60e4ed51bbf317b5330150cc#rd
> 抓取时间: 2026/2/2 23:46:59

---

> 本期看点：使用 Fresh 打造快捷的 React 应用；介绍几个相对冷门的 React Hook；在 TypeScript 中使用 React 的 “useRef”；在“localStorage”中存储状态。

> 编辑：edison-hm、tmkx、iShawnWang、whatwewant

## 🔥 本周热门

**阅读源码之 React 篇** — 对于学习一个项目来说，没有比深入研究其源码更好的方式了。尽管这个过程是令人望而生畏的，但是作者仍然克服恐惧做了一番研究，本文并不是要详尽地描述 React 是如何工作的，而是主要关注了 React 的设计和 React 开发人员多年来采用的实践。

**长按识别二维码查看原文**   

https://alexkondov.com/readint-source-code-react/

Alex Kondov

▶  **使用 Fresh 打造快捷的 React 应用** — 作者是 YouTube 上最受欢迎的 React 开发者之一，在视频中他简单介绍了 **Fresh** 并基于 Fresh 完成了一个 demo。Fresh 是一个新的基于“岛屿”（island-based）的 Web 框架，它使用了很接近 React 的 Preact 和 JSX 进行渲染和模板化。

**长按识别二维码查看原文**   

https://www.youtube.com/watch?v=Q4dos7-gX68

Jack Herrington

**Remix 和 Next.js 的区别** — 本文对这两个基于 React 的框架进行了逐个特性的比较，它们有很多相似之处，但也有一些关键的区别。

**长按识别二维码查看原文**   

https://www.smashingmagazine.com/2022/07/look-remix-differences-next/

Facundo Giuliani

**React, Vue, Angular 和 Svelte 的流行指数** — 有些人会认为流行度无法衡量，但本文从多个方面来比较，并使用公开数据来量化流行的前端框架的受欢迎程度。结果不出所料，React 位居榜首。

**长按识别二维码查看原文**   

https://gist.github.com/tkrotoff/b1caa4c3a185629299ec234d2314e190

Tanguy Krotoff

**快讯**

-   React Brussels 2022 活动会将其利润的 10% 捐赠给一个项目。如果你有一个与 React 相关的开源项目，**填写此表格**，或许可以赢得捐赠。
    
    **长按识别二维码查看原文**   
    
    https://docs.google.com/forms/d/e/1FAIpQLSftvS2sf\_tQ\_IoVG3UaFhSYK64cDTJVZMAKKLJrzGbNsvhKWA/viewform  
    
-   **Docusaurus v2.0 的第一个候选版本** 已经发布了，Docusaurus 是一个日益流行的支持 React 和 MDX 的内容站点框架。**点击查阅更多关于他们的发布流程**。
    
    **长按识别二维码查看原文**   
    
    https://github.com/facebook/docusaurus/releases/tag/v2.0.0-rc.1  
    
-   React Native 团队的 Michael Leon 宣布了在 React Native v0.70 以后 **Hermes 将成为默认的 JavaScript 引擎** 并解释了这样做的好处（其中一点是可以有更快的启动时间）。
    
    **长按识别二维码查看原文**   
    
    https://reactnative.dev/blog/2022/07/08/hermes-as-the-default  
    

**介绍几个相对冷门的 React Hook** — 简单介绍五个 React 中相对冷门的 Hooks，它们是：“useReducer“、“useRef“、“useImperativeHandle“、“useMemo“ 和 “useCallback“。

**长按识别二维码查看原文**   

https://css-tricks.com/react-hooks-the-deep-cuts/

Blessing Ene Anyebe

▶  **Kent 本次播客的主题：你会去阅读 React 的源码嘛?** — Kent 的播客有一个线上问答环节，你可以提问，Kent 会聆听并做出回应。这一次，Kent 评论了一个关于阅读 React 源代码的问题，他自己不经常阅读，但偶尔会看到这样做的价值。（时长 4 分钟）

**长按识别二维码查看原文**   

https://kentcdodds.com/calls/01/66/do-you-read-the-react-source-code

Kent C. Dodds podcast

**在 TypeScript 中使用 React 的 “useRef”**

**长按识别二维码查看原文**   

https://www.robinwieruch.de/typescript-react-useref/

Robin Wieruch

**▶  探索 React Native v0.69**

**长按识别二维码查看原文**   

https://reactnativeradio.com/episodes/rnr-242-inspecting-react-native-069

React Native Radio podcast

**在“localStorage”中存储状态**

**长按识别二维码查看原文**   

https://www.robinwieruch.de/local-storage-react/

Robin Wieruch

## 🛠  代码与工具

**SVGR：将 SVG 转换为 React 组件** — 如果你觉得听起来很不错的话，可以将你的 **SVG** 文件复制到这个 **在线平台** 上。

**长按识别二维码查看原文**   

https://github.com/gregberge/svgr

Greg Bergé

**react-burger-menu：一个使用 CSS 转场和 SVG 路径动画的工具条组件** — 官网上的演示让你可以尝试所有不同的动画效果。我从来没有意识到我们有这么多的方式弹出菜单！**GitHub  仓库**。

**长按识别二维码查看原文**   

https://negomi.github.io/react-burger-menu/

Imogen Wentworth

TanStack Table v8：构建表格和数据网格的无头 UI — 想要完成管理表格或数据网格元素的艰巨工作，但又想自己完全控制标记和样式？这正是你所需要的（如果“无头 UI”的想法对你来说是全新的，请 **阅读本文**）。注意，这不仅只提供 React 版本（纯 JS、Vue、Solid 和 Svelte 也可以使用）。

**长按识别二维码查看原文**   

https://tanstack.com/table/v8

Tanner Linsley

**fireworks-js** — 一个简单的渲染烟花效果的库，现在是它的第二个主要版本。

**长按识别二维码查看原文**   

https://github.com/crashmax-dev/fireworks-js

**react-simply-carousel** — 简单、轻量，完全可定制的走马灯组件，支持 SSR。

**长按识别二维码查看原文**   

https://github.com/vadymshymko/react-simply-carousel

**react-easy-infinite-scroll-hook** — 一个可以为任何组件添加无限滚动的 Hook，如他们的 **演示** 所示。

**长按识别二维码查看原文**   

https://github.com/vdmrgv/react-easy-infinite-scroll-hook

**react-super-responsive-table** — 在手机屏幕上也能很好地展示表格数据。

**长按识别二维码查看原文**   

https://github.com/coston/react-super-responsive-table

**⚡️ 好库推荐：**

**react-spring 9.5** – 基于物理学中弹簧概念的 React 动画库。

**长按识别二维码查看原文**   

https://github.com/pmndrs/react-spring

**react-spreadsheet-grid 2.1** – 类似 Excel 的网格组件。

**长按识别二维码查看原文**   

https://github.com/denisraslov/react-spreadsheet-grid

**Remotion 3.1.3** – 用 React 以编程的方式创建视频。

**长按识别二维码查看原文**   

https://github.com/remotion-dev/remotion

**react-three-fiber 8.2** – Three.js 的 React 渲染器。

**长按识别二维码查看原文**   

https://github.com/pmndrs/react-three-fiber

**react-native-permissions 3.6** – 一款拥有统一 API 的跨平台权限库。

**长按识别二维码查看原文**   

https://github.com/zoontek/react-native-permissions

**react-big-calendar 1.5** - 一款 React 日历组件。

**长按识别二维码查看原文**   

https://github.com/jquense/react-big-calendar

## 🙋🏻‍♀️
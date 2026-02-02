# React Status 中文周刊 #23 - React 的创造者离开了 Facebook

> 原文链接: http://mp.weixin.qq.com/s?__biz=MzIzOTkwMjM0OQ==&mid=2247486022&idx=1&sn=e0a3f1dc1a7ae6c8c178b7a88bf7c43a&chksm=e92241a4de55c8b27488014ccb2450dcf3586f3453376c719b8cf93372246d857904cc0dbd5c#rd
> 抓取时间: 2026/2/2 23:49:46

---

> 本周有很多很实用的教程和库推荐。比如 `react-figma` 可以直接在 Figma 中渲染 React 组件。
> 
> **春****节将近，疫情肆虐，大家注意防护。**  
> 
> 电脑阅读，请访问 **https://docschina.org/weekly/react**

## 🔥 本周热门

**React 的创造者离开了 Facebook** — Jordan Walke，大家可能对他并不熟悉，但是他已经离开了 Facebook。在 Facebook 工作的十年期间，他创造了 React 和 Reason。在宣布离职的时候，他只是透露了“正在创建一家新公司”的讯息，同时还将对构建 React/Reason 生态的初创公司进行投资。

twitter 原文：https://twitter.com/jordwalke/status/1347695301436456963?s=20

Jordan Walke

**优秀的 React/Rails 架构** — 我们一直对优秀的 B2C 团队的内部架构很感兴趣，在本文中，一些来自 Stitch Fix 样式小组的成员将为我们介绍他们的内部架构，特别是他们如何将 React 与 Rails 进行融合的。

原文链接：https://multithreaded.stitchfix.com/blog/2021/01/06/a-better-react-rails-architecture/

Claire Niederberger and Matthew McMillion

**React 服务端渲染（SSR）简介** — 在第 220 期中，我们介绍了当前正在开发的全新 React 服务端组件。但是它并**不能**代替 SSR，而是与它互补。鉴于 SSR 在未来一段时间内将会成为热门，所以作者写了这篇文章介绍 SSR。

原文链接：https://medium.com/javascript-in-plain-english/intro-to-react-server-side-rendering-3c2af3782d08

Suhan Wijaya

**Valtio：让 React 代理状态变得简单** — 上周，状态管理似乎并没有什么新闻，但是本周我们发现了一个新的状态管理库 Valtio -- 在简介中，它自称“可能是最小的代理状态库”，或者，“类似 MobX，但是剔除了 99% 的 API”。

仓库地址：https://github.com/pmndrs/valtio

Poimandres

**date-range-picker：灵活且无依赖的 React 日期范围选择器组件** — 查看示例，直接体验

仓库地址：https://github.com/almogtavor/date-range-picker

Almog Tavor

## 📘 教程与趣事

**如何使用 \`useCallback\` 来优化 React 代码** — 尽管 React 以高性能著称，但是有些情况下，笨拙的组件还是会造成页面卡顿。在这种情况下，你可能需要使用 useCallback 来优化你的代码，避免不必要的渲染。

原文链接：https://medium.com/swlh/how-to-use-usecallback-to-write-better-react-code-238074414881

Caelin Sutch

**使 React 最小化：React 前端入门** — Alex 博士介绍了如何在使用_尽可能少的库_的同时使用 React，这其中包括了他自己的状态管理库。原文写于 2020 年。

原文链接：https://2ality.com/2020/08/minimal-react.html

Dr. Axel Rauschmayer

**▶ 一小时带你构建 Minecraft** — 凭借其成为有史以来最受欢迎的视频游戏的骄人业绩 (已出售两亿)，作者非常希望帮助你在一个小时内构建出 Minecraft。现在，在 Three.js 的帮助下，你可以做到了。

视频地址：https://www.youtube.com/watch?v=aWQmuTiThTs

Daniel Bark

**▶ Ignite Flame：最受欢迎的 React Native 模板代码** — 你可以在本集中的 React Native Radio 中了解 Ignite Flame。如果你只想简单了解一下它，可以阅读一下 Jamon 的博客。

音频地址：https://reactnativeradio.com/episodes/rnr-184-ignite-flame-react-native-boilerplate

Jamon Holmgren and Harris Robin Kalash 博客

**使用 Recoil 重构 Redux 应用** — 使用 Facebook 的 Recoil 库来重构 Redux 应用，并比较它们在实现上的差异。

原文链接：https://blog.logrocket.com/refactoring-redux-app-to-use-recoil/

Ohans Emmanuel

**2021 年 7 个必须了解的 React Native 库** — 尽管是基础介绍，但相对完整，实现了许多移动应用用户所期望的功能。

原文地址：https://medium.com/javascript-in-plain-english/top-7-react-native-packages-to-look-up-in-2021-b98aef32cbe4

Mohit

**Redux Reducers 的工作原理**

原文地址：https://www.smashingmagazine.com/2020/12/how-redux-reducers-work/

Fortune Ikechi

## 🛠 代码与工具

**React D3 Tree 2.0：广受欢迎的交互式层次结构表示组件** — D3 树功能是 React 组件层次信息的起点。查看例子，了解这个功能。

仓库地址：https://github.com/bkrem/react-d3-tree

Ben Kremer

**React Figma：现在你可以在 Figma 中渲染 React 组件** — Figma，是一个设计协作平台，用户增长非常迅速，得益于它支持使用 React 组件。

仓库地址：https://github.com/react-figma/react-figma

React Figma

**DraftJS Plugins：用于扩展广受欢迎的富文本编辑器的插件框架** — 强大的开发人员团队已经使用该框架开发了丰富的插件库，这些插件向 Draft.js 添加了很多受欢迎的功能。

仓库地址：https://github.com/draft-js-plugins/draft-js-plugins

Draft-JS-Plugins

**React 中使用 iframe 的顶级库** — iframe 一直伴随着着 web 开发，并且今天它们仍在普遍使用，没有迹象表明它们会被废弃。这四个库帮助你更好的在 React 中使用 iframe。

原文链接：https://blog.bitsrc.io/npm-libraries-for-iframes-in-react-b6eeb7c16b0f

Ashan Fernando

**OpenMTP：适用于 macOS 的 Android 文件传输** — **“轻松帮助你将文件从 macOS 传输到 Android 或 MTP 设备”**。

仓库地址：https://github.com/ganeshrvel/openmtp  

Ganesh Rathinavel

**Glaze：CSS-in-JS 微型库，用于使设计系统与 React 配合使用** — 这是另一个 CSS-in-JS 选项，不同的是，这个库优先用作工具库，基于约束的布局以及几乎零运行时。

官方文档：https://glaze.js.org/

Kristóf Poduszló

**Ma****rkdown Editor 2.1：一个简单而强大的 Markdown 编辑器，支持实时预览**

仓库地址：https://github.com/uiwjs/react-md-editor

**⚡️ 新闻速递：**

您过去可能错过的有用的库。

-   NextJS 管理面板的样板项目 — Vikas Dwivedi
    
-   React Google Login — Anthony Grove
    
-   Freezeframe.js — 支持通过事件暂停和重启 gif 动画
    
-   React-Bootstrap — Bootstrap 4 的 React 组件库
    
-   React PDF 5.0 — Wojciech Maj
    

## 🙋‍

我们将为你带来最前沿的前端资讯。
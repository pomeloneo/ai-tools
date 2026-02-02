# React Status 中文周刊 #30 - 写在要使用 “memo()” 之前

> 原文链接: http://mp.weixin.qq.com/s?__biz=MzIzOTkwMjM0OQ==&mid=2247486313&idx=1&sn=1e1f4c619d6668476cfc314f30c2ee93&chksm=e922408bde55c99df2bd4bbee98f8e3100235abcb956f02bbc2c19e9ff2c8b42e7d88b79d09e#rd
> 抓取时间: 2026/2/2 23:49:31

---

> 本周周刊推荐了 Dan 的最新文章 - 写在要使用 “memo()” 之前，旨在帮助大家从根本上解决一些不必要的问题，其实有时不必使用 memo 也能解决问题。(文章已有中文版)
> 
> 电脑阅读，请访问 **https://docschina.org/weekly/react**

## 🔥 本周热门

**写在要使用 “memo()” 之前** — 比起直接使用 “memo” 或者 “useMemo”，有些性能优化的技巧可能会更有效。本文分享了其中的两种。

原文链接：https://overreacted.io/zh-hans/before-you-memo/

Dan Abramov

**Gatsby 3.0 版本发布** — Gatsby 是一个基于 React 的开源框架，具有高性能，可扩展性和安全性等特点。此次发布的 3.0 版本有望将本地开发的速度提升 80％。

原文链接：https://www.gatsbyjs.com/blog/gatsby-v3/

Hashim Warren （Gatsby 团队）

**用 React, Three.js 和 WebGL Shaders 构建真实地貌** — 随着最近关于火星着陆的报道，以及飞行器传回的令人叹服的图像，你可能会对创造拟真地形产生兴趣。本文介绍了几个可以用来实现此操作的工具。

原文链接：https://techblog.geekyants.com/recreating-real-world-terrain-with-react-threejs-and-webgl-shaders-1

Rishabh Karnad

**用 React 开发一款浏览器扩展插件** — 开发浏览器扩展插件可能会比从头开发一个应用更容易实现。本文详细介绍了开发的流程。

原文链接：https://javascript.plainenglish.io/creating-a-chrome-extension-with-react-d92db20550cb

Aman Kumar

## 📘 教程与趣事

**更人性化的测试 React 组件** — 痛苦的单元测试往往会引发你的拖延症，本文将解救你于水火之中。

原文链接：https://css-tricks.com/react-component-tests-for-humans/

Miroslav Nikolov

**使用 Dexie.js 在 React 应用中实现离线数据存储** — Dexie.js 简单的对 IndexedDB 的 API进行了封装，可实现 web 应用的离线数据存储。

原文链接：https://blog.logrocket.com/dexie-js-indexeddb-react-apps-offline-data-storage/

Ebenezer Don

**传入变量控制状态：一个优化 React 组件的建议** — 这是一种常见的模式，但是你每年都要学习如何使用。我记得有人在 Twitter 上说到它时觉得不值一提。

原文链接：https://swizec.com/blog/variants-a-quick-tip-for-better-react-components

Swizec Teller

**React Navigation 5：做单元测试时遇到的问题** — 在使用 “useNavigation” hook 测试组件时，是否遇到过“找不到导航对象”的报错提示？本文介绍了解决该问题的三种方案。

原文链接：https://spin.atomicobject.com/2021/02/24/react-navigation-5-unit-testing-components/

Alex Zurek

**如何在 React 中获取数据？附上参考手册和实例** — 作者介绍了不少于五种不同的数据获取方式，他详细地介绍了每种方式，以便读者可以在它们之间进行合理的选择。

原文链接：https://www.freecodecamp.org/news/fetch-data-react/

Reed Barger

**Chrome DevTools 现已支持修改 CSS-in-JS 的样式** — Google 现已支持使用 DevTools 提供的功能来管理 CSS-in-JS 的样式。

原文链接：https://developers.google.com/web/updates/2021/02/css-in-js

Alex Rudenko

**Immer vs Ramda：编写 Redux Reducer 的两种方法** — 本文充满趣味的评估了两种编写 js 纯函数的方法。

原文链接：https://dev.to/fkrasnowski/immer-vs-ramda-two-approaches-towards-writing-redux-reducers-3fe0

Franciszek Krasnowski

**使用 Serverless Redis 和 Next.js 开发一个投票选择 roadmap 的应用**

原文链接：https://medium.com/upstash/roadmap-voting-app-with-serverless-redis-9fb1bdc450cf

Noah Fischer

## 🛠  代码与工具

**React Virtuoso 入门：虚拟列表组件** — Virtuoso 使用虚拟列表技术，很适合应用在需要渲染大量数据的长列表。阅读原文，快速入门。

项目官网：https://virtuoso.dev/

Petyo Ivanov

**React Dev 查看器** — 一键切换本地 IDE 和浏览器的 React 组件，方便调试。查看在线示例了解更多。

仓库地址：https://github.com/zthxxx/react-dev-inspector

zthxxx

**React 静态 Twitter 推文客户端：嵌入式推文 SSR 方案** — 高性能 Twitter SDK 推文替代方案。

仓库地址：https://github.com/transitive-bullshit/react-static-tweets

Travis Fischer

**echarts-for-react：echarts 的 React 组件** — Apache eCharts 是一个广受欢迎的可视化组件库。这个是它的 React 组件。查看示例了解更多。

仓库地址：https://github.com/hustcc/echarts-for-react

hustcc

**react-native-vision-camera：功能齐全的移动端相机 React Native 组件** — 功能完善，支持获取照片和摄像头，支持自定义长焦，支持自定义 FPS 和夜间模式。查看示例了解更多。

仓库地址：https://github.com/cuvent/react-native-vision-camera

Cuvent Engineering

**react-native-collapsible-tab-view：一个跨平台的可折叠 Tab 组件** — 查看原文 GIF 动画示例了解更多。

仓库地址：https://github.com/PedroBern/react-native-collapsible-tab-view

Pedro Bern

**⚡️ 好库推荐：**

一些可能错过，但却实用的库：

-   React Loader Spinner — 异步加载提示（Spinner）组件
    
-   react-native-paper-dates — React Native Paper 的时间选择组件，灵感来源于 Material Design
    
-   React Native Blurhash — 图片加载预览组件
    
-   react-smart-data-table — 另配置的数据表格组件
    

## 🙋‍

我们将为你带来最前沿的前端资讯。
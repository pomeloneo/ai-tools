# React 中文周刊 #96 - React 团队近况

> 原文链接: http://mp.weixin.qq.com/s?__biz=MzIzOTkwMjM0OQ==&mid=2247507638&idx=1&sn=6fef4faf8fd0d9029ca94982a4a38313&chksm=e9219554de561c4246dc525e52bb11a46a6b94306b404a82d5299c45a43acc7b52deddf486ac#rd
> 抓取时间: 2026/2/2 23:47:08

---

> 本期看点：本期为大家带来了如何迁移现有 React Native 库到新架构与 Airbnb 迁移 Linaria CSS-in-JS 方案之旅等优秀文章。点击本期周刊查看更多精彩文章！

> 编辑：iShawnWang、edison-hm、tmkx、whatwewant

## 🔥 本周热门

**React Labs：React 团队最近在做什么** — 随着 React 18 的发布， React 核心团队已将重心转移，这篇文章介绍了一些接下来的研究方向，正如文章中所说，这并非是 roadmap，其中许多讨论还并未成型。

**长按识别二维码查看原文**   

https://reactjs.org/blog/2022/06/15/react-labs-what-we-have-been-working-on-june-2022.html

The Entire React.js Team

**维护内部 React 组件库的注意事项** — 一位开发人员对维护一个基于已有的设计规范，并且在 DigitalOcean 中广泛使用的组件库的一些想法。

**长按识别二维码查看原文**   

https://www.gabe.pizza/notes-on-component-libraries/

Gabe Scholz (DigitalOcean)

**如何迁移现有 React Native 库到新架构** — 一篇来自 React Native 核心团队的指南，关于如何迁移现有原生模块和原生组件到全新架构：TurboModule 和 Fabric Components。

**长按识别二维码查看原文**   

https://reactnative.dev/blog/2022/06/16/resources-migrating-your-react-native-library-to-the-new-architecture

Riccardo Cipolleschi (Meta)

**Airbnb 迁移 Linaria CSS-in-JS 方案之旅** — 一篇介绍为什么 Airbnb 从自研的 **react-with-style** 迁移到零运行时，编译时的 CSS-in-JS **Linaria** 的完整历程。

**长按识别二维码查看原文**   

https://medium.com/airbnb-engineering/airbnbs-trip-to-linaria-dc169230bd12

Joe Lencioni (Airbnb)

**快讯**

-   **一个 2022 年最新的功能矩阵表**，对比了 7 种初始化 React 项目的库，包括 Vite，Next.js，Remix 等
    
    **长按识别二维码查看原文**   
    
    https://twitter.com/i/web/status/1538920643571458048  
    
-   流行前端博主 Josh W Comeau 即将发布新课程：**The Joy of React**
    
    **长按识别二维码查看原文**   
    
    https://www.joyofreact.com/  
    
-   如果你也在使用 Adobe 的 React Spectrum 组件，那么也应该了解一下 **全新的日期时间选择组件**，他们花了很多时间在完善可访问性和国际化上
    
    **长按识别二维码查看原文**   
    
    https://react-spectrum.adobe.com/blog/date-and-time-pickers-for-all.html  
    

## 🛠  代码与工具

**create-rust-app：通过一条命令行创建一个 Rust + React 项目** — 本着与 Create React App 相同的精神，如果你希望用 Rust 构建后端，**create-rust-app** 将带来类似的体验。

**长按识别二维码查看原文**   

https://github.com/Wulf/create-rust-app

Haris Khan et al.

**IdleTimer：检测并响应用户的活动/闲置时间** — IdleTimer 可以检测用户是否在和应用产生交互，从而使你可以对其做出响应。该组件在最新发布的 v5 版本中 **完全重写** 了。

**长按识别二维码查看原文**   

https://idletimer.dev/ 

Randy Lebeau

**Verbum：基于 Lexical 开发的一款灵活的文本编辑器** — 仍处于早期开发阶段的 **Lexical** 框架提供了很多模块用于创建“独特的文本编辑体验”。Verbum 封装了 Lexical，并且可以在 React 程序中使用。

**长按识别二维码查看原文**   

https://github.com/ozanyurtsever/verbum

Ozan Yurtsever

**react-open-weather：****为你的应用增加天气预报功能** — react-open-weather 整合了来自三种不同服务的天气预报数据。

**长按识别二维码查看原文**   

https://github.com/farahat80/react-open-weather

**react-complex-tree** — 一款支持多选、拖拽和无障碍访问的树形组件。

**长按识别二维码查看原文**   

https://github.com/lukasbach/react-complex-tree

**react-transition-value** — 使用 easing function 实现数字过渡动画。

**长按识别二维码查看原文**   

https://github.com/dev-bjoern/react-transition-value

**⚡️ 好库推荐：**

**Reactime 14.0** – 用于调试时间旅行的 Chrome 插件  
**React Native Owl 1.0** – React Native 视觉回归测试  
**Recoil 0.7.4** – 实验性的状态管理库  
**React CountUp 6.3** 数值变化组件  
**React Toastify 9.0.5** 使通知更简单  
**MDX 2.1.2** 组件时代的 Markdown  
**html-react-parser 2.0** 将 HTML 解析为 React 组件  
**sentry-react-native 4.0** Sentry 官方 React Native SDK  
**React Joyride 2.5** 在应用程序中创建使用导航

## 🙋🏻‍♀️
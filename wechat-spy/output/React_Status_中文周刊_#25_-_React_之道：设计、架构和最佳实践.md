# React Status 中文周刊 #25 - React 之道：设计、架构和最佳实践

> 原文链接: http://mp.weixin.qq.com/s?__biz=MzIzOTkwMjM0OQ==&mid=2247486088&idx=1&sn=347466d089779b34f427a02718194ffc&chksm=e922416ade55c87cf8346cb559836af6e6553f1d9005ae6c01e8fba73501062bf4935cc15888#rd
> 抓取时间: 2026/2/2 23:49:42

---

> 本周推荐关于 React 的设计之道，让大家能够更好的编写 React 应用。除了设计之道之外，还有一篇关于 Hook 的进阶文章，能够帮助大家更好的了解 Hook 的优缺点。
> 
> 还有一篇特别有意思的文章，作者在技术选型时，选择了 React 差点被公司开除。可怕😨
> 
> 电脑阅读，请访问 https://docschina.org/weekly/react/

## 🔥 本周热门

**React 之道：设计、架构和最佳实践** — 没有通用的最佳实践，但是肯定有一些原则和思路能够帮助你构建可扩展的 React 应用。本文中，作者分享了相当多最佳实践。

原文链接：https://alexkondov.com/tao-of-react/

Alex Kondov

**如何提高 Smashing Magazine 的应用性能** — Smashing Magazine 是我们最喜欢的高质量文章来源之一，本文讲述了他们如何优化基于 React 和 Jamstack 的网站，以致力于让读者更快的看到文章内容。

原文链接：https://www.smashingmagazine.com/2021/01/smashingmag-performance-case-study/

Vitaly Friedman

**AWS 正在用 React 创建一个“新的开源设计系统”** — The Register 刊登了一篇可能会成为 React 大事记的新闻。本文中他们强调了 @awsui/components-react npm 软件包（还没有在 Github 上开源），并且将其与 AWS 自己发布的信息相关联。我们将持续追踪报道后续新闻。

原文链接: https://www.theregister.com/2021/01/18/aws\_creating\_new\_open\_source

Tim Anderson

**MaxRozen.com 从 Gatsby 迁移到 Next.js 的经验** — 一直以来有许多关于 “如何使用 Next.js” 或 “如何使用 Gatsby” 的文章，但是却很少有 Gatsby 和 Next.js 应用互相迁移的文章，而本文正好是这样一篇文章。

原文链接：https://maxrozen.com/walkthrough-migrating-maxrozen-com-gatsby-to-nextjs

Max Rozen

**我差点因为选择 React 构建企业应用而被炒鱿鱼** — 早在第 218 期，我们就介绍了 Jack Lazaroff 的文章 — 《没有人因为选择 React 被炒鱿鱼》。本文作者似乎差点被开除。

  

原文链接：https://medium.com/better-programming/i-almost-got-fired-for-choosing-react-in-our-enterprise-app-846ea840841c

Razvan Dragomir

## 📘 教程与趣事

**如何在 TypeScript 中使用 \`useContext\` 和 \`useReducer\`** — 许多开发者都爱上了 TypeScript 及其为工作带来的额外结构和保证（尤其是在团队开发中），这是两个完整的示例，你可以自行判断。

原文链接：https://medium.com/@steven\_creates/how-to-use-react-hooks-usecontext-and-usereducer-with-typescript-f616067248dd

Steven Creates

**掌握 React Hooks** — 尽管似乎有很多关于 React Hooks 的文章，但是很难找到侧重于对比它们优缺点的文章。本文中作者进行了几个优缺点对比，并详细解释了它们。

原文链接：https://stevenkitterman.com/posts/the-catch-with-react-hooks/

Steven Kitterman

**使用 Fetch API 和 async/await 来获取你的 Instagram 信息流** — 将 Instagram 信息流集成到自己的应用中的做法是非常常见的，但是要在多次构建中保持最新状态，则需要一些 Fetch API 的技巧。

原文链接：https://blog.larsbehrenberg.com/use-javascripts-fetch-api-with-asyncawait-to-fetch-your-instagram-feed-in-react

Lars Behrenberg

**如何创建一个自动更新的 Favicon** — 我们将学习如何用 JavaScript 实现自动更新的 Favicon，并且将它包装成 React 组件。

原文链接：https://css-tricks.com/how-to-create-a-favicon-that-changes-automatically/

Carlo Martinucci

**React 中的 Excel 插件** — 一些开发者很好奇如何在 Excel 电子表格及其公式上办公。本文将演示 React 如何参与其中。

原文链接：https://intercaetera.com/2021-01-21-excel-add-ins-in-react/

Inter Caetera

**Docusaurus 的 2020 年回顾：高性能静态网站生成器** — Docusaurus 将 2020 年描述为“动荡”的一年，其实 2020 年对我们来说也同样如此。不管有多艰难，2020 也成为了过去，Docusaurus 团队用年度回顾翻过了 2020 年这一页，目前他们正在重新聚焦到全新的 v2 版本中（v2 目前已经到 alpha 阶段）。

原文链接：https://v2.docusaurus.io/blog/2021/01/19/docusaurus-2020-recap/

Sébastien Lorber

## 🛠 代码与工具

**react-editor-js：Editor.js 非官方 React 组件** — editor.js 是一个基于块的内容编辑器，这使得它更容易与 React 结合。查看 CodeSandbox 示例以了解更多。

仓库地址：https://github.com/Jungwoo-An/react-editor-js

Jungwoo An

**MobX React Form 3.0：响应式 MobX 表单状态管理** — MobX React Form 是一个通过紧密集成状态管理 MobX来简化表单开发的方案。想要了解更多，请查看示例。

仓库地址：https://github.com/foxhound87/mobx-react-form

Claudio Savino

**Uniforms: 根据通用 Schema 自动生成表单** — 支持 JSON Schema，GraphQL 和 SimpleSchema，其次支持 AntD，Bootstrap，Material-UI，Semantic UI 等组件库，甚至于普通的 HTML。

仓库地址：https://github.com/vazco/uniforms

Vazco

**react-laag：构建 Tooltips、Dropdowns 和 Popovers 的 Hooks** — 了解更多，请查看示例。

仓库地址：https://github.com/everweij/react-laag

Erik Verweij

**API Platform 客户端生成器：基于 API Platform 的脚手架** — 一个生成 CURD 应用和 OpenAPI 稳定的脚手架。

仓库地址：https://github.com/api-platform/client-generator

API Platform

**⚡️ 新闻速递：**

一些可能错过，但却好用的库。

-   MyCrypto — 生成以太币钱包的客户端
    
-   react-native-map-clustering — React Native 地图标注，适用于 iOS 和 安卓
    
-   react-countdown-circle-timer - 倒数计时器，支持 React 和 React Native
    

## 关于我们

我们将为你带来最前沿的前端资讯。
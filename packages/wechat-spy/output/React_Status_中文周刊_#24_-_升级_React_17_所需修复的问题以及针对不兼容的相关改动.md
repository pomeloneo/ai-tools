# React Status 中文周刊 #24 - 升级 React 17 所需修复的问题以及针对不兼容的相关改动

> 原文链接: http://mp.weixin.qq.com/s?__biz=MzIzOTkwMjM0OQ==&mid=2247486050&idx=1&sn=1821fbbcfb641e250a1974ca79fb83aa&chksm=e9224180de55c89638ff5c6fa59542025843440d329eab4d3792ebeebe8b128ec566bdbb1d69#rd
> 抓取时间: 2026/2/2 23:49:44

---

> React 17 虽已发布三月有余，但想必有些小伙伴还未升级至 React 17，有这方面打算的小伙伴，可以了解下 Wealthfront 的工程师们是如何升级的。
> 
> 电脑阅读，请访问 **https://docschina.org/weekly/react**

## 🔥 本周热门

**升级 React 17 所需修复的问题以及针对不兼容的相关改动** — 尽管 React 17 致力于渐进式升级，但是 Wealthfront 的工程师们在升级过程中依然遇到了问题，他们将问题和解决方案都罗列在了本文当中。

原文链接：https://eng.wealthfront.com/2021/01/14/upgrading-to-react-17-how-to-fix-the-issues-and-breaking-changes/

Andrew Easton (Wealthfront)

**为什么 React Context 并非状态管理工具** — 为什么 Context 无法取代 Redux，Mark 在文章中针对 Context 和 Redux 的使用场景做了说明。

原文链接：https://blog.isquaredsoftware.com/2021/01/context-redux-differences/  

Mark Erikson

**重新使用 Spacer GIF** — 在 Web 开发早期使用 HTML 表格布局时，Spacer GIF 是实现完美布局的一个技巧。虽然用表格布局的日子已经远去，但是现在又有了适用于 Spacer GIF 的新场景。

原文链接：https://www.joshwcomeau.com/react/modern-spacer-gif/

Josh W. Comeau

**在 React 中实现条件渲染的 7 种方法** — 条件渲染就是渲染对应状态下的部分内容，而不是默认情况下的全部内容。本文介绍了多种实现方法，且每种方法都适合特定的场景。

原文链接：https://blog.asayer.io/7-ways-of-achieving-conditional-rendering-in-react

Fernando Doglio

**如何编写更好的函数式组件** — 本文提出了 5 个提升函数式组件可读性的技巧，每个技巧都有示例代码，并呈现在 JSFiddle 中。

原文链接：https://medium.com/better-programming/how-to-write-better-functional-components-in-react-bc974f777145

Bikash Paneru

## 📘 教程与趣事

**如何用 React Native 开发一款时髦的验证码输入框** — 如果你的 React Native 应用有需要用户输入短信验证码的场景，那么此文值得一看。

原文链接：https://thoughtbot.com/blog/make-a-snazzy-code-input-in-react-native

John Schoeman and Devin Jameson (thoughtbot)

**Redux 入门：看这就够了** — 作者认为 Redux 官方文档的快速入门指南占据的篇幅过多，所以他专门为新接触状态管理的开发者写了一篇介绍，想入门的话看这篇就够了。

原文链接：https://medium.com/javascript-in-plain-english/redux-hook-line-and-simple-2d6180229a82

Jacob Short

▶ **25 天打造属于你的电商系统** — 25 天里通过 25 个视频学会使用 Next.js，Netlify 和 Stripe 来构建你专属的电商系统。

原文链接：https://e-commerce-in-25-days.netlify.app/

Jon Meyers

▶ **你应该更多的使用 React.memo！** — 尽管 Knuth 说过 “过早的优化是万恶之源”，但是大多数情况下使用 React.memo 确实可以防止重复渲染未更改的组件。

视频链接：https://www.youtube.com/watch?v=IuXpqUxJG90

Cássio Zen

使用 React 前需掌握的 JavaScript 知识（附有示例） — React 本质上是一个 JavaScript 框架。因此，如果要掌握 React，那就来看看这份需要提前掌握的 JS 概念指南吧。

原文链接：https://www.freecodecamp.org/news/javascript-skills-you-need-for-react-practical-examples/

Reed Barger

▶  **使用 Next.js v10 的 Image 组件来实现图片的自适应显示与懒加载** — 如果你认为实现图片自适应和懒加载是需要编写大量富含技巧的代码的话，请使用 Next.js 的 Image 组件，它可以为你自动完成所有操作。

视频地址：https://www.youtube.com/watch?v=PsDz3kpp354

James Quick (Auth0)

**React 的未来：服务端组件** — 在第 220 期中，我们对 React 服务端组件进行了相当详尽的介绍，但是鉴于它们对未来的潜在意义，我们认为值得花时间去再看一篇相关的介绍。

原文链接：https://medium.com/better-programming/the-future-of-react-server-components-90f6e3e97c8a‍

Donovan So

## 🛠 代码和工具

**基于 procedural-gl-js 封装的 React 组件库** — 这个组件库用来渲染嵌入网页的实景，并且对移动设备也做了优化。此处为 demo，效果与谷歌地球类似。

仓库地址：https://github.com/felixpalmer/procedural-gl-react

Felix Palmer

**Focus Rings：美观的展示焦点指示器** — 此库由 Discord 团队出品，基于 React 的解决方案，为全键盘导航渲染简洁一致而推出的焦点指示器。

仓库地址：https://github.com/discord/focus-rings

Discord

**在 2021 年可以尝试的 8 个好用的 React 库** — GitHub 的 star 数一定程度可以反映仓库的受欢迎程度，这些库中只有一个库的 star 数小于 10000。

原文链接：https://medium.com/javascript-in-plain-english/8-powerful-react-libraries-to-try-in-2021-8ede57b422bf

Mohit

**use-eazy-auth：简单的 React 权限管理库** — 采用 eazy-auth 的理念，并且对 Redux 的依赖性不强。

原文链接：https://inmagik.it/blog/use-eazy-auth

Giovanni Fumagalli

**可生成 React 表格代码的 GUI 工具** — 无论是作为学习的工具，还是直接使用，它都是一种方便展示 UI 表格元素的方法。

原文链接：https://www.akashmittal.com/gui-utility-to-generate-react-table-code/  

Akash Mittal

**React Hooks Lib：可复用的 React Hooks 集合** — 在从零开始实现自定义 Hooks 之前，也许可以在这个集合中找到你所需要的。

仓库地址：https://github.com/beizhedenglong/react-hooks-lib

Victor

**Reagent：使用 ClojureScript 创建组件** — 让 Clojure 的粉丝值得高兴的是，他们可以通过这个极简的 ClojureScript 接口在 React 项目中使用 ClojureScript。

仓库地址：https://github.com/reagent-project/reagent

reagent-project

**⚡️ 新闻速递：**

你可能错过的好用的库。

-   MSON：通过编写 JSON 来生成应用 — Geoff Cox
    
-   用 React Native 创建带动效的文本输入框 — Halil Bilir
    
-   自带防抖功能的 React 输入框组件 — Satyendra Pandit
    
      
    

## 🙋‍ 

我们将为你带来最前沿的前端资讯。
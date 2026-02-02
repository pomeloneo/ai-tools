# React Status 中文周刊 #54 - React Native 发布了 v0.65

> 原文链接: http://mp.weixin.qq.com/s?__biz=MzIzOTkwMjM0OQ==&mid=2247490543&idx=1&sn=ecff90600c463f96812806104e64caaa&chksm=e922500dde55d91b9610a392dad8b6de6df30c1b043fe1cdd8fcf16b966d5bf89787965effb3#rd
> 抓取时间: 2026/2/2 23:48:41

---

> 本周看点：Next.js v11.1 发布，集成了 swc，大幅度提升了编译速度。同时 React Native 也发布了 v0.65，本次发布主要更新了 Hermes 引擎，针对 M1 芯片进行了支持**。**
> 
> 如在电脑阅读，可访问原文或直接访问 https://docschina.org/weekly/react

编辑 | syjstc 

         edison-hm 

         whatwewant

         QC-L

## 🔥 本周热门  

**Next.js 11.1 版本发布** — 本次发布主要包含了对 ES 模块的支持（需要手动设置标签来开启），集成了 swc 等内容。其中 swc 是一款用 Rust 写的 JS/TS 转译工具，通常用来对标 Babel 和 Terser 等，大幅提升了转译速度。

**长按识别二维码查看原文**   

https://nextjs.org/blog/next-11-1

Vercel

**React 渲染的可视化指南 III — useMemo** — 本篇是 React 渲染可视化指南的第三章，主要讲解了 useMemo 的一些用法。如果你意犹未尽的话，其实还有第四章 - useCallback。

**长按识别二维码查看原文**   

https://alexsidorenko.com/blog/react-render-usememo/

Alex Sidorenko

**React Native 0.65 版本发布** — 本次发布主要更新了 Hermes 引擎，其中包含了对 ES i18n API 的支持，对 M1 芯片的支持，对 Mac Catalyst 的支持以及更快的垃圾回收等一系列功能。此外，这一版本还对可访问性方面做了一些列的优化与增强。

**长按识别二维码查看原文**   

https://reactnative.dev/blog/2021/08/17/version-065

Luna Wei and Facebook

▶ **沉迷于 React** — 这是 JS Party 播客的第 186 期。主播 Kent C. Dodds, Emma Bostian 和 Nick Nisi 对 React 从各个角度进行了一次深入的探讨。

**长按识别二维码查看原文**   

https://changelog.com/jsparty/186

JS Party podcast

**用来自 70 年代的指导方针来拆分 React 组件** — 本文所采用的方法，来自于 David Parnas 在 1979 年发表的一篇论文 —— 设计易于扩展和收缩的软件。

**长按识别二维码查看原文**   

https://joaoforja.com/blog/guideline-on-how-to-decompose-a-react-component/

João Forja

▶ **用 NextAuth.js 在 Next.js 中做身份验证** — 这是一个来自于 DigitalOcean 的技术分享。讲了如何利用 NextAuth.js 这款开源工具给 Next.js 的应用增加身份验证功能。NextAuth.js 非常安全且易于使用和扩展，它的数据库部分是 Postgres。

**长按识别二维码查看原文**   

https://www.digitalocean.com/community/tech\_talks/next-js-authentication

Chris Sev

**调查显示 Flutter 相较于 React Native 或许更具竞争力** — React Native 的优势是否已经被 Flutter 威胁到了呢？还是先来看一组数据吧。

**长按识别二维码查看原文**   

https://thenewstack.io/google-flutter-now-rivals-facebooks-react-in-developer-use/

Lawrence E. Hecht

**什****么是 React 高阶组件**

**长按识别二维码查看原文**   

https://blog.openreplay.com/what-are-higher-order-components-in-react

Queen Nnakwue

**在** **React Native 中处理路由的挂载（mounting）与卸载（un****mounting****）**

**长按识别二维码查看原文**   

https://www.smashingmagazine.com/2021/08/mounting-unmounting-navigation-routes-react-native/

Daniel Don  

## 🛠  代码与工具

**为你的 React 应用制作使用引导** — 本文教你如何使用 react-floater 来方便地为应用中的引导元素添加定位和样式。自然少不了示例。

**长按识别二维码查看原文**   

https://github.com/gilbarbara/react-joyride

Gil Barbara  

**React Date Picker 4.2.0：一个简单可复用的日期选择器** — 该库非常成熟，而且一直保持更新。Demo 请看这里。

**长按识别二维码查看原文**   

https://github.com/Hacker0x01/react-datepicker

HackerOne

**styled-jsx 4.0：完完全全在 JSX 中书写 CSS** — 在 JSX 中书写纯 CSS，支持组件化和作用域。也支持服务端渲染。

**长按识别二维码查看原文**   

https://github.com/vercel/styled-jsx

Vercel

**React JSX Highcharts** — 该库将 Highcharts 深度整合为多样化的 React 组件。那它与其他类似的库有何不同呢？原文是这么提到的，“与其他类似的 Highcharts 封装库不同，React JSX Highcharts 专为动态而生——这使得它非常适合需要在图表中进行大量交互的场景”。

**长按识别二维码查看原文**   

https://github.com/whawker/react-jsx-highcharts

Will Hawker

**rc-tabs** — 这是一款久经时间考验的选项卡导航（navigation tabs）组件。它来自 Ant Design 生态圈。Storybook 请看这里。

**长按识别二维码查看原文**   

https://github.com/react-component/tabs

react-component

**vue-advanced-chat 1.1.0 版本** — 这是一款支持实时聊天的组件，兼容 React。Demo 请看这里。

**长按识别二维码查看原文**   

https://github.com/antoine92190/vue-advanced-chat

Antoine Dupont

**react-native-safe-area-context** — 处理移动设备上的安全区域总是一件令人头痛的事。该库能够非常好地帮你处理掉许多细节。同时兼容 iOS，Android 以及 Web 平台。

**长按识别二维码查看原文**   

https://github.com/th3rdwave/react-native-safe-area-context

Th3rdwave

**⚡️ 好库推荐：**

-   **R****eact Native 谷歌地图搜索组件** — 借助谷歌地图，为你的 React Native 应用添加地理自动完成功能
    
-   **r****eact-use-promise** — 一个专为 Promises 设计的 hook
    
-   **R****eact-Auto-FormGenerator** — 通过定义表单项的描述列表来生成表单，demo 请看这里
    
-   **r****eact-image-pan-zoom-rotate** — 一款实现了各种图片操作的 React 组件，包括平移、缩放以及旋转等
    
-   **re****act-swipeable** — 一款来自 Formidable Labs 的 hook，专门用来处理滑动事件
    

## 🙋‍♂️

我们将为你带来最前沿的前端资讯。
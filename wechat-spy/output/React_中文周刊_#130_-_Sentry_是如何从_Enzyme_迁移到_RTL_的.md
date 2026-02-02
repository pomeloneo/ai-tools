# React 中文周刊 #130 - Sentry 是如何从 Enzyme 迁移到 RTL 的

> 原文链接: http://mp.weixin.qq.com/s?__biz=MzIzOTkwMjM0OQ==&mid=2247517073&idx=1&sn=87a66621868ad05a23530ee7502090a3&chksm=e921c873de564165730b516c1da73343616067202095e3f39fab9f3f52ef3d43693612670fa7#rd
> 抓取时间: 2026/2/2 23:45:50

---

> 本期看点：用成熟的 UI 模式对 React 应用进行模块化；Next.js 发布了 13.2 版本。

> 编辑：edison-hm、tmkx、iShawnWang、whatwewant

## 🔥 本周热门

**Sentry 是如何从 Enzyme 迁移到 RTL 的** — Sentry 的开发者们花了 16 个月的时间将他们的组件测试（共涉及 803 个测试套件）从 Enzyme 转换为 RTL，在文中他们讲述了这件事的起因以及遇到了哪些不可预见的挑战。

**长按识别二维码查看原文**   

https://blog.sentry.io/2023/02/23/sentrys-frontend-tests-migrating-from-enzyme-to-react-testing-library/

Priscila Oliveria and Scott Cooper (Sentry)

**Next.js 发布了 13.2 版本** — Next.js 是一款流行且功能齐全的 React 框架，本次发布的 13.2 版本中包含了以下几个重大提升：内置支持 SEO（通过一个新的 API _Metadata_，用于在布局和页面中定义 SEO 相关的元数据）、自定义路由处理方法、改良后的错误展示页、链接静态类型检查的 beta 版、改进的 Turbopack 以及用于渐进式 ISR 和快速重新部署的 **_Next.js 缓存_**_。_

**长按识别二维码查看原文**   

https://nextjs.org/blog/next-13-2

Neutkens, Lai, et al.

**“我被 React 劫持为了人质”** — 文章的标题或许有些夸张了，但是这位佚名作者也是想借此表达自己的观点，文中列举了大量的例子来表明作者对 React 的失望以及证明 React 正停滞不前。

**长按识别二维码查看原文**   

https://emnudge.dev/blog/react-hostage

EmNudge

**用成熟的 UI 模式对 React 应用进行模块化** — 这篇文章起初是系列文章中的第一篇，但它的篇幅每周都在变长，正在变成一篇大而全的-讲述如何将 UI 模式应用于 React 代码，使得代码更便于组织和维护-的文章。

**长按识别二维码查看原文**   

https://martinfowler.com/articles/modularizing-react-apps.html

Juntao Qiu

**开源项目应该如何更合理的提出资金报酬** — **React Flow** 是一个流行的库，是一套在 React 中基于节点创建 UI 的机制。虽然在开源世界中，别的一些项目在获得所需资金方面遇到了问题，但 React Flow 已经找到了一种方法，可以为其开源的贡献获得“公平的报酬”。

**长按识别二维码查看原文**   

https://reactflow.dev/blog/asking-for-money-for-open-source/

John Robb (React Flow)

**使用 Next.js 13 的 App Router 可以写更少的代码来更快地获取数据** — 文中将页面级别的请求数据与 Next.js 13 版本中通过服务端组件请求数据进行了对比。

**长按识别二维码查看原文**   

https://vercel.com/blog/nextjs-app-router-data-fetching

Alice Alexandra Moore and Ariel Kanter

**通过 React Spring 创建动画**

**长按识别二维码查看原文**   

https://voskan.host/2023/02/08/creating-animations-in-react-with-react-spring/

Voskan Voskanyan

**快讯：**

看看 Storybook 7 是如何 **改造 Storybook Docs 的**，文中也列举了如何简洁的展示一个 UI 组件。

**长按识别二维码查看原文**   

https://storybook.js.org/blog/storybook-7-docs/

Bob Ziroll 在 Scrimba 上开设了 **React Router v6 课程**。

**长按识别二维码查看原文**   

https://scrimba.com/learn/reactrouter6

Preact Signals 和 React 方案的一些 **基准测试对比**。

**长按识别二维码查看原文**   

https://electricui.com/blog/benchmarking-preact-signals

  

## 🛠  代码与工具

**Sonner：一款 Toast 组件** — 拥有默认样式，但也可对其自定义。主页上有一个看起来不错的现场演示。**GitHub 仓库**。

**长按识别二维码查看原文**   

https://sonner.emilkowal.ski/

Emil Kowalski

**react-qrcode-logo：生成嵌入了 Logo 的二维码** — 一个用于创建二维码的 React 组件，基于 TypeScript，比正常的类似库更可定制。

**长按识别二维码查看原文**   

https://github.com/gcoro/react-qrcode-logo

Giulia Corò

**React Snap Carousel：DOM 优先的无样式走马灯组件** — 该解决方案使用原生浏览器滚动和 CSS scroll snap points 来获得强大的性能。在 **这里** 尝试一些不同的版本。

**长按识别二维码查看原文**   

https://github.com/richardscarrott/react-snap-carousel

Richard Scarrott

▶  **ScrollyVideo.js：响应式“可滚动”视频** — 这是一个有趣的效果，在官网上得到了很好的诠释。兼容 React 或纯 HTML。

**长按识别二维码查看原文**   

https://scrollyvideo.js.org/

Daniel Kao

**fhir-react：用于展示 FHIR 数据的组件** — 这非常小众，FHIR（**Fast Healthcare Interoperability Resources**）是一种用于交换医疗数据的标准。

**长按识别二维码查看原文**   

https://github.com/1uphealth/fhir-react

1upHealth

**⚡️ 好库推荐：**

-   **React Native Windows**  
    ↳ 使用 React 构建原生 Windows 应用程序
    
-   **React Native Reanimated v3.0**  
    ↳ React Native 动画库的全新实现
    
-   **Preact v10.13**  
    ↳ 轻量级的 React 替代品，仅 3KB
    
-   **ReactPy v1.0**  
    ↳ Python 生态的，类 React 思想的用户界面库
    
-   **react-intersection-observer v9.4.3**  
    ↳ Intersection Observer API 的 React 组件及 Hooks 实现
    
-   **react-i18next v12.2**  
    ↳ React 国际化解决方案
    
-   **React Tooltip v5.8.3**
    
-   **react-native-share v8.2.1**  
    ↳ 将数据发送到其他应用程序进行社交分享
    
-   **react-native-bouncy-checkbox v3.0.7**
    
-   **react-native-permissions v3.7.3**
    
-   **react-native-bootsplash v4.5.2**
    

## 🙋🏻‍♀️
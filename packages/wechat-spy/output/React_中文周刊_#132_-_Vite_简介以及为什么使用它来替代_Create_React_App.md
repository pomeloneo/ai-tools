# React 中文周刊 #132 - Vite 简介以及为什么使用它来替代 Create React App

> 原文链接: http://mp.weixin.qq.com/s?__biz=MzIzOTkwMjM0OQ==&mid=2247517940&idx=1&sn=4bd4d9217c78aa6b51fdf55496cedd31&chksm=e921cd16de5644000b3efc550895f3725baf02029fcc7c708cc7e37b6bd33b4fc95f78d382af#rd
> 抓取时间: 2026/2/2 23:45:46

---

> 本期看点：关于 React 服务端组件的一些激烈讨论；认识 React.js 核心团队成员；20 分钟内实现 Jotai 的状态管理核心逻辑。

> 编辑：iShawnWang、edison-hm、tmkx、whatwewant

## 🔥 本周热门

**Vite 简介以及为什么使用它来替代 Create React App** — _Create React App_ 长期以来一直被认为是创建新 React 应用的最佳实践，但 Vite 在去年变得流行，因为它的易用性和性能（足以让人们 **提议更改 React 官方文档中推荐的项目初始化脚手架**。）。同时近期发布且更快的 **Rspack** 也同样值得关注。

**长按识别二维码查看原文**   

https://luketheweb.dev/blog/what-is-vite-and-why-should-you-use-it-instead-of-create-react-app

Luke Twomey

👋 **认识 React.js 核心团队** — 新的 React 文档站点有一个整洁的专栏，展示了 React 开发团队从像 Sophie Alpert 和 Dan Abramov 这样的老成员到像 Mengdi Chen 这样的新成员。

**长按识别二维码查看原文**   

https://beta.reactjs.org/community/team

React Documentation

▶ **关于 React 服务端组件的一些激烈讨论** — Kent C Dodds 与 Meta 的 Dan Abramov 和 Joe Savona 一起与 React 核心团队的两位主要成员一起讨论有关服务端组件的许多问题。如果你有兴趣，可以 **阅读相关摘要**。

**长按识别二维码查看原文**   

https://www.youtube.com/watch?v=h7tur48JSaw

Kent C. Dodds

**使用 TailwindCSS 和 React 创建动态圆环图表** — 一种使用 CSS 的“圆锥梯度”创建甜甜圈图，不需要额外的库或大量的 JavaScript 代码。

**长按识别二维码查看原文**   

https://www.smashingmagazine.com/2023/03/dynamic-donut-charts-tailwind-css-react/

Paul Scanlon

**在 React 中实现拖放** — 在许多场景中，拖放是基本的 UI 交互。Robin 一直是一位备受推崇的讲师，他逐步介绍了如何创建带有拖放功能的组件。

**长按识别二维码查看原文**   

https://www.robinwieruch.de/react-drag-and-drop/

Robin Wieruch

**我在开始第一个 React 项目时犯的五个错误** — Richard 分享他早期 React 开发时的错误，希望你可以从他的失误中吸取教训。诸如使用“defaultProps”、“propTypes”和类组件等方面。

**长按识别二维码查看原文**   

https://css-tricks.com/5-mistakes-starting-react/

Richard Oliver Bray

**使用 WebGL Render Targets 实现美丽且令人目眩神迷的效果** — 了解如何使用 WebGL Render Targets 在你的 React Three 项目中创建后处理效果、视错觉和过渡效果。

**长按识别二维码查看原文**   

https://blog.maximeheckel.com/posts/beautiful-and-mind-bending-effects-with-webgl-render-targets/

Maxime Heckel

**只需几个简单的步骤即可使用 React 和 AI 创建图像标记应用** — 这里不涉及 OpenAI 或 ChatGPT。它使用亚马逊老牌的 **Rekognition** 服务。

**长按识别二维码查看原文**   

https://blog.danoph.com/create-an-image-tagger-app-with-reactjs-and-ai-in-just-a-few-simple-steps

Daniel Errante

▶ **使用 Defer 和 Next.js v13 释放 AI 的力量** — **Defer** 是一款（商业）Node.js 后台任务执行平台。

**长按识别二维码查看原文**   

https://www.youtube.com/watch?v=kHsTp2LENUI

Jack Herrington

**▶  20 分钟内实现 Jotai 的状态管理核心逻辑** — Jotai 和核心是如此简单，**以至于可以将它的核心实现发布到推文上**。

**长按识别二维码查看原文**   

https://www.youtube.com/watch?v=gg31JTZmFUw

Jack Herrington

**在 React Router v6.4+ 中实现路由懒加载**

**长按识别二维码查看原文**   

https://remix.run/blog/lazy-loading-routes

Matt Brophy

**快讯：**

这里有一份 **React 编译器的愿望清单**。

**长按识别二维码查看原文**   

https://electricui.com/blog/wishlist-for-a-react-compiler

**Microsoft MVP Tom Morgan 宣称**：将 Microsoft Teams 应用 _“从 Electron 迁移到 React 并重写”_ 是毫无意义的。

**长按识别二维码查看原文**   

https://blog.thoughtstuff.co.uk/2021/08/stop-saying-microsoft-teams-is-being-rewritten-from-electron-to-react

Astro 人员发布了一份 **Web 框架性能报告**，该报告比较了几个前端框架的性能，其中一些框架内置或可以与 React 一起使用。

**长按识别二维码查看原文**   

https://astro.build/blog/2023-web-framework-performance-report/

## 🛠  代码与工具

**Flexboard：可调整大小的侧边栏组件库** — 该组件库支持设置布局中侧边栏的最大最小值，可以试试 **在线 demo**。

**长按识别二维码查看原文**   

https://github.com/dorbus/flexboard

Dorbus

**Tremor v2.0：快速构建仪表盘的 React 库** — Tremor 提供了一系列的模块化组件用于创建数据驱动的仪表盘。本次发布的 2.0 版本向 PR（production-ready）版本更进了一步，在该版本中样式也都迁移至了 Tailwind CSS，**点击查看官网**。

**长按识别二维码查看原文**   

https://www.tremor.so/changelog

Tremor Labs

**Iconito：SVG 图标管理工具** — Iconito 可以将 SVG 图标打上标识后存储在一个定义文件中，使用时直接引用该标识即可。

**长按识别二维码查看原文**   

https://github.com/nairinarinyan/iconito

Nairi Narinyan

**useRerender** — 监测组件挂载、卸载和重新渲染的 hook。

**长按识别二维码查看原文**   

https://github.com/geobde/useRerender

George Bardi

**React Code Input** — 该库可以创建一个轻量级的 textarea 组件并自动高亮显示代码，**如 Github 上样例所示**。

**长按识别二维码查看原文**   

https://github.com/srsholmes/react-code-input

Simon Holmes

**⚡️ 好库推荐：**

-   **CRACO v7.1**  
    ↳ Create React App 的配置层
    
-   **react-native-permissions v3.8**  
    ↳ 跨平台统一权限 API
    
-   **React Stripe.js v2.0**  
    ↳ Stripe.js 和 Stripe Elements 的组件库
    
-   **Million v2.0**  
    ↳ 超小的虚拟 DOM，使 React 更快
    
-   **Sonner v0.2**  
    ↳ 一款 toast 通知组件
    
-   **react-xr v5.4**  
    ↳ 使用 React Three Fiber 实现 VR/AR
    
-   **Playroom 0.v31**  
    ↳ 使用 JSX 进行设计，并基于你自己的组件库
    

## 🙋🏻‍♀️
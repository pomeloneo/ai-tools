# React 中文周刊 #244 - 不用框架也能用 React Server Components

> 原文链接: http://mp.weixin.qq.com/s?__biz=MzIzOTkwMjM0OQ==&mid=2247543472&idx=1&sn=f38feb78e510a6e9ea4f4ad42baed601&chksm=e9216152de56e84465a90395f2712b8f07c929ec4e742bd8ec3d9288edba2c6a8c71511ebc9d#rd
> 抓取时间: 2026/2/2 23:41:45

---

> 本期看点：Krasimir 开发工具实现无需框架的 React Server Components，react-window v2.0 发布并支持 React 18，React 19 的 Activity 功能在 Suspense 数据中的应用。

> 编辑：TimLi

🔥 本周热门

**不用框架也能用 React Server Components？** —— 如果你不想使用 Next.js（或者甚至是轻量级的 Waku 框架），但又想尝试 React Server Components，这篇文章正适合你。Krasimir 开发了一个工具，可以在客户端和服务器之间拆分代码，让你无需框架就能运行 RSC。

**长按识别二维码查看原文**   

https://krasimirtsonev.com/blog/article/vanilla-react-server-components-with-no-framework

Krasimir Tsonev

**react-window v2.0：快速渲染大型数据列表** —— 这是一个用于快速渲染大型数据列表的组件库，可以避免常见的性能问题。你可以查看多个示例，注意该版本需要 React 18。（Tanstack Virtual 是这个领域的另一个选择。）

**长按识别二维码查看原文**   

https://react-window.vercel.app/

Brian Vaughn

**在 Suspense 数据中使用 `Activity`** —— 被 React 19 的 Activity 隐藏的组件会保持其状态，同时卸载其副作用，并继续预加载 suspense 数据——这里解释了为什么这很有用。

**长按识别二维码查看原文**   

https://www.simeongriggs.dev/use-the-activity-boundary-to-hide-suspenseful-components

Simeon Griggs

**📄 React 组件样式指南** —— 比较了几种不同的方法，包括 **styled components**、CSS Modules 和 Tailwind。Hassan Djirdeh

**长按识别二维码查看原文**   

https://www.telerik.com/blogs/ultimate-guide-styling-react-components

**📄 如何用 React 和 Wijmo 构建销售仪表板** —— Wijmo 是一套商业 UI 组件库。Andrew Peterson (Mescius)

**长按识别二维码查看原文**   

https://developer.mescius.com/blogs/how-to-build-a-sales-dashboard-with-react

**📄 Next.js 令人抓狂** —— **"到处都是 bug 和边界情况"**。Dominik Meca

**长按识别二维码查看原文**   

https://blog.meca.sh/3lxoty3shjc2z?auth\_completed=true

**📄 同步的 SQLite 给 Expo 应用程序带来了什么** Christiaan Landman (Expo)

**长按识别二维码查看原文**   

https://expo.dev/blog/what-synced-in-app-sqlite-brings-to-expo-apps

**📄 从服务器状态派生客户端状态** Dominik Dorfmeister

**长按识别二维码查看原文**   

https://tkdodo.eu/blog/deriving-client-state-from-server-state

**快讯：**

-   历史回顾：11 年前的今天，Sebastian Markbåge 首次发布了 JSX 规范。
    
    **长按识别二维码查看原文**   
    
    https://legacy.reactjs.org/blog/2014/09/03/introducing-the-jsx-specification.html
    
-   Remix v3 计划"放弃" React，转而使用自己的 Preact 分支。
    
    **长按识别二维码查看原文**   
    
    https://www.infoq.com/news/2025/08/remix-run-v3-drops-react/
    
-   未来几个月将举办多场 React 相关活动，包括 10 月的 🇪🇸 React Alicante、🇮🇹 reactjsday 和 🇮🇳 React India 2025，以及 11 月的 🇺🇸 React Summit 和 🇬🇧 React Advanced London。
    
    **长按识别二维码查看原文**   
    
    https://reactalicante.es/
    
      
    

🛠 代码与工具

**🗓️ React DayPicker v9.9：用于创建日期选择器控件的组件** —— 虽然市面上有很多日期选择组件，但很少有像 DayPicker 这样成熟的组件。它专注于提供基础功能，让你可以按需进行样式和定制——而且它符合现代可访问性要求。GitHub 仓库。

**长按识别二维码查看原文**   

https://daypicker.dev/

Giampaolo Bellavite

**Redux Toolkit v2.9："开箱即用"的 Redux 工具集** —— 这个用于高效使用 Redux 状态管理的长期工具集获得了性能更新，包括重写了 RTK Query 的内部订阅和轮询系统、当缓存条目被移除时自动中止正在进行的请求、新的 `builder.addAsyncThunk` 方法，以及 bug 修复。

**长按识别二维码查看原文**   

https://github.com/reduxjs/redux-toolkit/releases/tag/v2.9.0

Mark Erikson

**React on Rails v15：将 React 和 **Ruby on Rails** 结合** —— 这是一个旨在将 React 与 **Ruby on Rails** 服务器端渲染方法集成的成熟框架。v15 引入了在页面完全加载前开始水合的功能。此外还有付费版 React on Rails Pro（即将以双重许可模式开源），它支持 React Server Components。GitHub 仓库。

**长按识别二维码查看原文**   

https://github.com/shakacode/react\_on\_rails/blob/master/docs/release-notes/15.0.0.md

ShakaCode

**react-json-view-lite：以树形结构渲染 JSON** —— 这是一个轻量级组件，用于可视化 JSON。它保留了基本格式和 JSON 特性，同时允许你折叠或展开数组和对象，更容易查看结构。演示。

**长按识别二维码查看原文**   

https://github.com/AnyRoad/react-json-view-lite

Andrei Alikov

📢 JavaScript 生态圈其他动态

以下是 JavaScript 生态圈中一些你可能错过的有趣故事：

-   Daniel Rosenwasser 提议 TypeScript 6.0 应该默认启用 `--strict` 模式。你可以在这里了解更多关于 TypeScript 6.0 的计划。
    
    **长按识别二维码查看原文**   
    
    https://github.com/microsoft/TypeScript/issues/62333
    
-   Nolan Lawson 探讨了为什么浏览器会限制 JavaScript 计时器。
    
    **长按识别二维码查看原文**   
    
    https://nolanlawson.com/2025/08/31/why-do-browsers-throttle-javascript-timers/
    
-   Alexander Lichter 和 Michael Dong 总结了 ViteLand 上个月的新动态，涵盖了 Oxlint、Vite、Vitest、Rolldown 以及即将举办的活动。
    
    **长按识别二维码查看原文**   
    
    https://voidzero.dev/posts/whats-new-aug-2025
    
-   Dan Abramov 为 JavaScript 开发者写了一份 Lean 入门指南。Lean 是一个定理证明器和用于创建形式化验证代码的语言。
    
    **长按识别二维码查看原文**   
    
    https://overreacted.io/lean-for-javascript-developers/
    
-   Rspack 1.5 这个快速的 Web 打包工具改进了桶文件优化、提供了更快的文件系统监视器、改进了浏览器支持等。这是一个重大版本。
    
    **长按识别二维码查看原文**   
    
    https://rspack.rs/blog/announcing-1-5
    
-   Angular 团队分享了一些更新，介绍了他们那边的最新进展。
    
    **长按识别二维码查看原文**   
    
    https://blog.angular.dev/angular-summer-update-2025-1987592a0b42?gi=aa3528a1c439
    
      
    

**版本发布：**

-   **react-qrcode-logo v4.0** —— 用于生成可自定义二维码的组件，可以包含自定义 logo。
    
-   **React Native Reanimated v4.1** —— React Native 的 Animated **重新实现**。
    
-   **React Admin v5.11** —— 用于构建 B2B 前端界面的框架。
    
-   **React Stripe.js v4.0** —— Stripe.js 和 Stripe Elements 的组件。
    
-   **BlockNote v0.37** —— 类似 Notion 的基于块的编辑器。
    
-   **Ink v6.2.3** —— 使用 React 构建命令行应用程序。
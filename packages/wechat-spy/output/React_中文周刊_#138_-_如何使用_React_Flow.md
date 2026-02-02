# React 中文周刊 #138 - 如何使用 React Flow

> 原文链接: http://mp.weixin.qq.com/s?__biz=MzIzOTkwMjM0OQ==&mid=2247519349&idx=1&sn=eb6c272cfa8c71ede99f27bf2655b89b&chksm=e921c797de564e81cc80edaab1de3723dd25efc37d3e2af7e61016f0b14122a74751e5f8df5e#rd
> 抓取时间: 2026/2/2 23:45:32

---

> 本期看点：React Router 6 的九小时探究；Create React App 的现代替代方案；使用 React Server Components 在博客上显示访问计数器。

> 编辑：iShawnWang、edison-hm、tmkx、whatwewant

## 🔥 本周热门

**在 React 中如何编写注释：好的、坏的和丑陋的风格** — `{/* 像这样编写注释 */}` 是在 JSX 中编写注释的常见方法，但还有另外两种方法你也应该知道。

**长按识别二维码查看原文**   

https://dmitripavlutin.com/react-comments/

Dmitri Pavlutin

**▶ React Router 6 的九小时探究** — 来自 Scrimba 的 Bob Ziroll 为我们呈现了一个基于 React Router 的应用程序的开发全过程，完整观看需要较长时间，但它是免费的。

**长按识别二维码查看原文**   

https://www.youtube.com/watch?v=nDGA3km5He4

Bob Ziroll

**Create React App 的现代替代方案** — `create-react-app` 曾经是构建单页 React 应用程序的首选工具，但是这篇文章介绍了现在常用的各种替代方案。（我们支持 Vite！）

**长按识别二维码查看原文**   

https://codingpastor.dev/goodbye-create-react-app-a-new-approach

Ayooluwa Aduwo

**使用 React Server Components 在博客上显示访问计数器** — 使用 React Server Components 在博客上显示访问计数器 — 听说过 **React Server Components**，但还没有机会尝试？这篇简明教程使用一个常见且易于理解的用例来试用 RSC。此外，它还让我们想起了 90 年代，这永远是一个好的氛围。

**长按识别二维码查看原文**   

https://scastiel.dev/view-counter-react-server-components

Sebastien Castiel

**React ❤️ Rails?** — **Superglue** 是一个受 Turbolinks 启发的 React Redux 模版库，旨在补充 Ruby on Rails。

**长按识别二维码查看原文**   

https://thoughtbot.com/blog/my-introduction-to-superglue-react-rails

Dave Iverson (thoughtbot)

**▶ 使用 Zustand 简化 React 状态管理** — **Zustand** 是一个简单且不冗长的 Redux 替代品，Niklas Ziermann 在 YouTube 上进行了全面介绍（75 分钟）。

**长按识别二维码查看原文**   

https://www.youtube.com/watch?v=fZPgBnL2x-Q

Niklas Ziermann

🗣 Reddit 最近也讨论了 Zustand 和 Redux 的区别。

**使用 Tauri 和 React 构建笔记应用程序** — **Tauri** 是一个基于 Rust 的框架，用于构建桌面应用程序。

**长按识别二维码查看原文**   

https://betterprogramming.pub/building-cross-platform-desktop-applications-with-tauri-part-ii-8d6ad1927093?gi=2e3c50c25e6c

Yonatan Dawit

**快讯：**

-   一次有关 **Qwik** 和 React 优缺点的 **Twitter 讨论** 引起了 Dan Abramov 的关注：「如果我们认为 Qwik 模型更好，我们就会直接实现它。」
    

**长按识别二维码查看原文**   

https://twitter.com/dan\_abramov/status/1651055386101796864

-   Dan 在一个关于 **bug 反馈的讨论** 中提到，如果你在 React 中使用 **Preact Signals**，你将失去 React 正常工作的任何保证，「如果 React 是一件硬件，这正是使保修无效的事情。」
    

**长按识别二维码查看原文**   

https://github.com/facebook/react/issues/26704#issuecomment-1522044060

-   **ipyreact** 正在取得进展，这是一种在基于 **Jupyter Notebook** 的环境中使用 React 的方法，**IPyWidgets** 是一种添加交互式小部件的方法，它们通常（但不仅限于）使用 Python。
    

**长按识别二维码查看原文**   

https://github.com/widgetti/ipyreact

-   react-beautiful-dnd 的创作者 Alex Reardon 最近推出了「**▶️ 实用的拖放**」，这是一种面向性能的新方法，用于在 web 应用程序中提供拖放功能。
    

**长按识别二维码查看原文**   

https://www.youtube.com/watch?v=5SQkOyzZLHM

## 🛠  代码与工具

**react-json-form：轻松地用 JSON 生成表单** — 这个项目有一个相当优秀的 **playground** 来展示完整的样例。附上 **GitHub 地址**。

**长按识别二维码查看原文**   

https://bhch.github.io/react-json-form/playground/

Bharat Chauhan

**Satori：将 HTML 和 CSS 转换为 SVG** — 该库的设计初衷是与 React 和 JSX 一起使用。虽然它只支持大部分 HTML 标签和样式，但旨在提供一种熟悉的方式来从代码中生成图像。

**长按识别二维码查看原文**   

https://github.com/vercel/satori

Vercel

**Ink v4.2：使用 React 构建交互式 CLI 应用程序** — 一个基于终端的 React 渲染器，你可以使用 React 风格的组件构建命令行应用程序。本次发布的 **v4.2** 围绕着 Box 组件的样式增加了很多新的特性。

**长按识别二维码查看原文**   

https://github.com/vadimdemedes/ink

Vadim Demedes

**Editable：一个可扩展的富文本编辑器框架** — 该库目前基于 React 开发，未来也有推出纯 JavaScript 版本的计划。它的主要特点是避免使用 “contenteditable” 属性，以提高交互操作性。读者可以在 **playground** 上试用下。

**长按识别二维码查看原文**   

https://github.com/editablejs/editable

Editable

**⚡️ 好库推荐：**

-   **tremor v2.2**  
    ↳ 用于快速构建后台的组件库
    
-   **react-dart v6.2**  
    ↳ React 的 Dart 绑定
    

## 🙋🏻‍♀️
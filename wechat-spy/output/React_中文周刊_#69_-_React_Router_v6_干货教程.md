# React 中文周刊 #69 - React Router v6 干货教程

> 原文链接: http://mp.weixin.qq.com/s?__biz=MzIzOTkwMjM0OQ==&mid=2247496519&idx=1&sn=fc7abcee8e600939dd9461d27265ecc8&chksm=e921b8a5de5631b36076c6e50877cb5e99dbbeb67e78229c1e8dfc4154581da8357895b894c9#rd
> 抓取时间: 2026/2/2 23:48:05

---

> 本周看点：Rust 是编程的未来？那么不妨让我们学学如何使用 Rust 编写 React 组件。
> 
> 电脑阅读，请点击阅读原文或直接访问 https://docschina.org/weekly/react

> 编辑：edison-hm、syjstc、whatwewant

## 🔥 本周热门

**使用由 Rust 编译成的 WebAssembly 编写 React 组件** — 作者带我们领略了将 Rust 集成到标准的 React 工作流程中有多容易，这看起来像是一次流行的碰撞，但更有可能代表着未来！

**长按识别二维码查看原文**   

https://www.joshfinnie.com/blog/using-webassembly-created-in-rust-for-fast-react-components/

Josh Finnie

▶  React Router v6 干货教程 — 我们已经多次提到过 React Router v6，本次推荐一个主要讲解基础知识的 10 分钟录屏教程。

**长按识别二维码查看原文**   

https://www.youtube.com/watch?v=9wm54eDHDI8

Mitchel S

**如何维护一个大型的 Next.js 应用** — 作者建议：与其尝试升级项目初期使用的过时技术，不如使用一些即使代码量增长，依然能保持良好代码状态的工具。

**长按识别二维码查看原文**   

https://www.smashingmagazine.com/2021/11/maintain-large-nextjs-application/

Nirmalya Ghosh

🎄📧  **React Holiday：React 18 教程** — 去年该网站推出了一个介绍 React 技巧的圣诞日历。今年推出的是为期 25 天的 React 18 免费教程，教程是通过电子邮箱的方式发送给你，同时你也可以在 Discord 上进行讨论。

**长按识别二维码查看原文**   

https://react.holiday/

Michael Chan

**为什么有时候 \`useEffect\` 会在渲染前执行？** — 当你使用 “useEffect” 时，你的应用是否会出现难以解释和排查的诡异现象？这可能是因为 “useEffect” 的触发时机和你的预期不一致。

**长按识别二维码查看原文**   

https://thoughtspile.github.io/2021/11/15/unintentional-layout-effect/

Vladimir Klepov

**React 企业级项目的文件结构是怎么样的** — 虽然这个类型的文章内容是主观的，但是仍然可以帮助你取长补短。

**长按识别二维码查看原文**   

https://engineering.udacity.com/react-folder-structure-for-enterprise-level-applications-f8384eff162b?gi=84785be46aa

Kolby Sisk

**使用 Node 和 React 实现 SSE（服务端消息推送）** — 服务端消息推送(SSE) 是一种经常被忽视的技术，它不需要刷新页面，也不需要无休止的 js 轮询，就可以实现从后端向客户端发送实时的更新。本文是一个基本示例。

**长按识别二维码查看原文**   

https://blog.tericcabrel.com/implement-server-sent-event-in-node-js/

Eric Cabrel Tiogo

**认识 Svelte，并对比 React 和 Vue** — 由于《纽约时报》对快速构建灵活的交互式可视化的苛刻要求，Svelte 应运而生，它的能力也正变得越来越强大。本文对比了 Svelte、React 和 Vue 的差异。

**长按识别二维码查看原文**   

https://joshcollinsworth.com/blog/introducing-svelte-comparing-with-react-vue

Josh Collinsworth

**借助封装了 localStorage 的自定义 Hook 来实现状态持久化** — 似乎每个星期都会出现新的状态持久化方案。而本文的作者采用了一种直截了当的方法：使用 localStorage。

**长按识别二维码查看原文**   

https://levelup.gitconnected.com/react-localstorage-persisting-state-with-a-custom-hook-98f9a88ae7a9?gi=172938ccd2d1

Damiano Magrini

## 🛠  代码与工具

**React PDF Reader 1.0：一个简易的 PDF 预览组件** — 该组件封装了 PDF.js。

**长按识别二维码查看原文**   

https://github.com/ZEISS/react-view-pdf

ZEISS Group

**Goober：CSS-in-JS 方案** — 这是一个 1 KB 大小的 CSS-in-JS 方案，可以替代 23 KB 的 styled-components 和 emotion 组合。而且如果你可以减少 goober 库 gzip 后的体积，他们还会奖励你美元。

**长按识别二维码查看原文**   

https://github.com/cristianbote/goober

Cristian Bote

**Elementary Grid：一个基于 JS 和 Elementary 开发的音乐创作软件** — 借助这款基于 js 开发的网格音乐创作软件，你可能可以成为下一个 deadmau5，或者至少也能开心的玩上 30 秒。

**长按识别二维码查看原文**   

https://teetow.github.io/elementary\_grid/

Johan Althoff

**lottie-react-native：基于 JSON 配置、适配多平台的动画库** — 该库使用 Adobe After Effects 创建动画，并使用 Lottie 在 React Native 上运行它们。

**长按识别二维码查看原文**   

https://github.com/lottie-react-native/lottie-react-native

Lottie - React Native

**React Virtual 2.9：支持虚拟滚动的 React Hook** — 该 Hook 脱离视图层，可以处理行、列和网格级别的虚拟化，支持命令式滚动、自定义滚动等功能。

**长按识别二维码查看原文**   

https://github.com/tannerlinsley/react-virtual

Tanner Linsley

**⚡️ 好库推荐：**

-   react-native-select-dropdown — 高度可定制的下拉组件
    
-   React Simple Rating — 让用户方便的进行星级评分
    
-   react-tree-graph — 将数据渲染为 SVG 树
    
-   react-native-oss-license — 证书列表生成器
    
-   react-leaf-carousel — 支持懒加载的无限轮播
    

## 🙋‍♂️ 

我们将为你带来最前沿的前端资讯。
# React 中文周刊 #105 - 理解 React useMemo、useCallBack 等 Hooks

> 原文链接: http://mp.weixin.qq.com/s?__biz=MzIzOTkwMjM0OQ==&mid=2247510133&idx=1&sn=1c5f7254ca5e5228ffde629146d7eb58&chksm=e921e397de566a81631e3a43a4fc110082eef067c3e2a699113cc3f88364f03bd98ae8aa571e#rd
> 抓取时间: 2026/2/2 23:46:49

---

> 本期看点：解析常用 React Hooks 的确切使用场景; 详细阐明 React 错误边界的使用方式。

> 编辑：iShawnWang、edison-hm、tmkx、whatwewant

## 🔥 本周热门

**理解 \`useMemo\` and \`useCallback\`** — 许多人发现这些 Hooks 令人困惑，本教程详细介绍了它们的确切用途以及如何充分利用它们 —— 一如既往的采用 Josh 深入浅出的叙述风格。

**长按识别二维码查看原文**   

https://www.joshwcomeau.com/react/usememo-and-usecallback/

Josh W. Comeau

**为什么 React Context 很棒（以及为什么我们没有使用它）** — 有些东西很好，但并不适合每个项目。Allen 解释了他的团队在使用 `useContext` 过程中遇到的问题。

**长按识别二维码查看原文**   

https://spin.atomicobject.com/2022/08/24/react-contexts/

Allen Janyska

**React 错误边界指南** — 未正确捕获并处理第三方库或 React Hooks 抛出的错误可能让它最终到达主线程的顶层，导致可怕的“白屏”场景。关于错误边界的 **官方文档** 很值得参考。

**长按识别二维码查看原文**   

https://meticulous.ai/blog/react-error-boundaries-complete-guide/

**快讯**

-   在他的播客中，Kent C Dodds ▶️ **answers a question** 关于从 React 和 Ruby on Rails 混合应用迁移到 **Remix** 的可行性。
    
    **长按识别二维码查看原文**   
    
    https://kentcdodds.com/calls/01/91/migration-from-react-rails-hybrid-to-remix  
    
-   💵 在 Reddit 上，React 开发者 **讨论了他们的薪水** 以及在美国或欧洲公司工作，同时生活在低消费的国家以降低生活成本。
    
    **长按识别二维码查看原文**   
    
    https://www.reddit.com/r/reactjs/comments/x19ijk/react\_devs\_from\_3rd\_world\_countries\_working\_for/  
    
-   🇨🇦 加拿大主要公共广播公司 CBC 有一个名为 **CBC Lite** 的网站, 这是一个使用 Next.js 实现的低带宽新闻网站. 你还可以快速收听 **他们所有的直播电台**。
    
    **长按识别二维码查看原文**   
    
    https://www.cbc.ca/lite/news?sort=editors-picks  
    

**何时使用 useLayoutEffect 而不是 useEffect** — 你的 UI 渲染过程中有烦人的闪烁吗？可能是你错误使用了其中之一的 Hook : 这与 Hook 是在浏览器绘制之前还是之后触发有关。

**长按识别二维码查看原文**   

https://javascript.plainenglish.io/react-hooks-when-to-use-uselayouteffect-instead-of-useeffect-3271a96d881a?gi=622ccbf807f3

Jakub Kozak

**即时可见的性能提升：从 FlatList 到 FlashList** — Shopify’s 更高效的 **FlashList** 是 React Native **FlatList** 的上位替代，并且可能使你的列表密集型应用程序焕然新生。

**长按识别二维码查看原文**   

https://shopify.engineering/instant-performance-upgrade-flatlist-flashlist

Marek Fořt (Shopify Mobile Engineering)

▶  **开始使用 React 和 MUI** — 一个 17 分钟的视频教程，介绍结合 React 和 **MUI** 组件来创建一个基础前端应用。

**长按识别二维码查看原文**   

https://www.youtube.com/watch?v=BlNbYxiyeQM

Tek E

**使用 React Router 实现模块化** — 嵌套路由的使用指南。

**长按识别二维码查看原文**   

https://betterprogramming.pub/using-react-router-for-modularization-872b32315a3b?gi=259f2d43ca17

Moleseng Mokgosi

**十个 React 使用陷阱**

**长按识别二维码查看原文**   

https://medium.com/@imranfarooq0306/10-react-traps-to-avoid-as-react-developer-5570808e346b

Imran Farooq

## 🛠  代码与工具

**Loading Disco：一种新的 Loading 动画** — 这个 Loading 动画的表现形式很简洁，并不像其名字那样“迪斯科”。作者在其中使用了一些巧妙的技术，他也很欢迎大家可以去使用这个库来提升交互，这是它的 **github 地址**。

**长按识别二维码查看原文**   

https://joebell.co.uk/sketches/loading-disco

Joe Bell

**Create Rust App: 用一行命令开启现代 Rust + React Web 应用程序** — 如果你想用 Rust 构建应用程序的后端，那么该库提供了一种 CRA 式的体验。它使用 Vite 并且新增了 SQLite 支持。

**长按识别二维码查看原文**   

https://github.com/Wulf/create-rust-app

Haris Khan et al.

**ReacType v13.0：一个支持可视化绘制原型并导出 React 代码的工具** — **ReacType** 是一个 Electron 应用程序，用于对 React 应用进行原型设计，具有拖放画布、预览渲染和可视化应用程序结构的树形图。本次发布的 v13 版本彻底改革了状态的管理方式。

**长按识别二维码查看原文**   

https://medium.com/@darin.ngau/reactype13-b4e23fc38d76

Darin Ngau

**React-Uploady v1.1：提供了文件上传组件以及很多实用的 hooks** — 该库旨在使用简单且可定制，它提供了文件上传按钮、预览、拖放上传区域等功能。**文档** 很友好并附有一个示例。

**长按识别二维码查看原文**   

https://react-uploady.org/

Yoav Niran

**Sandpack：用于创建可实时编译代码的组件工具包** — 由 CodeSandbox 的团队开发，而且这个工具包的 **首页非常精致**。

**长按识别二维码查看原文**   

https://github.com/codesandbox/sandpack

CodeSandbox

**Zhithead：用 React 和 Framer Motion 实现的卡牌游戏 —— 笨蛋纸牌（Shithead）** — 你可以 **点击这里试玩游戏**。小编不熟悉原版的游戏，不过这款游戏的体验真的很流畅。

**长按识别二维码查看原文**   

https://github.com/aod/zhithead

Oktay

**⚡️ 好库推荐：**

-   **React Native Gesture Handler v2.6** – 暴露系统原生的手势 API
    
-   **re-frame v1.3** – 基于 React 的 ClojureScript UI 框架
    
-   **react-xr v5.0** – 使用 react-three-fiber 构建 VR/AR 应用
    
-   **graphql-react v20.0** – 使用 context 和 hooks API 的 GraphQL 客户端
    
-   **Reactist v15.0** – React 组件集（例子）
    
-   **Styled Components v6.0 Beta**
    
-   **MUI v5.10.3**
    

## 🙋🏻‍♀️
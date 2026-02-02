# React 中文周刊 #129 - 2023 年的 React 生态

> 原文链接: http://mp.weixin.qq.com/s?__biz=MzIzOTkwMjM0OQ==&mid=2247516817&idx=2&sn=206bec7d13cf3759cb5e0bafa2779f38&chksm=e921c973de564065088770d103f99dca7174b976515cb3c7cbf128ce57f4cd23f4de91793495#rd
> 抓取时间: 2026/2/2 23:45:52

---

> 本期看点：如何避免棘手的异步状态管理器陷阱；2023 年对 Vue 的期待以及它与 React 的不同之处；检测不必要的 React 组件挂载。

> 编辑：iShawnWang、edison-hm、tmkx、whatwewant

## 🔥 本周热门

**2023 年的 React 生态** — React 生态如此庞大，以至于问题之一是大家被数不胜数的选项干扰，而不是直接找到自己确切想要的。此列表罗列出一些有依据的标准选项，可供新项目进行技术选型时参考，最近维护者 Robin 刚刚对此列表进行了年度更新。

**长按识别二维码查看原文**   

https://www.robinwieruch.de/react-libraries/

Robin Wieruch

**如何避免棘手的异步状态管理器陷阱** — 了解如何防止一些 React 中使用异步状态管理时可能出现的棘手问题，并避免影响到 UI、动画和用户体验。

**长按识别二维码查看原文**   

https://evilmartians.com/chronicles/how-to-avoid-tricky-async-state-manager-pitfalls-react

Ivan Buryak 与 Travis Turner

**Zod、Superstruct、Yup 和 Typebox 的性能分析** — 作者的基于 tRPC/React 的项目开始出现性能问题，经过一番审查，他将原因缩小到 Zod，并决定将它与其它类型驱动的数据校验库进行基准测试。与基准测试一样，使用挑剔的眼光对自己质疑的代码进行基准测试。

**长按识别二维码查看原文**   

https://dev.to/nicklucas/typescript-runtime-validators-and-dx-a-type-checking-performance-analysis-of-zodsuperstructyuptypebox-5416

Nick Lucas

▶ **如何使用 React 构建拼字游戏** — 非常实用的，令人享受的分步讲解视频。

**长按识别二维码查看原文**   

https://www.youtube.com/watch?v=hJYG\_jBURYE

Alicia Rodriguez

**检测不必要的 React 组件挂载**

**长按识别二维码查看原文**   

https://contra.com/p/EEUr7sRc-detecting-unnecessarily-mounted-react-components-in-a-large-app

Gajus Kuizinas

**了解 React v18 和 Next.js v13 中的服务端组件**

**长按识别二维码查看原文**   

https://programmingwithmosh.com/react/understanding-server-components-in-react-18-and-next-js-13/

Adhithi Ravichandran (Programming with Mosh)

**如何在 React 中创建视频和音频记录器**

**长按识别二维码查看原文**   

https://blog.logrocket.com/how-to-create-video-audio-recorder-react/

Iniubong Obonguko

**快讯：**

-   C
    
    harles Chen 说 **React 是新的 IBM**， 在某种意义上，即使 React 不是_最佳_的，但也是目前最不可能让你被解雇的方案...
    
      
    

  

**长按识别二维码查看原文**   

https://chrlschn.medium.com/react-is-the-new-ibm-6af2f4b04e5e

  

-   在
    
     Youtube 上，Jack Herrington 将 ▶️ **Next.js v13, Next.js v12, and Astro v2 在基准测试中进行对比**。
    
      
    

  

**长按识别二维码查看原文**   

https://www.youtube.com/watch?v=wzRSYQ3b-Mk

  

-   在
    
     Twitter 上，有很多针对该问题的讨论：🐦 **“你更喜欢用什么来处理 React 中的表单？”**
    
      
    

**长按识别二维码查看原文**   

https://twitter.com/Steve8708/status/1626945557515350017

## 🛠  代码与工具

**Urban Bot v1.0：基于 React 开发的通用聊天机器人库** — 如果你想要在 Telegram、Discord、Slack 或 Facebook Messenger 等不同平台上拥有聊天机器人的功能，与其忙于适配各家的 API，不如直接用 Urban Bot 开发一个。**附上 GitHub 地址**。

**长按识别二维码查看原文**   

https://urban-bot.vercel.app/

Urban Bot

**dnd kit：一款提供拖拽功能的工具包** — 使用这个工具包可以让你方便快捷的开发拖拽功能。dnd kit 的官网本身就是一个很好的案例，此外官网上还提供了相应的代码，值得体验下。

**长按识别二维码查看原文**   

https://dndkit.com/

Claudéric Demers

**Wouter：一个轻量的 React 路由库** — 一个纯 hook 实现的轻量 React/Preact 路由库。最近它的呼声越来越高了，如果你想要找一个 React Router 的替代品，那么可以试试 Wouter。

**长按识别二维码查看原文**   

https://github.com/molefrog/wouter

Alexey Taktarov

**AutoAnimate：一行代码就可以为应用增加动画效果** — AutoAnimate 可以用于 React、Vue、Svelte 或纯 JavaScript 应用，官网上提供了几个很好的案例，可以去体验下。

**长按识别二维码查看原文**   

https://auto-animate.formkit.com/

FormKit

**sequential-workflow-designer：工作流设计器** — 这是一个基于 TypeScript 和 SVG 开发的设计器，它不与任何特定的工作流引擎耦合，所以可以灵活的嵌入各种场景中使用。

**长按识别二维码查看原文**   

https://github.com/nocode-js/sequential-workflow-designer

n4no

**⚡️ 好库推荐：**

-   **📅 React Day Picker v8.6**  
    ↳ 可自定义的日期选择组件
    
-   **tRPC v10.12**  
    ↳ 轻松实现端到端类型安全 API
    
-   **Reagent v1.2**  
    ↳ 使用 ClojureScript 接口编写 React
    
-   **PrimeReact v9.2**  
    ↳ React UI 组件的大型套件
    
-   **Jotai v2.0.2**  
    ↳ 灵活的状态管理库
    
-   **React-Uploady v1.4**  
    ↳ 现代文件上传组件
    
-   **useHotkeys v4.3.7**  
    ↳ 声明式键盘快捷键
    
-   **React Testing Library v14.0**
    

## 🙋🏻‍♀️
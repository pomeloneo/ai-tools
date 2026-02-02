# React 中文周刊 #195 - React 开发者需要了解的 React Native 知识

> 原文链接: http://mp.weixin.qq.com/s?__biz=MzIzOTkwMjM0OQ==&mid=2247533560&idx=1&sn=b3d5ee1b180e3e390cc3db52183cdafd&chksm=e921081ade56810c14f493a5f1e3d2635a1c835a5f9e5a7266c4039c83a95dd7de30eb273e14#rd
> 抓取时间: 2026/2/2 23:43:31

---

> 本期看点：尽管 React 和 React Native 有很多相似之处，但它们在底层实现上有很大差异。React 开发者需要了解一些 React Native 内容，无论是为了转型，还是至少为了更清楚地了解 React Native 和 Expo 在整体格局中的定位。

> 编辑：TimLi

🔥 本周热门

**React 开发者需要了解的 React Native 知识** — 尽管 React 和 React Native 有很多相似之处，但它们在底层实现上有很大差异。以下是一些你需要了解的内容，无论是为了转型，还是至少为了更清楚地了解 React Native 和 Expo 在整体格局中的定位。

**长按识别二维码查看原文**   

https://expo.dev/blog/from-web-to-native-with-react

Kadi Kraman（Expo）

**▶  今天为什么还要使用 Redux？** — 流行的 Redux 状态管理库的维护者在 2024 年的 React 峰会上发表了一次演讲，详细介绍了 Redux 的历史、其增长过程以及它持续提供的好处。如果你不想看视频，这里有详细的 PPT。

**长按识别二维码查看原文**   

https://blog.isquaredsoftware.com/2024/07/presentations-why-use-redux/

Mark Erikson  

**▶  将 Coinbase 的 5600 万用户迁移到 React Native** — 这是对 Coinbase 的 React Native 开发者 Nick Cherry 的采访，讨论了公司从原生应用迁移到 React Native 的工作。

**长按识别二维码查看原文**   

https://stepchange.work/blog/migrating-coinbases-56-million-users-to-react-native-key-lessons-and-takeaways

Harry Tormey

💡 类似地，Incident․io 也撰文介绍了 他们使用 React Native 构建新版 on-call 应用 的经验，并分享了他们对 Expo 的看法。

**长按识别二维码查看原文**   

https://react.statuscode.com/link/157697/web

**如何使用容器注册表部署你的 React 应用** — DigitalOcean 通过创建 Docker 镜像，将其推送到 容器注册表 然后使用他们的 'droplet' 虚拟机之一进行部署，这是部署 React 应用的商业替代方案。

**长按识别二维码查看原文**   

https://www.digitalocean.com/community/developer-center/how-to-deploy-your-react-app-using-container-registry

Ravish Ahmad Khan 和 Anish Singh Walia（DigitalOcean）

**🎧 React Compiler：与 Sathya Gunasekaran 和 Joe Savona 的对话** – React 核心团队的两个关键成员讨论最新的开发。PodRocket 播客

**长按识别二维码查看原文**   

http://podrocket.logrocket.com/react-compiler-sathya-gunasekaran-joe-savona

**📺 从头重新实现 React (TanStack) Query** – 仅需 14 分钟即可深入了解。Philip Fabianek

**长按识别二维码查看原文**   

https://www.youtube.com/watch?v=YmrnPOgOvy4

**📄 React 表单按钮** – 如何使用表单按钮在没有任何表单字段或表单数据的情况下触发服务器组件中的服务器动作。Robin Wieruch

**长按识别二维码查看原文**   

https://www.robinwieruch.de/react-form-button/

**📄 你应该知道的 5 个关于 Hooks 的重要原则** Inna Sinicka

**长按识别二维码查看原文**   

https://code.likeagirl.io/learning-react-5-important-principles-about-hooks-you-have-to-know-4967cd9d4eb4?gi=10d813bb5dee

**快讯**

-   🇮🇳 React India 2024 将在今年十月以线上和线下形式举行，并且延长了征稿时间至 7 月 30 日，如果你想发言的话。
    
    **长按识别二维码查看原文**   
    
    https://www.reactindia.io/
    
-   来自 Vercel 的 Malte Ubl 在 官方 Next.js 网站 上解释了 他们如何改进 INP（Interaction to Next Paint）指标 并分享了一些自己改进的技巧。
    
    **长按识别二维码查看原文**   
    
    https://nextjs.org/
    
      
    

🛠 代码与工具

**xr v6.0：将 React Three Fiber 应用变为沉浸式体验** — React Three Fiber 是一个 适用于 Three.js 的 React 渲染器，让你可以轻松使用 React 创建 3D 体验。`xr` 更进一步，将其带入 VR 和增强现实的世界。GitHub  仓库。

**长按识别二维码查看原文**   

https://docs.pmnd.rs/xr/getting-started/introduction

Bela Bohlender  

**React CodeMirror：一个 CodeMirror 编辑器组件** — CodeMirror 是一个流行的 JavaScript 代码编辑器组件 – 这使得它在 React 应用中更易使用。主页提供了一个完整且可自定义的演示，展示了其潜力。GitHub  仓库。

**长按识别二维码查看原文**   

https://uiwjs.github.io/react-codemirror/

UIW  

**InfiniteGrid v4.12：无限地排列卡片元素与网格布局** — 一种成熟且可靠的方式，用于创建由不同大小卡片元素构成的网格布局。适用于桌面和移动设备，并且支持与 React、Vue、Angular、Svelte 等框架的集成。GitHub 仓库。

**长按识别二维码查看原文**   

https://naver.github.io/egjs-infinitegrid/

NAVER

**MDXEditor v3.8：一个丰富的 Markdown 编辑器组件** — 一个基于 Lexical 的 Markdown 编辑器组件，适用于 React 应用。Demo 演示 展示了你需要了解的内容。

**长按识别二维码查看原文**   

https://mdxeditor.dev/

Petyo Ivanov

**版本发布：**

-   **📱 React Native Vision Camera v4.5** – 高级相机控制。
    
-   **Flowchart Fun v1.50** – 基于 React 的应用程序，从文本生成流程图。
    
-   **rc-input-number v9.2** – 数字输入组件。
    
-   **MUI X v7.10** – 流行的 React 组件套件。
    

🙋🏻‍♀️
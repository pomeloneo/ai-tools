# React 中文周刊 #240 - TanStack DB 嵌入式客户端数据库测试版发布

> 原文链接: http://mp.weixin.qq.com/s?__biz=MzIzOTkwMjM0OQ==&mid=2247542965&idx=1&sn=61d85ac3a4690e444d8af2d5d56b2999&chksm=e9216357de56ea413c869887927ff8682b48fccfc03fdef69028a52ab2a7d81a518c7bdf3745#rd
> 抓取时间: 2026/2/2 23:41:54

---

> 本期看点：TanStack DB 嵌入式客户端数据库首个测试版发布，你的 useCallback 可能是多余的，Reanimated 4：React Native 动画的未来，Rooks.js v8.4：近百个各类 Hooks 合集。

> 编辑：TimLi

🔥 本周热门

**TanStack DB：TanStack Query 的嵌入式客户端数据库** —— TanStack DB 是一个嵌入式客户端数据库，它使用差分数据流（differential dataflow）来支持实时关系查询、亚毫秒级增量更新和无缝乐观写入。这篇文章很好地展示了这个想法，现在第一个测试版（v0.1）已经可以试用了。

**长按识别二维码查看原文**   

https://tanstack.com/blog/tanstack-db-0.1-the-embedded-client-database-for-tanstack-query

Kyle Mathews 和 Sam Willis

**无用的 `useCallback`** —— 探讨为什么 `useCallback` 和 `useMemo` 感觉像是毫无意义的工作，为什么一个未经记忆的 prop 就能破坏你的整个缓存策略，以及为什么像 `useEffectEvent` 和 React Compiler 这样的新工具可能会终结这些烦恼。

**长按识别二维码查看原文**   

https://tkdodo.eu/blog/the-useless-use-callback

Dominik Dorfmeister

**Parcel 如何打包 React Server Components** —— Parcel 几个月前添加了对 React Server Components 的支持，这里深入探讨了这个支持是如何工作的，像 `"use client"` 这样的指令实际上做了什么等等。

**长按识别二维码查看原文**   

https://devongovett.me/blog/parcel-rsc.html

Devon Govett

**iOS 版 React Native 预编译：v0.81 将带来更快的构建速度** —— 目前处于 RC3 阶段的下一个 React Native 版本引入了 iOS 预编译构建，承诺将构建时间缩短至原来的十分之一——来看看它是如何工作的。

**长按识别二维码查看原文**   

https://expo.dev/blog/precompiled-react-native-for-ios

Christian Falch 和 Brent Vatne（Expo）

**📄 Remix 3 和以 React 为中心架构的终结** Alexander T. Williams（The New Stack）

**长按识别二维码查看原文**   

https://thenewstack.io/remix-3-and-the-end-of-react-centric-architectures/

**📄 使用运行时密钥注入来检测 Next.js** Rohan Chaturvedi（Phase）

**长按识别二维码查看原文**   

https://phase.dev/blog/instrumenting-nextjs-with-runtime-secret-injection/

**📄 将 JSX 重写为 Astro 的笔记** Carlos Neves

**长按识别二维码查看原文**   

https://carlosn.com.br/blog/post/notes-on-rewriting-jsx-as-astro/

**快讯：**

-   TypeScript 5.9 RC 已经发布，最终版本将在本周晚些时候推出。支持 `import defer` 和新的 `--module node20` 特性是其中的亮点。
    
    **长按识别二维码查看原文**   
    
    https://devblogs.microsoft.com/typescript/announcing-typescript-5-9-rc/
    
-   📊 Stack Overflow 2025 调查结果出炉，React 是"最受欢迎"的 Web 技术第一名，不过 Svelte 更受"推崇"——不管这些词到底是什么意思。
    
    **长按识别二维码查看原文**   
    
    https://survey.stackoverflow.co/2025/
    
      
    

🛠 代码、工具和库

**Reanimated 4：React Native 动画的未来** —— 如果把 CSS 动画和过渡的精华部分带入 React Native 世界会怎样？这个重大版本甚至还配备了一个▶️ 精美的 5 分钟介绍视频来展示其功能。

**长按识别二维码查看原文**   

https://blog.swmansion.com/reanimated-4-stable-release-the-future-of-react-native-animations-ba68210c3713?gi=1583df28afb7

Krzysztof Magiera

**Better Upload：React 简单文件上传工具** —— 只需最少的设置就能直接上传文件到任何兼容 S3 的服务。快速入门指南展示了 Next.js、TanStack Start、Remix 和 Hono 的示例，但你可以将其适配到任何后端。

**长按识别二维码查看原文**   

https://better-upload.com/

Nicholas Affonso

**Rooks.js v8.4：近百个各类 Hooks 合集** —— 一个有趣的自定义 hooks 集合，涵盖了从在线状态和调整大小检测到语音合成和键盘输入等各个领域。左侧菜单中有大量示例。

**长按识别二维码查看原文**   

https://rooks.vercel.app/docs

Various Contributors

**React Three Viverse：为 VIVERSE 构建 Three.js / React Three Fiber 应用程序** —— VIVERSE 是 HTC 正在构建的一个开放虚拟世界平台。这里有一个用它构建游戏的教程。（GitHub 仓库）

**长按识别二维码查看原文**   

https://pmndrs.github.io/viverse/getting-started/index

Poimandres

📢 其他 JavaScript 相关

以下是一些你可能错过的广泛 JavaScript 领域的有趣故事：

-   一篇精彩的文章回顾了过去十年中众多 JavaScript 运行时和引擎。
    
    **长按识别二维码查看原文**   
    
    https://buttondown.com/whatever\_jamie/archive/the-many-many-many-javascript-runtimes-of-the-last-decade/
    
-   es-toolkit 现在是 Lodash 的 100% 兼容替代品，被 Storybook、Recharts 和 Ink 等项目使用。
    
    **长按识别二维码查看原文**   
    
    https://es-toolkit.dev/
    
-   ▶️ Jack Herrington 让 Zod 与 Valibot 在"JS/TS 验证器大战"中一决高下。
    
    **长按识别二维码查看原文**   
    
    https://www.youtube.com/watch?v=6P-2urhScwk
    
-   Hugging Face 的 Transformers.js 将机器学习模型直接带入浏览器。v3.7 添加了对 Voxtral（音频输入和转录）、LFM2 和 ModernBERT 的支持。
    
    **长按识别二维码查看原文**   
    
    https://github.com/huggingface/transformers.js
    
-   Vercel 讲述了如何构建其新的 Fluid 计算平台的故事，该平台本质上提供了"无服务器服务器"。
    
    **长按识别二维码查看原文**   
    
    https://vercel.com/blog/fluid-how-we-built-serverless-servers
    
-   Google 推出了 OSS Rebuild，这是一项通过允许比较包与上游构件来提高开源生态系统（如 npm）安全性的尝试。
    
    **长按识别二维码查看原文**   
    
    https://security.googleblog.com/2025/07/introducing-oss-rebuild-open-source.html
    
      
    

**版本发布：**

-   **Tinybase v6.5** – 用于本地优先应用程序的强大响应式数据存储。
    
-   **TanStack Form v1.15** – 强大的类型安全 Web 表单状态管理。
    
-   **IntentUI v3.3** – 基于 React Aria 构建的 React 组件套件。
    
-   **Preact v10.27** – 3KB 大小的 React 兼容替代品。
    
-   **BlockNote v0.35** – "Notion 风格"的基于块的编辑器。
    
-   **React-three-fiber v9.3** – Three.js 的 React 渲染器。
    
-   **Ink v6.1** – 使用 React 构建命令行应用程序。
# React 中文周刊 #174 - react-native-fast-trie：使用 C++ 实现的 Trie

> 原文链接: http://mp.weixin.qq.com/s?__biz=MzIzOTkwMjM0OQ==&mid=2247526544&idx=2&sn=e1020cdae9899cac3bb550bb56dbf41e&chksm=e9212372de56aa64ac20a7f3e29d8aa4909d35f5e2cf0316e2abfb7531d5ed22d623f1824a94#rd
> 抓取时间: 2026/2/2 23:44:17

---

> 本期看点：React Native 使用 C++ 与 JSI（RN 的原生代码 JavaScript 接口）实现了快速、内存高效的 Trie 数据结构。

> 编辑：Yucohny、edison-hm

## 🔥 本周热门

**将 Next.js 从 Pages Router 迁移到 App Router 的经验分享** —— 一个团队用 Next.js App Router 从零构建了他们应用的主面板，这篇文章介绍了他们在迁移 App Router 的过程中总结的优劣点，并在文章最后给出了对 **Remix** 的见解。

**长按识别二维码查看原文**   

https://www.flightcontrol.dev/blog/nextjs-app-router-migration-the-good-bad-and-ugly

Brandon Bayer（Flightcontrol）

👍 Jack Herrington 点评了 ▶️ **RSC 和 Next.js App Router 是否“真的那么糟糕”**，在他看来 App Router 的开发体验很好。

**长按识别二维码查看原文**   

https://www.youtube.com/watch?v=u0OMdWJfdhg

**React 面试问题与答案** —— 如果你正在找工作并准备面试，或者只是想巩固一下整体知识，这个资源对你会很有用。此外，它也能为你提供一些研究的方向，甚至还可能激发你贡献一些修复！

**长按识别二维码查看原文**   

https://github.com/sudheerj/reactjs-interview-questions

Sudheer Jonna

**使用 Shaders 和 React Three Fiber 照亮 Caustics** —— 手把手教你如何在 React Three Fiber 项目中构建一个光的 Caustics 效果（就像你可能会看到光线在表面折射/反射）使用着色器、渲染目标、法线贴图和自定义材质。

**长按识别二维码查看原文**   

https://blog.maximeheckel.com/posts/caustics-in-webgl/

Maxime Heckel

**😋 美味的 Donut 组件** —— 在这种情况下，Donut 不仅仅是一种美味的小吃，而且是一种交织客户端和服务器组件的模式。这篇文章配有一些很棒的图表。

**长按识别二维码查看原文**   

https://frontendatscale.com/blog/donut-components/

Maxi Ferreira

**在 React + Astro 中添加一个 AI 驱动的所见即所得编辑器** —— Colby 总是制作有趣的教程。在这里，Colby 演示了如何将 **Novel**，一个 AI 驱动的所见即所得编辑器，集成到 React + Astro 应用程序中。

**长按识别二维码查看原文**   

https://spacejelly.dev/posts/how-to-add-an-ai-powered-wysiwyg-editor-in-react-astro-with-novel

Colby Fayock

**最近 React 收到了一些非议**

**长按识别二维码查看原文**   

https://piccalil.li/blog/react-is-getting-a-bit-of-a-kicking-recently/

Andy Bell

**快讯：**

-   **▶️ 学习 Vercel 是如何构建 Vercel 的** 可能会很有趣，这是一个 15 分钟的视频。
    

**长按识别二维码查看原文**   

https://www.youtube.com/watch?v=-huwRrj\_HA4

-   François Zaninotto 分享了 **React 19 即将推出的新的客户端 hook**。
    

**长按识别二维码查看原文**   

https://marmelab.com/blog/2024/01/23/react-19-new-hooks.html

-   **React Native 的 Apple Vision Pro 分支**，这是针对 Apple 的新 虚拟现实 空间平台开发。
    

**长按识别二维码查看原文**   

https://thenewstack.io/react-native-fork-supports-development-on-apple-vision-pro/

-   **▶️ 最新 ReactJam 游戏开发活动的有趣看法** 和一些参赛作品。
    

**长按识别二维码查看原文**   

https://www.youtube.com/watch?v=nbXTnCCVj0U

-   在更广泛的社区中，一些关于 React 的悲观情绪仍在持续，最新引起注意的文章是 Simon MacDonald 的 **删除 React 只是在你的代码库中留下软弱的表现**。
    

**长按识别二维码查看原文**   

https://begin.com/blog/posts/2024-01-26-removing-react-is-just-weakness-leaving-your-codebase

-   Paul Scanlon **考虑将 Qwik 作为替代方案**。
    

**长按识别二维码查看原文**   

https://thenewstack.io/take-a-qwik-break-from-react-with-astro/

## 🛠  代码与工具

**React Resizable Panels：可调整面板的组件** —— 如果你有各种面板，并希望用户能够使用分隔符调整它们的大小，请尝试这个。网站添加了大量的示例与完整代码，并展示了各种功能。从 v2 开始，它支持同时调整多个相交的面板。这是 **GitHub 仓库**。

**长按识别二维码查看原文**   

https://react-resizable-panels.vercel.app/

Brian Vaughn

**🌈 React 曲线文本** —— 一种在 React 应用程序中呈现圆形或者曲线文本的方法。该页面包含一个交互式演示，让你可以尽情地尝试效果，然后复制所需的 JSX。

**长按识别二维码查看原文**   

https://obss.github.io/react-curved-text/

Open Business Software Solutions

**Mantine v7.5：功能齐全的组件套件** —— 这个备受欢迎的 React 组件和 hook 套件获得了新的圆环和饼图组件，改进了其他图表的格式选项，还在其 `Title` 组件上支持了 CSS `text-wrap` 等等。

**长按识别二维码查看原文**   

https://mantine.dev/changelog/7-5-0/

Mantine 开发者

**react-native-fast-trie：使用 C++ 实现的 Trie** —— React Native 使用 C++ 与 **JSI**（RN 的原生代码 JavaScript 接口）实现了快速、内存高效的 **Trie 数据结构**。

**长按识别二维码查看原文**   

https://github.com/zacharyfmarion/react-native-fast-trie

Zachary Marion

**版本发布：**

-   **Sonner v1.4** – 优雅的弹窗通知。在 **主页** 上有演示。
    
-   **React Date Picker v5.1** – 简单的日期选择器组件。这是 **演示**。
    
-   **🗓** **React Big Calendar v1.8.7** – 类似 GCal/Outlook 的日历组件。
    
-   **TanStack Query v5.18** – 异步状态管理和数据获取。
    
-   **re-frame v1.4.3** – ClojureScript UI 框架。
    
-   **React Virtuoso v4.6.3** – 强大的虚拟列表组件。
    
-   **ka-table v8.8** – 轻量级表格组件。
    

## 🙋🏻‍♀️
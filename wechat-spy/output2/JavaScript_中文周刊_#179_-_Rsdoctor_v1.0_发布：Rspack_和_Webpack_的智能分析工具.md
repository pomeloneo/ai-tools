# JavaScript 中文周刊 #179 - Rsdoctor v1.0 发布：Rspack 和 Webpack 的智能分析工具

> 原文链接: http://mp.weixin.qq.com/s?__biz=MzIzOTkwMjM0OQ==&mid=2247540780&idx=1&sn=4848189e8070760816e7559e7b443a2d&chksm=e9216bcede56e2d8621ed0d58b9521f389d3265a34eb8f4afd876f6cf8ec5c9d3bb6b472fad1#rd
> 抓取时间: 2026/2/2 23:50:14

---

> 本期看点：Rsdoctor v1.0 发布，提供一站式构建分析和性能优化工具；Oxlint JavaScript 代码检查工具进入 beta 阶段，处理速度提升2倍；Motion 发布 Vue 版本，带来完整的动画功能支持；Parcel v2.14.0 新增命令行工具并支持 React Server Components；Node.js TSC 投票决定在未来版本停止分发 Corepack。

> 编辑：TimLi

🔥 本周热点

**Rsdoctor v1.0：Rspack 和 Webpack 的分析工具** —— 这是一个一站式智能构建分析工具，可以帮助你轻松找出性能瓶颈并进行优化。它与 Rspack（一个基于 Rust 的 Web 打包工具）同属一个工具系列，并且完全兼容 webpack。如果你一直在困扰构建时间过长的问题，这个工具就是为你准备的。

**长按识别二维码查看原文**   

https://rsdoctor.dev/blog/release/release-note-1\_0

ByteDance Inc.

💡 说到基于 Rust 的 JavaScript 工具，Oxlint JavaScript 代码检查工具现已进入 beta 阶段。它就像是 ESLint，但处理大型代码库只需几秒钟（它甚至能在不到一秒的时间内处理完 Microsoft 的 VS Code 仓库）。

**长按识别二维码查看原文**   

https://socket.dev/blog/oxlint-now-in-beta-with-500-built-in-rules-2X-faster-javascript-linting

**📉 我们是如何让富文本编辑器加载更快的** —— CKEditor 是一个历史悠久、功能齐全的 GPL 和商业许可富文本编辑器，但其复杂性可能会影响性能。在这个两部分的系列文章中（第二部分在这里），CKEditor 团队详细介绍了他们最近如何显著提升其性能。

**长按识别二维码查看原文**   

https://ckeditor.com/blog/how-we-made-our-rich-text-editor-load-faster-part-1/

Szymon Cofalik (CKEditor)

**Next.js 对比 TanStack** —— 一篇尖锐的文章，作者表达了对 Next.js 方案的不满，转而在日益强大的 TanStack 工具集（以及 Vite）中找到了解决方案。

**长按识别二维码查看原文**   

https://www.kylegill.com/essays/next-vs-tanstack/

Kyle Gill

**快讯：**

-   这个自动更新的运行时兼容性表格可以让你查看不同的服务器端 JavaScript 运行时是否支持各种 API。
    
    **长按识别二维码查看原文**   
    
    https://runtime-compat.unjs.io/
    
-   💬 想和其他 Node.js 开发者在 Discord 上交流吗？现在有了官方 Node.js Discord 服务器。
    
    **长按识别二维码查看原文**   
    
    https://nodejs.org/en/blog/announcements/official-discord-launch-announcement
    
-   Node.js TSC 已投票决定在未来版本中停止分发 Corepack。Corepack 最初是作为管理其他包管理器的工具引入的。
    
    **长按识别二维码查看原文**   
    
    https://socket.dev/blog/node-js-tsc-votes-to-stop-distributing-corepack
    
-   🛠️ Make Bookmarklets 是一个很方便的工具，可以把 JavaScript 代码转换成可以直接在浏览器书签中使用的书签工具代码。
    
    **长按识别二维码查看原文**   
    
    https://make-bookmarklets.com/
    
      
    

📒 教程与趣事

**如何用 Docker 和 TensorFlow.js 构建贪吃蛇 AI 游戏** —— 你可能听说过有人用 LLM 来"氛围编程"游戏，但如果你想自己构建一个带有神经网络的游戏呢？TensorFlow.js 提供了一个解决方案，而且这个方案同样适用于非游戏场景。

**长按识别二维码查看原文**   

https://www.docker.com/blog/leveraging-docker-with-tensorflow/

Manvar 和 Raina (Docker)

**ESLint v9 迁移大冒险：开发者生存指南** —— "说实话……我经历了不少坑。走过了所有的弯路，总算是熬到了终点——这样你就不用重蹈覆辙了。"

**长按识别二维码查看原文**   

https://www.neoxs.me/blog/migration-to-eslint-v9

Yacine Kharoubi

**2025 年的 React 趋势** —— Robin 每年都会写一篇文章，预测他认为明年会出现的趋势。去年他看好 Astro、RSC、Vercel 和 Biome，今年他则指出了 React Server Components、`shadcn/ui`、TanStack Start、React Router 等技术。

**长按识别二维码查看原文**   

https://www.robinwieruch.de/react-trends/

Robin Wieruch

**用 TypeScript 和 Jupyter 构建自定义 RAG AI 代理** —— 这个教程将 Deno、Ollama 和几个不同的 AI 模型结合在一起，展示如何在向量存储中存储文档嵌入，并在基础代理中查询它们。

**长按识别二维码查看原文**   

https://deno.com/blog/build-custom-rag-ai-agent

Kitson Kelly

**📄 训练 AI 发现恶意 JavaScript 意图，让网络更安全** Cejuela 和 Zheng (Cloudflare)

**长按识别二维码查看原文**   

https://blog.cloudflare.com/how-we-train-ai-to-uncover-malicious-javascript-intent-and-make-web-surfing-safer/

**📄 使用 IntersectionObserver API 实现背景图片懒加载** Anna Monus

**长按识别二维码查看原文**   

https://www.debugbear.com/blog/lazy-load-background-images-intersection-observer

**📄 Web Components 与框架组件的区别** Gabriel Shoyombo

**长按识别二维码查看原文**   

https://www.smashingmagazine.com/2025/03/web-components-vs-framework-components/

**📄 用 JavaScript 检测浏览器缩放变化** Kirupa Chinnathambi

**长按识别二维码查看原文**   

https://www.kirupa.com/javascript/detecting\_browser\_zoom\_changes.htm

**📄 用原生 JS 和 CSS 制作浏览器游戏** Eoin McGrath

**长按识别二维码查看原文**   

https://www.sitepoint.com/browser-game-with-vanilla-js-and-css/

**📄 Deno 向我们展示了更好的方式** Mac Chaffee

**长按识别二维码查看原文**   

https://www.macchaffee.com/blog/2025/deno/

🛠 代码与工具

**Motion for Vue 发布** —— Motion 是一个流行且强大的动画库，之前主要与 React 关联，但现在推出了功能完整的 Vue 版本。

**长按识别二维码查看原文**   

https://motion.dev/blog/introducing-motion-for-vue

Matt Perry (Motion)

**Reveal.js v5.2：HTML 演示框架** —— 让任何使用网页浏览器的人都能制作优雅的演示文稿。v5.2 版本新增了"灯箱"触发功能，让观众能以更突出的方式查看图片和视频。

**长按识别二维码查看原文**   

https://revealjs.com/

Hakim El Hattab

**Konva：JavaScript 2D Canvas 库** —— Canvas 元素的原生 API 已经很不错了，但 Konva 提供了一个更好的抽象层，让你能以更结构化的方式处理图形、样式、事件和动画等（这里有很多带代码的示例）。它还为 Vue、Svelte 和 React 提供了额外的集成库。

**长按识别二维码查看原文**   

https://konvajs.org/

Konva

**Typist v8.0：基于 Tiptap 的富文本编辑器组件** —— 简单且有主见。你可以在侧边栏中尝试多个示例。非常适合编写评论或消息等基础富文本场景，还提供单行模式。GitHub 仓库。

**长按识别二维码查看原文**   

https://typist.doist.dev/?path=/docs/readme--docs

Doist

**PeanoScript：一个基于 TypeScript 的定理证明器** —— 这是一个基于 TypeScript 语法的实验性 皮亚诺算术 证明助手。

**长按识别二维码查看原文**   

https://peanoscript.mjgrzymek.com/tutorial

mjgrzymek

📢 其他

以下是来自开发者领域的一些有趣更新和实用资源：

-   John Tuckner 深入探讨了浏览器扩展买卖的灰色地带。
    
    **长按识别二维码查看原文**   
    
    https://secureannex.com/blog/buying-browser-extensions/
    
-   如果你正在使用 VS Code 和 GitHub Copilot，你知道你可以向 Copilot 询问 VS Code 的功能特性吗？
    
    **长按识别二维码查看原文**   
    
    https://devblogs.microsoft.com/visualstudio/find-the-ide-features-you-need-with-github-copilot-and-search/
    
-   想知道从零开始构建容器镜像需要做些什么吗？
    
    **长按识别二维码查看原文**   
    
    https://danishpraka.sh/posts/build-a-container-image-from-scratch/
    
-   来看看如何用 66 行 JavaScript 代码构建一个 Lisp 解释器。
    
    **长按识别二维码查看原文**   
    
    https://intercaetera.com/posts/lisp-in-js/
    
-   "作为一名工程师，我宁愿被说蠢也不愿保持沉默"。
    
    **长按识别二维码查看原文**   
    
    https://shiftmag.dev/asking-questions-engineering-career-advice-4895/
    
      
    

**版本发布：**

-   **Parcel v2.14.0** —— 零配置打包工具新增了用于搭建应用程序的命令行工具、一流的 MDX 支持，以及对 React Server Components 的 beta 支持。
    
-   **Ionic v8.5** —— 跨平台 JS 应用程序开发平台。
    
-   **📊 Billboard.js v3.15.0** —— 基于 D3 的 JS 图表库。
    
-   **React Router v7.4**
    
-   **Gridstack.js v11.5** —— 快速构建响应式交互式仪表板。
    
-   **Repomix v0.3** —— 将整个代码仓库打包成单个 AI 友好的文件。
    
-   **DOCX v9.3** —— 用 JavaScript 生成 .docx / Word 文件。
    
-   **🖼️ Parvus v3.0** —— 无依赖的图片灯箱控件。
    
-   **BlockNote v0.26** —— 类 Notion 的基于块的编辑器。
    
-   **🤖 wllama v2.3** —— `llama.cpp` 的 WebAssembly 绑定。
    
-   **Pixi.js v8.9** —— 快速、灵活的 2D WebGL 渲染器。
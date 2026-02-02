# React 中文周刊 #248 - React Conf 2025 即将来袭

> 原文链接: http://mp.weixin.qq.com/s?__biz=MzIzOTkwMjM0OQ==&mid=2247543911&idx=1&sn=8f588fc5251ffa83f55d8ab879facae5&chksm=e9216785de56ee93c0d433f8cc4f117d4203c86f7a9723599809f9abbc01d7a068c1e28ca17e#rd
> 抓取时间: 2026/2/2 23:41:36

---

> 本期看点：React Conf 2025 将于下周在内华达州举办并开放线上直播，迁移到 TanStack Start 的实践，如何把你的网站从 Next.js 迁移到 Astro，Jeasx：基于 JSX 的轻量级 SSR 框架。

> 编辑：TimLi

🔥 本周热门

**React Conf 2025 下周开幕，议程已公布** —— React Conf 2025 将于下周（10 月 7 日和 8 日）在内华达州举办，官方议程已经上线。现在已经不能再报名线下参会了，但你**可以**免费注册线上直播。今年的 React 大会肯定会有不少重磅内容，值得期待！

**长按识别二维码查看原文**   

https://conf.react.dev/agenda

React Conf

**2025 年 React 状态管理：你真正需要什么** —— 这是一篇很有观点的文章，聊了状态的作用、不同类型以及为什么你可能会选择各种方案中的某一个（作者本人其实挺喜欢 Zustand）。

**长按识别二维码查看原文**   

https://www.developerway.com/posts/react-state-management-2025

Nadia Makarevich

**▶  和 Ricky Hanlon 聊聊 React 的创新** —— React 核心团队成员 Ricky Hanlon 和 SolidJS 作者 Ryan Carniato 一起，聊了 Ryan 如何加入团队、React 团队的工作方式、`useEffect` 的优缺点等话题，后面还有长达数小时的现场开发和演示。视频总时长 6 小时，不过有时间戳，感兴趣的内容可以直接跳转。

**长按识别二维码查看原文**   

https://www.youtube.com/live/3vw6EAmruEU

Ryan Carniato (YouTube)

**迁移到 TanStack Start 的实践** —— Catalin 原本用 Hono、React 和 TanStack Router 搭了个站点，但想体验下 TanStack Start 带来的服务端渲染能力。这篇文章讲了他如何把基于 TanStack Router 的 SPA 迁移到 TanStack Start（v1 现在已经是 RC 阶段）。

**长按识别二维码查看原文**   

https://catalins.tech/migrating-to-tanstack-start/

Catalin Pit

**用 TanStack Table v8 打造完整交互式数据表格** —— 这里有最终效果的在线演示，可以直接体验。

**长按识别二维码查看原文**   

https://dev.to/abhirup99/tanstack-table-v8-complete-interactive-data-grid-demo-1eo0/

Abhirup Pal

**📄 如何把你的网站从 Next.js 迁移到 Astro** Lokman Musliu

**长按识别二维码查看原文**   

https://www.luckymedia.dev/blog/how-to-migrate-your-website-from-nextjs-to-astro

**📄 别再用 `.reverse().find()`，试试 `findLast()`** Matt Smith

**长按识别二维码查看原文**   

https://allthingssmitty.com/2025/09/22/stop-using-reverse-find-meet-findlast/

**📄 Hooks 原理揭秘：`useState` 的底层机制** Edaqa Mortoray

**长按识别二维码查看原文**   

https://medium.com/uncountable-engineering/react-hooks-demystified-the-mechanics-of-usestate-12ce9b925bbf

**快讯：**

-   最新的 State of JS 调查问卷 已经开放，欢迎参与。
    
    **长按识别二维码查看原文**   
    
    https://survey.devographics.com/en-US/survey/state-of-js/2025
    
-   如果你正考虑把 Vercel 托管的应用程序迁移到 Cloudflare Pages，可以参考这份官方指南，如果你更喜欢 Netlify，也有相应的迁移文档。Dan Abramov 在 bsky 上说，Next.js 16+ 的部署适配器会让这类迁移变得更简单。
    
    **长按识别二维码查看原文**   
    
    https://developers.cloudflare.com/pages/migrations/migrating-from-vercel/
    
-   Astro 5.14 发布，并且支持了 React 19 的 action state。
    
    **长按识别二维码查看原文**   
    
    https://astro.build/blog/astro-5140/
    
      
    

🛠  代码与工具

**Docusaurus v3.9：React 驱动的网站构建器** —— 这个流行的 React + MDX 静态站点生成器，v3.9 版本不再支持 Node.js 18，新增了 Algolia DocSearch v4、i18n 改进、Mermaid ELK 布局支持等，还有常规的 bug 修复。Docusaurus 的案例库展示了它在文档类网站上的强大能力。

**长按识别二维码查看原文**   

https://docusaurus.io/blog/releases/3.9

Sébastien Lorber / Meta

**Jeasx：基于 JSX 的轻量级 SSR 框架** —— 这是一个基于 JSX 和 Fastify 的服务端渲染框架，不依赖 React。如果你想继续用 JSX，但又想让服务端更轻量，可以试试。JSX 的底层实现用的是作者自己的 jsx-async-runtime 包。

**长按识别二维码查看原文**   

https://www.jeasx.dev/

Maik Jablonski

**🖋️ tldraw SDK 4.0：在 React 里造白板** —— tldraw SDK 是一个商业（有免费试用）的方案，可以在 React 应用程序里快速搭建“无限画布”类的白板应用程序。

**长按识别二维码查看原文**   

https://tldraw.dev/blog/tldraw-sdk-4-0

Steve Ruiz

**HN Term：在终端里刷 Hacker News** —— 这是一个用 React 和 OpenTUI 做的终端版 Hacker News 阅读器，支持键盘操作浏览新闻和评论。它是 Bun 驱动的 React 应用程序，一个很有意思的非 Web 场景案例。

**长按识别二维码查看原文**   

https://github.com/aotakeda/hn-term

Arthur Takeda

📢  其他 JS 新闻

这里还有一些最近 JavaScript 生态圈的有趣新闻，别错过：

-   Chrome 团队发布了 Chrome DevTools 的 MCP 服务器，让 AI 工具可以直接用 DevTools 做调试和性能分析。
    
    **长按识别二维码查看原文**   
    
    https://addyosmani.com/blog/devtools-mcp/
    
-   Electron 应用程序在最新 macOS 26（Tahoe）上被发现会导致全局卡顿，Electron 38.2、37.6 和 36.9.2 已经修复了这个因私有 API 引起的 bug。
    
    **长按识别二维码查看原文**   
    
    https://github.com/electron/electron/issues/48311
    
-   想把 Node 应用程序部署到 Cloudflare Workers？Cloudflare 花了一年时间提升 Node.js 兼容性，官方有详细介绍。
    
    **长按识别二维码查看原文**   
    
    https://blog.cloudflare.com/nodejs-workers-2025/
    
-   Dr. Axel Rauschmayer 分享了两种用 SVG 给 HTML 元素截图的方法，其中还包括了面向 JSX 的 Satori。
    
    **长按识别二维码查看原文**   
    
    https://2ality.com/2025/09/svg-screenshots.html
    
-   Deno 团队介绍了如何防止 npm 供应链攻击。
    
    **长按识别二维码查看原文**   
    
    https://deno.com/blog/deno-protects-npm-exploits
    
-   🕹️ 现在你甚至可以用 JavaScript 开发 PlayStation 2 游戏了！
    
    **长按识别二维码查看原文**   
    
    https://jslegenddev.substack.com/p/you-can-now-make-ps2-games-in-javascript
    
      
    

**版本发布：**

-   **🌐 react-i18next v16.0** —— React 和 React Native 的国际化方案，现在有了全新的 `i18next-cli` 工具。
    
-   **React Native URL Polyfill v3.0** —— 基于 WHATWG URL 标准的轻量级 React Native URL polyfill。
    
-   **React Scroll Parallax v3.5** —— 用于实现视差滚动效果的 Hooks 和组件，现在支持 React 19。
    
-   **State in URL v6.0** —— 把用户状态存到 URL 查询参数里 —— (GitHub 仓库)。
    
-   **react-multistep v6.1** —— 多步骤向导组件。在线演示。
    
-   **React Stripe.js v5.0** —— Stripe.js 和 Stripe Elements 的 React 组件。
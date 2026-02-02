# React 中文周刊 #231 - tscircuit：使用 React 设计电路板

> 原文链接: http://mp.weixin.qq.com/s?__biz=MzIzOTkwMjM0OQ==&mid=2247541611&idx=1&sn=198e9135b8430abb07cf3dcaf119d5b8&chksm=e9216889de56e19f4644d41c29b73e9fc31ded8df72174e3a45ae404aa2c5066af98d60329f6#rd
> 抓取时间: 2026/2/2 23:42:14

---

> 本期看点：tscircuit 使用 React 方法设计和布局电路板，Dan：静态即服务器，React Chrono：动态、交互式时间线组件，Vercel 推出一键式 AI 爬虫过滤器，Bippy：用于访问 React 内部机制的工具包。

> 编辑：TimLi

🔥 本周热门

**tscircuit：使用 React 构建电子项目** —— 这是一个有趣的尝试，使用基于 React 的方法来设计和布局电路板。我打赌 React 的创造者 Jordan Walke 当初也没想到会有这样的应用！GitHub 仓库。

**长按识别二维码查看原文**   

https://tscircuit.com/

tscircuit Inc.

**静态即服务器** —— 如果你曾经好奇所谓的"服务器"组件是如何以静态资产的形式发布的，Dan 在这篇文章中很好地解释了这个问题，并向你展示了如何在构建时预渲染它们，这样就可以免费从 CDN 提供所有内容。

**长按识别二维码查看原文**   

https://overreacted.io/static-as-a-server/

Dan Abramov

**▶ 使用 GitHub Copilot 的 Agent 模式构建天气应用程序** —— 虽然 Cursor 和 Windsurf 等工具可能获得了更多关注，但 VS Code 和 GitHub Copilot 的新"agent 模式"组合非常强大。Microsoft 的 Rob Lourens 和 GitHub 的 Cassidy Williams 用简短的 4 分钟视频展示了其潜力。

**长按识别二维码查看原文**   

https://www.youtube.com/watch?v=uG5Vcjr5vxQ

Visual Studio Code Team

**📄 不，React Context 并没有导致过多渲染** —— 作者试图反驳一个普遍的观点。David Johnston

**长按识别二维码查看原文**   

https://blacksheepcode.com/posts/no\_react\_context\_is\_not\_causing\_too\_many\_renders

**📄 React Query 中的并发乐观更新** Dominik Dorfmeister

**长按识别二维码查看原文**   

https://tkdodo.eu/blog/concurrent-optimistic-updates-in-react-query

**📄 React 中的依赖倒置：构建真正可测试的组件** Christian Ekrem

**长按识别二维码查看原文**   

https://cekrem.github.io/posts/dependency-inversion-in-react/

**📄 在 Clojure 中实现 React Server Components，第二部分** Roman Liutikov

**长按识别二维码查看原文**   

https://romanliutikov.com/blog/towards-react-server-components-in-clojure-part-2

**快讯：**

-   TanStack Query 的维护者发布了一个 RFC，计划将多个重叠的方法合并为两个：`query()` 和 `infiniteQuery()`，以使命令式数据获取更直观。
    
    **长按识别二维码查看原文**   
    
    https://github.com/TanStack/query/discussions/9135
    
-   🗣️ React subreddit 上的开发者们正在讨论 2025 年 React 的未来是否依然光明。
    
    **长按识别二维码查看原文**   
    
    https://www.reddit.com/r/reactjs/comments/1kir0pi/is\_the\_future\_of\_react\_still\_as\_bright\_in\_2025\_as/
    
-   eslint-plugin-react-you-might-not-need-an-effect 可能是本月最有趣的项目名称。这是一个用于检测不必要的 `useEffect` 使用的 ESLint 插件。
    
    **长按识别二维码查看原文**   
    
    https://github.com/NickvanDyke/eslint-plugin-react-you-might-not-need-an-effect
    
-   🤖 Vercel 为其托管的应用程序推出了一键式 AI 爬虫/抓取过滤器。
    
    **长按识别二维码查看原文**   
    
    https://vercel.com/changelog/new-one-click-ai-bot-managed-ruleset
    
      
    

🛠 代码与工具

**React Chrono v2.7：动态、交互式时间线组件** —— 支持水平、垂直和垂直交替时间线，具有键盘无障碍功能、嵌套时间线支持，还可以幻灯片形式自动播放时间线等功能。文档也很完善。v2.7 改进了搜索和动画功能。

**长按识别二维码查看原文**   

https://react-chrono.prabhumurthy.com/

Prabhu Murthy 等

**Bippy：用于访问 React 内部机制的工具包** —— Bippy 通过伪装成 React devtools 来访问各种内部功能，无需修改代码。它是 Aiden 开发的高级工具 React Scan 的一部分。

**长按识别二维码查看原文**   

https://www.bippy.dev/

Aiden Bai

**Basecoat：shadcn/ui 的魔力，但不依赖 React** —— shadcn/ui 是一套广受欢迎的精心设计的 React 组件，如果你想在其他场景中使用它们，Basecoat 就是为你准备的。Basecoat 将这些组件移植成更原生的形式，让你可以在其他地方使用。

**长按识别二维码查看原文**   

https://basecoatui.com/

Ronan Berder

📢 其他 JavaScript 相关内容

以下是 JavaScript 生态圈中一些你可能错过的有趣故事：

-   V8 团队介绍了显式资源管理，你可以使用 `using` 和 `await using` 来提供在资源超出作用域时自动调用的函数。
    
    **长按识别二维码查看原文**   
    
    https://v8.dev/features/explicit-resource-management
    
-   Parcel v2.15.0 发布，新增了用于 HTML 和 SVG 的转换器和压缩器，还支持将 SVG 转换为 JSX 以在 React 组件中使用。
    
    **长按识别二维码查看原文**   
    
    https://parceljs.org/blog/v2-15-0/
    
-   Brian Clark 分享了创建现代 npm 包的最佳实践。
    
    **长按识别二维码查看原文**   
    
    https://snyk.io/blog/best-practices-create-modern-npm-package/
    
-   PptxGenJS 是一个用代码创建 PowerPoint 演示文稿的 JavaScript 库。
    
    **长按识别二维码查看原文**   
    
    https://react.statuscode.com/link/169285/web
    
-   Matt Smith 提醒我们展开和剩余语法 `...` 的强大功能。
    
    **长按识别二维码查看原文**   
    
    https://allthingssmitty.com/2025/05/05/the-power-of-spread-and-rest-patterns-in-javascript.md/
    
-   Piny 是一个新的商业可视化编辑器，面向 Astro、React、Next.js 和 Tailwind 使用场景。
    
    **长按识别二维码查看原文**   
    
    https://getpiny.com/
    
      
    

**版本发布：**

-   **React Query Builder v8.7** —— 查询构建器组件。现在支持 Prisma、Sequelize 和 Drizzle 查询格式。
    
-   **React Native Tab View v4.1** —— 跨平台标签页视图组件。
    
-   **BlockNote v0.30** —— 类 Notion 的基于块的编辑器。
    
-   **MUI X v8.3** —— 流行的 React 组件套件。
    
-   **React Router v7.6**
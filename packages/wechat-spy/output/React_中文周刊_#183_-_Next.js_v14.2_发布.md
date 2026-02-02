# React 中文周刊 #183 - Next.js v14.2 发布

> 原文链接: http://mp.weixin.qq.com/s?__biz=MzIzOTkwMjM0OQ==&mid=2247530422&idx=1&sn=4ea8a36be512d4e5022097ef5edf8cfd&chksm=e9213c54de56b542932a37eafa21ce41eca7a5a28aa999811387549af2fbdfd355a3e452981f#rd
> 抓取时间: 2026/2/2 23:43:57

---

> 本期看点：随着八周年的临近，Next.js 已经拥有超过 100 万的月活跃开发人员，并且这个版本支持使用 Turbopack 来改善本地开发、内存使用、CSS 和缓存优化、改善错误消息等。Next.js v15 似乎也即将与 React v19 同步发布。

> 编辑：Yucohny、Zhper、TimLi

🔥 本周热门

**Wedges：面向 React 的 UI 组件集合** —— 由 Lemon Squeezy 的工作人员构建并使用，这是一个基于 Radix UI 和 Tailwind CSS 构建的全面且美观的组件集。你也可以下载 Figma 文件并在模拟布局时使用。这里是 GitHub  仓库。

**长按识别二维码查看原文**   

https://www.lemonsqueezy.com/wedges

Lemon Squeezy

**在 React 服务器组件中使用 CSS** —— 探索 React 服务器组件与 CSS-in-JS 库（如样式组件）之间的兼容性问题，包括你的一些选择和未来的发展方向。

**长按识别二维码查看原文**   

https://www.joshwcomeau.com/react/css-in-rsc/

Josh W Comeau

**Next.js v14.2 发布** —— 随着八周年的临近，Next.js 已经拥有超过 100 万的月活跃开发人员，并且这个版本支持使用 Turbopack 来改善本地开发、内存使用、CSS 和缓存优化、改善错误消息等。Next.js v15 似乎也即将与 React v19 同步发布。

**长按识别二维码查看原文**   

https://nextjs.org/blog/next-14-2

Delba de Oliveira 和 Tim Neutkens

**Qwik 对比 Next.js：谁更适合你的下一个 Web 项目？** —— 一次点对点的比较以及为什么作者认为 Qwik 更适合。

**长按识别二维码查看原文**   

https://outshift.cisco.com/blog/qwik-vs-nextjs

Samuel Mendenhall (Cisco)  

**为什么微软使用 React Native 进行跨平台开发**

**长按识别二维码查看原文**   

https://devclass.com/2024/04/11/react-native-and-why-microsoft-uses-it-for-its-own-cross-platform-development/

Tim Anderson

**大规模的 A/B 测试：我们如何使用 AWS** **Lambda@Edge** **设计解决方案**

**长按识别二维码查看原文**   

https://rahulsuresh.net/blog/ab-testing-millions-of-users-using-aws-lambda-edge

Rahul Suresh (Unacademy)  

**用于 Next.js 和 React Router 的声明式路由：DRY Routing**

**长按识别二维码查看原文**   

https://www.youtube.com/watch?v=MiZcNHJT\_Ss

Jack Herrington

**20 个快速的 Jotai 技巧**

**长按识别二维码查看原文**   

https://blog.axlight.com/posts/jotai-tips/

Daishi Kato

**快讯：**

-   对于 React 开发者来说 “更快的 JSX 元素创建速度” 即将到来。
    
    **长按识别二维码查看原文**   
    
    https://github.com/facebook/react/pull/28768
    
-   似乎 React v18.3 也即将到来，将作为 React v19 发布前的最终版本。
    
    **长按识别二维码查看原文**   
    
    https://github.com/facebook/react/pull/28843
    
-   尝试对 SSR 框架和方法进行基准测试，从普通的 React 到 Remix、Nuxt、Astro 和 Next.js。
    
    **长按识别二维码查看原文**   
    
    https://github.com/eknkc/ssr-benchmark
    
      
    

🛠  代码与工具

**React Query Builder v7.2** —— 一个完全可定制的查询语句构建器组件，附带用于从各种查询语言（如 SQL、MongoDB 等）导入和导出的实用函数。

**长按识别二维码查看原文**   

https://react-querybuilder.js.org/

Sapient Global Markets

**semantic-autocomplete: 一个快速的语义搜索组件** —— 一个结合了机器学习的搜索组件，你可以让用户通过语义进行搜索，而不仅仅是通过匹配字符。这里有一个在线演示。它在客户端使用了一个约 20MB 的机器学习模型（对于一般的模型来说很小）来快速工作。

**长按识别二维码查看原文**   

https://github.com/Mihaiii/semantic-autocomplete

Mihai Chirculescu  

**最新工具：**

⚙️ **react-qrcode-logo** – 渲染带有嵌入式 logo 的 QR 码。

**长按识别二维码查看原文**   

https://github.com/gcoro/react-qrcode-logo

Giulia Corò

⚙️ **Craft.js** – 一个用于构建拖放页面编辑器的 React 框架。

**长按识别二维码查看原文**   

https://craft.js.org/

Prev Wong

⚙️ **Kotekan** – 一个基于 Bun 并支持 React Server Component 的简单 React 框架。

**长按识别二维码查看原文**   

https://github.com/bndkt/kotekan

Benedikt Müller

⚙️ **react-native-collapsible-tab-view** – 一个跨平台的可折叠标签视图组件。

**长按识别二维码查看原文**   

https://github.com/PedroBern/react-native-collapsible-tab-view

Pedro Bern  

**版本发布：**

-   **Tremor v3.16** – 用于快速构建仪表板的 React 库。此版本增加了对漏斗图的支持。
    
-   **React Date Picker v6.8** – 简单的日期选择器组件。(演示.)
    
-   **TanStack Table v8.16** – 用于构建表格和数据网格的无头 UI。
    
-   **React Icons v5.1** – 可直接在 React 中使用的流行图标包。
    
-   **Mantine v7.8** – 流行的 React 组件库。
    
-   **react-devtools v5.1**
    
-   **react-devtools-inline v5.1**
    

🙋🏻‍♀️
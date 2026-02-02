# JavaScript 中文周刊 #68 - 如何优化 INP 指标，提升用户体验

> 原文链接: http://mp.weixin.qq.com/s?__biz=MzIzOTkwMjM0OQ==&mid=2247514277&idx=1&sn=1da2e3c6f695e76a6a8f1eea7505f4b3&chksm=e921f347de567a51ab72b80d90530ccb5cbade0ea695a5010b3929c7e1f1835ef4a3358ce03f#rd
> 抓取时间: 2026/2/2 23:52:34

---

> 本期看点：上周，SvelteKit v1.0 发布、Dr. Axel 提出两个提案：Iterator Helpers 和 Set Methods、jQuery v3.6.2 发布.....更多热门文章资讯请点击本期周刊查看！

> 编辑：liu-jin-yi、Levi、TimLi777

## 🔥 本周热门

**SvelteKit v1.0 发布** — **Svelte** 是一个无虚拟 DOM、提前编译的前端 UI 框架，拥有众多的使用者。SvelteKit 是主要围绕 Svelte 以构建完整的 WebApp 的脚手架。这篇发布文章解释了它的一些方法以及它与其他系统的不同之处。

**长按识别二维码查看原文**   

https://svelte.dev/blog/announcing-sveltekit-1.0

The Svelte Team

**Dr. Axel 提出两个提案：Iterator Helpers 和 Set Methods** — 本篇文章所讲的内容值得你去研究! Dr. Axel 提出了两个具有前瞻性的 ECMAScript 提案，并在本文中介绍了它们，以及解释了为什么它们会对 JavaScript 开发者有用的原因。第一个提案是关于 **iterator helpers** （用于处理可迭代数据的新的实用方法），第二个提案是关于 **Set methods**，它扩展了 ES6 的 Set 对象。

**长按识别二维码查看原文**   

https://2ality.com/2022/12/iterator-helpers.html

Dr. Axel Rauschmayer

**🏆**  [**2022 年最佳 Node 周刊**](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzIzOTkwMjM0OQ==&action=getalbum&album_id=2006473001705308164&scene=173&subscene=&sessionid=0&enterid=1642429142&from_msgid=2247499624&from_itemidx=1&count=3&nolastread=1#wechat_redirect) — 在本周的《Node Weekly》中，我们回顾了今年最受欢迎的项目，包括 Tao of Node，一系列的 **JavaScript 测试最佳实践**，以及 **2022 年****最受欢迎的 Node.js 框架**。

**长按识别二维码查看原文**   

https://mp.weixin.qq.com/mp/appmsgalbum?\_\_biz=MzIzOTkwMjM0OQ==&action=getalbum&album\_id=2006473001705308164&scene=173&subscene=&sessionid=0&enterid=1642429142&from\_msgid=2247499624&from\_itemidx=1&count=3&nolastread=1#wechat\_redirect

Node Weekly Newsletter

**jQuery v3.6.2 发布** — 你可能不再使用 jQuery 了，但它（仍然）是部署最广泛的 JavaScript 库，看到它被维护真是太棒了。

**长按识别二维码查看原文**   

https://blog.jquery.com/2022/12/13/jquery-3-6-2-released/

jQuery Foundation

**快讯：**

-   **Node v19.3.0 (Current)** 已经发布，`npm` 更新到 v9.2. 对 v9.x 的重大修改保证了这个 **更新**，发布文章解释了当前 npm 在 Node 中持续包含的策略。
    
    **长按识别二维码查看原文**   
    
    https://nodejs.org/en/blog/release/v19.3.0/  
    
-   ƛ Glasgow Haskell 编译器 (GHC) **获得了一个新的 JavaScript 后端**， 这意味着引用 Haskell 编译器现在可以发出 JavaScript，并且更容易用于构建前端应用程序。
    
    **长按识别二维码查看原文**   
    
    https://engineering.iog.io/2022-12-13-ghc-js-backend-merged/  
    
-   GitHub **正在向所有公共仓库免费推出秘钥泄漏扫描**。
    
    **长按识别二维码查看原文**   
    
    https://github.blog/2022-12-15-leaked-a-secret-check-your-github-alerts-for-free/  
    
-   _New Stack_ **回顾了 2022 年作为 JavaScript 的 "黄金年 "**以及我们所看到的一些发展。我们将在下一期中做我们自己的此类综述。
    
    **长按识别二维码查看原文**   
    
    https://thenewstack.io/2022-a-golden-year-as-javascript-moves-to-the-edge/  
    

**版本发布：**

-   **Chart.js v4**  
    ↳ 基于 Canvas 的图表库。(**示例**)
    
-   **PouchDB v8.0**  
    ↳ 受 CouchDB 启发的同步数据库。
    
-   **PortalVue v3.0**  
    ↳ 用于 Vue 3 的功能丰富的门户插件。
    
-   **Kea v3.1**  
    ↳ 用于 React 的可组合的状态管理。
    
-   **jest-puppeteer v6.2**  
    ↳ 使用 Jest + Puppeteer 运行测试。
    
-   **NodeBB v2.7**  
    ↳ 基于 Node.js 的论坛软件。
    
-   **Pino v8.8**  
    ↳ 快速的面向 JSON 的记录器。
    
-   **SWR v2.0**  
    ↳ React 的数据获取库。
    

## 📒  教程与趣事

**为什么 Cypress v12 很重要** — 用案例介绍了**Cypress**新版本的新特性，包含自动重试查询指令机制、自定义指令，这次更新让测试代码更可读。

**长按识别二维码查看原文**   

https://glebbahmutov.com/blog/cypress-v12/

Gleb Bahmutov

**构建同构 JS 库的五个挑战** — 在 JS 中，同构的意思就是在服务端和浏览器端通过最少的适配使用相同的代码。

**长按识别二维码查看原文**   

https://doordash.engineering/2022/12/06/five-challenges-to-building-an-isomorphic-javascript-library/

Nick Fahrenkrog (Doordash)

**Next, Nest, Nuxt… Nust?** — \*“这篇博客文章是为在寻找新的 JavaScript 后端框架的人准备的。”\*如果这些框架的名字你分不清，那么这篇文章就是为你准备的。Marius 解释了 Next 和 Gatsby 等系统做了什么，并触及了一些不同之处。

**长按识别二维码查看原文**   

https://www.twilio.com/blog/comparing-nextjs-nestjs-nuxt-gatsby

Marius Obert (Twilio)

**使用 Turf.js 计算给定的 GeoJSON 特征集合中的最大对角线距离** — 很酷. 顺便说一下，**Turf.js** 是一个地理空间分析库。

**长按识别二维码查看原文**   

https://piotrjaworski.medium.com/calculating-the-maximum-diagonal-distance-in-a-given-collection-of-geojson-features-using-turf-js-ff1a2654c7e7

Piotr Jaworski

**优化 INP 指标，提升用户体验** — 文章仔细介绍了INP指标，如何计算以及如何优化。INP 指标 -—  从用户交互到页面渲染下一帧的时间差，越短越好。

**长按识别二维码查看原文**   

https://web.dev/optimize-inp/

Jeremy Wagner & Philip Walton (Google)

**我们是如何为 Mono****repo 项目配置 pnpm** **和 Turborepo 的？**

**长按识别二维码查看原文**   

https://nhost.io/blog/how-we-configured-pnpm-and-turborepo-for-our-monorepo

Pierre-Louis Mercereau (NHost)  

**用 Svelte 渲染电****子邮****件**

**长按识别二维码查看原文**   

https://escape.tech/blog/sveltemails/

Gautier Ben Aim  

## 🛠  代码与工具

**Wretch v2.3：\`fetch\` 的包装器，具有更直观的语法** — 一个成熟的库，使用流畅的 API 扩展了 fetch 的功能。可以查看 示例

**长按识别二维码查看原文**   

https://github.com/elbywan/wretch

Julien Elbaz

**SWR v2.0：改进的 React Hooks 用于数据获取** — SWR（Stale-While-Revalidate）的第二个主要版本包括新的 mutation API、新的开发者工具，以及对并发渲染的进一步支持。

**长按识别二维码查看原文**   

https://swr.vercel.app/blog/swr-v2

Ding, Liu, Kobayashi, and Xu

**vanilla-tilt.js v1.8：一个平滑的 3D 倾斜效果库** — 一个无依赖且易于使用和定制的效果库。**GitHub  仓库**

**长按识别二维码查看原文**   

https://micku7zu.github.io/vanilla-tilt.js/

Șandor Sergiu

**visx：Airbnb 的底层可视化 React 组件** — 由 Airbnb 开发的可以插入任何 React 设置的库。可以使用自己的状态管理、动画库或 CSS-in-JS。**示例**

**长按识别二维码查看原文**   

https://airbnb.io/visx/

Airbnb

**Scene.js v1.7：一个基于 CSS 时间轴的动画库** — 在官网上有许多**示****例**。有 React、Vue 和 Svelte 的相应组件。

**长按识别二维码查看原文**   

https://github.com/daybrush/scenejs

Daybrush

🎁  一个有趣的工具

Snow.js：给你的网页添加下雪效果 — 又到了每年的这个时候 🎄，如果您对效果是如何制作的感兴趣，它是受到这个 **CodePen 示例**的启发而制作的，基于一些复杂的 CSS。

**长按识别二维码查看原文**   

https://embed.im/snow/

如果你想玩点花的，你可以在网站上放上这个 **Fart.js** 🙈

**长按识别二维码查看原文**   

https://fartjs.com/

祝大家圣诞快乐!

## 🙋🏻‍♀️
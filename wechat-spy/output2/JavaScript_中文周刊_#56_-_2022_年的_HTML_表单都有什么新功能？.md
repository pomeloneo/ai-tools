# JavaScript 中文周刊 #56 - 2022 年的 HTML 表单都有什么新功能？

> 原文链接: http://mp.weixin.qq.com/s?__biz=MzIzOTkwMjM0OQ==&mid=2247510688&idx=1&sn=0140483f2b77d563c49cba765358baeb&chksm=e921e142de5668545eeeb3392c5422bb6bd658b5673c2b0cc7f8835bfa818a73a5642828b2dd#rd
> 抓取时间: 2026/2/2 23:52:49

---

> 本期看点：本期为大家带来了使用多窗口 WebGL Canvas 的秘诀与一个被低估的 React Hook —— useSyncExternalStore 等优秀文章。点击本期周刊查看更多精彩文章！

> 编辑：liu-jin-yi、Yucohny、Levi

## 🔥 本周热门

**MemLab：查找 JavaScript 内存泄漏的框架** — Facebook 一直在使用 MemLab 对其主要 SPA 应用的内存使用情况进行内存泄漏排查。现在他们已经将这个工具 **开源** （该工具使用 TypeScript 编写）。

**长按识别二维码查看原文**   

https://engineering.fb.com/2022/09/12/open-source/memlab/

Liang Gong and Glenn Conner（Meta）

💡 Nolan Lawson 的 **Fuite** 是一个更加小巧的查找内存泄漏的库。

**长按识别二维码查看原文**   

https://nolanlawson.com/2021/12/17/introducing-fuite-a-tool-for-finding-memory-leaks-in-web-apps/

**你不知道的 JavaScript APIs** — 这是一篇很好的概括文章，可以让你了解网络平台提供的内容。涵盖的 API 包括Page Visibility，Web Sharing，和 Broadcast Channel。

**长按识别二维码查看原文**   

https://www.smashingmagazine.com/2022/09/javascript-api-guide/

Smashing Magazine

**快讯：**

-   Safari 16.0 已经发布，**支持了一些新的功能** 和对 Web 的功能（**passkeys,** Web Inspector Extensions, container queries, **Shared Workers** 等等）。
    
    **长按识别二维码查看原文**   
    
    https://webkit.org/blog/13152/webkit-features-in-safari-16-0/  
    
-   Node.js 将于 9 月 22 日在所有受支持的线路上发布一些 **安全版****本**。
    
    **长按识别二维码查看原文**   
    
    https://nodejs.org/en/blog/vulnerability/september-2022-security-releases/  
    
-   📅 **Nodeconf EU 202****2**将于 10 月 3 日至 5 日在爱尔兰举行。
    
    **长按识别二维码查看原文**   
    
    https://www.nodeconf.eu/  
    

**版本发布：**

-   **Spacetime v7.2** – 轻量级时区库。
    
-   **React Router v6.4**  
    ↳ 现在具有向后移植的 Remix 功能。
    
-   **Fastify v4.6**  
    ↳ 用于 Node.js 的快速、低开销的 Web 框架。
    
-   **Preact v10.11**  
    ↳ 3KB 使用相同 API 的 React 替代方案。
    
-   **Cypress v10.8**  
    ↳ 在浏览器中轻松测试一切。
    
-   **React Grid Gallery v1.0**  
    ↳ 合理的图像库组件。
    
-   **sablejs v1.1**  
    ↳ ES5.1 解释器使用纯 JS 编写。
    
-   **Crunker v2.0**  
    ↳ 使用 Web 音频 API 连接音频文件。
    
-   **ka-table v7.6**  
    ↳ 对表组件进行排序、过滤等处理。
    
-   **d3-graphviz v4.4**  
    ↳ Graphviz DOT 渲染和动画转换。
    

## 📒  教程与趣事

**不通过括号调用函数的第七种方式** — 如果惊讶于居然有六种方式可以不通过括号来调用函数，那么这篇文章值得你一看。这些几乎都是小技巧，但是他们可以帮助你更好地理解用户提供的代码和处理代码的安全性。

**长按识别二维码查看原文**   

https://portswigger.net/research/the-seventh-way-to-call-a-javascript-function-without-parentheses

Gareth Heyes

**2022 年的 HTML 表单都有什么新功能？** — 这篇文章可能提到了一些你或许错过的有关表单控件的有用更新。

**长按识别二维码查看原文**   

https://css-tricks.com/whats-new-with-forms-in-2022/

Ollie Williams

**使用多窗口 WebGL Canvas 的秘诀** — 这是技术性的探索，尽管我们大多数人不需要深入挖掘，但是或许还是值得关注：我们可以使用离屏画布与单独的工作上下文进行渲染，然后在其他选项卡或窗口中使用这些内容。

**长按识别二维码查看原文**   

https://itnext.io/the-secret-of-successfully-using-multi-window-webgl-canvas-5a2d05555ad1?gi=8c20cafd97b4

Tobias Uhlig

**为什么说 Input 控件使用 \`type="number"\` 是最差的做法** — 如果你使用的 Input 控件设置了 `type=”number”`，那么当你认为浏览器表单已经获取到了你输入的数字时，有时候你会发现实际上并没有获得。

**长按识别二维码查看原文**   

https://stackoverflow.blog/2022/09/15/why-the-number-input-is-the-worst-input/

Jared Toporek

**一个被低估的 React Hook —— useSyncExternalStore** — 这是一个用于订阅外部数据源的 Hook，但你不知道的是它也可以用来阻止 **过度回收** React hooks 触发不必要的重渲染。

**长按识别二维码查看原文**   

https://thisweekinreact.com/articles/useSyncExternalStore-the-underrated-react-api

Sébastien Lorber

**在 JavaScript 中****按条****件扩展****对象**

**长按识别二维码查看原文**   

https://www.amitmerchant.com/conditionally-spreading-objects-in-javascript/

Amit Merchant

**使用 We****b Workers 在 JavaSc****ript 中进行****多线程处理**

**长按识别二维码查看原文**   

https://www.honeybadger.io/blog/javascript-web-workers-multithreading/

Badmus Kola beginner

**JavaScript 中数字****小数位处理指南**

**长按识别二维码查看原文**   

https://www.sitepoint.com/rounding-numbers-javascript/

Darren Jones beginner

## 🛠  代码与工具

**npm-check-updates：将 \`package.json\` 依赖更新到最新版本** — 你如果不想要使用某个指定的版本，一个特别简洁的解决方式是添加 `-i` 参数进入交互模式，从而查看潜在的升级，然后逐个操作它们。

**长按识别二维码查看原文**   

https://github.com/raineorshine/npm-check-updates

Raine Revere

**SafeQL：用于 SQL 查询的 ESLint 插件** — SafeQL 可以检查 JavaScript 代码中编写 SQL 查询时可能犯的错误，但是目前仅支持 Postgres。它也可以支持支持任何客户端，例如：Prisma、pg、Sequelize 。

**长按识别二维码查看原文**   

https://safeql.dev/

ts-safeql

**Theatre.js v0.5：为 Web 提供可拆解的动作设计** — 如果你最近正在关注为使用 Three.js、React Three Fiber、HTML/SVG 等创建的 3D 对象，那么 Theatre.js 可以同时以编程方式和视觉方式设置动画与“动画”变量值。v0.5 版本引入了 3D 场景编辑和复杂的关键帧。这里是官方 **文档** 与 **GitHub 仓库**。

**长按识别二维码查看原文**   

https://www.theatrejs.com/blog/theatre-05-is-out

Theatre.js Project

🕹 **Infernal Throne** 是一款为 **js13kGames** **JavaScrip**t 编码竞赛编写的 Metroidvania 风格的小游戏。**源代****码在这里**。

**长按识别二维码查看原文**   

https://arineonshark.itch.io/infernal-throne

在 13 KB 内交付 _Infernal Throne_ 的一个关键部分是使用 **Roa****droller**，这是我们一年前链接到的工具，专门用于压缩 JavaScript 代码使其尽可能小（以至于几乎完全不可读）。

## 🙋🏻‍♀️
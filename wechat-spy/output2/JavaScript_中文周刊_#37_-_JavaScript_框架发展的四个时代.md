# JavaScript 中文周刊 #37 - JavaScript 框架发展的四个时代

> 原文链接: http://mp.weixin.qq.com/s?__biz=MzIzOTkwMjM0OQ==&mid=2247505441&idx=1&sn=c5590af4f3a6b763da34e32d6e9cc9ce&chksm=e9219dc3de5614d503e58a6da8e08e010b5e8606d795d0c7eaa3f0ad62def6ab22bf65348712#rd
> 抓取时间: 2026/2/2 23:53:14

---

> 本期看点：本期为大家带来了如何利用 Webpack 将启动时间减少 80% 与使用 Lit.js 构建一个轻量级的 Web Component 等优秀文章。点击本期周刊查看更多精彩文章！

> 编辑：liu-jin-yi、Levi、Black-Hole

## 🔥 本周热门

**JavaScript 框架发展的四个时代** — 虽然本文作者的工作经历导致他对 2012 年以前的 JS 历史不是很清楚，但并不影响本篇文章的质量，作者试图将 JavaScript 框架的历史分解成四个时代，每个时代都建立在之前的基础上。感兴趣的同学可以点击查看。

**长按识别二维码查看原文**   

https://www.pzuraq.com/blog/four-eras-of-javascript-frameworks

Chris Garrett

**从头开始构建 JavaScript 打包程序** —本文作者以编写了一篇 **构建 JavaScript 测试框架** 而闻名。而本篇文章该作者将会代领我们进入下一个步骤，如何构建 JS 的打包程序。**直播录屏**。

**长按识别二维码查看原文**   

https://cpojer.net/posts/building-a-javascript-bundler

Christoph Nakazawa

**Jest v28：使 JS 测试变得更轻、更快、更高效** — **Jest**是最流行的 JS 测试框架之一，v28 版本包含了很多内容：跨多台机器的分片测试，GitHub 行为报告，改进对带有出口的包入口点的支持，等等。

**长按识别二维码查看原文**   

https://jestjs.io/blog/2022/04/25/jest-28

Simen Bekkhus

**快讯：**

-   **Node v16.15.0（LTS）** 发布，**Node 18 也发布了的实验性 Fetch API**。
    
    **长按识别二维码查看原文**   
    
    https://www.stefanjudis.com/notes/global-fetch-landed-in-node-18/  
    
-   **一段 5 分钟的视频**， Beth Griggs 和 Michael Dawson 解释了 Node 18 的发布过程和发布的主要功能。
    
    **长按识别二维码查看原文**   
    
    https://www.youtube.com/watch?v=RSGNzEOk6bA  
    
-   **有人在 Hacker News 提问**，为什么 npm 生态系统似乎比 PHP 更容易受到供应链攻击。
    
    **长按识别二维码查看原文**   
    
    https://news.ycombinator.com/item?id=31152148  
    
-   你知道 JavaScript 的一些用于生成 HTML 的 **传统字符串方法**吗？`"text".link(url)` 是一个相当整洁的方法。
    
    **长按识别二维码查看原文**   
    
    https://davidwalsh.name/legacy-string-methods  
    
-   这是一个只有 256 字节 **Jav****aScript 的 精彩视觉演示**，这个链接介绍了它的 **运行原理**。
    
    **长按识别二维码查看原文**   
    
    https://twitter.com/KilledByAPixel/status/1517294627996545024  
    

**版本发布：**

**React v18.1** – 错误修复版本。  
**Figma Plugin for Storybook** –现在 GA。  
**RxDB v12.0** – 离线优先，反应式数据库系统。  
**Postgres.js v3.1** – 高性能 PostgreSQL 客户端库。  
**Faker.js v6.2.0** – 假数据生成器。

## 📒  教程与趣事

**如何利用 Webpack 将启动时间减少 80%？** — 该项目团队是从一个低效率的起点开始的，比如在生产中使用 ts-node。最终他们减少了 80% 启动时间，并编写了本篇文章，这个文章中包含了一些可以学习的的经验和发现。

**长按识别二维码查看原文**   

https://www.rudderstack.com/blog/how-we-reduced-startup-time-by-80-with-webpack/

Aris Konstantoulas

**▶  与 Matt Pocock 讨论 TypeScript 技巧和窍门** — Matt 是一位乐于分享 TypeScript 的博主。最近他与 Burke Holland 一起在 VS Code YouTube 频道上进行分享，如果你是 TypeScript 用户，将会会学到一些知识点。

**长按识别二维码查看原文**   

https://www.youtube.com/watch?v=hBk4nV7q6-w 

Burke Holland

**Node 18 的 'Prefix-Only' 核心模块解剖** — 将介绍一种新型的核心模块，它不能像其他模块那样导入。例如：`import test from 'node:test'`。

**长按识别二维码查看原文**   

https://fusebit.io/blog/node-18-prefix-only-modules/

Colin Ihrig

**使用 JavaScriptEngineSwitcher 在 .NET 应用程序中运行 Jav****aScript**

**长按识别二维码查看原文**   

https://andrewlock.net/running-javascript-in-a-dotnet-app-with-javascriptengineswitcher/

Andrew Lock

**使用 TypeScript 升级到 React 18**

**长按识别二维码查看原文**   

https://blog.logrocket.com/upgrading-react-18-typescript/

John Reilly

**使用 Lit.js 构建一个轻量级的 Web Com****ponent**

**长按识别二维码查看原文**   

https://blog.openreplay.com/build-a-lightweight-web-component-with-lit-js/

Clara Ekekenta

**如何使用 SvelteKit 的** **Serverless Cloud**

**长按识别二维码查看原文**   

https://www.serverless.com/blog/how-to-use-serverless-cloud-with-sveltekit

Doug Moscrop

## 🛠  代码与工具

**Remotion v3.0：在 React 中利用代码创建视频** — 你可以通过在 React 中使用 Remotion 编写代码来创建你想要的视频，**Remotion** 会帮助你处理视频的编码和渲染。**这个视频由** Remotion 生成，展示了基于 AWS Lambda 的全新无服务器渲染机制的优势。

**长按识别二维码查看原文**   

https://www.remotion.dev/blog/3-0

Jonny Burger（Remotion）

**Frappe Gantt：开源的 JavaScript 甘特图组件** — 甘特图常用于项目管理中，用于在时间线上显示进度和活动之间的联系。官网页面上有一个示例 **代码仓库**

**长按识别二维码查看原文**   

https://frappe.io/gantt

Frappe

**htmlparser2 8.0：快速且高容错的 HTML 和 XML 解析器** — 通过回调函数解析内容，同样也可以生成 DOM。在 Node 和浏览器中都可以用 **示例**

**长按识别二维码查看原文**   

https://github.com/fb55/htmlparser2

Felix Böhm

**FortuneSheet：类似 Excel 的 JavaScript 电子表格组件** — 这个项目还处在早期阶段，不过很有前景。**在线示例**

**长按识别二维码查看原文**   

https://github.com/ruilisi/fortune-sheet

Suzhou Ruilisi Technology Co., Ltd

**React Responsive Pagination：智能分页组件** — 一个响应式的 React 分页组件，它会自动适应可用宽度。**在线示例**

**长按识别二维码查看原文**   

https://github.com/jonelantha/react-responsive-pagination

Jon Elantha

**Emoji Mart v5.0：可定制的 Emoji 选择器** — **在线示例**。

**长按识别二维码查看原文**   

https://github.com/missive/emoji-mart 

Missive

**Peaks v2.0：与音****频波形交互的 UI 组件**

**长按识别二维码查看原文**   

https://github.com/bbc/peaks.js

BBC

## 🙋🏻‍♀️
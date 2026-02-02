# Node 中文周刊 #8 - TypeScript v4.5 Beta 版发布

> 原文链接: http://mp.weixin.qq.com/s?__biz=MzIzOTkwMjM0OQ==&mid=2247493574&idx=1&sn=a5cbcf3a1707fcb0f198d4e2b3f0d818&chksm=e921ac24de5625326b8efd4477b0fe565a81998f4c96b87124ffffbd00a923fb4ef964c31d51#rd
> 抓取时间: 2026/2/2 23:55:12

---

> 本期看点：本周 TypeScript v4.5 Beta 版已经发布，对于编写 Node 的同学是一大福音，因为这个版本的 TS 中终于支持了 Node 对 ES 模块的支持。同时 Node 也于今日发布了安全补丁，主要修复了 16.x、14.x、12.x 中的问题。

> 编辑：gaao、liu-jin-yi、QC-L

## 🔥 本周热门

**基于 BASIC 原则编写简洁的 JavaScript 测试** — 介绍如何用几个关键原则来减少、清理和简化基于 JavaScript 和 Node.js 的测试套件。

**长按识别二维码查看原文**   

https://yonigoldberg.medium.com/fighting-javascript-tests-complexity-with-the-basic-principles-87b7622eac9a

Yoni Goldberg

**Eleventy v1.0 Beta 发布** — Eleventy（又名 11ty）是一个非常火的由 Node 驱动的静态站点生成器，最初是作为 Jekyll 的替代品来创建的。

**长按识别二维码查看原文**   

https://www.11ty.dev/blog/eleventy-v1-beta/

Eleventy Team

**无处不在的 Web 流（以及用于 Node.js 的 Fetch）** — 一起来看看大部分 JavaScript 平台（包括浏览器）是如何支持以流的方式创建、组合和使用数据流的，同时将现代 Web Streams API 与 Node 的流实现做对比，如何进行互操作。

**长按识别二维码查看原文**   

https://css-tricks.com/web-streams-everywhere-and-fetch-for-node-js/

Ollie Williams

❓ **HN 上的提问：为什么 Node.js 这么“讨厌”？** — 这个问题在 Hacker News 上引发了相当多的讨论，到目前为止已有 120+ 条评论 —— 其中大部分是公平的，而有些则不是。C++ 的作者曾说过：_“世界上只有两种语言：人们抱怨的和没人使用的。”_

**长按识别二维码查看原文**   

https://news.ycombinator.com/item?id=28728591

Hacker News

**快讯：**

-   为了解决两个 “中等严重” 的安全问题 Node.js 将于在今日发布安全补丁。修复了 Node.js 的 16.x、14.x、12.x 中的问题。
    

**长按识别二维码查看原文**   

https://nodejs.org/en/blog/vulnerability/oct-2021-security-releases/

-   TypeScript v4.5 Beta 版发布。其中重大的更新新增了 Node 对 ES 模块的支持。
    

**长按识别二维码查看原文**   

https://devblogs.microsoft.com/typescript/announcing-typescript-4-5-beta/

-   Red Hat 的 Node 社区动态 视频系列最新一期中，Michael Dawson 和 Stewart Addison 讨论了围绕 ARM 构建和测试改进流程的工作。
    

**长按识别二维码查看原文**   

https://www.youtube.com/watch?v=6KPM1mHwXhA

**使用 APNs 实现 iOS 推送信息** — 如果你有通过 APNs 向 iOS 推送信息的需求。这里刚好有一个关于如何在 Node 环境中向 iOS 推送信息的示例供你参考。

**长按识别二维码查看原文**   

https://blog.engineyard.com/ios-push-notifications-via-apns

Ritu Chaturvedi

▶ **13 个使用 Git 的高级技巧。**

**长按识别二维码查看原文**   

https://www.youtube.com/watch?v=ecK3EnyGD8o

Fireship

**通过多种方法实现无对象多态性。**

**长按识别二维码查看原文**   

https://blog.klipse.tech/javascript/2021/10/02/multimethod.html

Yehonathan Sharvit

## 🛠 代码与工具

  

**construct-js：用于创建字节级数据结构的库** — 如果你需要操作 bits 和 bytes 来构建数据，那么此库一定适合你，此处为 创建 .zip 文件的示例。

**长按识别二维码查看原文**   

https://github.com/francisrstokes/construct-js

Frank Stokes

**Leveldown：纯 C++ 的 Node.js 的 LevelDB 绑定** — LevelDB 是由 Google 编写的一个快速键值存储库，通常在其他数据库系统（例如 Indexed DB 或 Riak ）中作为基础库使用。

**长按识别二维码查看原文**   

https://github.com/Level/leveldown

Level

**Trash 8.0：将文件和目录移动到“垃圾桶”** — 可在 Windows、Linux 和 macOS 上使用，这不是直接删除文件（如 `unlink`），而是将它们移到垃圾桶。这是个纯 ESM 包。

**长按识别二维码查看原文**   

https://github.com/sindresorhus/trash

Sindre Sorhus

**kill-port：清除运行在指定端口上的进程** — 例如，你可以用 `npx kill-port 3000` 来清除监听端口 3000 的本地进程。对于 Unix 和 macOS 来说，基本是在后台进行 `lsof` 和 `kill`，并且支持 Windows。

**长按识别二维码查看原文**   

https://github.com/tiaanduplessis/kill-port

Tiaan

**actions/github-script：用 JavaScript 编写 GitHub API 的工作流。**

**长按识别二维码查看原文**   

https://github.com/actions/github-script

GitHub Actions

**emoji-regex：匹配所有仅有表情符号的正则表达式。**

**长按识别二维码查看原文**   

https://github.com/mathiasbynens/emoji-regex

Mathias Bynens

**linq.js 4.0：一种用于 JavaScript 的 LINQ 实现。**

**长按识别二维码查看原文**   

https://github.com/mihaifm/linq

Mihai Ciuraru

**fast-check：用 TypeScript 编写的基于属性的测试框架。**

**长按识别二维码查看原文**   

https://github.com/dubzzz/fast-check

Nicolas DUBIEN

**Percolate：将网页转成 PDF 的 CLI 工具。**

**长按识别二维码查看原文**   

https://github.com/danburzo/percollate

Dan Burzo

## 🙋🏻‍♀️
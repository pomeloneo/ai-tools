# Node 中文周刊 #6 - 剖析 Node.js 如何进行垃圾回收

> 原文链接: http://mp.weixin.qq.com/s?__biz=MzIzOTkwMjM0OQ==&mid=2247492909&idx=1&sn=5654519241396119f7b777eacfbfebf3&chksm=e921aecfde5627d98ff44c9d52b6af014876ab6622cf9f2bdbc2407b45ade6b466feef4bdfe2#rd
> 抓取时间: 2026/2/2 23:55:14

---

> 本期热点：剖析 Node.js 如何进行垃圾回收，文章虽然有些久远，但依旧不过时。Node v16.10 发布，小细节更新，变化不大。Electron 发布了 v15 的版本，升级部分依赖，紧跟 Chrome 的脚本，非常赞！
> 
> 编辑：Otto、liu-jin-yi

## 🔥 本周热门

**如何通过寻找 npm 中 RCE 漏洞，并获利 $15,000** — 一位安全研究者介绍了他在 `npm` 工具中发现的一些 RCE（remote code execution）漏洞，并从中累积获得了 $15K 的回报。我们平时很少需要深入研究这些工具的细节，通过本文可以略见一斑。（这些 RCE 漏洞也督促我们关注两周前讨论的 `npm` 安全更新。）

**长按识别二维码查看原文**   

https://robertchen.cc/blog/2021/09/20/npm-rce

Robert Chen

**Electron v15.0.0 发布** — 自从 Electron 发布了 v14 之后，Electron 将发布周期调整为 8 周。Electron v15 分别针对 Chromium v94，V8 v9.4 和 Node.js v16.5.0 进行了升级：尽管没有重大的更新（**支持 WebCodecs** 可能值得关注），但看到 Electron 始终保持最新版本的时候，感觉还是很棒。

**长按识别二维码查看原文**   

https://www.electronjs.org/blog/electron-15-0/

Sofia Nguy and Keeley Hammond

**剖析 Node.js 如何进行垃圾回收** — 本篇文章通过图文并茂的形式，再与代码示例相结合，剖析了 Node.js 是如何进行垃圾回收和内存管理的。虽然这篇文章发布时间稍微有点久远，但最近进行了更新。

**长按识别二维码查看原文**   

https://blog.risingstack.com/node-js-at-scale-node-js-garbage-collection/

RisingStack Engineering

**Node v16.10.0 (Current) 发布** — 没有大的更新，但有很多小细节的变化，比如 `npm` 和 Acorn 更新了以及有一个新的方式来限制每次 `http` 连接的请求数。

**长按识别二维码查看原文**   

https://nodejs.org/en/blog/release/v16.10.0/

Bethany Griggs

**如何使用 Pino-Logger 在 Node 应用中实现日志记录** — Pino 是一个内存占用很小的 Node 日志记录库，我们可以在任意的 Node 应用中使用它并且很容易集成到 Web 框架中。

**长按识别二维码查看原文**   

https://css-tricks.com/how-to-implement-logging-in-a-node-js-application-with-pino-logger/

Sarthak Duggal

**通过 Serverless Framework 创建一个 Slack bots** — 使用 Serverless 实现一个 Slack bots 并且可以和 PagerDuty 配合实现全天候工作。

**长按识别二维码查看原文**   

https://medium.com/schibsted-engineering/slack-bot-with-serverless-framework-e96fcdbd83a0

Joakim Wånggren

**介绍一个基于 Next.js 创建文章的脚本** — 介绍通过创建 node 脚本来简化 Next.js 驱动的网站上新建博客文章。

**长按识别二维码查看原文**   

https://elijahmanor.com/blog/nextjs-new-post

Elijah Manor

**通过 Serverless 建立 API 来统计 Twitter Follower 的增长情况** — 又是一个结合 Node.js 和 serverless 优秀案例。AWS Amplify 也出现在了文中。

**长按识别二维码查看原文**   

https://mokkappsdev.medium.com/track-twitter-follower-growth-over-time-using-a-serverless-node-js-api-on-aws-amplify-a72502f024e4

Michael Hoffmann (Mokkapps)

**如何通过 AppSignal 来调试 Cloudflare Workers**

**长按识别二维码查看原文**   

https://blog.appsignal.com/2021/09/15/how-to-debug-cloudflare-workers-with-appsignal.html

Wanyoike Michael

## 🛠  代码和工具

**Ackee: 一个基于 Node 的自托管 Web 分析工具** — 如果需要一个可以自托管的 Web 分析系统，并且有顾虑隐私的选型需求，那么 Ackee 一定是你的首选。

**长按识别二维码查看原文**   

https://github.com/electerious/Ackee

Tobias Reich

**nbb: Node.js 上的 Adhoc ClojureScript Scripting** — 它提供了一种在 Node 上流畅运行 ClojureScript 的途径。

**长按识别二维码查看原文**   

https://github.com/borkdude/nbb

Michiel Borkent

**Typegoose 9.0: 使用 TypeScript 的类来定义 Mongoose 模型** — 如果你是一个使用 Mongoose 的 Node 开发者，并且想配合 TypeScript 使用的话可以把本文作为参考。

**长按识别二维码查看原文**   

https://github.com/typegoose/typegoose

Typegoose

**ow v0.28.0: 人性化的函数入参检查工具** — 该工具设计一个很易用的接口定义函数入参约束条件。比如 `ow(input, ow.string.minLength(5))` ，如果校验失败会得到清晰的错误提示。

**长按识别二维码查看原文**   

https://github.com/sindresorhus/ow

Sindre Sorhus

**i18n-tools: 一个让操作 i18n 文件更容易的 CLI** — 一个可以把 i18n JSON 文件和 xslx/CSV 文件互相转换的工具，也支持对比两个 i18n 文件的差异比对。

**长按识别二维码查看原文**   

https://github.com/jy95/i18n-tools

Jacques Yakoub

**node-pg-migrate v6.0: 辅助 Postgres 数据库迁移的管理工具**

**长按识别二维码查看原文**   

https://github.com/salsita/node-pg-migrate

Salsita Software

**HyperExpress v3.0: 由 uWebSockets.js 驱动的高性能 Node 服务**

**长按识别二维码查看原文**   

https://github.com/kartikk221/hyper-express

Kartik

**Glob v7.2.0: 使用 Shell 风格模式来匹配文件**

**长按识别二维码查看原文**   

https://github.com/isaacs/node-glob

Isaac Z. Schlueter

**辅助项目从 CommonJS 迁移到 ESM 的 ESLint 规则**

**长按识别二维码查看原文**   

https://gist.github.com/Jaid/164668c0151ae09d2bc81be78a203dd5

Jaid

## 🙋‍♂️ 

我们将为你带来最前沿的前端资讯。
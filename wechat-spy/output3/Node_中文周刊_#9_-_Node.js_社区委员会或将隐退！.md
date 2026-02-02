# Node 中文周刊 #9 - Node.js 社区委员会或将隐退！

> 原文链接: http://mp.weixin.qq.com/s?__biz=MzIzOTkwMjM0OQ==&mid=2247494112&idx=1&sn=2e852e6b02fd80c204f8861ee62aa378&chksm=e921a202de562b14d6c2de1a4e35173743994e20f211455bc20e9fb3926952ca2517a09ecd31#rd
> 抓取时间: 2026/2/2 23:55:11

---

> 本期看点：前两周 Node.js 社区委员会通过 Node 官网发布了将要隐退的消息，这个消息着实让人唏嘘！本周 Node v16.11.1，v14.18.1 和 v12.22.7 也发布了更新，主要是修复了两个相同的 HTTP 请求漏洞。npm v8.0 也发布了更新，但是没有太大的亮点。

> 编辑：Otto、liu-jin-yi

## 🔥 本周热门

GitHub Advisory 数据库已经支持 \`npm audit\` — `npm audit` 命令可以扫描项目中的依赖是否有已知的安全漏洞。

**长按识别二维码查看原文**   

https://github.blog/2021-10-07-github-advisory-database-now-powers-npm-audit/

Edward Thomson（GitHub）

Node v16.11.1，v14.18.1 和 v12.22.7 发布 — 正如 10 月份安全更新所提到的，v16.11.1 （Current），v14.18.1（LTS） 和 v12.22.7（LTS） 都分别修复了两个相同的 HTTP 请求漏洞。具体细节尚未完全公开。

**长按识别二维码查看原文**   

https://nodejs.org/en/blog/vulnerability/oct-2021-security-releases/

Matteo Collina

npm v8.0 发布 — npm CLI 版本已经升级到了 v8，距离上次的 npm 7 发布 差不多刚好一年。正如 Myles Borin 提到的那样，这次的更新没有太大的亮点，主要是移除了对 Node.js v10 的支持。

**长按识别二维码查看原文**   

https://github.blog/changelog/2021-10-07-npm-cli-upgraded-to-version-8/

GitHub Blog

**快讯：**

-   Serverless 平台的 AWS Lambda 除了支持传统的 x86 平台外，还 添加了一个基于 ARM 的 Graviton2 的环境。
    

**长按识别二维码查看原文**   

https://aws.amazon.com/blogs/aws/aws-lambda-functions-powered-by-aws-graviton2-processor-run-your-functions-on-arm-and-get-up-to-34-better-price-performance/

  

Node.js 社区委员会或将隐退 — Node.js 社区委员会的提案正在迁移到 Node.js 技术指导委员会（TSC），造成隐退的主要原因是参与人数总体下降。

**长按识别二维码查看原文**   

https://nodejs.org/en/blog/announcements/retiring-the-node-js-community-committee/

Tierney Cyren

使用可移植的文本和 Netlify 的按需构建功能构建一个静态优先的 MadLib 生成器 — 按需构建可以用来推迟渲染大量的内容，因此通过这个 MadLib 生成器把用户创建的内容进行渲染非常有用。

**长按识别二维码查看原文**   

https://www.smashingmagazine.com/2021/10/static-first-madlib-generator-portable-text-netlify-builder-functions/

Bryan Robinson

Deno 还是一个玩具吗？来看看 “Node Killer” 的近况 — 没有特别深入的内容，如果你没有持续关注 Deno，这是一个很好的了解机会。

**长按识别二维码查看原文**   

https://blog.bitsrc.io/is-deno-still-a-thing-a-look-at-the-status-of-the-node-killer-884d47981d09

Fernando Doglio

Node.js Buffers 的完整指南。

**长按识别二维码查看原文**   

https://ruanmartinelli.com/posts/a-complete-guide-to-buffers

Ruan Martinelli

## 🛠  代码和工具

Objection.js：Node 中 SQL 友好的 ORM — 基于 Knex，支持 SQLite，Postgres 和 MySQL。Objection 的目标是“不参与代码逻辑”，在使用 SQL 的完整能力的同时简化常见操作。

**长按识别二维码查看原文**   

https://vincit.github.io/objection.js/

Sami Koskimäki

Benny v3.7.0：简单的基准测试框架 — Benny 基于 `benchmark` 包进行构建， 提供了一组 API 来对同步和异步代码进行基准测试、设置和选择测试，并以各种格式保存结果等。

**长按识别二维码查看原文**   

https://github.com/caderek/benny

Maciej Cąderek

Sequelize v6.7.0：Node.js 平台上易用的 多 SQL 方言的 ORM — 支持 PG，MySQL，MariaDB，SQLite 和 SQL Server ，并且完全基于 Promise 进行操作。

**长按识别二维码查看原文**   

https://github.com/sequelize/sequelize

Sequelize

Marble.js v4.0：HTTP 的函数式响应框架 — 基于 TypeScript 和 RxJS。

**长按识别二维码查看原文**   

https://github.com/marblejs/marble

Marble.js

crypto-hash v2.0：在 Node 和浏览器上使用原生 Crypto API 加密哈希模块 — 在两种环境中可以得到相同的哈希结果。在 Node 中使用 `crypto` 模块，在浏览器中使用 `window.crypto`。

**长按识别二维码查看原文**   

https://github.com/sindresorhus/crypto-hash

Sindre Sorhus

jsdom v18.0：用于 Node 的各种网络标准的纯 JS 实现。

**长按识别二维码查看原文**   

https://github.com/jsdom/jsdom

Elijah Insua  

Tedious v14.0：连接 SQL Server 数据库的 TDS 模块。

**长按识别二维码查看原文**   

https://github.com/tediousjs/tedious

Mike D Pilsbury

## 🙋🏻‍♀️
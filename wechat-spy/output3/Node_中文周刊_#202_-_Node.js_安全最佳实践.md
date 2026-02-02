# Node 中文周刊 #202 - Node.js 安全最佳实践

> 原文链接: http://mp.weixin.qq.com/s?__biz=MzIzOTkwMjM0OQ==&mid=2247544551&idx=1&sn=6aafc17cd15dce4f5d450596dd9a065a&chksm=e9216505de56ec1373ce952e560a0b5ece8c7befc17f502afc9b06bc131195466099f2a95388#rd
> 抓取时间: 2026/2/2 23:51:10

---

> 本期看点：Node.js 官方发布安全最佳实践文档，涵盖十个关键安全风险防护思路，pnpm v10.21 新增根据依赖自动安装指定 Node 版本功能并加强供应链安全，Node.js 2025 动态汇总，Umami v3.0 自托管的分析方案。

> 编辑：TimLi

🔥 本周热门

**Node.js 安全最佳实践** —— 你知道吗，Node.js 官方专门整理了一份关于安全最佳实践的页面，主要围绕十个关键风险提出了防护思路。内容涵盖网络安全漏洞、时间攻击、防供应链攻击，还有如何防止核心对象被“猴子补丁”等问题。

**长按识别二维码查看原文**   

https://nodejs.org/en/learn/getting-started/security-best-practices

Node 官方文档

💡 说到安全，Liran Tal 的 Awesome Node.js Security 值得反复翻看，里面收集了丰富的学习资源，还有各类安全事件的时间线。OWASP 也刚放出了 2025 年 Web 应用程序十大安全威胁的候选版本。

**长按识别二维码查看原文**   

https://github.com/lirantal/awesome-nodejs-security

**pnpm v10.21：更安全的安装和更智能的运行时管理** —— 现在 pnpm 能根据依赖的 `engines.runtime` 字段自动安装指定 Node 版本，也就是说 CLI 工具和 `postinstall` 脚本能用包声明的 Node 版本直接运行。此外新加的 `trustPolicy` 设置，能减少供应链攻击风险：如果某包的信任等级降低（比如构建过程不再有验证），会阻止其被安装。

**长按识别二维码查看原文**   

https://pnpm.io/blog/releases/10.21

Zoltan Kochan

▶  **Matteo Collina 讲述 2025 年 Node.js 现状** —— 今年早些时候，在 **JSNation** 上，TSC 成员 Matteo 用半小时给大家梳理了 Node 的新动态，包括人气、发布节奏、安全改进、最近的性能优化、权限系统等多个方面。

**长按识别二维码查看原文**   

https://www.youtube.com/watch?v=IgSwJaheiGk

GitNation

📄 **JS 中的错误链式处理：用 `Error` 和 `cause` 让调试更优雅** Matt Smith

**长按识别二维码查看原文**   

https://allthingssmitty.com/2025/11/10/error-chaining-in-javascript-cleaner-debugging-with-error-cause/

📄 **用 CQRS 模型构建 NestJS 应用程序** Christian Nwamba

**长按识别二维码查看原文**   

https://www.telerik.com/blogs/building-nestjs-applications-following-the-cqrs-model

📄 **Zod + TypeScript：简单高效的数据结构校验** Hassan Djirdeh

**长按识别二维码查看原文**   

https://www.telerik.com/blogs/zod-typescript-schema-validation-made-easy

**快讯：**

-   GitHub 更新了 npm 安全调整的公告，现在不能再新建 classic token，不过老 token 最晚还能用到 2026 年 2 月。
    
    **长按识别二维码查看原文**   
    
    https://github.blog/changelog/2025-11-05-npm-security-update-classic-token-creation-disabled-and-granular-token-changes/
    
-   在 Reddit 的 `/r/node` 版块，Jeet Shekhaliya 分享了 自己搭建的自动测试系统，每天用最新版 Node 跑上千个热门 npm 包。你可以看他 最新的测试报告。
    
    **长按识别二维码查看原文**   
    
    https://www.reddit.com/r/node/comments/1oprhaq/im\_testing\_npm\_libs\_against\_nodecurrent\_daily\_so/
    
-   Dr. Axel Rauschmayer 发现了一个我们之前没注意到的 pnpm 特性：能安装和管理多版本 Node。
    
    **长按识别二维码查看原文**   
    
    https://bsky.app/profile/dr-axel.de/post/3m5bqgichos2b
    
-   Node.js 24 已经可以在 Azure App Service for Linux 上使用了。
    
    **长按识别二维码查看原文**   
    
    https://techcommunity.microsoft.com/blog/appsonazureblog/node-js-24-is-now-available-on-azure-app-service-for-linux/4468801
    
      
    

🛠  代码与工具

**Umami v3.0：自托管的隐私优先 Google Analytics 替代方案** —— 有点像 Plausible 或 Google Analytics，但完全基于 Node，支持自建部署。点这里看全部特性。MIT 协议，也可以选择 官方有偿托管。

**长按识别二维码查看原文**   

https://github.com/umami-software/umami/releases/tag/v3.0.0

Umami Software, Inc.

**Tasuku (タスク)：极简 Node 任务运行器** —— Tasuku 在日语里是“任务”的意思，这个工具能把流程拆分为多个小任务，按指定顺序运行，并且在终端优雅显示进度。有点像 Node 版的 `make`。在线演示

**长按识别二维码查看原文**   

https://github.com/privatenumber/tasuku

hiroki osame

🛑 **fkill v10.0：跨平台放心杀进程** —— 支持 macOS、Linux 和 Windows，一套 API 轻松 kill 进程。比如：`await fkill('chrome', {waitForExit: 2000});`

**长按识别二维码查看原文**   

https://github.com/sindresorhus/fkill

Sindre Sorhus

**CSSOM：纯 JavaScript 开发的 CSS 解析器** —— 还实现了部分 CSS Object Model。

**长按识别二维码查看原文**   

https://github.com/acemir/CSSOM

Nikita Vasilyev

**Render.js：支持 RenderMan 格式的光线追踪渲染器** —— RenderMan 是 Pixar 上世纪 80 年代出的 3D 场景规范，Anders 正在用 Node 写一个 90 年代风格、怀旧感满满的 RenderMan 渲染器，纯 JS 实现，适合玩玩。

**长按识别二维码查看原文**   

https://github.com/anders94/render.js

Anders Brownworth

📢  其他生态

这里汇总一些最近有趣的相关动态：

-   🇯🇵 你想用日语写 JavaScript 吗？来试试 KokoScript！
    
    **长按识别二维码查看原文**   
    
    https://watilde.github.io/KokoScript/
    
-   说到日本，如果你知道哪家日本公司需要 JavaScript 圈的顶级大牛，Dan Abramov 最近在日本正找工作，欢迎帮忙内推。
    
    **长按识别二维码查看原文**   
    
    https://overreacted.io/hire-me-in-japan/
    
-   Lea Verou 用 Proxy 做的动态创建 Symbol 小技巧 ，很有趣。
    
    **长按识别二维码查看原文**   
    
    https://front-end.social/@leaverou/115455940452841916
    
-   GitHub 请来了 TypeScript 共同创始人 Anders Hejlsberg 访谈，聊了 TypeScript 崛起（现在已经是 GitHub 首位语言）和 AI 浪潮下扮演的角色。
    
    **长按识别二维码查看原文**   
    
    https://github.blog/developer-skills/programming-languages-and-frameworks/typescripts-rise-in-the-ai-era-insights-from-lead-architect-anders-hejlsberg/
    
-   Ben Visness 分享了 Mozilla 最近用新工具可视化 JavaScript / WebAssembly 编译过程，图形交互很炫酷。
    
    **长按识别二维码查看原文**   
    
    https://spidermonkey.dev/blog/2025/10/28/iongraph-web.html
    
-   想在 Node 还没办法落地的场景嵌入 JavaScript？可以试试 Hako 这个主攻 WebAssembly 的方案。
    
    **长按识别二维码查看原文**   
    
    https://andrews.substack.com/p/embedding-typescript
    
      
    

**版本发布：**

-   **MongoDB Node.js Driver v7.0** —— MongoDB 官方的 Node 驱动，版本说明写得依然特别细致。
    
-   **pg-promise v12.3** —— 面向 Node 的 Postgres 增强驱动，支持自动连接、事务、SQL 生成等。
    
-   **file-type v21.1** —— 检测文件、数据流或者内容类型，新版本支持 `.tar.gz`、Windows 注册表等。
    
-   **pg-boss v12.0** —— 基于 Postgres 的 Node 任务队列，现已迁移到 ESM，老用户要注意适配。
    
-   🤖 **Repomix v1.9** —— 可以把整个仓库打包到一个超适合 LLM 的文件里。
    
-   **Fastify v5.6.2** —— 以性能著称的 Node Web 框架，轻量又快。
    
-   **Prisma v6.19** —— Node.js / TypeScript 热门 ORM。
    
-   **node-mssql v12.1** —— 支持 Microsoft SQL Server 的 Node 客户端库。
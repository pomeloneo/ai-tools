# Node 中文周刊 #111 - 精选的 Node 安全资源列表

> 原文链接: http://mp.weixin.qq.com/s?__biz=MzIzOTkwMjM0OQ==&mid=2247524894&idx=1&sn=f5ad28cac4fd0210fcfd2471d522eb50&chksm=e92129fcde56a0ea94ec712fac69b52e2c44fe4849b575140611b7fe7c6dc0db2cada4bd1321#rd
> 抓取时间: 2026/2/2 23:52:59

---

> 本期看点：awesome-nodejs-security 罗列了 Node 安全资源，还涵盖了包括 Helmet（不久前刚刚发布了新的版本）在内等库的链接地址、教育资源和工具，甚至还涉及像 left-pad 事件这样七年前的遥远故事！

> 编辑：Yucohny、loveloki

## 🔥 本周热门

**出色的 Node 安全性：精选的 Node 安全资源列表** —— 此列表包括 **Helmet**（不久前刚刚发布了新的版本）等库的链接地址、教育资源和工具，甚至还涉及像 **left-pad 事件** 这样七年前的遥远故事！

**长按识别二维码查看原文**   

https://github.com/lirantal/awesome-nodejs-security

Liran Tal

**🖼 image-dimensions：获取图像尺寸** —— Sindre 最新创作的简单但完整的作品。这是一个在任意的现代 JavaScript 中获取 JPEG、PNG、APNG 和 GIF 图片尺寸信息（像素宽高）的工具。目前他在征集对 JPEG XL、HEIC 和 WebP 处理的 PR。

**长按识别二维码查看原文**   

https://github.com/sindresorhus/image-dimensions

Sindre Sorhus

**使用 LangChain 与 Node.js 构建 AI 应用** —— 了解使用 **LangChain** 构建检索增强生成（RAG）应用的基本知识。LangChain 是一个受欢迎的 LLM 框架，支持 Python 和 Node。

**长按识别二维码查看原文**   

https://developer.salesforce.com/blogs/2023/11/building-ai-applications-with-langchain-and-node-js

Julián Duque

**使用 Vite 和 Express 构建服务端 React 应用** —— 一个不使用完整框架进行服务端渲染和数据获取的 demo——展示了如何基于 React 实现框架常见的功能。

**长按识别二维码查看原文**   

https://thenewstack.io/how-to-build-a-server-side-react-app-using-vite-and-express/

Paul Scanlon

**加载 Node 应用程序配置的最佳实践**

**长按识别二维码查看原文**   

https://www.lirantal.com/blog/best-practices-for-bootstrapping-a-node-js-application-configuration

Liran Tal

**快讯：**

-   **Deno 发布了 v1.38**，通过 **允许使用** **`npm` 或 `pnpm`** 来安装依赖，进一步提高了对 Node 的兼容性。
    

**长按识别二维码查看原文**   

https://deno.com/blog/v1.38

-   **Bun v1.0.10** 发布，最新版本通过 `Bun.serve` 使 `node:http` 的速度提升了 14%。
    

**长按识别二维码查看原文**   

https://bun.sh/blog/bun-v1.0.10#node-http-gets-14-faster

-   **Node.js v20.x 现在成为 Heroku 的默认版本**。
    

**长按识别二维码查看原文**   

https://devcenter.heroku.com/changelog-items/2708

-   VS Code **对独立浮动窗口的支持正在进行中**。
    

**长按识别二维码查看原文**   

https://github.com/microsoft/vscode/issues/10121#issuecomment-1790316086

-   如果你对将 Node 应用程序作为 Windows 服务感兴趣，借鉴 **Jakob Wärnhjelm 的经验** 会节约你不少时间。
    

**长按识别二维码查看原文**   

https://github.com/jakobwarnhjelm/webapp-to-winservice

-   **🇪🇺 NodeConf EU** 正在爱尔兰举行。
    

**长按识别二维码查看原文**   

https://www.nodeconf.eu/

-   虽然 Node 还没有吉祥物，但是 **Eleventy 现在有了**！
    

**长按识别二维码查看原文**   

https://www.11ty.dev/blog/mascot-david/

## 🛠 代码与工具

**Super Expressive：零依赖构建正则表达式** —— 这是一个零依赖构建正则表达式的库。这里有 **一个在线演示** 可以进行实验。

**长按识别二维码查看原文**   

https://github.com/francisrstokes/super-expressive

Francis Stokes

**log-update v6.0：通过覆盖先前输出进行日志记录** —— 想象一下 `console.log` 每次都在同一行上覆盖自己的输出，也许可以用于渲染进度条、动画等。

**长按识别二维码查看原文**   

https://github.com/sindresorhus/log-update

Sindre Sorhus

**node-datachannel v0.5：Node 的 libdatachannel 绑定** —— `libdatachannel` 是一个独立的基于 C++17 的实现，支持各种 WebRTC 标准以及 WebSocket，并且在 POSIX 平台上可用。

**长按识别二维码查看原文**   

https://github.com/murat-dogan/node-datachannel

Murat Doğan

**版本发布：**

-   **Google Cloud SQL Node.js Connector v1.1** – 在 Node 中使用 Cloud SQL。
    
-   **setup-node v4.0** – 使用特定的 Node 版本设置 GitHub Actions 工作流程。
    
-   **unix-permissions v6.0** – 处理 POSIX 文件权限。
    
-   **node-llama-cpp v2.8** – 在本地使用 Node.js 版本的 `llama.cpp` 运行 AI 模型。
    
-   **temporary-path v1.0** – 获取一个随机的临时路径/目录。
    
-   **Nightwatch.js v3.3** – 集成的端到端测试框架。
    
-   **file-type v18.6** – 检测缓冲区的文件类型。
    

## 🙋🏻‍♀️
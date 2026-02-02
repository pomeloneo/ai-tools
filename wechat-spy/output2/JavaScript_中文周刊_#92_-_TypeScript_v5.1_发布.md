# JavaScript 中文周刊 #92 - TypeScript v5.1 发布

> 原文链接: http://mp.weixin.qq.com/s?__biz=MzIzOTkwMjM0OQ==&mid=2247521523&idx=1&sn=eb2ea08544044edf1e437c49092b4d2a&chksm=e921df11de56560713b165dfc704d8de81813277b83788020609eea0666444e87de3a1b5d0de#rd
> 抓取时间: 2026/2/2 23:52:00

---

> 本期看点：上周，TypeScript v5.1 发布，该版本开始支持 JSX 标记名称的链接编辑、namespace JSX 属性、具有无关类型的 getter 与 setter，以及不需显式返回 undefined 的函数。

> 编辑：liu-jin-yi、Levi、Yucohny

## 🔥 本周热门

**Polywasm：为在 JS 环境中运行 WASM 提供解决方案** — esbuild 的创建者带来全新项目：一个 polyfill，它通过实时翻译为 WASM 文件提供运行方案，以便在不支持 WebAssembly 实现或者 **禁用 WebAssembly** 的 JavaScript 环境中运行 .wasm 文件。你可以在这个 **esbuild 沙盒** 中查看其运行效果。

**长按识别二维码查看原文**   

https://github.com/evanw/polywasm

Evan Wallace

**TypeScript v5.1 发布** — 这个版本开始支持 JSX 标记名称的链接编辑、namespace JSX 属性、具有无关类型的 getter 与 setter，以及不需显式返回 `undefined` 的函数。

**长按识别二维码查看原文**   

https://devblogs.microsoft.com/typescript/announcing-typescript-5-1/

Daniel Rosenwasser (Microsoft)

**⚡️ 快讯：**

-   ⭐ _JavaScript: The Good Parts_ 的作者 Douglas Crockford ▶️ **再次指出** JavaScript 是一个 smelly 的语言并且“是时候出现写新的东西了”。😬
    
    **长按识别二维码查看原文**   
    
    https://www.youtube.com/watch?v=lc5Np9OqDHU  
    
-   上周苹果 WWDC 上有一个 ▶️ **关于 Safari DevTools 的实用介绍**，同时还有大量有关 Safari 功能增强的新闻，包括“空间化 Web”、对 JPEG XL、离屏画布的支持、弹出框 API、本地存储策略，以及额外的 JavaScript 正则表达式功能。
    
    **长按识别二维码查看原文**   
    
    https://developer.apple.com/videos/play/wwdc2023/10262  
    
-   Emma Twersky 分享了最近谷歌 I/O 2023 大会上 所有 **与 Angular 相关的内容**。
    
    **长按识别二维码查看原文**   
    
    https://blog.angular.io/angular-at-google-i-o-2023-ed800269070e?gi=41a184a5fb1f  
    
-   📘 Faraz K. Kelhini 即将发布新书 **_Text Processing with JavaScript_**，目前处于 beta 版本，并且计划 8 月份由 **_Pragmatic Bookshelf_** 出版社全面发行。从目录中可以看出，书中 **包含了很多有用的内容**。
    
    **长按识别二维码查看原文**   
    
    https://pragprog.com/titles/fkjavascript/text-processing-with-javascript/  
    

## 📒 教程与趣事

**为什么（以及如何）使用 TypeScript 编写 WebAssembly** — 性能是作者主要论证的点。作者在文中介绍了 Wasmati，它使用与 WASM 操作相对应的 API，通过编写 TypeScript 创建 WebAssembly 模块。它可以在现代浏览器、Node 和 Deno 中工作。

**长按识别二维码查看原文**   

https://www.zksecurity.xyz/blog/posts/wasmati/

Gregor Mitscha-Baude

**反引号字符串有可能并非最佳选择** — Mattie 认为试图使用 JavaScript 模板字符串组装查询字符串会导致潜在的注入问题。幸运的是还有替代方案......

**长按识别二维码查看原文**   

https://spin.atomicobject.com/2023/06/05/javascript-backtick-strings-wrong/

Mattie Behrens

**使用 taichi.js 轻松又方便地进行 WebGPU 编程** — **taichi.js** 是一个把 JavaScript 函数转换为可并行化的 WebGPU 计算着色器的 GPU 计算框架。你可以 **在这里查看 _Game of Life_ 的实时演示**。

**长按识别二维码查看原文**   

https://betterprogramming.pub/painless-webgpu-programming-with-taichi-js-afa43c7adb2e?gi=072150864029

Dunfan Lu

**预览 macOS Sonoma 14 Beta 上的 Web 应用程序** — 下一版本的 macOS 将更加关注整合良好的、可在桌面上安装的 Web 应用。

**长按识别二维码查看原文**   

https://blog.tomayac.com/2023/06/07/web-apps-on-macos-sonoma-14-beta/

Thomas Steiner

**从字符串中选****择第 n 个字符的多种方法**

**长按识别二维码查看原文**   

https://christianheilmann.com/2023/06/02/the-many-ways-to-select-the-n-th-character-from-a-string/

Christian Heilmann

**何时使用 Java****Script** **中的基本类型**

**长按识别二维码查看原文**   

https://www.smashingmagazine.com/2023/06/primitive-objects-javascript-part-2/

Kirill Myshkin

**Node.js 新自****带测试运行器小示例**

**长按识别二维码查看原文**   

https://blog.endpts.io/primer-on-the-built-in-node-js-test-runner

endpts

## 🛠 代码与工具

**AlgoliaAutoComplete：快速、全功能的自动完成库** — 这不单单是一个 UI 组件，你还可以完全控制渲染体验。这里有一个 **入门教程** 和一个 **CodeSandbox** 演示，你可以在里面试玩一些实时代码。

**长按识别二维码查看原文**   

https://github.com/algolia/autocomplete#readme

Algolia

**Perfectionist v1.0：排序数据的 ESLint 插件** — 它可以使用 ESLint 对包括属性、import、类型在内的各种东西进行排序。它既支持根据字母顺序和自然顺序拍排序，也支持按照行的长度进行排序，从而营造出 **整洁的美感**……

**长按识别二维码查看原文**   

https://github.com/azat-io/eslint-plugin-perfectionist

Azat S.

**pgsql-ast-parser v11.1：一个简单的 SQL 解析器** — 这是一个基于 TypeScript 的 Postgres SQL 语法解析器，可以为大部分查询生成类型化的 AST（不支持 PL/pgSQL）。它被作者用于 **pg-mem 项目** 的一部分，该项目在 Node 或浏览器中提供一个 Mini 版本的“内存中的”Postgres 克隆。这里是 **该项目的实时演示**。

**长按识别二维码查看原文**   

https://github.com/oguimbal/pgsql-ast-parser

Olivier Guimbal

**版本发布：**

-   **Tesseract.js v4.1**  
    ↳ 使用原生 JavaScript 实现的 OCR 库。
    
-   **BlockNote v0.8**  
    ↳ 基于块的 Notion 风格编辑器。
    
-   **Redwood v5.3**  
    ↳ React + GraphQL 全栈框架。
    
-   **TensorFlow.js v4.7**  
    ↳ 在浏览器中使用的机器学习框架。
    
-   **Madge v6.1**  
    ↳ 创建模块依赖关系图。
    
-   **Noble Curves v1.1**  
    ↳ 经过安全审计的椭圆曲线密码库。
    
-   **Taxi v1.3**  
    ↳ 为网站添加流畅的 PJAX 导航。
    
-   **Inngest v2.0**  
    ↳ 使用 TypeScript 构建 serverless 的任务系统。
    
-   **TinyBase v3.2**  
    ↳ 用于本地优先应用的响应式数据存储。
    
-   **React Arborist v3.1**  
    ↳ 完整的树形视图组件，这里是 **示例**。
    
-   **Alova v2.6**  
    ↳ 适用于 Vue、React 和 Svelte 的请求策略库。
    

## 🙋🏻‍♀️
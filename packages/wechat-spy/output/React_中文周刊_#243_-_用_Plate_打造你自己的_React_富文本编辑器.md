# React 中文周刊 #243 - 用 Plate 打造你自己的 React 富文本编辑器

> 原文链接: http://mp.weixin.qq.com/s?__biz=MzIzOTkwMjM0OQ==&mid=2247543376&idx=1&sn=37ba032f55b9391f9f47db795494093c&chksm=e92161b2de56e8a4c3cd5fb2c74ca5bc233bc62b83e1beb05aa515a2969bcc9f1f34538a5ae2#rd
> 抓取时间: 2026/2/2 23:41:48

---

> 本期看点：Plate 框架让你可以选择特定功能构建基于 React 的富文本编辑器，Streamdown 支持流式传输的 react-markdown 替代方案问世，Headless Tree：终极树形组件，大规模自托管 Next.js 指南。

> 编辑：TimLi

🔥 本周热门

**Plate：打造你自己的富文本编辑器** —— 这是一个用于构建基于 React 的富文本编辑器的框架，让你可以选择所需的特定功能。它还提供了非常详尽的文档。GitHub 仓库地址。

**长按识别二维码查看原文**   

https://platejs.org/

Ziad Beyens

**我们能用 Local Storage 替代 Context/Redux/Zustand 吗？** —— 有时候浏览器内置的 `localStorage` API 就足够用了。Nadia 详细分析了什么时候适合使用，什么时候不适合。

**长按识别二维码查看原文**   

https://www.developerway.com/posts/local-storage-instead-of-context

Nadia Makarevich (Developer Way)

**Streamdown：支持流式传输的 `react-markdown` 替代方案** —— react-markdown 在渲染 Markdown 方面很出色，但如果你需要处理实时流式内容（比如在 AI 场景中），Vercel 的这个新项目可能正是你需要的。GitHub 仓库地址。

**长按识别二维码查看原文**   

https://streamdown.ai/

Vercel

**▶ TanStack Devtools 的"跳转到源码"功能** —— 原标题《我用不到 10 分钟让你大开眼界的 TanStack Devtools》可能有点夸张，但在视频 5 分钟处，Alem 展示了一个真正很棒的"跳转到源码"功能，适用于任何 JSX 类型。在开发工具中点击任何组件，就能直接跳转到对应的源代码。

**长按识别二维码查看原文**   

https://www.youtube.com/watch?v=wQ-X501kgpg

Alem Tuzlak

**大规模自托管 Next.js 指南** —— 基于实际部署经验，涵盖了水平扩展、分布式缓存、图片优化和反向代理配置等内容。

**长按识别二维码查看原文**   

https://dlhck.com/thoughts/the-complete-guide-to-self-hosting-nextjs-at-scale

David Höck

**📄 我是如何打造出一个比 Next.js 快 4 倍的全栈 React 框架的** —— 秘诀在于抛弃 Node.js，转而创建一个名为 Rari 的基于 V8 的自定义 Rust 运行时。Ryan Skinner

**长按识别二维码查看原文**   

https://ryanskinner.com/posts/how-i-built-a-full-stack-react-framework-4x-faster-than-nextjs-with-4x-more-throughput

**📄 React 的 `useTransition` 和状态更新重排序** Jordan Eldredge

**长按识别二维码查看原文**   

https://jordaneldredge.com/notes/react-rebasing/

**📺 使用 Expo + React Native 构建跨平台应用程序（iOS、Android 和 Web）** Kurak、Berry 和 Lähteenlahti

**长按识别二维码查看原文**   

https://www.youtube.com/watch?v=cjV3oa8npGg

**📄 从 Blender 导出布料模拟到交互式 Three.js 场景** Joshua Guo

**长按识别二维码查看原文**   

https://tympanus.net/codrops/2025/08/20/exporting-a-cloth-simulation-from-blender-to-an-interactive-three-js-scene/

**📄 为不同显示模式优化 PWA** Declan Chidlow

**长按识别二维码查看原文**   

https://www.smashingmagazine.com/2025/08/optimizing-pwas-different-display-modes/

**📄 如何用 React 19 和 Strapi 5 构建现代博客** The Strapi Blog

**长按识别二维码查看原文**   

https://strapi.io/blog/how-to-build-a-modern-blog-with-react-19-and-strapi-5

**快讯：**

-   ESLint v9.34.0 新增了多线程检查支持，这可能会大大提升大型项目的检查速度。
    
    **长按识别二维码查看原文**   
    
    https://eslint.org/blog/2025/08/multithread-linting/
    
-   🇺🇸 大型 React 会议 React Summit 2025 将于今年 11 月在纽约举行。
    
    **长按识别二维码查看原文**   
    
    https://reactsummit.us/
    
-   🎥 虽然这是一个商业产品，但如果你需要快速构建基于 React 的视频编辑器，Remotion 团队为你准备了一个新的"编辑器起步模板"。
    
    **长按识别二维码查看原文**   
    
    https://www.remotion.dev/
    
      
    

🛠 代码、工具和库

**Headless Tree：终极树形组件** —— 主页上有大量可以试用的实例。现在新增了多选复选框功能。GitHub 仓库地址。

**长按识别二维码查看原文**   

https://headless-tree.lukasbach.com/

Lukas Bach

**React-PDF v10.1：在 React 应用程序中显示 PDF** —— 像显示图片一样轻松地在应用程序中渲染 PDF。v10.1 新增了对函数式子组件的支持，使自定义渲染和状态管理更容易。

**长按识别二维码查看原文**   

https://projects.wojtekmaj.pl/react-pdf/

Wojciech Maj

**Uppy v5.0：强大的模块化 JavaScript 文件上传工具** —— 不仅支持本地上传，还支持从 Dropbox 或 Google Drive 等远程服务上传。集成了 React 支持，并支持断点续传。GitHub 仓库地址。

**长按识别二维码查看原文**   

https://uppy.io/

Transloadit

**🎨 react-beautiful-color：灵活的颜色选择器组件** —— 号称是"真正可以自定义的 React 颜色选择器"。

**长按识别二维码查看原文**   

https://react-beautiful-color.vercel.app/

Özer Gökalpsezer

📢 其他 JavaScript 相关

以下是一些你可能错过的其他有趣的 JavaScript 生态圈新闻：

-   Calm 团队解释了他们是如何将 monorepo 迁移到使用 Node 的类型剥离支持的，并展示了他们获得的开发效率提升。
    
    **长按识别二维码查看原文**   
    
    https://blog.calm.com/engineering/how-we-migrated-our-rushjs-monorepo-to-node-type-stripping
    
-   Kamil Chmielewski 提出了使用 HTML 分部和服务器端 reducer 作为 React 单页应用程序替代方案的想法。
    
    **长按识别二维码查看原文**   
    
    https://cimatic.io/blog/html-partials-server-reducers-alternative-to-react-spas
    
-   Bun 1.3 即将发布，但 Bun v1.2.1 已经发布，亮点包括支持 MySQL、SQLite 和 Postgres 的一级数据库客户端 `Bun.SQL`，以及速度提升 500 倍的 `postMessage(string)`。
    
    **长按识别二维码查看原文**   
    
    https://bun.com/blog/bun-v1.2.21
    
-   ImageJS 1.0 是一个 JavaScript 图像处理库，支持调整大小、裁剪等多种图像处理功能，可在 Node.js 和浏览器中使用。
    
    **长按识别二维码查看原文**   
    
    https://docs.image-js.org/blog/releases/1.0/
    
-   Sam Rose 制作了一个精彩的 Big O 符号图解教程，包含 JavaScript 示例。如果你一直想知道 O(1)、O(log n) 等是什么意思，这是一个很好的入门教程。
    
    **长按识别二维码查看原文**   
    
    https://samwho.dev/big-o/
    

**版本发布：**

-   **Konsta UI v5.0** —— 基于 Tailwind CSS 的移动端 UI 组件库，支持 React、Vue 和 Svelte，现已更新支持 iOS 26 和 Material Design 2025 风格。
    
-   **React Lite YouTube Embed v2.5.5** —— 一个更快、更简洁、更注重隐私的 YouTube 视频嵌入方式。
    
-   **react-fontawesome v3.0** —— Font Awesome 的官方 React 组件。
    
-   **React Aria 2025 年 8 月更新**
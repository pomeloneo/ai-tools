# React 中文周刊 #215 - React 推出实验性 View Transition API

> 原文链接: http://mp.weixin.qq.com/s?__biz=MzIzOTkwMjM0OQ==&mid=2247539298&idx=1&sn=c9687c05af3501b4bf8e82d6460468de&chksm=e9211180de569896d9ad0650715467e784bb90a75143dafe56d2402ea5a291188d0099ceaac0#rd
> 抓取时间: 2026/2/2 23:42:49

---

> 本期看点：React 发布基于浏览器原生 View Transition API 的实验性动画组件，Shopify 分享五年 React Native 开发经验与最佳实践，Next.js 15 完成升级到 React 19，Create React App 项目维护现状引发社区讨论，Expo 推出基于 Cloudflare Workers 的 EAS Hosting 预览版。

> 编辑：TimLi

🔥 本周热门

**初探 React 的实验性动画 API** —— `<ViewTransition />` 基于强大的浏览器原生 View Transition API（Firefox 目前尚不支持）。虽然这个功能目前仅在 React 预发布版本中可用，但 Matt 为我们准备了丰富的示例和演示，让你提前感受其潜力。

**长按识别二维码查看原文**   

https://motion.dev/blog/reacts-experimental-view-transition-api

Matt Perry (Motion)

💡 你可以在 React 关于 `ViewTransition` 的 PR 中了解更多技术细节。

**长按识别二维码查看原文**   

https://github.com/facebook/react/pull/31975

**Shopify 的 React Native 五年历程** —— 五年前，Shopify 宣布 React Native 是他们移动开发的未来，他们说到做到，逐步将所有移动应用程序迁移到了 React Native。这里分享了他们一路走来的经验教训，以及为什么他们会继续坚持这个选择。

**长按识别二维码查看原文**   

https://shopify.engineering/five-years-of-react-native-at-shopify

Mustafa Ali (Shopify)

**每个 React 开发者都应该知道的无障碍开发要点** —— 如果你是一位经验丰富的前端开发者，这些可能已经成为你的基本功。但对于新手来说，这是一份很好的前端无障碍开发入门指南。

**长按识别二维码查看原文**   

https://martijnhols.nl/blog/accessibility-essentials-every-front-end-developer-should-know

Martijn Hols

**📄 LangChain：在 JavaScript 中结合 React 和 Next.js 使用 OpenAI** Robin Wieruch

**长按识别二维码查看原文**   

https://www.robinwieruch.de/langchain-javascript-openai/

**📄 为什么要避免在 Remix/React Router 中使用 `navigate(-1)`** David Adams

**长按识别二维码查看原文**   

https://programmingarehard.com/2025/01/13/maybe-dont-navigate-1.html/

**📄 Next.js 15 和 React 19 中表单处理的最佳实践** Kolby Sisk (Udacity)

**长按识别二维码查看原文**   

https://engineering.udacity.com/mastering-forms-in-next-js-15-and-react-19-e3d2d783946b?gi=1ef9259582b9

**📄 使用 React Relay 和 Vite 实现流式 SSR** Aqora

**长按识别二维码查看原文**   

https://aqora.io/blog/AEJsb2dBcnRpY2xlAZRgyH4wdeKfFHS0yil0Fw/implementing-streaming-ssr-with-react-relay-and-vite

**📄 React 19 中的渐进式表单** Chris Arderne

**长按识别二维码查看原文**   

https://rdrn.me/react-forms/

**快讯：**

-   React Native 工具提供商 Expo 展示了 EAS Hosting 的预览版，这是一个基于 Cloudflare Workers 的无服务器平台，用于在云端托管 Expo 服务器代码。
    
    **长按识别二维码查看原文**   
    
    https://expo.dev/blog/expo-announces-eas-hosting-service
    
-   Create React App 是否可以认为已经过时了？其仓库的 issues 正在被垃圾信息淹没，且有近 500 个未处理的 PR。面对 Vite 和 Next.js，是时候给 CRA 画上句号了吗？
    
    **长按识别二维码查看原文**   
    
    https://create-react-app.dev/
    
-   React 的理念已经渗透到桌面和移动应用程序开发中，Alexander Kondratev 思考是否也可以/应该为嵌入式开发创建一个 React 框架？
    
    **长按识别二维码查看原文**   
    
    https://blog.devgenius.io/react-for-embedded-development-e1496be8a774?gi=9a133c53d44b
    
-   虽然花了一些时间，但官方 React 网站刚刚完成了到 Next.js 15.1 和 React 19 的升级。
    
    **长按识别二维码查看原文**   
    
    https://react.dev/
    
      
    

🛠 代码与工具

**react-nil v2.0：React "空渲染器(null renderer)"** —— 这是一个有趣的实验，用于在不需要渲染任何内容但想要使用 hooks、suspense、context 和其他 React 生命周期功能的场景中使用 React，比如在 Node 应用程序中。也许这个 CodeSandbox 示例能给你一些灵感。

**长按识别二维码查看原文**   

https://github.com/pmndrs/react-nil

Poimandres

**Superglue v1.0：让 React 与 Ruby on Rails 完美结合** —— Superglue 是一个库，旨在以一种自然的方式将 Ruby on Rails 和 React 更紧密地结合在一起，就像 Rails 默认的 Hotwire 和 Stimulus 前端方案一样。

**长按识别二维码查看原文**   

https://thoughtbot.com/blog/superglue-1-0-react-rails-a-new-era-of-thoughtfulness

Thoughtbot

**如何搭建基础的 Ruby Sinatra + React Web 应用程序** —— 这里列出了使用 Ruby 后端搭配 React 前端（包含 Vite 和 Tailwind）的基本步骤。

**长按识别二维码查看原文**   

https://gist.github.com/peterc/91d9bc6397eb93e65897c1826f35e345

Peter Cooper

💡 如果你对 Ruby 或 Rails 感兴趣，一定要看看 Ruby Weekly —— 这是我们的第一个技术周刊，现在已经发布了 733 期，依然保持着强劲的势头！

**长按识别二维码查看原文**   

https://rubyweekly.com/

**版本发布：**

-   **react-intersection-observer v9.15** —— 使用 Intersection Observer API 在元素进入或离开视口时触发操作。
    
-   **react-highlight-words v0.21** —— 用于在文本中高亮显示关键词的组件。
    
-   **react-json-view-lite v2.3** —— 以树形视图渲染 JSON 对象，示例在此。
    
-   **React Native Gesture Handler v2.22** —— 暴露平台原生触摸 API。
    
-   **React Native Owl v1.5** —— React Native 的视觉回归测试工具。
    
-   **Fortune Sheet v0.22** —— 类 Excel 电子表格控件。
    
-   **React Native v0.78.0 RC 0**
    
-   **Material UI v6.4**
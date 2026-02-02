# React 中文周刊 #98 - AWS 宣布全面推出 Amplify UI for React

> 原文链接: http://mp.weixin.qq.com/s?__biz=MzIzOTkwMjM0OQ==&mid=2247508063&idx=1&sn=e2be70322880b1d4ea41f3efb285b9fd&chksm=e921ebbdde5662abba688ccb96031117b0faa100c9c06d51d426863a0c5a8495e24e7d3989d1#rd
> 抓取时间: 2026/2/2 23:47:04

---

> 本期看点：本期为大家带来了 五个 React-Query 和 SWR 的小技巧和如何使用 React 18、Vite 和 Netlify Functions 构建、测试和部署一个书店应用等优秀文章、视频。点击本期周刊查看更多精彩文章！

> 编辑：tmkx、iShawnWang、edison-hm、whatwewant

## 🔥 本周热门

**React 状态管理的新浪潮** — 如果没有一些关于状态管理的内容，就不是一篇完整的 React 周刊 😁。这篇相当长的文章给出了一个全面的概述，以及一些历史和观点，而不是展示单个工具或方法的功能。

**长按识别二维码查看原文**   

https://frontendmastery.com/posts/the-new-wave-of-react-state-management/

Frontend Mastery

▶  **五个 React-Query 和 SWR 的小技巧** — React 最受尊敬的讲师之一向我们展示了如何进阶使用 **React Query** 和 **SWR** 这两款数据获取工具库。

**长按识别二维码查看原文**   

https://www.youtube.com/watch?v=JaM2rExmmqs

Jack Herrington

**Amplify UI for React 现已全面推出** — Amplify 是 AWS 推出的一款产品，旨在通过将其各个部分与有用的工具捆绑在一起，将前端和移动开发项目吸引到其基础设施中。其中一个重要部分是 **Amplify UI**，它是直接连接到 AWS 云的 React 组件的集合。

**长按识别二维码查看原文**   

https://aws.amazon.com/about-aws/whats-new/2022/06/general-availability-amplify-ui-react/

Amazon Web Services

**如何使用 React 18、Vite 和 Netlify Functions 构建、测试和部署一个书店应用** — 使用了各种现代工具，包括通过 Serverless 后端将一个应用程序部署到线上。

**长按识别二维码查看原文**   

https://labs.pineview.io/build-test-and-deploy-an-app-react18-vite-netlify-nightwatch/

Yevhen Kapelianovych

▶  **“我是如何使用 Next.js 和 Tailwind 构建一个软件代理网站的”** — 在第 **293** 期中，我们推出了这个风格奇特的视频系列，我们很高兴推荐另一集。它也以自然的景象和声音为特色，没有台词。观察别人是如何工作的仍然是一件很有趣的事情。

**长按识别二维码查看原文**   

https://www.youtube.com/watch?v=GznmPACXBlY

Takuya Matsuyama

**快讯**

-   📆 **reactjsday 2****022** 将于 10 月 21 日在意大利维罗纳举行。CFP 截止日期为 7 月 24 日。
    
    **长按识别二维码查看原文**   
    
    https://2022.reactjsday.it/  
    
-   📆 **useReact****N****YC** 将回到现场活动，Shawn 'swyx' Wang 和 Nawaz Khan 将在 7 月 13 日的下一次活动上发言。
    
    **长按识别二维码查看原文**   
    
    https://www.meetup.com/usereactnyc/events/286995768/  
    
-   这是一个有趣的服务演示，它声称 **通过在服务器端并行运行测试，只需 12 秒**（通常超过 3 分钟）就可以运行 React 的整个测试用例。
    
    **长按识别二维码查看原文**   
    
    https://brisktest.com/demos  
    

一个简单的 React Hook 例子：在执行代码前弹出提示框 — 你确定要这么做吗？有时候这是值得一问的。

**长按识别二维码查看原文**   

https://medium.com/@kch062522/useconfirm-a-custom-react-hook-to-prompt-confirmation-before-action-f4cb746ebd4e

Isaac Kwok

“没有 SSR 的 Angular 应用比拥有 SSR 的 Next.js 更快，我有数据”

**长按识别二维码查看原文**   

https://alexkrupp.typepad.com/sensemaking/2022/06/angular-without-ssr-is-faster-than-nextjs-with-ssr-i-have-the-data.html

Alex Krupp opinion

如何在 React 和 Vite 应用中引入 SVG 文件

**长按识别二维码查看原文**   

https://www.freecodecamp.org/news/how-to-import-svgs-in-react-and-vite/

Israel Mitolu

## 🛠  代码与工具

FlashList: Shopify 的 React Native 高性能长列表组件 — 与 React Native 官方 **FlatList** 相比有几倍性能提升，并且迁移简单、支持全平台，且在低端安卓设备上仍能保证其性能

**长按识别二维码查看原文**   

https://shopify.github.io/flash-list/

Shopify

html-react-parser 3.0: 一款 HTML 转 React 组件解析器 — 将 HTML 字符串转换为 React 组件，同时支持服务端（Node.js）和客户端（浏览器）

**长按识别二维码查看原文**   

https://github.com/remarkablemark/html-react-parser

Mark Xu

Reassure: 一款 React Native 性能测试助手 — 在 CI 或本地自动化 React Native 执行 App 性能回归测试

**长按识别二维码查看原文**   

https://github.com/callstack/reassure

Callstack

react-local-toast — 为指定的组件交互提供即时反馈，**更多示例**

**长按识别二维码查看原文**   

https://github.com/OlegWock/react-local-toast

react-native-permissions — 一款拥有统一 API 的跨平台权限库

**长按识别二维码查看原文**   

https://github.com/zoontek/react-native-permissions

react-fontawesome — 一款成熟且备受好评的 React **图标库** 组件

**长按识别二维码查看原文**   

https://github.com/FortAwesome/react-fontawesome

rc-progress — 支持 **条状和圆环状** 的进度指示组件

**长按识别二维码查看原文**   

https://github.com/react-component/progress

**⚡️ 好库推荐：**

**react-page v5.0** – 一款所见即所得的编辑器

**primereact v8.2** – 一款丰富的 React UI 组件库

**react-chat-elements v12.0** – 该库涵盖了聊天相关的组件，例如：消息对话框、聊天列表以及头像等

**jotai v1.7.3** – 一款轻便灵活的状态管理库

**preact v10.9** – Preact 于 React 是一种似是而非的关系

## 🙋🏻‍♀️
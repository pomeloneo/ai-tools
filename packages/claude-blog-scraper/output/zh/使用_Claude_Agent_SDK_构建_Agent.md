---
title: "使用 Claude Agent SDK 构建 Agent"
url: "https://claude.com/blog/building-agents-with-the-claude-agent-sdk"
---

# 使用 Claude Agent SDK 构建 Agent

去年，我们与客户分享了[构建高效 Agent](https://www.anthropic.com/engineering/building-effective-agents) 的经验教训。自那时起，我们发布了 [Claude Code](https://claude.com/product/claude-code)，这是一个代理式（agentic）编程解决方案，最初是为了支持 Anthropic 内部开发人员的生产力而构建的。

在过去的几个月里，Claude Code 已经不仅仅是一个编码工具。在 Anthropic，我们已经[使用它](https://www.anthropic.com/news/how-anthropic-teams-use-claude-code)进行深度研究、视频创作和记笔记，以及无数其他的非编码应用。事实上，它已经开始驱动我们几乎所有的主要 Agent 循环。

换句话说，驱动 Claude Code 的 Agent 框架（Claude Code SDK）也可以驱动许多其他类型的 Agent。为了反映这一更广泛的愿景，我们将 Claude Code SDK 更名为 Claude Agent SDK。

在这篇文章中，我们将重点介绍我们为何构建 Claude Agent SDK、如何使用它构建你自己的 Agent，并分享我们团队在部署过程中总结出的最佳实践。

## 给 Claude 一台电脑

Claude Code 背后的[关键设计原则](https://www.youtube.com/watch?v=vLIDHi-1PVU)是，Claude 需要程序员每天使用的相同工具。它需要能够在代码库中找到合适的文件，编写和编辑文件，对代码进行 lint 检查，运行代码，调试，编辑，有时还需要迭代执行这些操作，直到代码运行成功。

我们发现，通过让 Claude 访问用户的电脑（通过终端），它就拥有了像程序员一样编写代码所需的一切。

但这同时也使得 Claude Code 中的 Claude 在*非*编码任务上也变得高效。通过赋予它运行 bash 命令、编辑文件、创建文件和搜索文件的工具，Claude 可以读取 CSV 文件、搜索网络、构建可视化图表、解读指标，并完成各种其他的数字工作——简而言之，就是创建拥有电脑的通用 Agent。Claude Agent SDK 背后的关键设计原则是给你的 Agent 一台电脑，让它们能够像人类一样工作。

## 创建新型 Agent

我们相信，给 Claude 一台电脑将解锁构建比以往更高效 Agent 的能力。例如，使用我们的 SDK，开发人员可以构建：

*   **金融 Agent**：构建能够理解你的投资组合和目标，并通过访问外部 API、存储数据和运行代码进行计算来帮助你评估投资的 Agent。
*   **个人助理 Agent**：构建能够帮助你预订旅行和管理日历，以及通过连接你的内部数据源和跨应用程序跟踪上下文来安排预约、整理简报等的 Agent。
*   **客户支持 Agent**：构建能够处理高度模棱两可的用户请求（如客户服务工单）的 Agent，通过收集和审查用户数据、连接外部 API、回复用户并在需要时升级给人工处理。
*   **深度研究 Agent**：构建能够通过搜索文件系统、分析和综合来自多个来源的信息、交叉引用文件中的数据并生成详细报告，从而在大型文档集合中进行全面研究的 Agent。

以及更多。在其核心，SDK 为你提供了构建试图自动化的任何工作流的 Agent 的原语。

## 构建你的 Agent 循环

在 Claude Code 中，Claude 通常在一个特定的反馈循环中运行：收集上下文 -> 采取行动 -> 验证工作 -> 重复。

![Agent 反馈循环](https://cdn.prod.website-files.com/68a44d4040f98a4adf2207b6/697a4b28db0e40fd93e63875_image.png)

Agent 通常在一个特定的反馈循环中运行：收集上下文 -> 采取行动 -> 验证工作 -> 重复。

这提供了一种思考其他 Agent 及其应被赋予的能力的有用方式。为了说明这一点，我们将通过如何在 Claude Agent SDK 中构建一个电子邮件 Agent 的示例来演示。

## 收集上下文

在开发 Agent 时，你不只是想给它一个提示：它需要能够获取和更新自己的上下文。以下是 SDK 中的功能如何提供帮助。

### **代理式搜索与文件系统**

文件系统代表了*可以*被拉入模型上下文的信息。

当 Claude 遇到大文件时，如日志或用户上传的文件，它会通过使用像 `grep` 和 `tail` 这样的 bash 脚本来决定以何种方式将这些加载到其上下文中。本质上，Agent 的文件夹和文件结构变成了一种形式的[上下文工程](http://anthropic.com/news/context-management)。

我们的电子邮件 Agent 可能会将之前的对话存储在一个名为“Conversations”的文件夹中。这将允许它在被问及之前的对话时搜索这些内容以获取上下文。

![](https://cdn.prod.website-files.com/68a44d4040f98a4adf2207b6/697a4b28db0e40fd93e6387e_image.webp)

### **语义搜索**

[语义搜索](https://www.anthropic.com/news/contextual-retrieval)通常比代理式搜索更快，但准确性较低，更难维护，且透明度较差。它涉及将相关上下文“分块”，将这些块嵌入为向量，然后通过查询这些向量来搜索概念。鉴于其局限性，我们建议从代理式搜索开始，只有在你需要更快的结果或更多变化时才添加语义搜索。

### **子 Agent (Subagents)**

Claude Agent SDK 默认支持子 Agent。[子 Agent](https://docs.claude.com/en/api/agent-sdk/subagents) 有两个主要用途。首先，它们支持并行化：你可以启动多个子 Agent 同时处理不同的任务。其次，它们有助于管理上下文：子 Agent 使用自己隔离的上下文窗口，只将相关信息发送回编排器，而不是它们的完整上下文。这使得它们非常适合需要筛选大量信息但其中大部分都没用的任务。

在设计我们的电子邮件 Agent 时，我们可以给它一个“搜索子 Agent”的能力。电子邮件 Agent 然后可以并行启动多个搜索子 Agent——每个都针对你的电子邮件历史运行不同的查询——并让它们只返回相关的摘录，而不是完整的电子邮件线程。

### **压缩 (Compaction)**

当 Agent 长时间运行时，上下文维护变得至关重要。Claude Agent SDK 的压缩功能会在接近上下文限制时自动总结以前的消息，因此你的 Agent 不会耗尽上下文。这是建立在 Claude Code 的 [compact 斜杠命令](https://docs.claude.com/en/docs/claude-code/sdk/sdk-slash-commands#%2Fcompact-compact-conversation-history)之上的。

## 采取行动

一旦你收集了上下文，你会想给你的 Agent 采取行动的灵活方式。

### **工具 (Tools)**

[工具](https://www.anthropic.com/engineering/writing-tools-for-agents)是你的 Agent 执行的主要构建块。工具在 Claude 的上下文窗口中非常突出，使它们成为 Claude 在决定如何完成任务时会考虑的主要行动。这意味着你应该有意识地设计你的工具，以最大化上下文效率。你可以在我们的博客文章[《为 Agent 编写高效工具——与 Agent 一起》](https://www.anthropic.com/engineering/writing-tools-for-agents)中看到更多最佳实践。

因此，你的工具应该是你希望 Agent 采取的主要行动。在 Claude Agent SDK 中学习如何制作[自定义工具](https://docs.claude.com/en/api/agent-sdk/custom-tools)。

对于我们的电子邮件 Agent，我们可能会定义像“`fetchInbox`”（获取收件箱）或“`searchEmails`”（搜索邮件）这样的工具作为 Agent 的主要、最频繁的行动。

### **Bash 和脚本**

Bash 作为一个通用工具非常有用，可以让 Agent 使用电脑做灵活的工作。

在我们的电子邮件 Agent 中，用户可能在其附件中存储了重要信息。Claude 可以编写代码下载 PDF，将其转换为文本，并对其进行搜索以找到有用的信息，如下图所示：

![](https://cdn.prod.website-files.com/68a44d4040f98a4adf2207b6/697a4b28db0e40fd93e6387b_image.webp)

### **代码生成**

Claude Agent SDK 擅长代码生成——这是有充分理由的。代码精确、可组合且可无限复用，使其成为需要可靠执行复杂操作的 Agent 的理想输出。

在构建 Agent 时，请考虑：哪些任务如果用代码表达会受益？通常，答案会解锁巨大的能力。

例如，我们最近在 [Claude.AI](http://claude.ai/redirect/website.v1.bdb29daa-1a07-41ec-87f6-579dc33634bd) 中推出的[文件创建功能](https://www.anthropic.com/news/create-files)完全依赖于代码生成。Claude 编写 Python 脚本来创建 Excel 电子表格、PowerPoint 演示文稿和 Word 文档，确保了一致的格式和复杂的功能，这是其他方式难以实现的。

在我们的电子邮件 Agent 中，我们可能希望允许用户为入站邮件创建规则。为了实现这一点，我们可以编写在该事件上运行的代码：

![](https://cdn.prod.website-files.com/68a44d4040f98a4adf2207b6/697a4b28db0e40fd93e63878_image.webp)

### **MCPs**

[模型上下文协议](https://modelcontextprotocol.io/) (MCP) 提供了与外部服务的标准化集成，自动处理身份验证和 API 调用。这意味着你可以将你的 Agent 连接到 Slack、GitHub、Google Drive 或 Asana 等工具，而无需编写自定义集成代码或自己管理 OAuth 流程。

对于我们的电子邮件 Agent，我们可能想要 `search Slack messages`（搜索 Slack 消息）以了解团队上下文，或 `check Asana tasks`（检查 Asana 任务）以查看是否已有人被指派处理客户请求。有了 MCP 服务器，这些集成开箱即用——你的 Agent 只需调用像 search_slack_messages 或 get_asana_tasks 这样的工具，MCP 会处理剩下的事情。

不断增长的 [MCP 生态系统](https://github.com/modelcontextprotocol/servers)意味着你可以随着预构建集成的出现快速为你的 Agent 添加新功能，让你专注于 Agent 的行为。

## 验证你的工作

Claude Code SDK 通过评估其工作来完成代理循环。能够检查和改进自己输出的 Agent 从根本上更可靠——它们在错误复合之前捕捉错误，在偏离时自我纠正，并在迭代中变得更好。

关键是给 Claude 具体的方法来评估其工作。以下是我们发现有效的三种方法：

### **定义规则**

最好的反馈形式是为输出提供明确定义的规则，然后解释哪些规则失败了以及为什么。

[代码 Linting](https://stackoverflow.com/questions/8503559/what-is-linting) 是一种极好的基于规则的反馈形式。反馈越深入越好。例如，生成 TypeScript 并对其进行 lint 检查通常比生成纯 JavaScript 更好，因为它为你提供了多层额外的反馈。

在生成电子邮件时，你可能希望 Claude 检查电子邮件地址是否有效（如果无效，抛出错误）以及用户以前是否给他们发送过电子邮件（如果是，抛出警告）。

### **视觉反馈**

当使用 Agent 完成视觉任务时，如 UI 生成或测试，视觉反馈（以屏幕截图或渲染的形式）可能会有所帮助。例如，如果发送带有 HTML 格式的电子邮件，你可以截图生成的电子邮件并将其提供回模型进行视觉验证和迭代改进。然后模型将检查视觉输出是否与请求相符。

例如：

*   **布局** - 元素位置是否正确？间距是否合适？
*   **样式** - 颜色、字体和格式是否按预期显示？
*   **内容层级** - 信息是否以正确的顺序呈现并带有适当的强调？
*   **响应式** - 它看起来是否破损或拥挤？（虽然单个截图的视口信息有限）

使用像 Playwright 这样的 MCP 服务器，你可以自动化这个视觉反馈循环——截取渲染后的 HTML 的屏幕截图，捕获不同的视口大小，甚至测试交互元素——所有这些都在你的 Agent 工作流中。

![Claude 对 Agent 生成的电子邮件正文提供视觉反馈。](https://cdn.prod.website-files.com/68a44d4040f98a4adf2207b6/697a4b28db0e40fd93e63881_image.webp)

来自大型语言模型 (LLM) 的视觉反馈可以为你的 Agent 提供有用的指导。

### **LLM 作为裁判**

你也可以让另一个语言模型根据模糊规则“评判”你的 Agent 的输出。这通常不是一种非常稳健的方法，并且可能会有严重的延迟权衡，但对于任何性能提升都值得付出代价的应用来说，它可能会有所帮助。

我们的电子邮件 Agent 可能会有一个单独的子 Agent 来判断其草稿的语气，看它们是否符合用户以前的信息风格。

## 测试和改进你的 Agent

在你经历了几次 Agent 循环后，我们建议测试你的 Agent，并确保它为任务做好了充分准备。改进 Agent 的最佳方法是仔细查看其输出，尤其是它失败的案例，并设身处地地为它着想：它是否有[合适的工具](https://www.anthropic.com/engineering/writing-tools-for-agents)来完成这项工作？

在评估你的 Agent 是否具备完成工作的能力时，还可以问以下一些其他问题：

*   如果你的 Agent 误解了任务，它可能错过了关键信息。你能否改变搜索 API 的结构，使其更容易找到它需要知道的内容？
*   如果你的 Agent 反复在某项任务上失败，你能在工具调用中添加正式规则来识别和修复失败吗？
*   如果你的 Agent 无法修复其错误，你能给它更有用或更有创意的工具来以不同的方式解决问题吗？
*   如果你的 Agent 的性能随着功能的增加而变化，请根据客户使用情况构建一个具有代表性的测试集来进行程序化评估 (evals)。

##以此开始

Claude Agent SDK 通过让 Claude 访问一台可以编写文件、运行命令并迭代其工作的电脑，使构建自主 Agent 变得更加容易。

以此 Agent 循环为念（收集上下文、采取行动和验证你的工作），你可以构建易于部署和迭代的可靠 Agent。

你可以今天就开始[使用](https://docs.claude.com/en/api/agent-sdk/overview) Claude Agent SDK。对于已经在 SDK 上进行开发的开发人员，我们建议按照[本指南](https://docs.claude.com/en/docs/claude-code/sdk/migration-guide)迁移到最新版本。

## 致谢

由 Thariq Shihipar 撰写，Molly Vorwerck, Suzanne Wang, Alex Isken, Cat Wu, Keir Bradwell, Alexander Bricken & Ashwin Bhat 提供笔记和编辑。

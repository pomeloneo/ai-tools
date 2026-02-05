---
title: "用 Skills 构建 Agent：为 Agent 配备专业化工作能力"
url: "https://claude.com/blog/building-agents-with-skills-equipping-agents-for-specialized-work"
---

# 用 Skills 构建 Agent：为 Agent 配备专业化工作能力

过去的一年里发生了很多变化。MCP 已成为 Agent 连接的标准，并被行业领导者和开发者社区迅速采用。[Claude Code 作为通用编程 Agent 发布](https://www.anthropic.com/news/claude-3-7-sonnet)。我们还发布了 [Claude Agent SDK](https://www.anthropic.com/engineering/building-agents-with-the-claude-agent-sdk)，它现在提供了开箱即用的生产级 Agent。

但在我们构建和部署这些 Agent 的过程中，我们不断遇到同样的差距：Agent 拥有智能和能力，但并不总是具备有效处理实际工作的专业知识。这促使我们[创建了 Agent Skills](https://www.anthropic.com/engineering/equipping-agents-for-the-real-world-with-agent-skills)。Skills 是有组织的文件集合，它们将领域专业知识——工作流、最佳实践、脚本——打包成 Agent 可以访问和应用的格式。它们将一个能干的多面手变成了一个知识渊博的专家。

在这篇文章中，我们将解释为什么我们停止构建专门的 Agent，转而开始构建 Skills，以及这种转变如何改变了我们对扩展 Agent 能力的思考。

## **新范式：你只需要代码**

我们过去认为不同领域的 Agent 看起来会非常不同。一个编程 Agent、一个研究 Agent、一个金融 Agent、一个营销 Agent——似乎每一个都需要自己的工具和脚手架。行业最初拥抱了这种特定领域 Agent 的模式。但随着模型智能的提升和 Agent 能力的进步，我们汇聚到了一种不同的方法上。

我们逐渐不再将代码仅仅视为一个用例，而是将其视为 Agent 进行几乎任何数字工作的接口。Claude Code 是一个编程 Agent，但也是一个碰巧通过代码工作的通用 Agent。

试想一下用 Claude Code 生成财务报告。它可以调用 API 进行研究，在文件系统中存储数据，用 Python 进行分析，并综合见解。所有这些都通过代码发生。脚手架变得像 bash 和文件系统一样简单。

但通用能力并不等同于专业知识。当我们开始使用 Claude Code 进行实际工作时，差距出现了。

## **缺失的一环：领域专业知识**

你想让谁来报税：一个从基本原理出发解决问题的数学天才，还是一个已经提交过数千份申报表的经验丰富的税务专业人士？大多数人会选择税务专业人士。不是因为他们更聪明，而是因为他们拥有正确的专业知识。

今天的 Agent 就像那个数学天才：在推理新情况方面才华横溢，但往往缺乏经验丰富的专业人士积累的专业知识。在适当的指导下，它们可以做惊人的事情。然而，它们经常缺少重要的背景信息，无法轻易吸收你组织的专业知识，也不会自动从重复的任务中学习。

Skills 通过将领域专业知识打包成 Agent 可以逐步访问和应用的格式来弥补这一差距。

## **什么是 Agent Skills？**

Skills 为 Agent 打包了领域专业知识和过程性知识。

```javascript
anthropic_brand/
├── SKILL.md
├── docs.md
├── slide-decks.md
└── apply_template.py
```

Skills 的简单性是故意的。文件是一种通用的原语，可以与你已有的东西一起工作。你可以用 Git 对它们进行版本控制，将它们存储在 Google Drive 中，并与你的团队共享。这种简单性也意味着 Skills 的创建并不局限于工程师。产品经理、分析师和领域专家已经在构建 Skills 来编纂他们的工作流。

## **渐进式披露**

Skills 可以包含大量信息。为了保护上下文窗口并使 Skills 可组合，它们使用渐进式披露：在运行时，只有元数据（来自 YAML frontmatter 的名称和描述）会显示给模型。

```javascript
---
name: Anthropic Brand Style Guidelines
description: Anthropic's official brand colors and typography…
---
```

如果 Claude 确定需要某项 Skill，它会读取完整的 SKILL.md 文件。对于更多的细节，Skills 可以包含一个 references/ 目录，仅在按需时加载支持文档。

这种三层方法意味着你可以为 Agent 配备数百种 Skills，而不会淹没它的上下文窗口——元数据使用约 50 个 token，完整的 SKILL.md 文件约 500 个 token，参考文件 2,000+ 个 token 且仅在特别需要时使用。

## **Skills 可以包含脚本作为工具**

传统工具有问题：有些指令写得很差，模型并不总是能修改或扩展它们，而且它们经常使上下文窗口膨胀。另一方面，代码是自文档化的、可修改的，并且不需要时刻在上下文中。

这是一个真实的例子：我们一直看到 Claude 编写相同的脚本来将 Anthropic 样式应用于幻灯片。所以我们让 Claude 将其保存为自己的工具：

```javascript
# anthropic/brand_styling/apply_template.py
import sys
from pptx import Presentation

if len(sys.argv) != 2:
    print("USAGE: apply_template.py <pptx>")
    sys.exit(1)

prs = Presentation(sys.argv[1])
for slide in prs.slides:
    ...
```

slide-decks.md 中的相应文档只是引用了这个脚本：

```javascript
## Anthropic Slide Decks
- Intro/outro slides
  - background color: `#141413`
  - foreground color: oat
- Section slides:
  - background color: `#da7857`
  - foreground color: `#141413`

Use the `./apply_template.py` script to update a pptx file in-place.
```

## **Skills 生态系统**

Skills 生态系统出现得很快，到目前为止，我们已经看到构建了三种主要类型的 Skills：

### **基础 Skills**

这些提供了每个人都需要的核心能力：处理文档、电子表格、演示文稿等。它们编码了文档生成和操作的最佳实践。你可以通过探索我们[公共仓库中的基础 Skills](https://github.com/anthropics/skills/tree/main/skills/public) 来了解这在实践中是什么样子的。

### **合作伙伴 Skills**

随着 Skills 标准化了 Agent 与专业能力的交互方式，公司正在构建 Skills 以使其服务可被 Agent 访问。[K-Dense](https://github.com/K-Dense-AI/claude-scientific-skills)、[Browserbase](https://github.com/browserbase/agent-browse)、[Notion](https://www.notion.so/notiondevs/Notion-Skills-for-Claude-28da4445d27180c7af1df7d8615723d0) 和 [许多其他公司](https://claude.com/blog/organization-skills-and-directory) 正在创建直接集成其服务的 Skills，在特定领域扩展 Claude 的能力，同时保持 Skills 格式的简单性。

### **企业 Skills**

组织构建专有的 Skills，编码其内部流程和领域专业知识。Skills 有助于捕捉特定的工作流、合规性要求和机构知识，使 Agent 对企业工作有用。

## **我们看到的趋势**

随着 Skills 采用率的增长，几个正在显现的模式指向了这个范式可能的发展方向。这些趋势塑造了我们对 Skill 设计的思考以及我们为支持 Skill 开发者而构建的工具。

### **日益增加的复杂性**

早期的 Skills 是简单的文档引用。现在我们看到了复杂的多步骤工作流，它们协调数据检索、复杂计算以及跨多个工具的格式化输出。

*   **简单**：“状态报告撰写者”（~100 行）- 模板和格式化
*   **中等**：“财务模型构建者”（~800 行）- 数据检索，用 Python 进行 Excel 建模
*   **复杂**：“RNA 测序管道”（2,500+ 行）- 协调 HISAT2、StringTie、DESeq2 分析

### **Skills 和 MCP**

[Skills 和 MCP 服务器自然地协同工作](https://claude.com/blog/extending-claude-capabilities-with-skills-mcp-servers)。一个竞争分析 Skill 可能会协调网络搜索、通过 MCP 访问的内部数据库、Slack 消息历史记录和 Notion 页面，以综合出一份全面的报告。

### **非开发者采用**

Skill 的创建正在扩展到工程师之外，涵盖各个学科的产品经理、分析师和领域专家。他们可以使用 skill-creator 工具在 30 分钟内创建并测试他们的第一个 Skill，该工具会交互式地指导他们完成整个过程。我们正在努力使 Skill 创建更加容易获得，通过改进的工具和模板，让任何人都能捕捉和分享专业知识。

## **完整的架构**

综上所述，新兴的 Agent 架构看起来像是以下组合：

1.  **Agent 循环**：决定下一步做什么的核心推理系统
2.  **Agent 运行时**：执行环境（代码、文件系统）
3.  **MCP 服务器**：连接外部工具和数据源
4.  **Skills 库**：领域专业知识和过程性知识

每一层都有明确的目的：循环负责推理，运行时负责执行，MCP 负责连接，Skills 负责指导。这种分离使系统易于理解，并允许每个部分独立演进。

试想一下当你向这个架构添加单个 Skill 时会发生什么。[前端设计 Skill](https://github.com/anthropics/claude-code/tree/main/plugins/frontend-design) 会立即改变 Claude 的前端能力。它提供了关于排版、色彩理论和动画的专业指导，仅在构建 Web 界面时激活。渐进式披露意味着它只在相关时加载。添加新能力非常直截了当。

## **将 Skills 部署到新垂直领域**

这种配备了 MCP 服务器和 Skills 的通用 Agent 的新兴模式已经在帮助我们将 Claude 部署到新的垂直领域。

### **金融服务**

在推出 Skills 后不久，我们通过使 Claude 对金融专业人士更有用的 Skills 增强了 [金融服务领域的 Claude](https://www.anthropic.com/news/claude-for-financial-services)：

*   **DCF 模型构建者**：构建具有正确 WACC 计算和敏感性分析的贴现现金流模型
*   **可比公司分析**：生成具有相关倍数和基准的可比公司表格
*   **收益分析**：处理季度结果并创建投资更新报告
*   **覆盖启动**：构建包含财务模型的综合研究报告
*   **尽职调查**：使用标准化框架构建并购分析
*   **推介材料**：按照行业标准创建客户演示文稿

### **医疗保健与生命科学**

我们也通过使 Claude 对研究人员、临床医生和医疗保健开发人员更有用的 Skills 增强了我们的 [医疗保健和生命科学产品](https://www.anthropic.com/news/healthcare-life-sciences)：

*   **生物信息学捆绑包**：用于 scVI-tools 和 Nextflow 部署的 Skills，对于管理基因组管道和单细胞 RNA 测序至关重要
*   **临床试验方案生成**：加速临床研究的方案开发
*   **科学问题选择**：帮助研究人员识别和构建有影响力的研究问题
*   **FHIR 开发**：帮助开发人员编写更准确的医疗数据互操作性代码，以更少的错误更快地连接医疗系统
*   **预先授权审查**：通过交叉引用覆盖范围要求、临床指南和患者记录，减少行政负担并加速患者获得所需护理

## **标准化 Agent Skills**

为了实现这一愿景，我们将 [Agent Skills](https://agentskills.io) 发布为开放标准。像 MCP 一样，我们相信 Skills 应该是跨工具和平台可移植的。同一个 Skill 无论是在使用 Claude 还是其他 AI 平台时都应该能工作。我们一直在与生态系统的成员合作制定标准，并很高兴看到早期的采用。

当有人第一次开始使用 AI Agent 时，它应该已经知道你和你的团队关心什么，因为 Skills 捕捉并转移了这些专业知识。随着这个生态系统的增长，社区中其他人构建的 Skill 可以使你的 Agent 更有用、更可靠和更具能力——无论他们使用的是哪个 AI 平台。

## **开始使用**

我们正在汇聚到一个通用 Agent 的架构上，而 Skills 提供了一种发布和共享新能力的范式。真正的价值来自于我们共同建立的集体知识库：捕捉专业知识，将其跨团队转移，并使每个 Agent 都比上一个更有能力。

**资源：**

*   [不要构建 Agent，而是构建 Skills](https://youtu.be/CEvIs9y1uog?si=yhYQH-ZTX0DfNdtm) (YouTube 视频)
*   [Skills 文档](https://platform.claude.com/docs/en/agents-and-tools/agent-skills/overview)
*   [GitHub 仓库](https://github.com/anthropics/skills)
*   [Skills 食谱](https://platform.claude.com/cookbook/skills-notebooks-01-skills-introduction)
*   [在 Claude 中使用 Skills](https://support.claude.com/en/articles/12512180-using-skills-in-claude)
*   [Skills API 快速入门](https://platform.claude.com/docs/en/build-with-claude/skills-guide)
*   [Skills 最佳实践文档](https://platform.claude.com/docs/en/agents-and-tools/agent-skills/best-practices)

### **致谢：**

Barry Zhang, Mahesh Murag, Keith Lazuka, Ryan Whitehead

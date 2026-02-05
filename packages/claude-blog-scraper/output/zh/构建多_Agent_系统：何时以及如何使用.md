---
title: "构建多 Agent 系统：何时以及如何使用"
url: "https://claude.com/blog/building-multi-agent-systems-when-and-how-to-use-them"
---

# 构建多 Agent 系统：何时以及如何使用

多 Agent 系统是一种架构，其中多个 LLM 实例在独立的对话上下文中运行，并通过代码进行协调。存在多种协调模式（Agent 蜂群、基于能力的系统和消息总线架构），但本文重点介绍**编排器-子 Agent（Orchestrator-Subagent）**模式：一种分层模型，其中主 Agent（Lead Agent）生成并管理专门用于特定子任务的子 Agent。这种模式提供了一个简单的协调模型，对于刚接触多 Agent 系统的团队来说是一个很好的起点。我们将在下一篇文章中详细探讨其他模式。

今天，多 Agent 系统通常应用于单个 Agent 表现不佳的情况，尽管随着模型的改进，这种权衡在不断演变。在 Anthropic，我们看到有些团队投入数月时间构建复杂的多 Agent 架构，结果却发现通过改进单个 Agent 的提示（prompting）也能达到相同的效果。

在构建多 Agent 系统并与将其部署到生产环境的团队合作后，我们确定了三种多 Agent 始终优于单 Agent 的情况：**当上下文污染降低性能时**、**当任务可以并行运行时**，以及**当专业化提高工具选择或任务专注度时**。在这些情况之外，协调成本通常超过收益。

在这篇文章中，我们将分享如何识别单 Agent 的局限性，确定多 Agent 系统表现出色的三种场景，并避免常见的实施错误。

## 从单 Agent 开始的理由

一个设计良好且拥有适当工具的单 Agent 可以完成比许多开发人员预期的多得多的任务。

多 Agent 系统会引入开销。每一个额外的 Agent 都代表着另一个潜在的故障点、另一组需要维护的提示，以及另一个意外行为的来源。

我们观察到团队构建了复杂的多 Agent 系统，分别为规划、执行、审查和迭代设置了单独的 Agent，结果却发现它们在每次交接时都会丢失上下文，并且花费在协调上的 token 比执行任务的还多。在我们的测试中，对于相同的任务，多 Agent 实现通常比单 Agent 方法多使用 3-10 倍的 token。这种开销源于在 Agent 之间复制上下文、Agent 之间的协调消息以及为交接总结结果。

## 多 Agent 系统的决策框架

当多 Agent 架构能够解决单 Agent 无法克服的特定约束时，它们就能提供价值。这意味着多 Agent 架构应保留用于那些能够提供明显收益以证明额外成本合理的案例。

以下模式代表了我们在这些投资上始终观察到正回报的情况。

### 上下文保护 (Context protection)

大型语言模型具有有限的上下文窗口，随着上下文的增长，响应质量可能会下降。当一个 Agent 的上下文积累了来自一个子任务的信息，而这些信息与后续子任务无关时，就会发生上下文污染。子 Agent 提供隔离，每个子 Agent 都在专注于其特定任务的干净上下文中运行。

考虑一个客户支持 Agent，它需要在诊断技术问题时检索订单历史记录。如果每次订单查询都会向上下文添加数千个 token，那么 Agent 推理技术问题的能力就会下降。

**单 Agent 方法：**

```javascript
# 单 Agent 在上下文中积累所有内容
conversation_history = [
    {"role": "user", "content": "My order #12345 isn't working"},
    {"role": "assistant", "content": "Let me check your order..."},
    # 工具结果添加了 2000+ token 的订单历史
    {"role": "user", "content": "... (order details, past purchases, shipping info) ..."},
    {"role": "assistant", "content": "Now let me diagnose the technical issue..."},
    # 上下文现在被 Agent 不需要订单详情污染了
]
```

Agent 必须在维持上下文中 2000+ token 不相关订单历史的同时推理技术问题，这会分散注意力并降低响应质量。

**多 Agent 方法：**

```javascript
from anthropic import Anthropic

client = Anthropic()

class OrderLookupAgent:
    def lookup_order(self, order_id: str) -> dict:
        # 拥有自己上下文的独立 Agent
        messages = [
            {"role": "user", "content": f"Get essential details for order {order_id}"}
        ]
        response = client.messages.create(
            model="claude-sonnet-4-5",
            max_tokens=1024,
            messages=messages,
            tools=[get_order_details_tool]
        )
        # 仅返回必要信息
        return extract_summary(response)

class SupportAgent:
    def handle_issue(self, user_message: str):
        if needs_order_info(user_message):
            order_id = extract_order_id(user_message)
            # 仅获取所需内容，而非完整历史
            order_summary = OrderLookupAgent().lookup_order(order_id)
            # 注入紧凑的摘要，而非完整上下文
            context = f"Order {order_id}: {order_summary['status']}, purchased {order_summary['date']}"
        
        # 主 Agent 上下文保持干净
        messages = [
            {"role": "user", "content": f"{context}\n\nUser issue: {user_message}"}
        ]
        response = client.messages.create(
            model="claude-sonnet-4-5",
            max_tokens=2048,
            messages=messages
        )
        return response
```

订单查询 Agent 处理完整的订单历史并提取摘要。主 Agent 仅接收它实际需要的 50-100 个 token，保持上下文专注。

上下文隔离在以下情况下最有效：子任务产生大量上下文（超过 1000 个 token）但其中大部分信息与主任务无关；子任务定义明确，有清晰的信息提取标准；以及需要在使用前进行过滤的查找或检索操作。

### 并行化 (Parallelization)

并行运行多个 Agent 允许你探索比单 Agent 能覆盖的更大的搜索空间。这种模式在搜索和研究任务中被证明特别有价值。

我们的 [Research 功能](https://www.anthropic.com/engineering/multi-agent-research-system)就使用了这种方法。一个主 Agent 分析查询并生成多个子 Agent 来并行调查不同的方面。每个子 Agent 独立搜索，然后返回提炼出的发现。多 Agent 搜索通过允许在更大的信息空间中进行探索，显示出比单 Agent 方法更高的准确性。

核心实现将问题分解为独立的方面，并发运行子 Agent，然后综合结果。

```javascript
import asyncio
from anthropic import AsyncAnthropic

client = AsyncAnthropic()

async def research_topic(query: str) -> dict:
    # 主 Agent 将查询分解为研究方面
    facets = await lead_agent.decompose_query(query)
    
    # 生成子 Agent 并行研究每个方面
    tasks = [
        research_subagent(facet) 
        for facet in facets
    ]
    results = await asyncio.gather(*tasks)
    
    # 主 Agent 综合发现
    return await lead_agent.synthesize(results)

async def research_subagent(facet: str) -> dict:
    """每个子 Agent 都有自己的上下文窗口"""
    messages = [
        {"role": "user", "content": f"Research: {facet}"}
    ]
    response = await client.messages.create(
        model="claude-sonnet-4-5",
        max_tokens=4096,
        messages=messages,
        tools=[web_search, read_document]
    )
    return extract_findings(response)
```

这种覆盖范围的提升是有代价的。对于相同的任务，多 Agent 系统通常比单 Agent 方法多消耗 3 到 10 倍的 token。这是因为每个 Agent 都需要自己的上下文，Agent 必须交换消息进行协调，而且结果在 Agent 之间传递时必须进行总结。虽然并行化有助于减少总执行时间（与按顺序运行所有工作相比），但由于总计算量的急剧增加，多 Agent 系统的总体耗时通常比单 Agent 系统更长。

并行化的主要好处是**彻底性**，而不是速度。当你需要在大型信息空间中搜索或调查复杂问题的许多角度时，并行 Agent 可以比受限于上下文限制的单 Agent 覆盖更多的领域。权衡是更高的 token 使用量，通常还有更长的总执行时间，以换取更全面的结果。

### 专业化 (Specialization)

不同的任务有时受益于不同的工具集、系统提示或专业领域。与其为一个 Agent 提供访问数十种工具的权限，不如使用具有与其职责相匹配的专注工具集的专业 Agent，这样可以提高可靠性。

#### **工具集专业化**

当一个 Agent 可以访问太多工具时，性能会下降。三个信号表明工具专业化会有所帮助：

1.  **数量。** 一个拥有太多工具（通常 20+）的 Agent 难以选择合适的工具。
2.  **领域混淆。** 当工具跨越多个不相关的领域（数据库操作、API 调用、文件系统操作）时，Agent 会混淆哪个领域适用于给定的任务。
3.  **性能下降。** 添加新工具会降低现有任务的性能，表明 Agent 已达到其工具管理能力的极限。

#### **系统提示专业化**

不同的任务有时需要不同的角色、约束或指令，这些在组合时会发生冲突。客户支持 Agent 需要富有同理心和耐心；代码审查 Agent 需要精确和批判性。合规检查 Agent 需要严格遵守规则；头脑风暴 Agent 需要创造性的灵活性。当单 Agent 必须在冲突的行为模式之间切换时，将其分离为具有定制系统提示的专业 Agent 会产生更一致的结果。

#### **领域专业知识专业化**

有些任务受益于深厚的领域上下文，这会压倒通用的 Agent。法律分析 Agent 可能需要关于判例法和监管框架的广泛上下文。医学研究 Agent 可能需要关于临床试验方法的专业知识。与其将所有领域上下文加载到单 Agent 中，不如让专业 Agent 携带与其特定职责相关的专注专业知识。

**示例：多平台集成。** 考虑一个集成系统，其中 Agent 需要跨 CRM、营销自动化和消息平台工作。每个平台有 10-15 个相关的 API 端点。一个拥有 40+ 工具的单 Agent 通常难以正确选择，混淆跨平台的类似操作。拆分为具有专注工具集和定制提示的专业 Agent 可以解决选择错误。

```javascript
from anthropic import Anthropic

client = Anthropic()

# 具有专注工具集和定制提示的专业 Agent
class CRMAgent:
    """处理客户关系管理操作"""
    system_prompt = """You are a CRM specialist. You manage contacts, 
    opportunities, and account records. Always verify record ownership 
    before updates and maintain data integrity across related records."""
    tools = [
        crm_get_contacts,
        crm_create_opportunity,
        # 8-10 个 CRM 特定工具
    ]

class MarketingAgent:
    """处理营销自动化操作"""
    system_prompt = """You are a marketing automation specialist. You 
    manage campaigns, lead scoring, and email sequences. Prioritize 
    data hygiene and respect contact preferences."""
    tools = [
        marketing_get_campaigns,
        marketing_create_lead,
        # 8-10 个营销特定工具
    ]

class OrchestratorAgent:
    """将请求路由到专业 Agent"""
    def execute(self, user_request: str):
        response = client.messages.create(
            model="claude-sonnet-4-5",
            max_tokens=1024,
            system="""You coordinate platform integrations. Route requests to the appropriate specialist:
- CRM: Contact records, opportunities, accounts, sales pipeline
- Marketing: Campaigns, lead nurturing, email sequences, scoring
- Messaging: Notifications, alerts, team communication""",
            messages=[
                {"role": "user", "content": user_request}
            ],
            tools=[delegate_to_crm, delegate_to_marketing, delegate_to_messaging]
        )
        return response
```

这种模式反映了有效的专业协作，即拥有与其角色相匹配工具的专家比试图在所有领域保持专业知识的通才协作得更有效。然而，专业化引入了路由复杂性。编排器必须正确分类请求并委托给正确的 Agent，错误的路由会导致糟糕的结果。维护多个专业 Agent 也会增加提示维护的开销。当领域可以清晰分离且路由决策不模棱两可时，专业化效果最好。

## 超越单 Agent 架构

除了通用框架之外，某些具体信号表明单 Agent 模式已被超越：

**接近上下文限制。** 如果一个 Agent 经常使用大量上下文并且性能正在下降，那么上下文压力可能是瓶颈。请注意，上下文管理的最新进展（[如压缩](https://platform.claude.com/cookbook/tool-use-automatic-context-compaction)）正在减少这一限制，允许单 Agent 在更长的时间范围内保持有效的记忆。

**管理大量工具。** 当一个 Agent 拥有 15-20+ 工具时，模型会花费大量的上下文和注意力来理解其选项。在采用多 Agent 架构之前，请考虑使用 [Tool Search Tool](https://docs.anthropic.com/en/docs/agents-and-tools/tool-use/tool-search-tool)，它允许 Claude 按需动态发现工具，而不是预先加载所有定义。这可以[减少高达 85% 的 token 使用量](https://www.anthropic.com/engineering/advanced-tool-use)，同时提高工具选择的准确性。

**可并行化的子任务。** 当任务自然分解为独立的部分（跨多个来源的研究，多个组件的测试）时，并行子 Agent 可以提供大幅的速度提升。

随着模型的改进，这些阈值将会发生变化。目前的限制代表了实践指南，而不是根本性的约束。

## 以上下文为中心的分解

在采用多 Agent 架构时，最重要的设计决策是如何在 Agent 之间分配工作。我们观察到团队经常错误地做出这个选择，导致协调开销抵消了多 Agent 设计的好处。

关键的见解是在分解工作时采用**以上下文为中心**的视图，而不是以问题为中心的视图。

**以问题为中心的分解（通常适得其反）。** 按工作类型划分（一个 Agent 写功能，另一个写测试，第三个审查代码）会造成持续的协调开销。每次交接都会丢失上下文。编写测试的 Agent 缺乏为什么做出某些实现决策的知识，代码审查者缺乏探索和迭代的上下文。

**以上下文为中心的分解（通常有效）。** 按上下文边界划分意味着处理功能的 Agent 也应该处理其测试，因为它已经拥有必要的上下文。只有当上下文可以真正隔离时，工作才应该被拆分。

这一原则源于观察多 Agent 系统的故障模式。当 Agent 按问题类型拆分时，它们会玩“传话游戏”，每次交接都会降低信息的保真度。在一个按软件开发角色（规划者、实现者、测试者、审查者）专业化的实验中，子 Agent 在协调上花费的 token 比在实际工作上花费的还多。

**有效的分解边界包括：**

*   **独立的研究路径。** 调查“亚洲市场趋势”与“欧洲市场趋势”可以并行进行，没有共享上下文。
*   **具有清晰接口的独立组件。** 有了定义良好的 API 契约，前端和后端工作可以并行进行。
*   **黑盒验证。** 一个只需要运行测试并报告结果的验证器不需要实现上下文。

**有问题的分解边界包括：**

*   **同一工作的顺序阶段。** 同一功能的规划、实施和测试共享太多上下文。
*   **紧密耦合的组件。** 需要不断反复的组件属于同一个 Agent。
*   **需要共享状态的工作。** 需要频繁同步理解的 Agent 应该保持在一起。

## 验证子 Agent 模式

在各个领域始终有效的一种多 Agent 模式是**验证子 Agent**。这是一个专门的 Agent，其唯一职责是测试或验证主 Agent 的工作。

值得注意的是，更强大的编排器模型（如 Claude Opus 4.5）越来越能够直接评估子 Agent 的工作，而无需单独的验证步骤。然而，在使用能力较弱的编排器时、当验证需要专门工具时，或者当你想要在工作流中强制执行明确的验证检查点时，验证子 Agent 仍然很有价值。

验证子 Agent 之所以成功，是因为它们避开了传话游戏的问题。验证本质上需要最少的上下文转移，因此验证者可以对系统进行黑盒测试，而无需了解它是如何构建的完整历史。

### 实现

主 Agent 完成一个工作单元。在继续之前，它生成一个验证子 Agent，并提供要验证的工件、明确的成功标准以及执行验证的工具。

验证者不需要理解工件为什么是这样构建的。它只需要确定工件是否符合指定的标准。

```javascript
from anthropic import Anthropic

client = Anthropic()

class CodingAgent:
    def implement_feature(self, requirements: str) -> dict:
        """主 Agent 实现功能"""
        messages = [
            {"role": "user", "content": f"Implement: {requirements}"}
        ]
        response = client.messages.create(
            model="claude-sonnet-4-5",
            max_tokens=4096,
            messages=messages,
            tools=[read_file, write_file, list_directory]
        )
        return {
            "code": response.content,
            "files_changed": extract_files(response)
        }

class VerificationAgent:
    def verify_implementation(self, requirements: str, files_changed: list) -> dict:
        """独立 Agent 验证工作"""
        messages = [
            {"role": "user", "content": f"""
Requirements: {requirements}
Files changed: {files_changed}

Run the test suite and verify:
1. All existing tests pass
2. New functionality works as specified
3. No obvious errors or security issues

You MUST run the complete test suite before marking as passed.
Do not mark as passing after only running a few tests.
Run: pytest --verbose
Only mark as PASSED if ALL tests pass with no failures.
"""}
        ]
        response = client.messages.create(
            model="claude-sonnet-4-5",
            max_tokens=4096,
            messages=messages,
            tools=[run_tests, execute_code, read_file]
        )
        return {
            "passed": extract_pass_fail(response),
            "issues": extract_issues(response)
        }

def implement_with_verification(requirements: str, max_attempts: int = 3):
    for attempt in range(max_attempts):
        result = CodingAgent().implement_feature(requirements)
        verification = VerificationAgent().verify_implementation(
            requirements,
            result['files_changed']
        )
        
        if verification['passed']:
            return result
        
        requirements += f"\n\nPrevious attempt failed: {verification['issues']}"
    
    raise Exception(f"Failed verification after {max_attempts} attempts")
```

### 应用

验证子 Agent 在以下方面有效：

*   **质量保证。** 运行测试套件、lint 代码、根据架构验证输出。
*   **合规检查。** 验证文件是否符合政策要求，根据规则检查输出。
*   **输出验证。** 在交付前确认生成的内容符合规范。
*   **事实核查。** 让单独的 Agent 验证生成内容中的声明或引用。

### 早期胜利问题

验证子 Agent 最显著的故障模式是在没有彻底测试的情况下将输出标记为通过。验证者运行一两个测试，观察它们通过，然后宣布成功。

缓解策略包括：

*   **具体标准。** 指定“运行完整的测试套件并报告所有失败”，而不是“确保它工作”。
*   **全面检查。** 要求验证者测试多种场景和边缘情况。
*   **负面测试。** 指示验证者尝试应该失败的输入，并确认它们确实失败了。
*   **明确指令。** “在标记为通过之前，你必须运行完整的测试套件”这一指令至关重要。如果没有对全面验证的明确要求，验证 Agent 会走捷径。

## 前进

多 Agent 系统很强大，但并非普遍适用。在增加多个协调 Agent 的复杂性之前，请确认：

1.  **存在真正的约束**，多 Agent 可以解决这些问题，例如上下文限制、并行化机会或对专业化的需求。
2.  **分解遵循上下文，而非问题类型。** 根据所需的上下文对工作进行分组，而不是根据工作类型。
3.  **存在明确的验证点**，子 Agent 可以在不需要完整上下文的情况下验证工作。

我们的建议？从最简单有效的方法开始，只有在证据支持时才增加复杂性。

_这是关于多 Agent 系统系列文章的第一篇。有关单 Agent 模式的更多信息，请参阅_[_构建高效 Agent_](https://www.anthropic.com/engineering/building-effective-agents)_。有关上下文管理策略，请参阅_[_AI Agent 的有效上下文工程_](https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents)_。有关我们如何构建多 Agent 研究系统的深入探讨，请参阅_[_我们如何构建多 Agent 研究系统_](https://www.anthropic.com/engineering/multi-agent-research-system)_。_

## 致谢

由 Cara Phillips 撰写，Paul Chen, Andy Schumeister, Brad Abrams, and Theo Chu 做出贡献。

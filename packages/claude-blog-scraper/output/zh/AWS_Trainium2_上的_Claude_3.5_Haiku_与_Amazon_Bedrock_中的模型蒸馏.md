---
title: "AWS Trainium2 上的 Claude 3.5 Haiku 与 Amazon Bedrock 中的模型蒸馏"
url: "https://claude.com/blog/trainium2-and-distillation"
---

# AWS Trainium2 上的 Claude 3.5 Haiku 与 Amazon Bedrock 中的模型蒸馏

作为我们与 AWS [扩大合作](https://www.anthropic.com/news/anthropic-amazon-trainium)的一部分，我们已经开始优化 Claude 模型，以便在他们最先进的 AI 芯片 [AWS Trainium2](https://aws.amazon.com/ai/machine-learning/trainium/) 上运行。

为了预览 Trainium2 的潜力，Claude 3.5 Haiku 现在在 [Amazon Bedrock](https://aws.amazon.com/bedrock/claude/) 中支持延迟优化推理，使模型在不牺牲准确性的情况下显著加快速度。

我们还在 Amazon Bedrock 中添加了对模型蒸馏的支持，将更大型 Claude 模型的智能带给我们更快、更具成本效益的模型。

### Trainium2 上的下一代模型

我们正在与 AWS 合作构建 Project Rainier——一个由数十万个 Trainium2 芯片组成的 Trn2 UltraServers 的 EC2 UltraCluster。该集群将提供比用于训练我们当前一代领先 AI 模型的计算能力（以 exaflops 计）高出五倍以上的算力。

Trainium2 使我们能够在 Amazon Bedrock 中提供更快的模型，首先是 Claude 3.5 Haiku，它现在支持公开预览版的延迟优化推理。通过启用延迟优化，Claude 3.5 Haiku 可以提供高达 60% 的推理速度提升——使其成为从代码补全到实时内容审核和聊天机器人等用例的理想选择。

这个由 Trainium2 驱动的更快版本的 Claude 3.5 Haiku 可通过[跨区域推理](https://docs.aws.amazon.com/bedrock/latest/userguide/cross-region-inference.html)在美东（俄亥俄）区域使用，价格为每百万输入 token 1 美元，每百万输出 token 5 美元。

### Amazon Bedrock 模型蒸馏

我们还使客户能够从 Claude 3 Haiku（我们需要上一代最具成本效益的模型）获得前沿性能。通过蒸馏，Claude 3 Haiku 现在可以实现显著的性能提升，在特定任务上达到类似 Claude 3.5 Sonnet 的准确性——同时保持我们最具成本效益模型的价格和速度。

这种技术将知识从“教师”（Claude 3.5 Sonnet）转移到“学生”（Claude 3 Haiku），使客户能够以一小部分的成本运行复杂的任务，如检索增强生成（RAG）和数据分析。

与传统的微调不同（微调需要开发人员手动制作训练示例并持续调整参数），Amazon Bedrock 模型蒸馏通过以下方式自动化整个过程：

1.  从 Claude 3.5 Sonnet **生成合成训练数据**
2.  **训练和评估** Claude 3 Haiku
3.  **托管**最终的蒸馏模型以进行推理

Amazon Bedrock 模型蒸馏会自动应用不同的数据合成方法——从生成类似的提示到根据你的示例提示-响应对创建新的高质量响应。

Amazon Bedrock 中的 Claude 3 Haiku 蒸馏现已推出预览版。在 AWS [发布博客](https://aws.amazon.com/blogs/aws/build-faster-more-cost-efficient-highly-accurate-models-with-amazon-bedrock-model-distillation-preview/)和[文档](https://docs.aws.amazon.com/bedrock/latest/userguide/model-distillation.html)中了解更多信息。

### Claude 3.5 Haiku 价格下调

除了在 Trainium2 上提供更快的版本外，客户还可以继续在 [Anthropic API](https://console.anthropic.com/workbench)、[Amazon Bedrock](https://aws.amazon.com/bedrock/claude/) 和 [Google Cloud 的 Vertex AI](https://cloud.google.com/vertex-ai/generative-ai/docs/partner-models/use-claude) 上访问 [Claude 3.5 Haiku](https://www.anthropic.com/claude/haiku)。

为了使该模型在更广泛的用例中更加易于使用，我们将所有平台上 Claude 3.5 Haiku 的价格降低至每百万输入 token 0.80 美元，每百万输出 token 4 美元。

### 开始使用

从今天开始，模型蒸馏和更快的 Claude 3.5 Haiku 在 Amazon Bedrock 中提供预览版。对于寻求价格、性能和速度最佳平衡的开发人员，你们现在有了更多的 Claude 模型选择：

*   具有延迟优化的 Claude 3.5 Haiku，由 Trainium2 驱动，适用于通用用例
*   Claude 3 Haiku，经过蒸馏具有前沿性能，适用于大批量、重复性用例

要开始使用，请访问 [Amazon Bedrock 控制台](https://signin.aws.amazon.com/signup?request_type=register)。我们迫不及待地想看到你们构建的产品。

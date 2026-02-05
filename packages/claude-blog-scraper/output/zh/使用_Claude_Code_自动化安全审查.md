---
title: "使用 Claude Code 自动化安全审查"
url: "https://claude.com/blog/automate-security-reviews-with-claude-code"
---

# 使用 Claude Code 自动化安全审查

今天，我们在 Claude Code 中引入了自动化安全审查功能。通过我们的 GitHub Actions 集成和新的 `/security-review` 命令，开发者可以轻松要求 Claude 识别安全隐患——然后让它修复这些问题。

随着开发者越来越依赖 AI 来更快地发布产品和构建更复杂的系统，确保代码安全变得更加关键。这些新功能让你可以将安全审查集成到现有的工作流程中，帮助你在漏洞到达生产环境之前捕捉它们。

### 在终端中审查代码漏洞

新的 `/security-review` 命令允许你在提交代码之前从终端运行即时的安全分析。在 Claude Code 中运行该命令，Claude 将搜索你的代码库以查找潜在漏洞，并对发现的任何问题提供详细解释。

此命令使用专门的安全提示词，检查常见的漏洞模式，包括：

*   SQL 注入风险
*   跨站脚本 (XSS) 漏洞
*   身份验证和授权缺陷
*   不安全的数据处理
*   依赖项漏洞

你还可以要求 Claude Code 在识别出问题后实施修复。这使安全审查保留在你的内部开发循环中，在问题最容易修复的时候尽早捕捉它们。

### 为新的拉取请求 (Pull Requests) 自动化安全审查

Claude Code 的新 GitHub Action 将安全审查更进一步，它会在每个拉取请求打开时自动对其进行分析。配置后，该 Action 会：

*   在新拉取请求上自动触发
*   审查代码更改中的安全漏洞
*   应用可定制的规则来过滤掉误报和已知问题
*   在 PR 中对发现的任何疑虑发表行内评论，包括修复建议

这在整个团队中创建了一致的安全审查流程，确保没有任何代码在未经基准安全审查的情况下到达生产环境。该 Action 与你现有的 CI/CD 管道集成，并可根据你团队的安全策略进行定制。

### 提高 Anthropic 的产品安全性

我们自己正在使用这些功能来帮助保护我们团队发布到生产环境的代码，包括 Claude Code 本身。自从设置了 GitHub Action 以来，它已经捕捉到了我们自己代码中的安全漏洞，并阻止了它们的发布。

例如，上周，我们的团队为一个内部工具构建了一项新功能，该功能依赖于启动一个旨在接受本地连接的本地 HTTP 服务器。GitHub Action 识别出了一个可通过 DNS 重绑定利用的远程代码执行漏洞，并在 PR 合并之前就将其修复了。

在另一个案例中，一名工程师构建了一个代理系统以实现内部凭据的安全管理。GitHub Action 自动标记出该代理容易受到 SSRF 攻击，我们迅速修复了这个问题。

### 开始使用

这两个功能现在都可供所有 Claude Code 用户使用。要开始使用自动化安全审查：

*   **对于 /security-review 命令**：只需将 Claude Code 更新到最新版本，并在你的项目目录中运行 `/security-review`。[查看文档](https://github.com/anthropics/claude-code-security-review/tree/main?tab=readme-ov-file#security-review-slash-command) 以自定义你自己的命令版本。
*   **对于 GitHub Action**：[查看文档](https://github.com/anthropics/claude-code-security-review) 以获取分步安装和配置说明。

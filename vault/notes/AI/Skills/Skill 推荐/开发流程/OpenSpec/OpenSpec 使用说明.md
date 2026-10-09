---
类型: 使用说明
来源: https://github.com/Fission-AI/OpenSpec
创建日期: 2026-10-08
更新日期: 2026-10-09
tags:
  - AI
  - Skills
  - OpenSpec
---

# OpenSpec 使用说明

OpenSpec 通过规范驱动开发（Spec-driven Development，SDD）组织人与 AI 编码助手的协作。本篇以 Codex 为操作主线，依次介绍安装、初始化、提出变更、实施验证和归档；其他助手的调用方式单列说明。

## 1. 定位与适用场景

OpenSpec 将需求、技术方案和实施任务保存到项目文件中，便于在编码前审阅，并在实施中持续修订。CLI 管理初始化和项目状态，配套 Skills 指导助手完成工作流。[入门说明](https://github.com/Fission-AI/OpenSpec/blob/main/docs/getting-started.md)

本知识库建议在以下场景使用：

- 功能涉及多处修改，需要明确范围和验收条件。
- 已有项目的需求或行为需要逐步整理。
- 工作跨多个会话，需要从文件恢复任务进度。

对于很小的修改，可以先判断是否需要完整变更文档，再决定采用哪些流程。

## 2. 必要概念与环境条件

### 2.1 核心概念

| 概念或文件    | 用途                                     |
| ------------- | ---------------------------------------- |
| Spec          | 描述系统需求及可检查的行为场景           |
| Change        | 一次拟进行的变更，集中存放相关文档       |
| Delta Spec    | 描述本次变更对已有规格的增补、修改或移除 |
| `proposal.md` | 解释变更原因、范围与影响                 |
| `design.md`   | 记录技术方案与关键决策                   |
| `tasks.md`    | 列出实施任务与完成状态                   |
| Schema        | 定义变更文档的组成及依赖关系             |

默认 `spec-driven` schema 使用提案、规格、设计和任务这些文档；自定义 schema 可以改变组成。[核心概念](https://github.com/Fission-AI/OpenSpec/blob/main/docs/getting-started.md#understanding-artifacts)、[自定义配置](https://github.com/Fission-AI/OpenSpec/blob/main/docs/customization.md)

### 2.2 环境与操作位置

本篇所依据的安装说明要求 Node.js 20.19.0 或更高版本。开始前准备要接入 OpenSpec 的代码项目，并确认所需编码助手可用。[安装说明](https://github.com/Fission-AI/OpenSpec#quick-start)

- `node`、`npm` 和 `openspec ...` 命令在终端执行。
- `$openspec-...` 工作流调用在 Codex 的聊天输入框中执行。
- 初始化及项目命令在目标项目目录中执行，实际 CLI 版本通过 `openspec --version` 查看。

## 3. 安装、初始化与文件检查

### 3.1 安装 CLI

操作位置：终端。

```sh
node --version
npm install -g @fission-ai/openspec@latest
openspec --version
```

检查 Node.js 是否满足要求、安装是否成功，以及 CLI 是否能输出版本。`@latest` 安装执行时的最新版本，实际版本以本机 `openspec --version` 输出为准。

### 3.2 初始化目标项目

进入要接入 OpenSpec 的代码项目，并为 Codex 初始化：

```sh
cd /path/to/your-project
openspec init --tools codex
```

需要交互选择助手时，使用 `openspec init`。`--tools` 使用 OpenSpec 的工具标识，完整参数可通过 `openspec init --help` 查看。[初始化参数](https://github.com/Fission-AI/OpenSpec/blob/main/docs/cli.md#openspec-init)

检查初始化输出、`openspec/` 目录和所选助手的 Skill 文件。Codex 的生成路径为 `.agents/skills/openspec-*/SKILL.md`；在 Codex 中确认所需 Skill 可见，并阅读实际调用提示。[工具适配](https://github.com/Fission-AI/OpenSpec/blob/main/docs/supported-tools.md)

完成标志：CLI 可用，目标项目已初始化，助手可以识别生成的工作流。

### 3.3 理解生成文件

以下示意展示默认 schema 下某个变更生成后的结构。初始化后不必立即出现所有变更文件，具体内容取决于 schema 和执行进度。[项目结构](https://github.com/Fission-AI/OpenSpec/blob/main/docs/getting-started.md#what-openspec-creates)

```text
your-project/
├── openspec/
│   ├── config.yaml
│   ├── specs/
│   │   └── <domain>/spec.md
│   └── changes/
│       ├── <change-name>/
│       │   ├── proposal.md
│       │   ├── design.md
│       │   ├── tasks.md
│       │   └── specs/<domain>/spec.md
│       └── archive/
└── .agents/skills/                  # 选择 Codex 时生成
    └── openspec-*/SKILL.md
```

`specs/` 保存系统规格，`changes/` 保存拟实施或实施中的变更，`archive/` 保存归档历史。自定义项目约定可放入 `config.yaml` 或项目规则文件，便于升级时维护。

## 4. 基本使用流程

以下工作流属于默认 `core` profile。工作流调用在 Codex 聊天中输入，描述任务时明确目标项目和变更名称。[工作流命令](https://github.com/Fission-AI/OpenSpec/blob/main/docs/commands.md)

| 步骤       | Codex 调用                 | 操作与预期结果                         | 检查重点                       |
| ---------- | -------------------------- | -------------------------------------- | ------------------------------ |
| 探索，可选 | `$openspec-explore`        | 调查现有项目、比较方案，整理需求和约束 | 目标、边界与待确认问题是否明确 |
| 提出变更   | `$openspec-propose`        | 生成变更目录及规划文档                 | 范围、场景、设计和任务是否一致 |
| 实施       | `$openspec-apply-change`   | 按任务修改代码并记录进度               | 实际行为与验收场景是否一致     |
| 修订，按需 | `$openspec-update-change`  | 将新决策同步到相关变更文档             | 任务、设计和规格是否保持一致   |
| 同步       | `$openspec-sync-specs`     | 将变更规格合入主规格                   | 合并是否保留仍有效的需求       |
| 归档       | `$openspec-archive-change` | 收纳变更记录                           | 任务状态与验证结果是否可追溯   |

本知识库建议先审阅方案，再进入实施。实施发现需求变化时，先修订相关文档，再按调整后的任务继续。同步与归档分步执行，每一步完成后检查结果。

实施后在目标项目终端检查变更状态和结构：

```sh
openspec list
openspec show <change-name>
openspec validate <change-name>
```

将 `<change-name>` 替换为实际名称。`validate` 检查规格和变更结构；功能是否正确仍需依赖代码检查、测试和实际操作。[CLI 验证参考](https://github.com/Fission-AI/OpenSpec/blob/main/docs/cli.md)

归档前确认任务状态、验证结果和主规格内容。尚未同步规格时，归档流程会处理同步提示，应检查其具体合并结果。[归档问题说明](https://github.com/Fission-AI/OpenSpec/blob/main/docs/troubleshooting.md#archive-wont-finish-or-warns-about-incomplete-tasks)

## 5. 完整使用案例

以下为本知识库编写的案例：为一个 Vue 应用增加主题切换。项目应已完成初始化，所有 `$openspec-...` 提示词在 Codex 聊天中输入，CLI 检查在该项目终端运行。

### 5.1 澄清需求

```text
$openspec-explore
请检查现有主题和样式结构，比较支持浅色、深色与跟随系统三种模式的方案。
要求刷新后保留选择，沿用现有组件与状态管理方式。
先整理方案和待确认问题。
```

预期结果：现状说明、方案比较和待确认问题。

检查重点：现有主题实现、状态存储方式与修改边界是否明确，再决定进入方案生成。

### 5.2 生成与审阅方案

```text
$openspec-propose
请创建名为 add-theme-switch 的变更。
为现有 Vue 应用增加浅色、深色和跟随系统三种主题模式。
刷新后保留用户选择；用户选择跟随系统时，系统主题变化也应生效。
请生成需求场景、技术设计和实施任务。
```

预期结果：变更目录及对应 schema 的规划文档。

检查重点：首次访问、刷新、系统变化和存储异常等场景是否清楚，是否引入需求之外的架构变更，任务是否覆盖实现与验证。完成审阅后再进入实施。

### 5.3 实施与验证

```text
$openspec-apply-change
请实施 add-theme-switch，按已确认任务修改，沿用项目规范。
请运行与主题行为有关的现有检查，并说明结果。
```

预期结果：代码修改、更新后的任务状态和验证结果。

人工检查三种模式、刷新后保留选择、跟随系统时响应主题变化等行为；在终端检查规格和变更结构：

```sh
openspec list
openspec show add-theme-switch
openspec validate add-theme-switch
```

功能验证与结构验证均符合要求后，再进入同步与归档。

### 5.4 需求变化时修订

需要调整范围或技术决策时，先在 Codex 中调用：

```text
$openspec-update-change
请修订 add-theme-switch。
我会提供调整后的需求或技术决策，请同步检查并更新相关规格、设计与任务。
```

检查修订后的文档是否一致，再用 `$openspec-apply-change` 继续实施并重新验证受影响的行为。没有变化时可跳过此步骤。

### 5.5 同步与归档

先同步规格：

```text
$openspec-sync-specs
请同步 add-theme-switch 的变更规格到主规格。
```

检查主规格中的行为描述和合并结果，再归档：

```text
$openspec-archive-change
请归档 add-theme-switch，并说明归档结果。
```

完成标志：主规格已反映实际行为，归档记录可追溯，任务状态与验证结果一致。功能若还有未完成部分，先明确其状态，再决定后续处理。

## 6. 其他助手调用方式与进阶配置

### 6.1 其他助手的调用方式

官方文档以 `/opsx:...` 作为通用写法。以下为工作流对应关系，实际调用形式以初始化生成的文件和助手提示为准。[命令说明](https://github.com/Fission-AI/OpenSpec/blob/main/docs/commands.md)、[工具适配](https://github.com/Fission-AI/OpenSpec/blob/main/docs/supported-tools.md)

| 工作流       | Claude Code 等的通用形式 | Codex 的 Skill 形式        |
| ------------ | ------------------------ | -------------------------- |
| 探索需求     | `/opsx:explore`          | `$openspec-explore`        |
| 生成方案     | `/opsx:propose`          | `$openspec-propose`        |
| 实施任务     | `/opsx:apply`            | `$openspec-apply-change`   |
| 修订变更文档 | `/opsx:update`           | `$openspec-update-change`  |
| 同步规格     | `/opsx:sync`             | `$openspec-sync-specs`     |
| 归档变更     | `/opsx:archive`          | `$openspec-archive-change` |

Cursor、GitHub Copilot 使用 `/opsx-propose` 这类形式；Amazon Q 使用 `@opsx-propose`。Skill 名称与工作流名称不一定逐字对应，切换助手时核对调用名称、生成目录和可用工作流。

### 6.2 扩展工作流

操作位置：目标项目终端。选择额外工作流并刷新项目配置：

```sh
openspec config profile
openspec update
```

可按需启用 `new`、`continue`、`ff`、`verify`、`bulk-archive`、`onboard`。需要逐份审阅规划文档时，可使用 `new` 与 `continue`；`verify` 用于对照文档检查实施结果。刷新后确认所选助手中出现对应工作流。[扩展命令](https://github.com/Fission-AI/OpenSpec/blob/main/docs/commands.md#expanded-workflow-commands-custom-workflow-selection)

### 6.3 项目上下文

在 `openspec/config.yaml` 中写入真实技术栈和文档规则。以下配置由本知识库编写，应按目标项目调整：[配置说明](https://github.com/Fission-AI/OpenSpec/blob/main/docs/customization.md#project-configuration)

```yaml
schema: spec-driven
context: |
  本项目采用 Vue 3 与 TypeScript。
  新功能沿用已有组件和状态管理方式。
  规划文档使用中文，代码标识遵循项目约定。
rules:
  specs:
    - 每项行为需求包含可检查的场景。
  tasks:
    - 包含与本次功能相关的验证任务。
```

检查配置是否反映项目实际约定，并在后续生成的文档中确认这些要求得到应用。本知识库建议接入已有项目时，从一个范围明确的变更开始，逐步积累规格。

## 7. 升级管理与常见问题

### 7.1 升级 CLI 并刷新项目配置

先在终端升级 CLI：

```sh
npm install -g @fission-ai/openspec@latest
openspec --version
```

再进入每个已接入 OpenSpec 的项目，分别运行：

```sh
openspec update
```

更新可能刷新工具生成文件，自定义规则应维护在项目规则或配置中。更新后检查版本、生成文件和助手中的可用工作流。[更新说明](https://github.com/Fission-AI/OpenSpec#updating-openspec)、[CLI 更新行为](https://github.com/Fission-AI/OpenSpec/blob/main/docs/cli.md#openspec-update)

### 7.2 常见问题

以下为本知识库整理的排查建议：

| 现象               | 排查方式                                                                         |
| ------------------ | -------------------------------------------------------------------------------- |
| 找不到 `openspec`  | 检查安装结果、Node 版本和全局可执行目录是否在 `PATH` 中                          |
| 聊天中找不到工作流 | 核对助手调用形式、项目位置、生成文件与所选 profile；必要时刷新配置并重新打开助手 |
| 扩展命令缺失       | 检查是否启用相应工作流，再执行 `openspec update`                                 |
| 找不到变更         | 用 `openspec list` 核对名称和当前项目，调用时明确指定变更                        |
| 验证报错           | 根据错误位置修订规格结构、场景或 Delta 内容，再重新检查                          |

官方排查入口见 [Troubleshooting](https://github.com/Fission-AI/OpenSpec/blob/main/docs/troubleshooting.md)。

文档维护：[[OpenSpec 维护记录]]。

返回 [[Skill 推荐清单]]。

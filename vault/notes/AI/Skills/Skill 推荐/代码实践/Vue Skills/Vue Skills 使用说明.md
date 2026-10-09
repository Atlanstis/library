---
类型: 使用说明
来源: https://github.com/vuejs-ai/skills
创建日期: 2026-10-08
更新日期: 2026-10-09
tags:
  - AI
  - Skills
  - Vue
---

# Vue Skills 使用说明

`vuejs-ai/skills` 是面向 Vue 3 开发的 Agent Skills 集合，本篇以 Vue Skills 称呼该项目。使用时依次选择 Skill、安装并确认加载、提交任务、检查结果。

## 1. 定位与适用场景

Vue Skills 提供框架规则、开发方法和问题排查参考，覆盖组件、路由、状态管理、测试、调试和可复用 Composable 编写。项目自述属于社区实验，实际输出需要结合项目代码与测试判断。[项目说明](https://github.com/vuejs-ai/skills)

本知识库建议按项目已有技术栈和当前任务选择 Skill。使用前明确框架与依赖版本、API 风格、已有架构、任务范围和验收要求，便于判断建议是否适合项目。

上游方法论（选读）：仓库将 Skill 的作用分为 Capability（补充模型解决原本无法完成的任务所需的知识或能力）与 Efficiency（改善模型原本能够完成的任务的处理效果），并介绍了有无 Skill 的对照评估方法。本知识库按用途分类，不为各 Skill 预设类型；实际效果需结合模型、任务和版本判断，比较时记录相同任务在相近条件下的结果与检查依据。[方法论说明](https://github.com/vuejs-ai/skills#methodology)

## 2. 选择所需 Skill

以下按上游清单整理用途，选用条件与结果检查重点为本知识库建议。[Skill 清单](https://github.com/vuejs-ai/skills#available-skills)

| Skill 名称                       | 适用任务与选用条件                                    | 结果检查重点                              |
| -------------------------------- | ----------------------------------------------------- | ----------------------------------------- |
| `vue-best-practices`             | Vue 3、Composition API 与 TypeScript 的组件开发或重构 | 职责、数据流、类型和行为是否清楚          |
| `vue-options-api-best-practices` | 已明确采用 Options API 的项目                         | 是否保留项目已选 API 风格                 |
| `vue-router-best-practices`      | Vue Router 4 路由开发与故障处理                       | 参数变化、导航和组件行为是否符合需求      |
| `vue-pinia-best-practices`       | Pinia 状态管理                                        | 状态归属、更新路径和依赖是否明确          |
| `vue-testing-best-practices`     | 组件测试与端到端测试                                  | 是否覆盖关键行为，能否验证修改效果        |
| `vue-jsx-best-practices`         | Vue JSX 开发                                          | 是否符合项目的 JSX 与类型约定             |
| `vue-debug-guides`               | Vue 错误、警告及运行问题排查                          | 是否复现问题、解释根因并验证修复          |
| `create-adaptable-composable`    | 编写接受不同输入形式的可复用 Composable               | 输入形式、响应性和副作用是否符合 API 约定 |

通用 Vue 任务可以先选择 `vue-best-practices`，再按需搭配路由、状态管理或测试等专项 Skill。通用 Skill 默认采用 Composition API；项目明确要求 Options API 时，选择对应规则。[通用 Skill 说明](https://github.com/vuejs-ai/skills/blob/c9d355f/skills/vue-best-practices/SKILL.md)

## 3. 安装与确认加载

### 3.1 在目标项目中安装

操作位置：目标项目的终端。

可以交互选择所需 Skill 和助手：

```sh
npx skills add vuejs-ai/skills
```

也可以先查看清单，再明确指定 Skill 和助手。以下示例将 Vue 通用规则安装到项目范围，供 Codex 使用：

```sh
npx skills add vuejs-ai/skills --list
npx skills add vuejs-ai/skills --skill vue-best-practices --agent codex
```

安装器默认采用项目范围；需要用户范围时使用 `--global`。安装结束后，检查输出中的 Skill 名称、目标助手、安装范围和路径，复制或链接方式以实际输出为准。[安装说明](https://github.com/vuejs-ai/skills#installation)、[CLI 参数](https://github.com/vercel-labs/skills#options)

### 3.2 检查安装与助手加载

在终端列出已安装的 Skill：

```sh
npx skills list
```

用户范围使用 `npx skills list --global`。确认列表包含所需名称及正确范围，再在目标助手中确认 Skill 可见或可选择。[列表参考](https://github.com/vercel-labs/skills#other-commands)

完成标志：安装结果正确，且助手实际识别到所需 Skill。文件已写入和助手已加载需要分别检查。

### 3.3 Claude Code 的替代安装方式

使用 Claude Code 时，也可在其聊天输入框中执行：

```text
/plugin marketplace add vuejs-ai/skills
/plugin install vue-skills-bundle@vue-skills
```

仅需单个插件时，例如输入 `/plugin install vue-best-practices@vue-skills`。完成后同样确认所需规则可用。[Marketplace 安装说明](https://github.com/vuejs-ai/skills#claude-code-marketplace)

## 4. 调用与执行流程

### 4.1 准备项目上下文

本知识库建议在提交任务时写明：

- 框架、语言和相关依赖版本。
- API 风格、状态管理和目录约定。
- 本次任务范围、已有接口和预期行为。
- 可运行的类型检查、测试或人工验证方式。

### 4.2 指定 Skill 并描述任务

操作位置：编码助手的聊天输入框。

仓库建议在提示词中加入 `Use vue skill`。助手支持 Skill 选择器或专门调用形式时，也可通过该界面指定名称；加载结果以助手实际识别到的 Skill 为准。[触发建议](https://github.com/vuejs-ai/skills#usage)

以下为本知识库编写的任务描述示例：

```text
Use vue skill，请使用 vue-best-practices 检查 src/components/UserPanel.vue。
本项目采用 Vue 3、Composition API 和 TypeScript。
请先说明组件职责与数据流，再修复明确的问题，保持现有功能与接口。
请运行项目已有的类型检查和相关测试，并说明验证结果。
```

### 4.3 执行任务并检查结果

`vue-best-practices` 要求先确认架构，再应用响应性、单文件组件、数据流和 Composable 等规则，并按需考虑额外功能。[Skill 工作流](https://github.com/vuejs-ai/skills/blob/c9d355f/skills/vue-best-practices/SKILL.md)

本知识库建议按以下顺序检查：

1. 确认助手采用的 Skill、技术栈和项目约定符合任务要求。
2. 审阅职责、数据流和实现方案，确认修改范围与已有接口。
3. 检查代码修改，并运行与本次任务相关的类型检查、测试或人工验证。
4. 记录实际结果；仍有问题时补充复现信息，再调整实现。

完成标志：修改满足预期行为，验证结果能说明其是否正确，未完成事项已明确。

## 5. 使用案例与结果检查

以下提示词和验收项由本知识库编写，各案例在编码助手聊天中输入。

### 5.1 开发任务列表组件

```text
Use vue skill，请使用 vue-best-practices 为现有项目增加任务列表。
使用 Composition API、TypeScript 和现有样式体系。
支持新增、完成与删除；先说明组件边界和 props/emits，再实现并验证行为。
```

预期产出：组件职责说明、符合项目约定的实现和验证结果。

检查重点：状态来源、派生数据、组件通信与拆分是否合理；新增、完成与删除是否符合预期。[相关规则](https://github.com/vuejs-ai/skills/blob/c9d355f/skills/vue-best-practices/SKILL.md)

### 5.2 编写可复用 Composable

```text
Use vue skill，请使用 create-adaptable-composable 设计 usePageTitle。
标题输入需要支持普通字符串、ref 和 getter；在浏览器中随输入更新页面标题。
请说明类型与响应性处理，并考虑服务端环境和组件卸载时的行为。
```

预期产出：Composable 实现、输入类型说明和验证结果。

检查重点：`MaybeRef`、`MaybeRefOrGetter` 和输入归一化是否合适；getter 或 ref 的变化能否被正确追踪；回调函数作为数据值时的处理是否明确。服务端与卸载行为是本示例额外提出的验收要求。[相关规则](https://github.com/vuejs-ai/skills/blob/c9d355f/skills/create-adaptable-composable/SKILL.md)

### 5.3 排查并验证故障

```text
Use vue skill，请使用 vue-debug-guides 排查以下 Vue 警告。
我会提供完整警告、复现步骤、相关文件和依赖版本。
请先定位原因，再给出最小修改；使用 vue-testing-best-practices 设计相关验证。
```

预期产出：原因说明、修复修改和能够验证修复的检查结果。

检查重点：解释是否与复现一致，修改是否覆盖根因，验证是否能区分修复前后的行为。

## 6. 更新管理与常见问题

### 6.1 更新 Skill

操作位置：安装对应 Skill 的项目终端。以下为按名称更新的示例：

```sh
npx skills update vue-best-practices
```

更新后重新检查安装列表和助手加载情况，并记录安装文件的版本或提交。若效果发生变化，比较任务输入、规则变化和验证结果。[更新参考](https://github.com/vercel-labs/skills#other-commands)

### 6.2 常见问题

以下为本知识库的排查建议：

| 现象                    | 排查方式                                              |
| ----------------------- | ----------------------------------------------------- |
| 助手没有识别 Skill      | 核对安装范围、目标助手、当前项目和文件可见性          |
| 任务未触发对应规则      | 明确 Skill 名称、任务类型和所需输出，检查实际加载情况 |
| 使用了不合适的 API 风格 | 补充项目约定，并选择 Options API、JSX 等对应 Skill    |
| 建议与依赖版本不匹配    | 核对项目版本及相关官方 API，再调整实现                |
| 更新后效果发生变化      | 记录安装版本或提交、任务输入与验证结果，比较规则变化  |

文档维护：[[Vue Skills 维护记录]]。

返回 [[Skill 推荐清单]]。

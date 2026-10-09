---
类型: 维护记录
来源: https://github.com/Fission-AI/OpenSpec
创建日期: 2026-10-09
更新日期: 2026-10-09
tags:
  - AI
  - Skills
  - OpenSpec
---

# OpenSpec 维护记录

记录 [[OpenSpec 使用说明]] 的文档依据、版本快照、核验范围和维护历史。

## 1. 文档依据与核验范围

操作说明依据 2026-10-08 查阅的 `main` 分支官方文档整理，发布版与包版本于 2026-10-09 核验。发布版本核验不等于全部使用流程都已按该发布版重新验证；`main` 文档链接也会随上游更新。

上游工具行为、CLI 参数和工作流名称以对应官方来源为依据。本知识库的适用场景、操作检查建议、案例提示词和项目配置示例属于整理与示范；案例的主题模式、刷新持久化等要求属于示例验收条件。

安装命令及功能案例尚未在本知识库中执行或验证，现有核验属于公开文档核验。实际使用时记录 `openspec --version`、生成的 Skills 和验证结果。

## 2. 版本快照

以下保留原记录在 2026-10-09 的核验结果：

| 项目                         | 核验结果   | 来源                                                                           |
| ---------------------------- | ---------- | ------------------------------------------------------------------------------ |
| 当次核验的 GitHub 最新发布版 | `v1.14.1`  | [Release v1.14.1](https://github.com/Fission-AI/OpenSpec/releases/tag/v1.14.1) |
| 当次核验的 `main` 分支包版本 | `1.14.1`   | [package.json](https://github.com/Fission-AI/OpenSpec/blob/main/package.json)  |
| 核验日期                     | 2026-10-09 | 原记录的公开来源核验                                                           |

这里记录 OpenSpec CLI 与项目的发布版本。配套 Skills 按初始化时选择的工作流生成，实际安装结果需在目标项目中检查；上述记录不代表本机已经安装该版本。

## 3. 参考来源

- [OpenSpec 仓库](https://github.com/Fission-AI/OpenSpec)。
- [本次核验的发布版 v1.14.1](https://github.com/Fission-AI/OpenSpec/releases/tag/v1.14.1)。
- [入门文档](https://github.com/Fission-AI/OpenSpec/blob/main/docs/getting-started.md)。
- [工作流命令](https://github.com/Fission-AI/OpenSpec/blob/main/docs/commands.md)。
- [CLI 参考](https://github.com/Fission-AI/OpenSpec/blob/main/docs/cli.md)。
- [工具适配](https://github.com/Fission-AI/OpenSpec/blob/main/docs/supported-tools.md)。
- [项目配置](https://github.com/Fission-AI/OpenSpec/blob/main/docs/customization.md)。

## 4. 维护历史

| 日期       | 维护内容                                                                                                                                                                                |
| ---------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2026-10-09 | 整理 OpenSpec 的定位、核心概念、环境条件、安装初始化与文件结构；说明以 Codex 为主线的变更、实施、验证、同步与归档流程，补充主题切换案例、其他助手调用方式、进阶配置、升级排查及版本依据 |
| 2026-10-09 | 将使用说明与维护记录归入 OpenSpec 文件夹；独立保存依据、版本快照、参考来源和维护历史，修正文内版本引用，补充双向链接与导航；保留原核验结果，未重新执行安装或案例                        |

实际使用后补充 CLI 版本、助手、项目、验证结果及遇到的问题。公开文档核验与实际运行验证分别记录，维护历史按日期追加。

返回 [[OpenSpec 使用说明]] · [[Skill 推荐清单]]。

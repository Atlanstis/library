---
类型: 维护记录
来源: https://github.com/vuejs-ai/skills
创建日期: 2026-10-09
更新日期: 2026-10-09
tags:
  - AI
  - Skills
  - Vue
---

# Vue Skills 维护记录

记录 [[Vue Skills 使用说明]] 的文档依据、版本快照、核验范围和维护历史。

## 1. 文档依据与核验范围

操作说明依据 2026-10-08 查阅的 `main` 分支 README 与相关 Skill 文件整理；各 Skill 的版本声明于 2026-10-09 按提交 `c9d355f` 核验。版本核验与操作内容核验的范围分别记录，不将后续版本核验视为对全部使用流程的重新验证。

正文中的 Skill 选用、任务描述和结果检查建议属于本知识库整理；示例的具体功能要求属于案例验收条件。安装命令和案例尚未在本知识库中安装或运行，现有核验属于公开文档核验。

参考链接中的 `main` 或 README 链接会随上游更新；固定提交链接用于追溯本次 Skill 版本快照。实际安装版本应以目标项目中的文件为准。

## 2. 版本快照

截至原记录的核验日期 2026-10-09，仓库 Releases 页面没有发布记录，Marketplace 清单也未声明统一版本。本篇按各 `SKILL.md` 的声明字段记录版本，以提交 `c9d355f` 标识仓库快照。[Releases](https://github.com/vuejs-ai/skills/releases)、[Marketplace 清单](https://github.com/vuejs-ai/skills/blob/c9d355f/.claude-plugin/marketplace.json)

| Skill 与版本来源                                                                                                                 | 上游声明版本 | 声明字段           |
| -------------------------------------------------------------------------------------------------------------------------------- | ------------ | ------------------ |
| [vue-best-practices](https://github.com/vuejs-ai/skills/blob/c9d355f/skills/vue-best-practices/SKILL.md)                         | `18.0.0`     | `metadata.version` |
| [vue-options-api-best-practices](https://github.com/vuejs-ai/skills/blob/c9d355f/skills/vue-options-api-best-practices/SKILL.md) | `2.0.0`      | `version`          |
| [vue-router-best-practices](https://github.com/vuejs-ai/skills/blob/c9d355f/skills/vue-router-best-practices/SKILL.md)           | `1.0.0`      | `version`          |
| [vue-pinia-best-practices](https://github.com/vuejs-ai/skills/blob/c9d355f/skills/vue-pinia-best-practices/SKILL.md)             | `1.0.0`      | `version`          |
| [vue-testing-best-practices](https://github.com/vuejs-ai/skills/blob/c9d355f/skills/vue-testing-best-practices/SKILL.md)         | `1.0.0`      | `version`          |
| [vue-jsx-best-practices](https://github.com/vuejs-ai/skills/blob/c9d355f/skills/vue-jsx-best-practices/SKILL.md)                 | `2.0.0`      | `version`          |
| [vue-debug-guides](https://github.com/vuejs-ai/skills/blob/c9d355f/skills/vue-debug-guides/SKILL.md)                             | 未声明       | 无版本字段         |
| [create-adaptable-composable](https://github.com/vuejs-ai/skills/blob/c9d355f/skills/create-adaptable-composable/SKILL.md)       | `17.0.0`     | `metadata.version` |

未声明版本的 Skill 以提交快照追溯。项目发布版、Skill 声明版本与实际安装版本分别记录；后续维护时同时核对可用清单、版本声明和对应提交。

## 3. 参考来源

- [Vue Skills 仓库](https://github.com/vuejs-ai/skills)。
- [本次核验的仓库提交 c9d355f](https://github.com/vuejs-ai/skills/commit/c9d355f)。
- [该提交下的 Skill 文件](https://github.com/vuejs-ai/skills/tree/c9d355f/skills)。
- [Skills CLI](https://github.com/vercel-labs/skills)。

## 4. 维护历史

| 日期       | 维护内容                                                                                                                                                                                       |
| ---------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2026-10-09 | 整理 Vue Skills 的定位、8 项 Skill 选用、安装与加载确认、调用流程、开发与排错案例、更新管理及常见问题；汇总独立版本、提交快照、文档依据与上游方法论                                            |
| 2026-10-09 | 将使用说明与维护记录归入 Vue Skills 文件夹；独立保存依据、版本快照、参考来源和维护历史，将上游方法论压缩为使用说明定位部分的选读内容，补充双向链接与导航；保留原核验结果，未重新执行安装或案例 |

实际使用后补充所用 Skill 名称、文件版本或提交、助手、项目版本与验证结果。公开文档核验与实际运行验证分别记录，维护历史按日期追加。

返回 [[Vue Skills 使用说明]] · [[Skill 推荐清单]]。

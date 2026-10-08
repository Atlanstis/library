# 个人知识库

通过 Obsidian 管理的知识库。在 Obsidian 中选择“打开本地仓库”，打开本项目的 `vault/` 文件夹。

- `vault/inbox/`：临时记录与待整理笔记。
- `vault/notes/`：正式笔记。
- `vault/attachments/`：图片、PDF 等附件，建议在 Obsidian 中设为默认附件目录。
- `vault/templates/`：笔记模板。

## 开发工具

使用 Node.js 24（可运行 `nvm use` 切换）和 pnpm 12.10.1：

```sh
npm install --global pnpm@12.10.1
pnpm install
pnpm prepare
pnpm format
pnpm format:check
```

安装依赖并运行 `pnpm prepare` 启用钩子后，Git 提交时会自动格式化暂存的 Markdown，并校验提交信息。

## Git 提交信息规则

标题采用 `type(scope): 描述`，scope 可省略，英文冒号后保留一个空格。type 使用小写，例如 `docs`（笔记和文档）、`chore`（工具与配置）、`feat`（新增功能）或 `fix`（修复问题）；描述不能为空，可使用中文，标题最多 100 个字符。

简单变更只写标题即可：

```text
docs: 添加读书笔记
docs(obsidian): 更新知识索引
chore: 更新工具配置
```

需要描述具体变更时，在标题后空一行，再使用 `- ` 开头的正文列表。正文可省略，不限制行长度和大小写；`-` 列表是推荐写法，也允许普通正文段落。

```text
chore: 初始化 Obsidian 知识库及提交规范

- 创建 vault 笔记、附件和模板目录
- 限定 Node 与 pnpm 版本
- 配置 Husky、Prettier 和 commitlint
- 添加忽略规则与中文 README
```

不要把 `-` 列表项用作首行标题；缺少合法 type、描述或标题与正文之间的空行时，提交会被拒绝。

笔记、附件与 Obsidian 共享配置纳入 Git；工作区状态、插件运行目录和回收站忽略。

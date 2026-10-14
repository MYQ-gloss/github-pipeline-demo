# github-pipeline-demo

最小化示例仓库，用于验证 WorkBuddy 与 GitHub 之间的完整链路：

**本地初始化 → 远程建仓 → 推送 → 反向拉取**

## 用途

这个仓库不代表任何业务代码，跑通后可以删除，或改造成真实项目。

## 文件说明

| 文件 | 作用 |
| --- | --- |
| `README.md` | 本说明 |
| `.gitignore` | 排除凭据、依赖、系统内部数据 |
| `src/hello.js` | 一个最小可运行的 Node 脚本，用作「被推送的内容」 |

## 运行

```bash
node src/hello.js
```

## 验证清单

- [x] 本地 git 仓库已初始化，默认分支为 `main`
- [x] SSH 密钥认证通过（`Hi MYQ-gloss!`）
- [x] 远程仓库已创建并关联为 `origin`
- [x] 本地提交成功推送到 `origin/main`
- [x] 修改文件后能从 `origin` 拉回并合并

## 开发约定

- `.workbuddy/` 为工具内部数据（项目笔记、密钥），已在 `.gitignore` 中排除，**不得入库**
- `.env`、`*.pem`、`*.key` 等凭据文件一律不入库
- 换行符统一使用 LF（`core.autocrlf=false`）

# waimaob2bc

Phoenix 个人外贸网站，面向国内客户，以中文内容为主，定位为个人品牌、实战博客、课程培训与咨询服务网站。

## 当前定位

- 不是产品型 B2B 企业站。
- 不建设产品中心、产品分类或产品详情系统。
- 首页不是简单文章列表，而是 Phoenix 个人品牌首页。
- 内容重点包括外贸运营、海外社媒、AI 实战、AI 建站、课程培训、项目复盘、媒体证明与咨询入口。

## 部署模式

本项目采用 GitHub + Hostinger + VPS 的前后台分离模式：

- GitHub：源码仓库。
- Hostinger：绑定 GitHub 分支，自动拉取仓库，根据 `package.json` 安装依赖、执行构建并发布前台站点。
- VPS：预留后台、数据库、备份、日志、反向代理或辅助服务框架；不默认作为前台主站发布入口。

## 仓库结构

```text
.
├── frontend/              # Next.js 前台源码，Hostinger 构建入口
├── backend/directus/      # 后台/CMS 示例结构，真实密钥不入库
├── deployment/            # Hostinger、VPS、DNS、回滚说明
├── scripts/               # 本地检查与 VPS 框架脚本
└── docs/project-memory/   # 项目记忆、规范、任务与交接
```

## 常用命令

```bash
npm install
npm run dev
npm run build
npm run typecheck
```

构建产物位于 `frontend/out/`，供 Hostinger 发布使用。具体发布目录以 Hostinger 面板配置为准。

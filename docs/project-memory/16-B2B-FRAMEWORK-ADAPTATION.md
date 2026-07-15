# 16 - B2B Framework Adaptation

来源文件：`Phoenix外贸B2B通用网站建站总规范_完整保留重制逻辑总纲版.docx`。

## 本项目采用的部分

- GitHub 仓库结构思想。
- `frontend/`、`backend/`、`scripts/`、`deployment/`、`docs/project-memory/` 分层。
- 项目记忆库 00-15 文件体系。
- Hostinger + GitHub + VPS 的前后台分离部署思想。
- 后台可维护、SEO 可维护、图片和内容不写死的原则。
- 安全红线、交接规范、部署文档、回滚文档、VPS 目录框架。

## 本项目不采用的部分

- 产品系统。
- 产品分类。
- 产品详情页。
- 产品询盘转化结构。
- B2B 产品站页眉菜单。
- 十语言外贸产品站作为初始目标。

## 本项目修正

- Hostinger 不是只接收发布分支；当前按用户说明，Hostinger 直接从 GitHub 仓库绑定分支拉取源码，并根据 `package.json` 安装依赖、构建、发布。
- VPS 默认不运行前台主站，只保留后台、数据库、备份、日志和反代框架。
- 页眉菜单等待 Phoenix 后续提供。

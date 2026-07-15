# Phoenix 个人外贸网站 Agent 入口

接手本项目前，必须先读取：

1. `docs/project-memory/00-READ-ME-FIRST.md`
2. `docs/project-memory/PROJECT-MEMORY.md`
3. `docs/project-memory/09-DEPLOYMENT.md`
4. `docs/project-memory/13-SERVER-SAFETY.md`
5. `docs/project-memory/10-TASKS.md`

## 项目边界

- 本站是 Phoenix 个人品牌、中文实战博客、课程与咨询服务网站。
- 本站不是产品型 B2B 企业站，不建设产品中心、产品分类、产品详情页。
- 外贸 B2B 通用规范只复用工程框架、部署框架、文档框架、后台可维护思想，不复用产品系统。
- 页眉菜单以用户后续明确提供的版本为准，不照搬通用规范里的菜单。

## 部署边界

- GitHub 是源码主线。
- Hostinger 从 GitHub 仓库绑定分支拉取代码，根据 `package.json` 安装依赖并执行构建，再发布构建产物。
- VPS 默认用于后台、数据库、备份、日志、反代或辅助服务；除非用户另有指令，不作为前台主站发布入口。

## 安全红线

- 不得提交 `.env`、Token、私钥、服务器密码、数据库密码、真实后台账号。
- 不得把用户已声明需要隐藏的私人业务信息写入公开页面、SEO、Schema、Sitemap、图片 Alt、演示数据、代码注释或仓库公开文档。
- 所有缺失的照片、联系方式、媒体链接、课程价格、案例数据，必须等待用户提供，不得编造。

# 09 - Deployment

## 当前模式

GitHub + Hostinger + VPS。

- GitHub：源码仓库。
- Hostinger：绑定 GitHub 分支，自动拉取代码，根据根目录 `package.json` 安装依赖、执行构建并发布前台。
- VPS：后台、数据库、备份、日志、Nginx 反代或辅助服务。

## Hostinger 建议配置

- 分支：`main`
- 安装命令：`npm install`
- 构建命令：`npm run build`
- 发布目录：`frontend/out`
- Node.js：建议 20 或以上

## VPS 目录

预留 `/opt/websites/waimaob2bc/`，详见 `deployment/vps-structure.md`。

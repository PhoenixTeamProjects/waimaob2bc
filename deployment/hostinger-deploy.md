# Hostinger 前台部署说明

本项目按用户确认的模式执行：

> Hostinger 不理解业务语义，只执行部署流程：从 GitHub 获取代码，按 `package.json` 判断框架，安装依赖，构建项目，再把输出发布为网站；后续分支更新会自动触发重建和重部署。

## 推荐配置

- 仓库：`https://github.com/PhoenixTeamProjects/waimaob2bc`
- 分支：`main`
- 安装命令：`npm install`
- 构建命令：`npm run build`
- 发布目录：`frontend/out`
- Node.js：建议 20 或以上

## 注意

- `package.json` 位于仓库根目录，Hostinger 应从根目录识别项目。
- 根目录 `npm run build` 会委托到 `frontend` 工作区。
- 当前前台使用 Next.js 静态导出，适合 Hostinger 自动发布。
- 后台内容如果未来来自 VPS 后台，静态站需要重新构建后才会刷新到前台。

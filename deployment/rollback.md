# 回滚说明

## 前台

前台由 Hostinger 从 GitHub 分支自动构建部署。回滚方式：

1. 在 GitHub 选择上一个稳定 commit。
2. 创建回滚 commit 或回退分支指针。
3. 推送到 Hostinger 绑定分支。
4. 等待 Hostinger 自动重新构建。

## VPS 后台

后台尚未正式安装服务。未来启用后，回滚必须同时考虑：

- 数据库备份。
- 上传文件备份。
- `.env` 备份。
- Nginx 配置备份。
- 后台 schema snapshot。

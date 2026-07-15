# Directus / 自研后台预留框架

当前目录只保存后台结构说明和示例配置，不保存真实数据库、上传文件、后台账号或密钥。

## 当前角色

- VPS 可用于运行后台、数据库、备份、日志和反向代理。
- 前台主站由 Hostinger 从 GitHub 仓库自动构建部署。
- 后台最终形态以后续用户提示为准，可从 Directus 过渡到 Phoenix 自研后台。

## 核心内容模型

- `posts`
- `categories`
- `topics`
- `tags`
- `authors`
- `projects`
- `courses`
- `media_coverage`
- `trust_metrics`
- `contact_submissions`
- `navigation`
- `site_settings`

禁止用一个万能 `content` 表承载所有业务。

# VPS 框架说明

VPS 当前不作为前台主站发布入口，主要预留后台、数据库、备份、日志和反向代理框架。

## 目标目录

```text
/opt/websites/waimaob2bc/
├── directus/
│   ├── uploads/
│   ├── extensions/
│   ├── snapshots/
│   └── logs/
├── database/
│   └── postgres-data/
├── nginx/
│   └── backups/
├── backups/
│   ├── database/
│   ├── uploads/
│   ├── env/
│   ├── nginx/
│   └── directus-schema/
└── logs/
```

## 安全原则

- 真实 `.env`、数据库、上传文件、备份不进 GitHub。
- 不执行跨项目清理命令。
- 不把前台主站部署路径默认放到 VPS，除非 Phoenix 后续明确要求。

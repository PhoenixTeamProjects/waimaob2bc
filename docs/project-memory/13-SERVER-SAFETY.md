# 13 - Server Safety

## VPS 原则

- 只操作当前项目目录 `/opt/websites/waimaob2bc/`。
- 不执行全局清理命令。
- 不删除数据库、上传文件、环境变量、备份或日志。
- 不把真实 `.env`、私钥、token、密码写入 GitHub。

## 禁止命令示例

- `rm -rf /`
- `rm -rf /opt`
- `docker system prune -a`
- `pm2 delete all`
- `killall node`

除非 Phoenix 明确授权并完成备份确认，否则不得执行破坏性操作。

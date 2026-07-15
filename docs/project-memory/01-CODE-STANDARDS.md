# 01 - Code Standards

- 前台使用 `frontend/` 下的 Next.js 项目。
- 根目录 `package.json` 必须能被 Hostinger 识别并执行 `npm run build`。
- 业务数据访问必须通过 `src/lib` 中的 Service / Repository / Data Adapter 层，避免页面直接绑定未来后台字段。
- 固定配置放 `src/config`，临时演示数据放 `src/data`。
- 不写真实密钥、真实后台地址、真实联系方式或未确认案例。
- 不把用户私人业务信息写进代码、注释、演示数据、SEO 或公开文档。

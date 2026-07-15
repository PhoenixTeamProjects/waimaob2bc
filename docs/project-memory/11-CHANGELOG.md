# 11 - Changelog

## 2026-07-15

- 建立 Next.js 前台基础框架。
- 建立 backend/directus 示例框架。
- 建立 deployment 与 scripts 框架。
- 建立完整项目记忆库文件。
- 明确 Hostinger 从 GitHub 仓库自动拉取构建部署。
- 创建 VPS 支撑框架目录 `/opt/websites/waimaob2bc/`。
- 验证 Next.js 前台静态构建成功，构建产物目录为 `frontend/out`。
- 根据 Phoenix 最新个人情况资料，更新首页、关于页、公开个人资料数据和项目记忆。
- 按最终菜单创建统一导航配置、桌面端 Dropdown、移动端 Accordion、active 高亮和全部导航路由页面。
- 建立中英双语框架：新增 i18n 配置、双语导航、语言切换、英文 `/en/` 首页与英文专题页静态路由。
- 建立双语 SEO 框架：自动 sitemap、robots、canonical/hreflang metadata helper、基础 Person/WebSite 结构化数据。
- 将中英文专题页统一为集中式静态路由生成，确保专题页拥有正确 canonical、hreflang 和页面 metadata。
- 为中英文专题页新增 Breadcrumb UI 和 BreadcrumbList JSON-LD。
- 建立博客第一阶段框架：双语文章数据源、本地内容适配层、中文与英文博客列表、中文与英文文章详情页、Article JSON-LD 和文章 sitemap 收录。
- 修复一批早期中文乱码文件：站点基础配置、个人公开资料、中文首页、博客数据、任务文档和 CMS 规划文档。

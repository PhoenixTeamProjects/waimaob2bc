# 08 - SEO Plan

## 当前基础

- 默认语言：中文。
- 第二语言：英文，路径前缀为 `/en/`。
- 域名：`https://waimaob2bc.com`。
- 核心定位：Phoenix 外贸实战操盘手。

## 原则

- 每个页面必须有唯一标题、描述、Canonical、OG 信息。
- 中英页面必须通过 `hreflang` 互链，中文为 `zh-CN`，英文为 `en`，默认页为中文。
- 专题页 metadata 必须从统一路由内容配置生成，避免专题页继承首页 canonical。
- Sitemap 必须包含中文和英文 URL，并保留对应语言 alternate。
- Robots 必须允许公开页面抓取，并指向 `/sitemap.xml`。
- 结构化数据以 `Person` 和 `WebSite` 为基础，后续文章、课程、项目案例再扩展 `Article`、`BreadcrumbList` 等。
- SEO 文案不得编造身份、媒体、案例、课程结果或经营数据。
- SEO、Schema、Sitemap、图片 Alt 不得包含用户私人业务信息。

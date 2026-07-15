import type { PostSource } from '@/types/content';

export const postSources: PostSource[] = [
  {
    slug: 'site-framework-note',
    title: {
      zh: '个人外贸网站框架搭建记录',
      en: 'Building the framework for a personal foreign-trade website'
    },
    excerpt: {
      zh: '记录本站从 GitHub、Hostinger、VPS 到内容模型的基础框架思路，后续继续用真实项目过程补充。',
      en: 'A framework note covering GitHub, Hostinger, VPS support roles and the first content model decisions for this personal website.'
    },
    body: {
      zh: [
        '这个网站不是传统外贸 B2B 产品站，而是 Phoenix 的个人品牌、实战博客和课程服务网站。',
        '前台发布采用 GitHub + Hostinger 自动构建模式：代码进入仓库后，由 Hostinger 按 package.json 安装依赖、构建并发布静态产物。',
        'VPS 暂时作为后台、数据库、备份、日志和辅助服务的支撑环境，不默认承担前台主站发布入口。',
        '内容模型会优先围绕文章、专题、标签、项目案例、课程、咨询和网站设置展开，避免把所有内容塞进一个万能表。',
        '当前文章只是框架占位，后续会基于 Phoenix 提供的真实材料继续补充。'
      ],
      en: [
        'This website is not a traditional foreign-trade product site. It is Phoenix’s personal brand, practical blog and course-service website.',
        'The frontend publishing path uses GitHub plus Hostinger. Hostinger pulls the repository, reads package.json, installs dependencies, builds the project and publishes the static output.',
        'The VPS is reserved for backend, database, backup, logging and supporting services. It is not the default publishing entry for the frontend.',
        'The content model will focus on posts, topics, tags, projects, courses, inquiries and site settings instead of one generic content table.',
        'This article is a framework placeholder and will be expanded only with real materials provided by Phoenix.'
      ]
    },
    type: 'practice-note',
    typeLabel: {
      zh: '实战记录',
      en: 'Practice Note'
    },
    topic: 'website',
    tags: ['GitHub', 'Hostinger', 'VPS', 'Next.js'],
    publishedAt: '2026-07-15',
    readingMinutes: 3
  },
  {
    slug: 'content-model-first-step',
    title: {
      zh: '个人品牌博客先搭内容模型，再填真实内容',
      en: 'Build the content model before filling a personal brand blog'
    },
    excerpt: {
      zh: '个人网站要长期增长，不能只做几个静态页面；文章、专题、标签、案例和课程需要从一开始就有清晰关系。',
      en: 'A personal brand website should not rely on a few static pages. Posts, topics, tags, projects and courses need a clear structure from the beginning.'
    },
    body: {
      zh: [
        '个人品牌网站最容易犯的错误，是先把页面做漂亮，然后每次更新内容都靠手工复制页面。',
        '更稳的做法是先把内容对象拆清楚：文章负责沉淀经验，专题负责组织方向，标签负责连接工具和具体场景，项目案例负责展示真实过程。',
        '课程和咨询不应该强行塞进每篇文章，而应该根据上下文克制地出现，避免把个人品牌做成传统培训机构风格。',
        '这个阶段暂时使用本地数据文件模拟后台返回结果，后续接自研后台或 CMS 时，页面层不需要大改。',
        '所有公开内容都必须遵守隐私边界：不写未确认联系方式、不写虚假案例、不暴露 Phoenix 不希望公开的业务信息。'
      ],
      en: [
        'A common mistake in personal brand websites is making attractive pages first and then copying pages manually whenever new content is added.',
        'A more stable approach is to separate content objects clearly: posts store experience, topics organize directions, tags connect tools and scenarios, and projects show real process.',
        'Courses and consulting should appear with restraint and context, instead of turning the site into a traditional training-institution style website.',
        'At this stage, local data files simulate backend responses. When a self-built backend or CMS is connected later, the page layer should not need a major rewrite.',
        'All public content must respect privacy boundaries: no unconfirmed contact information, no fake cases and no private business information that Phoenix does not want to disclose.'
      ]
    },
    type: 'how-to',
    typeLabel: {
      zh: '方法教程',
      en: 'How-to'
    },
    topic: 'website',
    tags: ['内容模型', '博客', 'CMS', 'SEO'],
    publishedAt: '2026-07-15',
    readingMinutes: 4
  }
];

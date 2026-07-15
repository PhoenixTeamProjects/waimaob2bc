import type { Locale } from '@/config/i18n';

export interface RoutePageContent {
  path: string;
  eyebrow: string;
  title: string;
  description: string;
  points: string[];
}

export const zhRoutePages: RoutePageContent[] = [
  {
    path: '/foreign-trade/',
    eyebrow: 'Foreign Trade Operations',
    title: '外贸运营',
    description: '围绕客户开发、阿里国际站、海关数据、社媒获客和 SOHO 实战，沉淀 Phoenix 正在执行的一线方法。',
    points: ['客户是谁', '客户在哪里', '如何建立联系', '如何持续跟进', '如何推动订单']
  },
  {
    path: '/foreign-trade/customer-development/',
    eyebrow: 'Customer Development',
    title: '客户开发',
    description: '从产品、国家、客户画像、渠道选择到联系人寻找，拆解 B2B 客户开发的完整执行链路。',
    points: ['目标客户判断', '企业名单获取', '背景调查', '联系人寻找', '持续跟进']
  },
  {
    path: '/foreign-trade/alibaba/',
    eyebrow: 'Alibaba Operations',
    title: '阿里国际站',
    description: '记录阿里国际站产品体系、关键词、标题、图片、发布节奏、RFQ、询盘和跟进实战。',
    points: ['产品分类', '关键词整理', '标题与图片', '发布节奏', '询盘复盘']
  },
  {
    path: '/foreign-trade/customs-data/',
    eyebrow: 'Customs Data',
    title: '海关数据',
    description: '海关数据不是只会操作软件，而是理解产品、HS Code、英文名称、采购习惯和客户筛选。',
    points: ['HS Code', '产品英文名', '进口商筛选', '企业网站调查', '联系人开发']
  },
  {
    path: '/foreign-trade/social-media-leads/',
    eyebrow: 'Social Media Leads',
    title: '社媒获客',
    description: '把海外社媒当作 B2B 获客和信任建设渠道，而不是简单发帖工具。',
    points: ['内容方向', '账号资产', '目标客户', '互动跟进', '线索沉淀']
  },
  {
    path: '/foreign-trade/soho/',
    eyebrow: 'SOHO Practice',
    title: 'SOHO实战',
    description: '记录 Phoenix 自己做 SOHO 外贸时的行业选择、市场判断、网站建设、客户开发和复盘。',
    points: ['行业选择', '产品判断', '成本控制', '网站建设', '过程复盘']
  },
  {
    path: '/ai-practice/',
    eyebrow: 'AI Practice',
    title: 'AI实战',
    description: '关注 AI 工作流、AI Agent、AI 自动化和工具实测，把 AI 放进真实业务流程里验证。',
    points: ['业务流程', '工具组合', 'Agent 实验', '自动化执行', '结果复盘']
  },
  {
    path: '/ai-practice/workflows/',
    eyebrow: 'AI Workflows',
    title: 'AI工作流',
    description: '把重复、复杂、跨工具的外贸工作拆成可执行、可复盘、可优化的 AI 工作流。',
    points: ['任务拆解', '提示词', '工具链', '人工审核', '流程优化']
  },
  {
    path: '/ai-practice/agents/',
    eyebrow: 'AI Agent',
    title: 'AI Agent',
    description: '围绕外贸、内容、建站和运营场景，测试 AI Agent 能真正承担哪些工作。',
    points: ['任务边界', '工具调用', '上下文', '安全检查', '交付质量']
  },
  {
    path: '/ai-practice/automation/',
    eyebrow: 'AI Automation',
    title: 'AI自动化',
    description: '用自动化减少重复劳动，但不让自动化替代真实判断和业务理解。',
    points: ['数据整理', '内容辅助', '流程触发', '质量控制', '人工兜底']
  },
  {
    path: '/ai-practice/tools/',
    eyebrow: 'AI Tool Tests',
    title: 'AI工具实测',
    description: '不做工具清单堆砌，只记录工具在真实外贸、建站和内容工作中的效果。',
    points: ['使用场景', '操作过程', '优点缺点', '适用边界', '是否值得用']
  },
  {
    path: '/website/',
    eyebrow: 'Website Building',
    title: '建站',
    description: '承载外贸独立站、Next.js、WordPress、CMS 后台、自研后台、部署、多语言、SEO 和 AI 辅助建站内容。',
    points: ['网站定位', '技术路线', '内容模型', '部署发布', 'SEO 基础']
  },
  {
    path: '/website/b2b-website/',
    eyebrow: 'B2B Website',
    title: '外贸独立站',
    description: '从外贸业务角度理解独立站：不是宣传册，而是产品、内容、信任和客户判断系统。',
    points: ['网站架构', '内容规划', '信任证明', '询盘路径', 'SEO 收录']
  },
  {
    path: '/website/nextjs/',
    eyebrow: 'Next.js',
    title: 'Next.js建站',
    description: '记录使用 Next.js 构建现代外贸网站和个人品牌网站的真实过程。',
    points: ['App Router', '静态导出', '组件化', '性能', '部署']
  },
  {
    path: '/website/wordpress/',
    eyebrow: 'WordPress',
    title: 'WordPress建站',
    description: '梳理 WordPress 在外贸网站中的适用场景、插件选择、内容管理和维护边界。',
    points: ['主题选择', '插件边界', '内容编辑', '性能优化', '长期维护']
  },
  {
    path: '/website/cms-admin/',
    eyebrow: 'CMS & Admin',
    title: 'CMS与后台',
    description: '围绕内容模型、后台管理、权限、媒体库、SEO 字段和未来自研后台进行长期记录。',
    points: ['内容模型', '后台字段', '权限', '媒体管理', '数据接口']
  },
  {
    path: '/website/cases/',
    eyebrow: 'Website Cases',
    title: '建站实战',
    description: '记录 Phoenix 真实建站项目、踩坑、部署、调整和结果复盘。',
    points: ['需求判断', '技术选择', '页面搭建', '部署问题', '复盘总结']
  },
  {
    path: '/training/',
    eyebrow: 'Training',
    title: '课程培训',
    description: '把外贸、AI 和建站实战拆解成能执行的方法，服务课程咨询、企业内训和一对一辅导。',
    points: ['外贸实战', 'AI 实战', '建站实战', '企业内训', '一对一咨询']
  },
  {
    path: '/training/foreign-trade/',
    eyebrow: 'Foreign Trade Course',
    title: '外贸实战课程',
    description: '围绕客户开发、平台运营、海关数据、询盘跟进和团队执行建立外贸实战能力。',
    points: ['产品理解', '市场判断', '客户画像', '渠道选择', '执行复盘']
  },
  {
    path: '/training/ai-practice/',
    eyebrow: 'AI Practice Course',
    title: 'AI实战课程',
    description: '帮助企业和个人把 AI 放进真实工作，而不是停留在概念和工具演示。',
    points: ['业务场景', '工作流', 'Agent', '自动化', '安全边界']
  },
  {
    path: '/training/website/',
    eyebrow: 'Website Course',
    title: '建站实战课程',
    description: '围绕外贸独立站、Next.js、WordPress、CMS、部署和 SEO 建立可执行建站能力。',
    points: ['网站规划', '页面搭建', '后台模型', '部署发布', 'SEO 基础']
  },
  {
    path: '/training/corporate/',
    eyebrow: 'Corporate Training',
    title: '企业内训',
    description: '面向企业老板、外贸负责人和团队，围绕真实业务问题设计内训内容。',
    points: ['业务诊断', '团队执行', '客户开发', 'AI 应用', '网站体系']
  },
  {
    path: '/projects/',
    eyebrow: 'Projects',
    title: '项目案例',
    description: '用于展示 Phoenix 的真实项目、网站项目、SOHO 项目、建站项目和外贸运营案例。',
    points: ['真实项目', '进行中状态', '问题背景', '解决过程', '复盘总结']
  }
];

export const enRoutePages: RoutePageContent[] = [
  {
    path: '/foreign-trade/',
    eyebrow: 'Foreign Trade Operations',
    title: 'Foreign Trade',
    description: 'A practical content hub for customer development, Alibaba.com operations, customs data, social lead generation and SOHO practice.',
    points: ['Who the customers are', 'Where to find them', 'How to contact them', 'How to follow up', 'How to move deals forward']
  },
  {
    path: '/foreign-trade/customer-development/',
    eyebrow: 'Customer Development',
    title: 'Customer Development',
    description: 'A practical workflow from product understanding, target market, buyer profile and channel selection to contact discovery.',
    points: ['Buyer profile', 'Company list building', 'Background research', 'Contact discovery', 'Follow-up system']
  },
  {
    path: '/foreign-trade/alibaba/',
    eyebrow: 'Alibaba.com Operations',
    title: 'Alibaba.com',
    description: 'Practical notes on product structure, keywords, titles, images, publishing rhythm, RFQ, inquiries and follow-up.',
    points: ['Product structure', 'Keyword research', 'Titles and images', 'Publishing rhythm', 'Inquiry review']
  },
  {
    path: '/foreign-trade/customs-data/',
    eyebrow: 'Customs Data',
    title: 'Customs Data',
    description: 'Customs data is not just software usage. It requires product knowledge, HS codes, English names, buying habits and buyer screening.',
    points: ['HS codes', 'Product names', 'Importer screening', 'Website research', 'Contact development']
  },
  {
    path: '/foreign-trade/social-media-leads/',
    eyebrow: 'Social Media Leads',
    title: 'Social Leads',
    description: 'Use overseas social platforms as B2B lead generation and trust-building channels, not just posting tools.',
    points: ['Content direction', 'Account assets', 'Target buyers', 'Engagement', 'Lead management']
  },
  {
    path: '/foreign-trade/soho/',
    eyebrow: 'SOHO Practice',
    title: 'SOHO Practice',
    description: 'Real notes on industry selection, market judgment, website building, customer development and review from Phoenix’s SOHO practice.',
    points: ['Industry choice', 'Product judgment', 'Cost control', 'Website building', 'Process review']
  },
  {
    path: '/ai-practice/',
    eyebrow: 'AI Practice',
    title: 'AI Practice',
    description: 'Testing AI workflows, AI Agents, automation and tools inside real business processes.',
    points: ['Business workflow', 'Tool stack', 'Agent experiments', 'Automation', 'Review']
  },
  {
    path: '/ai-practice/workflows/',
    eyebrow: 'AI Workflows',
    title: 'AI Workflows',
    description: 'Turn repeated and complex foreign-trade work into executable, reviewable and improvable AI workflows.',
    points: ['Task breakdown', 'Prompts', 'Toolchain', 'Human review', 'Optimization']
  },
  {
    path: '/ai-practice/agents/',
    eyebrow: 'AI Agent',
    title: 'AI Agent',
    description: 'Testing what AI Agents can realistically handle in foreign trade, content, website and operations scenarios.',
    points: ['Task boundary', 'Tool use', 'Context', 'Safety checks', 'Delivery quality']
  },
  {
    path: '/ai-practice/automation/',
    eyebrow: 'AI Automation',
    title: 'AI Automation',
    description: 'Use automation to reduce repetitive work without replacing real judgment and business understanding.',
    points: ['Data organization', 'Content support', 'Workflow triggers', 'Quality control', 'Human fallback']
  },
  {
    path: '/ai-practice/tools/',
    eyebrow: 'AI Tool Tests',
    title: 'AI Tool Tests',
    description: 'Not another tool list. This section records how tools perform in real foreign-trade, website and content work.',
    points: ['Use case', 'Process', 'Pros and cons', 'Boundary', 'Worth using?']
  },
  {
    path: '/website/',
    eyebrow: 'Website Building',
    title: 'Website',
    description: 'A hub for B2B websites, Next.js, WordPress, CMS/admin systems, deployment, multilingual structure, SEO and AI-assisted website building.',
    points: ['Positioning', 'Tech route', 'Content model', 'Deployment', 'SEO foundation']
  },
  {
    path: '/website/b2b-website/',
    eyebrow: 'B2B Website',
    title: 'B2B Website',
    description: 'A foreign-trade website is not a brochure. It is a system for products, content, trust and buyer decision-making.',
    points: ['Architecture', 'Content plan', 'Trust proof', 'Inquiry path', 'SEO indexing']
  },
  {
    path: '/website/nextjs/',
    eyebrow: 'Next.js',
    title: 'Next.js',
    description: 'Real notes on building modern foreign-trade and personal brand websites with Next.js.',
    points: ['App Router', 'Static export', 'Components', 'Performance', 'Deployment']
  },
  {
    path: '/website/wordpress/',
    eyebrow: 'WordPress',
    title: 'WordPress',
    description: 'When WordPress fits foreign-trade websites, how to choose themes/plugins, and where its maintenance limits are.',
    points: ['Theme choice', 'Plugin boundary', 'Editing', 'Performance', 'Maintenance']
  },
  {
    path: '/website/cms-admin/',
    eyebrow: 'CMS & Admin',
    title: 'CMS & Admin',
    description: 'Content models, admin fields, permissions, media library, SEO fields and future self-built backend planning.',
    points: ['Content model', 'Admin fields', 'Permissions', 'Media management', 'Data API']
  },
  {
    path: '/website/cases/',
    eyebrow: 'Website Cases',
    title: 'Website Cases',
    description: 'Real website projects, problems, deployment notes, adjustments and reviews.',
    points: ['Requirements', 'Tech choice', 'Page building', 'Deployment issues', 'Review']
  },
  {
    path: '/training/',
    eyebrow: 'Training',
    title: 'Training',
    description: 'Turn foreign trade, AI and website practice into executable methods for courses, corporate training and consulting.',
    points: ['Foreign trade', 'AI practice', 'Website practice', 'Corporate training', '1-on-1 consulting']
  },
  {
    path: '/training/foreign-trade/',
    eyebrow: 'Foreign Trade Course',
    title: 'Foreign Trade Course',
    description: 'Build practical foreign-trade ability around customer development, platform operations, customs data, inquiry follow-up and execution.',
    points: ['Product understanding', 'Market judgment', 'Buyer profile', 'Channel selection', 'Execution review']
  },
  {
    path: '/training/ai-practice/',
    eyebrow: 'AI Practice Course',
    title: 'AI Practice Course',
    description: 'Help companies and individuals put AI into real work instead of staying at concept or tool-demo level.',
    points: ['Business scenarios', 'Workflows', 'Agents', 'Automation', 'Safety boundary']
  },
  {
    path: '/training/website/',
    eyebrow: 'Website Course',
    title: 'Website Course',
    description: 'Build practical website capability around B2B websites, Next.js, WordPress, CMS, deployment and SEO.',
    points: ['Planning', 'Pages', 'Backend model', 'Deployment', 'SEO foundation']
  },
  {
    path: '/training/corporate/',
    eyebrow: 'Corporate Training',
    title: 'Corporate Training',
    description: 'Training for business owners, foreign-trade managers and teams, designed around real business problems.',
    points: ['Business diagnosis', 'Team execution', 'Customer development', 'AI application', 'Website system']
  },
  {
    path: '/projects/',
    eyebrow: 'Projects',
    title: 'Projects',
    description: 'Real projects, website projects, SOHO projects, website building projects and foreign-trade operation cases from Phoenix.',
    points: ['Real projects', 'In-progress status', 'Problem background', 'Process', 'Review']
  }
];

export const routePagesByLocale: Record<Locale, RoutePageContent[]> = {
  zh: zhRoutePages,
  en: enRoutePages
};

export const routePages = zhRoutePages;

export function getRoutePage(path: string, locale: Locale = 'zh'): RoutePageContent {
  const normalizedPath = path.endsWith('/') ? path : `${path}/`;
  const page = routePagesByLocale[locale].find((item) => item.path === normalizedPath);

  if (!page) {
    throw new Error(`Route page content not found: ${path}`);
  }

  return page;
}

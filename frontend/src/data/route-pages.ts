export interface RoutePageContent {
  path: string;
  eyebrow: string;
  title: string;
  description: string;
  points: string[];
}

export const routePages: RoutePageContent[] = [
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

export function getRoutePage(path: string): RoutePageContent {
  const normalizedPath = path.endsWith('/') ? path : `${path}/`;
  const page = routePages.find((item) => item.path === normalizedPath);

  if (!page) {
    throw new Error(`Route page content not found: ${path}`);
  }

  return page;
}

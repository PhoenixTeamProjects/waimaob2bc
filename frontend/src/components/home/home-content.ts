import type { Locale } from '@/config/i18n';

export type HomeCopy = {
  eyebrow: string;
  title: string;
  lead: string;
  primaryCta: string;
  secondaryCta: string;
  matrixEyebrow: string;
  matrixTitle: string;
  matrixLead: string;
  capabilityEyebrow: string;
  capabilityTitle: string;
  capabilityLead: string;
  showcaseEyebrow: string;
  showcaseTitle: string;
  showcaseLead: string;
  flowEyebrow: string;
  flowTitle: string;
  flowLead: string;
  trustEyebrow: string;
  trustTitle: string;
  mediaEyebrow: string;
  mediaTitle: string;
  mediaLead: string;
  finalTitle: string;
  finalLead: string;
  blogCta: string;
};

export const homeCopy: Record<Locale, HomeCopy> = {
  zh: {
    eyebrow: 'Phoenix Personal Brand',
    title: '把外贸、AI 与建站，做成可执行的增长系统',
    lead:
      '我不站在外贸之外讲外贸。这里记录一线客户开发、平台运营、AI 工作流、独立站和 SOHO 实战，把复杂问题拆成能落地的步骤。',
    primaryCta: '进入实战内容',
    secondaryCta: '课程咨询',
    matrixEyebrow: 'Operating Matrix',
    matrixTitle: '不是知识堆叠，而是一套正在运行的外贸操作系统',
    matrixLead:
      '内容围绕客户开发、平台运营、AI 实战、建站、项目案例和课程培训展开，每个模块都服务于真实执行。',
    capabilityEyebrow: 'Capability System',
    capabilityTitle: '从线索、内容、网站到自动化，把增长链路接起来',
    capabilityLead:
      '我更关注“下一步怎么做”：找到客户、判断机会、搭建站点、写出内容、追踪数据，并用 AI 提高执行密度。',
    showcaseEyebrow: 'Field Notes',
    showcaseTitle: '把真实项目、真实问题和真实复盘沉淀成公开内容',
    showcaseLead:
      '这个网站不是包装出来的机构站，而是一个持续更新的工作台：记录建站、运营、培训、工具测试和项目案例。',
    flowEyebrow: 'Service Flow',
    flowTitle: '从诊断到落地，所有服务都围绕执行闭环',
    flowLead:
      '先判断业务阶段，再搭建内容与获客系统，最后通过复盘让方法持续迭代。',
    trustEyebrow: 'Proof of Practice',
    trustTitle: '长期在一线执行，才知道工具和方法哪里真的有用',
    mediaEyebrow: 'Public Evidence',
    mediaTitle: '吕斌的公开报道与项目背书',
    mediaLead:
      '公开报道会按“直接提及吕斌”和“吕斌深度参与建设的平台/产业生态报道”分层展示：既呈现个人授课经历，也呈现沣东跨境电商直播基地从 0 到 1 的真实项目背书。',
    finalTitle: '如果你想把外贸做得更系统，我们可以从一次诊断开始',
    finalLead:
      '无论你关注客户开发、AI 工作流、独立站还是团队培训，都可以先把当前问题讲清楚，再决定下一步。',
    blogCta: '阅读最新文章'
  },
  en: {
    eyebrow: 'Phoenix Personal Brand',
    title: 'Foreign trade, AI and websites as one executable growth system',
    lead:
      'This is not theory from the sidelines. Phoenix documents frontline customer development, platform operations, AI workflows, independent websites and SOHO execution.',
    primaryCta: 'Read Practical Content',
    secondaryCta: 'Course Inquiry',
    matrixEyebrow: 'Operating Matrix',
    matrixTitle: 'Not a content pile, but a working operating system',
    matrixLead:
      'The site connects foreign-trade operations, AI practice, website building, project cases and training into one practical execution map.',
    capabilityEyebrow: 'Capability System',
    capabilityTitle: 'Connect leads, content, websites and automation',
    capabilityLead:
      'The focus is always the next executable step: find customers, judge opportunities, build pages, publish content, track data and use AI to increase output density.',
    showcaseEyebrow: 'Field Notes',
    showcaseTitle: 'Real projects, real problems, real reviews',
    showcaseLead:
      'This is a living workbench for website building, operations, training, tool testing and project cases.',
    flowEyebrow: 'Service Flow',
    flowTitle: 'From diagnosis to execution, every service closes the loop',
    flowLead:
      'Start with the business stage, build the content and lead-generation system, then review and iterate.',
    trustEyebrow: 'Proof of Practice',
    trustTitle: 'Frontline execution is what separates useful methods from noise',
    mediaEyebrow: 'Public Evidence',
    mediaTitle: 'Public coverage and project evidence for Lv Bin',
    mediaLead:
      'Public reports are separated into direct mentions of Lv Bin and reports about the platform and ecosystem he helped build, keeping the personal evidence strong and accurate.',
    finalTitle: 'If you want a more systematic foreign-trade engine, start with diagnosis',
    finalLead:
      'Whether your focus is customer development, AI workflows, websites or team training, the first step is to clarify the current bottleneck.',
    blogCta: 'Read Latest Posts'
  }
};

export const matrixItems = {
  zh: [
    ['客户开发', '从画像、名单、触达、跟进到复盘，建立可持续线索系统。'],
    ['AI 实战', '用工作流、Agent 与自动化减少重复劳动，提高执行密度。'],
    ['建站系统', '把内容、SEO、CMS、GitHub 与 Hostinger 部署串成可维护流程。'],
    ['课程培训', '面向个人和企业，把方法讲到能执行、能检查、能复盘。']
  ],
  en: [
    ['Customer Development', 'Build a repeatable pipeline from targeting to follow-up.'],
    ['AI Practice', 'Use workflows, agents and automation to reduce repetitive work.'],
    ['Website System', 'Connect content, SEO, CMS, GitHub and Hostinger deployment.'],
    ['Training', 'Turn methods into executable and reviewable team routines.']
  ]
};

export const flowItems = {
  zh: ['诊断阶段', '系统搭建', '执行陪跑', '数据复盘'],
  en: ['Diagnosis', 'System Setup', 'Execution', 'Review']
};

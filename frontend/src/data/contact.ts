import type { ContactField, InquiryOption } from '@/types/content';

export const inquiryOptions: InquiryOption[] = [
  {
    key: 'course',
    label: { zh: '课程咨询', en: 'Course inquiry' },
    description: {
      zh: '适合了解外贸、AI、建站相关课程方向。',
      en: 'For foreign trade, AI and website course inquiries.'
    }
  },
  {
    key: 'corporate-training',
    label: { zh: '企业内训', en: 'Corporate training' },
    description: {
      zh: '适合企业团队围绕真实业务问题做定制培训。',
      en: 'For company teams that need customized training around real business problems.'
    }
  },
  {
    key: 'one-on-one',
    label: { zh: '一对一辅导', en: 'One-on-one consulting' },
    description: {
      zh: '适合个人或小团队围绕具体执行问题做辅导。',
      en: 'For individuals or small teams working through specific execution problems.'
    }
  },
  {
    key: 'foreign-trade',
    label: { zh: '外贸运营问题', en: 'Foreign-trade operations' },
    description: {
      zh: '适合客户开发、平台运营、询盘跟进、SOHO 等问题。',
      en: 'For customer development, platform operations, inquiry follow-up and SOHO issues.'
    }
  },
  {
    key: 'ai-practice',
    label: { zh: 'AI实战问题', en: 'AI practice' },
    description: {
      zh: '适合 AI 工作流、Agent、自动化和团队 AI 落地。',
      en: 'For AI workflows, agents, automation and team adoption.'
    }
  },
  {
    key: 'website',
    label: { zh: '建站问题', en: 'Website building' },
    description: {
      zh: '适合独立站、CMS、后台、部署、多语言和 SEO 问题。',
      en: 'For independent websites, CMS, admin systems, deployment, multilingual setup and SEO.'
    }
  },
  {
    key: 'cooperation',
    label: { zh: '商务合作', en: 'Business cooperation' },
    description: {
      zh: '适合公开可沟通的合作、采访、活动和内容共创。',
      en: 'For public cooperation, interviews, events and content collaboration.'
    }
  }
];

export const contactFields: ContactField[] = [
  {
    name: 'name',
    label: { zh: '称呼', en: 'Name' },
    placeholder: { zh: '请填写你的称呼', en: 'Your name' },
    type: 'text',
    required: true
  },
  {
    name: 'company',
    label: { zh: '公司 / 团队', en: 'Company / team' },
    placeholder: { zh: '可填写公司、团队或个人情况', en: 'Company, team or personal context' },
    type: 'text',
    required: false
  },
  {
    name: 'contact',
    label: { zh: '联系方式', en: 'Contact method' },
    placeholder: { zh: '邮箱、微信或其他你方便的联系方式', en: 'Email, WeChat or another preferred contact method' },
    type: 'text',
    required: true
  },
  {
    name: 'inquiryType',
    label: { zh: '咨询类型', en: 'Inquiry type' },
    placeholder: { zh: '请选择咨询类型', en: 'Choose an inquiry type' },
    type: 'select',
    required: true
  },
  {
    name: 'message',
    label: { zh: '具体问题', en: 'Message' },
    placeholder: {
      zh: '请简单说明你的行业、当前问题、目标和希望 Phoenix 帮你判断的内容。',
      en: 'Briefly describe your industry, current problem, goal and what you want Phoenix to help evaluate.'
    },
    type: 'textarea',
    required: true
  }
];

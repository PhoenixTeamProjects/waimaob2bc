import type { Locale } from '@/config/i18n';

export interface MediaCoverageItem {
  title: Record<Locale, string>;
  source: Record<Locale, string>;
  publishedAt: string;
  url: string;
  relation: Record<Locale, string>;
  summary: Record<Locale, string>;
  directlyMentionsPhoenix: boolean;
}

export const mediaCoverageItems: MediaCoverageItem[] = [
  {
    title: {
      zh: '沣东跨境电商直播基地首场公开课成功举办',
      en: 'The first public course of Fengdong Cross-border E-commerce Live Streaming Base was held'
    },
    source: {
      zh: '中国（陕西）自由贸易试验区官网',
      en: 'China (Shaanxi) Pilot Free Trade Zone official website'
    },
    publishedAt: '2024-01-25',
    url: 'https://ftz.shaanxi.gov.cn/pgfcg/pgfc/vQneei.htm',
    relation: {
      zh: '直接提及吕斌',
      en: 'Directly mentions Lv Bin'
    },
    summary: {
      zh: '官方报道显示，公开课主题为“品牌出海正当时，TikTok 新蓝海”，吕斌担任主讲讲师，分享独立站运营、外贸行业知识、海外选品与建站实操。',
      en: 'The official report records Lv Bin as the lecturer for a public course on brand globalization, TikTok opportunities, independent website operations, product selection and practical website building.'
    },
    directlyMentionsPhoenix: true
  },
  {
    title: {
      zh: '沣东跨境电商直播基地正式运营',
      en: 'Fengdong Cross-border E-commerce Live Streaming Base officially started operation'
    },
    source: {
      zh: '西咸新区管委会官网',
      en: 'Xixian New Area Administrative Committee official website'
    },
    publishedAt: '2024-01-04',
    url: 'http://www.xixianxinqu.gov.cn/xwzx/xcdt/1742849035114979329.html',
    relation: {
      zh: '基地背景报道，未直接点名吕斌',
      en: 'Base background report; does not directly name Lv Bin'
    },
    summary: {
      zh: '报道介绍沣东跨境电商直播基地正式运营，以及 TikTok 跨境直播、海外仓、供应链与跨境电商服务体系。',
      en: 'The report introduces the base operation, TikTok cross-border livestreaming, overseas warehouse, supply chain and cross-border e-commerce service system.'
    },
    directlyMentionsPhoenix: false
  },
  {
    title: {
      zh: '“立体丝路” 联通世界',
      en: 'A multidimensional Silk Road connects the world'
    },
    source: {
      zh: '中国一带一路网 / 陕西日报',
      en: 'Belt and Road Portal / Shaanxi Daily'
    },
    publishedAt: '2024-01-30',
    url: 'https://www.yidaiyilu.gov.cn/p/027R5MHO.html',
    relation: {
      zh: '沣东跨境直播基地产业背景，未直接点名吕斌',
      en: 'Industry background of Fengdong base; does not directly name Lv Bin'
    },
    summary: {
      zh: '国家级平台转载陕西日报报道，介绍沣东跨境电商直播基地通过“线下物流 + 线上直播”促进区域数字贸易发展。',
      en: 'A national-level portal republishes Shaanxi Daily’s report on the base using offline logistics plus online livestreaming to support regional digital trade.'
    },
    directlyMentionsPhoenix: false
  },
  {
    title: {
      zh: '阿里巴巴淘宝直播电商产业基地落地西咸新区沣东新城',
      en: 'Alibaba Taobao livestreaming e-commerce industrial base landed in Fengdong New City'
    },
    source: {
      zh: '西咸新区管委会官网',
      en: 'Xixian New Area Administrative Committee official website'
    },
    publishedAt: '2024-10-11',
    url: 'http://www.xixianxinqu.gov.cn/xwzx/xcdt/1844669302540140545.html',
    relation: {
      zh: '沣东跨境电商产业生态背景，未直接点名吕斌',
      en: 'Fengdong cross-border e-commerce ecosystem background; does not directly name Lv Bin'
    },
    summary: {
      zh: '报道呈现沣东新城跨境电商、直播电商和产业基地扩容背景，可作为区域产业生态佐证。',
      en: 'The report shows the expansion of Fengdong’s cross-border and livestreaming e-commerce ecosystem, useful as regional industry context.'
    },
    directlyMentionsPhoenix: false
  },
  {
    title: {
      zh: '阿里国际 AITIC・AI 跨境电商基地暨人工智能人才孵化中心在沣东新城启动',
      en: 'Alibaba International AITIC AI cross-border e-commerce base launched in Fengdong New City'
    },
    source: {
      zh: '西咸新区沣东新城管委会官网',
      en: 'Fengdong New City Administrative Committee official website'
    },
    publishedAt: '2025-08-03',
    url: 'http://fdxc.xixianxinqu.gov.cn/xwzx/mtjj/1967478371675312130.html',
    relation: {
      zh: '同区域 AI 与跨境电商产业生态背景，未直接点名吕斌',
      en: 'Same regional AI and cross-border e-commerce ecosystem background; does not directly name Lv Bin'
    },
    summary: {
      zh: '报道用于说明沣东新城跨境电商与 AI 人才孵化生态，不作为 Phoenix 个人直接报道。',
      en: 'The report is used to describe Fengdong’s cross-border e-commerce and AI talent incubation ecosystem, not as direct personal coverage.'
    },
    directlyMentionsPhoenix: false
  }
];

export function getMediaCoverage(locale: Locale) {
  return mediaCoverageItems.map((item) => ({
    title: item.title[locale],
    source: item.source[locale],
    publishedAt: item.publishedAt,
    url: item.url,
    relation: item.relation[locale],
    summary: item.summary[locale],
    directlyMentionsPhoenix: item.directlyMentionsPhoenix
  }));
}

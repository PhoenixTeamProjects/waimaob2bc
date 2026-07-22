import Link from 'next/link';
import { localizePath, type Locale } from '@/config/i18n';
import { CinematicBackground } from '@/components/visual/CinematicBackground';
import { CursorAura } from '@/components/visual/CursorAura';
import { FilmGrain } from '@/components/visual/FilmGrain';
import { ParticleCanvas } from '@/components/visual/ParticleCanvas';
import { getMediaCoverage } from '@/data/media';
import { profile } from '@/data/profile';
import type { Post } from '@/types/content';

const englishMetrics = [
  'Companies trained or served',
  'Students trained',
  'Companies operated',
  'Multi-industry practice'
];

const operatingMap = {
  zh: [
    {
      label: '企业经营',
      title: '从深圳、长沙到西安',
      text: '参与跨境电商及外贸公司经营，理解老板、团队、产品、现金流和客户开发的真实压力。'
    },
    {
      label: '基地建设',
      title: '沣东跨境电商直播基地',
      text: '曾任外贸总监、讲师及股东，深度参与基地从 0 到 1 的建设、运营和培训体系搭建。'
    },
    {
      label: '外贸一线',
      title: '客户开发与平台运营',
      text: '持续做客户画像、阿里国际站、海关数据、独立站、海外社媒和 SOHO 实战。'
    },
    {
      label: '方法输出',
      title: '课程、企业内训、公开内容',
      text: '把真实项目中的判断、动作、坑和复盘，拆成外贸人能执行的方法。'
    }
  ],
  en: [
    {
      label: 'Business',
      title: 'From Shenzhen and Changsha to Xi’an',
      text: 'Foreign-trade company operations, real pressure from products, teams, cash flow and customer development.'
    },
    {
      label: 'Base building',
      title: 'Fengdong cross-border e-commerce base',
      text: 'Foreign trade director, lecturer and shareholder, deeply involved in building the base from zero to one.'
    },
    {
      label: 'Frontline',
      title: 'Customer development and platform operations',
      text: 'Customer profiling, Alibaba.com, customs data, independent websites, social media and SOHO practice.'
    },
    {
      label: 'Methods',
      title: 'Courses, corporate training and content',
      text: 'Turning real decisions, actions, pitfalls and reviews into executable methods.'
    }
  ]
};

const battleStations = {
  zh: [
    ['客户开发', 'Google、海关数据、社媒、邮箱、WhatsApp，把客户从名单变成可跟进对象。'],
    ['阿里国际站', '产品体系、关键词、标题、图片、RFQ、询盘和数据复盘。'],
    ['外贸独立站', '网站架构、内容模型、多语言、SEO、信任证明和询盘路径。'],
    ['AI工作流', '把调研、内容、客户分析、建站和运营变成可复用流程。'],
    ['SOHO实战', '行业选择、成本控制、客户开发和真实项目复盘。'],
    ['企业内训', '面向老板、外贸负责人和团队，把方法讲到能落地执行。']
  ],
  en: [
    ['Customer development', 'Search, customs data, social, email and WhatsApp, turning lists into follow-up targets.'],
    ['Alibaba.com', 'Product structure, keywords, titles, images, RFQ, inquiries and data review.'],
    ['Independent websites', 'Architecture, content model, multilingual SEO, trust proof and inquiry paths.'],
    ['AI workflows', 'Reusable workflows for research, content, customer analysis, websites and operations.'],
    ['SOHO practice', 'Industry choice, cost control, customer development and project reviews.'],
    ['Corporate training', 'Practical training for owners, foreign-trade managers and teams.']
  ]
};

const readerPaths = {
  zh: [
    ['想找客户', '外贸运营', '/foreign-trade/'],
    ['想用 AI 提效', 'AI实战', '/ai-practice/'],
    ['想做独立站', '建站', '/website/'],
    ['想学习或内训', '课程培训', '/training/']
  ],
  en: [
    ['Need customers', 'Foreign Trade', '/foreign-trade/'],
    ['Need AI efficiency', 'AI Practice', '/ai-practice/'],
    ['Need a website', 'Website', '/website/'],
    ['Need training', 'Training', '/training/']
  ]
};

export function HomeExperience({
  locale,
  posts,
  metrics
}: {
  locale: Locale;
  posts: Post[];
  metrics: Array<{ value: string; label: string }>;
}) {
  const media = getMediaCoverage(locale);
  const directMedia = media.find((item) => item.directlyMentionsPhoenix);
  const platformMedia = media.filter((item) => !item.directlyMentionsPhoenix).slice(0, 3);
  const localizedMetrics =
    locale === 'en'
      ? metrics.map((metric, index) => ({ value: metric.value, label: englishMetrics[index] ?? metric.label }))
      : metrics;
  const prefix = locale === 'zh' ? '' : '/en';

  return (
    <main className="executive-home">
      <CinematicBackground />
      <ParticleCanvas />
      <CursorAura />
      <section className="executive-hero">
        <div className="executive-orb executive-orb-left" aria-hidden="true" />
        <div className="executive-orb executive-orb-right" aria-hidden="true" />
        <div className="container executive-hero-grid">
          <div className="executive-copy">
            <p className="executive-kicker">{locale === 'zh' ? '吕斌 / Phoenix · 外贸实战操盘手' : 'Lv Bin / Phoenix · Foreign Trade Operator'}</p>
            <h1>
              {locale === 'zh'
                ? '把外贸经营、基地建设、AI 与独立站，做成一套实战方法'
                : 'Foreign trade operations, base building, AI and websites as one practical system'}
            </h1>
            <p className="executive-lead">
              {locale === 'zh'
                ? '曾任沣东跨境电商直播基地外贸总监、讲师及股东，深度参与基地从 0 到 1 的建设与运营；同时长期在客户开发、阿里国际站、独立站、AI 工作流和 SOHO 项目中持续实战。'
                : 'Lv Bin served as foreign trade director, lecturer and shareholder at Fengdong Cross-border E-commerce Live Streaming Base, while continuously working on customer development, platforms, websites, AI workflows and SOHO practice.'}
            </p>
            <div className="executive-actions">
              <Link className="button primary" href={localizePath('/foreign-trade/', locale)}>
                {locale === 'zh' ? '看外贸实战体系' : 'View trade system'}
              </Link>
              <Link className="button ghost executive-ghost" href={`${localizePath('/contact/', locale)}?type=course`}>
                {locale === 'zh' ? '课程与企业内训咨询' : 'Training inquiry'}
              </Link>
            </div>
          </div>

          <aside className="evidence-board" aria-label={locale === 'zh' ? '吕斌公开证据与业务身份' : 'Lv Bin evidence board'}>
            <div className="evidence-board-header">
              <span>{locale === 'zh' ? '公开证据链' : 'Evidence chain'}</span>
              <strong>{locale === 'zh' ? '吕斌（Phoenix）' : 'Lv Bin / Phoenix'}</strong>
            </div>
            <div className="evidence-grid">
              <div className="evidence-tile evidence-tile-large">
                <span>{locale === 'zh' ? '基地经历' : 'Base'}</span>
                <strong>{locale === 'zh' ? '沣东跨境电商直播基地' : 'Fengdong cross-border base'}</strong>
                <p>{locale === 'zh' ? '外贸总监 / 讲师 / 股东 / 从 0 到 1 参与建设' : 'Director / lecturer / shareholder / zero-to-one participation'}</p>
              </div>
              {localizedMetrics.slice(0, 2).map((metric) => (
                <div className="evidence-tile" key={metric.label}>
                  <strong>{metric.value}</strong>
                  <p>{metric.label}</p>
                </div>
              ))}
              <div className="evidence-tile">
                <strong>{locale === 'zh' ? '官方报道' : 'Official'}</strong>
                <p>{locale === 'zh' ? '公开课报道直接提及吕斌' : 'Official course report names Lv Bin'}</p>
              </div>
              <div className="evidence-tile">
                <strong>CEO</strong>
                <p>{locale === 'zh' ? '企业经营与外贸管理经历' : 'Business operation and trade management'}</p>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="executive-section executive-section-dark">
        <div className="container">
          <div className="executive-section-head">
            <p className="executive-kicker">{locale === 'zh' ? '业务主轴' : 'Business spine'}</p>
            <h2>{locale === 'zh' ? '这不是一个普通培训老师的履历' : 'Not a generic trainer profile'}</h2>
            <p>
              {locale === 'zh'
                ? '你的业务价值来自真实经营、真实基地、真实客户开发、真实培训交付。首页必须先把这条线打出来。'
                : 'The value comes from real operations, a real base, real customer development and real training delivery.'}
            </p>
          </div>
          <div className="operating-map">
            {operatingMap[locale].map((item, index) => (
              <article className="operating-node" key={item.title}>
                <span>{String(index + 1).padStart(2, '0')} · {item.label}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="base-proof-section">
        <div className="container base-proof-grid">
          <div className="base-proof-copy">
            <p className="executive-kicker">{locale === 'zh' ? '沣东基地背书' : 'Fengdong base proof'}</p>
            <h2>{locale === 'zh' ? '我参与扶持起来的跨境电商直播基地，不是纸面经历' : 'The cross-border base I helped build is not a paper credential'}</h2>
            <p>
              {locale === 'zh'
                ? '沣东跨境电商直播基地是吕斌个人品牌里非常重要的项目背书：外贸总监、讲师、股东、从 0 到 1 参与建设，并有官方报道和园区产业报道可验证。'
                : 'Fengdong base is a key project proof for Lv Bin: director, lecturer, shareholder, zero-to-one participation, with official reports and ecosystem coverage.'}
            </p>
          </div>
          <div className="base-proof-card">
            {directMedia ? (
              <Link href={directMedia.url} target="_blank" rel="noreferrer" className="official-report-card">
                <span>{locale === 'zh' ? '官方报道直接提及吕斌' : 'Official report directly names Lv Bin'}</span>
                <strong>{directMedia.title}</strong>
                <p>{directMedia.source} · {directMedia.publishedAt}</p>
              </Link>
            ) : null}
            <div className="platform-report-list">
              {platformMedia.map((item) => (
                <Link href={item.url} target="_blank" rel="noreferrer" key={item.url}>
                  <strong>{item.title}</strong>
                  <span>{item.relation}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="executive-section">
        <div className="container">
          <div className="executive-section-head wide">
            <p className="executive-kicker">{locale === 'zh' ? '外贸作战台' : 'Operating room'}</p>
            <h2>{locale === 'zh' ? '我现在仍然在执行的业务，不是栏目堆叠' : 'Current work, not a pile of categories'}</h2>
            <p>
              {locale === 'zh'
                ? '客户开发、平台运营、独立站、AI、SOHO 和培训不是分散标签，它们共同组成一个外贸业务系统。'
                : 'Customer development, platforms, websites, AI, SOHO and training form one foreign-trade operating system.'}
            </p>
          </div>
          <div className="battle-grid">
            {battleStations[locale].map(([title, text], index) => (
              <article className={index === 0 ? 'battle-card battle-card-feature' : 'battle-card'} key={title}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="executive-section executive-section-muted">
        <div className="container reader-grid">
          <div className="executive-section-head">
            <p className="executive-kicker">{locale === 'zh' ? '从问题进入' : 'Start from the problem'}</p>
            <h2>{locale === 'zh' ? '国内外贸人来到这里，应该一眼知道从哪里开始' : 'Visitors should immediately know where to start'}</h2>
          </div>
          <div className="reader-paths">
            {readerPaths[locale].map(([problem, title, href]) => (
              <Link href={localizePath(href, locale)} key={href}>
                <span>{problem}</span>
                <strong>{title}</strong>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="executive-section posts-section">
        <div className="container">
          <div className="executive-section-head">
            <p className="executive-kicker">{locale === 'zh' ? '实战内容' : 'Practical notes'}</p>
            <h2>{locale === 'zh' ? '把正在发生的外贸、AI 与建站实战写下来' : 'Documenting active work in trade, AI and websites'}</h2>
          </div>
          <div className="executive-post-grid">
            {posts.map((post) => (
              <article className="executive-post-card" key={post.slug}>
                <p>{post.typeLabel} · {post.publishedAt}</p>
                <h3>{post.title}</h3>
                <span>{post.excerpt}</span>
                <Link href={`${prefix}/blog/${post.slug}/`}>{locale === 'zh' ? '阅读全文' : 'Read more'}</Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="executive-final">
        <div className="container executive-final-card">
          <div>
            <p className="executive-kicker">{locale === 'zh' ? '课程与企业内训' : 'Courses and training'}</p>
            <h2>{locale === 'zh' ? '不讲空话，只讲能执行的外贸实战' : 'No empty talk, only executable foreign-trade practice'}</h2>
            <p>
              {locale === 'zh'
                ? '如果你正在做外贸、AI、建站、SOHO 或团队培训，可以先把当前问题讲清楚。我们先判断业务卡点，再决定适合阅读、咨询、课程还是企业内训。'
                : 'If you are working on foreign trade, AI, websites, SOHO or team training, clarify the bottleneck first, then choose content, consulting, courses or corporate training.'}
            </p>
          </div>
          <div className="executive-actions">
            <Link className="button primary" href={`${localizePath('/contact/', locale)}?type=course`}>
              {locale === 'zh' ? '课程咨询' : 'Course inquiry'}
            </Link>
            <Link className="button ghost executive-ghost" href={localizePath('/about/', locale)}>
              {locale === 'zh' ? '了解吕斌' : 'About Lv Bin'}
            </Link>
          </div>
        </div>
      </section>
      <FilmGrain />
    </main>
  );
}

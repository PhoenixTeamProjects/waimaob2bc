import { Container } from '@/components/layout/Container';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { JsonLd } from '@/components/ui/JsonLd';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { localizePath, type Locale } from '@/config/i18n';
import { profile } from '@/data/profile';
import { getMediaCoverage } from '@/data/media';
import {
  createBreadcrumbStructuredData,
  getBreadcrumbs
} from '@/lib/seo/breadcrumbs';

const aboutSections = {
  zh: [
    {
      title: '吕斌是谁',
      body: '吕斌，英文品牌名 Phoenix，一个长期在外贸、企业经营、团队管理、培训交付和数字化工具里来回切换的一线操盘手。'
    },
    {
      title: '为什么做外贸',
      body: '外贸不是单一渠道，而是一套从产品理解、市场判断、客户获取、信任建设到持续跟进的系统。'
    },
    {
      title: '从创业经营，到外贸一线',
      body: '疫情以前，吕斌曾在深圳和长沙参与跨境电商及外贸公司经营；回到西安后，又持续参与外贸基地、贸易公司、工业科技公司和企业外贸部门的管理与实战。'
    },
    {
      title: '沣东跨境电商直播基地经历',
      body: '吕斌曾任沣东跨境电商直播基地外贸总监、讲师及股东，深度参与基地从 0 到 1 的建设、运营和培训体系搭建。基地及园区后续获得官方平台和权威媒体公开报道。'
    },
    {
      title: '为什么研究 AI',
      body: 'AI 不是炫技工具，而是把重复劳动、资料整理、内容生产、客户分析和建站流程重新组织起来的效率系统。'
    },
    {
      title: '为什么做 SOHO',
      body: '因为外贸方法不能只停留在课堂里，必须回到真实产品、真实客户、真实成本和真实复盘。'
    }
  ],
  en: [
    {
      title: 'Who Lv Bin / Phoenix is',
      body: 'Lv Bin, also known by the brand name Phoenix, is a frontline practitioner moving between foreign trade, business operations, team management, training delivery and digital tools.'
    },
    {
      title: 'Why foreign trade',
      body: 'Foreign trade is not one channel. It is a system from product understanding and market judgment to trust building and follow-up.'
    },
    {
      title: 'From business operation to frontline practice',
      body: 'Lv Bin has participated in cross-border and foreign-trade company operations and later continued working across trade bases, companies and industrial business teams.'
    },
    {
      title: 'Fengdong base experience',
      body: 'Lv Bin served as foreign trade director, lecturer and shareholder at Fengdong Cross-border E-commerce Live Streaming Base, deeply participating in its development, operation and training system from zero to one.'
    },
    {
      title: 'Why AI',
      body: 'AI is not a gimmick. It helps reorganize repetitive work, research, content, customer analysis and website workflows.'
    },
    {
      title: 'Why SOHO practice',
      body: 'Methods must be tested against real products, real customers, real costs and real review.'
    }
  ]
};

export function AboutPageContent({ locale }: { locale: Locale }) {
  const title =
    locale === 'zh'
      ? '我不是一个已经离开外贸一线的培训老师'
      : 'I am not a trainer who has left the frontline';
  const description =
    locale === 'zh'
      ? '我是吕斌，英文品牌名 Phoenix。直到今天，我仍然在做客户开发、平台运营、独立站、海外社媒、AI 和自己的 SOHO 项目。我分享的，是自己真正做过的事情。'
      : 'I am Lv Bin, also known as Phoenix. I still work on customer development, platform operations, websites, overseas social media, AI and SOHO practice.';
  const breadcrumbs = getBreadcrumbs('/about/', locale, locale === 'zh' ? '关于我' : 'About');
  const mediaCoverage = getMediaCoverage(locale);

  return (
    <section className="section page-section">
      <JsonLd data={createBreadcrumbStructuredData('/about/', locale, locale === 'zh' ? '关于我' : 'About')} />
      <Container>
        <Breadcrumbs items={breadcrumbs} />
        <div className="page-hero-panel">
          <SectionHeading eyebrow="About Lv Bin / Phoenix" title={title} description={description} />
          <div className="trust-mini-grid">
            {profile.trustMetrics.map((metric) => (
              <div className="metric-card" key={metric.label}>
                <strong>{metric.value}</strong>
                <span>{metric.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="about-story-grid">
          {aboutSections[locale].map((section) => (
            <section className="prose-card" key={section.title}>
              <h2>{section.title}</h2>
              <p>{section.body}</p>
            </section>
          ))}
        </div>

        <div className="two-column-band content-band">
          <section className="prose-card">
            <h2>{locale === 'zh' ? '我长期研究和执行什么' : 'Current practice'}</h2>
            <ul>
              {profile.currentPractice.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
          <section className="prose-card">
            <h2>{locale === 'zh' ? '公开行业方向' : 'Public industry directions'}</h2>
            <ul>
              {profile.publicIndustries.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
        </div>

        <div className="content-band">
          <div className="band-heading">
            <p className="eyebrow">{locale === 'zh' ? '公开报道' : 'Public coverage'}</p>
            <h2>{locale === 'zh' ? '媒体与官方平台公开信息' : 'Media and official-platform information'}</h2>
            <p>
              {locale === 'zh'
                ? '以下资料按“直接提及吕斌”和“吕斌深度参与建设的平台/产业生态报道”区分，既突出个人真实经历，也保持证据链准确。'
                : 'The following materials distinguish direct mentions of Lv Bin from reports about the platform and ecosystem he helped build, keeping the evidence strong and accurate.'}
            </p>
          </div>
          <div className="media-list-grid">
            {mediaCoverage.map((item) => (
              <a className="prose-card media-list-card" href={item.url} key={item.url} target="_blank" rel="noreferrer">
                <span className={item.directlyMentionsPhoenix ? 'evidence-pill direct' : 'evidence-pill'}>
                  {item.relation}
                </span>
                <h3>{item.title}</h3>
                <p>{item.summary}</p>
                <small>{item.source} · {item.publishedAt}</small>
              </a>
            ))}
          </div>
        </div>

        <div className="prose-card cta-card route-note">
          <div>
            <h2>{locale === 'zh' ? '吕斌的培训理念' : 'Lv Bin’s training philosophy'}</h2>
            <p>{profile.trainingPhilosophy}</p>
            <p>
              {locale === 'zh'
                ? '不讲空话，只讲正在发生的实战。内容必须回答：做了什么、为什么这样做、遇到什么问题、如何解决、结果如何、怎样复盘。'
                : 'No empty talk, only ongoing practice: what was done, why, what went wrong, how it was solved and how to review it.'}
            </p>
          </div>
          <a className="button primary" href={`${localizePath('/contact/', locale)}?type=course`}>
            {locale === 'zh' ? '课程咨询' : 'Course Inquiry'}
          </a>
        </div>
      </Container>
    </section>
  );
}

import Link from 'next/link';
import { Container } from '@/components/layout/Container';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { JsonLd } from '@/components/ui/JsonLd';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { localizePath, type Locale } from '@/config/i18n';
import { getCourses } from '@/lib/content/courses';
import {
  createBreadcrumbStructuredData,
  getBreadcrumbs
} from '@/lib/seo/breadcrumbs';
import { createCourseCollectionStructuredData } from '@/lib/seo/courses';

const trainingTracks = {
  zh: [
    {
      title: '外贸实战课程',
      href: '/training/foreign-trade/',
      description: '围绕客户开发、平台运营、询盘跟进和外贸一线执行。'
    },
    {
      title: 'AI实战课程',
      href: '/training/ai-practice/',
      description: '围绕 AI 工作流、Agent、自动化和真实业务落地。'
    },
    {
      title: '建站实战课程',
      href: '/training/website/',
      description: '围绕独立站、Next.js、WordPress、CMS、部署和 SEO。'
    },
    {
      title: '企业内训',
      href: '/training/corporate/',
      description: '围绕企业真实问题定制培训内容和落地路径。'
    }
  ],
  en: [
    {
      title: 'Foreign Trade Course',
      href: '/training/foreign-trade/',
      description: 'Customer development, platform operations, inquiry follow-up and frontline execution.'
    },
    {
      title: 'AI Practice Course',
      href: '/training/ai-practice/',
      description: 'AI workflows, agents, automation and practical business adoption.'
    },
    {
      title: 'Website Course',
      href: '/training/website/',
      description: 'Independent websites, Next.js, WordPress, CMS, deployment and SEO.'
    },
    {
      title: 'Corporate Training',
      href: '/training/corporate/',
      description: 'Training designed around real company problems and execution paths.'
    }
  ]
};

const intakeChecklist = {
  zh: [
    '咨询类型：课程学习、企业内训、一对一辅导或商务合作',
    '当前问题：客户开发、AI、建站、团队执行或其他业务问题',
    '基础情况：行业、团队规模、已有渠道和目标阶段',
    '公开边界：哪些信息可以用于案例复盘，哪些必须隐藏',
    '交付方式：具体形式、时间、价格和材料等待 Phoenix 确认后再公开'
  ],
  en: [
    'Inquiry type: course, corporate training, 1-on-1 consulting or cooperation',
    'Current problem: customer development, AI, websites, team execution or other business issues',
    'Context: industry, team size, existing channels and target stage',
    'Public boundary: what can be used for case review and what must stay private',
    'Delivery: format, timing, pricing and materials will be published only after Phoenix confirms them'
  ]
};

export function TrainingIndexPage({ locale }: { locale: Locale }) {
  const courses = getCourses(locale);
  const path = localizePath('/training/', locale);
  const title = locale === 'zh' ? '课程培训' : 'Training';
  const description =
    locale === 'zh'
      ? '把外贸、AI 和建站实战拆解成能执行的方法，服务课程咨询、企业内训和一对一辅导。'
      : 'Turn foreign trade, AI and website practice into executable methods for courses, corporate training and consulting.';
  const breadcrumbs = getBreadcrumbs('/training/', locale, title);

  return (
    <section className="section page-section">
      <JsonLd
        data={[
          createBreadcrumbStructuredData('/training/', locale, title),
          createCourseCollectionStructuredData(courses, path, locale)
        ]}
      />
      <Container>
        <Breadcrumbs items={breadcrumbs} />
        <SectionHeading eyebrow="Training" title={title} description={description} />

        <div className="training-track-grid">
          {trainingTracks[locale].map((track) => (
            <Link className="card" href={localizePath(track.href, locale)} key={track.href}>
              <h3>{track.title}</h3>
              <p>{track.description}</p>
            </Link>
          ))}
        </div>

        {courses.length > 0 ? (
          <div className="project-list">
            {courses.map((course) => (
              <article className="post-card" key={course.slug}>
                <p className="meta">
                  {course.typeLabel} · {course.statusLabel}
                </p>
                <h2>{course.title}</h2>
                <p>{course.summary}</p>
              </article>
            ))}
          </div>
        ) : (
          <div className="prose-card empty-state">
            <h2>{locale === 'zh' ? '等待真实课程资料' : 'Waiting for real course materials'}</h2>
            <p>
              {locale === 'zh'
                ? '当前不使用虚构课程占位，也不公开未确认的价格、班期、学员反馈或效果承诺。Phoenix 提供真实课程资料后，这里会补充课程结构和咨询说明。'
                : 'No fictional courses are used as placeholders. Unconfirmed pricing, schedule, student feedback or outcome claims will not be published.'}
            </p>
          </div>
        )}

        <div className="prose-card route-note">
          <h2>{locale === 'zh' ? '课程咨询需要的信息' : 'Information needed for course inquiry'}</h2>
          <ul>
            {intakeChecklist[locale].map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <Link className="button primary" href={`${localizePath('/contact/', locale)}?type=course`}>
            {locale === 'zh' ? '课程咨询' : 'Course Inquiry'}
          </Link>
        </div>
      </Container>
    </section>
  );
}

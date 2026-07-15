import Link from 'next/link';
import { Container } from '@/components/layout/Container';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { JsonLd } from '@/components/ui/JsonLd';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { localizePath, type Locale } from '@/config/i18n';
import { getProjects } from '@/lib/content/projects';
import {
  createBreadcrumbStructuredData,
  getBreadcrumbs
} from '@/lib/seo/breadcrumbs';
import { createProjectCollectionStructuredData } from '@/lib/seo/projects';

const projectTypes = {
  zh: [
    '真实项目',
    '网站项目',
    'SOHO项目',
    'AI建站项目',
    '外贸运营案例'
  ],
  en: [
    'Real projects',
    'Website projects',
    'SOHO projects',
    'AI website projects',
    'Foreign-trade operation cases'
  ]
};

const intakeChecklist = {
  zh: [
    '项目背景：行业、目标、当前问题',
    '执行过程：做了哪些动作、用了哪些工具',
    '阶段状态：进行中、已完成、暂停或复盘中',
    '可公开边界：哪些内容能展示，哪些必须隐藏',
    '结果与复盘：只写真实结果，不包装虚假成果'
  ],
  en: [
    'Background: industry, goal and current problem',
    'Process: actions taken and tools used',
    'Status: in progress, completed, paused or under review',
    'Public boundary: what can be shown and what must stay private',
    'Result and review: only real outcomes, no inflated claims'
  ]
};

export function ProjectIndexPage({ locale }: { locale: Locale }) {
  const projects = getProjects(locale);
  const path = localizePath('/projects/', locale);
  const title = locale === 'zh' ? '项目案例' : 'Projects';
  const description =
    locale === 'zh'
      ? '用于展示 Phoenix 的真实项目、网站项目、SOHO项目、AI建站项目和外贸运营案例。'
      : 'A place for Phoenix’s real projects, website projects, SOHO projects, AI website projects and foreign-trade operation cases.';
  const breadcrumbs = getBreadcrumbs('/projects/', locale, title);

  return (
    <section className="section page-section">
      <JsonLd
        data={[
          createBreadcrumbStructuredData('/projects/', locale, title),
          createProjectCollectionStructuredData(projects, path, locale)
        ]}
      />
      <Container>
        <Breadcrumbs items={breadcrumbs} />
        <SectionHeading eyebrow="Projects" title={title} description={description} />

        <div className="project-type-grid">
          {projectTypes[locale].map((item) => (
            <div className="process-item" key={item}>
              {item}
            </div>
          ))}
        </div>

        {projects.length > 0 ? (
          <div className="project-list">
            {projects.map((project) => (
              <article className="post-card" key={project.slug}>
                <p className="meta">
                  {project.typeLabel} · {project.statusLabel}
                </p>
                <h2>{project.title}</h2>
                <p>{project.summary}</p>
                <p className="tag-row">
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </p>
              </article>
            ))}
          </div>
        ) : (
          <div className="prose-card empty-state">
            <h2>{locale === 'zh' ? '等待真实项目素材' : 'Waiting for real project materials'}</h2>
            <p>
              {locale === 'zh'
                ? '当前不使用虚构案例占位。Phoenix 提供可公开的真实项目素材后，这里会展示项目背景、执行过程、阶段状态、结果与复盘。'
                : 'No fictional cases are used as placeholders. Once Phoenix provides real public project materials, this page will show background, process, status, results and review.'}
            </p>
          </div>
        )}

        <div className="prose-card route-note">
          <h2>{locale === 'zh' ? '项目案例录入标准' : 'Project intake standard'}</h2>
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

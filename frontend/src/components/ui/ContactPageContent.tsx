import { Container } from '@/components/layout/Container';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { JsonLd } from '@/components/ui/JsonLd';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { localizePath, type Locale } from '@/config/i18n';
import { getContactFields, getInquiryOptions } from '@/lib/content/contact';
import {
  createBreadcrumbStructuredData,
  getBreadcrumbs
} from '@/lib/seo/breadcrumbs';
import { createContactPageStructuredData } from '@/lib/seo/contact';

const directContacts = {
  email: 'support@waimaob2bc.com',
  phone: '18191027863'
};

export function ContactPageContent({ locale }: { locale: Locale }) {
  const title = locale === 'zh' ? '联系我' : 'Contact Phoenix';
  const description =
    locale === 'zh'
      ? '适合咨询外贸运营、AI实战、建站、企业内训、一对一辅导和商务合作。'
      : 'For foreign-trade operations, AI practice, website building, corporate training, one-on-one consulting and cooperation.';
  const path = localizePath('/contact/', locale);
  const breadcrumbs = getBreadcrumbs('/contact/', locale, title);
  const options = getInquiryOptions(locale);
  const fields = getContactFields(locale);

  return (
    <section className="section page-section">
      <JsonLd
        data={[
          createBreadcrumbStructuredData('/contact/', locale, title),
          createContactPageStructuredData(path, locale)
        ]}
      />
      <Container>
        <Breadcrumbs items={breadcrumbs} />
        <div className="page-hero-panel">
          <SectionHeading eyebrow="Contact" title={title} description={description} />
          <div className="contact-method-grid">
            <a className="contact-method" href={`mailto:${directContacts.email}`}>
              <span>{locale === 'zh' ? '邮箱' : 'Email'}</span>
              <strong>{directContacts.email}</strong>
            </a>
            <a className="contact-method" href={`tel:${directContacts.phone}`}>
              <span>{locale === 'zh' ? '电话' : 'Phone'}</span>
              <strong>{directContacts.phone}</strong>
            </a>
          </div>
        </div>

        <div className="contact-grid">
          <div className="prose-card">
            <h2>{locale === 'zh' ? '适合咨询的问题' : 'Suitable inquiry topics'}</h2>
            <div className="inquiry-option-list">
              {options.map((option) => (
                <div className="inquiry-option" key={option.key}>
                  <strong>{option.label}</strong>
                  <p>{option.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="prose-card contact-form-card">
            <h2>{locale === 'zh' ? '咨询表单' : 'Inquiry form'}</h2>
            <p>
              {locale === 'zh'
                ? '当前是静态站表单框架，先完整保留字段结构。后续接入后台后，数据将写入 contact_submissions 模块。'
                : 'This static-site form keeps the full field structure. After backend integration, data will be written to the contact_submissions module.'}
            </p>
            <form className="contact-form" aria-label={title}>
              {fields.map((field) => (
                <label key={field.name}>
                  <span>
                    {field.label}
                    {field.required ? ' *' : ''}
                  </span>
                  {field.type === 'textarea' ? (
                    <textarea placeholder={field.placeholder} disabled rows={5} />
                  ) : field.type === 'select' ? (
                    <select disabled defaultValue="">
                      <option value="">{field.placeholder}</option>
                      {options.map((option) => (
                        <option key={option.key} value={option.key}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  ) : (
                    <input placeholder={field.placeholder} type={field.type} disabled />
                  )}
                </label>
              ))}
              <button className="button primary" disabled type="button">
                {locale === 'zh' ? '等待后台接入' : 'Waiting for backend'}
              </button>
            </form>
          </div>
        </div>

        <div className="two-column-band content-band">
          <section className="prose-card">
            <h2>{locale === 'zh' ? '企业内训说明' : 'Corporate training'}</h2>
            <p>
              {locale === 'zh'
                ? '企业内训适合外贸团队、企业老板、运营负责人和正在搭建海外获客体系的公司。沟通时建议先说明行业、团队人数、已有渠道和最卡住的问题。'
                : 'Corporate training is for foreign-trade teams, business owners and companies building overseas lead-generation systems. Share your industry, team size, current channels and bottleneck first.'}
            </p>
          </section>
          <section className="prose-card">
            <h2>{locale === 'zh' ? '课程咨询 CTA' : 'Course inquiry CTA'}</h2>
            <p>
              {locale === 'zh'
                ? '如果你不确定自己适合外贸、AI、建站还是企业内训，可以先发当前问题，不需要一次讲完所有背景。'
                : 'If you are unsure whether you need foreign trade, AI, website or corporate training, start with the current problem.'}
            </p>
            <a className="button primary" href={`mailto:${directContacts.email}`}>
              {locale === 'zh' ? '发送课程咨询' : 'Send inquiry'}
            </a>
          </section>
        </div>

        <div className="prose-card route-note">
          <h2>{locale === 'zh' ? '隐私与真实性边界' : 'Privacy and authenticity boundary'}</h2>
          <ul>
            <li>
              {locale === 'zh'
                ? '请不要在公开页面展示敏感业务、客户、供应链或未确认项目细节。'
                : 'Do not expose sensitive business, customer, supply-chain or unconfirmed project details on public pages.'}
            </li>
            <li>
              {locale === 'zh'
                ? '邮箱和电话已按 Phoenix 当前确认信息公开；微信二维码、社交账号等其他资料等待真实素材后再补充。'
                : 'Email and phone are published based on Phoenix’s current confirmation. QR codes and social accounts will be added only after real materials are provided.'}
            </li>
            <li>
              {locale === 'zh'
                ? '咨询内容后续进入后台后，需要支持状态、备注、来源、咨询类型和隐私标记。'
                : 'After backend integration, inquiries should support status, notes, source, inquiry type and privacy flags.'}
            </li>
          </ul>
        </div>
      </Container>
    </section>
  );
}

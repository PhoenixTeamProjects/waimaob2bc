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
        <SectionHeading eyebrow="Contact" title={title} description={description} />

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
            <h2>{locale === 'zh' ? '咨询表单字段' : 'Inquiry form fields'}</h2>
            <p>
              {locale === 'zh'
                ? '当前是静态站表单框架，不会直接提交。后续接入后台后，数据将写入 contact_submissions 模块。'
                : 'This is the static-site form framework. It does not submit yet. After backend integration, data will be written to the contact_submissions module.'}
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
                ? '联系方式、微信二维码、邮箱和社交账号等待 Phoenix 提供真实资料后再公开。'
                : 'Contact details, QR codes, email and social accounts will be published only after Phoenix provides confirmed materials.'}
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

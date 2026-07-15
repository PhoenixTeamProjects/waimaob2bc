import { Container } from '@/components/layout/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { createMetadata } from '@/lib/seo/metadata';

export const metadata = createMetadata({
  title: '联系我',
  description: '课程咨询、企业内训、一对一咨询与商务合作入口。',
  path: '/contact/'
});

export default function ContactPage() {
  return (
    <section className="section page-section">
      <Container>
        <SectionHeading
          eyebrow="Contact"
          title="联系我"
          description="适合咨询外贸运营、AI实战、建站、企业内训、一对一辅导和商务合作。"
        />
        <div className="prose-card">
          <p>联系方式等待 Phoenix 提供真实资料后再填写。</p>
          <p>后续这里会接入咨询表单，并写入后台的 contact_submissions 模块。</p>
        </div>
      </Container>
    </section>
  );
}

import { ContactPageContent } from '@/components/ui/ContactPageContent';
import { createMetadata } from '@/lib/seo/metadata';

export const metadata = createMetadata({
  title: '联系我',
  description: '课程咨询、企业内训、一对一咨询与商务合作入口。',
  path: '/contact/'
});

export default function ContactPage() {
  return <ContactPageContent locale="zh" />;
}

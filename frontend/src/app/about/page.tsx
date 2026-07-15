import { Container } from '@/components/layout/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { createMetadata } from '@/lib/seo/metadata';

export const metadata = createMetadata({
  title: '关于我',
  description: 'Phoenix 的个人品牌故事、真实经历与实战方向。',
  path: '/about/'
});

export default function AboutPage() {
  return (
    <section className="section page-section">
      <Container>
        <SectionHeading
          eyebrow="About Phoenix"
          title="关于我"
          description="这里后续会放 Phoenix 的真实照片、经历、媒体资料、项目过程和培训记录。"
        />
        <div className="prose-card">
          <p>
            当前页面先保留品牌故事框架，不虚构照片、媒体链接、联系方式、课程价格或案例结果。
          </p>
          <p>
            内容表达会坚持真实、直接、有过程、有证据：做了什么，为什么这样做，遇到什么问题，如何解决，最后如何复盘。
          </p>
        </div>
      </Container>
    </section>
  );
}

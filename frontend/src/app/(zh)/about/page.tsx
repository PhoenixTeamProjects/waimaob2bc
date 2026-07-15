import { Container } from '@/components/layout/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { profile } from '@/data/profile';
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
          title="我不是一个已经离开外贸一线的培训老师"
          description="直到今天，我仍然在做客户开发、平台运营、独立站、海外社媒、AI 和自己的 SOHO 项目。我分享的，是自己真正做过的事情。"
        />
        <div className="prose-card">
          {profile.experience.map((item) => (
            <p key={item}>{item}</p>
          ))}
        </div>

        <div className="about-grid">
          <section className="prose-card">
            <h2>我长期研究和执行什么</h2>
            <ul>
              {profile.currentPractice.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
          <section className="prose-card">
            <h2>我接触过的公开行业方向</h2>
            <ul>
              {profile.publicIndustries.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
        </div>

        <div className="prose-card">
          <h2>我的培训理念</h2>
          <p>{profile.trainingPhilosophy}</p>
          <p>
            我不喜欢空洞理论、成功学、过度包装、虚假案例和只卖焦虑。内容必须回答：做了什么、为什么这样做、遇到什么问题、如何解决、结果如何、怎样复盘。
          </p>
        </div>
      </Container>
    </section>
  );
}

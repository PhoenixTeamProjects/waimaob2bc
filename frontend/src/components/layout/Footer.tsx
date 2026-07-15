import { siteConfig } from '@/config/site';

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <strong>{siteConfig.name}</strong>
          <p>{siteConfig.tagline}</p>
        </div>
        <div>
          <p>内容方向：外贸运营、海外社媒、AI 实战、AI 建站、课程与咨询。</p>
          <p>本站资料以 Phoenix 后续提供的真实信息为准。</p>
        </div>
      </div>
    </footer>
  );
}

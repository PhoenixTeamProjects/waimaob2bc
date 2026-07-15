'use client';

import { usePathname } from 'next/navigation';
import { getLocaleFromPath } from '@/config/i18n';
import { siteConfig } from '@/config/site';

export function Footer() {
  const locale = getLocaleFromPath(usePathname());

  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <strong>{siteConfig.name}</strong>
          <p>
            {locale === 'zh'
              ? siteConfig.tagline
              : 'Real practice, frontline execution, continuous testing.'}
          </p>
        </div>
        <div>
          <p>
            {locale === 'zh'
              ? '内容方向：外贸运营、社媒获客、AI实战、建站、课程与咨询。'
              : 'Topics: foreign trade operations, social lead generation, AI practice, websites, training and consulting.'}
          </p>
          <p>
            {locale === 'zh'
              ? '本站资料以 Phoenix 后续提供的真实信息为准。'
              : 'All content will be based on real materials provided by Phoenix.'}
          </p>
        </div>
      </div>
    </footer>
  );
}

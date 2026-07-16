'use client';

import { usePathname } from 'next/navigation';
import { getLocaleFromPath } from '@/config/i18n';
import { getFooterBrand, getFooterSections } from '@/config/footer';
import { siteConfig } from '@/config/site';
import Link from 'next/link';

export function Footer() {
  const locale = getLocaleFromPath(usePathname());
  const brand = getFooterBrand(locale);
  const sections = getFooterSections(locale);

  return (
    <footer className="site-footer">
      <div className="container footer-shell">
        <div className="footer-brand">
          <Link className="footer-logo" href={locale === 'zh' ? '/' : '/en/'}>
            <span>P</span>
            <strong>{brand.name}</strong>
          </Link>
          <p className="footer-subtitle">{brand.subtitle}</p>
          <p>{brand.description}</p>
          <div className="footer-contact">
            <a href={`mailto:${brand.email}`}>{brand.email}</a>
            <a href={`tel:${brand.phone}`}>{brand.phone}</a>
            <Link href={brand.cta.href}>{brand.cta.label}</Link>
          </div>
        </div>

        <nav className="footer-grid" aria-label={locale === 'zh' ? '页脚导航' : 'Footer navigation'}>
          {sections.map((section) => (
            <section className="footer-column" key={section.title}>
              <h2>{section.title}</h2>
              <ul>
                {section.links.map((link) => (
                  <li key={`${section.title}-${link.href}-${link.label}`}>
                    <Link href={link.href}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </nav>

        <div className="footer-bottom">
          <p>© 2026 {siteConfig.name} / waimaob2bc.com. All rights reserved.</p>
          <div>
            <span>{locale === 'zh' ? '备案信息预留' : 'ICP placeholder'}</span>
            <span>{locale === 'zh' ? '隐私政策预留' : 'Privacy policy placeholder'}</span>
            <Link href={locale === 'zh' ? '/sitemap.xml' : '/sitemap.xml'}>
              {locale === 'zh' ? '站点地图' : 'Sitemap'}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

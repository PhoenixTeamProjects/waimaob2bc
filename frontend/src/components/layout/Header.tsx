'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import {
  getAlternateLocale,
  getLocaleFromPath,
  localeLabels,
  localizePath,
  stripLocaleFromPath
} from '@/config/i18n';
import { getHeaderCta, getMainNavigation, type NavigationItem } from '@/config/navigation';

function normalizePath(path: string) {
  if (path === '/') {
    return '/';
  }

  return path.endsWith('/') ? path : `${path}/`;
}

function isItemActive(item: NavigationItem, pathname: string) {
  const currentPath = normalizePath(pathname);
  const itemPath = normalizePath(item.href);

  if (itemPath === '/' || itemPath === '/en/') {
    return currentPath === itemPath;
  }

  return currentPath === itemPath || currentPath.startsWith(itemPath);
}

export function Header() {
  const pathname = usePathname();
  const locale = getLocaleFromPath(pathname);
  const alternateLocale = getAlternateLocale(locale);
  const mainNavigation = getMainNavigation(locale);
  const headerCta = getHeaderCta(locale);
  const languageSwitchHref = localizePath(stripLocaleFromPath(pathname), alternateLocale);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [expandedItems, setExpandedItems] = useState<Record<string, boolean>>({});

  function toggleExpanded(label: string) {
    setExpandedItems((current) => ({
      ...current,
      [label]: !current[label]
    }));
  }

  return (
    <header className={`site-header site-header-${locale}`}>
      <div className="topbar" aria-label={locale === 'zh' ? '联系信息' : 'Contact information'}>
        <div className="container topbar-inner">
          <span>{locale === 'zh' ? '欢迎交流外贸、AI 与建站实战' : 'Foreign trade, AI and website practice'}</span>
          <div className="topbar-links">
            <a href="mailto:support@waimaob2bc.com">support@waimaob2bc.com</a>
            <a href="tel:18191027863">18191027863</a>
          </div>
        </div>
      </div>
      <div className="container header-inner">
        <Link className="brand" href="/" aria-label="Phoenix 首页">
          <span className="brand-mark">P</span>
          <span>
            <strong>Phoenix</strong>
            <small>
              {locale === 'zh'
                ? '外贸实战操盘手'
                : 'Foreign Trade Practitioner'}
            </small>
          </span>
        </Link>
        <nav className="main-nav desktop-nav" aria-label="主导航">
          {mainNavigation.map((item) => (
            <div className="nav-item" key={item.href}>
              <Link
                className={isItemActive(item, pathname) ? 'nav-link active' : 'nav-link'}
                href={item.href}
              >
                {item.label}
                {item.children ? <span aria-hidden="true">▼</span> : null}
              </Link>
              {item.children ? (
                <div className="dropdown-menu">
                  {item.children.map((child) => (
                    <Link
                      className={
                        isItemActive(child, pathname)
                          ? 'dropdown-link active'
                          : 'dropdown-link'
                      }
                      href={child.href}
                      key={child.href}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              ) : null}
            </div>
          ))}
        </nav>
        <Link className="header-cta desktop-cta" href={headerCta.href}>
          {headerCta.label}
        </Link>
        <Link className="language-switch desktop-language" href={languageSwitchHref}>
          {localeLabels[alternateLocale]}
        </Link>
        <button
          aria-expanded={mobileOpen}
          aria-label="打开或关闭移动端菜单"
          className="mobile-menu-toggle"
          onClick={() => setMobileOpen((open) => !open)}
          type="button"
        >
          <span />
          <span />
          <span />
        </button>
      </div>
      <nav className={mobileOpen ? 'mobile-nav open' : 'mobile-nav'} aria-label="移动端主导航">
        <div className="container mobile-nav-inner">
          {mainNavigation.map((item) => (
            <div className="mobile-nav-item" key={item.href}>
              <div className="mobile-nav-row">
                <Link
                  className={isItemActive(item, pathname) ? 'mobile-link active' : 'mobile-link'}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
                {item.children ? (
                  <button
                    aria-expanded={Boolean(expandedItems[item.label])}
                    aria-label={`展开或收起${item.label}二级菜单`}
                    className="mobile-submenu-toggle"
                    onClick={() => toggleExpanded(item.label)}
                    type="button"
                  >
                    {expandedItems[item.label] ? '−' : '+'}
                  </button>
                ) : null}
              </div>
              {item.children ? (
                <div
                  className={
                    expandedItems[item.label]
                      ? 'mobile-submenu expanded'
                      : 'mobile-submenu'
                  }
                >
                  {item.children.map((child) => (
                    <Link
                      className={
                        isItemActive(child, pathname)
                          ? 'mobile-sub-link active'
                          : 'mobile-sub-link'
                      }
                      href={child.href}
                      key={child.href}
                      onClick={() => setMobileOpen(false)}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              ) : null}
            </div>
          ))}
          <Link className="header-cta mobile-cta" href={headerCta.href}>
            {headerCta.label}
          </Link>
          <Link className="language-switch mobile-language" href={languageSwitchHref}>
            {locale === 'zh' ? 'Switch to English' : '切换到中文'}
          </Link>
        </div>
      </nav>
    </header>
  );
}

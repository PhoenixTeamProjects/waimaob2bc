import Link from 'next/link';
import { mainNavigation, navigationStatus } from '@/config/navigation';

export function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link className="brand" href="/" aria-label="Phoenix 首页">
          <span className="brand-mark">P</span>
          <span>
            <strong>Phoenix</strong>
            <small>外贸实战操盘手</small>
          </span>
        </Link>
        <nav className="main-nav" aria-label="主导航">
          {mainNavigation.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
        <Link className="header-cta" href="/contact/">
          课程咨询
        </Link>
      </div>
      <p className="nav-note">{navigationStatus}</p>
    </header>
  );
}

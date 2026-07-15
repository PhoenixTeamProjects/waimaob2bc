import type { ReactNode } from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { siteConfig } from '@/config/site';
import { StructuredData } from '@/lib/seo/StructuredData';
import '@/styles/globals.css';

export const metadata = {
  metadataBase: new URL(siteConfig.url),
  title: siteConfig.title,
  description: siteConfig.description,
  alternates: {
    canonical: siteConfig.url,
    languages: {
      'zh-CN': siteConfig.url,
      en: `${siteConfig.url}/en/`,
      'x-default': siteConfig.url
    }
  }
};

export default function ZhRootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="zh-CN">
      <body>
        <StructuredData />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

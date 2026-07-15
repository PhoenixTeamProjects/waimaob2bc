import type { ReactNode } from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { siteConfig } from '@/config/site';
import { StructuredData } from '@/lib/seo/StructuredData';
import '@/styles/globals.css';

export const metadata = {
  metadataBase: new URL(siteConfig.url),
  title: 'Phoenix Foreign Trade Practitioner',
  description:
    'Phoenix personal brand website for foreign trade practice, AI practice, website building, training and consulting.',
  alternates: {
    canonical: `${siteConfig.url}/en/`,
    languages: {
      'zh-CN': siteConfig.url,
      en: `${siteConfig.url}/en/`,
      'x-default': siteConfig.url
    }
  }
};

export default function EnRootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <StructuredData />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

import type { Metadata } from 'next';
import { siteConfig } from '@/config/site';

export function createMetadata(params: {
  title?: string;
  description?: string;
  path?: string;
}): Metadata {
  const title = params.title
    ? `${params.title} | ${siteConfig.name}`
    : siteConfig.title;
  const description = params.description || siteConfig.description;
  const url = new URL(params.path || '/', siteConfig.url).toString();

  return {
    title,
    description,
    alternates: {
      canonical: url
    },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      type: 'website',
      locale: 'zh_CN'
    }
  };
}

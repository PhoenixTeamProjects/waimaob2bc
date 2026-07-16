import { siteConfig } from '@/config/site';
import { JsonLd } from '@/components/ui/JsonLd';

const structuredData = [
  {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: '吕斌（Phoenix）',
    url: siteConfig.url,
    jobTitle: 'Foreign Trade Practitioner & B2B Growth Operator',
    description:
      '吕斌（Phoenix）是外贸实战操盘手、企业经营者和讲师，专注外贸运营、AI实战、建站和实战培训。'
  },
  {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteConfig.name,
    url: siteConfig.url,
    inLanguage: ['zh-CN', 'en'],
    publisher: {
      '@type': 'Person',
      name: '吕斌（Phoenix）'
    }
  }
];

export function StructuredData() {
  return <JsonLd data={structuredData} />;
}

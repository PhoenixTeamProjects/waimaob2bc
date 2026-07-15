import { siteConfig } from '@/config/site';
import { JsonLd } from '@/components/ui/JsonLd';

const structuredData = [
  {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Phoenix',
    url: siteConfig.url,
    jobTitle: 'Foreign Trade Practitioner & B2B Growth Operator',
    description:
      'Phoenix is a frontline foreign trade practitioner, business operator and trainer focused on foreign trade operations, AI practice, website building and practical training.'
  },
  {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteConfig.name,
    url: siteConfig.url,
    inLanguage: ['zh-CN', 'en'],
    publisher: {
      '@type': 'Person',
      name: 'Phoenix'
    }
  }
];

export function StructuredData() {
  return <JsonLd data={structuredData} />;
}

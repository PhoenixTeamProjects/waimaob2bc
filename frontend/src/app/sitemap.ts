import type { MetadataRoute } from 'next';
import { seoRoutes, toAbsoluteUrl, toEnglishPath } from '@/lib/seo/routes';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return seoRoutes.flatMap((route) => {
    const zhUrl = toAbsoluteUrl(route.path);
    const enUrl = toAbsoluteUrl(toEnglishPath(route.path));

    return [
      {
        url: zhUrl,
        lastModified: now,
        changeFrequency: route.changeFrequency,
        priority: route.priority,
        alternates: {
          languages: {
            'zh-CN': zhUrl,
            en: enUrl,
            'x-default': zhUrl
          }
        }
      },
      {
        url: enUrl,
        lastModified: now,
        changeFrequency: route.changeFrequency,
        priority: Math.max(route.priority - 0.05, 0.5),
        alternates: {
          languages: {
            'zh-CN': zhUrl,
            en: enUrl,
            'x-default': zhUrl
          }
        }
      }
    ];
  });
}

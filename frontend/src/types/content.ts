export type TopicKey =
  | 'foreign-trade-ops'
  | 'social-media'
  | 'ai-practice'
  | 'ai-website'
  | 'training';

export type ContentType =
  | '实战记录'
  | '方法教程'
  | '工具实测'
  | '项目复盘'
  | '观点'
  | '案例'
  | '踩坑记录';

export interface Topic {
  key: TopicKey;
  title: string;
  href: string;
  description: string;
}

export interface Post {
  slug: string;
  title: string;
  excerpt: string;
  type: ContentType;
  topic: TopicKey;
  tags: string[];
  publishedAt: string;
  readingMinutes: number;
}

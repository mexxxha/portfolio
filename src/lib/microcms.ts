import { createClient, type MicroCMSImage, type MicroCMSListContent } from 'microcms-js-sdk';

const client = createClient({
  serviceDomain: import.meta.env.MICROCMS_SERVICE_DOMAIN,
  apiKey: import.meta.env.MICROCMS_API_KEY,
});

export type Work = {
  title: string;
  description: string;
  type: string;
  tech: string[];
  thumbnail: MicroCMSImage;
  liveUrl?: string;
  slug: string;
  body: string;
} & MicroCMSListContent;

export type Blog = {
  title: string;
  description: string;
  tags?: string[];
  thumbnail?: MicroCMSImage;
  slug: string;
  body: string;
} & MicroCMSListContent;

export const getWorks = () =>
  client.getList<Work>({
    endpoint: 'works',
    queries: { limit: 100, orders: '-publishedAt' },
  });

export const getBlogs = () =>
  client.getList<Blog>({
    endpoint: 'blog',
    queries: { limit: 100, orders: '-publishedAt' },
  });
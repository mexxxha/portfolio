import { createClient, type MicroCMSImage } from 'microcms-js-sdk';

const client = createClient({
  serviceDomain: import.meta.env.MICROCMS_SERVICE_DOMAIN,
  apiKey: import.meta.env.MICROCMS_API_KEY,
});

export type Work = {
  id: string;
  title: string;
  description: string;
  date: string;
  type: string;
  tech: string[];
  thumbnail: MicroCMSImage;
  liveUrl?: string;
  order: number;
  slug: string;
  body: string;
};

export type Blog = {
  id: string;
  title: string;
  description: string;
  date: string;
  tags?: string[];
  thumbnail?: MicroCMSImage;
  order: number;
  slug: string;
  body: string;
};

export const getWorks = () =>
  client.getList<Work>({
    endpoint: 'works',
    queries: { limit: 100, orders: 'order' },
  });

export const getBlogs = () =>
  client.getList<Blog>({
    endpoint: 'blog',
    queries: { limit: 100, orders: 'order' },
  });
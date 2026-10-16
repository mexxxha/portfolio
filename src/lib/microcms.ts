import { createClient, type MicroCMSImage, type MicroCMSListContent } from 'microcms-js-sdk';

const client = createClient({
  serviceDomain: import.meta.env.MICROCMS_SERVICE_DOMAIN,
  apiKey: import.meta.env.MICROCMS_API_KEY,
});

export type Work = {
  title: string;
  description: string;
  type?: string[];
  tech?: string[];
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

const listAll = async <T>(endpoint: string) => {
  const limit = 100;
  const first = await client.getList<T>({
    endpoint,
    queries: { limit, orders: '-publishedAt' },
  });
  const contents = [...first.contents];

  for (let offset = limit; offset < first.totalCount; offset += limit) {
    const page = await client.getList<T>({
      endpoint,
      queries: { limit, offset, orders: '-publishedAt' },
    });
    contents.push(...page.contents);
  }

  return { contents, totalCount: first.totalCount };
};

let worksCache: ReturnType<typeof listAll<Work>> | undefined;
let blogsCache: ReturnType<typeof listAll<Blog>> | undefined;

export const getWorks = () => {
  worksCache ??= listAll<Work>('works').catch((error: unknown) => {
    worksCache = undefined;
    throw error;
  });
  return worksCache;
};

export const getBlogs = () => {
  blogsCache ??= listAll<Blog>('blog').catch((error: unknown) => {
    blogsCache = undefined;
    throw error;
  });
  return blogsCache;
};
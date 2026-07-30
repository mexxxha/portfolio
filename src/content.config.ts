import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const works = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/works' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      date: z.string(),
      type: z.string(),
      tech: z.array(z.string()),
      categories: z.array(z.string()).optional(),
      thumbnail: image(),
      liveUrl: z.string().url().optional(),
      order: z.number(),
    }),
});

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      date: z.string(), // "2024-09-01" など
      tags: z.array(z.string()).optional(),
      thumbnail: image().optional(),
      order: z.number(),
    }),
});

export const collections = { works, blog };
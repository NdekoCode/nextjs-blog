import { z } from 'zod';

export interface ICategory {
  id: string | number;
  name?: string;
  slug?: string;
}
export const categorySchema = z.object({
  id: z.string().or(z.number()),
  name: z.string(),
  slug: z.string(),
  createdAt: z.string().datetime().optional(),
  updateAt: z.string().datetime().optional(),
});

export const postSchema = z.object({
  id: z.number().or(z.string()),
  category: z.string().optional(),
  title: z.string(),
  image: z.string().nullable().optional().default(null),
  caption: z.string().optional(),
  date: z.string().or(z.date()).optional(),
  minutesToRead: z.number().optional(),
  author: z.string().optional(),
  nbViews: z.number().default(0),
  nbComments: z.number().default(0),
  slug: z.string(),
  content: z.string(),
});
export const postsSchema = z.array(postSchema)

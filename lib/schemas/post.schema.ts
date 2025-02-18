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

export type Post = {
  id: number;
  category: string;
  title: string;
  image: string;
  caption: string;
  date: string | Date;
  minutesToRead: number;
  author: string;
  nbViews: number;
  nbComments: number;
  slug: string;
  content?: string;
};
export const postSchema = z.object({
  id: z.number(),
  category: z.string(),
  title: z.string(),
  image: z.string().optional(),
  caption: z.string().optional(),
  date: z.string().or(z.date()).optional(),
  minutesToRead: z.number(),
  author: z.string().optional(),
  nbViews: z.number().default(0),
  nbComments: z.number().default(0),
  slug: z.string(),
  content: z.string().optional(),
});
export const postsSchema = z.object({
  posts: z.array(postSchema),
});

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
  id: z.string().or(z.number()),
  tags: z.array(z.string()),
  reactions: z.object({
    likes: z.number(),
    dislikes: z.number(),
  }),
  title: z.string(),
  userId: z.number(),
  views: z.number(),
  body: z.string(),
  createdAt: z.string().datetime().optional(),
  updatedAt: z.string().datetime().optional(),
});
export const postsSchema = z.object({
  posts: z.array(postSchema),
});

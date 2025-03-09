import { z } from 'zod';

export interface ICategory {
  id: string | number;
  title?: string;
  slug?: string;
}
const authorSchema = z.object({
  name: z.string().optional(),
  firstName: z.string().optional(),
  lastName: z.string().optional(),
  email: z.string().optional(),
  image: z.string().optional(),
  createdAt:  z.string().or(z.date()).optional(),
});
export const categorySchema = z.object({
  id: z.string().or(z.number()),
  title: z.string(),
  slug: z.string(),
  description: z.string().optional().nullable().default(null),
  createdAt: z.string().datetime().optional(),
  updateAt: z.string().datetime().optional(),
});
export const categoriesSchema = z.array(categorySchema);

export const postSchema = z.object({
  id: z.number().or(z.string()).optional(),
  title: z.string(),
  image: z.string().nullable().optional().default(null),
  caption: z.string().optional(),
  date: z.string().or(z.date()).optional(),
  minutesToRead: z.number().optional(),
  author: authorSchema.optional(),
  nbViews: z.number().default(0),
  nbComments: z.number().default(0),
  slug: z.string(),
  content: z.string(),
  categories: z.array(categorySchema).optional(),
  createdAt:  z.string().or(z.date()).optional(),
});
export const postsSchema = z.array(postSchema);

export type CategoryPost = z.infer<typeof categoryPostSchema>;

export type PostCategory = z.infer<typeof postSchema>;
export const categoryPostSchema = z.object({
  id: z.string().or(z.number()),
  title: z.string(),
  slug: z.string(),
  description: z.string().optional().nullable().default(null),
  createdAt: z.string().datetime().optional(),
  updateAt: z.string().datetime().optional(),
  posts: z.array(postSchema),
});

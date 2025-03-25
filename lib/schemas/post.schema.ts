import { z } from 'zod';

import { categorySchema } from './category.schema';
import { authorSchema } from './user.schema';

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
  createdAt: z.string().or(z.date()).optional(),
  comments: z
    .array(
      z.object({
        id: z.string(),
        content: z.string(),
        createdAt: z.string().or(z.date()).optional(),
      })
    )
    .optional(),
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
  posts: z.array(postSchema).optional(),
});
export const categoriesPostSchema = z.array(categoryPostSchema);
export const commentFormSchema = z
  .object({
    content: z
      .string()
      .min(5, { message: "Comment must be at least 5 characters long" }),
    postSlug: z.string().optional(),
  })
  .required();
export type CommentForm = z.infer<typeof commentFormSchema>;

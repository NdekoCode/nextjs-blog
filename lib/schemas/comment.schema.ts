import { z } from 'zod';

import { postSchema } from './post.schema';
import { authorSchema } from './user.schema';

export const commentSchema = z.object({
  id: z.string(),
  content: z.string(),
  postSlug: z.string().optional(),
  userEmail: z.string().optional(),
  user: authorSchema.required(),
  post: postSchema.required(),
  createdAt: z.string().or(z.date()).optional(),
});
export const postCommentSchema = z.object({
  id: z.string(),
  userEmail: z.string().email(),
  postSlug: z.string(),
  createdAt: z.string().or(z.date()),
  content: z
    .string()
    .min(5, { message: "Comment must be at least 5 characters long" }),
  user: authorSchema,
});

export const postCommentsSchema = z.array(postCommentSchema);
export type Comment = z.infer<typeof commentSchema>;
export type PostComment = z.infer<typeof postCommentSchema>;
export type PostComments = z.infer<typeof postCommentsSchema>;

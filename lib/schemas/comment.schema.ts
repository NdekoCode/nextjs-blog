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

export type Comment = z.infer<typeof commentSchema>;

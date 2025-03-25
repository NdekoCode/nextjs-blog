import { z } from 'zod';

export const authorSchema = z.object({
    name: z.string().optional(),
    firstName: z.string().or(z.null()).optional(),
    lastName:  z.string().or(z.null()).optional(),
    email: z.string().optional(),
    image:  z.string().or(z.null()).optional(),
    createdAt: z.string().or(z.date()).optional(),
  });

export type Author = z.infer<typeof authorSchema>;

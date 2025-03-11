import { z } from 'zod';

export const authorSchema = z.object({
    name: z.string().optional(),
    firstName: z.string().optional(),
    lastName: z.string().optional(),
    email: z.string().optional(),
    image: z.string().optional(),
    createdAt: z.string().or(z.date()).optional(),
  });

export type Author = z.infer<typeof authorSchema>;

import { z } from 'zod';

export const categorySchema = z.object({
    id: z.string().or(z.number()),
    title: z.string(),
    slug: z.string(),
    description: z.string().optional().nullable().default(null),
    createdAt: z.string().datetime().optional(),
    updateAt: z.string().datetime().optional(),
  });
  export const categoriesSchema = z.array(categorySchema);


export interface ICategory {
    id: string | number;
    title?: string;
    slug?: string;
  }
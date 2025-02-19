import { z } from 'zod';

import { postSchema } from '../schemas/post.schema';

export interface IButton {
    title: string;
    link: string;
}
export interface ICategory {
    id: string | number;
    name? : string;
    slug? : string;
}
export type Post = z.infer<typeof postSchema>
import { z } from 'zod';

import { postSchema } from '../schemas/post.schema';

export interface IAuthUser {
    name?: string | null;
    email?: string | null;
    image?: string | null;
}

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
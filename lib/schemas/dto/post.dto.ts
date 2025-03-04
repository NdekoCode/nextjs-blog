export interface IPostDto{
    title: string;
    image?: {
        path: string;
        relativePath: string;
    } | File | null;
    content: string;
    categories: string[];
    slug: string;
}
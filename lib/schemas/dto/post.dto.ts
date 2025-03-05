export interface IPostDto{
    title: string;
    image?: string | File | null;
    content: string;
    categories: string[];
    slug: string;
}
export interface IPostDto{
    title: string;
    image: {
        path: string;
        relativePath: string;
    };
    content: string;
    categories: string[];
    slug: string;
}
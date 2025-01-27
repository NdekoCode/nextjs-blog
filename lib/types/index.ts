export interface IButton {
    title: string;
    link: string;
}
export interface ICategory {
    id: string | number;
    name? : string;
    slug? : string;
}
export type Post = {
    id: number;
    category: string;
    title: string;
    image: string;
    caption: string;
    date: string | Date;
    minutesToRead: number;
    author: string;
    nbViews: number;
    nbComments: number;
    slug: string;
    content?: string;
  };
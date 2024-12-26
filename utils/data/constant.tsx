import { ICategory } from '../types';

export const categories: ICategory[] = [
  {
    name: "Next.js",
    slug: "next.js",
  },
  {
    name: "Nest.js",
    slug: "nest.js",
  },
  {
    name: "Tailwindcss",
    slug: "tailwindcss",
  },
  {
    name: "Javascript",
    slug: "javascript",
  },
].map((d, i) => ({ ...d, id: i + 1 }));

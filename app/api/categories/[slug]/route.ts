import { NextRequest } from 'next/server';

import { CATEGORIES, POSTS } from '@/lib/data/constant';

export const GET = (
  req: NextRequest,
  { params }: { params: { slug?: string } }
) => {
  const categorySlug = params?.slug;
  if (!categorySlug)
    return Response.json({ error: "Not Data Found" }, { status: 404 });
  const category = CATEGORIES.find((c) => c.slug === categorySlug);
  if (!category)
    return Response.json({ error: "Not Data Found" }, { status: 404 });
  const posts = POSTS.filter((post) => post.category === category.name);
  return Response.json({ category: { ...category, posts } }, { status: 200 });
};

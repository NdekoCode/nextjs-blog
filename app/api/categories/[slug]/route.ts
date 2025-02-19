import { NextRequest } from 'next/server';

import { getCategories } from '@/lib/api/categories';

export const GET = async (
  req: NextRequest,
  { params }: { params: { slug?: string } }
) => {
  const categorySlug = params?.slug
  if (!categorySlug)
    return Response.json({ error: "Not Data Found" }, { status: 404 });
  const category =await getCategories(categorySlug);

  if (!category)
    return Response.json({ error: "Not Data Found" }, { status: 404 });
  return Response.json(
    { ...category, posts: category.posts },
    { status: 200 }
  );
};

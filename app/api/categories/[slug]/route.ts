import { NextRequest } from 'next/server';

export const GET = async (
  req: NextRequest,
  { params }: { params: { slug?: string } }
) => {
  const categorySlug = params?.slug;
  if (!categorySlug)
    return Response.json({ error: "Not Data Found" }, { status: 404 });
  const category = prisma?.category.findUnique({
    where: {
      slug: categorySlug,
    },
    include: {
      posts: true,
    },
  });
  if (!category)
    return Response.json({ error: "Not Data Found" }, { status: 404 });
  return Response.json(
    { category: { ...category, posts: category.posts } },
    { status: 200 }
  );
};

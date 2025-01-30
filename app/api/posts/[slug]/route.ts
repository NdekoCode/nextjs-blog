import { NextRequest } from 'next/server';

import { POSTS } from '@/lib/data/constant';

export const GET = async(
  req: NextRequest,
  { params }: { params: { slug?: string } }
) => {
  const slug = params?.slug;
  if (!slug) return Response.json({ error: "No Data found" }, { status: 404 });
  const post = POSTS.find((p) => p.slug === slug);
  if (!post) return Response.json({ error: "No Data found" }, { status: 404 });
  return Response.json(post, { status: 200 });
};

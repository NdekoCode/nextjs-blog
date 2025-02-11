import { NextRequest, NextResponse } from 'next/server';

import prisma from '@/lib/connect';

export const GET = async (
  req: NextRequest,
  { params }: { params: { slug?: string } }
) => {
  const slug = params?.slug;
  try {
    if (!slug)
      return Response.json({ error: "No Data found" }, { status: 404 });
    // On utilise ici `update` au lieu de `findUnique` parce que quand on récupère un post, on veut incrémenter le nombre de vues.
    const post = await prisma.post.update({
      where: { slug },
      data: {
        nbViews: { increment: 1 },
      },
    });
    if (!post)
      return Response.json({ error: "No Data found" }, { status: 404 });
    return Response.json(post, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
};

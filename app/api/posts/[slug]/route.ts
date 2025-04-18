import { NextRequest, NextResponse } from 'next/server';

import prisma from '@/lib/connect';
import { postSchema } from '@/lib/schemas/post.schema';

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
      include: {
        author: true,
        comments: true,
        categories: {
          include: {
            category: true,
          },
        },
      },
      data: {
        nbViews: { increment: 1 },
      },
    });
    if (!post)
      return Response.json({ error: "No Data found" }, { status: 404 });

    // Transformation : Extraire directement les catégories
    const formattedPost = {
      ...post,
      categories: post.categories.map((c) => c.category), // Extrait les vraies catégories
    };

    // Validation avec Zod après transformation
    const data = postSchema.parse(formattedPost);
    return Response.json(data, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "Something went wrong", cause: error },
      { status: 500 }
    );
  }
};

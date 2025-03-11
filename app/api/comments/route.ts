import { NextResponse } from 'next/server';

import prisma from '@/lib/connect';
import { Comment } from '@/lib/schemas/comment.schema';

export const POST = async (req: Request) => {
    // On recupere le corps de la requete
  const body = (await req.json()) as Comment;
  const { content, postSlug, userEmail } = body;
  // On verifie si les champs requis sont presents
  if (!content || !postSlug || !userEmail) {
    return NextResponse.json(
      { error: "Missing required fields" },
      { status: 400 }
    );
  }
  // On verifie si le commentaire existe deja
  const comment = await prisma.comment.findFirst({
    where: {
      userEmail,
      postSlug,
    },
  });
  // Si le commentaire existe deja, on renvoie une erreur
  if (comment) {
    return NextResponse.json(
      { error: "Comment already exists" },
      { status: 400 }
    );
  }
  // On cree un nouveau commentaire
  const newComment = await prisma.comment.create({
    data: {
      content,
      user: {
        connect: {
          email: userEmail,
        },
      },
      post: {
        connect: {
          slug: postSlug,
        },
      },
    },
  });
  // On renvoie le nouveau commentaire
  return NextResponse.json(newComment, { status: 201 });
};

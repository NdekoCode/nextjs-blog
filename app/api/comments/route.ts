import { NextResponse } from 'next/server';

import prisma from '@/lib/connect';
import { getAuthSession } from '@/lib/constants/auth-options';
import { Comment } from '@/lib/schemas/comment.schema';

export const POST = async (req: Request) => {
  const session = await getAuthSession();
  if (!session || !session.user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  // On recupere le corps de la requete
  const body = (await req.json()) as Comment;
  const { content, postSlug } = body;
  // On verifie si les champs requis sont presents
  if (!content || !postSlug) {
    return NextResponse.json(
      { error: "Missing required fields" },
      { status: 400 }
    );
  }

  const userEmail = session?.user?.email as string;
  try {
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
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "Something went wrong", cause: error },
      { status: 500 }
    );
  }
};

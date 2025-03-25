import { NextResponse } from 'next/server';

import prisma from '@/lib/connect';
import { postCommentsSchema } from '@/lib/schemas/comment.schema';

export const GET = async (
  req: Request,
  { params }: { params: { slug: string } }
) => {
  const { slug } = params;
  try {
    const comments = await prisma.comment.findMany({
      where: { post: { slug } },
      include: { user: true },
      orderBy: { createdAt: "desc" },
    });
    return NextResponse.json(postCommentsSchema.parse(comments));
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "Something went wrong", cause: error },
      { status: 500 }
    );
  }
};

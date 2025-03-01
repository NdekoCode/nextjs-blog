import { NextRequest, NextResponse } from 'next/server';

import prisma from '@/lib/connect';
import { getAuthSession } from '@/lib/constants/auth-options';

export const GET = async (req: NextRequest, res: NextResponse) => {
  try {
    const session = await getAuthSession();
    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    let posts = [];
    const { searchParams } = new URL(req.url);
    const categorySlug = searchParams?.get("category");
    if (categorySlug) {
      posts = await prisma?.post.findMany({
        where: {
          category: {
            slug: categorySlug,
          },
        },
        include: {
          category: true,
        },
      });
    } else {
      posts = await prisma?.post.findMany({
        include: {
          category: true,
        },
      });
    }
    return NextResponse.json(posts, { status: 200 });
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message, status: 500, stack: error.stack },
      { status: 500 }
    );
  }
};

import { NextRequest, NextResponse } from 'next/server';

import prisma from '@/lib/connect';

export const GET = async (req: NextRequest, res: NextResponse) => {
  const posts = await prisma?.post.findMany();
  console.log("DATA POSTS",JSON.stringify(posts,null,2));
  return Response.json(posts, { status: 200 });
};

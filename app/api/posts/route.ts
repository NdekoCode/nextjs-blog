import { NextRequest, NextResponse } from 'next/server';

import { POSTS } from '@/lib/data/constant';

export const GET = (req:NextRequest, res:NextResponse) => {

  return Response.json(POSTS, { status: 200 });
}


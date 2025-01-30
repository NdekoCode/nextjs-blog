import { NextRequest, NextResponse } from 'next/server';

import { CATEGORIES } from '@/lib/data/constant';

export const GET = (req: NextRequest, res: NextResponse) => {
  return NextResponse.json(CATEGORIES, { status: 200 });
};

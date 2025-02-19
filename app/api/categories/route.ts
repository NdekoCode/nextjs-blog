import { NextResponse } from 'next/server';

export const GET = async (req: Request, res: Response) => {
  try {
    const categories = await prisma?.category.findMany();
    return Response.json(categories, { status: 200 });
  } catch (error: any) {
    console.log(error.message);
    return NextResponse.json(
      { error: error.message, status: 500, stack: error.stack },
      { status: 500 }
    );
  }
};

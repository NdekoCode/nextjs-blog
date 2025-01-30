import { CATEGORIES } from '@/lib/data/constant';

export const GET = (req: Request, res: Response) => {
  return Response.json(CATEGORIES, { status: 200 });
};

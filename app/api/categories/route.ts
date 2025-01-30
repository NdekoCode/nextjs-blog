import { CATEGORIES } from '@/lib/data/constant';

export const GET = async(req: Request, res: Response) => {
  return Response.json(CATEGORIES, { status: 200 });
};

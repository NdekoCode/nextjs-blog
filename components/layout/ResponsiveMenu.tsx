import { Menu } from 'lucide-react';
import Link from 'next/link';

import { CATEGORIES } from '@/utils/data/constant';

import { Button } from '../ui/button';
import { Sheet, SheetContent, SheetTrigger } from '../ui/sheet';

const ResponsiveMenu = () => {
  return (
    <div className="block lg:hidden">
      <Sheet>
        <SheetTrigger>
          <Menu className="size-6" />
        </SheetTrigger>
        <SheetContent side="left" className='lg:hidden'>
          <div className="flex flex-col gap-y-5">
            <Link href="/write-post">
              <Button variant="ghost">Write a post</Button>
            </Link>
            <ul className="flex flex-col gap-y-2">
              {CATEGORIES.map((category, index) => (
                <li key={index}>
                  <Link href={`/categories/${category.slug}`} className="p-3">
                    <Button variant="ghost">{category.name}</Button>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default ResponsiveMenu;

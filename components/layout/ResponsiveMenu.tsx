import { Menu } from 'lucide-react';
import Link from 'next/link';

import { useCategories } from '@/lib/hooks/useCategories';

import { Button } from '../ui/button';
import { Sheet, SheetContent, SheetTrigger } from '../ui/sheet';

const ResponsiveMenu = () => {
  const { data: categories } = useCategories();
  return (
    <div className="block lg:hidden">
      <Sheet>
        <SheetTrigger>
          <Menu className="size-6" />
        </SheetTrigger>
        <SheetContent side="left" className="lg:hidden">
          <div className="flex flex-col gap-y-5">
            <Link href="/write-post" aria-label="Write a post">
              <Button aria-label="Write a post" variant="ghost">
                Write a post
              </Button>
            </Link>
            {categories && categories.length > 0 && (
              <ul className="flex flex-col gap-y-2">
                {categories.map((category, index) => (
                  <li key={index}>
                    <Link
                      href={`/categories/${category.slug}`}
                      aria-label={`View all posts in "${category.title}" category`}
                      className="p-3"
                    >
                      <Button
                        aria-label={`View all posts in "${category.title}" category`}
                        variant="ghost"
                      >
                        {category.title}
                      </Button>
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default ResponsiveMenu;

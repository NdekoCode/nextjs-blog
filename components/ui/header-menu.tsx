'use client';;
import Link from 'next/link';

import { useCategories } from '@/lib/hooks/useCategories';

import {
    NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink,
    NavigationMenuList, NavigationMenuTrigger
} from './navigation-menu';

const HeaderMenu = () => {
  const {
    data: categories,
    isLoading: isLoadingCategories,
    isError: isErrorCategories,
    error: errorCategories,
  } = useCategories();
  return (
    <NavigationMenu className='hidden lg:flex'>
      <NavigationMenuList className='gap-2'>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Categories</NavigationMenuTrigger>
          <NavigationMenuContent>
            {categories && categories.length > 0 ? (
              <ul className="flex flex-col gap-3 p-3">
                {categories.map((category, index) => (
                  <li key={index}>
                    <NavigationMenuLink asChild>
                      <Link
                        href={`/categories/${category.slug}`}
                        className="p-3 text-nowrap"
                      >
                        {category.title}
                      </Link>
                    </NavigationMenuLink>
                  </li>
                ))}
              </ul>
            ) : null}
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <Link href="/posts/add-post" className="text-sm">
              Add a post
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default HeaderMenu;

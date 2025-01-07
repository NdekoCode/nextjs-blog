import Link from 'next/link';

import { CATEGORIES } from '@/utils/data/constant';

import {
    NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink,
    NavigationMenuList, NavigationMenuTrigger
} from './navigation-menu';

const HeaderMenu = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList className='gap-2'>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Categories</NavigationMenuTrigger>
          <NavigationMenuContent>
            {CATEGORIES && CATEGORIES.length > 0 ? (
              <ul className="flex flex-col gap-3 p-3">
                {CATEGORIES.map((category, index) => (
                  <li key={index}>
                    <NavigationMenuLink asChild>
                      <Link
                        href={`/categories/${category.slug}`}
                        className="p-3"
                      >
                        {category.name}
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
            <Link href="/add-post" className="text-sm">
              Add a post
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default HeaderMenu;

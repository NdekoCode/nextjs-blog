import Link from 'next/link';

import { categories } from '@/utils/data/constant';

import {
    NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink,
    NavigationMenuList, NavigationMenuTrigger
} from './navigation-menu';

const HeaderMenu = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
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

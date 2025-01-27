import Link from 'next/link';

import { CATEGORIES } from '@/utils/data/constant';

import { Button, buttonVariants } from '../ui/button';
import AppLogo from './AppLogo';

const Footer = () => {
  return (
    <div className="flex container mt-auto min-h-20 items-center gap-5 justify-center flex-wrap lg:justify-between">
      <AppLogo />
      <ul className="flex items-center flex-wrap justify-center gap-3">
        {CATEGORIES.map((category) => (
          <Button variant="ghost" className="p-1" key={category.id} asChild>
            <Link
              href={`/categories/${category.slug}`}
              className={buttonVariants({ variant: "link" })}
            >
              {category.name}
            </Link>
          </Button>
        ))}
        <Button variant="ghost" className="p-1" asChild>
          <Link
            href="/add-a-post"
            className={buttonVariants({ variant: "link" })}
          >
            Write a post
          </Link>
        </Button>
      </ul>
    </div>
  );
};

export default Footer;

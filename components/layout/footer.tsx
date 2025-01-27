import Link from 'next/link';

import { CATEGORIES } from '@/utils/data/constant';

import { Button, buttonVariants } from '../ui/button';
import AppLogo from './AppLogo';

const Footer = () => {
  return (
    <div className="flex container mt-auto min-h-20 items-center justify-center flex-wrap lg:justify-between">
      <AppLogo />
      <ul className="flex items-center gap-3">
        {CATEGORIES.map((category) => (
          <Button variant="ghost"  key={category.id} asChild>
            <Link href={`/categories/${category.slug}`} className={buttonVariants({variant:'link'})}>
              {category.name}
            </Link>
          </Button>
        ))}
      </ul>
    </div>
  );
};

export default Footer;

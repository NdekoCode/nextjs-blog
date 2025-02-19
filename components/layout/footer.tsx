"use client";;
import Link from 'next/link';

import { useCategory } from '@/lib/hooks/useCategories';

import { Button, buttonVariants } from '../ui/button';
import AppLogo from './AppLogo';

const Footer = () => {
  const {
    data: categories,
    isLoading: isLoadingCategories,
    isError: isErrorCategories,
    error: errorCategories,
  } = useCategory();
  
  if (isErrorCategories) return <span className="text-red-500">{errorCategories?.message}</span>;
  return (
    <div className="flex container mt-auto min-h-20 items-center gap-5 justify-center flex-wrap lg:justify-between">
      <AppLogo />
      <ul className="flex items-center flex-wrap justify-center gap-3">
        {isLoadingCategories ? (
          <BlockSkeleton />
        ) : (
          categories?.map((category) => (
            <Button
              variant="ghost"
            aria-label={`View all posts in "${category.title}" category`}
            className="p-1"
            key={category.id}
            asChild
          >
            <Link
              href={`/categories/${category.slug}`}
              className={buttonVariants({ variant: "link" })}
            >
              {category.title}
              </Link>
            </Button>
          ))
        )}
        <Button
          variant="ghost"
          aria-label="Write a post"
          className="p-1"
          asChild
        >
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

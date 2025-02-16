import Link from 'next/link';

import Newsletter from '@/components/pages/home/Newsletter';
import PostList from '@/components/pages/home/PostList';
import { Button, buttonVariants } from '@/components/ui/button';
import { CATEGORIES, POSTS } from '@/lib/data/constant';

export default function Home() {
  return (
    <section className="flex flex-col gap-y-10 sm:gap-y-12 md:gap-y-16 lg:gap-y-20">
      {/* Hero */}
      <div className="container mt-10 bg-hero bg-cover bg-center bg-no-repeat rounded-lg aspect-square md:aspect-[2.4/1] overflow-hidden flex flex-col items-center justify-center p-3 sm:p-5 md:p-6 lg:p-8">
        <div className="backdrop-blur max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg bg-secondary/40 p-4 rounded-lg flex flex-col gap-y-5">
          <Newsletter />
        </div>
      </div>
      {/* End Hero */}

      {/* Categories */}
      <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 lg:gap-5">
        {CATEGORIES.map((category) => (
          <Button variant="outline" aria-label={`View all posts in "${category.name}" category`} key={category.id} asChild>
            <Link
              href={`/categories/${category.slug}`}
              className={buttonVariants({ variant: "link" })}
            >
              {category.name}
            </Link>
          </Button>
        ))}
      </div>
      {/* End Categories */}

      {/* Posts */}
      <PostList posts={POSTS} />
    </section>
  );
}

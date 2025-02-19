import { notFound } from 'next/navigation';

import PostList from '@/components/pages/home/PostList';
import PageTitle from '@/components/PageTitle';
import { CATEGORIES, POSTS } from '@/lib/data/constant';

const CategoriesPage = ({ params }: { params: { slug: string } }) => {
  const slug = params?.slug ?? "";
  if (!slug) return notFound();
  const category = CATEGORIES.find((d) => d.slug === slug);
  if (!category) return notFound();
  const posts = POSTS.filter((d) => d.category === category.name) || [];
  return (
    <section className="flex flex-col gap-y-10 sm:gap-y-12 md:gap-y-16 lg:gap-y-20 pt-20">
      <PageTitle title={category.name}/>
      {/* Posts */}
      {posts && <PostList posts={posts} />}
    </section>
  );
};

export default CategoriesPage;

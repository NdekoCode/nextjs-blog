"use client";;
import { notFound } from 'next/navigation';

import Loading from '@/components/Loading';
import PostList from '@/components/pages/home/PostList';
import PageTitle from '@/components/PageTitle';
import { useCategory } from '@/lib/hooks/useCategory';

const CategoriesPage = ({ params }: { params: { slug: string } }) => {
  const slug = params?.slug ?? "";
  if (!slug) return notFound();
  const { data: category, isLoading, isError, error } = useCategory(slug);
  if (isLoading) return <Loading />;
  if (isError) return <span className="text-red-500">{error.message}</span>;
  if (!category) return notFound();
  console.log("CATEGORY", category);
  const posts = category.posts || [];
  return (
    <section className="flex flex-col gap-y-10 sm:gap-y-12 md:gap-y-16 lg:gap-y-20 pt-20">
      <PageTitle title={category.title} />
      {/* Posts */}
      {posts && <PostList posts={posts} />}
    </section>
  );
};

export default CategoriesPage;

"use client";;
import { NextPage } from 'next';
import { notFound } from 'next/navigation';

import Loading from '@/components/Loading';
import SinglePost from '@/components/posts/SinglePost';
import { usePost } from '@/lib/hooks/usePost';

const page: NextPage<{ params: { slug: string } }> = ({ params }) => {
  const slug = params?.slug;
  if (!slug) return notFound();
  const { data: post, isLoading, isError, error, isFetching } = usePost(slug);
  if (isLoading) return <Loading />;
  if (isError) return <span className="text-red-500">{error.message}</span>;
  if (!post) return notFound();
  return <SinglePost post={post} />;
};

export default page;

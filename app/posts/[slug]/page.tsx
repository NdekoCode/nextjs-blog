import { NextPage } from 'next';
import { notFound } from 'next/navigation';

import SinglePost from '@/components/posts/SinglePost';
import { getPostBySlug, getPosts } from '@/lib/services/post.service';

export const generateMetadata = async ({
  params,
}: {
  params: { slug: string };
}) => {
  const slug = params?.slug;
  if (!slug) return notFound();
  const post = await getPostBySlug(slug);
  return {
    title: post?.title,
  };
};

export const generateStaticParams = async () => {
  try {
    const posts = await getPosts();
    return posts?.map((post) => ({
      slug: post.slug,
    }));
  } catch (error) {
    console.error(error);
    return [];
  }
};
const page: NextPage<{ params: { slug: string } }> = ({ params }) => {
  const slug = params?.slug;
  if (!slug) return notFound();
  return <SinglePost slug={slug} />;
};

export default page;

'use client';
import { Eye, MessageCircle } from 'lucide-react';
import { NextPage } from 'next';
import { notFound } from 'next/navigation';

import Loading from '@/components/Loading';
import { Avatar } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { usePost } from '@/lib/hooks/usePost';
import { AvatarFallback } from '@radix-ui/react-avatar';

const SinglePost: NextPage<{ params: { slug: string } }> = ({ params }) => {
  const slug = params?.slug;
  if (!slug) return notFound();
  const { data:post, isLoading, isError, error,isFetching } = usePost(slug);
  if(isLoading) return <Loading/>
  if(isError) return <span className='text-red-500'>{error.message}</span>
  if (!post) return notFound();
  return (
    <section className="flex flex-col gap-y-10 sm:gap-y-12 md:gap-y-16 lg:gap-y-20 max-w-5xl w-full mx-auto">
      {/* Hero */}
      <div
        className="container mt-10 bg-hero bg-cover bg-center bg-no-repeat rounded-lg aspect-square md:aspect-[2.4/1] overflow-hidden flex flex-col items-center justify-center p-3 sm:p-5 md:p-6 lg:p-8"
        style={{ backgroundImage: `url(${post.image})` }}
      >
        <div className="backdrop-blur max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg bg-secondary/40 p-4 rounded-lg flex flex-col gap-y-5">
          <div className="flex flex-col gap-y-5">
            <h1 className="capitalize text-3xl font-bold sm:text-4xl text-center text-pretty md:text-5xl text-black dark:text-white">
              {post.title}
            </h1>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-y-4">
        <div className="flex justify-between">
          <div className="flex gap-3">
            <Avatar className="shrink-0 size-10">
              <AvatarFallback className="uppercase text-white font-medium size-full items-center flex justify-center bg-green-700">
                {post.author?.[0]}
              </AvatarFallback>
            </Avatar>
            <div className="flex flex-col h-full">
              <h6>{post.author}</h6>
              <small className="text-xs mt-auto text-gray-400">
                Publie on {post.date?.toLocaleString()}
              </small>
            </div>
          </div>

          <div className="flex items-center gap-1.5">
            <Button aria-label={`View ${post.nbComments} comments`} variant="ghost">
              <MessageCircle size={24} /> <span>{post.nbComments}</span>
            </Button>
            <Button aria-label={`View ${post.nbViews} views`} variant="ghost">
              <Eye size={24} /> <span>{post.nbViews}</span>
            </Button>
          </div>
        </div>
        <Separator />
        {post.content && (
          <div className=' prose lg:prose-xl mt-12 dark:prose-p:text-gray-300 dark:prose-h2:text-gray-100 dark:prose-h3:text-gray-100 dark:prose-h4:text-gray-100 dark:prose-h5:text-gray-100 dark:prose-h6:text-gray-100 dark:prose-a:text-gray-100 dark:prose-a:underline' dangerouslySetInnerHTML={{ __html: post.content }} />
        )}
      </div>
      {/* End Hero */}
      {/* Posts */}
    </section>
  );
};

export default SinglePost;

"use client";
import Image from 'next/image';
import Link from 'next/link';
import { useForm } from 'react-hook-form';

import Loading from '@/components/Loading';
import { Dialog, DialogHeader } from '@/components/ui/dialog';
import {
    Form, FormControl, FormField, FormItem, FormLabel, FormMessage
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { PostFormType } from '@/lib/data/form';
import { getPosts } from '@/lib/data/react-query';
import {
    DialogContent, DialogDescription, DialogTitle, DialogTrigger
} from '@radix-ui/react-dialog';
import { useQuery } from '@tanstack/react-query';

export default function Home() {
  const { data, error, isError, isLoading } = useQuery({
    queryKey: ["posts"],
    queryFn: getPosts,
  });
  const form = useForm<PostFormType>();
  const handleSubmit = form.handleSubmit;
  const onSubmit = (values: PostFormType) => {};
  if (isLoading) {
    return <Loading />;
  }
  if (isError) {
    return <div>Error: {error?.message}</div>;
  }
  const posts = data?.posts;
  return (
    <section className="flex flex-col gap-y-10 sm:gap-y-12 md:gap-y-16 lg:gap-y-20">
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div className="max-w-2xl text-center mx-auto mb-10 lg:mb-14">
          <h2 className="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">
            Read our latest news
          </h2>
          <p className="mt-1 text-gray-600 dark:text-neutral-400">
            We've helped some great companies brand, design and get to market.
          </p>
          <Dialog>
            <DialogTrigger>Add a post</DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Add a post</DialogTitle>
                <DialogDescription>
                  Creating a post to increase posts data
                </DialogDescription>
              </DialogHeader>
              <div>
                <Form {...form}>
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <FormField
                      name="title"
                      control={form.control}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Title</FormLabel>
                          <FormControl>
                            <Input placeholder="Add a title" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </form>
                </Form>
              </div>
            </DialogContent>
          </Dialog>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10 lg:mb-14">
          {posts?.map((post) => (
            <article
              key={post.id}
              className="relative group flex flex-col bg-white border shadow-sm rounded-xl hover:shadow-md focus:outline-none focus:shadow-md transition dark:bg-neutral-900 dark:border-neutral-800"
            >
              <div className="aspect-w-16 aspect-h-9">
                <Image
                  className="w-full object-cover rounded-t-xl"
                  src="/thumbnail-default.jpg"
                  alt="Blog Image"
                  width={750}
                  height={500}
                />
              </div>
              <div className="p-4 md:p-5">
                <div className="mt-3 flex flex-wrap gap-2">
                  {post.tags.map((tag, key) => (
                    <span
                      key={key}
                      className="py-1.5 px-3 bg-white text-gray-600 border border-gray-200 text-xs sm:text-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="mt-2 text-lg font-medium text-gray-800 group-hover:text-blue-600 dark:text-neutral-300 dark:group-hover:text-white">
                  {post.title}
                </h3>
              </div>
              <Link
                className="absolute inset-0 opacity-0"
                href={`/react-query-test/${post.id}`}
                aria-label={`Read More about "${post.title}"`}
              />
            </article>
          ))}
        </div>

        <div className="text-center">
          <div className="inline-block bg-white border shadow-sm rounded-full dark:bg-neutral-900 dark:border-neutral-800">
            <div className="py-3 px-4 flex items-center gap-x-2">
              <p className="text-gray-600 dark:text-neutral-400">
                Want to read more?
              </p>
              <a
                className="inline-flex items-center gap-x-1.5 text-blue-600 decoration-2 hover:underline focus:outline-none focus:underline font-medium dark:text-blue-500"
                href="../docs/index.html"
              >
                Go here
                <svg
                  className="shrink-0 size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { FC, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';

import { PostComment } from '@/lib/schemas/comment.schema';
import { CommentForm, commentFormSchema } from '@/lib/schemas/post.schema';
import { createComment } from '@/lib/services/comment.service';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form';
import { Input } from '../ui/input';
import { LoadingButton } from '../ui/loading-button';
import { Textarea } from '../ui/textarea';

dayjs.extend(relativeTime);
const Comments: FC<{ postSlug: string; comments?: PostComment[] }> = ({
  postSlug,
  comments,
}) => {
  if (!postSlug) {
    return <div>No post slug found</div>;
  }
  const commentFormInitialValues: CommentForm = {
    content: "",
    postSlug,
  };
  const form = useForm<CommentForm>({
    resolver: zodResolver(commentFormSchema),
    defaultValues: commentFormInitialValues,
  });
  const { handleSubmit, formState } = form;

  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: (comment: CommentForm) => createComment(comment),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["comments"] });
      toast.success("Comment created successfully");
    },
    onError: () => {
      toast.error("Failed to create comment");
    },
  });
  const [isLoading, setIsLoading] = useState(
    mutation.isPending || formState.isLoading || formState.isSubmitting
  );
  const onSubmit = async (data: CommentForm) => {
    setIsLoading(true);
    console.log(data);
    await mutation.mutateAsync(data);
    setIsLoading(false);
    form.reset();
  };
  return (
    <section className=" py-8 lg:py-16 antialiased">
      <div className="max-w-2xl mx-auto px-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg lg:text-2xl font-bold text-gray-900 dark:text-white">
            Discussion ({comments?.length})
          </h2>
        </div>
        <Form {...form}>
          <form className="mb-6" onSubmit={handleSubmit(onSubmit)}>
            <FormField
              control={form.control}
              name="content"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <div className=" mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
                      <FormLabel htmlFor="comment" className="sr-only">
                        Your comment
                      </FormLabel>
                      <Textarea
                        id="comment"
                        rows={6}
                        className="py-2 px-4 w-full text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none focus:ring-offset-0 dark:ring-gray-500 transition-all duration-300 dark:text-white dark:placeholder-gray-400 dark:bg-gray-800"
                        placeholder="Write a comment..."
                        {...field}
                      />
                      <FormMessage />
                    </div>
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="postSlug"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input type="hidden" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            <LoadingButton type="submit" loading={isLoading}>
              Post comment
            </LoadingButton>
          </form>
        </Form>
        {comments &&
          comments.length > 0 &&
          comments?.map((comment) => {
            const date = dayjs(comment.createdAt).fromNow();
            return (
              <article
                className="p-6 text-base bg-white rounded-lg dark:bg-gray-900"
                key={comment.id}
              >
                <footer className="flex justify-between items-center mb-2">
                  <div className="flex items-center">
                    <p className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white font-semibold">
                      <Avatar className="size-6 mr-2">
                        <AvatarImage src={comment.user.image ?? ""} />
                        <AvatarFallback>
                          {comment.user.name?.charAt(0)}
                        </AvatarFallback>
                      </Avatar>
                      {comment.user.name}
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      <time dateTime="2022-02-08" title="February 8th, 2022">
                        {date}
                      </time>
                    </p>
                  </div>
                </footer>
                <p className="text-gray-500 dark:text-gray-400">
                  {comment.content}
                </p>
              </article>
            );
          })}
      </div>
    </section>
  );
};

export default Comments;

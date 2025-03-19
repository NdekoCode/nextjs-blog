import { FC } from 'react';
import { useForm } from 'react-hook-form';

import { useAuth } from '@/lib/hooks/useAuth';
import { CommentForm } from '@/lib/schemas/post.schema';

import { Button } from '../ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';

const Comments: FC<{ postSlug: string }> = ({ postSlug = "" }) => {
  const { session } = useAuth();
  const commentFormInitialValues: CommentForm = {
    content: "",
    postSlug,
  };
  const form = useForm<CommentForm>({
    defaultValues: commentFormInitialValues,
  });
  const { handleSubmit, formState } = form;
  const onSubmit = (data: CommentForm) => {
    console.log(data);
  };
  return (
    <section className=" py-8 lg:py-16 antialiased">
      <div className="max-w-2xl mx-auto px-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg lg:text-2xl font-bold text-gray-900 dark:text-white">
            Discussion (20)
          </h2>
        </div>
        <Form {...form}>
          <form className="mb-6" onSubmit={handleSubmit(onSubmit)}>
            <div className=" mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
              <FormField
                control={form.control}
                name="content"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <FormLabel htmlFor="comment" className="sr-only">
                        Your comment
                      </FormLabel>
                      <Textarea
                        id="comment"
                        rows={6}
                        className="py-2 px-4 w-full text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none focus:ring-offset-0 dark:ring-gray-500 transition-all duration-300 dark:text-white dark:placeholder-gray-400 dark:bg-gray-800"
                        placeholder="Write a comment..."
                        required
                        defaultValue={""}
                        {...field}
                      />
                      <FormMessage />
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
            </div>
            <Button
              type="submit"
              className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-gray-800 bg-primary rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800"
            >
              {formState.isLoading ||
                (formState.isSubmitted && (
                  <div
                    className="animate-spin inline-block size-6 border-3 border-current border-t-transparent text-blue-600 rounded-full dark:text-blue-500"
                    role="status"
                    aria-label="loading"
                  >
                    <span className="sr-only">Loading...</span>
                  </div>
                ))}
              Post comment
            </Button>
          </form>
        </Form>

        <article className="p-6 text-base bg-white rounded-lg dark:bg-gray-900">
          <footer className="flex justify-between items-center mb-2">
            <div className="flex items-center">
              <p className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white font-semibold">
                <img
                  className="mr-2 w-6 h-6 rounded-full"
                  src="https://flowbite.com/docs/images/people/profile-picture-2.jpg"
                  alt="Michael Gough"
                />
                Michael Gough
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                <time dateTime="2022-02-08" title="February 8th, 2022">
                  Feb. 8, 2022
                </time>
              </p>
            </div>
          </footer>
          <p className="text-gray-500 dark:text-gray-400">
            Very straight-to-point article. Really worth time reading. Thank
            you! But tools are just the instruments for the UX designers. The
            knowledge of the design tools are as important as the creation of
            the design strategy.
          </p>
        </article>
      </div>
    </section>
  );
};

export default Comments;

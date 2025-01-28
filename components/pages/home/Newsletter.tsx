"use client";
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import {
    Form, FormControl, FormField, FormItem, FormLabel, FormMessage
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { zodResolver } from '@hookform/resolvers/zod';

const Newsletter = () => {
  const newsletterSchema = z.object({
    email: z
      .string()
      .email("Provide a valid email address")
      .min(5, "Provide a valid email address"),
  });
  const formDefaultValue:z.infer<typeof newsletterSchema>= {email:""}
  const form = useForm<z.infer<typeof newsletterSchema>>({
    resolver: zodResolver(newsletterSchema),
    defaultValues:formDefaultValue
  });
  const handleSubmit = form.handleSubmit;
  const onSubmit = (data:z.infer<typeof newsletterSchema>) => {
    console.log(data);
  };
  return (
    <div className="flex flex-col gap-y-5">
      <h1 className="capitalize text-3xl font-bold sm:text-4xl text-center text-pretty md:text-5xl text-black dark:text-white">
        Become a better front-end developer
      </h1>
      <Form {...form}>
        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-y-5'>
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="Enter your email address"
                    className='dark:bg-white transition-all duration-300'
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className='w-full py-4 text-xl font-medium'>Subscribe to our newsletter</Button>
        </form>
      </Form>
    </div>
  );
};

export default Newsletter;

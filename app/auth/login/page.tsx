"use client";

import { Github, Mail } from 'lucide-react';
import { useForm } from 'react-hook-form';

import PageTitle from '@/components/PageTitle';
import { Button } from '@/components/ui/button';
import {
    Form, FormControl, FormField, FormItem, FormLabel, FormMessage
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { loginFormDefaultValue, loginFormSchema, LoginFormType } from '@/lib/data/form';
import { zodResolver } from '@hookform/resolvers/zod';

const Page = () => {
  const form = useForm<LoginFormType>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: loginFormDefaultValue,
  });
  const { handleSubmit } = form;
  const onSubmit = (values: LoginFormType) => {
    console.log("Form Values:", JSON.stringify(values));
  };

  return (
    <div className="flex flex-col gap-y-10 items-center">
      <PageTitle title="Login or Register" />
      <div className="flex flex-col gap-y-4 w-full">
        <Button aria-label="Signin with Github" className="w-full">
          <Github className="mr-3" /> Signin with Github
        </Button>
        <Button aria-label="Signin with Google" className="w-full">
          <Mail className="mr-3" /> Signin with Google
        </Button>
      </div>
      <Form {...form}>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-4 min-w-[280px] w-full p-5 shadow-lg rounded-md border border-gray-200 dark:border-gray-400"
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="Enter your email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    placeholder="Enter your password"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button aria-label="Submit" type="submit">Submit</Button>
        </form>
      </Form>
    </div>
  );
};

export default Page;

"use client";
import { CloudUpload, Paperclip } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import slugify from 'slugify';
import { toast } from 'sonner';
import * as z from 'zod';

import { Button } from '@/components/ui/button';
import {
  FileInput, FileUploader, FileUploaderContent, FileUploaderItem
} from '@/components/ui/file-upload';
import {
  Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useCategories } from '@/lib/hooks/useCategories';
import { zodResolver } from '@hookform/resolvers/zod';

import { Label } from '../ui/label';
import MultipleSelector from '../ui/multiselect';

// Validation Schema - Accepte uniquement un fichier image
const formSchema = z.object({
  title: z.string().min(1, "Title is required"),
  image: z
    .instanceof(File, {
      message: "Please select a valid image file",
    })
    .refine((file) => file?.type.startsWith("image/"), {
      message: "Only image files are allowed",
    }),
  content: z.string(),
  categories: z
    .array(z.object({ label: z.string(), value: z.string() }))
    .nonempty("Please select at least one category"),
});

export default function WritePostForm() {
  const [image, setImage] = useState<File | null>(null);
  const [values, setValues] = useState<{ label: string; value: string }[]>([]);

  const { data: categories } = useCategories();

  const dropZoneConfig = {
    maxFiles: 1, // Accepter uniquement 1 fichier
    maxSize: 1024 * 1024 * 4,
    multiple: false,
    accept: {
      "image/*": [".jpg", ".jpeg", ".png"],
    },
  };

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      image: undefined,
      content: "",
      categories:
        categories?.map((category) => ({
          label: category.title,
          value: category.id as string,
        })) ?? [],
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const formValues = {
        ...values,
        image: image,
        categories: values.categories.map((category) => category.value),
        slug: slugify(values.title, { lower: true }),
      };
      console.log(formValues);
      toast(
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(formValues, null, 2)}</code>
        </pre>
      );
    } catch (error) {
      console.error("Form submission error", error);
      toast.error("Failed to submit the form. Please try again.");
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 max-w-3xl w-full mx-auto py-10"
      >
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input placeholder="Title" type="text" {...field} />
              </FormControl>
              <FormDescription>The post title</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="image"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Select Image</FormLabel>
              <FormControl>
                <FileUploader
                  value={image ? [image] : []}
                  onValueChange={(value) => {
                    if (value && value.length > 0) {
                      const selectedImage = value[0];
                      setImage(selectedImage);
                      field.onChange(selectedImage); // Mise à jour du champ image
                    } else {
                      setImage(null);
                      field.onChange(null);
                    }
                  }}
                  dropzoneOptions={dropZoneConfig}
                  className="relative bg-background rounded-lg p-2"
                >
                  <FileInput
                    id="fileInput"
                    className="outline-dashed outline-1 outline-slate-500"
                  >
                    <div className="flex items-center justify-center flex-col p-8 w-full">
                      <CloudUpload className="text-gray-500 w-10 h-10" />
                      <p className="mb-1 text-sm text-gray-500 dark:text-gray-400">
                        <span className="font-semibold">Click to upload</span>
                        &nbsp; or drag and drop
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        JPG, PNG only (max 4MB)
                      </p>
                    </div>
                  </FileInput>
                  <FileUploaderContent>
                    {image && (
                      <FileUploaderItem key={image.name} index={0}>
                        <Paperclip className="h-4 w-4 stroke-current" />
                        <Image
                          src={URL.createObjectURL(image)}
                          className="h-4 w-4 object-cover"
                          alt={image.name}
                          width={100}
                          height={100}
                        />
                        <span>{image.name}</span>
                      </FileUploaderItem>
                    )}
                  </FileUploaderContent>
                </FileUploader>
              </FormControl>
              <FormDescription>Select an image to upload.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="content"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Post Content</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Content of the post"
                  className="resize-none"
                  {...field}
                />
              </FormControl>
              <FormDescription>The post content</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="categories"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Categories</FormLabel>
              <FormControl>
                <div className="*:not-first:mt-2">
                  <Label>Multiselect with placeholder and clear</Label>
                  <MultipleSelector
                    onChange={(value) => {
                      setValues(value);
                      field.onChange(value);
                    }}
                    commandProps={{
                      label: "Select categories",
                    }}
                    defaultOptions={categories?.map((category) => ({
                      label: category.title,
                      value: category.id as string,
                    }))}
                    value={values}
                    placeholder="Select categories"
                    emptyIndicator={
                      <p className="text-center text-sm">No results found</p>
                    }
                  />
                </div>
              </FormControl>
              <FormDescription>Select categories for the post</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}

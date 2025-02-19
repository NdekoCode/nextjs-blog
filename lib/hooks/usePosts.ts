'use client';;
import { useQuery } from '@tanstack/react-query';

import { getPosts } from '../services/post.service';

export const usePosts = (categorySlug: string | null = null) => {
    console.log("CATEGORY SLUG",categorySlug)
  return useQuery({
    queryKey: ["posts", categorySlug],
    queryFn: () => getPosts(categorySlug),
  });
};
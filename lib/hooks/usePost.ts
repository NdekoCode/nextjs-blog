import { useQuery } from '@tanstack/react-query';

import { getPostBySlug } from '../services/post.service';

export const usePost = (slug: string) => {
  return useQuery({
    queryKey: ["post", slug],
    queryFn: () => getPostBySlug(slug),
    enabled: !!slug,
  });
};

import { useQuery } from '@tanstack/react-query';

import { getCommentsByPostSlug } from '../services/comment.service';

export const useComments = (postSlug: string) => {
  return useQuery({
    queryKey: ['comments', postSlug],
    queryFn: () => getCommentsByPostSlug(postSlug),
  });
};

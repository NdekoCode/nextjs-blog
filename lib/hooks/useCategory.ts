import { useQuery } from '@tanstack/react-query';

import { getCategoryBySlug } from '../services/category.service';

export const useCategory = (categorySlug: string) => {
  return useQuery({
    queryKey: ['category', categorySlug],
    queryFn: () => getCategoryBySlug(categorySlug),
    enabled: !!categorySlug,
  });
};
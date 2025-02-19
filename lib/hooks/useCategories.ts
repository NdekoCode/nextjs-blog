import { useQuery } from '@tanstack/react-query';

import { getCategories } from '../services/category.service';

export const useCategory =()=>{
  return useQuery({
    queryKey: ['categories'],
    queryFn: getCategories,
  });
}
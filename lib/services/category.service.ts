import { categoriesPostSchema, CategoryPost } from '../schemas/post.schema';
import { getApiUrl } from '../utils';

export const getCategories = async()=>{
  try {
    const res = await fetch(getApiUrl('/categories'));
    const categories = await res.json();
    return categoriesPostSchema.parse(categories);
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export const getCategoryBySlug = async(slug:string)=>{
    try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/categories/${slug}`);
    const category = (await res.json()) as CategoryPost;
    return category;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
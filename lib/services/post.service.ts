import { PostCategory, postSchema } from '../schemas/post.schema';

export const getPostBySlug = async (slug: string) => {
  try {
    const post = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/posts/${slug}`
    );
    const data = await post.json();
    return postSchema.parse(data);
  } catch (error) {
    console.error(error);
    throw error;
  }
};
export const getPosts  =async (categorySlug: string|null=null)=>{
    try {
      const url = categorySlug ? `${process.env.NEXT_PUBLIC_API_URL}/posts?category=${categorySlug}` : `${process.env.NEXT_PUBLIC_API_URL}/posts`
        const res = await fetch(url)
        const data = await res.json() as PostCategory[]
        return data
    } catch (error) {
        console.error(error)
        throw error
    }
}
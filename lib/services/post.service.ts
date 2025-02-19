import { postSchema, postsSchema } from '../schemas/post.schema';

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
export const getPosts  =async ()=>{
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/posts`)
        const data = await res.json()
        return postsSchema.parse(data)
    } catch (error) {
        console.error(error)
        throw error
    }
}
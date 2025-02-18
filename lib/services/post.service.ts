import { postSchema } from '../schemas/post.schema';

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

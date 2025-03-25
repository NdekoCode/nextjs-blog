import { IPostDto } from '../schemas/dto/post.dto';
import { PostCategory, postSchema } from '../schemas/post.schema';
import { getApiUrl } from '../utils';
import { getToken } from './utils.service';

export const getPostBySlug = async (slug: string) => {
  try {
    const res = await fetch(getApiUrl(`/posts/${slug}`));
    const data = await res.json();
    if (!res.ok) {
      console.error(
        `Post not found: ${slug}`,
        JSON.stringify({ cause: res }, null, 2)
      );
      throw new Error(
        `Post not found: ${slug}`, { cause: res });
    }
    return postSchema.parse(data);
  } catch (error) {
    console.error(error);
    throw error;
  }
};
export const getPosts = async (categorySlug: string | null = null) => {
  try {
    const url = categorySlug
      ? `${process.env.NEXT_PUBLIC_API_URL}/posts?category=${categorySlug}`
      : `${process.env.NEXT_PUBLIC_API_URL}/posts`;
    const res = await fetch(url);
    const data = (await res.json()) as PostCategory[];
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const createPost = async (post: IPostDto) => {
  try {
    const token = getToken();
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/posts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(post),
    });
  } catch (error) {
    console.warn(error);
  }
};

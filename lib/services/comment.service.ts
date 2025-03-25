import { postCommentsSchema } from '../schemas/comment.schema';
import { CommentForm } from '../schemas/post.schema';

export const createComment = async (comment: CommentForm) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/comments`, {
      method: "POST",
      body: JSON.stringify(comment),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
export const getCommentsByPostSlug = async (postSlug: string) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/posts/${postSlug}/comments`);
    const data = await res.json();
    return postCommentsSchema.parse(data);
  } catch (error) {
    console.error(error);
    throw error;
  }
};
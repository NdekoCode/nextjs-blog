import { postSchema, postsSchema } from '../schemas/post.schema';

export const getPosts = () =>
  fetch("https://dummyjson.com/posts")
    .then((res) => res.json())
    .then(postsSchema.parse);
export const getPost = (postId: number | string) =>
  fetch(`https://dummyjson.com/posts/${postId}`)
    .then((res) => res.json())
    .then(postSchema.parse);

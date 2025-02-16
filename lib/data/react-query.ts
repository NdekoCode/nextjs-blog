import { postsSchema } from '../schemas/post.schema';

export const getPosts = ()=>fetch('https://dummyjson.com/posts').then(res=>res.json()).then((postsSchema.parse))
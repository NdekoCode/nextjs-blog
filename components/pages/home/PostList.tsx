import { FC } from 'react';

import { PostCategory } from '@/lib/schemas/post.schema';

import PostCard from './PostCard';

const PostList: FC<{ posts?: PostCategory[]; showComments?: boolean }> = ({
  posts,
  showComments = true,
}) => {
  if (!Array.isArray(posts) || posts.length === 0)
    return (
      <h1 className="text-center my-5 text-2xl font-bold">No posts found</h1>
    );
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-center-center gap-3 sm:gap-4 lg:gap-5">
      {posts?.map((post) => (
        <PostCard post={post} key={post.id} showComments={showComments} />
      ))}
    </div>
  );
};

export default PostList;

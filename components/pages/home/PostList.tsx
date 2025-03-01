import { FC } from 'react';

import { PostCategory } from '@/lib/schemas/post.schema';

import PostCard from './PostCard';

const PostList: FC<{ posts?: PostCategory[] }> = ({ posts }) => {
  console.log("🔄 Posts:", posts);
  if (!Array.isArray(posts) || posts.length === 0) return <div>No posts found</div>;
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-center-center gap-3 sm:gap-4 lg:gap-5">
      {posts?.map((post) => (
        <PostCard post={post} key={post.id} />
      ))}
    </div>
  );
};

export default PostList;

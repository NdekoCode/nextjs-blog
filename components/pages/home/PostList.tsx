import { FC } from 'react';

import { Post } from '@/lib/types';

import PostCard from './PostCard';

const PostList: FC<{ posts: Post[] }> = ({ posts }) => {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-center-center gap-3 sm:gap-4 lg:gap-5">
      {posts.map((post) => (
        <PostCard post={post} key={post.id} />
      ))}
    </div>
  );
};

export default PostList;

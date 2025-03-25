import { Eye, MessageCircle } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { PostCategory } from '@/lib/schemas/post.schema';
import { cn } from '@/lib/utils';

const PostCard: FC<{
  post: PostCategory;
  className?: string;
  showComments?: boolean;
}> = ({ post, className, showComments = true }) => {
  if (!post) return null;
  return (
    <Card className={cn("group relative", className)}>
      {post?.image && (
        <CardHeader>
          <div className="h-72 w-full overflow-hidden rounded-lg">
            <Image
              className="w-full h-full group-hover:scale-110 transition-transform duration-300  object-cover"
              width={1280}
              height={750}
              alt={post.title}
              src={post.image}
            />
          </div>
        </CardHeader>
      )}
      <CardContent>
        <CardTitle className="pt-3">{post.title}</CardTitle>
      </CardContent>
      <CardFooter className="justify-between">
        {post.categories && post.categories.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {post.categories.map((category) => (
              <Badge variant="outline" key={category.id}>
                {category.title}
              </Badge>
            ))}
          </div>
        )}
        <div className="flex items-center gap-1.5">
          {showComments && (
            <Button
              aria-label={`View ${post.nbComments} comments`}
              variant="ghost"
            >
              <MessageCircle /> <span>{post.comments?.length || 0}</span>
            </Button>
          )}
          <Button aria-label={`View ${post.nbViews} views`} variant="ghost">
            <Eye /> <span>{post.nbViews}</span>
          </Button>
        </div>
      </CardFooter>
      <Link
        href={`/posts/${post.slug}`}
        className="absolute inset-0 opacity-0"
      />
    </Card>
  );
};

export default PostCard;

import { Eye, MessageCircle } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Post } from '@/lib/types';
import { cn } from '@/lib/utils';

const PostCard: FC<{ post: Post; className?: string }> = ({
  post,
  className,
}) => {
  return (
    <Card className={cn("group relative", className)}>
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
      <CardContent>
        <CardTitle>{post.title}</CardTitle>
      </CardContent>
      <CardFooter className="justify-between">
        <Badge variant="outline">{post.category} </Badge>
        <div className="flex items-center gap-1.5">
          <Button variant="ghost">
            <MessageCircle /> <span>{post.nbComments}</span>
          </Button>
          <Button variant="ghost">
            <Eye /> <span>{post.nbViews}</span>
          </Button>
        </div>
      </CardFooter>
      <Link href={`/posts/${post.slug}`} className='absolute inset-0 opacity-0'/>
    </Card>
  );
};

export default PostCard;

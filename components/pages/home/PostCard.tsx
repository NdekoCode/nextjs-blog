import { Eye, MessageCircle } from 'lucide-react';
import Image from 'next/image';
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
    <Card className={cn(className)}>
      <CardHeader className="h-80 w-full">
        <Image
          className="w-full h-full rounded-lg  object-cover"
          width={1280}
          height={750}
          alt={post.title}
          src={post.image}
        />
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
    </Card>
  );
};

export default PostCard;

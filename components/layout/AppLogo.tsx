import Link from 'next/link';
import { FC } from 'react';

import { cn } from '@/lib/utils';

const AppLogo:FC<{className?:string}> = ({className}) => {
  return (
    <h1 className={cn("text-3xl text-transparent font-bold bg-clip-text bg-gradient-to-br from-red-400 to-blue-600 bg-transparent", className)}>
      <Link href="/">NextBlog</Link>
    </h1>
  );
};

export default AppLogo;

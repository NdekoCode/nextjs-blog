'use client';
import { useRouter } from 'next/navigation';
import { FC, PropsWithChildren } from 'react';

import { useAuth } from '@/lib/hooks/useAuth';

const RequireAuth: FC<PropsWithChildren> = ({ children }) => {
  const { isAuthenticated } = useAuth();
  const router = useRouter();
  if (!isAuthenticated) router.push("/auth/login");
  return <>{children}</>;
};

export default RequireAuth;

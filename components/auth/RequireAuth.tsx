'use client';
import { useRouter } from 'next/navigation';
import { FC, PropsWithChildren, useEffect, useState } from 'react';

import { useAuth } from '@/lib/hooks/useAuth';

const RequireAuth: FC<PropsWithChildren> = ({ children }) => {
  const { isAuthenticated, isLoading } = useAuth();
  const [shouldRender, setShouldRender] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (!isLoading) {
      if (!isAuthenticated) {
        router.replace("/auth/login");
      } else {
        setShouldRender(true);
      }
    }
  }, [isAuthenticated, isLoading, router]);

  if (isLoading || !shouldRender) return null;

  return <>{children}</>;
};

export default RequireAuth;

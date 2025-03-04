import { FC, PropsWithChildren } from 'react';

import IsAuthenticated from '@/components/auth/IsAuthenticated';

const AuthLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <IsAuthenticated>
      <div className="container flex flex-col items-center justify-center min-h-svh h-full">{children}</div>
    </IsAuthenticated>
  );
};

export default AuthLayout;

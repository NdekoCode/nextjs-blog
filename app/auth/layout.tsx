import { FC, PropsWithChildren } from 'react';

const AuthLayout: FC<PropsWithChildren> = ({ children }) => {
  return <div className="container flex flex-col items-center justify-center min-h-svh h-full">{children}</div>;
};

export default AuthLayout;

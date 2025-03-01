import { useSession } from 'next-auth/react';

export const useAuth = () => {
  const { data: session, status } = useSession();
  const isAuthenticated = status === "authenticated";
  const isLoading = status === "loading";
  const isConnected =
    isAuthenticated && !isLoading && session?.user && session.user.email;
  return {
    isAuthenticated,
    isLoading,
    isConnected,
    session,
  };
};

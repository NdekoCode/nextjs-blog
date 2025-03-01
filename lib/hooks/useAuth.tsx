'use client';
import { signOut, useSession } from 'next-auth/react';
import { useCallback } from 'react';

export const useAuth = () => {
  const { data: session, status } = useSession();
  const logOut = useCallback(() => {
    signOut();
  }, []);
  const isAuthenticated = status === "authenticated";
  const isLoading = status === "loading";
  const isConnected =
    isAuthenticated && !isLoading && session?.user && session.user.email;
  return {
    isAuthenticated,
    isLoading,
    isConnected,
    session,
    logOut
  };
};

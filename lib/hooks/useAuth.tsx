'use client';
import { signOut, useSession } from 'next-auth/react';
import { useCallback, useEffect, useState } from 'react';

export const useAuth = () => {
  const { data: session, status } = useSession();

  const [isDisconnected, setIsDisconnected] = useState(false);

  const logOut = useCallback(() => {
    signOut();
  }, []);

  const isAuthenticated = status === "authenticated";
  const isLoading = status === "loading";
  const isConnected = isAuthenticated && session?.user?.email;

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      setIsDisconnected(true);
    } else {
      setIsDisconnected(false);
    }
  }, [isAuthenticated, isLoading]);

  return {
    isAuthenticated,
    isLoading,
    isConnected,
    session,
    isDisconnected,
    logOut,
  };
};

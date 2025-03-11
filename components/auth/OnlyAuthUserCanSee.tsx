"use client";
import { useRouter } from 'next/navigation';
import { FC, PropsWithChildren } from 'react';

import { useAuth } from '@/lib/hooks/useAuth';

import { Button } from '../ui/button';

const OnlyAuthUserCanSee: FC<PropsWithChildren<{ message?: string }>> = ({
  children,
  message,
}) => {
  const { isAuthenticated, isLoading } = useAuth();
  const router = useRouter();
  // Si en cours de chargement, ne rien afficher
  if (isLoading) return null;

  // Si non authentifié, afficher le message d'erreur
  if (!isAuthenticated) {
    return (
      <div
        className="bg-blue-100 sticky bottom-0 mt-5 inset-x-0 max-w-md mx-auto z-10 border border-blue-200 text-gray-800 rounded-lg p-4 dark:bg-blue-800/10 dark:border-blue-900 dark:text-white"
        role="alert"
        tabIndex={-1}
        aria-labelledby="hs-actions-label"
      >
        <div className="flex">
          <div className="shrink-0">
            <svg
              className="shrink-0 size-4 mt-1"
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx={12} cy={12} r={10} />
              <path d="M12 16v-4" />
              <path d="M12 8h.01" />
            </svg>
          </div>
          <div className="ms-3">
            <h3 id="hs-actions-label" className="font-semibold">
              Attention
            </h3>
            <div className="mt-2 text-sm text-gray-600 dark:text-neutral-400">
              {message || "You must be logged in to see this page"}
            </div>

            <div className="mt-4">
              <div className="flex gap-x-3">
                <Button
                variant="link"
                  className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 focus:outline-hidden focus:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400 dark:focus:text-blue-400"
                  onClick={() => router.push("/auth/login")}
                >
                  Login
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Si authentifié, afficher le contenu
  return <>{children}</>;
};

export default OnlyAuthUserCanSee;

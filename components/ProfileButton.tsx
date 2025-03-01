import Link from 'next/link';

import { useAuth } from '@/lib/hooks/useAuth';

import UserSkeleton from './UserSkeleton';

const ProfileButton = () => {
  const { session, isConnected, isLoading } = useAuth();
  console.log("🔄 Session:", session, "Status:", status);
  return (
    <div>
      {isLoading ? (
        <UserSkeleton />
      ) : isConnected ? null : (
        <Link
          href="/auth/login"
          className="py-2 px-3 text-nowrap rounded bg-gray-700 text-white"
        >
          Login / SignUp
        </Link>
      )}
    </div>
  );
};

export default ProfileButton;

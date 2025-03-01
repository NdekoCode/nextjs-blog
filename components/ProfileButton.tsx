import { useSession } from 'next-auth/react';
import Link from 'next/link';

const ProfileButton = () => {
  const {data:session,status} = useSession()
  console.log("🔄 Session:", session,"Status:",status);
  return (
    <div>{
      <Link
        href="/auth/login"
        className="py-2 px-3 text-nowrap rounded bg-gray-700 text-white"
      >
        Login / SignUp
      </Link>}
    </div>
  );
};

export default ProfileButton;

import Link from 'next/link';

const ProfileButton = () => {
  return (
    <div>
      <Link
        href="/auth/login"
        className="py-2 px-3 rounded bg-gray-700 text-white"
      >
        Login / SignUp
      </Link>
    </div>
  );
};

export default ProfileButton;

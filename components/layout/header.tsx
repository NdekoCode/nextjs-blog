'use client';
import Link from 'next/link';

import HeaderMenu from '../ui/header-menu';
import { ThemeToggle } from './ThemeToggle';

const Header = () => {
  return (
    <header className='border-b p-4'>
      <div className="container flex items-center justify-between">
        <h1 className="text-3xl text-transparent font-bold bg-clip-text bg-gradient-to-br from-red-400 to-blue-600"><Link href="/">NextBlog</Link></h1>
        <HeaderMenu/>
        <div className="items-center flex gap-3">
          <ThemeToggle />
          <Link
            href="/auth/login"
            className="py-2 px-3 rounded bg-gray-700 text-white"
          >
            Login / SignUp
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;

'use client'
import { ChevronDown } from 'lucide-react';
import Link from 'next/link';

import { ThemeToggle } from './ThemeToggle';

const Header = () => {
  return (
    <header>
      <div className="container flex items-center justify-between">
        <h1 className="text-3xl">NextBlog</h1>
        <div className="flex items-center gap-3">
          <Link
            href="/categories"
            className="text-sm capitalize flex items-center"
          >
            Categories <ChevronDown />
          </Link>
          <Link href="/posts/new" className="text-sm capitalize">
            White a post
          </Link>
        </div>
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

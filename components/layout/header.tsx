"use client";
import ProfileButton from '../ProfileButton';
import HeaderMenu from '../ui/header-menu';
import AppLogo from './AppLogo';
import ResponsiveMenu from './ResponsiveMenu';
import { ThemeToggle } from './ThemeToggle';

const Header = () => {
  return (
    <header className="border-b p-4">
      <div className="container flex items-center justify-between">
        {/* Responsive Menu */}
        <div className="flex items-center gap-2">
          <ResponsiveMenu />
          <AppLogo />
        </div>
        {/* Navigation with Shadcn */}
        <HeaderMenu />
        <div className="items-center flex gap-3">
          <ThemeToggle />
          <ProfileButton />
        </div>
      </div>
    </header>
  );
};

export default Header;

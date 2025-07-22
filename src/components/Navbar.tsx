'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { SITE_CONFIG } from '../constants/siteconfig';
import GradientButton from './shared/GradientButton';
import { useAuth } from '../context/AuthContext';
import { FiBell, FiMessageSquare } from 'react-icons/fi';

const LOGGED_IN_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Jobs', href: '/jobs' },
  { label: 'Networking', href: '/networking' },
  { label: 'My Connections', href: '/connections' },
  { label: 'Services', href: '/services' },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navLinks = SITE_CONFIG.navbar.navLinks;
  const signUpText = SITE_CONFIG.navbar.signUp;
  const { user } = useAuth();

  return (
    <div className="w-full h-[70px] bg-white shadow-sm fixed top-0 z-50 overflow-x-hidden">
      <div className="w-full max-w-[1360px] mx-auto h-full flex items-center justify-between px-4 md:px-6">
        {/* Logo Section */}
        <div className="w-[180px] h-[70px] flex items-center">
          <Image
            src="/logo.png"
            alt="Staff Book"
            width={140}
            height={50}
            priority
          />
        </div>
        {/* Desktop Menu */}
        {user ? (
          <nav className="hidden md:flex items-center gap-8">
            {LOGGED_IN_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={`text-[#18192B] text-[16px] font-medium font-sans px-4 py-2 rounded-full ${link.label === 'Home' ? 'bg-[#F3EFFF] text-[#18192B]' : 'hover:text-primary transition-colors'}`}
              >
                {link.label}
              </Link>
            ))}
            <button className="ml-4 p-2 rounded-full hover:bg-gray-100 transition-colors">
              <FiMessageSquare size={22} />
            </button>
            <button className="ml-1 p-2 rounded-full hover:bg-gray-100 transition-colors">
              <FiBell size={22} />
            </button>
            <div className="flex items-center gap-2 ml-4">
              <Image
                src="/homePage/profile.png"
                alt={user.name}
                width={36}
                height={36}
                className="rounded-full object-cover border border-gray-200"
              />
              <span className="text-xs text-[#18192B] font-medium font-sans">{user.name}</span>
            </div>
          </nav>
        ) : (
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-[#101022] text-[16px] font-medium font-poppins hover:text-[#5B5DE6] transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <GradientButton className="w-[110px] h-[42px] ml-4 text-[16px] font-poppins">
              {signUpText}
            </GradientButton>
          </nav>
        )}
        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? (
              <FiX size={28} color="#101022" />
            ) : (
              <FiMenu size={28} color="#101022" />
            )}
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      {menuOpen && (
        <div className="fixed top-15 md:hidden left-0 w-full min-h-screen bg-white px-6 py-4 shadow-md space-y-4 z-50 flex flex-col">
          {(user ? LOGGED_IN_LINKS : navLinks).map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="block text-[#101022] text-[16px] font-medium font-poppins hover:text-[#5B5DE6] transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          {user ? (
            <div className="flex items-center gap-2 mt-4">
              <Image
                src="/homePage/profile.png"
                alt={user.name}
                width={36}
                height={36}
                className="rounded-full object-cover border border-gray-200"
              />
              <span className="text-xs text-[#18192B] font-medium font-sans">{user.name}</span>
            </div>
          ) : (
            <GradientButton className="w-full h-[42px] text-[16px] font-poppins">
              {signUpText}
            </GradientButton>
          )}
        </div>
      )}
    </div>
  );
};

export default Navbar;
 
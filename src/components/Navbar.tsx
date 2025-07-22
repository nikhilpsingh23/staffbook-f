'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { SITE_CONFIG } from '../constants/siteconfig';
import GradientButton from './shared/GradientButton';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navLinks = SITE_CONFIG.navbar.navLinks;
  const signUpText = SITE_CONFIG.navbar.signUp;

  return (
    <header className="w-full h-[70px] bg-white shadow-sm fixed top-0 z-50 overflow-x-hidden">
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
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="block text-[#101022] text-[16px] font-medium font-poppins hover:text-[#5B5DE6] transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <GradientButton className="w-full h-[42px] text-[16px] font-poppins">
            {signUpText}
          </GradientButton>
        </div>
      )}
    </header>
  );
};

export default Navbar;
 
'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = ['Jobs', 'Networking', 'My Connections', 'Services'];

  return (
    <header className="w-full h-[90px] bg-white shadow-sm fixed top-0 z-50 overflow-x-hidden">
      <div className="w-full max-w-[1360px] mx-auto h-full flex items-center justify-between px-4 md:px-6">
        {/* Logo Section */}
        <div className="w-[250px] h-[90px] flex items-center">
          <Image
            src="/logo.png" // replace with your logo path
            alt="Staff Book"
            width={200}
            height={60}
            priority
          />
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link}
              href="/"
              className="text-[#101022] text-[16px] font-medium font-poppins"
            >
              {link}
            </Link>
          ))}

          <button className="w-[132px] h-[46px] rounded-full bg-gradient-to-r from-[#5B5DE6] to-[#921294] text-white text-[16px] font-semibold font-poppins shadow-md hover:opacity-90 transition">
            Sign up
          </button>
        </nav>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? (
              <FiX size={24} color="#101022" />
            ) : (
              <FiMenu size={24} color="#101022" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white w-full px-6 py-4 shadow-md space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link}
              href="/"
              className="block text-[#101022] text-[16px] font-medium font-poppins"
              onClick={() => setMenuOpen(false)}
            >
              {link}
            </Link>
          ))}

          <button className="w-full h-[46px] rounded-full bg-gradient-to-r from-[#5B5DE6] to-[#921294] text-white text-[16px] font-semibold font-poppins shadow-md">
            Sign up
          </button>
        </div>
      )}
    </header>
  );
};

export default Navbar;
 
'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useRef } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { LOGGED_IN_LINKS, SITE_CONFIG } from '../constants/siteconfig';
import GradientButton from './shared/GradientButton';
import { useAuth } from '../context/AuthContext';
import { FiBell, FiMessageSquare } from 'react-icons/fi';
import ProfileAvatar from './shared/ProfileAvatar';
import { usePathname, useRouter } from 'next/navigation';
import NotificationsModal from './shared/NotificationsModal';



const Navbar = () => {
  const path=usePathname()
  const [menuOpen, setMenuOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const bellButtonRef = useRef<HTMLButtonElement>(null);
  const navLinks = SITE_CONFIG.navbar.navLinks;
  const signUpText = SITE_CONFIG.navbar.signUp;
  const { user } = useAuth();
  const router = useRouter();


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
                className={`text-[#18192B] text-[16px] font-medium font-sans px-4 py-2 rounded-full ${link.href === path ? 'bg-[#F3EFFF] text-[#18192B]' : 'hover:text-primary transition-colors'}`}
              >
                {link.label}
              </Link>
            ))}
            <NavbarIconButton onNotificationsClick={() => setNotificationsOpen(true)} bellButtonRef={bellButtonRef} />
            <ProfileAvatar name={user.name} />
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
            <Link key={"signup"}
                href={"/signup"}>
            <GradientButton className="w-[110px] h-[42px] ml-4 text-[16px] font-poppins">
              {signUpText}
            </GradientButton>
            </Link>
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
            <>
              <NavbarIconButton onNotificationsClick={() => setNotificationsOpen(true)} bellButtonRef={bellButtonRef} />
             
            <ProfileAvatar name={user.name} className="mt-4" size={80} />
              
            </>
          ) : (
            <Link key={"signup"}
                href={"/signup"}>
            <GradientButton className="w-full h-[42px] text-[16px] font-poppins">
              {signUpText}
            </GradientButton>
            </Link>
          )}
        </div>
      )}
      
      {/* Notifications Modal */}
      <NotificationsModal 
        isOpen={notificationsOpen} 
        onClose={() => setNotificationsOpen(false)} 
        buttonRef={bellButtonRef}
      />
    </div>
  );
};

export const NavbarIconButton = ({ onNotificationsClick, bellButtonRef }: { onNotificationsClick: () => void; bellButtonRef?: React.RefObject<HTMLButtonElement | null> }) => {

  return(
    <div className='flex flex-row gap-4'>
    <button className=" p-2 rounded-full hover:bg-gray-100 transition-colors">
              <FiMessageSquare size={22} className='text-gray-500' />
            </button>
            <button 
              ref={bellButtonRef}
              className="ml-1 p-2 rounded-full hover:bg-gray-100 transition-colors"
              onClick={onNotificationsClick}
            >
              <FiBell size={22} className='text-gray-500' />
            </button>
    </div>
  )
}
// export const NavbarSignupButton = () => {
//   const signUpText = SITE_CONFIG.navbar.signUp;
//   return(
//     <GradientButton className="w-full h-[42px] text-[16px] font-poppins" onClick={()=>{
//       router.push('/signup')
//     }}>
//               {signUpText}
//             </GradientButton>
//   )
// }

export default Navbar;
 
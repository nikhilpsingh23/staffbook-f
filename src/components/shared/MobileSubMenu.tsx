'use client';

import { usePathname, useRouter } from 'next/navigation';
import { menuItems } from '../../data/subMenu';

export default function MobileSubMenu() {
  const router = useRouter();
  const pathname = usePathname();
  console.log(pathname,"menuItems");
  return (
    <section className="w-full bg-[#F7F7F8] py-4 md:hidden">
      <div className="w-full max-w-[100%] mx-auto px-0">
        {/* Mobile Menu Bar */}
        <div className="p-0">
          <div className="grid grid-cols-5 items-center justify-between gap-1">
            {menuItems.slice(0, 5).map((item, index) => {
              const Icon = item.icon;
              const isActive = item.href === pathname; // You can make this dynamic based on current route
              
              return (
                <div 
                  key={index} 
                  onClick={() => router.push(item.href)}
                  className={`flex shadow-md flex-col items-center justify-center py-2 px-1 rounded-lg cursor-pointer transition-all duration-200 h-[80px] ${
                    isActive 
                      ? 'bg-purple-200 text-white' 
                      : 'hover:bg-gray-500 bg-white text-[#a259e6]'
                  }`}
                >
                  {Icon && (
                    <Icon 
                      size={18} 
                      className={`mb-1 text-[#a259e6]`} 
                    />
                  )}
                  <span className={`text-xs font-medium text-center leading-tight ${
                    isActive ? 'text-[#a259e6]' : 'text-gray-600'
                  }`}>
                    {item.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
} 
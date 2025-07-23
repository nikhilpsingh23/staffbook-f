'use client';

import React from 'react';
import * as LucideIcons from 'lucide-react';
import { menuItems, inputLabels } from '../../data/subMenu';
import { SITE_CONFIG } from '../../constants/siteconfig';

export default function JobSearchBar() {
  return (
    <section className="w-full mt-12 bg-white py-10 md:py-24 relative">
      <div className="w-full  max-w-[95%] mx-auto relative px-2 md:px-0">
        {/* Floating Menu */}

        <div className="absolute top-[-46px] left-1/2 -translate-x-1/2 w-full max-w-[95%] h-[93px] bg-gradient-to-r from-[#5b5be7] to-[#b14be4] rounded-full shadow-lg flex items-center justify-around px-2 md:px-8 z-10 overflow-x-auto gap-2 md:gap-0">
          {menuItems.map((item, index) => {
            const Icon = (LucideIcons as any)[item.icon];
            return (
              <div key={index} className="flex flex-col items-center text-white text-xs md:text-sm min-w-[50px]">
                <Icon size={22} />
                <span className="mt-1 whitespace-nowrap">{item.label}</span>
              </div>
            );
          })}
        </div>
        {/* Main Input Box */}
        <div className="mt-[70px] h-[190px]  bg-white rounded-[20px] overflow-hidden border border-gray-200 flex flex-col">
          {/* Top Row (Labels) */}
          <div className="grid grid-cols-6 bg-[#F0E5FD] h-[50%]">
            {inputLabels.map((label, index) => (
              <div
                key={index}
                className="flex items-end justify-center px-2 pb-2  text-xs md:text-lg font-semibold text-[#a259e6]"
              >
                {label}
              </div>
            ))}
          </div>

          {/* Bottom Row (Inputs) */}
          <div className="grid grid-cols-6 h-[50%] bg-white">
            {inputLabels.map((_, index) => (
              <div
                key={index}
                className="flex items-center justify-center px-3 border-r last:border-r-0"
              >
                <input
                  type="text"
                  placeholder="Enter preferred Role"
                  className="w-full text-[13px] text-gray-700  px-3 py-2 outline-none focus:ring-2 focus:ring-[#a259e6]"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

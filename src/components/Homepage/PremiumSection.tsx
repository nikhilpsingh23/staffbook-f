'use client';

import { SITE_CONFIG } from '../../constants/siteconfig';
import Image from 'next/image';

export default function PremiumSection() {
  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-[1370px] mx-auto px-4">
        {/* Title & Subtitle */}
        <div className="text-center mb-16">
          <h2 className="text-[48px] font-bold text-[#2d1e5f]">
            {SITE_CONFIG.homepage.premiumTitle.split(' ')[0]} <span className="bg-clip-text bg-gradient-to-r from-[#5B5DE6] to-[#921294]">{SITE_CONFIG.homepage.premiumTitle.split(' ')[1]}</span> {SITE_CONFIG.homepage.premiumTitle.split(' ').slice(2).join(' ')}
          </h2>
          <p className="text-[24px] font-Montserrat text-[#5e4a8b] mt-4">
            {SITE_CONFIG.homepage.premiumSubtitle}
          </p>
        </div>
        {/* Main Content Row */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12">
          {/* Left Side: 3 Cards */}
          <div className="flex flex-col gap-8 w-full lg:w-[738px]">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="w-full h-[184px] bg-gradient-to-r from-[#5b5be7] to-[#b14be4] rounded-2xl px-10 py-8 flex items-center justify-between relative"
              >
                <div className="text-white text-xl font-medium">
                  {SITE_CONFIG.homepage.premiumSubtitle}
                </div>
                <div className="absolute right-10 bottom-4 text-[100px] font-bold text-white/20 select-none">
                  0{item}
                </div>
              </div>
            ))}
          </div>
          {/* Right Side: Image with top-right badge */}
          <div className="relative w-full lg:w-[480px] flex justify-center items-center">
            <Image
              src="/homePage/professional.png"
              alt="Premium Access"
              width={480}
              height={480}
              className="rounded-2xl"
            />
            <div className="absolute top-0 right-0 bg-gradient-to-r from-[#5B5DE6] to-[#921294] text-white px-6 py-2 rounded-bl-2xl font-bold text-lg shadow-lg">
              Premium
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

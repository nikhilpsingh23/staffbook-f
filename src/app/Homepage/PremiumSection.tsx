'use client';

import Image from "next/image";

export default function PremiumSection() {
  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-[1370px] mx-auto px-4">
        {/* Title & Subtitle */}
        <div className="text-center mb-16">
          <h2 className="text-[48px] font-bold text-[#2d1e5f]">
            Unlock <span className="bg-clip-text bg-gradient-to-r from-[#5B5DE6] to-[#921294]">Premium</span> Access
          </h2>
          <p className="text-[24px] font-Montserrat text-[#5e4a8b] mt-4">
            Get exclusive features and enhanced <br /> visibility with our premium membership.
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
                  Get exclusive features and enhanced visibility with our premium membership.
                </div>
                <div className="absolute right-10 bottom-4 text-[100px] font-bold text-white/20 select-none">
                  0{item}
                </div>
              </div>
            ))}
          </div>

          {/* Right Side: Image with top-right badge */}
          <div className="w-full lg:w-[415px] h-[750px] relative mr-2 lg:mr-10">
            {/* Top-Right Corner BG Image */}
            <div className="absolute -top-32 -right-10 z-10">
              <Image
                src="/homePage/crown.png" // Replace with your bg icon (e.g., crown.svg)
                alt="Badge"
                width={250}
                height={250}
              />
            </div>

            {/* Main Image */}
            <Image
              src="/homePage/premium (2).png"
              alt="Premium Preview"
              width={415}
              height={750}
              className=" object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

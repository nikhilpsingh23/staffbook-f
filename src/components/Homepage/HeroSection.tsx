'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { jobCards } from '../../data/jobCards';
import { SITE_CONFIG } from '../../constants/siteconfig';

const Hero = () => {
  const [hovered, setHovered] = useState(true);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (cardRefs.current.length) {
      gsap.fromTo(
        cardRefs.current,
        {
          opacity: 0,
          y: 30,
          scale: 0.9,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.3,
          ease: 'power2.out',
        }
      );
    }
  }, []);

  return (
    <section className="w-full bg-white py-16 md:py-24 relative overflow-hidden">
      <div className="w-full max-w-[1047px] px-4 mx-auto flex flex-col items-center text-center">
        {/* Title */}
        <h1 className="text-[28px] md:text-[48px] mt-8 mb-10 font-semibold font-[poppins] text-[#101022] leading-tight">
          {SITE_CONFIG.homepage.heroTitle.split('with')[0]}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5B5DE6] to-[#921294] font-bold">
            {SITE_CONFIG.homepage.heroHighlight}
          </span>{' '}
          with <br className="hidden md:block" />
          {SITE_CONFIG.homepage.heroSubtitle}
        </h1>
        {/* World Map Image */}
        <Image
          src="/homePage/map.png"
          alt="World Map"
          width={1147}
          height={559}
          className="w-full h-auto"
          priority
        />
        {/* Floating Job Cards */}
        {hovered &&
          jobCards.map((job, index) => (
            <div
              key={index}
              ref={(el) => {
                cardRefs.current[index] = el;
              }}
              className="absolute w-[90vw] md:w-[320px] p-4 rounded-2xl bg-white shadow-xl border border-gray-100 z-10"
              style={{ ...job.position }}
            >
              {/* Company */}
              <div className="text-sm md:text-base font-semibold text-gray-700">
                {job.company}
              </div>
              {/* Role */}
              <div className="text-base md:text-lg font-bold text-black mt-1">
                {job.role}
              </div>
              {/* Tags */}
              <div className="flex gap-2 mt-2 text-xs md:text-sm flex-wrap">
                {job.tags.map((tag, i) => (
                  <span
                    key={i}
                    className={`px-3 py-1 rounded-full text-white font-medium ${
                      tag === 'Design'
                        ? 'bg-[#F97316]'
                        : tag === 'Finance'
                        ? 'bg-[#F59E0B]'
                        : 'bg-[#3B82F6]/40'
                    }`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
      </div>
    </section>
  );
};

export default Hero;

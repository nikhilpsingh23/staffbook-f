'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const ExpertsSection = () => {
  const col1Ref = useRef<HTMLDivElement>(null);
  const col2Ref = useRef<HTMLDivElement>(null);
  const col3Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const loopScroll = (el: HTMLDivElement, direction: 'up' | 'down') => {
      const distance = el.scrollHeight / 2;

      gsap.fromTo(
        el,
        { y: direction === 'up' ? 0 : -distance },
        {
          y: direction === 'up' ? -distance : 0,
          duration: 80,
          repeat: -1,
          ease: 'none',
        }
      );
    };

    if (col1Ref.current) loopScroll(col1Ref.current, 'down');
    if (col2Ref.current) loopScroll(col2Ref.current, 'up');
    if (col3Ref.current) loopScroll(col3Ref.current, 'down');
  }, []);

  const cards = [
    { name: 'Radhika', role: 'Sales Executive at Walmart' },
    { name: 'Ashok Kumar', role: 'Visual Designer at Google' },
    { name: 'Preeti Mohal', role: 'Senior Designer at Notion' },
    { name: 'Rahul Kalki', role: 'Finance Executive at Upwork' },
    { name: 'Naina Khurana', role: 'Senior Designer at Notion' },
  ];

  return (
    <section className="w-full bg-white py-10 px-4">
      <div className="max-w-[1385px] h-auto md:h-[629px] mx-auto rounded-[60px] bg-gradient-to-r from-[#5B5DE6] to-[#921294] flex flex-col md:flex-row overflow-hidden">
        {/* Left Column */}
        <div className="md:w-1/2 w-full flex gap-[10px] overflow-hidden px-2 md:px-0 mt-6 md:mt-0 h-[500px] md:h-auto">
          <div ref={col1Ref} className="flex flex-col gap-[10px]">
            {[...cards, ...cards].map((card, i) => (
              <Card key={`c1-${i}`} {...card} />
            ))}
          </div>
          <div ref={col2Ref} className="flex flex-col gap-[10px]">
            {[...cards, ...cards].map((card, i) => (
              <Card key={`c2-${i}`} {...card} />
            ))}
          </div>
          <div ref={col3Ref} className="flex flex-col gap-[10px]">
            {[...cards, ...cards].map((card, i) => (
              <Card key={`c3-${i}`} {...card} />
            ))}
          </div>
        </div>

        {/* Right Column */}
        <div className="md:w-1/2 w-full text-white relative flex flex-col justify-between py-10 px-4 md:px-12">
          {/* Title */}
          <h2 className="text-[28px] md:text-[48px] font-semibold leading-tight mb-6 md:mb-0">
            Nurture your professional <span className="font-bold">relationships with</span><br />
            industry experts
          </h2>

          {/* Button */}
          <div className="flex md:justify-end">
            <button className="h-[58px] md:h-[68px] w-full md:w-[258px] bg-white text-[#921294] text-base md:text-lg font-semibold rounded-full hover:bg-gray-100 transition">
              Explore Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

const Card = ({ name, role }: { name: string; role: string }) => (
  <div className="w-[180px] md:w-[241px] h-[260px] md:h-[323px] rounded-[10px] relative overflow-hidden shrink-0">
    <Image
      src="/homePage/profile.png"
      alt={name}
      fill
      className="object-cover brightness-[0.6]"
    />
    <div className="absolute bottom-0 w-full p-3 md:p-4 text-white">
      <h3 className="text-[18px] md:text-[23px] font-semibold">{name}</h3>
      <p className="text-sm">{role}</p>
      <div className="flex justify-between items-center mt-3 md:mt-4">
        <IconButton icon="❌" />
        <IconButton icon="🎥" />
        <IconButton icon="✔️" />
      </div>
    </div>
  </div>
);

const IconButton = ({ icon }: { icon: string }) => (
  <button className="bg-white/20 rounded-full w-8 h-8 flex items-center justify-center text-white text-lg">
    {icon}
  </button>
);

export default ExpertsSection;

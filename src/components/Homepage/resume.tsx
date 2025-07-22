'use client';
import Image from 'next/image';
import { useEffect } from 'react';
import gsap from 'gsap';

export default function ResumeSection() {
  useEffect(() => {
    gsap.fromTo(
      '.blur-dot',
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 1.2, delay: 0.2 }
    );
    gsap.from('.resume-center-img', {
      y: 50,
      opacity: 0,
      duration: 1.2,
      delay: 0.3,
      ease: 'power2.out',
    });
  }, []);

  const leftSteps = [
    {
      number: '01',
      title: 'Choose a template',
      desc: 'Pick from professionally designed, ATS-optimized resume templates tailored for every industry.',
      icon: '/homePage/1-r.png',
    },
    {
      number: '02',
      title: 'Fill in your details',
      desc: 'Enter your experience, education, and other info with smart tips and examples.',
      icon: '/homePage/r.png',
    },
  ];

  const rightSteps = [
    {
      number: '03',
      title: 'Get Suggestions',
      desc: 'Improve your resume with keyword and content suggestions that matter.',
      icon: '/homePage/3-r.png',
    },
    {
      number: '04',
      title: 'Download & Apply',
      desc: 'Export your resume in high-quality PDF and start applying confidently.',
      icon: '/homePage/4-r.png',
    },
  ];

  return (
    <section className="relative w-full flex justify-center items-center py-20 bg-white overflow-visible">
      {/* Top Blur Dot */}
      <div className="absolute top-0 left-0 w-[220px] h-[120px] rounded-full blur-[90px] bg-sky-200 opacity-70 blur-dot z-0" />

      {/* Container */}
      <div className="relative z-10 w-[1108px] max-w-full px-4">
        {/* Title */}
        <h2 className="text-[48px] text-[#101022] font-bold text-center mb-4">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-indigo-500">
            ATS-Friendly
          </span>{' '}
          Resume Builder
        </h2>

        {/* Subtitle */}
        <p className="text-[24px] text-center text-gray-600 font-medium mb-10">
          Create a professional, Applicant Tracking System (ATS)-friendly CV <br /> that increases your chances of getting shortlisted.
        </p>

        {/* Step Layout */}
        <div className="flex flex-col md:flex-row items-start justify-center gap-10">
          {/* Left Steps */}
          <div className="flex flex-col space-y-20 w-full md:w-[250px]">
            {leftSteps.map((step, index) => (
              <div key={index} className="flex flex-col items-start text-left">
<div className="flex items-center gap-2 mb-4 w-full justify-start">
                  <span className="text-sm font-semibold text-black">{step.number}</span>
                  <div className="h-px w-full max-w-[120px] bg-black" />
                </div>
                <div className="w-[86px] h-[86px] rounded-[20px]  flex items-center justify-center mb-4">
                  <Image src={step.icon} alt={step.title} width={86} height={86} />
                </div>
                <h4 className="text-lg font-bold text-[#101022] mb-1">{step.title}</h4>
                <p className="text-sm text-gray-600">{step.desc}</p>
              </div>
            ))}
          </div>

          {/* Center Image */}
          <div className="w-full md:w-[322px] flex justify-center items-center my-10 md:my-0">
            <Image
              src="/homePage/ats.png"
              alt="Resume Preview"
              width={322}
              height={371}
              className="resume-center-img"
            />
          </div>

          {/* Right Steps */}
          <div className="flex flex-col space-y-20 w-full md:w-[250px] text-right items-start">
            {rightSteps.map((step, index) => (
              <div key={index} className="flex flex-col items-end text-right">
                <div className="flex items-center gap-2 mb-4 w-full justify-end">
                  <span className="text-sm font-semibold text-black">{step.number}</span>
                  <div className="h-px w-full max-w-[120px] bg-black" />
                </div>
                <div className="w-[86px] h-[86px] rounded-[20px]  flex items-center justify-center mb-4">
                  <Image src={step.icon} alt={step.title} width={86} height={86} />
                </div>
                <h4 className="text-lg font-bold text-[#101022] mb-1">{step.title}</h4>
                <p className="text-sm text-gray-600">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

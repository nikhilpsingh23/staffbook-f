'use client';

import {
  Plus,
  Video,
  Bookmark,
  Building2,
  MapPin,
  BadgeIndianRupee
} from 'lucide-react';
import Image from 'next/image';
import SeeAllButton from './SeeAllButton';
import { featuredJobs } from '../../data/featuredJobs';
import { SITE_CONFIG } from '../../constants/siteconfig';

export default function FeaturedJobsSection() {
  return (
    <section className="w-full bg-[#f7f7fa] py-8 md:py-12">
      <div className="w-full max-w-[95%]  px-2 md:px-6 mx-auto">
        {/* Header */}
        <div className="flex flex-row  w-full  self-center justify-between items-center mb-6">
          <h2 className="text-2xl md:text-[32px] font-bold text-gray-900">{SITE_CONFIG.featuredJobsSection.title}</h2>
          <SeeAllButton>{SITE_CONFIG.featuredJobsSection.seeAll}</SeeAllButton>
        </div>
        {/* Cards Row */}
        <div className="flex gap-6 overflow-x-auto pb-2 hide-scrollbar">
          {featuredJobs.map((job, index) => (
            <div
              key={index}
              className="w-[300px] min-w-[300px] bg-white rounded-[20px] shadow-md border border-gray-200 p-0 flex-shrink-0 flex flex-col"
            >
              {/* Top Bar */}
              <div className="flex justify-between items-center px-4 pt-4 pb-2">
                <div className="flex items-center gap-2">
                  <Image
                    src={job.userImg}
                    alt="Profile"
                    width={32}
                    height={32}
                    className="rounded-full object-cover border-2 border-white shadow"
                  />
                  <div className="text-[13px] leading-tight">
                    <p className="font-semibold text-gray-900">{job.user}</p>
                    <p className="text-[#939393] text-[11px]">{job.time}</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <div className="w-7 h-7 rounded-full bg-[#f3e8ff] flex items-center justify-center">
                    <Plus size={16} className="text-[#a259e6]" />
                  </div>
                  <div className="w-7 h-7 rounded-full bg-[#f3e8ff] flex items-center justify-center">
                    <Video size={16} className="text-[#a259e6]" />
                  </div>
                </div>
              </div>
              {/* Company Image */}
              <div className={`w-full h-[140px] rounded-[16px] mb-3 flex items-center justify-center ${job.companyBg}`}>
                <Image
                  src={job.companyLogo}
                  alt={job.company}
                  width={140}
                  height={70}
                  className="object-contain max-h-[70px]"
                />
              </div>
              {/* Role and Company */}
              <div className="flex justify-between items-center px-4 mb-2">
                <div>
                  <p className="font-bold text-[18px] text-gray-900 leading-5">{job.role}</p>
                  <p className="text-xs text-gray-500 font-semibold">{job.company}</p>
                </div>
                <div className="w-8 h-8 rounded-full bg-[#f3e8ff] flex items-center justify-center">
                  <Bookmark size={18} className="text-[#a259e6]" />
                </div>
              </div>
              {/* Info tags */}
              <div className="text-xs text-gray-500 mb-2 px-4 space-y-[2px]">
                <p className="flex items-center text-[13px] gap-1">
                  <Building2 size={13} className="text-[#939393]" /> {job.workType}
                </p>
                <p className="flex items-center text-[13px] gap-1">
                  <Video size={13} className="text-[#939393]" /> {job.mode}
                </p>
                <p className="flex items-center text-[13px] gap-1">
                  <MapPin size={13} className="text-[#939393]" /> {job.location}
                </p>
              </div>
              {/* Salary and Button */}
              <div className="flex justify-between items-center px-4 pb-4 mt-auto">
                <p className="text-[15px] font-semibold text-[#101022] flex items-center gap-1">
                  <BadgeIndianRupee size={15} /> {job.salary}
                </p>
                <button className="w-[110px] h-[36px] text-sm font-bold rounded-full bg-gradient-to-r from-[#5B5DE6] to-[#921294] text-white shadow-md">
                  Apply Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}

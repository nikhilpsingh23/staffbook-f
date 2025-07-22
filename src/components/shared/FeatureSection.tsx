'use client';

import {
  ArrowRight,
  Plus,
  Video,
  Bookmark,
  Building2,
  MapPin,
  BadgeIndianRupee
} from 'lucide-react';
import Image from 'next/image';
import React from 'react';

export default function FeaturedJobsSection() {
  const jobs = Array.from({ length: 6 });

  return (
    <section className="w-full mx-auto bg-white py-12">
      <div className="w-[1438px] h-[526px] ml-[103px] mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-[32px] font-semibold text-gray-900">Featured Jobs</h2>
          <button className="flex items-center gap-1 text-[#7F56D9] text-[20px] font-medium">
            See All <ArrowRight size={20} />
          </button>
        </div>

        {/* Cards Row */}
        <div className="flex gap-[10px] overflow-hidden">
          {jobs.map((_, index) => (
            <div
              key={index}
              className="w-[245px] h-[434px] bg-white rounded-xl shadow-md border border-gray-200 p-3 flex-shrink-0 flex flex-col"
            >
              {/* Top Bar */}
              <div className="w-full h-[33px] flex justify-between items-center mb-2">
                <div className="flex items-center gap-2">
                  <Image
                    src="/homePage/p.png"
                    alt="Profile"
                    width={33}
                    height={33}
                    className="rounded-full object-cover"
                  />
                  <div className="text-[12px] leading-tight">
                    <p className="font-semibold text-gray-800">Rajeev Tripathi</p>
                    <p className="text-[#939393] text-[10px]">2h ago</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <div className="w-[24px] h-[24px] rounded-full bg-gray-200 flex items-center justify-center">
                    <Plus size={14} className="text-purple-600" />
                  </div>
                  <div className="w-[24px] h-[24px] rounded-full bg-gray-200 flex items-center justify-center">
                    <Video size={14} className="text-purple-600" />
                  </div>
                </div>
              </div>

              {/* Company Image */}
              <div className="w-full h-[203px] bg-gray-100 rounded-lg mb-3 overflow-hidden">
                <Image
                  src="/homePage/job-photo.png"
                  alt="Company"
                  width={245}
                  height={203}
                  className="rounded-lg w-full h-full object-cover"
                />
              </div>

              {/* Role and Company */}
              <div className="flex justify-between items-start mb-2">
                <div>
                  <p className="font-semibold text-[16px] font-Montserrat text-gray-900 leading-4">UI/UX Designer</p>
                  <p className="text-xs text-gray-500">Google</p>
                </div>
                <div className="w-[24px] h-[24px] rounded-full bg-gray-200 flex items-center justify-center">
                  <Bookmark size={14} className="text-purple-600" />
                </div>
              </div>

              {/* Info tags */}
              <div className="text-xs text-gray-500 mb-2 space-y-[2px]">
                <p className="flex items-center text-[14px] font-Montserrat gap-1">
                  <Building2 size={12} className="text-[#939393]" /> Work from office
                </p>
                <p className="flex items-center text-[14px] font-Montserrat gap-1">
                  <Video size={12} className="text-[#939393]" /> Both
                </p>
                <p className="flex items-center text-[14px] font-Montserrat gap-1">
                  <MapPin size={12} className="text-[#939393]" /> Bangalore, IN
                </p>
              </div>

              {/* Salary and Button */}
              <div className="flex justify-between font-Montserrat items-center mt-auto">
                <p className="text-[14px] font-Regular text-[#101022] flex items-center gap-1">
                  <BadgeIndianRupee size={14} /> 20L–25L p.a
                </p>
<button className="w-[103px] h-[29px] text-xs font-medium rounded-full bg-gradient-to-r from-[#5B5DE6] to-[#921294] text-white">
  Apply Now
</button>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

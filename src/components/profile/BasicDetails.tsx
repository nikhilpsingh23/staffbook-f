import React from 'react';
import { Edit2 } from 'lucide-react';
import { basicDetails } from '../../data/profile';
import { SITE_CONFIG } from '../../constants/siteconfig';
import type { BasicDetails as BasicDetailsType } from '../../types/profile';

export default function BasicDetails() {
  const details: BasicDetailsType = basicDetails;
  return (
    <div className="w-full bg-white rounded-2xl shadow p-8 flex flex-col gap-4 relative">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-3xl font-bold text-gray-900">{SITE_CONFIG.basicDetails.section}</h2>
        <div className="w-9 h-9 rounded-full bg-[#f3e8ff] flex items-center justify-center cursor-pointer absolute top-8 right-8">
          <Edit2 size={22} className="text-[#a259e6]" />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-12">
        <div className="flex flex-col gap-4">
          <div>
            <div className="text-gray-400 text-base font-medium mb-1">{SITE_CONFIG.basicDetails.totalExperience}</div>
            <div className="text-lg font-bold text-gray-900">{details.totalExperience}</div>
          </div>
          <div>
            <div className="text-gray-400 text-base font-medium mb-1">{SITE_CONFIG.basicDetails.location}</div>
            <div className="text-lg font-bold text-gray-900">{details.location}</div>
          </div>
          <div>
            <div className="text-gray-400 text-base font-medium mb-1">{SITE_CONFIG.basicDetails.currentSalary}</div>
            <div className="text-lg font-bold text-gray-900">{details.currentSalary}</div>
          </div>
          <div>
            <div className="text-gray-400 text-base font-medium mb-1">{SITE_CONFIG.basicDetails.noticePeriod}</div>
            <div className="text-lg font-bold text-gray-900">{details.noticePeriod}</div>
          </div>
          <div>
            <div className="text-gray-400 text-base font-medium mb-1">{SITE_CONFIG.basicDetails.socialMedia}</div>
            <div className="text-lg font-bold text-gray-900">{details.socialMedia}</div>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div>
            <div className="text-gray-400 text-base font-medium mb-1">{SITE_CONFIG.basicDetails.personalEmail}</div>
            <div className="text-lg font-bold text-gray-900">{details.personalEmail}</div>
          </div>
          <div>
            <div className="text-gray-400 text-base font-medium mb-1">{SITE_CONFIG.basicDetails.workEmail}</div>
            <div className="text-lg font-bold text-gray-900">{details.workEmail}</div>
          </div>
          <div>
            <div className="text-gray-400 text-base font-medium mb-1">{SITE_CONFIG.basicDetails.personalContact}</div>
            <div className="text-lg font-bold text-gray-900">{details.personalContact}</div>
          </div>
          <div>
            <div className="text-gray-400 text-base font-medium mb-1">{SITE_CONFIG.basicDetails.workNoticePeriod}</div>
            <div className="text-lg font-bold text-gray-900">{details.workNoticePeriod}</div>
          </div>
        </div>
      </div>
    </div>
  );
} 
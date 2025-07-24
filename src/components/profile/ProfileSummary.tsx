import React from 'react';
import { Edit2 } from 'lucide-react';
import { profileSummary } from '../../data/profile';
import { SITE_CONFIG } from '../../constants/siteconfig';

export default function ProfileSummary() {
  return (
    <div className="w-full bg-white rounded-2xl shadow p-8 flex flex-col gap-4 relative">
      <div className="flex items-center justify-between mb-2">
        <h2 className="text-2xl font-bold text-gray-900">{SITE_CONFIG.profileSummary.section}</h2>
        <div className="w-9 h-9 rounded-full bg-[#f3e8ff] flex items-center justify-center cursor-pointer absolute top-8 right-8">
          <Edit2 size={22} className="text-[#a259e6]" />
        </div>
      </div>
      <p className="text-base text-gray-700 leading-relaxed">
        {profileSummary}
      </p>
    </div>
  );
} 
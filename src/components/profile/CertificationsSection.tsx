import React from 'react';
import { Plus, Edit2, Award, Calendar } from 'lucide-react';
import { certifications } from '../../data/profile';
import { SITE_CONFIG } from '../../constants/siteconfig';
import type { Certification } from '../../types/profile';

export default function CertificationsSection() {
  return (
    <div className="w-full bg-white rounded-2xl shadow p-8 flex flex-col gap-8 relative">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-3xl font-bold text-gray-900">{SITE_CONFIG.certificationsSection.section}</h2>
        <div className="flex gap-2 absolute top-8 right-8">
          <div className="w-9 h-9 rounded-full bg-[#f3e8ff] flex items-center justify-center cursor-pointer">
            <Plus size={22} className="text-[#a259e6]" />
          </div>
          <div className="w-9 h-9 rounded-full bg-[#f3e8ff] flex items-center justify-center cursor-pointer">
            <Edit2 size={22} className="text-[#a259e6]" />
          </div>
        </div>
      </div>
      {certifications.map((cert: Certification, idx: number) => (
        <div key={cert.name + idx} className="border-b last:border-b-0 pb-8 mb-8 flex flex-col gap-2">
          <div className="text-xl font-bold text-gray-900 leading-tight mb-1">{cert.name}</div>
          <div className="flex items-center gap-2 text-gray-500 text-base mb-1">
            <Award size={18} className="inline-block" />
            <span className="font-medium">{cert.institution}</span>
            <span className="mx-1">•</span>
            <span>{cert.location}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-500 text-base mb-1">
            <Calendar size={16} className="inline-block" />
            <span>{cert.issued}</span>
            <span className="mx-1">•</span>
            <Calendar size={16} className="inline-block" />
            <span>{cert.expires}</span>
          </div>
          <div className="text-gray-400 text-base mb-1">Credential ID: {cert.credentialId}</div>
          <div className="text-base text-gray-700 mt-2 mb-2">{cert.description}</div>
          <div className="font-bold text-base text-gray-900 mb-1">Credential URL</div>
          <a href={`https://${cert.url}`} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline text-base mb-2">{cert.url}</a>
          <div className="font-medium text-base text-gray-900 mb-1">Skills Acquired</div>
          <div className="flex flex-wrap gap-3 mb-2">
            {cert.skills.map((skill) => (
              <span key={skill} className="bg-[#ede6fa] text-[#18181b] px-4 py-2 rounded-full text-base font-medium">
                {skill}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
} 
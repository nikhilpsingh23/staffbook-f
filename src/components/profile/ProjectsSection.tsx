import React from 'react';
import { Plus, Edit2, Calendar } from 'lucide-react';
import { projects } from '../../data/profile';
import { SITE_CONFIG } from '../../constants/siteconfig';
import type { Project } from '../../types/profile';

export default function ProjectsSection() {
  return (
    <div className="w-full bg-white rounded-2xl shadow p-8 flex flex-col gap-8 relative">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-3xl font-bold text-gray-900">{SITE_CONFIG.projectsSection.section}</h2>
        <div className="flex gap-2 absolute top-8 right-8">
          <div className="w-9 h-9 rounded-full bg-[#f3e8ff] flex items-center justify-center cursor-pointer">
            <Plus size={22} className="text-[#a259e6]" />
          </div>
          <div className="w-9 h-9 rounded-full bg-[#f3e8ff] flex items-center justify-center cursor-pointer">
            <Edit2 size={22} className="text-[#a259e6]" />
          </div>
        </div>
      </div>
      {projects.map((proj: Project, idx: number) => (
        <div key={proj.name + idx} className="border-b last:border-b-0 pb-8 mb-8 flex flex-col gap-2">
          <div className="text-2xl font-bold text-gray-900 leading-tight mb-1">{proj.name}</div>
          <div className="flex items-center gap-2 text-gray-500 text-base mb-1">
            <Calendar size={16} className="inline-block" />
            <span>{proj.duration}</span>
            <span className="ml-2 px-3 py-1 rounded-full bg-gray-100 text-gray-700 text-sm font-medium">{proj.role}</span>
          </div>
          <div className="text-base text-gray-700 mt-2 mb-2">{proj.description}</div>
          <div className="font-bold text-base text-gray-900 mb-1">Key Achievements</div>
          <ul className="list-disc ml-6 text-base text-gray-700 mb-2">
            {proj.achievements.map((ach, i) => (
              <li key={ach + i}>{ach}</li>
            ))}
          </ul>
          <div className="font-medium text-base text-gray-900 mb-1">Skills Used</div>
          <div className="flex flex-wrap gap-3 mb-2">
            {proj.skills.map((skill) => (
              <span key={skill} className="bg-[#ede6fa] text-[#18181b] px-4 py-2 rounded-full text-base font-medium">
                {skill}
              </span>
            ))}
          </div>
          <div className="font-medium text-base text-gray-900 mb-1">Softwares Used</div>
          <div className="flex flex-wrap gap-3 mb-2">
            {proj.softwares.map((software) => (
              <span key={software} className="bg-[#ede6fa] text-[#18181b] px-4 py-2 rounded-full text-base font-medium">
                {software}
              </span>
            ))}
          </div>
          <div className="font-bold text-base text-gray-900 mb-1">Project URL</div>
          <a href={`https://${proj.url}`} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline text-base">{proj.url}</a>
        </div>
      ))}
    </div>
  );
} 
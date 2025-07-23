import React from "react";
import Image from "next/image";
import { FiLink, FiMessageCircle, FiBriefcase, FiClipboard, FiDownload, FiEye, FiSearch, FiPhone, FiBookmark, FiEdit2 } from "react-icons/fi";

const cards = [
  { icon: <FiLink size={20} />, title: "Interview Invites", count: 20 },
  { icon: <FiMessageCircle size={20} />, title: "Recruiters message", count: 20 },
  { icon: <FiBriefcase size={20} />, title: "Job responses", count: 20 },
  { icon: <FiClipboard size={20} />, title: "Applied jobs", count: 20 },
  { icon: <FiDownload size={20} />, title: "Resume downloads", count: 20 },
  { icon: <FiEye size={20} />, title: "Profile viewed", count: 20 },
  { icon: <FiSearch size={20} />, title: "See who searched you", count: 20 },
  { icon: <FiPhone size={20} />, title: "Contact viewed", count: 20 },
  { icon: <FiBookmark size={20} />, title: "Profile bookmarked", count: 20 },
];

export default function ProfileSidebar() {
  return (
    <aside className="w-[273px] h-auto flex flex-col items-center pt-6 mt-10">
      {/* Profile Section */}
      <div className="flex flex-col items-center mb-6">
        <div className="relative flex flex-col items-center">
          {/* Gradient Border Circle */}
          <div className="w-[96px] h-[96px] rounded-full bg-gradient-to-tr from-[#5B5BE7] via-[#B14BE4] to-[#5B5BE7] p-[3px] flex items-center justify-center">
            <div className="w-[88px] h-[88px] rounded-full bg-white flex items-center justify-center overflow-hidden">
              <Image
                src="/homePage/profile.png"
                alt="Profile"
                width={84}
                height={84}
                className="object-cover w-[84px] h-[84px] rounded-full"
              />
            </div>
          </div>
          {/* Edit Icon */}
          <div className="absolute top-0 right-0 w-8 h-8 rounded-full bg-white flex items-center justify-center shadow -translate-y-2 translate-x-2">
            <FiEdit2 className="text-[#B14BE4]" size={20} />
          </div>
          {/* Percentage Badge */}
          <div className="absolute left-1/2 -translate-x-1/2 bottom-[-18px] bg-white px-4 py-1 rounded-full border-2 border-[#B14BE4] shadow text-[20px] font-bold text-[#5B5BE7] flex items-center">
            80%
          </div>
        </div>
        <div className="mt-8 text-[16px] font-bold font-Montserrat text-[#5B5BE7]">Riya Goyal</div>
        <div className="text-[14px] font-medium Montserrat text-[#222]">HR at Appsuccessor</div>
        <button className="mt-3 w-[119px] h-[29px] bg-gradient-to-r from-[#5b5be7] to-[#b14be4] text-white text-[14px] font-bold rounded-full shadow flex items-center justify-center">View Profile</button>
      </div>
      {/* Cards Section */}
      <div className="flex flex-col Montserrat gap-3 w-full items-center">
        {cards.map((card, idx) => (
          <div key={card.title} className="w-[237px] h-[73px] bg-[#F3EFFF] rounded-[12px] flex flex-col justify-center px-4 py-2">
            <div className="flex items-center gap-2">
              <span className="text-[#5B5BE7]">{card.icon}</span>
              <span className="text-[14px] font-medium text-[#222]">{card.title}</span>
            </div>
            <div className="flex items-center mt-1 gap-1">
              <span className="text-[20px] font-bold text-[#8B2AE2]">{card.count}</span>
              <span className="w-2 h-2 bg-[#FF4B55] rounded-full inline-block ml-1"></span>
              <span className="text-[#8B2AE2] text-[18px] font-bold ml-auto">&gt;</span>
            </div>
          </div>
        ))}
      </div>
    </aside>
  );
} 
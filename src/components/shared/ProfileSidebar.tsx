import React from "react";
import Image from "next/image";
import {
  FiLink,
  FiMessageCircle,
  FiBriefcase,
  FiClipboard,
  FiDownload,
  FiEye,
  FiSearch,
  FiPhone,
  FiBookmark,
  FiEdit2,
} from "react-icons/fi";

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
    <aside className="w-[20.0625rem] fixed h-full md:h-[150vh] flex flex-col items-center pt-[1.5rem] mt-[3.75rem]">
      {/* Profile Section - Fixed at top */}
      <div className="flex flex-col items-center mb-[1.5rem] flex-shrink-0">
        <div className="relative flex flex-col items-center">
          {/* Gradient Border Circle */}
          <div className="w-[6rem] h-[6rem] rounded-full bg-gradient-to-tr from-[#5B5BE7] via-[#B14BE4] to-[#5B5BE7] p-[0.1875rem] flex items-center justify-center">
            <div className="w-[5.5rem] h-[5.5rem] rounded-full bg-white flex items-center justify-center overflow-hidden">
              <Image
                src="/homePage/profile.png"
                alt="Profile"
                width={5.25 * 16}
                height={5.25 * 16}
                className="object-cover w-[5.25rem] h-[5.25rem] rounded-full"
              />
            </div>
          </div>
          {/* Edit Icon */}
          <div className="absolute top-0 right-0 w-[2rem] h-[2rem] rounded-full bg-white flex items-center justify-center shadow -translate-y-[0.5rem] translate-x-[0.5rem]">
            <FiEdit2 className="text-[#B14BE4]" size={20} />
          </div>
          {/* Percentage Badge */}
          <div className="absolute left-1/2 -translate-x-1/2 bottom-[-1.125rem] bg-white px-[1rem] py-[0.25rem] rounded-full border-2 border-[#B14BE4] shadow text-[1.25rem] font-bold text-[#5B5BE7] flex items-center">
            80%
          </div>
        </div>

        <div className="mt-[2rem] text-[1rem] font-bold font-Montserrat text-[#5B5BE7]">
          Riya Goyal
        </div>
        <div className="text-[0.875rem] font-medium font-Montserrat text-[#222]">
          HR at Appsuccessor
        </div>
        <button onClick={()=>{}} className="mt-[0.75rem] w-[7.4375rem] h-[1.8125rem] bg-gradient-to-r from-[#5b5be7] to-[#b14be4] text-white text-[0.875rem] font-bold rounded-full shadow flex items-center justify-center">
          View Profile
        </button>
      </div>

      {/* Cards Section - Scrollable */}
      <div className="flex-1  h-full overflow-y-auto w-full px-4 pb-16">
        <div className="flex flex-col font-Montserrat gap-[0.75rem] w-full items-center">
          {cards.map((card,index) => (
            <div
              key={index}
              className="w-[14.8125rem] h-[4.5625rem] bg-[#F3EFFF] rounded-[0.75rem] flex flex-col justify-center px-[1rem] py-[0.5rem]"
            >
              <div className="flex items-center gap-[0.5rem]">
                <span className="text-[#5B5BE7]">{card.icon}</span>
                <span className="text-[0.875rem] font-medium text-[#222]">{card.title}</span>
              </div>
              <div className="flex items-center mt-[0.25rem] gap-[0.25rem]">
                <span className="text-[1.25rem] font-bold text-[#8B2AE2]">{card.count}</span>
                <span className="w-[0.5rem] h-[0.5rem] bg-[#FF4B55] rounded-full inline-block ml-[0.25rem]"></span>
                <span className="text-[#8B2AE2] text-[1.125rem] font-bold ml-auto">
                  &gt;
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
}

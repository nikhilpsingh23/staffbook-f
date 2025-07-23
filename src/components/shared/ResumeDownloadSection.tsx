import React from "react";

const resumes = [
  {
    name: "Ashish Malhotra",
    role: "Figma Designer",
    distance: "3.1 Km",
    experience: "6 Yrs",
    img: "/homePage/profile.png",
  },
  {
    name: "Ashish Malhotra",
    role: "Figma Designer",
    distance: "3.1 Km",
    experience: "6 Yrs",
    img: "/homePage/profile.png",
  },
  {
    name: "Ashish Malhotra",
    role: "Figma Designer",
    distance: "3.1 Km",
    experience: "6 Yrs",
    img: "/homePage/profile.png",
  },
  {
    name: "Ashish Malhotra",
    role: "Figma Designer",
    distance: "3.1 Km",
    experience: "6 Yrs",
    img: "/homePage/profile.png",
  },
];

const ResumeDownloadSection = () => {
  return (
<section className="w-full flex justify-center py-10 bg-white mt-6 mb-20 sm:mt-12 sm:mb-16 md:mt-16 md:mb-20 lg:mt-0 lg:mb-0">

      <div className="w-full max-w-[1140px]  px-4 md:px-6 lg:px-0">
        <div className="flex flex-wrap justify-center  gap-6 md:gap-8">
          {resumes.map((resume, idx) => (
            <div
              key={idx}
              className="bg-gradient-to-b from-[#fff] to-[#f7f7fa] rounded-[20px] shadow-md flex flex-col items-center pt-[40px] relative overflow-visible w-full sm:w-[48%] lg:w-[22%] h-[270px]"
            >
              {/* Profile with Gradient Ring */}
              <div className="absolute -top-[40px] left-1/2 -translate-x-1/2 flex flex-col items-center">
                <div className="relative w-[116px] h-[116px] flex items-center justify-center">
                  <svg className="absolute top-0 left-0" width="116" height="116" viewBox="0 0 116 116" fill="none">
                    <path d="M8 58a50 50 0 0 1 100 0" stroke="url(#grad)" strokeWidth="8" fill="none" />
                    <defs>
                      <linearGradient id="grad" x1="8" y1="8" x2="108" y2="8" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#B983FF" />
                        <stop offset="1" stopColor="#7F37C9" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <div className="w-[92px] h-[92px] rounded-full bg-white flex items-center justify-center z-10">
                    <img
                      src={resume.img}
                      alt={resume.name}
                      className="w-[84px] h-[84px] rounded-full object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Info Section */}
              <div className="mt-[60px] flex flex-col items-center px-3 text-center space-y-1">
                <span className="text-base font-bold text-[#7F37C9]">{resume.name}</span>
                <span className="text-sm font-medium text-[#222]">{resume.role}</span>
                <span className="text-sm font-medium text-[#8B8B8B] mt-2">Distance: {resume.distance}</span>
                <span className="text-sm font-medium text-[#8B8B8B]">Experience: {resume.experience}</span>
              </div>

              {/* Button */}
              <button className="absolute left-1/2 -translate-x-1/2 bottom-[-20px] w-[200px] h-[40px] bg-gradient-to-r from-[#5B5DE6] to-[#921294] text-white rounded-full text-sm font-semibold shadow hover:scale-105 transition z-10">
                Download Resume
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResumeDownloadSection;

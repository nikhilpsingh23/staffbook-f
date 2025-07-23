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
    <section className="w-full flex justify-center py-8 bg-white">
      <div className="w-full max-w-[71.25rem] mt-10 px-2 sm:px-4 md:px-0">
        <div className="w-full max-w-[68.625rem] mx-auto flex flex-wrap justify-center md:gap-[3.125rem] gap-4">
          {resumes.map((resume, idx) => (
            <div
              key={idx}
              className="bg-gradient-to-b from-[#fff] to-[#f7f7fa] rounded-[1.25rem] shadow flex flex-col items-center pt-[2.5rem] relative overflow-visible mb-6 w-[14.0625rem] h-[16.875rem] mx-auto"
            >
              {/* Profile with 180-degree gradient border using SVG */}
              <div className="absolute -top-[2.5rem] left-1/2 -translate-x-1/2 flex flex-col items-center">
                <div className="relative w-[7.25rem] h-[7.25rem] flex items-center justify-center">
                  {/* SVG for top 180-degree gradient border */}
                  <svg className="absolute top-0 left-0" width="116" height="116" viewBox="0 0 116 116" fill="none" xmlns="http://www.w3.org/2000/svg" style={{zIndex:2}}>
                    <path d="M8 58a50 50 0 0 1 100 0" stroke="url(#grad)" strokeWidth="8" fill="none" />
                    <defs>
                      <linearGradient id="grad" x1="8" y1="8" x2="108" y2="8" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#B983FF" />
                        <stop offset="1" stopColor="#7F37C9" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <div className="w-[5.75rem] h-[5.75rem] rounded-full bg-white flex items-center justify-center relative z-10">
                    <img
                      src={resume.img}
                      alt={resume.name}
                      className="w-[5.25rem] h-[5.25rem] rounded-full object-cover"
                    />
                  </div>
                </div>
              </div>
              <div className="mt-[4.5rem] flex flex-col items-center w-full pb-[2.5rem]">
                <span className="text-[1rem] font-bold text-[#7F37C9] font-Montserrat">{resume.name}</span>
                <span className="text-[0.875rem] font-medium text-[#222] font-Montserrat mt-1">{resume.role}</span>
                <span className="text-[0.875rem] font-medium text-[#8B8B8B] font-Montserrat mt-3">Distance: {resume.distance}</span>
                <span className="text-[0.875rem] font-medium text-[#8B8B8B] font-Montserrat">Experience: {resume.experience}</span>
              </div>
              {/* Button half inside, half outside */}
              <button className="absolute left-1/2 -translate-x-1/2 bottom-[-1.21875rem] w-[12.5rem] h-[2.4375rem] bg-gradient-to-r from-[#5B5DE6] to-[#921294] text-white rounded-full flex items-center justify-center gap-2 text-[1rem] font-semibold font-Montserrat shadow-lg hover:scale-105 transition z-10 cursor-pointer">
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
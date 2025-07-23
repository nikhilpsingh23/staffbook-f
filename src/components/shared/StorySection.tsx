import React from "react";

const profiles = [
  {
    name: "Your Story",
    img: "/homePage/profile.png", 
    isYourStory: true,
  },
  {
    name: "Rajeev Tripathi",
    img: "/homePage/profile.png",
  },
  {
    name: "Anushka Singh",
    img: "/homePage/profile.png",
  },
  {
    name: "Ashish Soni",
    img: "/homePage/profile.png",
  },
  {
    name: "Preeti Goyal",
    img: "/homePage/profile.png",
  },
  {
    name: "Anu Kataria",
    img: "/homePage/profile.png",
  },
  {
    name: "Raghu Rajwanshi",
    img: "/homePage/profile.png",
  },
  {
    name: "Deepshikha Mittal",
    img: "/homePage/profile.png",
  },
];

const StorySection = () => {
  return (
    <section className="w-full bg-white flex justify-center relative">
      {/* Mobile-only gradient background */}
      <div className="absolute inset-0 bg-gradient-to-tr from-purple-200 to-indigo-200 z-0 block sm:hidden" />
      <div className="relative w-full max-w-[1140px] z-10">
        <div className="w-full h-[100px] sm:h-[150px] md:h-[200px] mt-8 sm:mt-12 md:mt-14 flex items-center overflow-x-auto scrollbar-hide px-2 space-x-4 sm:space-x-6">
          {profiles.map((profile, idx) => (
            <div key={profile.name} className="flex flex-col items-center min-w-[72px] sm:min-w-[100px] md:min-w-[132px]">
              <div className={`relative w-[72px] h-[72px] sm:w-[100px] sm:h-[100px] md:w-[132px] md:h-[132px] rounded-full flex items-center justify-center ${profile.isYourStory ? "bg-gradient-to-tr from-purple-500 to-indigo-400" : "bg-gradient-to-tr from-gray-300 to-gray-200"} p-[2px] sm:p-[3px] md:p-[4px]`}>
                <div className="w-full h-full bg-white rounded-full flex items-center justify-center overflow-hidden">
                  <img
                    src={profile.img}
                    alt={profile.name}
                    className="w-[64px] h-[64px] sm:w-[88px] sm:h-[88px] md:w-[124px] md:h-[124px] object-cover rounded-full"
                  />
                </div>
                {/* Plus icon for 'Your Story' */}
                {profile.isYourStory && (
                  <span className="absolute bottom-1 right-1 sm:bottom-2 sm:right-2 w-5 h-5 sm:w-7 sm:h-7 bg-white rounded-full flex items-center justify-center border-2 border-purple-500">
                    <svg width="16" height="16" fill="none" viewBox="0 0 20 20">
                      <circle cx="10" cy="10" r="10" fill="#7C3AED" />
                      <path d="M10 6v8M6 10h8" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  </span>
                )}
                {/* Gradient border for followers */}
                {!profile.isYourStory && (
                  <span className="absolute inset-0 rounded-full p-[1px] sm:p-[2px] md:p-[2px] bg-gradient-to-tr from-purple-500 to-indigo-400 pointer-events-none" style={{zIndex: -1}}></span>
                )}
              </div>
              <span className="mt-2 sm:mt-3 text-center text-gray-500 text-xs sm:text-sm md:text-[16px] font-medium w-[72px] sm:w-[100px] md:w-[132px] truncate">
                {profile.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StorySection; 
import React from "react";

const profiles = [
  { name: "Your Story", img: "/homePage/profile.png", isYourStory: true },
  { name: "Rajeev Tripathi", img: "/homePage/profile.png" },
  { name: "Anushka Singh", img: "/homePage/profile.png" },
  { name: "Ashish Soni", img: "/homePage/profile.png" },
  { name: "Preeti Goyal", img: "/homePage/profile.png" },
  { name: "Anu Kataria", img: "/homePage/profile.png" },
  { name: "Raghu Rajwanshi", img: "/homePage/profile.png" },
  { name: "Deepshikha Mittal", img: "/homePage/profile.png" },
 
  // { name: "Rajeev Tripathi", img: "/homePage/profile.png" },
 
];

const StorySection = () => {
  return (
    <section className="w-full bg-white flex justify-center relative">
      {/* Mobile-only gradient background */}
      <div className="absolute inset-0 bg-gradient-to-tr from-[#5B5DE6] to-[#921294] z-5 block sm:hidden" />

      <div className="relative w-full max-w-full z-10 mt-[0.5rem]">
        <div
          className="w-full h-[6.25rem] sm:h-[9.375rem] md:h-[12.5rem] mt-[2rem] sm:mt-[3rem] md:mt-[3.5rem] flex items-center overflow-x-auto px-[0.5rem] space-x-[1rem] sm:space-x-[1.5rem] scrollbar-thin scrollbar-thumb-[var(--color-primary)] "
          style={{
            WebkitOverflowScrolling: "touch",
            overflowX: "auto",
            overflowY: "hidden",
            scrollbarWidth: "thin",
            msOverflowStyle: "auto", // for IE and Edge
          }}
          tabIndex={0} // Make div focusable for keyboard/scroll
        >
          {profiles.map((profile) => (
            <div
              key={profile.name}
              className="flex flex-col items-center min-w-[4.5rem] sm:min-w-[6.25rem] md:min-w-[8.25rem] flex-shrink-0 select-none"
              tabIndex={-1}
              style={{ userSelect: "none" }}
              draggable={false}
            >
              <div
                className={`relative w-[4.5rem] h-[4.5rem] sm:w-[6.25rem] sm:h-[6.25rem] md:w-[8.25rem] md:h-[8.25rem] rounded-full flex items-center justify-center ${
                  profile.isYourStory
                    ? "bg-gradient-to-tr from-purple-500 to-indigo-400"
                    : "bg-gradient-to-tr from-gray-300 to-gray-200"
                } p-[0.125rem] sm:p-[0.1875rem] md:p-[0.25rem]`}
                style={{ userSelect: "none" }}
                tabIndex={-1}
                draggable={false}
              >
                <div className="w-full h-full bg-white rounded-full flex items-center justify-center overflow-hidden" style={{ userSelect: "none" }}>
                  <img
                    src={profile.img}
                    alt={profile.name}
                    className="w-[4rem] h-[4rem] sm:w-[5.5rem] sm:h-[5.5rem] md:w-[7.75rem] md:h-[7.75rem] object-cover rounded-full pointer-events-none select-none"
                    draggable={false}
                    style={{ userSelect: "none", pointerEvents: "none" }}
                  />
                </div>

                {/* Always visible Plus icon for 'Your Story' */}
                {profile.isYourStory && (
                  <span
                    className={`
                      absolute bottom-[0.25rem] right-[0.25rem] 
                      sm:bottom-[0.5rem] sm:right-[0.5rem] 
                      w-[1.25rem] h-[1.25rem] sm:w-[1.75rem] sm:h-[1.75rem] 
                      rounded-full flex items-center justify-center 
                      bg-white
                      border
                      border-white sm:border-purple-500
                    `}
                  >
                    <svg
                      width="16"
                      height="16"
                      fill="none"
                      viewBox="0 0 20 20"
                    >
                      <circle cx="10" cy="10" r="10" fill="#7C3AED" />
                      <path
                        d="M10 6v8M6 10h8"
                        stroke="#fff"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>
                )}

                {/* Gradient border for followers */}
                {!profile.isYourStory && (
                  <span
                    className="absolute inset-0 rounded-full p-[0.0625rem] sm:p-[0.125rem] md:p-[0.125rem] bg-gradient-to-tr from-purple-500 to-indigo-400 pointer-events-none"
                    style={{ zIndex: -1 }}
                  />
                )}
              </div>

              {/* Profile name */}
              <span
                className={`
                  mt-[0.5rem] sm:mt-[0.75rem] text-center 
                  text-[0.75rem] sm:text-[0.875rem] md:text-[1rem] font-medium 
                  w-[4.5rem] sm:w-[6.25rem] md:w-[8.25rem] truncate 
                  ${profile.isYourStory ? "text-white sm:text-gray-500" : "text-white sm:text-gray-500"}
                `}
                style={{ userSelect: "none" }}
                tabIndex={-1}
              >
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

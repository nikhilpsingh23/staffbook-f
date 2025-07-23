import React from "react";

const PostJobSection = () => {
  return (
    <div className="w-full mt-0 px-4 md:px-6 lg:px-0 max-w-[1140px] mx-auto flex flex-col items-center">
      {/* Main content area with background image and faded corners */}
      <div
        className="relative w-full max-w-[836px] h-[320px] sm:h-[360px] md:h-[400px] lg:h-[432px] rounded-[24px] sm:rounded-[32px] lg:rounded-[40px] overflow-hidden flex items-end"
        style={{
          backgroundImage: 'url("/homePage/post-job-cover.png")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay for faded corners */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="w-full h-full bg-gradient-to-br from-white/80 via-white/50 to-white/80 rounded-[24px] sm:rounded-[32px] lg:rounded-[40px]" />
        </div>

        {/* Button overlay at the bottom */}
        <div className="absolute bottom-0 left-0 w-full flex justify-center px-2 sm:px-4">
          <div className="w-full max-w-[836px] h-[100px] sm:h-[110px] md:h-[122px] bg-gradient-to-r from-orange-500 to-orange-400 rounded-[40px] sm:rounded-[52px] lg:rounded-[62px] flex flex-col sm:flex-row items-center justify-between px-4 sm:px-8 gap-3">
            {/* Left side text */}
            <div className="text-center sm:text-left">
              <p className="text-xs sm:text-sm text-white font-medium mb-1">
                New To Staff book?
              </p>
              <p className="text-lg sm:text-xl md:text-2xl text-white font-bold leading-snug">
                Post a standard job for free
              </p>
            </div>

            {/* Right side button */}
            <button className="w-full sm:w-[200px] md:w-[240px] h-[52px] md:h-[62px] bg-white text-orange-500 font-semibold rounded-full shadow-md text-sm md:text-lg transition hover:bg-orange-50">
              Post a free job
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostJobSection;

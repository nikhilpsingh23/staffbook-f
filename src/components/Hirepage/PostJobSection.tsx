import React from "react";

const PostJobSection = () => {
  return (
    <div className="w-[1140px] mt-o mx-auto flex flex-col items-center">
      {/* Main content area with background image and faded corners */}
      <div
        className="relative w-[836px] h-[432px] rounded-[40px] overflow-hidden flex items-end"
        // Use public asset path from root
        style={{
          backgroundImage: 'url("/homePage/post-job-cover.png")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay for faded corners */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="w-full h-full bg-gradient-to-br from-white/70 via-white/50 to-white/70 rounded-[32px]" />
        </div>
        {/* Button overlay at the bottom */}
        <div className="absolute bottom-0 left-0 w-full flex justify-center">
          <div className="w-[836px] h-[122px] bg-gradient-to-r from-orange-500 to-orange-400 rounded-[62px] flex items-center px-10 justify-between">
            {/* Left side text */}
            <div className="flex flex-col text-white">
              <span className="text-xs font-medium mb-1">New To Staff book?</span>
              <span className="text-2xl font-bold leading-tight">Post a standard job for free</span>
            </div>
            {/* Right side button */}
            <button className="w-[240px] h-[62px] bg-white text-orange-500 font-semibold rounded-[31px] shadow-md text-lg transition hover:bg-orange-50">
              Post a free job
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostJobSection; 
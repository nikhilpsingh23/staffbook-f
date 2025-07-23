import React from "react";

interface TwoColumnLayoutProps {
  left: React.ReactNode;
  right: React.ReactNode;
}

export default function TwoColumnLayout({ left, right }: TwoColumnLayoutProps) {
  return (
    <div className="w-full mx-auto bg-[#F7F7F8] min-h-screen flex flex-col gap-4 md:flex-row">
      {/* Left Side */}
      <aside className="w-[273px] mx-auto flex-shrink-0 bg-white md:rounded-r-2xl shadow md:mt-8 md:mb-8 md:h-[calc(100vh-64px)]">
        {left}
      </aside>
      {/* Right Side */} 
      <main className="w-full mx-auto max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-4xl xl:max-w-[1140px] flex flex-col md:flex-col flex-grow md:mt-8 md:mb-8 px-2 sm:px-4 md:px-0">
        {right}
      </main>
    </div>
  );
} 
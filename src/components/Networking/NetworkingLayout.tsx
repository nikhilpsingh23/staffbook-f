'use client'
import React from 'react';
import Networking from './Networking';
import NetworkingSidebar from './NetworkingSidebar';
import NetworkingRightSidebar from './NetworkingRightSidebar';

const NetworkingLayout: React.FC = () => {
  return (
    <div className="min-h-screen w-full bg-gray-100">
      <div className="max-w-full">
        <div className="grid grid-cols-1 lg:grid-cols-9">
          {/* Left Sidebar */}
          {/* <div className="lg:col-span-3">
            <NetworkingSidebar />
          </div> */}
          
          {/* Main Content */}
          <div className="lg:col-span-6 ">
            <Networking />
          </div>
          
          {/* Right Sidebar */}
          <div className="lg:col-span-2 hidden md:block">
            <NetworkingRightSidebar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NetworkingLayout; 
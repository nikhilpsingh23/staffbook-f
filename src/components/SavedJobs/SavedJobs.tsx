'use client'
import React, { useState, useEffect, useRef } from 'react';
import { savedJobs } from '../../data/savedJobs';
import { SITE_CONFIG } from '../../constants/siteconfig';
import { FiFilter, FiUser, FiCalendar, FiBriefcase, FiClock, FiX, FiEye } from 'react-icons/fi';
import Image from 'next/image';

interface SavedJobCardProps {
  job: {
    company: string;
    logo: string;
    role: string;
    location: string;
    workMode: string;
    experience: string;
    postedTime: string;
  };
  showViewButton?: boolean;
}

const SavedJobCard: React.FC<SavedJobCardProps> = ({ job, showViewButton = true }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-3 sm:p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4">
      <div className="flex items-start sm:items-center gap-3 sm:gap-4 flex-1 min-w-0">
        {/* Company Logo */}
        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
          <span className="text-white font-bold text-sm sm:text-lg">S</span>
        </div>
        
        {/* Job Details */}
        <div className="flex-1 min-w-0">
          <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 mb-1">
            <h3 className="font-semibold text-gray-900 text-base sm:text-lg truncate">{job.role}</h3>
            <div className="hidden sm:flex items-center gap-2">
              <span className="text-gray-400">•</span>
              <span className="text-gray-700">{job.company}</span>
            </div>
            <span className="text-gray-700 sm:hidden text-sm">{job.company}</span>
          </div>
          
          <p className="text-gray-600 text-xs sm:text-sm mb-2 line-clamp-2 sm:line-clamp-1">
            {job.location} | {job.workMode} | {job.experience}
          </p>
          
          <div className="flex items-center gap-1 text-gray-400 text-xs">
            <FiCalendar className="w-3 h-3 flex-shrink-0" />
            <span>Posted {job.postedTime}</span>
          </div>
        </div>
      </div>
      
      {/* Action Buttons */}
      <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
        <button className="text-gray-600 hover:text-gray-800 text-xs sm:text-sm px-2 py-1 rounded hover:bg-gray-100 transition-colors">
          Remove
        </button>
        {showViewButton && (
          <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-3 py-2 sm:px-4 sm:py-2 rounded-lg text-xs sm:text-sm font-medium hover:from-purple-700 hover:to-blue-700 transition-all whitespace-nowrap">
            View job Description
          </button>
        )}
      </div>
    </div>
  );
};

const SavedJobs: React.FC = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState('Job role');
  const filterRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (filterRef.current && !filterRef.current.contains(event.target as Node)) {
        setIsFilterOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const filterOptions = [
    { label: 'Job role', icon: FiUser },
    { label: 'Posted date', icon: FiCalendar },
    { label: 'Work mode', icon: FiBriefcase },
    { label: 'Job type', icon: FiClock },
  ];

  const savedJobsData = savedJobs;

  return (
    <div className="w-full">
      {/* Header Section */}
      <div className="mb-4 sm:mb-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 sm:gap-6">
          <div className="flex-1 min-w-0">
            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-1">
              {SITE_CONFIG.savedJobs.title}
            </h1>
            <p className="text-gray-600 text-sm sm:text-base">
              View & manage your saved jobs
            </p>
          </div>
          
          {/* Filter Dropdown */}
          <div className="relative flex-shrink-0" ref={filterRef}>
            <button
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className="flex items-center gap-2 bg-white border border-gray-200 rounded-lg px-3 py-2 sm:px-4 sm:py-2 hover:bg-gray-50 transition-colors w-full sm:w-auto"
            >
              <FiFilter className="w-4 h-4 text-gray-600 flex-shrink-0" />
              <span className="text-gray-700 text-sm sm:text-base truncate">{selectedFilter}</span>
            </button>
            
            {isFilterOpen && (
              <div className="absolute right-0 top-full mt-2 bg-white border border-gray-200 rounded-lg shadow-lg z-10 min-w-[180px] sm:min-w-[200px] w-full sm:w-auto">
                {filterOptions.map((option) => {
                  const IconComponent = option.icon;
                  return (
                    <button
                      key={option.label}
                      onClick={() => {
                        setSelectedFilter(option.label);
                        setIsFilterOpen(false);
                      }}
                      className="w-full flex items-center gap-3 px-3 py-2 sm:px-4 sm:py-3 text-left hover:bg-gray-50 transition-colors first:rounded-t-lg last:rounded-b-lg text-sm sm:text-base"
                    >
                      <IconComponent className="w-4 h-4 text-gray-600 flex-shrink-0" />
                      <span className="text-gray-700 truncate">{option.label}</span>
                    </button>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Jobs List */}
      <div className="space-y-3 sm:space-y-4">
        {savedJobsData.map((job, index) => (
          <SavedJobCard 
            key={index} 
            job={job} 
            showViewButton={index !== 0} // First card doesn't show view button
          />
        ))}
      </div>

      {/* Empty State */}
      {savedJobsData.length === 0 && (
        <div className="text-center py-8 sm:py-12">
          <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <FiEye className="w-10 h-10 sm:w-12 sm:h-12 text-gray-400" />
          </div>
          <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
            {SITE_CONFIG.savedJobs.emptyState.title}
          </h3>
          <p className="text-gray-600 mb-6 max-w-md mx-auto text-sm sm:text-base px-4">
            {SITE_CONFIG.savedJobs.emptyState.subtitle}
          </p>
          <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all text-sm sm:text-base">
            {SITE_CONFIG.savedJobs.emptyState.buttonText}
          </button>
        </div>
      )}
    </div>
  );
};

export default SavedJobs; 
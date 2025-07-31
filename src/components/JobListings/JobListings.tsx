'use client';

import React, { useState, useEffect } from 'react';
import { ChevronDown, ChevronRight, ChevronLeft } from 'lucide-react';
import { jobListings } from '../../data/jobListings';
import { jobFilters } from '../../data/jobFilters';
import JobCard from '../shared/JobCard';
import FilterPanel from '../shared/FilterPanel';
import { JobListing } from '../../data/jobListings';
import JobSearchCard from '../shared/JobSearchCard';

export default function JobListings() {
  const [jobs, setJobs] = useState<JobListing[]>(jobListings);
  const [currentPage, setCurrentPage] = useState(1);
  const [jobsPerPage, setJobsPerPage] = useState(8);
  const [sortBy, setSortBy] = useState('Default');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [activeFilters, setActiveFilters] = useState<Record<string, any>>({});

  const totalJobs = jobs.length;
  const totalPages = Math.ceil(totalJobs / jobsPerPage);
  const startIndex = (currentPage - 1) * jobsPerPage;
  const endIndex = startIndex + jobsPerPage;
  const currentJobs = jobs.slice(startIndex, endIndex);

  const handleFilterChange = (filterValue: string, value: any) => {
    setActiveFilters(prev => ({ ...prev, [filterValue]: value }));
    // In a real app, you would filter the jobs based on the active filters
    console.log('Filter changed:', filterValue, value);
  };

  const handleApplyJob = (id: string) => {
    console.log('Apply job:', id);
  };

  const handleViewJob = (id: string) => {
    console.log('View job:', id);
  };

  const handleBookmarkJob = (id: string) => {
    setJobs(prev => prev.map(job => 
      job.id === id ? { ...job, isBookmarked: !job.isBookmarked } : job
    ));
  };

  const handleChatWithRecruiter = (id: string) => {
    console.log('Chat with recruiter:', id);
  };

  const sortOptions = [
    { label: 'Sort By (Default)', value: 'default' },
    { label: 'Date Posted', value: 'date' },
    { label: 'Salary', value: 'salary' },
    { label: 'Company', value: 'company' }
  ];

  const perPageOptions = [4, 8, 12, 16];

  return (
    <div className="min-h-screen mt-16 bg-[#F7F7F8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Mobile Filter Toggle */}
        <div className="lg:hidden mb-6">
          <button
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            className="w-full flex items-center justify-between px-4 py-3 bg-white border border-gray-200 rounded-lg"
          >
            <span className="text-gray-700 font-medium">Filters</span>
            <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform ${isFilterOpen ? 'rotate-180' : ''}`} />
          </button>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filter Panel */}
          <div className={`lg:w-80 ${isFilterOpen ? 'block' : 'hidden'} lg:block`}>
            <FilterPanel 
              filters={jobFilters}
              onFilterChange={handleFilterChange}
            />
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {/* Header with results and sorting */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="text-sm text-gray-600">
                  Showing {startIndex + 1}-{Math.min(endIndex, totalJobs)} of {totalJobs} results
                </div>
                
                <div className="flex flex-row sm:flex-row gap-4">
                  {/* Sort Dropdown */}
                  <div className="relative">
                    <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                      <span className="text-gray-700">{sortBy}</span>
                      <ChevronDown className="w-4 h-4 text-gray-400" />
                    </button>
                  </div>
                  
                  {/* Per Page Dropdown */}
                  <div className="relative">
                    <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                      <span className="text-gray-700">{jobsPerPage} Per Page</span>
                      <ChevronDown className="w-4 h-4 text-gray-400" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Job Cards Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {currentJobs.map((job) => (
                <JobSearchCard
                  key={job.id}
                  job={job}
                  onApply={handleApplyJob}
                  onView={handleViewJob}
                  onBookmark={handleBookmarkJob}
                  onChat={handleChatWithRecruiter}
                />
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center mt-8">
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                    disabled={currentPage === 1}
                    className="p-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <button
                      key={page}
                      onClick={() => setCurrentPage(page)}
                      className={`px-3 py-2 rounded-lg transition-colors ${
                        currentPage === page
                          ? 'bg-orange-500 text-white'
                          : 'border border-gray-200 hover:bg-gray-50'
                      }`}
                    >
                      {page}
                    </button>
                  ))}
                  
                  <button
                    onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                    disabled={currentPage === totalPages}
                    className="p-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
} 
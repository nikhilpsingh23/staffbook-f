'use client';

import React from 'react';
import { MapPin, Calendar, DollarSign, MessageCircle, Bookmark, ChevronRight } from 'lucide-react';
import { JobListing } from '../../data/jobListings';
import GradientButton from './GradientButton';

interface JobCardProps {
  job: JobListing;
  onApply: (id: string) => void;
  onView: (id: string) => void;
  onBookmark: (id: string) => void;
  onChat: (id: string) => void;
}

export default function JobSearchCard({ job, onApply, onView, onBookmark, onChat }: JobCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
      <div className="p-6">
        {/* Header with company logo and bookmark */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-4">
            {/* Company Logo */}
            <div className="w-16 h-16 bg-purple-600 rounded-lg flex items-center justify-center">
              <ChevronRight className="w-8 h-8 text-white" />
            </div>
            
            {/* Company and Job Info */}
            <div>
              <h3 className="font-semibold text-gray-900 text-lg mb-1">{job.company}</h3>
              <h4 className="font-medium text-gray-700 text-base">{job.title}</h4>
            </div>
          </div>
          
          {/* Bookmark Icon */}
          <button 
            onClick={() => onBookmark(job.id)}
            className={`p-2 rounded-full transition-colors ${
              job.isBookmarked 
                ? 'text-purple-600 bg-purple-50' 
                : 'text-gray-400 hover:text-gray-600'
            }`}
          >
            <Bookmark className={`w-5 h-5 ${job.isBookmarked ? 'fill-current' : ''}`} />
          </button>
        </div>
        
        {/* Job Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {job.tags.map((tag, index) => (
            <span 
              key={index}
              className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        
        {/* Job Details */}
        <div className="space-y-2 mb-4">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <MapPin className="w-4 h-4 text-gray-400" />
            <span>{job.location}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Calendar className="w-4 h-4 text-gray-400" />
            <span>{job.postedDate}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <DollarSign className="w-4 h-4 text-gray-400" />
            <span>{job.salary}</span>
          </div>
        </div>
        
        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 mb-4">
          <button 
            onClick={() => onApply(job.id)}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
          >
            Apply job
          </button>
          <button 
            onClick={() => onView(job.id)}
            className="px-4 py-2 border border-blue-600 text-blue-600 bg-white rounded-lg text-sm font-medium hover:bg-blue-50 transition-colors flex items-center gap-2"
          >
            View job <ChevronRight className="w-4 h-4" />
          </button>
        </div>
        
        {/* Recruiter Info */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <button 
              onClick={() => onChat(job.id)}
              className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-800 transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Live chat with Recruiter</span>
            </button>
          </div>
          
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
              <span className="text-gray-600 text-sm font-medium">
                {/* {job.recruiter.name.charAt(0)} */}
              </span>
            </div>
            {/* <span className="text-sm text-gray-700 font-medium">{job.recruiter.name}</span> */}
          </div>
        </div>
      </div>
    </div>
  );
} 
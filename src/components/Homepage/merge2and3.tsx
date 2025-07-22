'use client'

import {
  Megaphone, Users, Code, Monitor,
  BarChart, BookOpen, Briefcase, Headphones
} from 'lucide-react'
import Image from 'next/image'

const categories = [
  { title: "Marketing & Communications", jobs: "236 Jobs available", icon: Megaphone },
  { title: "Human Research & Development", jobs: "236 Jobs available", icon: Users },
  { title: "Design & Development", jobs: "236 Jobs available", icon: Code },
  { title: "Information & Technology", jobs: "236 Jobs available", icon: Monitor },
  { title: "Finance & Buisness", jobs: "236 Jobs available", icon: BarChart },
  { title: "Health & Education", jobs: "236 Jobs available", icon: BookOpen },
  { title: "Project Management & Software", jobs: "236 Jobs available", icon: Briefcase },
  { title: "Customer & Support Care", jobs: "236 Jobs available", icon: Headphones }
];

const CategoriesWithNews = () => {
  return (
    <section className="w-full bg-white py-16 md:py-24 overflow-hidden relative">
      {/* One Blue Blur at RIGHT between both sections */}
      <div className="absolute right-0 top-1/2 transform translate-x-[200px] -translate-y-1/2 w-[925px] h-[1029px] bg-gradient-to-br from-purple-500/30 to-blue-500/30 blur-[200px] rounded-full opacity-60 pointer-events-none z-0" />

      {/* Main container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-12">
          <h1 className="text-[32px] sm:text-[40px] md:text-[48px] font-semibold text-[#101022] leading-tight">
            Jobs in most popular{' '}
            <span className="bg-gradient-to-r from-[#5B5DE6] to-[#921294] text-transparent bg-clip-text">Roles</span>
          </h1>
        </div>

        {/* Category Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-5 gap-y-5 mb-24 max-w-[1371px] mx-auto">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className="h-[81px] bg-white rounded-lg px-4 md:px-6 py-4 shadow-sm hover:shadow-md transition-shadow flex items-center gap-4"
              >
                <div className="w-[42px] h-[42px] bg-[#F6F6FE] rounded-full flex items-center justify-center">
                  <Icon className="w-5 h-5 text-[#5B5DE6]" />
                </div>
                <div className="flex flex-col">
                  <h3 className="text-[16px] font-medium text-[#101022]">{category.title}</h3>
                  <p className="text-[14px] text-[#D9D9E2]">{category.jobs}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* News Section */}
        <div className="text-center">
          <h2 className="text-[32px] sm:text-[40px] md:text-[48px] font-medium text-gray-900 leading-tight mb-4">
            Professional media and industry{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500">
              news
            </span>
          </h2>
          <p className="text-[20px] sm:text-[24px] md:text-3xl font-medium text-gray-700 mb-12">
            Stay updated with the latest trends, updates, and news shared by industry experts.
          </p>

          {/* Image */}
          <div className="relative w-full max-w-4xl mx-auto mt-8">
            <Image
              src="/homePage/professional.png"
              alt="Staffbook UI Mockup"
              width={1000}
              height={800}
              layout="responsive"
              objectFit="contain"
              quality={100}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategoriesWithNews;

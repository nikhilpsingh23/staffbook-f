export default function JobPostSection() {
    return (
      <section className="w-full max-w-[1440px] mx-auto px-4 md:px-12 lg:px-24 py-16 bg-[#EFF0F0] font-[Montserrat]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
  
          {/* Left Column - Image */}
          <div className="flex justify-center">
            <img
              src="/homePage/job.png"
              alt="Job Card Preview"
              className="max-w-full h-auto"
            />
          </div>
  
          {/* Right Column - Text Content */}
          <div className="space-y-6 text-right">
            <h2 className="text-4xl font-bold">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5B5DE6] to-[#921294]">Post a Job</span>{' '}and Hire faster
            </h2>
            <p className="text-lg text-gray-700">
              Post jobs and find suitable candidates quickly.
            </p>
            <button className="bg-gradient-to-r from-[#5B5DE6] to-[#921294] text-white px-6 py-3 rounded-full shadow-md hover:scale-105 transition-transform">
              Explore Now
            </button>
          </div>
        </div>
      </section>
    );
  }
  
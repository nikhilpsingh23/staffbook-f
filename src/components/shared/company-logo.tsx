'use client'

import Image from 'next/image'
import React from 'react'

const firstRowLogos = [
  '/homePage/logo1.png',
  '/homePage/logo1.png',
  '/homePage/logo1.png',
  '/homePage/logo1.png',
  '/homePage/logo1.png',
  '/homePage/logo1.png',
]

const secondRowLogos = [
  '/homePage/logo1.png',
  '/homePage/logo1.png',
  '/homePage/logo1.png',
  '/homePage/logo1.png',
  '/homePage/logo1.png',
]

const CompanyLogoSection = () => {
  return (
    <section className="w-full py-16 flex flex-col items-center bg-white">
      {/* Title */}
      <h2 className="text-[48px] font-semibold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-indigo-500 mb-12">
        Top companies <span className='text-black font-medium font-Montserrat'>Hiring</span> 
      </h2>

      {/* First Row */}
      <div className="w-full flex justify-center">
        <div className="w-full max-w-[1307px] flex flex-wrap justify-center items-center gap-15 mb-8">
          {firstRowLogos.map((logo, index) => (
            <div key={index} className="h-[42px] flex items-center">
              <Image
                src={logo}
                alt={`Company Logo ${index + 1}`}
                height={42}
                width={120} // Adjust width as needed
                className="object-contain h-[42px] w-auto"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Second Row */}
      <div className="w-full flex justify-center">
        <div className="w-full max-w-[1122px] flex flex-wrap justify-center items-center gap-15">
          {secondRowLogos.map((logo, index) => (
            <div key={index} className="h-[42px] flex items-center">
              <Image
                src={logo}
                alt={`Company Logo ${index + 7}`}
                height={42}
                width={120}
                className="object-contain h-[42px] w-auto"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CompanyLogoSection

'use client';
import React, { useRef, useState } from 'react';

export default function Page() {
  const [workStatus, setWorkStatus] = useState<'fresher' | 'experienced'>('fresher');
  const fileInputRef = useRef<HTMLInputElement>(null);

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-8 mt-16">
      <form className="w-full max-w-5xl bg-white rounded-3xl shadow-xl p-6 md:p-12 flex flex-col gap-10 border border-gray-100">
        <div>
          <h1 className="text-5xl md:text-5xl font-bold text-[#18192B] mb-2 font-sans tracking-tight">Create your profile</h1>
          <p className="text-lg md:text-xl text-gray-400 font-medium">Join india's no. 1 job portal</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8">
          <div>
            <label htmlFor="fullName" className="block font-semibold text-base text-[#18192B] mb-1">
              Full name<span className="text-error ml-1">*</span>
            </label>
            <input
              id="fullName"
              name="fullName"
              type="text"
              required
              placeholder="Enter your full name"
              className="w-full px-5 py-4 rounded-xl border border-gray-200 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary text-base font-medium"
            />
            <p className="text-xs text-gray-300 mt-1">Enter your full name here. This will be visible to recruiters</p>
          </div>
          <div>
            <label htmlFor="email" className="block font-semibold text-base text-[#18192B] mb-1">
              Enter Email ID<span className="text-error ml-1">*</span>
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="Enter your E-Mail Address"
              className="w-full px-5 py-4 rounded-xl border border-gray-200 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary text-base font-medium"
            />
            <p className="text-xs text-gray-300 mt-1">Enter Email ID for job updates</p>
          </div>
          <div>
            <label htmlFor="password" className="block font-semibold text-base text-[#18192B] mb-1">
              Enter password<span className="text-error ml-1">*</span>
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              placeholder="Enter new password"
              className="w-full px-5 py-4 rounded-xl border border-gray-200 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary text-base font-medium"
            />
            <p className="text-xs text-gray-300 mt-1">Enter a strong password to stay protected</p>
          </div>
          <div>
            <label htmlFor="phone" className="block font-semibold text-base text-[#18192B] mb-1">
              Phone number<span className="text-error ml-1">*</span>
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              required
              placeholder="+91-0000000000"
              className="w-full px-5 py-4 rounded-xl border border-gray-200 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary text-base font-medium"
            />
            <p className="text-xs text-gray-300 mt-1">Recruiters will reach out to you on this no.</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8">
          <div>
            <label className="block font-semibold text-base text-[#18192B] mb-2">
              Work Status<span className="text-error ml-1">*</span>
            </label>
            <div className="flex flex-col gap-4">
              <label className={`flex items-center gap-3 px-5 py-4 rounded-xl border-2 cursor-pointer transition-all text-base font-medium ${workStatus === 'fresher' ? 'border-primary bg-white shadow-[0_0_0_2px_rgba(91,93,230,0.15)]' : 'border-gray-200 bg-gray-50'}`}> 
                <input
                  type="radio"
                  name="workStatus"
                  value="fresher"
                  checked={workStatus === 'fresher'}
                  onChange={() => setWorkStatus('fresher')}
                  className="accent-primary w-5 h-5"
                />
                <span className="font-semibold text-[#18192B]">I am a fresher</span>
                <span className="text-gray-400 text-base">(Experience might include internships)</span>
              </label>
              <label className={`flex items-center gap-3 px-5 py-4 rounded-xl border-2 cursor-pointer transition-all text-base font-medium ${workStatus === 'experienced' ? 'border-primary bg-white shadow-[0_0_0_2px_rgba(91,93,230,0.15)]' : 'border-gray-200 bg-gray-50'}`}> 
                <input
                  type="radio"
                  name="workStatus"
                  value="experienced"
                  checked={workStatus === 'experienced'}
                  onChange={() => setWorkStatus('experienced')}
                  className="accent-primary w-5 h-5"
                />
                <span className="font-semibold text-[#18192B]">I am experienced</span>
                <span className="text-gray-400 text-base">(this excludes internships)</span>
              </label>
            </div>
          </div>
          <div>
            <label className="block font-semibold text-base text-[#18192B] mb-2">
              Resume<span className="text-error ml-1">*</span>
            </label>
            <div className="flex items-center gap-0 bg-gray-50 rounded-xl overflow-hidden border border-gray-200">
              <button
                type="button"
                className="flex items-center gap-2 bg-accent hover:bg-accent-dark text-white px-8 py-4 font-semibold text-base rounded-none rounded-l-xl transition-colors h-full min-w-[200px] justify-center"
                onClick={() => fileInputRef.current?.click()}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V4" /></svg>
                Upload Resume
              </button>
              <span className="text-gray-400 text-base px-6">DOC, DOCX, PDF, RTF</span>
              <input
                ref={fileInputRef}
                type="file"
                accept=".pdf,.doc,.docx,.rtf"
                className="hidden"
                required
              />
            </div>
            <p className="text-xs text-gray-300 mt-1 ml-1">Maximum size of PDF 2mb</p>
          </div>
        </div>
        <div className="flex items-center gap-2 mt-2">
          <input type="checkbox" id="jobUpdates" name="jobUpdates" className="accent-primary w-5 h-5" />
          <label htmlFor="jobUpdates" className="text-gray-500 text-base">Send job updates me through mail, whatsapp</label>
        </div>
        <div className="mt-2">
          <button type="submit" className="w-[180px] bg-gradient-to-r from-primary to-[#921294] text-white px-8 py-3 rounded-full font-bold text-lg shadow hover:opacity-90 transition-all">
            Register now
          </button>
        </div>
      </form>
    </div>
  );
} 
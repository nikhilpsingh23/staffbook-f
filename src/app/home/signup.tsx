'use client';
import React, { useRef, useState } from 'react';

export default function SignupPage() {
  const [workStatus, setWorkStatus] = useState<'fresher' | 'experienced'>('fresher');
  const fileInputRef = useRef<HTMLInputElement>(null);

  return (
    <div className="min-h-screen bg-[#FAFAFC] flex items-center justify-center py-8">
      <form className="w-full max-w-5xl bg-white rounded-2xl shadow-lg p-8 md:p-12 flex flex-col gap-8">
        <div>
          <h1 className="text-4xl font-bold text-primary mb-2">Create your profile</h1>
          <p className="text-base text-gray-500">Join india's no. 1 job portal</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <label htmlFor="fullName" className="block font-semibold text-base text-primary mb-1">
              Full name<span className="text-error">*</span>
            </label>
            <input
              id="fullName"
              name="fullName"
              type="text"
              required
              placeholder="Enter your full name"
              className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary text-base"
            />
            <p className="text-xs text-gray-400 mt-1">Enter your full name here. This will be visible to recruiters</p>
          </div>
          <div>
            <label htmlFor="email" className="block font-semibold text-base text-primary mb-1">
              Enter Email ID<span className="text-error">*</span>
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="Enter your E-Mail Address"
              className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary text-base"
            />
            <p className="text-xs text-gray-400 mt-1">Enter Email ID for job updates</p>
          </div>
          <div>
            <label htmlFor="password" className="block font-semibold text-base text-primary mb-1">
              Enter password<span className="text-error">*</span>
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              placeholder="Enter new password"
              className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary text-base"
            />
            <p className="text-xs text-gray-400 mt-1">Enter a strong password to stay protected</p>
          </div>
          <div>
            <label htmlFor="phone" className="block font-semibold text-base text-primary mb-1">
              Phone number<span className="text-error">*</span>
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              required
              placeholder="+91-0000000000"
              className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary text-base"
            />
            <p className="text-xs text-gray-400 mt-1">Recruiters will reach out to you on this no.</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <label className="block font-semibold text-base text-primary mb-2">
              Work Status<span className="text-error">*</span>
            </label>
            <div className="flex flex-col gap-3">
              <label className={`flex items-center gap-3 px-4 py-3 rounded-lg border-2 cursor-pointer transition-all ${workStatus === 'fresher' ? 'border-primary bg-primary/5' : 'border-gray-200 bg-white'}`}> 
                <input
                  type="radio"
                  name="workStatus"
                  value="fresher"
                  checked={workStatus === 'fresher'}
                  onChange={() => setWorkStatus('fresher')}
                  className="accent-primary w-5 h-5"
                />
                <span className="font-semibold text-primary">I am a fresher</span>
                <span className="text-gray-400 text-sm">(Experience might include internships)</span>
              </label>
              <label className={`flex items-center gap-3 px-4 py-3 rounded-lg border-2 cursor-pointer transition-all ${workStatus === 'experienced' ? 'border-primary bg-primary/5' : 'border-gray-200 bg-white'}`}> 
                <input
                  type="radio"
                  name="workStatus"
                  value="experienced"
                  checked={workStatus === 'experienced'}
                  onChange={() => setWorkStatus('experienced')}
                  className="accent-primary w-5 h-5"
                />
                <span className="font-semibold text-primary">I am experienced</span>
                <span className="text-gray-400 text-sm">(this excludes internships)</span>
              </label>
            </div>
          </div>
          <div>
            <label className="block font-semibold text-base text-primary mb-2">
              Resume<span className="text-error">*</span>
            </label>
            <div className="flex items-center gap-4">
              <button
                type="button"
                className="flex items-center gap-2 bg-accent text-white px-6 py-3 rounded-lg font-semibold shadow hover:bg-accent-dark transition-colors"
                onClick={() => fileInputRef.current?.click()}
              >
                <span className="material-icons">upload</span> Upload Resume
              </button>
              <span className="text-gray-400 text-sm">DOC, DOCX, PDF, RTF</span>
            </div>
            <input
              ref={fileInputRef}
              type="file"
              accept=".pdf,.doc,.docx,.rtf"
              className="hidden"
              required
            />
            <p className="text-xs text-gray-400 mt-1">Maximum size of PDF 2mb</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <input type="checkbox" id="jobUpdates" name="jobUpdates" className="accent-primary w-5 h-5" />
          <label htmlFor="jobUpdates" className="text-gray-600 text-base">Send job updates me through mail, whatsapp</label>
        </div>
        <div>
          <button type="submit" className="bg-primary text-white px-8 py-3 rounded-full font-bold text-lg shadow hover:bg-primary-dark transition-colors">
            Register now
          </button>
        </div>
      </form>
    </div>
  );
} 
'use client';
import Image from 'next/image';
import React from 'react';

interface ProfileAvatarProps {
  name: string;
  src?: string;
  size?: number;
  className?: string;
}

const ProfileAvatar: React.FC<ProfileAvatarProps> = ({ name, src = '/homePage/profile.png', size = 36, className = '' }) => {
  return (
    <div className={`flex  items-center gap-2 ${className}`}>
      <div className='rounded-full border border-gray-200 overflow-hidden h-10 w-10 bg-red-500 flex items-center justify-center'>


      <Image
        src={src}
        alt={name}
        width={size}
        height={size}
        className="rounded-full object-cover"
        />
        </div>
      <span className="text-xs text-[#18192B] font-medium font-sans">{name}</span>
    </div>
  );
};

export default ProfileAvatar; 
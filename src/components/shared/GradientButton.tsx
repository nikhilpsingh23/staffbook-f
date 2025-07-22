import React from 'react';

interface GradientButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

const GradientButton = ({ children, className = '', ...props }:any) => (
  <div
    className={`rounded-full flex bg-gradient-to-r from-[#5B5DE6] to-[#921294] text-white font-semibold shadow-md hover:opacity-90 transition px-6 py-2 ${className}`}
    {...props}
  >
    {children}
  </div>
);

export default GradientButton; 
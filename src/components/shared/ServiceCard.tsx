'use client';

import Image from 'next/image';
import { Check } from 'lucide-react';
import { ServicePlan } from '../../types/service';

interface ServiceCardProps extends ServicePlan {}

export default function ServiceCard({ title, features, price, image, popular = false }: ServiceCardProps) {
  return (
    <div className="relative bg-white rounded-[20px] shadow-lg border border-gray-200 p-6 flex flex-col h-full">
      {/* Popular Badge */}
      {popular && (
        <div className="absolute -top-3 right-4 bg-gradient-to-r from-[#5B5DE6] to-[#921294] text-white text-xs font-bold px-3 py-1 rounded-full">
          Popular
        </div>
      )}
      
      {/* Image */}
      <div className="w-full h-[140px] rounded-[16px] mb-4 flex items-center justify-center bg-gray-50 overflow-hidden">
        <Image
          src={image}
          alt={title}
          width={120}
          height={80}
          className="object-contain max-h-[80px]"
        />
      </div>
      
      {/* Title */}
      <h3 className="font-bold text-lg text-gray-900 mb-4 leading-tight">{title}</h3>
      
      {/* Features */}
      <div className="flex-1 space-y-2 mb-4">
        {features.map((feature, index) => (
          <div key={index} className="flex items-start gap-2">
            <Check size={16} className="text-green-500 flex-shrink-0 mt-0.5" />
            <span className="text-sm text-gray-600 leading-relaxed">{feature}</span>
          </div>
        ))}
      </div>
      
      {/* Price */}
      <div className="mt-auto">
        <p className="text-lg font-bold text-[#5B5DE6] mb-3">
          Subscription starts from: <span className="text-gray-900">{price}</span>
        </p>
        
        {/* Know More Button */}
        <button className="w-full py-2 px-4 text-sm font-semibold text-[#5B5DE6] hover:text-[#921294] transition-colors">
          Know more &gt;
        </button>
      </div>
    </div>
  );
} 
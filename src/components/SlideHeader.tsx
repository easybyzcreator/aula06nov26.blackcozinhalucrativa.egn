import React from 'react';
import { ASSETS } from '../slidesData';

interface SlideHeaderProps {
  category?: string;
  slideNumber: number;
  totalSlides: number;
  lightTheme?: boolean;
}

export const SlideHeader: React.FC<SlideHeaderProps> = ({
  category,
  slideNumber,
  totalSlides,
  lightTheme = false,
}) => {
  return (
    <div className="w-full flex items-center justify-between px-6 sm:px-10 pt-4 pb-2 border-b border-[#424733]/15">
      {/* Logos group */}
      <div className="flex items-center gap-3 sm:gap-4">
        {/* Escola logo */}
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full overflow-hidden border border-[#424733]/20 shadow-xs shrink-0 flex items-center justify-center bg-[#2B2E22]">
            <img
              src={ASSETS.logos.egnn}
              alt="Logo Escola de Gastronomia e Negócios"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="hidden md:flex flex-col text-left">
            <span className="text-[11px] font-bold tracking-tight text-[#424733] leading-tight font-montserrat">
              ESCOLA DE GASTRONOMIA
            </span>
            <span className="text-[9px] font-semibold text-[#859159] tracking-wider uppercase font-montserrat">
              E NEGÓCIOS • CHEF GABI
            </span>
          </div>
        </div>

        <span className="text-[#A38C66]/60 text-sm font-light">✕</span>

        {/* Easy Byz Logo */}
        <div className="flex items-center gap-2">
          <img
            src={ASSETS.logos.easyByz}
            alt="Logo Easy Byz Creator"
            className="h-7 sm:h-8 object-contain filter drop-shadow-sm"
            referrerPolicy="no-referrer"
          />
          <div className="hidden lg:flex flex-col text-left">
            <span className="text-[11px] font-bold tracking-tight text-[#613C26] leading-tight font-montserrat">
              EASY BYZ
            </span>
            <span className="text-[9px] font-semibold text-[#A38C66] tracking-wider uppercase font-montserrat">
              CREATOR APPS
            </span>
          </div>
        </div>
      </div>

      {/* Category Pill and Slide Number */}
      <div className="flex items-center gap-2 sm:gap-3">
        {category && (
          <span 
            className="text-[11px] sm:text-xs font-semibold px-2.5 py-0.5 rounded-full border border-[#859159]/30 uppercase tracking-wider text-[#424733] bg-[#859159]/10"
          >
            {category}
          </span>
        )}
        <div className="text-xs font-bold text-[#424733]/70 px-2 py-0.5 bg-black/5 rounded-md">
          {slideNumber} <span className="font-normal text-[#424733]/40">/ {totalSlides}</span>
        </div>
      </div>
    </div>
  );
};

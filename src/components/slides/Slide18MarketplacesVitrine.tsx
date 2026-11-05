import React from 'react';
import { motion } from 'motion/react';
import { SlideHeader } from '../SlideHeader';
import { Eye, TrendingUp, Lightbulb } from 'lucide-react';

interface SlideProps {
  slideNumber: number;
  totalSlides: number;
}

export const Slide18MarketplacesVitrine: React.FC<SlideProps> = ({
  slideNumber,
  totalSlides,
}) => {
  return (
    <div className="relative w-full h-full flex flex-col justify-between bg-[#F8F8F5] overflow-hidden">
      <SlideHeader
        category="Visão Estratégica"
        slideNumber={slideNumber}
        totalSlides={totalSlides}
      />

      <div className="flex-1 px-6 sm:px-12 lg:px-20 py-6 flex flex-col justify-center max-w-5xl mx-auto w-full">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-[#354028] font-aleo tracking-tight leading-[1.2]">
            Você não precisa simplesmente abandonar os marketplaces
          </h1>
        </motion.div>

        {/* Content Body */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.15 }}
          className="space-y-6 text-base sm:text-lg lg:text-[19px] text-[#424733] font-montserrat leading-relaxed"
        >
          <p>
            Eles podem funcionar como uma vitrine para apresentar sua marmitaria e conquistar o primeiro cliente.
          </p>

          <p>
            Mas o objetivo é construir uma estrutura própria que dê mais autonomia, organização e sustentabilidade ao seu negócio.
          </p>
        </motion.div>

        {/* Highlight Quote with Left Green Accent Line */}
        <motion.div
          initial={{ opacity: 0, x: -15 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.45, delay: 0.3 }}
          className="mt-8 sm:mt-10 pl-5 sm:pl-6 border-l-4 border-[#354028] py-2 bg-white/60 rounded-r-xl"
        >
          <p className="text-base sm:text-xl lg:text-2xl font-bold text-[#354028] font-aleo tracking-tight leading-snug">
            Use a vitrine para ser encontrada. Construa sua própria estrutura para crescer.
          </p>
        </motion.div>
      </div>

      <div className="w-full flex items-center justify-between px-6 sm:px-10 py-3 border-t border-[#424733]/10 text-[11px] text-[#424733]/60 font-montserrat bg-white/50">
        <span>Slide {slideNumber} • A função estratégica dos marketplaces</span>
        <span>Escola de Gastronomia e Negócios • Easy Byz Creator</span>
      </div>
    </div>
  );
};

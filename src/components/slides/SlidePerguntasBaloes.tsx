import React from 'react';
import { motion } from 'motion/react';
import { SlideHeader } from '../SlideHeader';
import { MessageCircle } from 'lucide-react';

interface SlidePerguntasBaloesProps {
  slideNumber: number;
  totalSlides: number;
  question1: string;
  question2: string;
}

export const SlidePerguntasBaloes: React.FC<SlidePerguntasBaloesProps> = ({
  slideNumber,
  totalSlides,
  question1,
  question2,
}) => {
  return (
    <div className="relative w-full h-full flex flex-col justify-between bg-[#F8F8F5] overflow-hidden">
      {/* Top Header */}
      <SlideHeader
        category="Diagnóstico & Realidade"
        slideNumber={slideNumber}
        totalSlides={totalSlides}
      />

      {/* Main Container - Conversation Speech Bubbles */}
      <div className="flex-1 w-full max-w-4xl mx-auto px-6 sm:px-10 lg:px-14 flex flex-col justify-center gap-6 sm:gap-8 my-auto">
        {/* Balão 1 (Esquerda / Alinhado ao início) */}
        <motion.div
          initial={{ opacity: 0, x: -30, y: 10 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="self-start max-w-2xl relative"
        >
          <div className="relative bg-white text-[#2B2E22] p-6 sm:p-8 rounded-3xl rounded-tl-sm shadow-[0_12px_32px_rgba(43,46,34,0.08)] border border-[#424733]/15">
            <div className="flex items-start gap-3.5">
              <div className="p-2 rounded-xl bg-[#859159]/15 text-[#424733] shrink-0 mt-0.5">
                <MessageCircle className="w-5 h-5 text-[#859159]" />
              </div>
              <p className="text-xl sm:text-2xl lg:text-[25px] font-bold font-aleo leading-snug tracking-tight text-[#2B2E22]">
                {question1}
              </p>
            </div>
            {/* SVG speech bubble tail */}
            <div 
              className="absolute -top-1.5 -left-2 w-3.5 h-3.5 bg-white border-t border-l border-[#424733]/15 rotate-45 pointer-events-none" 
            />
          </div>
        </motion.div>

        {/* Balão 2 (Direita / Alinhado ao final) */}
        <motion.div
          initial={{ opacity: 0, x: 30, y: 10 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2, ease: 'easeOut' }}
          className="self-end max-w-2xl relative"
        >
          <div className="relative bg-[#EEF2E6] text-[#2B2E22] p-6 sm:p-8 rounded-3xl rounded-br-sm shadow-[0_12px_32px_rgba(43,46,34,0.08)] border border-[#859159]/30">
            <div className="flex items-start gap-3.5">
              <div className="p-2 rounded-xl bg-[#859159] text-white shrink-0 mt-0.5 shadow-xs">
                <MessageCircle className="w-5 h-5 text-white" />
              </div>
              <p className="text-xl sm:text-2xl lg:text-[25px] font-bold font-aleo leading-snug tracking-tight text-[#2B2E22]">
                {question2}
              </p>
            </div>
            {/* SVG speech bubble tail */}
            <div 
              className="absolute -bottom-1.5 -right-2 w-3.5 h-3.5 bg-[#EEF2E6] border-b border-r border-[#859159]/30 rotate-45 pointer-events-none" 
            />
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <div className="w-full flex items-center justify-between px-6 sm:px-10 py-3 border-t border-[#424733]/10 text-[11px] text-[#424733]/60 font-montserrat">
        <span>Slide {slideNumber} • Diagnóstico da sua marmitaria</span>
        <span>Escola de Gastronomia e Negócios • Easy Byz Creator</span>
      </div>
    </div>
  );
};

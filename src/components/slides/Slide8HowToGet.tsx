import React, { useState } from 'react';
import { motion } from 'motion/react';
import { SlideHeader } from '../SlideHeader';
import { ASSETS } from '../../slidesData';
import { Flame, Calendar, ExternalLink, Sparkles } from 'lucide-react';

interface SlideProps {
  slideNumber: number;
  totalSlides: number;
}

export const Slide8HowToGet: React.FC<SlideProps> = ({ slideNumber, totalSlides }) => {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="relative w-full h-full flex flex-col justify-between bg-[#F8F8F5] overflow-hidden">
      {/* Slide Header */}
      <SlideHeader
        category="Condição Especial"
        slideNumber={slideNumber}
        totalSlides={totalSlides}
      />

      {/* Main Full-Slide Content Area */}
      <div className="flex-1 w-full flex flex-col items-center justify-between px-3 sm:px-6 lg:px-8 py-2 overflow-hidden relative">
        {/* Urgency & Validity Alert Badge */}
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="flex items-center justify-center mb-2 z-10 shrink-0"
        >
          {/* Destaque Máximo: Válido somente até 10 dez 26 */}
          <div className="px-5 py-1.5 text-xs sm:text-sm font-black uppercase tracking-wider text-white rounded-full shadow-xl bg-gradient-to-r from-[#C23934] via-[#DC2626] to-[#991B1B] border border-white/25 font-montserrat flex items-center gap-2 animate-pulse">
            <Flame className="w-4 h-4 text-yellow-300 shrink-0" />
            <span>VÁLIDO SOMENTE ATÉ 10 DEZ 26</span>
          </div>
        </motion.div>

        {/* Full Image occupying the entire slide */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex-1 w-full flex items-center justify-center relative overflow-hidden my-auto"
        >
          <a
            href={ASSETS.appLinks.registrationApp}
            target="_blank"
            rel="noopener noreferrer"
            className="relative h-full w-full flex items-center justify-center group cursor-pointer max-h-[70vh] sm:max-h-[73vh]"
            title="Clique para abrir a página de inscrição oficial da Black"
          >
            {!imgError ? (
              <img
                src={ASSETS.screens.capaInscricao}
                alt="Condição Especial Black Cozinha Lucrativa - Escola de Gastronomia & Negócios e Easy Byz Creator"
                className="max-h-full max-w-full w-auto h-auto object-contain rounded-2xl shadow-2xl border border-[#424733]/15 transition-transform duration-300 group-hover:scale-[1.01]"
                referrerPolicy="no-referrer"
                loading="eager"
                onError={() => setImgError(true)}
              />
            ) : (
              <div className="w-full max-w-2xl aspect-[16/9] bg-gradient-to-br from-[#424733] to-[#2B2E22] text-white p-8 rounded-2xl flex flex-col justify-between items-center text-center shadow-xl">
                <div className="w-14 h-14 rounded-full bg-[#859159]/20 border border-[#859159]/40 flex items-center justify-center">
                  <Sparkles className="w-7 h-7 text-[#859159]" />
                </div>
                <div>
                  <h4 className="text-xl font-bold font-aleo text-white">BLACK Cozinha Lucrativa</h4>
                  <p className="text-sm text-[#EAECE6] mt-2 font-montserrat">Garanta sua vaga exclusiva com valor promocional por tempo limitado</p>
                </div>
                <span className="px-5 py-2.5 bg-[#C23934] text-white text-sm font-bold rounded-xl shadow-md flex items-center gap-2">
                  <ExternalLink className="w-4 h-4" /> Acessar Inscrição Oficial
                </span>
              </div>
            )}

            {/* Subtle Hover Hint */}
            {!imgError && (
              <div className="absolute inset-0 bg-black/15 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none rounded-2xl">
                <span className="bg-white/95 text-[#613C26] text-xs font-bold px-3.5 py-1.5 rounded-full flex items-center gap-1.5 shadow-xl font-montserrat">
                  <ExternalLink className="w-3.5 h-3.5 text-[#613C26]" /> Clique para abrir inscrição oficial
                </span>
              </div>
            )}
          </a>
        </motion.div>
      </div>

      {/* Footer bar */}
      <div className="w-full px-6 sm:px-10 py-2.5 border-t border-[#424733]/10 bg-white/60 text-[11px] text-[#424733]/70 flex items-center justify-between font-montserrat">
        <span>Slide {slideNumber} • Condição Especial BLACK Cozinha Lucrativa</span>
        <div className="flex items-center gap-2 font-bold text-[#C23934]">
          <Calendar className="w-3.5 h-3.5" />
          <span>Válido somente até 10 dez 26</span>
        </div>
      </div>
    </div>
  );
};

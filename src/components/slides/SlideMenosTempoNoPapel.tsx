import React from 'react';
import { motion } from 'motion/react';
import { SlideHeader } from '../SlideHeader';
import { Clock, MessageSquare, CheckCircle2 } from 'lucide-react';

interface SlideProps {
  slideNumber: number;
  totalSlides: number;
}

export const SlideMenosTempoNoPapel: React.FC<SlideProps> = ({
  slideNumber,
  totalSlides,
}) => {
  return (
    <div className="relative w-full h-full flex flex-col justify-between bg-[#F8F8F5] overflow-hidden">
      {/* Slide Header */}
      <SlideHeader
        category="Produtividade & Escala"
        slideNumber={slideNumber}
        totalSlides={totalSlides}
      />

      {/* Main Content Area */}
      <div className="flex-1 flex items-center px-6 sm:px-10 lg:px-14 max-w-7xl mx-auto w-full py-3 sm:py-5">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center w-full">
          {/* Left Column: Title & 3 Content Boxes (7 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.45 }}
            className="lg:col-span-7 flex flex-col justify-center space-y-4"
          >
            {/* Title */}
            <div>
              <h1 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-bold text-[#354028] font-aleo tracking-tight leading-[1.15] mb-2">
                Menos tempo no papel. Mais tempo produzindo e vendendo.
              </h1>
            </div>

            {/* Content Cards */}
            <div className="space-y-3 pt-1">
              {/* Box 1 */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: 0.1 }}
                className="p-4 rounded-xl bg-[#EFEFEA] border border-[#424733]/10 space-y-1"
              >
                <div className="flex items-center gap-2 text-sm sm:text-base font-bold text-[#2B2E22] font-montserrat">
                  <span>⏱️</span>
                  <span>Organização em menos de 5 minutos</span>
                </div>
                <p className="text-xs sm:text-sm text-[#424733]/85 font-montserrat leading-relaxed pl-6">
                  Lançamentos rápidos que cabem nos intervalos da produção
                </p>
              </motion.div>

              {/* Box 2 */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: 0.2 }}
                className="p-4 rounded-xl bg-[#EFEFEA] border border-[#424733]/10 space-y-1"
              >
                <div className="flex items-center gap-2 text-sm sm:text-base font-bold text-[#2B2E22] font-montserrat">
                  <span>💬</span>
                  <span>Respostas mais rápidas e padronizadas</span>
                </div>
                <p className="text-xs sm:text-sm text-[#424733]/85 font-montserrat leading-relaxed pl-6">
                  Em vez de digitar textos repetidamente, envie o link do seu cardápio com fotos, preços e informações
                </p>
              </motion.div>

              {/* Box 3 - Green Highlight */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: 0.3 }}
                className="p-4 rounded-xl bg-[#C8F7B5] border border-[#2B2E22]/10 shadow-xs flex items-start gap-2.5"
              >
                <CheckCircle2 className="w-5 h-5 text-[#2B2E22] shrink-0 mt-0.5" />
                <p className="text-xs sm:text-sm font-medium text-[#2B2E22] font-montserrat leading-relaxed">
                  <strong className="font-bold">Resultado:</strong> Mais clareza sobre o lucro, menos estresse e mais profissionalismo diante do cliente.
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column: Image of woman on smartphone in kitchen (5 cols) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.45, delay: 0.15 }}
            className="lg:col-span-5 flex items-center justify-center"
          >
            <div className="relative w-full max-w-[420px] aspect-[4/4.2] sm:aspect-[4/4.5] rounded-2xl overflow-hidden shadow-lg border border-[#424733]/15">
              <img
                src="https://raw.githubusercontent.com/easybyzcreator/imagens/266bc78f870e5739ed85507926f2ccd271be2af8/cozinha%20organizada%20marmita.png"
                alt="Menos tempo no papel. Cozinha organizada e marmitas prontas"
                className="w-full h-full object-cover object-center"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <div className="w-full flex items-center justify-between px-6 sm:px-10 py-3 border-t border-[#424733]/10 text-[11px] text-[#424733]/60 font-montserrat">
        <span>Slide {slideNumber} • Menos tempo no papel, mais tempo vendendo</span>
        <span>Escola de Gastronomia e Negócios • Easy Byz Creator</span>
      </div>
    </div>
  );
};

import React from 'react';
import { motion } from 'motion/react';
import { SlideHeader } from '../SlideHeader';
import { Check } from 'lucide-react';

interface SlideProps {
  slideNumber: number;
  totalSlides: number;
}

export const Slide19NaoESobreAplicativo: React.FC<SlideProps> = ({
  slideNumber,
  totalSlides,
}) => {
  const points = [
    'É sobre sair do caderninho.',
    'É sobre parar de interromper sua produção o tempo inteiro.',
    'É sobre entender melhor seus números.',
    'É sobre profissionalizar sua marmitaria.',
  ];

  return (
    <div className="relative w-full h-full flex flex-col justify-between bg-[#F8F8F5] overflow-hidden">
      <SlideHeader
        category="Visão de Negócio"
        slideNumber={slideNumber}
        totalSlides={totalSlides}
      />

      <div className="flex-1 px-6 sm:px-10 lg:px-14 py-3 sm:py-5 flex items-center max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center w-full">
          {/* Left Column: Image of woman with meal prep in kitchen (5 cols) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.45 }}
            className="lg:col-span-5 flex items-center justify-center"
          >
            <div className="relative w-full max-w-[430px] aspect-[4/4.6] rounded-2xl overflow-hidden shadow-lg border border-[#424733]/15">
              <img
                src="https://raw.githubusercontent.com/easybyzcreator/imagens/5e9a76016e380f1d5ffbec21f2cdf4f9ad5f7db4/chef%20cozinha.jpg"
                alt="Chef profissional na cozinha"
                className="w-full h-full object-cover [object-position:50%_0%]"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>

          {/* Right Column: Title & 4 Points + Conclusion (7 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.45, delay: 0.1 }}
            className="lg:col-span-7 flex flex-col justify-center space-y-4"
          >
            {/* Title */}
            <div>
              <h1 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-bold text-[#354028] font-aleo tracking-tight leading-[1.15]">
                Não é simplesmente sobre ter um aplicativo.
              </h1>
            </div>

            {/* 4 Points with soft square boxes */}
            <div className="space-y-3 pt-2">
              {points.map((text, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.15 + idx * 0.08 }}
                  className="flex items-center gap-3.5"
                >
                  <div className="w-8 h-8 rounded-lg bg-[#EFEFEA] border border-[#424733]/15 shrink-0 flex items-center justify-center shadow-2xs">
                    <Check className="w-4 h-4 text-[#859159] stroke-[3]" />
                  </div>
                  <p className="text-base sm:text-lg font-medium text-[#2B2E22] font-montserrat leading-snug">
                    {text}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Bottom Strong Conclusion */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.5 }}
              className="pt-3"
            >
              <p className="text-sm sm:text-base font-bold text-[#354028] font-montserrat leading-relaxed">
                É sobre deixar de apenas vender marmitas e começar a construir um negócio estruturado, lucrativo e preparado para crescer.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <div className="w-full flex items-center justify-between px-6 sm:px-10 py-3 border-t border-[#424733]/10 text-[11px] text-[#424733]/60 font-montserrat bg-white/50">
        <span>Slide {slideNumber} • Mais que um app: um negócio estruturado</span>
        <span>Escola de Gastronomia e Negócios • Easy Byz Creator</span>
      </div>
    </div>
  );
};

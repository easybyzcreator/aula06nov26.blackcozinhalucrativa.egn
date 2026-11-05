import React from 'react';
import { motion } from 'motion/react';
import { SlideHeader } from '../SlideHeader';

interface SlideProps {
  slideNumber: number;
  totalSlides: number;
}

export const Slide2PainPoints: React.FC<SlideProps> = ({ slideNumber, totalSlides }) => {
  const bulletPoints = [
    'Caderninho e bloco de notas',
    'WhatsApp cheio de mensagens',
    'Planilhas esquecidas',
    'Calculadora e anotações soltas',
    'Marmitas sendo produzidas enquanto tudo isso acontece',
  ];

  return (
    <div className="relative w-full h-full flex flex-col justify-between bg-[#F7F7F5] overflow-hidden">
      {/* Slide Header */}
      <SlideHeader
        category="Diagnóstico & Realidade"
        slideNumber={slideNumber}
        totalSlides={totalSlides}
      />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col justify-center px-6 sm:px-12 lg:px-20 max-w-7xl mx-auto w-full py-4 sm:py-6">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-6 sm:mb-8"
        >
          <h1 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-bold text-[#354028] font-aleo tracking-tight leading-tight">
            Você é uma excelente cozinheira... mas como vai a sua gestão?
          </h1>
        </motion.div>

        {/* 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Text & List */}
          <motion.div
            initial={{ opacity: 0, x: -15 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="lg:col-span-6 flex flex-col justify-between space-y-5"
          >
            <p className="text-sm sm:text-base text-[#2B2E22] font-montserrat leading-relaxed font-normal">
              O talento gastronômico você já tem. O problema começa quando precisa cozinhar e administrar tudo ao mesmo tempo.
            </p>

            {/* Bullets */}
            <ul className="space-y-2.5 my-2">
              {bulletPoints.map((point, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.15 + index * 0.06 }}
                  className="flex items-center gap-3 text-sm sm:text-base text-[#2B2E22] font-montserrat"
                >
                  <span className="w-2 h-2 rounded-full bg-[#2B2E22] shrink-0" />
                  <span>{point}</span>
                </motion.li>
              ))}
            </ul>

            {/* Bottom Statement */}
            <p className="text-sm sm:text-base font-bold text-[#2B2E22] font-montserrat leading-relaxed pt-2">
              O problema nunca foi a sua comida. É tentar administrar um negócio inteiro sem uma ferramenta prática na sua mão.
            </p>
          </motion.div>

          {/* Right Column: Large Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-6 flex justify-center items-center"
          >
            <div className="w-full max-w-lg h-64 sm:h-72 md:h-80 lg:h-96 rounded-2xl overflow-hidden shadow-md border border-[#424733]/10 bg-white">
              <img
                src="https://raw.githubusercontent.com/easybyzcreator/imagens/505b7c5b90413702d78478ed51fcb706559cf662/Overwhelmed%20in%20the%20kitchen%20chaos.png"
                alt="Cozinheira administrando marmitaria no caos da rotina"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Footer subtle brand mark */}
      <div className="w-full flex items-center justify-between px-6 sm:px-10 py-3 border-t border-[#424733]/10 text-[11px] text-[#424733]/60 font-montserrat">
        <span>Escola de Gastronomia e Negócios • Chef Gabi</span>
        <span>Tecnologia Easy Byz Creator</span>
      </div>
    </div>
  );
};

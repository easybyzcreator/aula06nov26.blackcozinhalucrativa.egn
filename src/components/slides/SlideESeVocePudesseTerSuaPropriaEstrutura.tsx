import React from 'react';
import { motion } from 'motion/react';
import { SlideHeader } from '../SlideHeader';

interface SlideProps {
  slideNumber: number;
  totalSlides: number;
}

export const SlideESeVocePudesseTerSuaPropriaEstrutura: React.FC<SlideProps> = ({
  slideNumber,
  totalSlides,
}) => {
  return (
    <div className="relative w-full h-full flex flex-col justify-between bg-[#F7F7F5] overflow-hidden">
      {/* Slide Header */}
      <SlideHeader
        category="Autonomia & Solução"
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
            E se você pudesse ter a sua própria estrutura?
          </h1>
        </motion.div>

        {/* 2-Column Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Image standing freely with no box container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-6 flex justify-center items-center relative"
          >
            <img
              src="https://raw.githubusercontent.com/easybyzcreator/imagens/d02f17a74462de77d7085ae6cd416cbd541c490a/patitour%20-%202026-10-22T170538.895.png"
              alt="Empreendedora com seu próprio aplicativo de marmitaria"
              referrerPolicy="no-referrer"
              className="max-h-[380px] sm:max-h-[440px] w-auto object-contain filter drop-shadow-xl select-none"
            />
          </motion.div>

          {/* Right Column: Narrative Copy */}
          <motion.div
            initial={{ opacity: 0, x: 15 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="lg:col-span-6 flex flex-col justify-center space-y-4 sm:space-y-5"
          >
            <p className="text-sm sm:text-base text-[#2B2E22] font-montserrat leading-relaxed">
              E se, em vez de depender somente de plataformas de terceiros, você pudesse ter um aplicativo da sua própria marmitaria?
            </p>

            <p className="text-sm sm:text-base text-[#2B2E22] font-montserrat leading-relaxed">
              Um lugar onde o seu cliente encontra seus produtos, seus preços, suas informações e faz o pedido.
            </p>

            <p className="text-sm sm:text-base text-[#2B2E22] font-montserrat leading-relaxed">
              E onde você também consegue organizar melhor a gestão do seu negócio.
            </p>

            <div className="pt-2">
              <p className="text-sm sm:text-base font-bold text-[#2B2E22] font-montserrat leading-relaxed">
                Foi a partir dessa necessidade que nasceu uma nova solução.
              </p>
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

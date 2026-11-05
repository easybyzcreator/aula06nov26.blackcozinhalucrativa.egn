import React from 'react';
import { motion } from 'motion/react';
import { SlideHeader } from '../SlideHeader';

interface SlideProps {
  slideNumber: number;
  totalSlides: number;
}

export const SlideONegocioQueVoceQuerConstruir: React.FC<SlideProps> = ({
  slideNumber,
  totalSlides,
}) => {
  const cards = [
    {
      title: 'Cardápio sem WhatsApp',
      description:
        'Clientes consultando seus pratos sem precisar perguntar tudo no WhatsApp',
    },
    {
      title: 'Pedidos organizados',
      description: 'Pedidos chegando de forma organizada, sem confusão',
    },
    {
      title: 'Tudo em um só lugar',
      description: 'Fotos, preços e informações dos pratos centralizados',
    },
    {
      title: 'Preparada para crescer',
      description: 'Uma estrutura que acompanha o crescimento da sua marmitaria',
    },
  ];

  return (
    <div className="relative w-full h-full flex flex-col justify-between bg-[#F7F7F5] overflow-hidden">
      {/* Slide Header */}
      <SlideHeader
        category="Visão & Estrutura"
        slideNumber={slideNumber}
        totalSlides={totalSlides}
      />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col justify-center px-6 sm:px-12 lg:px-20 max-w-6xl mx-auto w-full py-4 sm:py-6">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-6 sm:mb-8"
        >
          <h1 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-[#354028] font-aleo tracking-tight">
            O negócio que você quer construir
          </h1>
        </motion.div>

        {/* 2x2 Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 mb-6 sm:mb-8">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 * (index + 1) }}
              className="p-5 sm:p-6 rounded-2xl bg-[#EFECE6] border border-[#424733]/5 shadow-sm flex flex-col justify-center"
            >
              <h2 className="text-lg sm:text-xl font-bold text-[#2B2E22] font-aleo mb-2">
                {card.title}
              </h2>
              <p className="text-xs sm:text-sm text-[#424733] font-montserrat leading-relaxed font-normal">
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom Text */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.5 }}
          className="pt-1"
        >
          <p className="text-sm sm:text-base font-bold text-[#2B2E22] font-montserrat">
            Você não precisa apenas vender mais. Precisa estar preparada para crescer.
          </p>
        </motion.div>
      </div>

      {/* Footer subtle brand mark */}
      <div className="w-full flex items-center justify-between px-6 sm:px-10 py-3 border-t border-[#424733]/10 text-[11px] text-[#424733]/60 font-montserrat">
        <span>Escola de Gastronomia e Negócios • Chef Gabi</span>
        <span>Tecnologia Easy Byz Creator</span>
      </div>
    </div>
  );
};

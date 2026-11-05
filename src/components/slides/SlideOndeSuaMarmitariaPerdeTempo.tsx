import React from 'react';
import { motion } from 'motion/react';
import { SlideHeader } from '../SlideHeader';
import { AlertTriangle } from 'lucide-react';

interface SlideProps {
  slideNumber: number;
  totalSlides: number;
}

export const SlideOndeSuaMarmitariaPerdeTempo: React.FC<SlideProps> = ({
  slideNumber,
  totalSlides,
}) => {
  const cards = [
    {
      title: 'O buraco negro do Excel',
      description:
        'Aquela planilha de custos que fica esquecida porque, depois de horas no fogão, dá preguiça de abrir e preencher.',
    },
    {
      title: 'Vendas perdidas no WhatsApp',
      description:
        'O cliente pede cardápio, preço ou informação nutricional e você precisa parar a produção para responder.',
    },
    {
      title: 'Caderninhos e anotações',
      description:
        'Pedidos e informações espalhados em papéis, blocos de notas e conversas.',
    },
  ];

  return (
    <div className="relative w-full h-full flex flex-col justify-between bg-[#F7F7F5] overflow-hidden">
      {/* Slide Header */}
      <SlideHeader
        category="Diagnóstico & Desafios"
        slideNumber={slideNumber}
        totalSlides={totalSlides}
      />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col justify-center px-6 sm:px-12 lg:px-20 max-w-6xl mx-auto w-full py-4 sm:py-6">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-8 sm:mb-10"
        >
          <h1 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-[#354028] font-aleo tracking-tight">
            Onde sua marmitaria perde tempo — e dinheiro
          </h1>
        </motion.div>

        {/* 3 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 mb-8">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 * (index + 1) }}
              className="relative p-6 sm:p-7 rounded-lg bg-white border border-[#424733]/15 shadow-sm flex flex-col justify-start border-l-[6px] border-l-[#354028]"
            >
              <h2 className="text-lg sm:text-xl font-bold text-[#2B2E22] font-aleo mb-3">
                {card.title}
              </h2>
              <p className="text-xs sm:text-sm text-[#424733] font-montserrat leading-relaxed font-normal">
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Warning Banner at Bottom */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.45 }}
          className="p-4 sm:p-5 rounded-lg bg-[#FBF0C9] border border-[#E6D48F] flex items-center gap-3 text-[#2B2E22] font-montserrat"
        >
          <AlertTriangle className="w-5 h-5 text-[#8C6D1F] shrink-0" />
          <p className="text-xs sm:text-sm leading-relaxed">
            <strong className="font-bold">Resultado:</strong> Cansaço, desorganização, margem incerta e clientes que podem desistir da compra.
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

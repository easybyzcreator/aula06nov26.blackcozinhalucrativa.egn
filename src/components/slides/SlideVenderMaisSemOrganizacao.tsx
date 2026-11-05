import React from 'react';
import { motion } from 'motion/react';
import { SlideHeader } from '../SlideHeader';

interface SlideProps {
  slideNumber: number;
  totalSlides: number;
}

export const SlideVenderMaisSemOrganizacao: React.FC<SlideProps> = ({
  slideNumber,
  totalSlides,
}) => {
  const points = [
    'Mais WhatsApp',
    'Mais interrupções na cozinha',
    'Mais anotações e risco de erros',
    'Menos tempo para produzir',
  ];

  return (
    <div className="relative w-full h-full flex flex-col justify-between bg-[#F7F7F5] overflow-hidden">
      {/* Slide Header */}
      <SlideHeader
        category="Processos & Escala"
        slideNumber={slideNumber}
        totalSlides={totalSlides}
      />

      {/* Main Content */}
      <div className="flex-1 flex flex-col justify-center px-6 sm:px-12 lg:px-20 max-w-7xl mx-auto w-full py-4 sm:py-6">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-6 sm:mb-8"
        >
          <h1 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-bold text-[#354028] font-aleo tracking-tight leading-tight">
            Vender mais sem organização pode aumentar o problema
          </h1>
        </motion.div>

        {/* 2-Column Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Infinity Diagram Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-6 flex flex-col items-center justify-center relative p-2 sm:p-4"
          >
            <img
              src="https://i.ibb.co/8Ldg7jZd/Alimentos-transg-nicos-2.png"
              alt="Ciclo do Infinito - Vender mais sem organização"
              className="w-full max-w-[440px] h-auto object-contain rounded-2xl drop-shadow-sm"
              referrerPolicy="no-referrer"
            />
          </motion.div>

          {/* Right Column: Text & List */}
          <motion.div
            initial={{ opacity: 0, x: 15 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="lg:col-span-6 flex flex-col justify-center space-y-5"
          >
            <p className="text-sm sm:text-base text-[#2B2E22] font-montserrat leading-relaxed">
              Quanto mais clientes chegam, mais mensagens, pedidos, informações e controles você precisa administrar.
            </p>

            <ul className="space-y-2.5 my-2">
              {points.map((point, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.25 + index * 0.06 }}
                  className="flex items-center gap-3 text-sm sm:text-base text-[#2B2E22] font-montserrat"
                >
                  <span className="w-2 h-2 rounded-full bg-[#2B2E22] shrink-0" />
                  <span>{point}</span>
                </motion.li>
              ))}
            </ul>

            <div className="pt-2">
              <p className="text-sm sm:text-base font-bold text-[#2B2E22] font-montserrat leading-relaxed">
                Para crescer, sua marmitaria precisa de processo e ferramenta.
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

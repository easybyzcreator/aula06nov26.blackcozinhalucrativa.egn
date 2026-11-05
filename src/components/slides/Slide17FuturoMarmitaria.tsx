import React from 'react';
import { motion } from 'motion/react';
import { SlideHeader } from '../SlideHeader';
import { Store, Smartphone, AlertCircle, CheckCircle2, TrendingUp } from 'lucide-react';

interface SlideProps {
  slideNumber: number;
  totalSlides: number;
}

export const Slide17FuturoMarmitaria: React.FC<SlideProps> = ({
  slideNumber,
  totalSlides,
}) => {
  const marketplacePoints = [
    'Pode funcionar como vitrine e ajudar na primeira venda',
    'Taxas de 12% a mais de 30% sobre cada pedido',
    'Sua operação depende das regras da plataforma',
    'A base de clientes fica vinculada ao ambiente do marketplace',
  ];

  const appProprioPoints = [
    'Estrutura personalizada para sua marmitaria',
    'Cardápio, pedidos e gestão financeira em um só lugar',
    'Sem percentual da ferramenta sobre cada venda',
    'Modelo de parcela mensal fixa',
  ];

  return (
    <div className="relative w-full h-full flex flex-col justify-between bg-[#F8F8F5] overflow-hidden">
      <SlideHeader
        category="Estratégia de Crescimento"
        slideNumber={slideNumber}
        totalSlides={totalSlides}
      />

      <div className="flex-1 px-6 sm:px-10 lg:px-14 py-4 flex flex-col justify-center max-w-6xl mx-auto w-full">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6 sm:mb-8"
        >
          <h1 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-bold text-[#354028] font-aleo tracking-tight leading-tight">
            Onde você quer construir o futuro da sua marmitaria?
          </h1>
        </motion.div>

        {/* 2 Column Comparison Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-6">
          {/* Marketplace Column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="p-6 sm:p-7 rounded-2xl bg-white border border-[#424733]/15 shadow-sm flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-2 pb-4 mb-4 border-b border-[#424733]/10">
                <Store className="w-5 h-5 text-[#613C26]" />
                <h2 className="text-sm sm:text-base font-bold text-[#613C26] uppercase tracking-wider font-montserrat">
                  MARKETPLACE
                </h2>
              </div>

              <ul className="space-y-3.5">
                {marketplacePoints.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#613C26] mt-2 shrink-0" />
                    <span className="text-xs sm:text-sm text-[#424733] font-montserrat leading-relaxed">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Aplicativo Próprio Column */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="p-6 sm:p-7 rounded-2xl bg-[#EBEBE4] border-2 border-[#859159] shadow-md flex flex-col justify-between relative overflow-hidden"
          >
            <div>
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#859159]/30">
                <div className="flex items-center gap-2">
                  <Smartphone className="w-5 h-5 text-[#354028]" />
                  <h2 className="text-sm sm:text-base font-bold text-[#354028] uppercase tracking-wider font-montserrat flex items-center gap-1.5">
                    APLICATIVO PRÓPRIO <span className="text-[#859159]">✓</span>
                  </h2>
                </div>
                <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-[#859159] text-white font-montserrat">
                  Recomendado
                </span>
              </div>

              <ul className="space-y-3.5">
                {appProprioPoints.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#354028] mt-2 shrink-0" />
                    <span className="text-xs sm:text-sm text-[#2B2E22] font-semibold font-montserrat leading-relaxed">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Bottom Callout */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="p-4 rounded-xl bg-white border border-[#424733]/15 shadow-xs text-center"
        >
          <p className="text-sm sm:text-base font-bold text-[#354028] font-montserrat">
            Quanto mais você cresce, mais importante se torna construir uma estrutura própria.
          </p>
        </motion.div>
      </div>

      <div className="w-full flex items-center justify-between px-6 sm:px-10 py-3 border-t border-[#424733]/10 text-[11px] text-[#424733]/60 font-montserrat bg-white/50">
        <span>Slide {slideNumber} • Onde você quer construir o futuro da sua marmitaria?</span>
        <span>Escola de Gastronomia e Negócios • Easy Byz Creator</span>
      </div>
    </div>
  );
};

import React from 'react';
import { motion } from 'motion/react';
import { SlideHeader } from '../SlideHeader';
import { Camera, Tag, Apple, ShoppingCart } from 'lucide-react';

interface SlideProps {
  slideNumber: number;
  totalSlides: number;
}

export const SlideSeuCardapioDigitalInterativo: React.FC<SlideProps> = ({
  slideNumber,
  totalSlides,
}) => {
  const features = [
    {
      icon: Camera,
      title: '✓ Fotos dos pratos com descrições',
      description: 'Apresentação visual profissional de cada prato',
    },
    {
      icon: Tag,
      title: '✓ Valores e combos de marmitas',
      description: 'Preços claros e combos organizados para facilitar a escolha',
    },
    {
      icon: Apple,
      title: '✓ Tabela nutricional completa',
      description: 'Macros e calorias disponíveis para a cliente decidir com segurança',
    },
    {
      icon: ShoppingCart,
      title: '✓ Pedidos sem espera',
      description: 'Em vez de listas confusas e dezenas de mensagens, tudo em um único link',
    },
  ];

  return (
    <div className="relative w-full h-full flex flex-col justify-between bg-[#F7F7F5] overflow-hidden">
      {/* Slide Header */}
      <SlideHeader
        category="Cardápio Digital & Recursos"
        slideNumber={slideNumber}
        totalSlides={totalSlides}
      />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col justify-center px-6 sm:px-12 lg:px-20 max-w-6xl mx-auto w-full py-4 sm:py-6">
        {/* Title & Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-8 sm:mb-10"
        >
          <h1 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-[#354028] font-aleo tracking-tight leading-tight mb-2">
            Seu Cardápio Digital Interativo
          </h1>
          <p className="text-sm sm:text-base text-[#424733] font-montserrat">
            Uma vitrine profissional da sua marmitaria disponível 24 horas por dia.
          </p>
        </motion.div>

        {/* 2x2 Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 lg:gap-x-16 gap-y-8 sm:gap-y-10">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 * (index + 1) }}
                className="flex flex-col space-y-2"
              >
                <div className="w-10 h-10 flex items-center justify-start text-[#354028]">
                  <IconComponent className="w-7 h-7 stroke-[1.75]" />
                </div>
                <h2 className="text-base sm:text-lg font-bold text-[#2B2E22] font-montserrat tracking-tight">
                  {feature.title}
                </h2>
                <p className="text-xs sm:text-sm text-[#424733] font-montserrat leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
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

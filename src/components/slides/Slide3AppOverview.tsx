import React from 'react';
import { motion } from 'motion/react';
import { SlideHeader } from '../SlideHeader';
import { PhoneMockup } from '../PhoneMockup';
import { ASSETS } from '../../slidesData';
import { Sparkles, Utensils, DollarSign, Smartphone, Layers, CheckCircle2 } from 'lucide-react';

interface SlideProps {
  slideNumber: number;
  totalSlides: number;
}

export const Slide3AppOverview: React.FC<SlideProps> = ({ slideNumber, totalSlides }) => {
  const points = [
    { title: 'Seu cardápio digital', desc: 'Vitrine moderna com fotos e detalhes dos seus pratos' },
    { title: 'Seus pratos, preços e pedidos', desc: 'Tudo organizado para a cliente comprar sem atrito' },
    { title: 'Sua gestão financeira', desc: 'Controle de custos, despesas, entradas e lucro diário' },
    { title: 'Acesso pelo celular — sem instalação complicada', desc: 'Funciona direto no navegador ou como app no smartphone' },
    { title: 'Interface simples e intuitiva', desc: 'Pensada para quem tem a mão ocupada na cozinha' },
  ];

  return (
    <div className="relative w-full h-full flex flex-col justify-between bg-[#F8F8F6] overflow-hidden">
      <SlideHeader
        category="A grande solução"
        slideNumber={slideNumber}
        totalSlides={totalSlides}
      />

      <div className="flex-1 px-6 sm:px-10 lg:px-12 py-3 flex items-center max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center w-full">
          {/* Left Column: Phone Mockup showcasing app home screen (5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 flex flex-col items-center justify-center"
          >
            <div className="relative">
              {/* Decorative aura */}
              <div className="absolute inset-0 bg-[#859159]/20 rounded-full blur-2xl -z-10 scale-95" />
              
              <PhoneMockup
                imageSrc={ASSETS.screens.telaInicial}
                altText="Tela inicial do aplicativo da sua marmitaria"
                badge="Tela inicial do app"
                caption="Interface clean, intuitiva e prática"
                accentColor="#859159"
                size="md"
              />
            </div>
          </motion.div>

          {/* Right Column: Title & Bullet Points matching Image 1 (7 cols) */}
          <div className="lg:col-span-7 flex flex-col space-y-4">
            <div>
              <motion.h1
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-[#354028] font-aleo leading-tight tracking-tight"
              >
                O aplicativo da sua marmitaria
              </motion.h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.15 }}
                className="text-sm sm:text-base text-[#424733] font-montserrat mt-2 leading-relaxed"
              >
                Uma estrutura exclusiva e personalizada para profissionalizar suas vendas e sua gestão.
              </motion.p>
            </div>

            {/* Bullet Points */}
            <div className="space-y-2.5 pt-2">
              {points.map((point, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.35, delay: 0.15 + idx * 0.08 }}
                  className="flex items-start gap-3 p-2.5 sm:p-3 rounded-xl bg-white border border-[#424733]/10 shadow-xs hover:border-[#859159]/40 transition-colors"
                >
                  <div className="w-2 h-2 rounded-full bg-[#354028] mt-2 shrink-0" />
                  <div>
                    <h3 className="text-sm sm:text-base font-semibold text-[#2B2E22] font-montserrat">
                      {point.title}
                    </h3>
                    <p className="text-xs text-[#424733]/70 font-montserrat mt-0.5">
                      {point.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Bottom highlight pill */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.55 }}
              className="flex items-center gap-2 text-xs text-[#424733] bg-[#EBEBE4] px-4 py-2.5 rounded-xl border border-[#424733]/10 font-montserrat font-medium"
            >
              <CheckCircle2 className="w-4 h-4 text-[#859159] shrink-0" />
              <span>Desenvolvido especialmente para o fluxo prático de cozinhas e marmitarias</span>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="px-6 sm:px-10 py-2 border-t border-[#424733]/10 bg-white/50 text-[11px] text-[#424733]/60 flex justify-between font-montserrat">
        <span>Slide {slideNumber} • O aplicativo da sua marmitaria</span>
        <span>Escola de Gastronomia & Negócios • Easy Byz Creator</span>
      </div>
    </div>
  );
};

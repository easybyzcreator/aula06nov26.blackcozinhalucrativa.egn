import React from 'react';
import { motion } from 'motion/react';
import { ASSETS } from '../../slidesData';
import { Sparkles, Utensils, Smartphone, ChefHat, ArrowRight } from 'lucide-react';

interface SlideProps {
  onNext?: () => void;
}

export const Slide1Cover: React.FC<SlideProps> = ({ onNext }) => {
  return (
    <div className="relative w-full h-full flex flex-col justify-between p-6 sm:p-10 lg:p-12 overflow-hidden bg-gradient-to-br from-[#F5F5F3] via-[#EAECE6] to-[#DFE3D5]">
      {/* Decorative ambient background shapes */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#859159]/15 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#A38C66]/15 rounded-full blur-2xl pointer-events-none -ml-20 -mb-20" />

      {/* Top Header Logos */}
      <div className="relative z-10 flex items-center justify-between">
        <div className="flex items-center gap-3 sm:gap-6 bg-white/70 backdrop-blur-md px-4 sm:px-5 py-2.5 rounded-2xl shadow-sm border border-[#424733]/10">
          {/* Logo EGNN */}
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-full overflow-hidden border border-[#424733]/20 shadow-sm shrink-0 flex items-center justify-center bg-[#2B2E22]">
              <img
                src={ASSETS.logos.egnn}
                alt="Escola de Gastronomia e Negócios"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="hidden sm:flex flex-col text-left">
              <span className="text-xs font-black tracking-tight text-[#424733]">
                ESCOLA DE GASTRONOMIA
              </span>
              <span className="text-[10px] font-bold text-[#859159] tracking-widest uppercase">
                E NEGÓCIOS
              </span>
            </div>
          </div>

          <div className="h-6 w-px bg-[#424733]/20" />

          {/* Logo Easy Byz */}
          <div className="flex items-center gap-2.5">
            <img
              src={ASSETS.logos.easyByz}
              alt="Easy Byz Creator"
              className="h-8 sm:h-10 object-contain"
              referrerPolicy="no-referrer"
            />
            <div className="hidden sm:flex flex-col text-left">
              <span className="text-xs font-black tracking-tight text-[#613C26]">
                EASY BYZ CREATOR
              </span>
              <span className="text-[10px] font-bold text-[#A38C66] tracking-widest uppercase">
                APPS DE GESTÃO
              </span>
            </div>
          </div>
        </div>

        {/* Exclusive Tag */}
        <div className="hidden md:flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#424733] text-white text-xs font-semibold shadow-sm">
          <ChefHat className="w-3.5 h-3.5 text-[#859159]" />
          <span>Aula Especial & Parceria Oficial</span>
        </div>
      </div>

      {/* Main Hero Content Area */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center my-auto">
        {/* Left Column: Headings & Bullet Topics (7 cols) */}
        <div className="lg:col-span-7 flex flex-col text-left space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1 bg-[#859159]/20 border border-[#859159]/40 rounded-full text-xs font-bold text-[#424733] uppercase tracking-wider w-fit font-montserrat"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#859159]" />
            Metodologia validada + tecnologia
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-[42px] xl:text-[46px] font-black text-[#424733] leading-[1.15] tracking-tight font-heading"
          >
            Da metodologia da escola para a <span className="text-[#859159] underline decoration-[#A38C66]/40 underline-offset-6">palma da sua mão</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base sm:text-lg text-[#613C26] font-medium leading-relaxed max-w-xl font-montserrat"
          >
            Como transformar o que você aprendeu com a <strong>Chef Gabi</strong> em vendas diárias, margem de lucro real e organização sem complicação.
          </motion.p>

          {/* Key Topics Cards */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2"
          >
            <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white/80 border border-[#424733]/10 shadow-sm">
              <div className="p-2 rounded-lg bg-[#424733] text-white shrink-0">
                <Utensils className="w-4 h-4 text-[#859159]" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-[#424733] font-aleo">Conhecimento na prática</h4>
                <p className="text-xs text-[#424733]/80 mt-0.5 leading-snug font-montserrat font-light">
                  O seu conhecimento na cozinha agora com uma ferramenta de gestão à altura.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white/80 border border-[#424733]/10 shadow-sm">
              <div className="p-2 rounded-lg bg-[#859159] text-white shrink-0">
                <Smartphone className="w-4 h-4 text-white" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-[#424733] font-aleo">Tecnologia sob medida</h4>
                <p className="text-xs text-[#424733]/80 mt-0.5 leading-snug font-montserrat font-light">
                  A tecnologia feita sob medida para a rotina intensa da marmitaria.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right Column: Speaker & Partnership Showcase (5 cols) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="lg:col-span-5 flex flex-col items-center justify-center relative"
        >
          {/* Dual Profile Card */}
          <div className="w-full max-w-md bg-white/85 backdrop-blur-md rounded-3xl p-5 sm:p-6 border border-[#424733]/15 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#859159]/20 rounded-full blur-xl pointer-events-none" />

            <div className="text-center mb-4">
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#A38C66] font-montserrat">
                Especialistas da aula
              </span>
              <h3 className="text-sm font-bold text-[#424733] mt-0.5 font-aleo">
                Gastronomia de excelência & tecnologia de gestão
              </h3>
            </div>

            {/* Photos Grid */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {/* Chef Gabi */}
              <div className="flex flex-col items-center text-center p-3 rounded-2xl bg-[#F5F5F3] border border-[#424733]/10 transition-transform hover:-translate-y-1 duration-300">
                <div className="relative mb-2">
                  <div className="w-20 h-24 sm:w-24 sm:h-28 rounded-2xl overflow-hidden border-2 border-[#859159] shadow-md bg-[#424733]">
                    <img
                      src={ASSETS.people.chefGabi}
                      alt="Chef Gabi"
                      className="w-full h-full object-cover object-top"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>
                <h4 className="text-xs sm:text-sm font-black text-[#424733] font-aleo">
                  Chef Gabi
                </h4>
                <span className="text-[10px] font-semibold text-[#859159] mt-0.5 font-montserrat">
                  Escola de Gastronomia & Negócios
                </span>
                <span className="text-[9px] text-[#613C26] mt-1 bg-white px-2 py-0.5 rounded-md border border-[#424733]/10 font-medium font-montserrat">
                  Metodologia & Cardápio
                </span>
              </div>

              {/* Pati */}
              <div className="flex flex-col items-center text-center p-3 rounded-2xl bg-[#F5F5F3] border border-[#424733]/10 transition-transform hover:-translate-y-1 duration-300">
                <div className="relative mb-2">
                  <div className="w-20 h-24 sm:w-24 sm:h-28 rounded-2xl overflow-hidden border-2 border-[#A38C66] shadow-md bg-[#F5F5F3]">
                    <img
                      src={ASSETS.people.pati}
                      alt="Pati"
                      className="w-full h-full object-cover object-top [object-position:50%_0%]"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>
                <h4 className="text-xs sm:text-sm font-black text-[#424733] font-aleo">
                  Pati
                </h4>
                <span className="text-[10px] font-semibold text-[#613C26] mt-0.5">
                  Easy Byz Creator
                </span>
                <span className="text-[9px] text-[#859159] mt-1 bg-white px-2 py-0.5 rounded-md border border-[#424733]/10 font-medium">
                  Criadora do Aplicativo
                </span>
              </div>
            </div>

            {/* Bottom mini badge */}
            <div className="mt-4 pt-3 border-t border-[#424733]/10 flex items-center justify-between text-[11px] text-[#424733]/80">
              <span className="font-semibold">Solução para Marmitarias</span>
              <span className="font-bold text-[#859159]">100% no Celular</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Footer bar on Cover */}
      <div className="relative z-10 pt-3 border-t border-[#424733]/15 flex items-center justify-between text-xs text-[#424733]/70">
        <div className="flex items-center gap-2 font-medium">
          <span className="w-2 h-2 rounded-full bg-[#859159] animate-pulse" />
          <span>Apresentação Oficial para Alunas da Formação</span>
        </div>

        {onNext && (
          <button
            onClick={onNext}
            className="flex items-center gap-1.5 px-4 py-1.5 bg-[#424733] hover:bg-[#859159] text-white text-xs font-bold rounded-lg shadow-sm transition-all duration-200"
          >
            Iniciar Aula <ArrowRight className="w-3.5 h-3.5" />
          </button>
        )}
      </div>
    </div>
  );
};

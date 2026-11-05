import React from 'react';
import { motion } from 'motion/react';
import { ASSETS } from '../../slidesData';
import { Sparkles, Utensils, Smartphone, ChefHat, ArrowRight, CheckCircle2, TrendingUp } from 'lucide-react';

interface SlideProps {
  onNext?: () => void;
}

export const Slide1CardapioCover: React.FC<SlideProps> = ({ onNext }) => {
  return (
    <div className="relative w-full h-full flex flex-col justify-between p-6 sm:p-10 lg:p-12 overflow-hidden bg-gradient-to-br from-[#F6F7F3] via-[#ECEDE7] to-[#DFE3D5]">
      {/* Decorative ambient background shapes */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#859159]/15 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#A38C66]/15 rounded-full blur-2xl pointer-events-none -ml-20 -mb-20" />

      {/* Top Header Logos */}
      <div className="relative z-10 flex items-center justify-between">
        <div className="flex items-center gap-3 sm:gap-6 bg-white/75 backdrop-blur-md px-4 sm:px-5 py-2.5 rounded-2xl shadow-sm border border-[#424733]/10">
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
        <div className="hidden md:flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#424733] text-white text-xs font-semibold shadow-sm font-montserrat">
          <ChefHat className="w-3.5 h-3.5 text-[#859159]" />
          <span>Aula Especial / BLACK Cozinha Lucrativa</span>
        </div>
      </div>

      {/* Main Hero Content Area */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center my-auto">
        {/* Left Column: Headings & Value Pillars (7 cols) */}
        <div className="lg:col-span-7 flex flex-col text-left space-y-4">

          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-[44px] xl:text-[48px] font-black text-[#424733] leading-[1.12] tracking-tight font-heading"
          >
            O Poder do <span className="text-[#859159] underline decoration-[#A38C66]/40 underline-offset-6">Cardápio Digital</span> na Marmitaria
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base sm:text-lg text-[#613C26] font-medium leading-relaxed max-w-xl font-montserrat"
          >
            Como organizar seus pedidos, facilitar suas vendas e profissionalizar o seu negócio de marmitas.
          </motion.p>

          {/* 3 Core Value Pills */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-1"
          >
            <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white/85 border border-[#424733]/10 shadow-sm">
              <div className="p-1.5 rounded-lg bg-[#424733] text-[#859159] shrink-0">
                <CheckCircle2 className="w-4 h-4" />
              </div>
              <div className="text-left">
                <h4 className="text-xs font-bold text-[#424733] font-aleo leading-tight">Organizar</h4>
                <p className="text-[11px] text-[#424733]/70 font-montserrat">Zero confusão</p>
              </div>
            </div>

            <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white/85 border border-[#424733]/10 shadow-sm">
              <div className="p-1.5 rounded-lg bg-[#859159] text-white shrink-0">
                <Smartphone className="w-4 h-4" />
              </div>
              <div className="text-left">
                <h4 className="text-xs font-bold text-[#424733] font-aleo leading-tight">Facilitar</h4>
                <p className="text-[11px] text-[#424733]/70 font-montserrat">Venda ágil 24/7</p>
              </div>
            </div>

            <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white/85 border border-[#424733]/10 shadow-sm">
              <div className="p-1.5 rounded-lg bg-[#A38C66] text-white shrink-0">
                <TrendingUp className="w-4 h-4" />
              </div>
              <div className="text-left">
                <h4 className="text-xs font-bold text-[#424733] font-aleo leading-tight">Profissionalizar</h4>
                <p className="text-[11px] text-[#424733]/70 font-montserrat">Mais autoridade</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right Column: Specialist Showcase (5 cols) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="lg:col-span-5 flex flex-col items-center justify-center relative"
        >
          {/* Pati Profile Card */}
          <div className="w-full max-w-sm bg-white/85 backdrop-blur-md rounded-3xl p-5 sm:p-6 border border-[#424733]/15 shadow-xl relative overflow-hidden text-center">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#859159]/20 rounded-full blur-xl pointer-events-none" />

            <div className="flex flex-col items-center">
              <div className="relative mb-3">
                <div className="w-28 h-32 sm:w-32 sm:h-36 rounded-2xl overflow-hidden border-2 border-[#A38C66] shadow-lg bg-[#F5F5F3]">
                  <img
                    src={ASSETS.people.pati}
                    alt="Pati"
                    className="w-full h-full object-cover object-top [object-position:50%_0%]"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>

              <h3 className="text-lg font-black text-[#424733] font-aleo">
                Pati
              </h3>
              <span className="text-xs font-semibold text-[#613C26] mt-0.5 font-montserrat">
                Easy Byz Creator
              </span>

              <div className="mt-2.5 px-3 py-1.5 rounded-xl bg-[#F5F5F3] border border-[#424733]/10 max-w-xs">
                <p className="text-xs text-[#424733] font-medium leading-tight font-montserrat">
                  Especialista em aplicativos e soluções para o seu negócio
                </p>
              </div>
            </div>

            {/* Bottom mini badge */}
            <div className="mt-4 pt-3 border-t border-[#424733]/10 flex items-center justify-between text-[11px] text-[#424733]/80 font-montserrat">
              <span className="font-semibold">Transforme seu Negócio</span>
              <span className="font-bold text-[#859159]">100% no Celular</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Footer bar on Cover */}
      <div className="relative z-10 pt-3 border-t border-[#424733]/15 flex items-center justify-between text-xs text-[#424733]/70 font-montserrat">
        <div className="flex items-center gap-2 font-medium">
          <span className="w-2 h-2 rounded-full bg-[#859159] animate-pulse" />
          <span>Aula Especial / BLACK Cozinha Lucrativa</span>
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

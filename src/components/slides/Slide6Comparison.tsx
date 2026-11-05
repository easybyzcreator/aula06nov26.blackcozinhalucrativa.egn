import React from 'react';
import { motion } from 'motion/react';
import { SlideHeader } from '../SlideHeader';
import { XCircle, CheckCircle2, Zap, Clock, Sparkles, Smartphone, Utensils, MessageSquare } from 'lucide-react';

interface SlideProps {
  slideNumber: number;
  totalSlides: number;
}

export const Slide6Comparison: React.FC<SlideProps> = ({ slideNumber, totalSlides }) => {
  return (
    <div className="relative w-full h-full flex flex-col justify-between bg-[#F7F7F4] overflow-hidden">
      <SlideHeader
        category="Comparativo prático"
        slideNumber={slideNumber}
        totalSlides={totalSlides}
      />

      <div className="flex-1 px-6 sm:px-10 lg:px-12 py-3 flex flex-col justify-center max-w-7xl mx-auto w-full">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#859159]/20 text-[#424733] rounded-full text-xs font-bold uppercase tracking-wider mb-1.5 font-montserrat">
            <Sparkles className="w-3.5 h-3.5 text-[#859159]" />
            Transformação operacional
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-[#424733] font-heading">
            A evolução da sua marmitaria na prática
          </h2>
          <p className="text-xs sm:text-sm text-[#424733]/80 font-montserrat font-light">
            A sua rotina de marmitaria antes e depois da tecnologia:
          </p>
        </div>

        {/* Side-by-Side Comparison Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6 mb-4">
          {/* Card: Como é Hoje */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="p-5 sm:p-6 rounded-2xl bg-white border-2 border-[#613C26]/20 shadow-sm flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#613C26]/15">
                <div className="flex items-center gap-2">
                  <div className="p-2 rounded-lg bg-[#613C26]/10 text-[#613C26]">
                    <XCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#613C26] font-montserrat">
                      Cenário atual
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-[#424733] font-aleo">
                      ANTES ✕
                    </h3>
                  </div>
                </div>
                <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-[#613C26]/10 text-[#613C26] font-montserrat">
                  Tradicional / Lento
                </span>
              </div>

              {/* Items */}
              <ul className="space-y-2.5 text-xs sm:text-sm text-[#424733]/90 font-montserrat font-light">
                <li className="flex items-start gap-2.5">
                  <span className="text-[#613C26] font-bold text-base leading-none">✕</span>
                  <span>Caderninho e bloco de notas</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#613C26] font-bold text-base leading-none">✕</span>
                  <span>Planilhas esquecidas e dados desatualizados</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#613C26] font-bold text-base leading-none">✕</span>
                  <span>Produção interrompida pelo WhatsApp</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#613C26] font-bold text-base leading-none">✕</span>
                  <span>Margem incerta</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#613C26] font-bold text-base leading-none">✕</span>
                  <span>Cliente esperando resposta</span>
                </li>
              </ul>
            </div>

            <div className="mt-4 pt-3 border-t border-[#424733]/10 text-[11px] text-[#613C26] font-medium bg-[#613C26]/5 p-2 rounded-lg text-center font-montserrat">
              ⚠️ Resultado: Cansaço extremo, margem incerta e clientes desistindo.
            </div>
          </motion.div>

          {/* Card: Com o App da Escola */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="p-5 sm:p-6 rounded-2xl bg-white border-2 border-[#859159] shadow-lg flex flex-col justify-between relative overflow-hidden"
          >
            {/* Top highlight bar */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#424733] to-[#859159]" />

            <div>
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#859159]/20">
                <div className="flex items-center gap-2">
                  <div className="p-2 rounded-lg bg-[#859159]/20 text-[#859159]">
                    <CheckCircle2 className="w-5 h-5 text-[#859159]" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#859159] font-montserrat">
                      Cenário novo
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-[#424733] font-aleo">
                      DEPOIS ✓
                    </h3>
                  </div>
                </div>
                <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-[#859159] text-white shadow-sm font-montserrat">
                  Moderno & Eficiente
                </span>
              </div>

              {/* Items */}
              <ul className="space-y-2.5 text-xs sm:text-sm text-[#424733]/90 font-montserrat font-light">
                <li className="flex items-start gap-2.5">
                  <span className="text-[#859159] font-bold text-base leading-none">✓</span>
                  <span>Cardápio digital 24h</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#859159] font-bold text-base leading-none">✓</span>
                  <span>Pedidos organizados</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#859159] font-bold text-base leading-none">✓</span>
                  <span>Gestão financeira na mão</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#859159] font-bold text-base leading-none">✓</span>
                  <span>Informações centralizadas</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#859159] font-bold text-base leading-none">✓</span>
                  <span>Mais autonomia para a cliente comprar</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#859159] font-bold text-base leading-none">✓</span>
                  <span>Mais tempo para você produzir e administrar</span>
                </li>
              </ul>
            </div>

            <div className="mt-4 pt-3 border-t border-[#859159]/20 text-[11px] text-[#424733] font-semibold bg-[#859159]/15 p-2 rounded-lg text-center font-montserrat">
              ✨ Resultado: Mais vendas, autoridade no mercado e lucro garantido!
            </div>
          </motion.div>
        </div>

        {/* Highlight Banner: Vendas no Piloto Automático (24/7) */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.25 }}
          className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-[#424733] via-[#353928] to-[#424733] text-white shadow-xl border border-[#859159]/40 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-48 h-48 bg-[#859159]/20 rounded-full blur-2xl pointer-events-none" />

          <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3 text-center sm:text-left">
              <div className="p-3 rounded-2xl bg-[#859159] text-white shrink-0 shadow-md">
                <Zap className="w-6 h-6 animate-pulse" />
              </div>
              <div>
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#859159]/30 text-[#859159] text-[11px] font-extrabold uppercase tracking-wider mb-1 font-montserrat">
                  <Clock className="w-3 h-3" />
                  Funciona 24 horas por dia
                </div>
                <h4 className="text-base sm:text-lg font-bold text-white font-aleo">
                  Vendas no piloto automático (24/7)
                </h4>
                <p className="text-xs sm:text-sm text-[#F0F0F0]/85 font-montserrat font-light mt-0.5 leading-snug max-w-2xl">
                  O app funciona 24 horas por dia. O cliente consulta o cardápio, faz o pedido sozinho e os pedidos chegam organizados para você, sem interromper sua cozinha.
                </p>
              </div>
            </div>

            <div className="shrink-0 bg-white/10 px-4 py-2 rounded-xl text-center border border-white/10 font-montserrat">
              <span className="text-xs text-[#A38C66] font-bold uppercase tracking-wider block">Seu negócio</span>
              <span className="text-sm font-bold text-white">Sempre aberto</span>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="px-6 sm:px-10 py-2 border-t border-[#424733]/10 bg-white/50 text-[11px] text-[#424733]/60 flex justify-between font-montserrat">
        <span>Slide 6 • Comparativo técnico</span>
        <span>Marmitaria tradicional vs. Marmitaria com app</span>
      </div>
    </div>
  );
};

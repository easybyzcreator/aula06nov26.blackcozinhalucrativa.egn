import React, { useState } from 'react';
import { motion } from 'motion/react';
import { SlideHeader } from '../SlideHeader';
import { CardMockup } from '../CardMockup';
import { ASSETS } from '../../slidesData';
import { FileSpreadsheet, Zap, PieChart } from 'lucide-react';

interface SlideProps {
  slideNumber: number;
  totalSlides: number;
}

export const Slide4Financial: React.FC<SlideProps> = ({ slideNumber, totalSlides }) => {
  const [activeTab, setActiveTab] = useState<'both' | 'screen1' | 'screen2'>('both');

  const topics = [
    {
      title: 'A planilha da Escola no celular',
      description: 'A mesma estrutura financeira que antes estava no Excel, agora em formato de aplicativo — sem risco de desconfigurar fórmulas',
      icon: FileSpreadsheet,
    },
    {
      title: 'Modo simplificado',
      description: 'Registre despesas e receitas em menos de 10 segundos',
      icon: Zap,
    },
    {
      title: 'Controle de caixa',
      description: 'Saiba exatamente o que entrou, o que saiu e qual é o seu lucro real do dia',
      icon: PieChart,
    }
  ];

  return (
    <div className="relative w-full h-full flex flex-col justify-between bg-[#F7F7F4] overflow-hidden">
      <SlideHeader
        category="Módulo Financeiro"
        slideNumber={slideNumber}
        totalSlides={totalSlides}
      />

      <div className="flex-1 px-6 sm:px-10 lg:px-12 py-3 flex items-center max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center w-full">
          {/* Left Column: Headings & Bullets (6 cols) */}
          <div className="lg:col-span-6 flex flex-col space-y-4">
            <div>
              <motion.h1
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-2xl sm:text-3xl lg:text-[34px] font-bold text-[#354028] font-aleo leading-tight tracking-tight"
              >
                A gestão financeira também vai para a palma da sua mão
              </motion.h1>

              <p className="text-xs sm:text-sm text-[#424733] font-montserrat mt-2 leading-relaxed">
                Toda a lógica financeira ensinada pela Escola aplicada em uma interface prática e descomplicada.
              </p>
            </div>

            {/* Topics with exact bullet points from Image 3 */}
            <div className="space-y-3 pt-1">
              {topics.map((t, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -15 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.35, delay: 0.15 + idx * 0.1 }}
                  className="p-3.5 rounded-2xl bg-white border border-[#424733]/10 shadow-xs flex items-start gap-3 hover:border-[#859159]/40 transition-colors"
                >
                  <div className="w-2 h-2 rounded-full bg-[#354028] mt-2 shrink-0" />
                  <div>
                    <p className="text-xs sm:text-sm font-montserrat text-[#2B2E22] leading-relaxed">
                      <strong className="font-bold">{t.title}:</strong> {t.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Quick view filter buttons */}
            <div className="flex items-center gap-2 pt-1 font-montserrat">
              <span className="text-[11px] font-semibold text-[#424733]/70">Visualizar telas:</span>
              <button
                onClick={() => setActiveTab('both')}
                className={`text-[11px] px-2.5 py-1 rounded-lg font-bold transition-all ${
                  activeTab === 'both'
                    ? 'bg-[#424733] text-white shadow-sm'
                    : 'bg-white text-[#424733] border border-[#424733]/15 hover:bg-[#F0F0F0]'
                }`}
              >
                Ambas as telas
              </button>
              <button
                onClick={() => setActiveTab('screen1')}
                className={`text-[11px] px-2.5 py-1 rounded-lg font-bold transition-all ${
                  activeTab === 'screen1'
                    ? 'bg-[#859159] text-white shadow-sm'
                    : 'bg-white text-[#424733] border border-[#424733]/15 hover:bg-[#F0F0F0]'
                }`}
              >
                Fluxo diário
              </button>
              <button
                onClick={() => setActiveTab('screen2')}
                className={`text-[11px] px-2.5 py-1 rounded-lg font-bold transition-all ${
                  activeTab === 'screen2'
                    ? 'bg-[#613C26] text-white shadow-sm'
                    : 'bg-white text-[#424733] border border-[#424733]/15 hover:bg-[#F0F0F0]'
                }`}
              >
                Margem real
              </button>
            </div>
          </div>

          {/* Right Column: Square/Card Formatted Screen Previews (6 cols) */}
          <div className="lg:col-span-6 flex items-center justify-center">
            {activeTab === 'both' ? (
              <div className="grid grid-cols-2 gap-3 sm:gap-4 w-full max-w-lg items-start">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                  className="flex justify-center"
                >
                  <CardMockup
                    imageSrc={ASSETS.screens.financeiro1}
                    altText="Tela de fluxo financeiro"
                    badge="Fluxo diário"
                    caption="Entradas, saídas e saldo instantâneo"
                    accentColor="#859159"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                  className="flex justify-center"
                >
                  <CardMockup
                    imageSrc={ASSETS.screens.financeiro2}
                    altText="Tela de margem de lucro"
                    badge="Margem real"
                    caption="Cálculo de custos e lucro líquido"
                    accentColor="#613C26"
                  />
                </motion.div>
              </div>
            ) : activeTab === 'screen1' ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="w-full max-w-sm flex justify-center"
              >
                <CardMockup
                  imageSrc={ASSETS.screens.financeiro1}
                  altText="Tela de fluxo financeiro"
                  badge="Controle de caixa na hora"
                  caption="Visão completa das transações e saldos do dia a dia da marmitaria"
                  accentColor="#859159"
                />
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="w-full max-w-sm flex justify-center"
              >
                <CardMockup
                  imageSrc={ASSETS.screens.financeiro2}
                  altText="Tela de custos e margem"
                  badge="Estrutura de custos da escola"
                  caption="A mesma tabela em Excel da Chef Gabi, automatizada no app"
                  accentColor="#613C26"
                />
              </motion.div>
            )}
          </div>
        </div>
      </div>

      <div className="px-6 sm:px-10 py-2 border-t border-[#424733]/10 bg-white/50 text-[11px] text-[#424733]/60 flex justify-between font-montserrat">
        <span>Slide {slideNumber} • A gestão financeira na palma da sua mão</span>
        <span>Escola de Gastronomia & Negócios • Easy Byz Creator</span>
      </div>
    </div>
  );
};

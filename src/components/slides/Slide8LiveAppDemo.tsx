import React, { useState } from 'react';
import { motion } from 'motion/react';
import { SlideHeader } from '../SlideHeader';
import { ASSETS } from '../../slidesData';
import { 
  ExternalLink, 
  Smartphone, 
  LayoutDashboard, 
  Copy, 
  Check, 
  Sparkles, 
  UtensilsCrossed, 
  ShieldCheck, 
  PieChart, 
  Clock,
  Maximize2,
  X
} from 'lucide-react';

interface SlideProps {
  slideNumber: number;
  totalSlides: number;
}

export const Slide8LiveAppDemo: React.FC<SlideProps> = ({ slideNumber, totalSlides }) => {
  const [copiedApp, setCopiedApp] = useState(false);
  const [copiedAdmin, setCopiedAdmin] = useState(false);
  const [embeddedUrl, setEmbeddedUrl] = useState<string | null>(null);

  const clientAppUrl = ASSETS.appLinks?.clientApp || 'https://egn-chefgabipaludo.vercel.app/';
  const adminAppUrl = ASSETS.appLinks?.adminApp || 'https://egn-chefgabipaludo.vercel.app/#/admin';

  const copyToClipboard = (text: string, type: 'app' | 'admin') => {
    navigator.clipboard.writeText(text);
    if (type === 'app') {
      setCopiedApp(true);
      setTimeout(() => setCopiedApp(false), 2000);
    } else {
      setCopiedAdmin(true);
      setTimeout(() => setCopiedAdmin(false), 2000);
    }
  };

  return (
    <div className="relative w-full h-full flex flex-col justify-between bg-[#F8F8F5] overflow-hidden">
      <SlideHeader
        category="Demonstração ao vivo"
        slideNumber={slideNumber}
        totalSlides={totalSlides}
      />

      <div className="flex-1 px-6 sm:px-10 lg:px-12 py-3 flex flex-col justify-center max-w-7xl mx-auto w-full">
        {/* Top Title Section */}
        <div className="text-center max-w-3xl mx-auto mb-4 sm:mb-6">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3.5 py-1 bg-[#859159]/15 text-[#424733] border border-[#859159]/30 rounded-full text-xs font-bold uppercase tracking-wider mb-2 font-montserrat shadow-xs"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#859159]" />
            Tour Prático pelo Sistema
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#424733] font-heading leading-tight"
          >
            Veja o aplicativo funcionando <span className="text-[#859159]">na prática</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-xs sm:text-sm text-[#424733]/85 font-medium mt-1 font-montserrat font-light"
          >
            Apresentação ao vivo da experiência completa para as suas clientes e do painel de gestão da sua marmitaria.
          </motion.p>
        </div>

        {/* 2 Main Presentation Interactive Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 items-stretch max-w-5xl mx-auto w-full">
          {/* Card 1: Cardápio Digital (Cliente) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.15 }}
            className="group relative bg-white p-5 sm:p-6 rounded-3xl border border-[#859159]/30 shadow-lg hover:shadow-xl hover:border-[#859159] transition-all flex flex-col justify-between"
          >
            {/* Header Badge */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="px-3 py-1 bg-[#859159]/15 text-[#859159] text-[11px] font-black uppercase tracking-wider rounded-full flex items-center gap-1.5 font-montserrat">
                  <Smartphone className="w-3.5 h-3.5" /> Visão da Cliente
                </span>
                <span className="text-[11px] font-bold text-[#A38C66] bg-[#F8F8F5] px-2.5 py-0.5 rounded-md font-montserrat">
                  Cardápio 24h
                </span>
              </div>

              <div className="flex items-start gap-3 mb-2">
                <div className="w-10 h-10 rounded-2xl bg-[#859159] text-white flex items-center justify-center shrink-0 shadow-md">
                  <UtensilsCrossed className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-[#424733] font-aleo leading-snug">
                    Cardápio Digital Interativo
                  </h3>
                  <p className="text-xs text-[#859159] font-semibold font-montserrat">
                    Link oficial que suas clientes vão acessar
                  </p>
                </div>
              </div>

              <p className="text-xs sm:text-[13px] text-[#424733]/85 leading-relaxed font-montserrat font-light mb-4">
                Onde o cliente visualiza seus pratos com fotos irresistíveis, tabela nutricional completa, valores por combos e realiza o pedido com extrema rapidez.
              </p>

              {/* Feature Checklist */}
              <div className="grid grid-cols-2 gap-2 mb-4">
                <div className="flex items-center gap-1.5 text-[11px] text-[#424733] font-semibold font-montserrat bg-[#F8F8F5] px-2.5 py-1.5 rounded-lg border border-[#424733]/10">
                  <span className="text-[#859159]">✓</span> Fotos & Descrições
                </div>
                <div className="flex items-center gap-1.5 text-[11px] text-[#424733] font-semibold font-montserrat bg-[#F8F8F5] px-2.5 py-1.5 rounded-lg border border-[#424733]/10">
                  <span className="text-[#859159]">✓</span> Tabela Nutricional
                </div>
                <div className="flex items-center gap-1.5 text-[11px] text-[#424733] font-semibold font-montserrat bg-[#F8F8F5] px-2.5 py-1.5 rounded-lg border border-[#424733]/10">
                  <span className="text-[#859159]">✓</span> Combos de Marmitas
                </div>
                <div className="flex items-center gap-1.5 text-[11px] text-[#424733] font-semibold font-montserrat bg-[#F8F8F5] px-2.5 py-1.5 rounded-lg border border-[#424733]/10">
                  <span className="text-[#859159]">✓</span> Pedidos sem Espera
                </div>
              </div>
            </div>

            {/* Actions & Link */}
            <div className="pt-3 border-t border-[#424733]/10 space-y-2">
              <div className="flex items-center justify-between bg-[#FAF8F5] px-3 py-1.5 rounded-xl border border-[#424733]/10 text-[11px] font-mono text-[#424733]/80">
                <span className="truncate max-w-[220px] sm:max-w-[260px]">{clientAppUrl}</span>
                <button
                  onClick={() => copyToClipboard(clientAppUrl, 'app')}
                  className="p-1 text-[#859159] hover:text-[#424733] transition-colors"
                  title="Copiar Link"
                >
                  {copiedApp ? <Check className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href={clientAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2.5 px-4 bg-[#859159] hover:bg-[#6e7a46] text-white text-xs sm:text-sm font-bold rounded-xl shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 font-montserrat text-center"
                >
                  <span>Abrir Cardápio ao Vivo</span>
                  <ExternalLink className="w-4 h-4" />
                </a>

                <button
                  onClick={() => setEmbeddedUrl(clientAppUrl)}
                  className="p-2.5 bg-[#424733]/10 hover:bg-[#424733]/20 text-[#424733] rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 font-montserrat"
                  title="Pré-visualizar na tela do slide"
                >
                  <Maximize2 className="w-4 h-4" />
                  <span className="hidden sm:inline">Testar Aqui</span>
                </button>
              </div>
            </div>
          </motion.div>

          {/* Card 2: Painel Administrativo (Gestão / Cozinha) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.25 }}
            className="group relative bg-white p-5 sm:p-6 rounded-3xl border border-[#613C26]/30 shadow-lg hover:shadow-xl hover:border-[#613C26] transition-all flex flex-col justify-between"
          >
            {/* Header Badge */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="px-3 py-1 bg-[#613C26]/15 text-[#613C26] text-[11px] font-black uppercase tracking-wider rounded-full flex items-center gap-1.5 font-montserrat">
                  <LayoutDashboard className="w-3.5 h-3.5" /> Gestão da Marmitaria
                </span>
                <span className="text-[11px] font-bold text-[#613C26] bg-[#613C26]/10 px-2.5 py-0.5 rounded-md font-montserrat">
                  Área Restrita
                </span>
              </div>

              <div className="flex items-start gap-3 mb-2">
                <div className="w-10 h-10 rounded-2xl bg-[#613C26] text-white flex items-center justify-center shrink-0 shadow-md">
                  <PieChart className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-[#424733] font-aleo leading-snug">
                    Painel Administrativo & Custos
                  </h3>
                  <p className="text-xs text-[#613C26] font-semibold font-montserrat">
                    Seu centro de controle financeiro e operacional
                  </p>
                </div>
              </div>

              <p className="text-xs sm:text-[13px] text-[#424733]/85 leading-relaxed font-montserrat font-light mb-4">
                Onde você cadastra os pratos, atualiza preços, acompanha o fluxo de caixa diário e calcula a margem real de lucro com a metodologia da EGN.
              </p>

              {/* Feature Checklist */}
              <div className="grid grid-cols-2 gap-2 mb-4">
                <div className="flex items-center gap-1.5 text-[11px] text-[#424733] font-semibold font-montserrat bg-[#F8F8F5] px-2.5 py-1.5 rounded-lg border border-[#424733]/10">
                  <span className="text-[#613C26]">✓</span> Fluxo de Caixa Instantâneo
                </div>
                <div className="flex items-center gap-1.5 text-[11px] text-[#424733] font-semibold font-montserrat bg-[#F8F8F5] px-2.5 py-1.5 rounded-lg border border-[#424733]/10">
                  <span className="text-[#613C26]">✓</span> Margem Real por Prato
                </div>
                <div className="flex items-center gap-1.5 text-[11px] text-[#424733] font-semibold font-montserrat bg-[#F8F8F5] px-2.5 py-1.5 rounded-lg border border-[#424733]/10">
                  <span className="text-[#613C26]">✓</span> Edição Rápida de Cardápio
                </div>
                <div className="flex items-center gap-1.5 text-[11px] text-[#424733] font-semibold font-montserrat bg-[#F8F8F5] px-2.5 py-1.5 rounded-lg border border-[#424733]/10">
                  <span className="text-[#613C26]">✓</span> Lançamentos em &lt; 5 Min
                </div>
              </div>
            </div>

            {/* Actions & Link */}
            <div className="pt-3 border-t border-[#424733]/10 space-y-2">
              <div className="flex items-center justify-between bg-[#FAF8F5] px-3 py-1.5 rounded-xl border border-[#424733]/10 text-[11px] font-mono text-[#424733]/80">
                <span className="truncate max-w-[220px] sm:max-w-[260px]">{adminAppUrl}</span>
                <button
                  onClick={() => copyToClipboard(adminAppUrl, 'admin')}
                  className="p-1 text-[#613C26] hover:text-[#424733] transition-colors"
                  title="Copiar Link"
                >
                  {copiedAdmin ? <Check className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href={adminAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2.5 px-4 bg-[#613C26] hover:bg-[#4d2f1d] text-white text-xs sm:text-sm font-bold rounded-xl shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 font-montserrat text-center"
                >
                  <span>Acessar Painel Administrativo</span>
                  <ExternalLink className="w-4 h-4" />
                </a>

                <button
                  onClick={() => setEmbeddedUrl(adminAppUrl)}
                  className="p-2.5 bg-[#424733]/10 hover:bg-[#424733]/20 text-[#424733] rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 font-montserrat"
                  title="Pré-visualizar na tela do slide"
                >
                  <Maximize2 className="w-4 h-4" />
                  <span className="hidden sm:inline">Testar Aqui</span>
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Embedded In-Slide Modal Preview (Optional Test Feature) */}
      {embeddedUrl && (
        <div 
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 transition-all"
          onClick={() => setEmbeddedUrl(null)}
        >
          <div 
            className="relative w-full max-w-5xl h-[85vh] bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col border border-[#859159]/40"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="p-3.5 bg-[#141610] text-white flex items-center justify-between border-b border-[#424733]/40">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-[#859159] bg-[#859159]/20 px-2.5 py-1 rounded-md">
                  Prévia Interativa
                </span>
                <span className="text-xs font-mono text-gray-300 truncate max-w-md">
                  {embeddedUrl}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <a
                  href={embeddedUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1 bg-[#859159] hover:bg-[#6e7a46] text-white text-xs font-bold rounded-lg flex items-center gap-1 transition-colors"
                >
                  <span>Abrir em Nova Aba</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
                <button
                  onClick={() => setEmbeddedUrl(null)}
                  className="p-1 text-gray-400 hover:text-white rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Iframe Content */}
            <div className="flex-1 w-full bg-gray-100 relative">
              <iframe
                src={embeddedUrl}
                title="Pré-visualização do Aplicativo"
                className="w-full h-full border-0"
                allow="clipboard-write; payment"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

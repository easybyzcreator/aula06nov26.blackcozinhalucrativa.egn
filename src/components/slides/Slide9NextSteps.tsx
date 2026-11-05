import React from 'react';
import { motion } from 'motion/react';
import { SlideHeader } from '../SlideHeader';
import { ASSETS } from '../../slidesData';
import { Phone, Globe, Instagram, MessageCircle, HelpCircle, Sparkles, CheckCircle2, ArrowUpRight, ExternalLink } from 'lucide-react';

interface SlideProps {
  slideNumber: number;
  totalSlides: number;
}

export const Slide9NextSteps: React.FC<SlideProps> = ({ slideNumber, totalSlides }) => {
  return (
    <div className="relative w-full h-full flex flex-col justify-between bg-gradient-to-br from-[#F5F5F3] via-[#EBECE7] to-[#DFE3D5] overflow-hidden">
      <SlideHeader
        category="Encerramento & suporte"
        slideNumber={slideNumber}
        totalSlides={totalSlides}
      />

      <div className="flex-1 px-6 sm:px-10 lg:px-12 py-3 flex items-center max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center w-full">
          {/* Left Column: Heading, Call to Action, Q&A (6 cols) */}
          <div className="lg:col-span-6 flex flex-col space-y-4">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1 bg-[#859159]/20 text-[#424733] rounded-full text-xs font-bold uppercase tracking-wider mb-2 font-montserrat">
                <HelpCircle className="w-3.5 h-3.5 text-[#859159]" />
                Dúvidas & próximos passos
              </div>

              <motion.h2
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-3xl sm:text-4xl lg:text-[38px] font-black text-[#424733] font-heading leading-tight"
              >
                Vamos profissionalizar a <br />
                <span className="text-[#859159]">sua marmitaria?</span>
              </motion.h2>

              <p className="text-sm text-[#613C26] font-medium mt-1 font-montserrat font-light">
                Dê o próximo passo para transformar seu conhecimento e paixão pela cozinha em um negócio estruturado, lucrativo e escalável.
              </p>
            </div>

            {/* Q&A Highlight Box */}
            <div className="p-4 rounded-2xl bg-white/90 border border-[#424733]/15 shadow-sm space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold text-[#424733] font-montserrat">
                <Sparkles className="w-4 h-4 text-[#859159]" />
                <span>Espaço aberto para perguntas</span>
              </div>
              <p className="text-xs text-[#424733]/85 leading-relaxed font-montserrat font-light">
                Envie suas dúvidas no chat da aula agora mesmo. A <strong className="font-semibold">Pati</strong> está ao vivo para te orientar!
              </p>
              <div className="pt-2 border-t border-[#424733]/10 flex items-center justify-between text-[11px] text-[#859159] font-bold font-montserrat">
                <span>✓ Link de inscrição liberado</span>
                <span>✓ Vagas limitadas para o lote especial</span>
              </div>
            </div>

            {/* Direct WhatsApp Call Button */}
            <a
              href={ASSETS.contacts.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-[#424733] hover:bg-[#859159] text-white rounded-xl font-bold text-sm shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 font-montserrat"
            >
              <MessageCircle className="w-5 h-5 text-[#859159] fill-current" />
              <span>Chamar no WhatsApp ({ASSETS.contacts.phone})</span>
              <ArrowUpRight className="w-4 h-4 text-white/70" />
            </a>
          </div>

          {/* Right Column: Contact Cards & Creator Profile (6 cols) */}
          <div className="lg:col-span-6 flex flex-col space-y-3">
            {/* Creator Card */}
            <div className="p-4 sm:p-5 rounded-2xl bg-white/95 border border-[#424733]/15 shadow-lg flex items-center gap-4">
              <div className="relative shrink-0">
                <div className="w-20 h-24 sm:w-24 sm:h-28 rounded-2xl overflow-hidden border-2 border-[#859159] shadow-md bg-[#F5F5F3]">
                  <img
                    src={ASSETS.people.pati}
                    alt="Pati - Easy Byz Creator"
                    className="w-full h-full object-cover object-top [object-position:50%_0%]"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <h4 className="text-lg font-bold text-[#424733] font-aleo">
                    Pati
                  </h4>
                  <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded bg-[#859159]/20 text-[#424733] font-montserrat">
                    Easy Byz Creator
                  </span>
                </div>
                <p className="text-xs text-[#613C26] font-bold mt-0.5 font-montserrat">
                  Responsável pelo desenvolvimento & suporte do aplicativo
                </p>
                <p className="text-xs text-[#424733]/80 mt-1 font-montserrat font-light leading-relaxed">
                  Conte com a nossa equipe para configurar seu ambiente personalizado e tirar suas dúvidas.
                </p>
              </div>
            </div>

            {/* Official Contact Links Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {/* WhatsApp / Phone */}
              <a
                href={ASSETS.contacts.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-white border border-[#424733]/10 hover:border-[#859159] shadow-sm flex items-center gap-3 transition-all hover:shadow-md group"
              >
                <div className="p-2 rounded-lg bg-[#859159]/15 text-[#424733] group-hover:bg-[#859159] group-hover:text-white transition-colors shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div className="min-w-0 font-montserrat">
                  <span className="text-[10px] font-bold text-[#613C26] uppercase tracking-wider block">
                    WhatsApp direto
                  </span>
                  <span className="text-xs font-bold text-[#424733] truncate block">
                    {ASSETS.contacts.phone}
                  </span>
                </div>
              </a>

              {/* Website */}
              <a
                href={ASSETS.contacts.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-white border border-[#424733]/10 hover:border-[#859159] shadow-sm flex items-center gap-3 transition-all hover:shadow-md group"
              >
                <div className="p-2 rounded-lg bg-[#424733]/10 text-[#424733] group-hover:bg-[#424733] group-hover:text-white transition-colors shrink-0">
                  <Globe className="w-4 h-4" />
                </div>
                <div className="min-w-0 font-montserrat">
                  <span className="text-[10px] font-bold text-[#613C26] uppercase tracking-wider block">
                    Website oficial
                  </span>
                  <span className="text-xs font-bold text-[#424733] truncate block">
                    {ASSETS.contacts.website}
                  </span>
                </div>
              </a>

              {/* Instagram */}
              <a
                href={ASSETS.contacts.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-white border border-[#424733]/10 hover:border-[#859159] shadow-sm flex items-center gap-3 transition-all hover:shadow-md group sm:col-span-2"
              >
                <div className="p-2 rounded-lg bg-[#A38C66]/20 text-[#613C26] group-hover:bg-[#A38C66] group-hover:text-white transition-colors shrink-0">
                  <Instagram className="w-4 h-4" />
                </div>
                <div className="min-w-0 flex-1 flex items-center justify-between font-montserrat">
                  <div>
                    <span className="text-[10px] font-bold text-[#613C26] uppercase tracking-wider block">
                      Instagram oficial
                    </span>
                    <span className="text-xs font-bold text-[#424733] truncate block">
                      {ASSETS.contacts.instagram}
                    </span>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-[#424733]/40 group-hover:text-[#424733]" />
                </div>
              </a>
            </div>

            {/* Bottom logos partnership banner */}
            <div className="p-3 bg-white/70 rounded-xl border border-[#424733]/10 flex items-center justify-between font-montserrat">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full overflow-hidden border border-[#424733]/20 shrink-0 bg-[#2B2E22] flex items-center justify-center">
                  <img
                    src={ASSETS.logos.egnn}
                    alt="Escola de Gastronomia e Negócios"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <span className="text-[10px] font-bold text-[#424733]">
                  Escola de Gastronomia
                </span>
              </div>
              <span className="text-xs text-[#A38C66]">✕</span>
              <div className="flex items-center gap-2">
                <img
                  src={ASSETS.logos.easyByz}
                  alt="Easy Byz"
                  className="h-5 object-contain"
                  referrerPolicy="no-referrer"
                />
                <span className="text-[10px] font-bold text-[#613C26]">
                  Easy Byz Creator
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="px-6 sm:px-10 py-2 border-t border-[#424733]/10 bg-white/50 text-[11px] text-[#424733]/60 flex justify-between font-montserrat">
        <span>Slide {slideNumber} • Suporte e contato</span>
        <span>Sucesso na sua jornada gastronômica! 🍲</span>
      </div>
    </div>
  );
};

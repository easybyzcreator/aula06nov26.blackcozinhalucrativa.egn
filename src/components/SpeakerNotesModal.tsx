import React from 'react';
import { SLIDES_DATA } from '../slidesData';
import { X, Clock, Sparkles, ChevronRight, MessageCircle } from 'lucide-react';

interface SpeakerNotesModalProps {
  currentSlideIndex: number;
  onClose: () => void;
  timerSeconds: number;
  onJumpToSlide: (idx: number) => void;
}

export const SpeakerNotesModal: React.FC<SpeakerNotesModalProps> = ({
  currentSlideIndex,
  onClose,
  timerSeconds,
  onJumpToSlide,
}) => {
  const currentSlide = SLIDES_DATA[currentSlideIndex];
  const nextSlide = currentSlideIndex < SLIDES_DATA.length - 1 ? SLIDES_DATA[currentSlideIndex + 1] : null;

  const formatTime = (secs: number) => {
    const mins = Math.floor(secs / 60);
    const s = secs % 60;
    return `${mins.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-[#1F2218] text-[#F0F0F0] w-full max-w-3xl rounded-3xl border border-[#859159]/40 shadow-2xl overflow-hidden flex flex-col max-h-[85vh]">
        {/* Modal Header */}
        <div className="p-4 sm:p-5 bg-[#171A12] border-b border-[#424733]/40 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-[#859159]/20 text-[#859159]">
              <MessageCircle className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#A38C66]">
                Modo Apresentador • Notas da Aula
              </span>
              <h3 className="text-base font-black text-white">
                Slide {currentSlide.slideNumber}: {currentSlide.title}
              </h3>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {/* Live timer badge */}
            <div className="flex items-center gap-1.5 px-3 py-1 bg-black/40 rounded-full border border-[#859159]/30 text-xs font-mono font-bold text-[#859159]">
              <Clock className="w-3.5 h-3.5" />
              <span>{formatTime(timerSeconds)}</span>
            </div>

            <button
              onClick={onClose}
              className="p-1.5 text-gray-400 hover:text-white rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1">
          {/* Main talking points / script */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#859159] mb-3 flex items-center gap-1.5">
              <Sparkles className="w-4 h-4" />
              Roteiro de Fala Recomendado para Este Slide:
            </h4>
            <div className="space-y-3">
              {currentSlide.notes?.map((note, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl bg-[#282C20] border border-[#859159]/20 text-sm sm:text-base leading-relaxed text-[#F0F0F0] flex items-start gap-3"
                >
                  <span className="w-6 h-6 rounded-full bg-[#859159] text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  <span>{note}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Key Topics in current slide */}
          {currentSlide.topics && currentSlide.topics.length > 0 && (
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#A38C66] mb-2">
                Tópicos Exibidos na Tela:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {currentSlide.topics.map((t, idx) => (
                  <div key={idx} className="p-2.5 rounded-lg bg-white/5 border border-white/10 text-xs">
                    <strong className="text-[#859159] block">{t.title}</strong>
                    <span className="text-gray-300 text-[11px] leading-snug">{t.description}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Next Slide Preview */}
          {nextSlide && (
            <div className="p-4 rounded-xl bg-[#171A12] border border-white/10 flex items-center justify-between">
              <div>
                <span className="text-[11px] uppercase tracking-wider text-gray-400 font-bold block">
                  Próximo Slide ({nextSlide.slideNumber} de {SLIDES_DATA.length}):
                </span>
                <span className="text-sm font-bold text-white mt-0.5 block">
                  {nextSlide.title}
                </span>
              </div>
              <button
                onClick={() => {
                  onJumpToSlide(currentSlideIndex + 1);
                  onClose();
                }}
                className="flex items-center gap-1 px-3 py-1.5 bg-[#859159] hover:bg-[#6e7948] text-white text-xs font-bold rounded-lg transition-colors"
              >
                Avançar <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-3 bg-[#171A12] border-t border-[#424733]/40 flex justify-between items-center text-xs text-gray-400">
          <span>Pressione <strong>'N'</strong> para abrir/fechar notas</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 bg-white/10 hover:bg-white/20 text-white rounded-lg font-bold"
          >
            Entendido
          </button>
        </div>
      </div>
    </div>
  );
};

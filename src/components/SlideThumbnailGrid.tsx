import React from 'react';
import { SLIDES_DATA } from '../slidesData';
import { X, LayoutGrid, Check } from 'lucide-react';

interface SlideThumbnailGridProps {
  currentSlideIndex: number;
  onSelectSlide: (index: number) => void;
  onClose: () => void;
}

export const SlideThumbnailGrid: React.FC<SlideThumbnailGridProps> = ({
  currentSlideIndex,
  onSelectSlide,
  onClose,
}) => {
  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6">
      <div className="bg-[#1A1D15] text-white w-full max-w-5xl rounded-3xl border border-[#859159]/40 shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="p-4 sm:p-5 bg-[#141610] border-b border-[#424733]/40 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <LayoutGrid className="w-5 h-5 text-[#859159]" />
            <h3 className="text-base font-black text-white font-heading">
              Visão Geral dos {SLIDES_DATA.length} Slides da Apresentação
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-gray-400 hover:text-white rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* 9 Slides Grid */}
        <div className="p-4 sm:p-6 overflow-y-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {SLIDES_DATA.map((slide, idx) => {
            const isCurrent = idx === currentSlideIndex;
            return (
              <div
                key={slide.id}
                onClick={() => {
                  onSelectSlide(idx);
                  onClose();
                }}
                className={`group relative p-4 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between min-h-[140px] ${
                  isCurrent
                    ? 'bg-[#859159]/20 border-[#859159] ring-2 ring-[#859159]/50 shadow-lg'
                    : 'bg-[#22271C] border-[#424733]/40 hover:border-[#859159] hover:bg-[#282E21]'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-black px-2 py-0.5 rounded bg-black/40 text-[#859159]">
                      Slide {slide.slideNumber}
                    </span>
                    <span className="text-[10px] uppercase font-bold text-[#A38C66] tracking-wider truncate max-w-[120px]">
                      {slide.category}
                    </span>
                  </div>

                  <h4 className="text-sm font-bold text-white group-hover:text-[#859159] transition-colors line-clamp-2 leading-snug">
                    {slide.title}
                  </h4>
                </div>

                <div className="pt-2 mt-2 border-t border-white/10 flex items-center justify-between text-[11px] text-gray-400">
                  <span className="truncate">{slide.topics?.length || 0} tópicos</span>
                  {isCurrent ? (
                    <span className="flex items-center gap-1 text-[#859159] font-bold text-[11px]">
                      <Check className="w-3.5 h-3.5" /> Atual
                    </span>
                  ) : (
                    <span className="text-gray-500 group-hover:text-white transition-colors">
                      Ir para slide →
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer */}
        <div className="p-3 bg-[#141610] border-t border-[#424733]/40 flex justify-between items-center text-xs text-gray-400">
          <span>Pressione <strong>'G'</strong> para abrir/fechar visão geral</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 bg-white/10 hover:bg-white/20 text-white rounded-lg font-bold"
          >
            Fechar
          </button>
        </div>
      </div>
    </div>
  );
};

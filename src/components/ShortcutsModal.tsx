import React from 'react';
import { X, Keyboard } from 'lucide-react';

interface ShortcutsModalProps {
  onClose: () => void;
}

export const ShortcutsModal: React.FC<ShortcutsModalProps> = ({ onClose }) => {
  const shortcuts = [
    { key: '→ / Espaço', action: 'Avançar para o próximo slide' },
    { key: '←', action: 'Voltar para o slide anterior' },
    { key: 'F', action: 'Alternar Modo Tela Cheia' },
    { key: 'N', action: 'Abrir / Fechar Notas do Apresentador' },
    { key: 'G', action: 'Abrir / Fechar Grade de Slides (Visão Geral)' },
    { key: 'P', action: 'Ativar / Desativar Ferramenta de Anotação (Caneta)' },
    { key: 'Home / End', action: 'Ir para o primeiro / último slide' },
    { key: 'Esc', action: 'Fechar modais / Sair da tela cheia' },
  ];

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-[#1A1D15] text-white w-full max-w-md rounded-3xl border border-[#859159]/40 shadow-2xl p-6">
        <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-4">
          <div className="flex items-center gap-2 text-[#859159]">
            <Keyboard className="w-5 h-5" />
            <h3 className="text-base font-black text-white font-heading">
              Atalhos do Teclado para a Aula
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 text-gray-400 hover:text-white rounded-lg"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="space-y-2.5">
          {shortcuts.map((sc, i) => (
            <div
              key={i}
              className="flex items-center justify-between p-2 rounded-xl bg-[#23271D] text-xs"
            >
              <span className="text-gray-300 font-medium">{sc.action}</span>
              <kbd className="px-2.5 py-1 bg-black/50 border border-[#859159]/40 rounded-md font-mono text-[#859159] font-bold">
                {sc.key}
              </kbd>
            </div>
          ))}
        </div>

        <button
          onClick={onClose}
          className="w-full mt-5 py-2.5 bg-[#859159] hover:bg-[#737e4c] text-white text-xs font-bold rounded-xl transition-colors"
        >
          Pronto para Apresentar
        </button>
      </div>
    </div>
  );
};

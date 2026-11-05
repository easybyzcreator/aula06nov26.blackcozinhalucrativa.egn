import React, { useState, useEffect, useRef, useCallback } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { SLIDES_DATA, ASSETS } from './slidesData';
import { DrawingTool } from './types';

// Slide Components (Kept slides)
import { Slide1CardapioCover } from './components/slides/Slide1CardapioCover';
import { SlideImagineMarmitaria } from './components/slides/SlideImagineMarmitaria';
import { SlideONegocioQueVoceQuerConstruir } from './components/slides/SlideONegocioQueVoceQuerConstruir';
import { Slide2PainPoints } from './components/slides/Slide2PainPoints';
import { SlidePerguntasBaloes } from './components/slides/SlidePerguntasBaloes';
import { SlideMarketplaceCustoDependencia } from './components/slides/SlideMarketplaceCustoDependencia';
import { SlideESeVocePudesseTerSuaPropriaEstrutura } from './components/slides/SlideESeVocePudesseTerSuaPropriaEstrutura';
import { Slide1Cover } from './components/slides/Slide1Cover';
import { SlideMenosTempoNoPapel } from './components/slides/SlideMenosTempoNoPapel';
import { Slide19NaoESobreAplicativo } from './components/slides/Slide19NaoESobreAplicativo';
import { Slide8LiveAppDemo } from './components/slides/Slide8LiveAppDemo';
import { Slide8HowToGet } from './components/slides/Slide8HowToGet';
import { Slide9NextSteps } from './components/slides/Slide9NextSteps';

// Controls & Overlays
import { PresenterControls } from './components/PresenterControls';
import { SpeakerNotesModal } from './components/SpeakerNotesModal';
import { SlideThumbnailGrid } from './components/SlideThumbnailGrid';
import { ShortcutsModal } from './components/ShortcutsModal';
import { SlideCanvas } from './components/SlideCanvas';

export default function App() {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showNotes, setShowNotes] = useState(false);
  const [showGrid, setShowGrid] = useState(false);
  const [showShortcuts, setShowShortcuts] = useState(false);
  const [activeDrawingTool, setActiveDrawingTool] = useState<DrawingTool>('pointer');

  // Presentation Timer State
  const [timerSeconds, setTimerSeconds] = useState(0);
  const [isTimerRunning, setIsTimerRunning] = useState(true);

  // Auto-play state
  const [isAutoPlay, setIsAutoPlay] = useState(false);

  const containerRef = useRef<HTMLDivElement | null>(null);

  // Timer Tick
  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (isTimerRunning) {
      interval = setInterval(() => {
        setTimerSeconds((prev) => prev + 1);
      }, 1000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isTimerRunning]);

  // Auto-play advances slide every 8 seconds
  useEffect(() => {
    let autoPlayInterval: NodeJS.Timeout | null = null;
    if (isAutoPlay) {
      autoPlayInterval = setInterval(() => {
        setCurrentSlideIndex((prev) => {
          if (prev < SLIDES_DATA.length - 1) {
            setDirection(1);
            return prev + 1;
          } else {
            setIsAutoPlay(false);
            return prev;
          }
        });
      }, 8000);
    }
    return () => {
      if (autoPlayInterval) clearInterval(autoPlayInterval);
    };
  }, [isAutoPlay]);

  const goToSlide = useCallback((index: number) => {
    if (index >= 0 && index < SLIDES_DATA.length) {
      setDirection(index > currentSlideIndex ? 1 : -1);
      setCurrentSlideIndex(index);
    }
  }, [currentSlideIndex]);

  const handleNext = useCallback(() => {
    if (currentSlideIndex < SLIDES_DATA.length - 1) {
      setDirection(1);
      setCurrentSlideIndex((prev) => prev + 1);
    }
  }, [currentSlideIndex]);

  const handlePrev = useCallback(() => {
    if (currentSlideIndex > 0) {
      setDirection(-1);
      setCurrentSlideIndex((prev) => prev - 1);
    }
  }, [currentSlideIndex]);

  // Toggle Fullscreen
  const handleToggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
      setIsFullscreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen().catch(() => {});
      }
      setIsFullscreen(false);
    }
  };

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  // Keyboard Shortcuts Listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't trigger shortcuts if focus is in an input or textarea
      if (['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement)?.tagName)) {
        return;
      }

      switch (e.key) {
        case 'ArrowRight':
        case ' ':
        case 'PageDown':
          e.preventDefault();
          handleNext();
          break;
        case 'ArrowLeft':
        case 'PageUp':
          e.preventDefault();
          handlePrev();
          break;
        case 'Home':
          e.preventDefault();
          goToSlide(0);
          break;
        case 'End':
          e.preventDefault();
          goToSlide(SLIDES_DATA.length - 1);
          break;
        case 'f':
        case 'F':
          e.preventDefault();
          handleToggleFullscreen();
          break;
        case 'n':
        case 'N':
          e.preventDefault();
          setShowNotes((prev) => !prev);
          break;
        case 'g':
        case 'G':
          e.preventDefault();
          setShowGrid((prev) => !prev);
          break;
        case 'p':
        case 'P':
          e.preventDefault();
          setActiveDrawingTool((prev) => (prev === 'pen' ? 'pointer' : 'pen'));
          break;
        case 'Escape':
          setShowNotes(false);
          setShowGrid(false);
          setShowShortcuts(false);
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleNext, handlePrev, goToSlide]);

  const handlePrint = () => {
    window.print();
  };

  // Render Slide by Index
  const renderSlideContent = (index: number) => {
    const total = SLIDES_DATA.length;
    const slideNumber = index + 1;

    switch (index) {
      case 0:
        return <Slide1CardapioCover onNext={handleNext} />;
      case 1:
        return <SlideImagineMarmitaria slideNumber={slideNumber} totalSlides={total} />;
      case 2:
        return <SlideONegocioQueVoceQuerConstruir slideNumber={slideNumber} totalSlides={total} />;
      case 3:
        return <Slide2PainPoints slideNumber={slideNumber} totalSlides={total} />;
      case 4:
        return (
          <SlidePerguntasBaloes
            slideNumber={slideNumber}
            totalSlides={total}
            question1="Você já esqueceu de anotar algum pedido que recebeu e por esse motivo não entregou ao seu cliente?"
            question2="Você já entregou pedido errado porque se confundiu e anotou a informação incorreta?"
          />
        );
      case 5:
        return (
          <SlidePerguntasBaloes
            slideNumber={slideNumber}
            totalSlides={total}
            question1="No final do mês você sabe dizer exatamente quanto você teve de lucro?"
            question2="Quando o cliente te chama no WhatsApp você realmente consegue oferecer pra ele tudo que tem no seu cardápio?"
          />
        );
      case 6:
        return (
          <SlidePerguntasBaloes
            slideNumber={slideNumber}
            totalSlides={total}
            question1="Quantas vezes você parou no meio da sua produção para responder mensagens de clientes no WhatsApp e que muitas vezes nem compraram de você?"
            question2="Você sente que precisa ficar 24h disponível para responder aos seus clientes porque tem medo de perdê-lo para um concorrente que responde mais rápido?"
          />
        );
      case 7:
        return <SlideMarketplaceCustoDependencia slideNumber={slideNumber} totalSlides={total} />;
      case 8:
        return <SlideESeVocePudesseTerSuaPropriaEstrutura slideNumber={slideNumber} totalSlides={total} />;
      case 9:
        return <Slide1Cover onNext={handleNext} />;
      case 10:
        return <SlideMenosTempoNoPapel slideNumber={slideNumber} totalSlides={total} />;
      case 11:
        return <Slide19NaoESobreAplicativo slideNumber={slideNumber} totalSlides={total} />;
      case 12:
        return <Slide8LiveAppDemo slideNumber={slideNumber} totalSlides={total} />;
      case 13:
        return <Slide8HowToGet slideNumber={slideNumber} totalSlides={total} />;
      case 14:
        return <Slide9NextSteps slideNumber={slideNumber} totalSlides={total} />;
      default:
        return <Slide1CardapioCover onNext={handleNext} />;
    }
  };

  // Animation variants
  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 80 : -80,
      opacity: 0,
      scale: 0.98,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        x: { type: 'spring', stiffness: 350, damping: 32 },
        opacity: { duration: 0.25 },
        scale: { duration: 0.25 },
      },
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -80 : 80,
      opacity: 0,
      scale: 0.98,
      transition: {
        x: { type: 'spring', stiffness: 350, damping: 32 },
        opacity: { duration: 0.2 },
      },
    }),
  };

  return (
    <div className="min-h-screen bg-[#191C13] text-[#424733] flex flex-col items-center justify-between font-sans relative overflow-hidden select-none">
      {/* Top Ambient Subtle Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[200px] bg-[#859159]/10 rounded-full blur-3xl pointer-events-none" />

      {/* Main Slide Presentation Stage */}
      <main
        ref={containerRef}
        className="w-full flex-1 flex items-center justify-center p-2 sm:p-4 lg:p-6 no-print"
      >
        <div className="w-full max-w-7xl aspect-[16/9] min-h-[500px] max-h-[88vh] rounded-3xl overflow-hidden shadow-[0_25px_60px_-15px_rgba(0,0,0,0.6)] border border-[#424733]/40 bg-[#F8F8F5] relative flex flex-col">
          {/* Active Canvas Drawing Layer for Live Annotations */}
          <SlideCanvas
            activeTool={activeDrawingTool}
            setActiveTool={setActiveDrawingTool}
            slideId={currentSlideIndex}
          />

          {/* Animated Slide Switcher */}
          <div className="w-full h-full relative overflow-hidden flex-1">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentSlideIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="w-full h-full absolute inset-0"
              >
                {renderSlideContent(currentSlideIndex)}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </main>

      {/* Bottom Presenter Toolbar */}
      <PresenterControls
        currentSlideIndex={currentSlideIndex}
        totalSlides={SLIDES_DATA.length}
        onPrev={handlePrev}
        onNext={handleNext}
        isFullscreen={isFullscreen}
        onToggleFullscreen={handleToggleFullscreen}
        onToggleNotes={() => setShowNotes((prev) => !prev)}
        onToggleGrid={() => setShowGrid((prev) => !prev)}
        activeDrawingTool={activeDrawingTool}
        onSelectDrawingTool={setActiveDrawingTool}
        timerSeconds={timerSeconds}
        isTimerRunning={isTimerRunning}
        onToggleTimer={() => setIsTimerRunning((prev) => !prev)}
        onResetTimer={() => setTimerSeconds(0)}
        isAutoPlay={isAutoPlay}
        onToggleAutoPlay={() => setIsAutoPlay((prev) => !prev)}
        onPrint={handlePrint}
        onToggleShortcutsHelp={() => setShowShortcuts((prev) => !prev)}
      />

      {/* Speaker Notes Drawer Modal */}
      {showNotes && (
        <SpeakerNotesModal
          currentSlideIndex={currentSlideIndex}
          onClose={() => setShowNotes(false)}
          timerSeconds={timerSeconds}
          onJumpToSlide={goToSlide}
        />
      )}

      {/* Grid Thumbnail Overview Modal */}
      {showGrid && (
        <SlideThumbnailGrid
          currentSlideIndex={currentSlideIndex}
          onSelectSlide={goToSlide}
          onClose={() => setShowGrid(false)}
        />
      )}

      {/* Keyboard Shortcuts Helper Modal */}
      {showShortcuts && (
        <ShortcutsModal onClose={() => setShowShortcuts(false)} />
      )}

      {/* Print-Only Multi-Slide View (Renders each slide on its own 16:9 page for crisp PDF export) */}
      <div className="hidden print-only w-full">
        {SLIDES_DATA.map((_, idx) => (
          <div
            key={idx}
            className="slide-stage-print w-screen h-screen bg-[#F8F8F5] overflow-hidden flex flex-col justify-between"
          >
            {renderSlideContent(idx)}
          </div>
        ))}
      </div>
    </div>
  );
}

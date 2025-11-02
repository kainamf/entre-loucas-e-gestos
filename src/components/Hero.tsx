import { ChevronDown } from 'lucide-react';

interface HeroProps {
  onCTAClick: () => void;
}

export default function Hero({ onCTAClick }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(/tableTop.jpeg)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
        <div className="mb-8 flex justify-center">
          <img
            src="/leTableLogo.png"
            alt="Le Table Logo"
            className="w-32 md:w-40 h-auto opacity-90"
          />
        </div>

        <h1 className="text-5xl md:text-7xl font-light tracking-wide mb-8 leading-tight">
          Entre Louças e Gestos
        </h1>

        <p className="text-xl md:text-2xl font-light mb-6 leading-relaxed max-w-3xl mx-auto">
          "Você já se sentiu insegura ao receber ou participar de um jantar, sem saber exatamente como se portar ou montar a mesa?"
        </p>

        <p className="text-lg md:text-xl mb-12 text-gray-200 font-light">
          Aprenda a montar uma mesa elegante e desenvolver comportamento adequado à mesa
        </p>

        <button
          onClick={onCTAClick}
          className="bg-white text-gray-900 px-10 py-4 rounded-sm text-lg font-normal hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
        >
          Quero participar
        </button>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown size={32} className="text-white opacity-70" />
        </div>
      </div>
    </section>
  );
}

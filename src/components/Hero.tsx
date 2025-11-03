interface HeroProps {
  onCTAClick: () => void;
}

export default function Hero({ onCTAClick }: HeroProps) {
  return (
  <section className="py-12 md:py-16 bg-verde/60">
      <div className="max-w-6xl mx-auto px-6">
        {/* Logo on top */}
        <div className="mb-6 flex justify-center">
          <img
            src="/leTableLogo.png"
            alt="Le Table Logo"
            className="w-32 md:w-40 h-auto opacity-90"
          />
        </div>

        {/* Photo (no text over it) */}
        <div className="rounded-sm overflow-hidden mb-8">
          <img
            src="/cookies.jpeg"
            alt="Hero-image"
            className="w-full h-auto max-h-[50vh] md:max-h-[90vh] object-contain object-center filter brightness-90"
          />
        </div>

        {/* Text below the photo */}
        <div className="text-center text-gray-900">
          <h1 className="text-4xl md:text-5xl font-light tracking-wide mb-4">
            Entre Mesas & Gestos
          </h1>

          <p className="text-lg md:text-xl font-light mb-6 max-w-3xl mx-auto leading-relaxed">
            Você já se sentiu insegura ao receber ou participar de um jantar, sem saber exatamente como se portar ou montar uma mesa? Aprenda a montar uma mesa elegante e desenvolver comportamento adequado à mesa, seja no ambiente social ou no corporativo.
          </p>

          <button
            onClick={onCTAClick}
            className="bg-verde text-white px-10 py-4 rounded-sm text-lg font-normal hover:bg-bege-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            Mais informações
          </button>
        </div>
      </div>
    </section>
  );
}

interface HeroProps {
  onCTAClick: () => void;
}

export default function Hero({ onCTAClick }: HeroProps) {
  return (
    <section className="relative h-screen w-full">
      {/* Background image fills the viewport */}
      <img
        src="/cookies.jpeg"
        alt="Hero-image"
        className="absolute inset-0 w-full h-full object-cover object-center filter brightness-90"
      />

      {/* subtle dark overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-black/30" />

      {/* Overlay content: logo aligned to top, then title, subtitle and CTA below */}
      <div className="absolute inset-0 flex flex-col items-center text-center px-6 justify-between">
        <div className="w-full flex justify-center pt-6 md:pt-8 z-10">
          <img
            src="/leTableLogo.png"
            alt="Le Table Logo"
            className="w-32 md:w-40 h-auto opacity-95 drop-shadow-md"
          />
        </div>

        <div className="z-10 mb-8 md:mb-16 max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-light tracking-wide text-white drop-shadow-md">
            Entre Mesas & Gestos
          </h1>

          <p className="mt-4 text-base md:text-lg font-light text-white/95 leading-relaxed">
            Você já se sentiu insegura ao receber ou participar de um jantar, sem saber exatamente como se portar ou montar uma mesa? Aprenda a montar uma mesa elegante e desenvolver comportamento adequado à mesa, seja no ambiente social ou no corporativo.
          </p>

          <div className="mt-6 flex justify-center">
            <button
              onClick={onCTAClick}
              className="bg-verde text-white px-8 py-3 rounded-sm text-lg font-normal hover:bg-bege-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Mais informações
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

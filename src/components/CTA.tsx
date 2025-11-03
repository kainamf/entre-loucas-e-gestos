interface CTAProps {
  onCTAClick: () => void;
}

export default function CTA({ onCTAClick }: CTAProps) {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="border-t border-b border-amber-700 py-8 mb-12">
          <p className="text-2xl md:text-3xl text-gray-900 italic font-light tracking-wide leading-relaxed">
            Entre Mesas & Gestos, a elegância é o que permanece.
          </p>
        </div>

        <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-6 tracking-wide">
          Transforme cada refeição em um gesto de cuidado e sofisticação
        </h2>

        <p className="text-lg md:text-xl text-gray-700 mb-10 font-light leading-relaxed">
          A verdadeira elegância está nos detalhes — e eles começam na mesa.
        </p>

        <button
          onClick={onCTAClick}
          className="bg-verde text-white px-12 py-4 rounded-sm text-lg font-normal hover:bg-bege-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
        >
          Mais informações
        </button>

        <p className="mt-8 text-gray-600 text-sm font-light">
          Escolha entre opções individuais ou em grupo
        </p>
      </div>
    </section>
  );
}

import { useEffect, useRef, useState } from 'react';

export default function Testimonials() {
  const items = [
    {
      text:
        'Eu me sinto muito mais capaz em receber minhas amigas para um chá da tarde ou minha família para almoçar! Aprendi a preparar tudo com elegância, de forma simples e bonita! Antes eu tinha até vergonha de receber pessoas, agora faço questão de ser anfitriã!',
      author: 'Melissa Paladinno — Especialista em Posicionamento Autêntico',
      image: '/melissaPaladinno.jpeg',
    },
    {
      text:
        'O curso foi incrível! Pude aprender por experiências muito parecidas com a vida real e minha autoconfiança mudou da água pro vinho! Maravilhoso o programa e só tenho a agradecer! Hoje me sinto muito mais capaz de ir a um bom restaurante e me portar corretamente em eventos sociais e corporativos.',
      author: 'Luiza Helena Gandini — Fotógrafa de gastronomia, produtos e food stylist.',
      image: '/luizaHelenaGandini.jpeg',
    },
    {
      text:
        'Depois do contato com o trabalho da Leandra, passei a enxergar a etiqueta como uma aliada — um gesto de cuidado que transforma qualquer momento. Ela me mostrou que pequenos detalhes fazem grande diferença. A etiqueta se tornou uma forma de tornar cada momento mais especial.',
      author: 'Larissa Rodrigues — Consultora de Imagem e Mentora de Mulheres',
      image: '/larissaRodrigues.jpeg',
    },
    {
      text:
        'A etiqueta está presente em pequenas coisas no nosso dia a dia e, graças a Leandra, me sinto mais confiante com relação ao meu comportamento. Todos deveriam receber esse aprendizado, que, diferentemente do que pensam, não é só "coisa de gente rica". Vale cada ensinamento!',
      author: 'Bruna Pullig — Consultora em Recursos Humanos, fundadora e Idealizadora da Ojo Consultoria',
      image: '/brunaPullig.jpeg',
    },
  ];
  const [index, setIndex] = useState(0);
  const length = items.length;
  const interval = 10000; // 10s

  // Refs for scroll container and timers
  const containerRef = useRef<HTMLDivElement | null>(null);
  const autoRef = useRef<number | null>(null);
  const scrollDebounceRef = useRef<number | null>(null);

  // Auto-advance using timeout; resets whenever index changes
  useEffect(() => {
    if (autoRef.current) window.clearTimeout(autoRef.current);
    autoRef.current = window.setTimeout(() => {
      setIndex((i) => (i + 1) % length);
    }, interval);

    return () => {
      if (autoRef.current) window.clearTimeout(autoRef.current);
    };
  }, [index, length]);

  // When index changes programmatically, scroll the container
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const childWidth = el.clientWidth;
    el.scrollTo({ left: index * childWidth, behavior: 'smooth' });
  }, [index]);

  // Handle manual scrolling: update index based on scroll position and reset timer
  const onScroll = () => {
    const el = containerRef.current;
    if (!el) return;
    if (scrollDebounceRef.current) window.clearTimeout(scrollDebounceRef.current);
    scrollDebounceRef.current = window.setTimeout(() => {
      const childWidth = el.clientWidth;
      const newIndex = Math.round(el.scrollLeft / childWidth);
      if (newIndex !== index) setIndex(newIndex);
    }, 100);
  };

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-8 text-center">O que dizem sobre nosso curso</h2>

        {/* Carousel container: horizontal scroll with snap */}
        <div className="relative">
          <div
            ref={containerRef}
            onScroll={onScroll}
            className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth -mx-4 px-4"
            style={{ scrollbarWidth: 'none' as const }}
          >
            {items.map((it, idx) => (
              <div key={idx} className="min-w-full snap-start px-4">
                <figure className="p-6 bg-stone-50 rounded-sm flex flex-col items-center text-center">
                  <img
                    src={it.image}
                    alt={it.author}
                    className="w-28 h-28 md:w-36 md:h-36 object-cover object-top rounded-lg mb-4"
                  />
                  <blockquote>
                    <p className="text-gray-800 mb-4">{it.text}</p>
                  </blockquote>
                  <figcaption className="text-sm text-gray-600">{it.author}</figcaption>
                </figure>
              </div>
            ))}
          </div>
          {/* end carousel container */}
        </div>

        {/* Indicators moved outside the overflow-hidden area to avoid overlap with slide content */}
        <div className="flex justify-center mt-6 gap-2">
          {items.map((_, i) => (
            <button
              key={i}
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => setIndex(i)}
              className={`w-3 h-3 rounded-full ${i === index ? 'bg-amber-700' : 'bg-stone-300'}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

import { useEffect, useState } from 'react';

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

  // Use a timeout so manual navigation (setIndex) restarts the countdown
  useEffect(() => {
    const t = window.setTimeout(() => {
      setIndex((i) => (i + 1) % length);
    }, interval);

    return () => window.clearTimeout(t);
  }, [index, length]);

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-8 text-center">O que dizem sobre nosso curso</h2>

        {/* Carousel container */}
        <div className="relative overflow-hidden">
          <div className="flex transition-transform duration-700 ease-out" style={{ transform: `translateX(-${index * 100}%)` }}>
            {items.map((it, idx) => (
              <div key={idx} className="min-w-full px-4">
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

          {/* Indicators */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
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
      </div>
    </section>
  );
}

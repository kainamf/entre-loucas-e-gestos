import { Leaf, Utensils, Wine, Users, Sparkles } from 'lucide-react';

export default function About() {
  const features = [
    {
      icon: Leaf,
      text: 'Técnicas de montagem de mesas elegantes e funcionais',
    },
    {
      icon: Utensils,
      text: 'Escolha e disposição correta de louças, talheres e copos',
    },
    {
      icon: Wine,
      text: 'Conhecimento dos tipos de serviço: à francesa, à inglesa, à americana e empratado',
    },
    {
      icon: Users,
      text: 'Desenvolvimento de postura, gestos e etiqueta à mesa',
    },
    {
      icon: Sparkles,
      text: 'Integração entre estética e comportamento, tornando cada refeição um gesto de acolhimento',
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6 tracking-wide">
            Sobre o Curso
          </h2>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed font-light">
            Este curso foi criado para quem deseja aprender a montar mesas bonitas e funcionais,
            desenvolver gestos e postura adequados à etiqueta, e se sentir segura e elegante em qualquer refeição.
          </p>
        </div>

        <div className="mb-16 text-center">
          <div className="inline-block bg-stone-50 px-8 py-6 rounded-sm">
            <p className="text-lg md:text-xl text-gray-800 font-light">
              <span className="font-normal">Formato:</span> 1 online + 3 presenciais
            </p>
            <p className="text-lg md:text-xl text-gray-800 mt-2 font-light">
              <span className="font-normal">Duração:</span> 4 encontros de 1h30 a 2h cada
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex items-start gap-4 p-6 bg-stone-50 rounded-sm hover:bg-stone-100 transition-colors duration-300"
            >
              <div className="flex-shrink-0 mt-1">
                <feature.icon className="w-6 h-6 text-amber-700" strokeWidth={1.5} />
              </div>
              <p className="text-gray-800 leading-relaxed font-light">{feature.text}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="inline-block border-t border-b border-amber-700 py-6 px-12">
            <p className="text-2xl md:text-3xl text-gray-900 italic font-light tracking-wide">
              "O encantamento se constrói naquilo que os olhos não enxergam."
            </p>
          </div>
        </div>

        <div className="mt-20 grid md:grid-cols-2 gap-8">
          <div className="relative h-80 md:h-96 rounded-sm overflow-hidden shadow-lg">
            <img
              src="/settingTable.jpeg"
              alt="Table setting"
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="relative h-80 md:h-96 rounded-sm overflow-hidden shadow-lg">
            <img
              src="/cookies.jpeg"
              alt="Tea time"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

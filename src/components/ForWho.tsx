import { Home, Briefcase, User, Heart } from 'lucide-react';

export default function ForWho() {
  const audience = [
    {
      icon: Home,
      title: 'Receber com elegância',
      description: 'Pessoas que desejam receber com elegância em casa',
    },
    {
      icon: Briefcase,
      title: 'Profissionais',
      description: 'Profissionais que querem se destacar com comportamento adequado em almoços e jantares de negócios',
    },
    {
      icon: User,
      title: 'Aprimoramento pessoal',
      description: 'Quem quer aprimorar postura e gestos à mesa',
    },
    {
      icon: Heart,
      title: 'Amor pelos detalhes',
      description: 'Quem valoriza beleza, harmonia e cuidado em cada detalhe da refeição',
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-stone-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6 tracking-wide">
            Para quem é este curso
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {audience.map((item, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-sm shadow-sm hover:shadow-md transition-all duration-300 border border-stone-200"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-amber-50 rounded-full flex items-center justify-center">
                  <item.icon className="w-6 h-6 text-amber-700" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="text-xl font-normal text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-700 leading-relaxed font-light">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <div className="relative h-96 md:h-[500px] rounded-sm overflow-hidden shadow-lg">
            <img
              src="/mesaPosta.jpeg"
              alt="Professional table setting"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

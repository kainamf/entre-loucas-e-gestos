import { EVENT_LINK } from '../constants';

export default function Target() {
  const sessions = [
    {
      title: 'Encontro 1 – Online',
      subtitle: 'Introdução à etiqueta à mesa e tipos de serviço',
      activity: 'Atividade prática: montar mesa simples em casa.'
    },
    {
      title: 'Encontro 2 – Presencial',
      subtitle: 'Composição, harmonia e montagem prática de mesas',
      activity: ''
    },
    {
      title: 'Encontro 3 – Presencial',
      subtitle: 'Postura, gestos e etiqueta prática',
      activity: 'Simulação de refeição.'
    },
    {
      title: 'Encontro 4 – Presencial',
      subtitle: 'Ritual de receber: montagem completa',
      activity: 'Sequência de serviço e integração de aprendizado.'
    }
  ];

  return (
    <section id="roteiro" className="py-20 bg-brand.light relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-semibold text-font mb-4">Roteiro Resumido</h2>
          <p className="text-lg text-secondary-700 max-w-3xl mx-auto">Apresentamos as etapas do curso em formato de cards para facilitar a visualização.</p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {sessions.map((s, idx) => (
              <div key={idx} className="bg-background border-2 border-brand.warm rounded-2xl p-6 shadow-md hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-lg font-bold text-secondary-700 mb-2">{s.title}</h3>
                <p className="text-secondary-700 mb-3">{s.subtitle}</p>
                {s.activity && <p className="text-sm text-secondary-600">{s.activity}</p>}
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <a
              href={EVENT_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand.green text-white px-8 py-3 rounded-full text-lg font-semibold hover:opacity-95 transition-all duration-200 shadow-md inline-block"
            >
              Reserve sua vaga agora
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
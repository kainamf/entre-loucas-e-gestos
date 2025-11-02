import { EVENT_LINK } from '../constants';

export default function Target() {
  const targetAudience = [
    {
      title: "Pessoas interessadas em autoconhecimento e fortalecimento pessoal",
      description: "Você que busca desenvolver sua imagem com intencionalidade e se reconectar com sua essência autêntica",
      benefit: "Descubra seu potencial único de influência"
    },
    {
      title: "Profissionais que querem comunicar-se estrategicamente",
      description: "Homens e mulheres que desejam fortalecer sua apresentação pessoal através dos pilares da Comunicação, Imagem e Etiqueta",
      benefit: "Construa sua presença com propósito"
    },
    {
      title: "Pessoas com potencial de influência em suas redes",
      description: "Público engajado que busca impactar positivamente seus círculos sociais e profissionais de forma autêntica",
      benefit: "Amplifique seu impacto e networking"
    }
  ];

  return (
    <section id="publico" className="py-20 bg-primary-500 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-script text-font mb-4">
            Este evento é para você que:
          </h2>
          <p className="text-xl text-font max-w-4xl mx-auto">
            Busca desenvolver sua apresentação pessoal de forma estratégica, construída nos pilares da <strong>Comunicação, Imagem e Etiqueta</strong>
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            {targetAudience.map((item, index) => (
              <div key={index} className="group hover:scale-105 transition-transform duration-300">
                <div className="bg-tertiary-100 border-2 border-secondary-500 rounded-3xl p-6 h-full flex flex-col shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <h3 className="text-lg font-semibold text-secondary-700 mb-4 leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-secondary-700 leading-relaxed mb-6 flex-grow">
                    {item.description}
                  </p>
                  <a 
                    href={EVENT_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-secondary-300 text-white px-4 py-2 rounded-full text-sm font-semibold text-center hover:bg-primary-500 transition-all duration-300 block shadow-xl hover:shadow-2xl"
                  >
                    <div className="flex flex-col">
                      <span className="font-bold uppercase">CLIQUE AQUI</span>
                      <span>{item.benefit}</span>
                    </div>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-background rounded-3xl p-8 shadow-xl max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-font mb-4">
              Você se identificou com algum desses perfis?
            </h3>
            <p className="text-lg text-font mb-6">
              Então este evento foi pensado especialmente para você! Junte-se a nós nesta 
              jornada de autoconhecimento e desenvolvimento pessoal.
            </p>
            <a 
              href={EVENT_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-secondary-300 text-background px-8 py-3 rounded-full text-lg font-semibold hover:bg-secondary-500 transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl inline-block"
            >
              QUERO PARTICIPAR
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
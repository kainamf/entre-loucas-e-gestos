export default function Testimonials() {
  const items = [
    {
      text:
        'Eu me sinto muito mais capaz em receber minhas amigas para um chá da tarde ou minha família para almoçar! Aprendi a preparar tudo com elegância, de forma simples e bonita! Antes eu tinha até vergonha de receber pessoas, agora faço questão de ser anfitriã!',
      author: 'Melissa Paladinno — Especialista em Posicionamento Autêntico',
    },
    {
      text:
        'O curso foi incrível! Pude aprender por experiências muito parecidas com a vida real e minha autoconfiança mudou da água pro vinho! Maravilhoso o programa e só tenho a agradecer! Hoje me sinto muito mais capaz de ir a um bom restaurante e me portar corretamente em eventos sociais e corporativos.',
      author: 'Luiza Helena Gandini — Fotógrafa de gastronomia, produtos e food stylist.',
    },
  ];

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-8 text-center">O que dizem sobre nosso curso</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {items.map((it, idx) => (
            <blockquote key={idx} className="p-6 bg-stone-50 rounded-sm">
              <p className="text-gray-800 mb-4">{it.text}</p>
              <cite className="text-sm text-gray-600">{it.author}</cite>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}

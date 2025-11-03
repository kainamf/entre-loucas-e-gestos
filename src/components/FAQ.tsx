import { useState } from 'react';

const faqs = [
  {
    q: 'Qual a duração do curso de mesa posta?',
    a: 'O curso tem uma duração total de 10 horas, divididas em 4 encontros. Após a inscrição, o prazo para realização das aulas é de até 3 meses.',
  },
  {
    q: 'O curso é presencial ou online?',
    a: 'O curso é oferecido de forma híbrida (online e presencial) ou totalmente presencial.',
  },
  {
    q: 'Quem pode participar do curso?',
    a: 'O curso é destinado a todos que têm interesse em aprender mais sobre a etiqueta em mesa posta, desde iniciantes até quem já possui algum conhecimento.',
  },
  {
    q: 'Onde acontece o curso "Entre Mesas & Gestos"?',
    a: 'O curso pode ser realizado no Ateliê da Le Table, localizado na Ilha de Guaratiba/RJ, ou em local a combinar.',
  },
  {
    q: 'Como posso me inscrever no curso?',
    a: 'Para se inscrever, entre em contato pelo botão "Mais informações" nesta página e siga as orientações.',
  },
  {
    q: 'O curso fornece algum certificado?',
    a: 'Sim, ao concluir o curso com sucesso, você receberá um certificado validando sua participação.',
  },
  {
    q: 'Há algum suporte após a conclusão do curso?',
    a: 'Sim — mesmo após a conclusão você pode entrar em contato para esclarecer dúvidas ou solicitar orientações relacionadas à mesa posta.',
  },
  {
    q: 'O curso possui alguma garantia?',
    a: 'Caso o curso não atenda às suas expectativas, entre em contato para analisarmos a possibilidade de ressarcimento.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-16 md:py-20 bg-stone-50">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-6 text-center">Perguntas Frequentes</h2>
        <div className="space-y-4">
          {faqs.map((f, i) => (
            <div key={i} className="border rounded-sm overflow-hidden">
              <button
                className="w-full text-left px-4 py-3 flex justify-between items-center bg-white"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <span className="font-medium">{f.q}</span>
                <span className="text-gray-500">{openIndex === i ? '−' : '+'}</span>
              </button>
              {openIndex === i && (
                <div className="px-4 py-3 bg-stone-50 text-gray-700">
                  {f.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import React from 'react';
import { BRUNA_INFO, LEANDRA_INFO, RAQUEL_INFO } from '../constants';

export default function Team() {
  // Ordem alfabética
  const teamMembers = [BRUNA_INFO, LEANDRA_INFO, RAQUEL_INFO];

  // Função para gerar link do WhatsApp com mensagem personalizada
  const generateWhatsAppLink = (phone: string, name: string) => {
    const cleanPhone = phone.replace(/\D/g, ''); // Remove caracteres não numéricos
    const message = `Olá! Vim através do site do evento Tríade da Apresentação Pessoal e gostaria de saber mais sobre seus serviços.`;
    return `https://wa.me/55${cleanPhone}?text=${encodeURIComponent(message)}`;
  };

  return (
    <section id="team" className="py-20 bg-primary-700 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-script text-font mb-4">
            Conheça a Tríade
          </h2>
          <p className="text-xl text-font max-w-4xl mx-auto">
            Três especialistas dedicadas a transformar sua <strong>Comunicação, Imagem e Etiqueta</strong>
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-10">
            {teamMembers.map((member, index) => (
              <div key={index} className="group hover:scale-105 transition-transform duration-300">
                <div className="bg-tertiary-100 border-2 border-secondary-500 rounded-3xl p-8 h-full flex flex-col shadow-lg hover:shadow-xl transition-shadow duration-300 min-w-[320px]">
                  
                  {/* Top Section - Photo and Basic Info */}
                  <div className="flex gap-4 mb-6">
                    
                    {/* Photo */}
                    <div className="flex-shrink-0">
                      <div className="w-28 h-28 overflow-hidden shadow-lg border-2 border-secondary-300 rounded-full">
                        <img
                          src={member.image}
                          alt={member.name}
                          className={`w-full h-full object-cover object-top ${
                            index === 0 ? 'scale-150 translate-x-1' : 'scale-125'
                          }`}
                        />
                      </div>
                    </div>

                    {/* Header Info */}
                    <div className="flex flex-col justify-center flex-1">
                      <h3 className="text-lg font-bold text-secondary-700 mb-2">
                        {member.name}
                      </h3>
                      <p className="text-sm font-semibold text-secondary-500 mb-3">
                        {member.title}
                      </p>
                      
                      {/* Contact Info */}
                      <div className="space-y-2">
                        <a 
                          href={generateWhatsAppLink(member.phone, member.name)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5 text-xs text-secondary-600 hover:text-secondary-700 transition-colors duration-300"
                        >
                          <div className="w-4 h-4 bg-secondary-500 rounded-full flex items-center justify-center p-0.5">
                            <img src="/assets/icons/whatsapp.svg" alt="WhatsApp" className="w-2.5 h-2.5" />
                          </div>
                          <span>{member.phone}</span>
                        </a>
                        <a 
                          href={member.instagramUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5 text-xs text-secondary-600 hover:text-secondary-700 transition-colors duration-300"
                        >
                          <div className="w-4 h-4 bg-secondary-500 rounded-full flex items-center justify-center p-0.5">
                            <img src="/assets/icons/instagram.svg" alt="Instagram" className="w-2.5 h-2.5" />
                          </div>
                          <span>{member.instagram}</span>
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Section - Specialties and Mission */}
                  <div className="border-t border-secondary-200 pt-4 flex-grow">
                    {/* Specialties */}
                    <div className="mb-4">
                      <ul className="space-y-2">
                        {member.specialties.map((specialty, idx) => (
                          <li key={idx} className="text-sm text-secondary-700 flex items-start text-justify">
                            <span className="w-2 h-2 bg-secondary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            <span>{specialty}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Mission */}
                    <div className="border-t border-secondary-200 pt-4">
                      <p className="text-sm text-secondary-600 italic leading-relaxed text-justify">
                        "{member.mission}"
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
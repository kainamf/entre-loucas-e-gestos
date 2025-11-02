import React from 'react';
import { BRUNA_INFO, LEANDRA_INFO, RAQUEL_INFO } from '../constants';

export default function Team() {
  // Single testimonial / credibility block for Leandra
  return (
    <section id="depoimento" className="py-20 bg-brand.beige relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-5xl font-semibold text-font mb-4">Depoimento & Credibilidade</h2>
        </div>

        <div className="max-w-4xl mx-auto bg-background rounded-3xl p-8 shadow-md flex flex-col md:flex-row items-center gap-6">
          <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-2 border-brand.warm shadow-md">
            <img src="/assets/images/team/leandra.jpeg" alt="Leandra Marques" className="w-full h-full object-cover" />
          </div>

          <div className="text-left">
            <p className="text-lg font-semibold text-secondary-700">Leandra Marques</p>
            <p className="text-sm text-secondary-600 mb-4">Consultora especializada em etiqueta e comportamento, com experiência em eventos, mesas postas e formação de boas práticas para receber com elegância.</p>

            <p className="text-base text-secondary-700 italic">“Entre louças e gestos, a elegância é o que permanece.”</p>
          </div>
        </div>
      </div>
    </section>
  );
}
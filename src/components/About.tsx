import React from 'react';

export default function About() {
    return (
        <section id="sobre" className="py-20 bg-brand.sand relative overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl md:text-5xl font-semibold text-font mb-4">Sobre o Curso</h2>
                        <p className="text-lg text-secondary-700 max-w-3xl mx-auto">Este curso particular foi criado para mulheres que desejam transformar cada refeição em um gesto de acolhimento e sofisticação.</p>
                    </div>

                    <div className="bg-background backdrop-blur-sm rounded-3xl p-6 md:p-10 shadow-lg">
                        <div className="grid md:grid-cols-2 gap-8 mb-6">
                            <div>
                                <p className="text-base md:text-lg text-font mb-4">Formato: <strong>1 online + 3 encontros presenciais</strong></p>
                                <p className="text-base md:text-lg text-font mb-4">Duração: <strong>4 encontros de 1h30 a 2h</strong></p>
                                <p className="text-base md:text-lg text-font mb-4">Foco: <strong>Etiqueta à mesa, postura, gestos e estética da mesa posta</strong></p>
                            </div>

                            <div className="space-y-3">
                                <ul className="space-y-3 text-base text-font">
                                    <li className="flex items-start gap-3">
                                        <span className="text-2xl">🌿</span>
                                        <span>Aulas práticas e personalizadas</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-2xl">🍽️</span>
                                        <span>Montagem de mesas e combinação de louças</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-2xl">🤝</span>
                                        <span>Postura e comportamento à mesa</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-2xl">✨</span>
                                        <span>Experiência elegante, afetiva e didática</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
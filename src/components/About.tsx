import React from 'react';
import { User, MessageSquare, Heart } from 'lucide-react';

export default function About() {
    return (
        <section id="evento" className="py-20 bg-primary-300 relative overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-5xl md:text-6xl font-script text-font mb-8">
                            Sobre o Evento
                        </h2>
                    </div>

                    <div className="bg-background backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl">
                        <div className="grid md:grid-cols-2 gap-8 mb-8">
                            <p className="text-xl md:text-2xl text-font leading-relaxed mb-8">
                                Uma experiência que vai além da estética. Um encontro que une saberes sobre
                                imagem pessoal, etiqueta e comunicação autêntica.
                            </p>

                            <div className="text-left space-y-4">
                                <ul className="space-y-3 text-lg text-font">
                                    <li className="flex items-center gap-4">
                                        <div className="w-10 h-10 bg-primary-300 rounded-lg flex items-center justify-center">
                                            <User className="w-5 h-5 text-secondary-700" />
                                        </div>
                                        Apresentação pessoal com propósito
                                    </li>
                                    <li className="flex items-center gap-4">
                                        <div className="w-10 h-10 bg-primary-300 rounded-lg flex items-center justify-center">
                                            <MessageSquare className="w-5 h-5 text-secondary-700" />
                                        </div>
                                        A força da comunicação não verbal
                                    </li>
                                    <li className="flex items-center gap-4">
                                        <div className="w-10 h-10 bg-primary-300 rounded-lg flex items-center justify-center">
                                            <Heart className="w-5 h-5 text-secondary-700" />
                                        </div>
                                        Etiqueta como ferramenta de presença e respeito
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6 mt-8">
                        {/* Card Reconexão */}
                        <div className="bg-tertiary-100 border-2 border-secondary-500 rounded-3xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                            <div className="text-center">
                                <h3 className="text-xl font-bold text-secondary-700 mb-3">Reconexão</h3>
                                <p className="text-secondary-700 font-medium leading-relaxed">
                                    Conecte-se com quem você realmente é
                                </p>
                            </div>
                        </div>

                        {/* Card Presença */}
                        <div className="bg-tertiary-100 border-2 border-secondary-500 rounded-3xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                            <div className="text-center">
                                <h3 className="text-xl font-bold text-secondary-700 mb-3">Presença</h3>
                                <p className="text-secondary-700 font-medium leading-relaxed">
                                    Desenvolva sua comunicação autêntica
                                </p>
                            </div>
                        </div>

                        {/* Card Propósito */}
                        <div className="bg-tertiary-100 border-2 border-secondary-500 rounded-3xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                            <div className="text-center">
                                <h3 className="text-xl font-bold text-secondary-700 mb-3">Propósito</h3>
                                <p className="text-secondary-700 font-medium leading-relaxed">
                                    Fortaleça seus caminhos pessoais e profissionais
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
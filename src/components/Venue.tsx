import React from 'react';
import { Calendar, MapPin } from 'lucide-react';

export default function Venue() {
    return (
        <section id="local" className="py-20 bg-primary-900 relative overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-6xl mx-auto">
                    {/* Vogue Gallery Section */}
                    <div className="bg-background backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl">
                        {/* Title */}
                        <div className="text-center mb-12">
                            <h3 className="text-3xl md:text-4xl font-script text-font mb-4">
                                Local do Evento!
                            </h3>
                        </div>

                        <div className="grid lg:grid-cols-2 gap-12 items-start">
                            {/* Left Column */}
                            <div className="space-y-8">
                                {/* Logo + Info Section */}
                                <div className="flex items-start justify-between gap-6">
                                    {/* Title and Date Info */}
                                    <div className="space-y-4 flex-1 text-center">
                                        <h4 className="text-xl md:text-2xl font-bold text-font">
                                            Espaço Cultural Vogue Square
                                        </h4>

                                        {/* Date and Time */}
                                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-center gap-3">
                                            <div className="flex-1">
                                                <div className="text-base sm:text-lg font-bold text-secondary-700">
                                                    21 Agosto 2025
                                                </div>
                                                <div className="text-sm text-secondary-600">
                                                    16h às 19h
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Apoio Section - Right Side */}
                                    <div className="flex flex-col items-center gap-2">
                                        <span className="text-sm font-semibold text-secondary-600">Apoio</span>
                                        <div className="flex items-center gap-2">
                                            <img
                                                src="/assets/images/vogue-logo.jpeg"
                                                alt="Vogue Square Gallery"
                                                className="h-36 w-36 md:h-40 md:w-40 object-contain flex-shrink-0"
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Removed old Apoio Section */}

                                {/* Description */}
                                <p className="text-font leading-relaxed">
                                    Um espaço contemporâneo e vibrante dentro do Vogue Square, com design moderno
                                    e atmosfera sofisticada. O ambiente ideal para um encontro que une propósito,
                                    presença e imagem com elegância.
                                </p>

                                {/* Space Image */}
                                <div className="rounded-2xl overflow-hidden shadow-lg">
                                    <img
                                        src="/assets/images/vogue-space.jpeg"
                                        alt="Vogue Gallery Brasil - Espaço do Evento"
                                        className="w-full h-64 md:h-72 lg:h-80 object-cover"
                                    />
                                </div>
                            </div>

                            {/* Right Column */}
                            <div className="flex flex-col h-full space-y-6">
                                {/* Address */}
                                <div>
                                    <div className="flex items-center gap-3 mb-4">
                                        <MapPin className="w-6 h-6 text-secondary-700" />
                                        <h5 className="text-lg font-bold text-font">Vogue Square</h5>
                                    </div>
                                    <div className="space-y-2 text-secondary-700 ml-9">
                                        <p className="font-semibold">Av. das Américas, 8585</p>
                                        <p className="font-semibold">Barra da Tijuca, Rio de Janeiro - RJ</p>
                                    </div>
                                </div>

                                {/* Google Maps - Expandido */}
                                <div className="rounded-2xl overflow-hidden shadow-lg flex-1">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3673.0162843147594!2d-43.3664865849345!3d-23.01234998460905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9bda2c5c5a5b5b5b%3A0x5b5b5b5b5b5b5b5b!2sAv.%20das%20Am%C3%A9ricas%2C%208585%20-%20Barra%20da%20Tijuca%2C%20Rio%20de%20Janeiro%20-%20RJ%2C%2022793-081!5e0!3m2!1spt-BR!2sbr!4v1234567890123!5m2!1spt-BR!2sbr"
                                        width="100%"
                                        height="100%"
                                        style={{ border: 0, minHeight: '400px' }}
                                        allowFullScreen
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                        title="Localização Vogue Gallery Brasil"
                                    ></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

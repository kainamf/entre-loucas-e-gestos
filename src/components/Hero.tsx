import { EVENT_LINK } from '../constants';

export default function Hero() {
    return (
        <section className="min-h-screen bg-primary-100 relative overflow-hidden">
            <div className="container mx-auto px-4 py-12 md:pt-16 md:pb-24 relative z-10 max-w-6xl">
                <div className="grid md:grid-cols-2 gap-4 md:gap-8 items-center">
                    {/* Left Column: Logo and Text */}
                    <div className="order-1 md:order-1 text-center">
                        {/* Logo */}
                        <div className="mb-6">
                            <img
                                src="/assets/images/logos/logo.png"
                                alt="Tríade da Apresentação Pessoal"
                                className="h-24 md:h-28 mb-8 mx-auto"
                            />
                        </div>

                        {/* Main Title */}
                        <div className="mb-6">
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-light text-secondary-700 leading-tight">
                                <span className="block mb-1">O Corpo Fala,</span>
                                <span className="block mb-1">a Imagem Confirma,</span>
                                <span className="block">a Voz Sustenta</span>
                            </h1>
                        </div>
                    </div>

                    {/* Right Column: Circular Image */}
                    <div className="order-2 md:order-2 flex justify-center">
                        <div className="w-60 h-60 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-lg border-4 border-secondary-500">
                            <img
                                src="/assets/images/triade.jpeg"
                                alt="Tríade da Apresentação Pessoal"
                                className="w-full h-full object-cover object-top"
                            />
                        </div>
                    </div>
                </div>

                {/* Centered Text Content */}
                <div className="max-w-2xl mx-auto text-center mt-12 md:mt-16">
                    {/* First Block */}
                    <div className="space-y-3 mb-8">
                        <p className="text-lg md:text-xl text-secondary-700">
                            Uma imersão com a
                        </p>
                        <p className="text-xl md:text-2xl font-semibold text-secondary-700">
                            Tríade da Apresentação Pessoal
                        </p>
                        <p className="text-lg md:text-xl text-secondary-700">
                            para transformar presença em potência.
                        </p>
                    </div>
                    {/* Second Block */}
                    <div className="space-y-3 mb-8">
                        <p className="text-lg md:text-xl text-secondary-700">
                            Um encontro entre imagem, presença e propósito.
                        </p>
                        <p className="text-base md:text-lg font-semibold text-secondary-500">
                            Palestras • Conexão • Experiência
                        </p>
                    </div>
                    {/* Third Block */}
                    <div className="space-y-3">
                        <p className="text-lg md:text-xl text-secondary-700">
                            Esperamos por você para brindar à esse momento com elegância e propósito.
                        </p>
                    </div>

                </div>

                {/* CTA Button */}
                <div className="flex my-8 flex-col sm:flex-row gap-3 justify-center items-center">
                    <a 
                        href={EVENT_LINK}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-secondary-300 text-background px-8 py-3 rounded-full text-lg font-semibold hover:bg-primary-700 transform hover:scale-105 transition-all duration-300 shadow-lg inline-block"
                    >
                        GARANTIR MINHA VAGA
                    </a>
                </div>
            </div>
        </section>
    );
}
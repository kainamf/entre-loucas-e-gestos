import { EVENT_LINK } from '../constants';

export default function Hero() {
    return (
        <section className="min-h-screen bg-brand.light relative overflow-hidden">
            <div className="container mx-auto px-4 py-12 md:pt-16 md:pb-24 relative z-10 max-w-6xl">
                <div className="grid md:grid-cols-2 gap-6 md:gap-12 items-center">
                    {/* Left Column: Title and Subtitle */}
                    <div className="order-1 md:order-1 text-center md:text-left">
                        <div className="mb-4">
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-font leading-tight">
                                Entre Louças e Gestos
                            </h1>
                        </div>
                        <div className="mb-6">
                            <p className="text-lg md:text-xl text-secondary-700">
                                A arte de receber com elegância, sensibilidade e naturalidade
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start mt-6">
                            <a
                                href={EVENT_LINK}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-brand.green text-white px-6 py-3 rounded-full text-lg font-semibold hover:opacity-95 transform hover:scale-102 transition-all duration-200 shadow-md inline-block"
                            >
                                Garanta sua vaga
                            </a>
                        </div>
                    </div>

                    {/* Right Column: Circular Image (placeholder) */}
                    <div className="order-2 md:order-2 flex justify-center md:justify-end">
                        <div className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-lg overflow-hidden shadow-lg border-2 border-brand.warm">
                            {/* Replace this image with a photo of Leandra arranging a table or a close of dishes */}
                            <img
                                src="/assets/images/team/leandra.jpeg"
                                alt="Leandra montando mesa posta"
                                className="w-full h-full object-cover object-center"
                            />
                        </div>
                    </div>
                </div>

                {/* Short invite */}
                <div className="max-w-2xl mx-auto text-center mt-12 md:mt-16">
                    <p className="text-lg md:text-xl text-secondary-700">
                        Um curso particular pensado para mulheres que desejam transformar cada refeição em um gesto de acolhimento e sofisticação.
                    </p>
                </div>
            </div>
        </section>
    );
}
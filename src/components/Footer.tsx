import { Mail, MessageCircle, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-stone-900 text-white py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <div className="mb-6 flex justify-center">
            <img
              src="/leTableLogo.png"
              alt="Le Table Logo"
              className="w-20 h-auto opacity-80"
            />
          </div>
          <h3 className="text-2xl font-light tracking-wide mb-2">Entre Louças e Gestos</h3>
          <p className="text-stone-400 font-light">
            Mais do que regras, aprenda a viver a etiqueta com naturalidade e estilo.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="text-center md:text-left">
            <h4 className="text-lg font-normal mb-4 text-stone-300">Contato</h4>
            <div className="space-y-3">
              <a
                href="https://wa.me/5511999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center md:justify-start gap-3 text-stone-400 hover:text-white transition-colors duration-300"
              >
                <MessageCircle size={20} />
                <span className="font-light">WhatsApp</span>
              </a>
              <a
                href="mailto:leandra.marques03@gmail.com"
                className="flex items-center justify-center md:justify-start gap-3 text-stone-400 hover:text-white transition-colors duration-300"
              >
                <Mail size={20} />
                <span className="font-light">leandra.marques03@gmail.com</span>
              </a>
            </div>
          </div>

          <div className="text-center md:text-right">
            <h4 className="text-lg font-normal mb-4 text-stone-300">Redes Sociais</h4>
            <div className="flex justify-center md:justify-end gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-stone-800 rounded-full flex items-center justify-center hover:bg-amber-700 transition-colors duration-300"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-stone-800 rounded-full flex items-center justify-center hover:bg-amber-700 transition-colors duration-300"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-stone-800 pt-8 text-center">
          <p className="text-stone-500 text-sm font-light">
            © 2025 Entre Louças e Gestos. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}

import { INSTAGRAM_LINK } from '../constants';

export default function Footer() {
  return (
    <footer className="bg-primary-700 text-white py-4 relative z-[60]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-6 text-sm text-white text-center">
          {/* Instagram Link */}
          <a 
            href={INSTAGRAM_LINK} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 hover:text-primary-700 transition-colors"
          >
            <img src="/assets/icons/instagram.svg" alt="Instagram" className="w-4 h-4" />
            <span>triadedaapresentacaopessoal</span>
          </a>
          
          {/* Separator */}
          <span className="hidden sm:inline text-white">|</span>
          
          {/* Copyright */}
          <span className="text-center">&copy; 2025 Tríade da Apresentação Pessoal. Todos os direitos reservados.</span>
          
          {/* Separator */}
          <span className="hidden sm:inline text-white">|</span>
          
          {/* Developer */}
          <a 
            href="https://github.com/kainamf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-center hover:text-primary-700 transition-colors underline"
          >
            Desenvolvido por Kainã Freitas
          </a>
        </div>
      </div>
    </footer>
  );
}
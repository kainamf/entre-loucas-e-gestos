import { INSTAGRAM_LINK, EVENT_LINK, EMAIL } from '../constants';

export default function Footer() {
  return (
    <footer className="bg-brand.warm text-font py-6 relative z-[60]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-font">
          <div className="flex items-center gap-4">
            <a href={EVENT_LINK} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:opacity-90">
              <img src="/assets/icons/whatsapp.svg" alt="WhatsApp" className="w-5 h-5" />
              <span className="font-semibold">Reservas / WhatsApp</span>
            </a>

            <a href={EMAIL} className="flex items-center gap-2 hover:opacity-90">
              <img src="/assets/icons/mail.svg" alt="E-mail" className="w-5 h-5" />
              <span>leandra.marques03@gmail.com</span>
            </a>
          </div>

          <div className="text-center">
            <p className="text-sm">Entre louças e gestos, a elegância é o que permanece.</p>
            <p className="text-xs text-secondary-700">Vagas limitadas • Curso individual personalizado</p>
          </div>

          <div className="text-right">
            <a href={INSTAGRAM_LINK} target="_blank" rel="noopener noreferrer" className="underline hover:opacity-90">Instagram</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
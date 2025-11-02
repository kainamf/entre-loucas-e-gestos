import { X, Users, User } from 'lucide-react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Modal({ isOpen, onClose }: ModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      ></div>

      <div className="relative bg-white rounded-sm shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center hover:bg-gray-100 rounded-full transition-colors duration-200"
        >
          <X size={24} className="text-gray-600" />
        </button>

        <div className="p-8 md:p-12">
          <h3 className="text-3xl md:text-4xl font-light text-gray-900 mb-6 tracking-wide text-center">
            Escolha sua modalidade
          </h3>
          <p className="text-center text-gray-600 mb-10 font-light">
            Selecione a opção que melhor se adapta às suas necessidades
          </p>

          <div className="space-y-6">
            <div className="border-2 border-stone-200 rounded-sm p-8 hover:border-amber-700 transition-all duration-300 hover:shadow-lg cursor-pointer group">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-amber-50 rounded-full flex items-center justify-center group-hover:bg-amber-100 transition-colors duration-300">
                  <User className="w-6 h-6 text-amber-700" strokeWidth={1.5} />
                </div>
                <div className="flex-1">
                  <h4 className="text-2xl font-normal text-gray-900 mb-2">Individual</h4>
                  <p className="text-gray-600 font-light leading-relaxed mb-4">
                    Curso personalizado com horários flexíveis, adaptado ao seu ritmo e necessidades específicas.
                  </p>
                  <div className="space-y-2 text-sm text-gray-600">
                    <p>
                      <span className="font-normal">Formato:</span> 1 online + 3 presenciais
                    </p>
                    <p>
                      <span className="font-normal">Duração:</span> 1h30 a 2h por encontro
                    </p>
                    <p>
                      <span className="font-normal">Datas:</span> Flexíveis
                    </p>
                  </div>
                </div>
              </div>
              <a
                href="https://wa.me/5511999999999?text=Olá! Gostaria de saber mais sobre o curso Individual - Entre Louças e Gestos"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-amber-700 text-white text-center py-3 rounded-sm hover:bg-amber-800 transition-colors duration-300 mt-6"
              >
                Solicitar informações
              </a>
            </div>

            <div className="border-2 border-stone-200 rounded-sm p-8 hover:border-amber-700 transition-all duration-300 hover:shadow-lg cursor-pointer group">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-amber-50 rounded-full flex items-center justify-center group-hover:bg-amber-100 transition-colors duration-300">
                  <Users className="w-6 h-6 text-amber-700" strokeWidth={1.5} />
                </div>
                <div className="flex-1">
                  <h4 className="text-2xl font-normal text-gray-900 mb-2">Grupo</h4>
                  <p className="text-gray-600 font-light leading-relaxed mb-4">
                    Aprenda em grupo, compartilhando experiências e criando conexões com pessoas que valorizam a elegância.
                  </p>
                  <div className="space-y-2 text-sm text-gray-600">
                    <p>
                      <span className="font-normal">Formato:</span> 1 online + 3 presenciais
                    </p>
                    <p>
                      <span className="font-normal">Duração:</span> 1h30 a 2h por encontro
                    </p>
                    <p>
                      <span className="font-normal">Participantes:</span> Grupos de até 8 pessoas
                    </p>
                    <p>
                      <span className="font-normal">Datas:</span> Turmas programadas
                    </p>
                  </div>
                </div>
              </div>
              <a
                href="https://wa.me/5511999999999?text=Olá! Gostaria de saber mais sobre o curso em Grupo - Entre Louças e Gestos"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-amber-700 text-white text-center py-3 rounded-sm hover:bg-amber-800 transition-colors duration-300 mt-6"
              >
                Solicitar informações
              </a>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-gray-600 text-sm font-light">
              Entre em contato pelo WhatsApp para valores e disponibilidade
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

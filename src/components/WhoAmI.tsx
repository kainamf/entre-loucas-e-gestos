export default function WhoAmI() {
  return (
    <section className="py-20 md:py-28 bg-stone-50">
      <div className="max-w-6xl mx-auto px-6">
  <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-8 tracking-wide text-center">Quem sou eu</h2>

        <div className="relative rounded-sm overflow-hidden shadow-lg">
          <img
            src="/cookies.jpeg"
            alt="cookies"
            className="w-full h-[60vh] md:h-[70vh] object-cover"
          />

          {/* darken image to make white text readable */}
          <div className="absolute inset-0 bg-black/50"></div>

          <div className="absolute inset-0 flex items-center justify-center p-8">
            <div className="max-w-3xl text-center text-white">
              <h3 className="text-xl md:text-2xl font-normal mb-4">Leandra Marques</h3>
              <p className="text-sm md:text-base mb-4">
                Apaixonada pela arte de Receber Bem e pela criação de experiências memoráveis, Leandra
                Marques construiu sua trajetória unindo técnica, sensibilidade e propósito. Consultora de
                Etiqueta, certificada em Mesa Posta pelo MEC|FBr-IFC, Cerimonialista e Chef de Cozinha, é
                também CEO da LeTable, um ateliê dedicado à elegância dos detalhes e ao prazer de
                Receber.Bem.
              </p>

              <p className="text-sm md:text-base mb-4">
                Parceira do Socila Forever – Elegância & Etiqueta e coautora do livro Mulheres & Poder,
                Leandra acredita que a verdadeira sofisticação está no comportamento — nos gestos sutis,
                nas palavras gentis e na forma como acolhemos o outro.
              </p>

              <p className="text-sm md:text-base mb-4">
                Seja em uma mesa cuidadosamente posta, em uma aula de etiqueta ou em um jantar
                intimista, seu propósito é o mesmo: transformar cada encontro em uma experiência de
                beleza, acolhimento e significado.
              </p>

              <p className="text-sm md:text-base">
                Mãe, esposa e eterna curiosa sobre o poder dos detalhes, Leandra Marques mostra, com
                leveza e autenticidade, que elegância é atitude — dentro e fora da mesa.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

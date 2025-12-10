import React from 'react';

const Pricing: React.FC = () => {
  const whatsappLink = "https://wa.me/553832133244?text=Quero%20garantir%20minha%20vaga%20no%20Revisa%20UEMG!";

  return (
    <section id="pricing" className="w-full bg-electric py-20 px-6 relative overflow-hidden">
      {/* Abstract Background */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white opacity-5 rounded-full blur-[100px] translate-x-1/2 -translate-y-1/2"></div>

      <div className="max-w-5xl mx-auto relative z-10">
        <h2 className="font-anton text-4xl md:text-6xl text-center text-white mb-16 uppercase">
          Invista na sua <span className="text-tangerine">aprovação</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">

          {/* Aluno Áurea */}
          <div className="bg-ebony rounded-3xl p-8 md:p-10 text-white flex flex-col relative border border-white/10 shadow-2xl">
            <div className="absolute top-0 left-0 w-full h-2 bg-tangerine rounded-t-3xl"></div>
            <h3 className="font-anton text-3xl mb-2">Aluno Áurea</h3>
            <div className="my-8">
              <span className="font-anton text-5xl md:text-6xl tracking-tight text-tangerine">Gratuito</span>
            </div>
            <p className="font-inter text-gray-300 mb-8 flex-grow">
              Acesso liberado para todos os alunos matriculados em qualquer turma do Áurea 2025.
            </p>
            <a
              href="https://delicategiantpanda-n8n.cloudfy.live/form/109ad8be-aacc-4f3d-ab30-29e65505fb3f"
              target="_blank"
              rel="noreferrer"
              className="w-full block text-center bg-white/10 hover:bg-white/20 text-white font-bold py-4 rounded-full transition-colors"
            >
              Sou aluno Áurea
            </a>
          </div>

          {/* Aluno Externo */}
          <div className="bg-white rounded-3xl p-8 md:p-10 text-ebony flex flex-col relative shadow-2xl transform md:scale-105 border-4 border-tangerine">
            <div className="absolute top-4 right-4 bg-tangerine text-white text-xs font-bold px-3 py-1 rounded-full uppercase">
              Mais popular
            </div>
            <h3 className="font-anton text-3xl mb-2 text-electric">Aluno Externo</h3>
            <div className="my-8">
              <span className="text-lg font-bold text-gray-500 line-through mr-2"></span>
              <span className="font-anton text-5xl md:text-6xl tracking-tight">R$ 199,00</span>
              <p className="text-gray-500 font-bold mt-2">50% de desconto até 14/12</p>
            </div>
            <p className="font-inter text-gray-600 mb-8 flex-grow">
              Garanta acesso completo a todos os materiais, simulados, áudios e correções de redação.
            </p>
            <a
              href="https://www.asaas.com/c/84vj73k6clokc7v7"
              target="_blank"
              rel="noreferrer"
              className="w-full block text-center bg-electric hover:bg-[#1a00cc] text-white font-bold py-4 rounded-full transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
            >
              Quero participar
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Pricing;
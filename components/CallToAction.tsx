import React from 'react';
import { ArrowRight } from 'lucide-react';

const CallToAction: React.FC = () => {
  const scrollToPricing = () => {
    const section = document.getElementById('pricing');
    section?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="w-full bg-ebony py-24 px-6 relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-electric opacity-10 rounded-full blur-[80px]"></div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="font-anton text-4xl md:text-6xl text-white mb-6 uppercase leading-tight">
          Prepare-se com quem conhece a prova da <span className="text-electric">UEMG</span>
        </h2>
        
        <p className="font-inter text-xl text-gray-300 mb-10 leading-relaxed">
          O Revisa UEMG reúne teoria, prática, simulados, redação e revisão inteligente para você chegar confiante no dia da prova. Intensivo, acessível e direto ao ponto.
        </p>

        <button 
          onClick={scrollToPricing}
          className="inline-flex items-center gap-3 bg-tangerine hover:bg-[#e04e00] text-white font-bold text-xl py-5 px-12 rounded-full transition-all duration-300 shadow-lg hover:shadow-tangerine/50"
        >
          Garantir minha vaga agora
          <ArrowRight className="w-6 h-6" />
        </button>
      </div>
    </section>
  );
};

export default CallToAction;
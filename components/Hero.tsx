import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToPricing = () => {
    const section = document.getElementById('pricing');
    section?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative w-full bg-electric text-white py-20 lg:py-32 px-6 overflow-hidden">
      {/* Decorative Circles (Brand Identity) */}
      <div className="absolute top-[-20%] right-[-10%] w-[50vw] h-[50vw] bg-white opacity-10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-[30vw] h-[30vw] bg-tangerine opacity-20 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-6xl mx-auto flex flex-col items-center text-center relative z-10">
        <h1 className="font-anton text-6xl md:text-8xl lg:text-9xl uppercase tracking-wide leading-[0.9] mb-6">
          Revisa <span className="text-white">UEMG</span>
        </h1>
        
        <h2 className="font-inter font-bold text-xl md:text-3xl lg:text-4xl max-w-3xl mb-8 text-white/90">
          A revisão final mais completa para quem vai fazer a prova da UEMG.
        </h2>
        
        <p className="font-inter text-lg md:text-xl text-white/80 max-w-2xl mb-12 leading-relaxed">
          Cadernos teóricos, 3 simulados, 3 temas de redação, áudios de revisão e um cronograma completo para você chegar na prova com estratégia, foco e segurança.
        </p>

        <button 
          onClick={scrollToPricing}
          className="group bg-tangerine hover:bg-[#e04e00] text-white font-bold text-lg md:text-xl py-4 px-10 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center gap-3"
        >
          Quero garantir minha vaga
          <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
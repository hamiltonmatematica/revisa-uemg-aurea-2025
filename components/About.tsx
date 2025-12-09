import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const checklistItems = [
  "Cadernos teóricos com os principais tópicos da UEMG",
  "3 simulados com padrão UEMG",
  "3 temas de redação com aulas de apoio",
  "Fala, Áurea com revisões em áudio para estudos rápidos",
  "Acompanhamento organizado por etapas",
  "Planejamento inteligente até o dia da prova"
];

const About: React.FC = () => {
  return (
    <section className="w-full bg-white text-ebony py-20 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Content */}
        <div>
          <h3 className="font-anton text-tangerine text-4xl md:text-5xl uppercase mb-8">
            Sobre o Revisa UEMG
          </h3>
          <div className="space-y-6 font-inter text-lg leading-relaxed text-gray-700">
            <p>
              A UEMG é um dos processos seletivos mais concorridos da região. Por isso o Áurea preparou um cronograma especial de revisão, organizado com foco total nos conteúdos que realmente importam para a prova.
            </p>
            <p>
              O Revisa UEMG é um programa curto, direcionado e objetivo, com materiais exclusivos e um calendário pensado para evoluir sua preparação dia após dia.
            </p>
          </div>
        </div>

        {/* Right Content - Checklist Box */}
        <div className="bg-gray-50 p-8 md:p-10 rounded-3xl shadow-xl border border-gray-100 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-24 h-24 bg-electric opacity-10 rounded-bl-full"></div>
          
          <ul className="space-y-4">
            {checklistItems.map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-electric flex-shrink-0 mt-1" />
                <span className="font-inter font-medium text-lg text-ebony">{item}</span>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  );
};

export default About;
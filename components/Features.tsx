import React from 'react';
import { 
  ClipboardCheck, 
  PenLine, 
  Library, 
  Headphones, 
  CalendarRange, 
  TrendingUp 
} from 'lucide-react';

const features = [
  {
    icon: <ClipboardCheck className="w-10 h-10 text-electric" />,
    title: "3 simulados",
    description: "2 compactos e 1 completo com padrão UEMG."
  },
  {
    icon: <PenLine className="w-10 h-10 text-electric" />,
    title: "3 temas de redação",
    description: "Com aulas de apoio. Análise, repertório e orientação para construção da intervenção."
  },
  {
    icon: <Library className="w-10 h-10 text-electric" />,
    title: "Cadernos teóricos",
    description: "Principais tópicos organizados de forma objetiva."
  },
  {
    icon: <Headphones className="w-10 h-10 text-electric" />,
    title: "Fala, Áurea",
    description: "Revisão dos pontos mais cobrados no vestibular em formato de podcast. Estudos rápidos, práticos e eficientes."
  },
  {
    icon: <CalendarRange className="w-10 h-10 text-electric" />,
    title: "Planejamento completo",
    description: "Cronograma diário para guiar cada etapa da revisão."
  },
  {
    icon: <TrendingUp className="w-10 h-10 text-electric" />,
    title: "Acompanhamento inteligente",
    description: "Tudo pensado para sua evolução até o dia da prova."
  }
];

const Features: React.FC = () => {
  return (
    <section className="w-full bg-gray-50 py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-anton text-4xl md:text-5xl text-center mb-16 text-ebony uppercase">
          O que o aluno vai <span className="text-tangerine">receber</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <div key={idx} className="bg-white p-8 rounded-3xl shadow-lg border-b-4 border-transparent hover:border-electric transition-all duration-300 hover:-translate-y-2">
              <div className="bg-blue-50 w-20 h-20 rounded-2xl flex items-center justify-center mb-6">
                {feature.icon}
              </div>
              <h3 className="font-anton text-2xl text-ebony mb-4">{feature.title}</h3>
              <p className="font-inter text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
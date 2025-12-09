import React from 'react';
import { Calendar, BookOpen, PenTool, Mic, ClipboardList } from 'lucide-react';

interface Event {
  date: string;
  title: string;
  description?: string;
  subDescription?: string;
  type: 'simulado' | 'redacao' | 'audio' | 'teoria';
}

const januaryEvents: Event[] = [
  {
    date: '05 Jan',
    title: '1º tema de redação',
    description: 'com aula de apoio',
    type: 'redacao'
  },
  {
    date: '06 Jan',
    title: 'Simulado compacto 1',
    description: 'Padrão UEMG',
    type: 'simulado'
  },
  {
    date: '07-10 Jan',
    title: 'Fala, Áurea',
    description: 'Áudios de revisão rápida com os tópicos essenciais da prova',
    subDescription: 'Formato de podcast para o aluno estudar de forma leve e contínua',
    type: 'audio'
  },
  {
    date: '11 Jan',
    title: '2º tema de redação',
    description: 'com aula de apoio',
    type: 'redacao'
  },
  {
    date: '12 Jan',
    title: 'Simulado compacto 2',
    description: '',
    type: 'simulado'
  },
  {
    date: '13-14 Jan',
    title: 'Fala, Áurea',
    description: 'Revisão final dos conteúdos mais relevantes',
    type: 'audio'
  },
  {
    date: '15 Jan',
    title: '3º tema de redação',
    description: '',
    type: 'redacao'
  },
  {
    date: '16 Jan',
    title: 'Simulado completo',
    description: 'Modelo UEMG',
    type: 'simulado'
  },
];

const getIcon = (type: Event['type']) => {
  switch (type) {
    case 'simulado': return <ClipboardList className="w-6 h-6 text-white" />;
    case 'redacao': return <PenTool className="w-6 h-6 text-white" />;
    case 'audio': return <Mic className="w-6 h-6 text-white" />;
    case 'teoria': return <BookOpen className="w-6 h-6 text-white" />;
    default: return <Calendar className="w-6 h-6 text-white" />;
  }
};

const Schedule: React.FC = () => {
  return (
    <section className="w-full bg-ebony text-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-anton text-4xl md:text-6xl text-center mb-16 uppercase">
          Como será o <span className="text-electric">Revisa UEMG</span>
        </h2>

        {/* Etapa 1 */}
        <div className="mb-16">
          <div className="bg-[#1e1629] rounded-3xl p-8 md:p-12 border border-white/10 flex flex-col md:flex-row items-center gap-8 relative overflow-hidden group hover:border-electric/50 transition-colors duration-300">
            <div className="absolute top-0 left-0 w-2 h-full bg-electric"></div>
            
            <div className="bg-electric p-4 rounded-full">
              <BookOpen className="w-8 h-8 text-white" />
            </div>
            
            <div className="flex-1 text-center md:text-left">
              <span className="inline-block py-1 px-3 rounded-full bg-white/10 text-sm font-bold uppercase tracking-wider mb-2 text-tangerine">Etapa 1</span>
              <h3 className="font-anton text-3xl mb-2">Cadernos Teóricos</h3>
              <p className="text-xl font-bold text-white mb-2">De 15 de dezembro a 20 de dezembro</p>
              <p className="text-white/70">Disponibilização de cadernos com os principais tópicos cobrados na UEMG. Conteúdo direto, objetivo e fácil de revisar.</p>
            </div>
          </div>
        </div>

        {/* Etapa 2 */}
        <div>
          <div className="flex items-center gap-4 mb-10">
            <span className="w-12 h-1 bg-tangerine rounded-full"></span>
            <h3 className="font-anton text-3xl md:text-4xl">Etapa 2 - Revisão Intensiva</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {januaryEvents.map((event, idx) => (
              <div key={idx} className="bg-[#1e1629] p-6 rounded-2xl border border-white/5 hover:bg-[#2a2038] hover:border-tangerine/50 transition-all duration-300 flex flex-col h-full group">
                <div className="flex justify-between items-start mb-4">
                  <div className="bg-gray-800 group-hover:bg-tangerine transition-colors p-3 rounded-xl">
                    {getIcon(event.type)}
                  </div>
                  <span className="font-anton text-xl text-white/50">{event.date}</span>
                </div>
                
                <h4 className="font-bold text-xl mb-2 text-white">{event.title}</h4>
                {event.description && (
                  <p className="text-white/70 text-sm mb-2">{event.description}</p>
                )}
                {event.subDescription && (
                  <p className="text-white/50 text-xs italic mt-auto pt-2 border-t border-white/10">{event.subDescription}</p>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Schedule;
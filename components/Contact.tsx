import React from 'react';
import { MessageCircle } from 'lucide-react';

interface ContactCardProps {
  name: string;
  role: string;
  phone: string;
  link: string;
}

const contacts: ContactCardProps[] = [
  {
    name: "Alysson Luiz Freitas",
    role: "Sócio Diretor",
    phone: "(38) 99957-3075",
    link: "https://wa.me/5538999573075"
  },
  {
    name: "Hamilton Vinícius",
    role: "Sócio Diretor",
    phone: "(38) 99153-8392",
    link: "https://wa.me/5538991538392"
  },
  {
    name: "Emanuelle",
    role: "Coordenação Pedagógica",
    phone: "(38) 99831-7477",
    link: "https://wa.me/5538998317477"
  },
  {
    name: "Atendimento Áurea",
    role: "Secretaria",
    phone: "(38) 3213-3244",
    link: "https://wa.me/553832133244"
  }
];

const Contact: React.FC = () => {
  return (
    <section className="w-full bg-gray-50 py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-anton text-4xl text-ebony text-center mb-12 uppercase">
          Fale Conosco
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contacts.map((contact, idx) => (
            <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-blue-50 text-electric rounded-full flex items-center justify-center mb-4">
                <span className="font-anton text-2xl">{contact.name.charAt(0)}</span>
              </div>
              <h3 className="font-bold text-lg text-ebony">{contact.name}</h3>
              <p className="text-gray-500 text-sm mb-6">{contact.role}</p>
              
              <a 
                href={contact.link}
                target="_blank"
                rel="noreferrer"
                className="mt-auto flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white py-2 px-6 rounded-full font-medium transition-colors text-sm w-full justify-center"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
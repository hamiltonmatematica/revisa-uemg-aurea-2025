import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-ebony text-white py-12 px-6 border-t border-white/10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <h2 className="font-outfit font-medium text-3xl tracking-tight mb-2">áurea</h2>
          <p className="text-gray-400 text-sm">Cursos e Pré Vestibular</p>
        </div>
        
        <div className="text-center md:text-right">
          <p className="font-anton text-xl tracking-wide uppercase text-tangerine">
            Tudo novo, de um jeito único
          </p>
          <p className="text-gray-500 text-xs mt-2">
            &copy; {new Date().getFullYear()} Áurea. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
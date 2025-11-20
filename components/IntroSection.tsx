import React from 'react';
import { BookOpen } from 'lucide-react';

export const IntroSection: React.FC = () => {
  return (
    <section className="prose prose-slate max-w-none">
      <h3 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-2 not-prose">
        <span className="bg-emerald-100 text-emerald-600 p-2 rounded-lg"><BookOpen size={24}/></span>
        Contextualização
      </h3>
      <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
        <p className="text-lg text-slate-600 leading-relaxed">
          Vivemos um período de transformações rápidas impulsionadas pela tecnologia, 
          pela automação e pela inteligência artificial. Essas mudanças vêm exigindo da 
          sociedade novas formas de garantir que as pessoas não apenas acessem a educação, 
          mas também possam continuar aprendendo e se atualizando ao longo de toda a vida.
        </p>
        <p className="text-lg text-slate-600 leading-relaxed mt-4">
          Esse conceito é conhecido como <strong className="text-brand-600">aprendizado contínuo (lifelong learning)</strong> e 
          está diretamente relacionado à necessidade de <strong className="text-brand-600">requalificação profissional</strong>, 
          especialmente em um cenário em que várias ocupações estão desaparecendo e outras surgem 
          com novas competências exigidas.
        </p>
      </div>
    </section>
  );
};
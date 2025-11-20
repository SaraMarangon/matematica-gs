import React, { useState } from 'react';
import { Calculator, TrendingUp, Sigma, BookOpen, Users, GraduationCap } from 'lucide-react';
import { TeamSection } from './components/TeamSection';
import { IntroSection } from './components/IntroSection';
import { ModelSection } from './components/ModelSection';
import { DerivativeSection } from './components/DerivativeSection';
import { IntegralSection } from './components/IntegralSection';

enum ActiveTab {
  INTRO = 'intro',
  MODEL = 'model',
  DERIVATIVE = 'derivative',
  INTEGRAL = 'integral'
}

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<ActiveTab>(ActiveTab.INTRO);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      {/* Header / Hero */}
      <header className="bg-brand-900 text-white pb-12 pt-8 px-4 shadow-xl">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-4 opacity-80">
            <GraduationCap size={24} />
            <span className="uppercase tracking-wider text-sm font-semibold">Aprendizado Contínuo e Requalificação</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold mb-2 font-serif">
            Global Solution
          </h1>
          <h2 className="text-xl md:text-2xl text-brand-100 font-light">
            Differentiated Problem Solving
          </h2>
        </div>
      </header>

      {/* Navigation - Sticky */}
      <nav className="sticky top-0 z-50 bg-white border-b border-slate-200 shadow-sm overflow-x-auto">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex space-x-1 md:space-x-8">
            <button
              onClick={() => setActiveTab(ActiveTab.INTRO)}
              className={`flex items-center gap-2 px-4 py-4 text-sm font-medium border-b-2 transition-colors whitespace-nowrap ${
                activeTab === ActiveTab.INTRO
                  ? 'border-brand-600 text-brand-600'
                  : 'border-transparent text-slate-500 hover:text-brand-600 hover:border-brand-200'
              }`}
            >
              <Users size={18} /> Contexto & Time
            </button>
            <button
              onClick={() => setActiveTab(ActiveTab.MODEL)}
              className={`flex items-center gap-2 px-4 py-4 text-sm font-medium border-b-2 transition-colors whitespace-nowrap ${
                activeTab === ActiveTab.MODEL
                  ? 'border-brand-600 text-brand-600'
                  : 'border-transparent text-slate-500 hover:text-brand-600 hover:border-brand-200'
              }`}
            >
              <TrendingUp size={18} /> O Modelo & Limites
            </button>
            <button
              onClick={() => setActiveTab(ActiveTab.DERIVATIVE)}
              className={`flex items-center gap-2 px-4 py-4 text-sm font-medium border-b-2 transition-colors whitespace-nowrap ${
                activeTab === ActiveTab.DERIVATIVE
                  ? 'border-brand-600 text-brand-600'
                  : 'border-transparent text-slate-500 hover:text-brand-600 hover:border-brand-200'
              }`}
            >
              <Calculator size={18} /> Derivada
            </button>
            <button
              onClick={() => setActiveTab(ActiveTab.INTEGRAL)}
              className={`flex items-center gap-2 px-4 py-4 text-sm font-medium border-b-2 transition-colors whitespace-nowrap ${
                activeTab === ActiveTab.INTEGRAL
                  ? 'border-brand-600 text-brand-600'
                  : 'border-transparent text-slate-500 hover:text-brand-600 hover:border-brand-200'
              }`}
            >
              <Sigma size={18} /> Integral
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-grow p-4 md:p-8">
        <div className="max-w-5xl mx-auto space-y-12">
          
          {activeTab === ActiveTab.INTRO && (
            <div className="animate-fade-in">
               <TeamSection />
               <div className="my-8 border-b border-slate-200" />
               <IntroSection />
            </div>
          )}

          {activeTab === ActiveTab.MODEL && (
             <div className="animate-fade-in">
              <ModelSection />
             </div>
          )}

          {activeTab === ActiveTab.DERIVATIVE && (
             <div className="animate-fade-in">
              <DerivativeSection />
             </div>
          )}

          {activeTab === ActiveTab.INTEGRAL && (
             <div className="animate-fade-in">
              <IntegralSection />
             </div>
          )}

        </div>
      </main>

      {/* Footer */}
      <footer className="bg-slate-100 border-t border-slate-200 py-8 mt-12">
        <div className="max-w-5xl mx-auto px-4 text-center text-slate-500 text-sm">
          <p>&copy; 2025 Global Solution - Análise Matemática do Aprendizado Contínuo.</p>
          <p className="mt-2">ODS 4 & 8: Educação de Qualidade e Trabalho Decente.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
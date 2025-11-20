import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { MathCard } from './MathCard';
import { DataPoint } from '../types';

// Generate data for Integral ∫ K(t) dt
// Formula derived in slides: 100t + 500e^-0.2t + C
// Definite integral from 0 to T: [100T + 500e^-0.2T] - [100(0) + 500e^0] = 100T + 500e^-0.2T - 500
const data: DataPoint[] = Array.from({ length: 31 }, (_, t) => {
  const val = (100 * t) + (500 * Math.exp(-0.2 * t)) - 500;
  return {
    t,
    val: parseFloat(val.toFixed(2))
  };
});

export const IntegralSection: React.FC = () => {
  return (
    <div className="space-y-8">
       {/* Explanation and Solving */}
       <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <MathCard title="Integrais – Aprendizado Contínuo">
          <p className="text-slate-600 mb-4">
            Quando calculamos a <strong>integral dessa função</strong>, estamos avaliando:
          </p>
          <div className="bg-purple-50 p-4 rounded-lg border border-purple-100 mb-4">
             <p className="text-purple-900 font-medium text-center">
               Quanto conhecimento foi acumulado durante um intervalo de tempo.
             </p>
          </div>
          
          <div className="space-y-2 text-sm text-slate-700">
            <p className="font-bold text-slate-500 uppercase text-xs">Resolução:</p>
            <div className="overflow-x-auto">
                <p className="math-font py-2">∫ K(t) dt = ∫ (100 - 100e<sup>-0.2t</sup>) dt</p>
                <p className="math-font py-2">∫ 100 dt = 100t</p>
                <p className="math-font py-2">∫ e<sup>-0.2t</sup> dt = (1 / -0.2)e<sup>-0.2t</sup> = -5e<sup>-0.2t</sup></p>
            </div>
          </div>
        </MathCard>

        <MathCard title="Resultado da Integral Definida">
          <div className="flex flex-col justify-center h-full space-y-6">
            <div className="text-center">
                <p className="text-sm text-slate-500 mb-2">Primitiva (Integral Indefinida):</p>
                <p className="math-font text-lg">100t + 500e<sup>-0.2t</sup> + C</p>
            </div>

            <div className="bg-slate-50 p-4 rounded border border-slate-200">
                <p className="text-sm text-slate-500 mb-2">Aplicando limites (0 a T):</p>
                <p className="math-font text-xl font-bold text-purple-700 text-center">
                   100T + 500(e<sup>-0.2T</sup> - 1)
                </p>
                <p className="text-center text-xs text-slate-400 mt-2">(Simplificado da forma: 100T + 500e<sup>-0.2T</sup> - 500)</p>
            </div>
          </div>
        </MathCard>
       </div>

      {/* Chart */}
      <MathCard title="Gráfico da Integral (Acumulado)">
        <div className="h-[400px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 20 }}>
              <defs>
                <linearGradient id="colorVal" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.2}/>
                  <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis 
                dataKey="t" 
                label={{ value: 'Tempo de Estudo (T)', position: 'insideBottomRight', offset: -10 }} 
                stroke="#64748b"
              />
              <YAxis 
                label={{ value: "Acumulado", angle: -90, position: 'insideLeft' }} 
                stroke="#64748b"
              />
              <Tooltip 
                contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                formatter={(value: number) => [value, 'Conhecimento Acumulado']}
                labelFormatter={(label) => `Tempo: ${label}`}
              />
              <Area 
                type="monotone" 
                dataKey="val" 
                stroke="#8b5cf6" 
                fillOpacity={1} 
                fill="url(#colorVal)" 
                strokeWidth={3}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
        <div className="mt-6 space-y-4">
           <div className="bg-purple-50 p-4 rounded-lg border border-purple-100">
             <h4 className="text-purple-800 font-bold mb-1">Explicação:</h4>
             <p className="text-purple-700 text-sm leading-relaxed">
               A integral da curva de aprendizagem não mostra apenas <em>onde o aluno está agora</em>, mas <strong>tudo o que ele já construiu ao longo do tempo</strong>.
             </p>
             <p className="text-purple-700 text-sm leading-relaxed mt-2">
               Ela reforça que o aprendizado contínuo e a requalificação são essenciais para que o conhecimento acumulado gere melhores oportunidades no futuro do trabalho.
             </p>
           </div>
           
           <p className="text-slate-600 text-sm leading-relaxed">
             A curva de aprendizagem modelada pela função exponencial mostra que o conhecimento cresce rapidamente no início, mas desacelera com o tempo, exigindo novas estratégias e requalificação para continuar avançando. Essa interpretação matemática reforça a importância do aprendizado contínuo.
           </p>
           <p className="text-slate-600 text-sm font-medium">
             Conectar a matemática às ODS 4 (Educação de Qualidade) e 8 (Trabalho Decente) evidencia que investir em educação permanente é fundamental para garantir trabalho decente e inovação.
           </p>
        </div>
      </MathCard>
    </div>
  );
};
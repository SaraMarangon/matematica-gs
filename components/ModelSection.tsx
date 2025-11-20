import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine, Label } from 'recharts';
import { MathCard } from './MathCard';
import { DataPoint } from '../types';

// Generate data for K(t) = 100(1 - e^-0.2t)
const data: DataPoint[] = Array.from({ length: 31 }, (_, t) => ({
  t,
  val: parseFloat((100 * (1 - Math.exp(-0.2 * t))).toFixed(2))
}));

export const ModelSection: React.FC = () => {
  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <MathCard title="Função Modelada">
          <p className="mb-4 text-slate-600">
            A função que mais se encaixa para representar o processo de aprendizagem humana é:
          </p>
          <div className="text-center py-6 bg-slate-50 rounded-lg border border-slate-200 mb-4">
            <span className="math-font text-2xl md:text-3xl font-semibold text-brand-700">
              K(t) = 100(1 - e<sup>-0.2t</sup>)
            </span>
          </div>
          <p className="text-slate-600 text-sm leading-relaxed">
            Onde no início do estudo, o aprendizado é rápido e com o passar do tempo, esse aprendizado é contínuo 
            e em um ritmo mais lento, já que o aluno se aproxima de um nível elevado de conhecimento.
          </p>
          <ul className="list-disc list-inside mt-4 space-y-1 text-slate-700 font-medium">
            <li>Crescimento rápido no começo</li>
            <li>Desaceleração progressiva</li>
            <li>Aproximação de um limite máximo</li>
          </ul>
        </MathCard>

        <MathCard title="Análise de Limites">
          <div className="space-y-4">
            <div>
              <p className="text-slate-600 mb-2 text-sm font-bold uppercase tracking-wider">Função dada:</p>
              <p className="math-font text-lg text-slate-800">
                K(t) = 100(1 - e<sup>-0.2t</sup>)
              </p>
              <p className="text-slate-500 text-sm mt-1">Representa um processo que começa do 0 e cresce até se aproximar de um valor máximo.</p>
            </div>
            
            <div className="border-t border-slate-100 pt-4">
              <p className="text-slate-600 mb-2 text-sm font-bold uppercase tracking-wider">Resolução do Limite:</p>
              <div className="bg-slate-50 p-3 rounded text-center mb-2">
                 <span className="math-font text-lg">
                    lim<sub>t→∞</sub> K(t) = 100(1 - 0) = <span className="border border-black px-1">100</span>
                 </span>
              </div>
              <p className="text-slate-600 text-sm">
                • O termo <strong>-0.2t</strong> vai para menos infinito e quando o expoente é um número muito negativo, a exponencial <strong>tende a zero</strong>.
              </p>
            </div>
          </div>
        </MathCard>
      </div>

      <MathCard title="Gráfico Representando o Limite: K(t)">
        <div className="h-[400px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 20 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis 
                dataKey="t" 
                label={{ value: 'Tempo (t)', position: 'insideBottomRight', offset: -10 }} 
                stroke="#64748b"
              />
              <YAxis 
                domain={[0, 110]} 
                label={{ value: 'Conhecimento K(t)', angle: -90, position: 'insideLeft' }} 
                stroke="#64748b"
              />
              <Tooltip 
                contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                formatter={(value: number) => [`${value}%`, 'Conhecimento']}
                labelFormatter={(label) => `Tempo: ${label}`}
              />
              {/* Limit Line */}
              <ReferenceLine y={100} stroke="red" strokeDasharray="3 3">
                <Label value="Limite = 100" position="top" fill="red" fontSize={12}/>
              </ReferenceLine>
              <Line 
                type="monotone" 
                dataKey="val" 
                stroke="#3b82f6" 
                strokeWidth={3} 
                dot={false} 
                activeDot={{ r: 6 }} 
                name="K(t)"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="mt-6 bg-blue-50 p-4 rounded-lg border border-blue-100">
          <h4 className="text-blue-800 font-bold mb-1">Explicação:</h4>
          <p className="text-blue-700 text-sm leading-relaxed">
            A função começa em 0 e cresce rapidamente no início. Com o passar do tempo, o crescimento diminui e a curva se aproxima do valor máximo de 100, sem nunca o ultrapassar. Isso representa um processo que se estabiliza ao atingir seu limite.
          </p>
        </div>
      </MathCard>
    </div>
  );
};
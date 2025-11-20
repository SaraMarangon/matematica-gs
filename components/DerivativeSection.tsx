import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { MathCard } from './MathCard';
import { DataPoint } from '../types';

// Generate data for K'(t) = 20 * e^-0.2t
const data: DataPoint[] = Array.from({ length: 31 }, (_, t) => ({
  t,
  val: parseFloat((20 * Math.exp(-0.2 * t)).toFixed(2))
}));

export const DerivativeSection: React.FC = () => {
  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <MathCard title="Cálculo da Derivada">
          <div className="space-y-4">
             <div>
                <p className="text-slate-500 text-sm uppercase font-bold">Função Original</p>
                <p className="math-font text-lg">K(t) = 100(1 - e<sup>-0.2t</sup>) = 100 - 100e<sup>-0.2t</sup></p>
             </div>
             
             <div>
                <p className="text-slate-500 text-sm uppercase font-bold">Regras Aplicadas</p>
                <ul className="list-disc list-inside text-sm text-slate-600">
                  <li>A derivada de uma constante (100) é zero.</li>
                  <li>Regra da Cadeia: d/dt (e<sup>u</sup>) = e<sup>u</sup> · u'</li>
                </ul>
             </div>

             <div className="bg-slate-50 p-4 rounded text-center border border-slate-200">
                <p className="text-sm text-slate-500 mb-2">Passo a passo:</p>
                <p className="math-font mb-2">d/dt (-100e<sup>-0.2t</sup>) = -100 · (-0.2)e<sup>-0.2t</sup></p>
                <hr className="border-slate-200 my-2"/>
                <p className="math-font text-xl font-bold text-orange-600">K'(t) = 20e<sup>-0.2t</sup></p>
             </div>
          </div>
        </MathCard>

        <MathCard title="Interpretação">
          <p className="text-slate-600 mb-4 leading-relaxed">
            O resultado indica que o ritmo de aprendizagem é <strong className="text-slate-900">alto no começo</strong>, 
            quando tudo é novo, e <strong className="text-slate-900">vai diminuindo</strong> com o tempo, conforme o conhecimento se aproxima do domínio máximo.
          </p>
          <div className="bg-orange-50 border border-orange-100 p-4 rounded-lg mb-4">
             <ul className="space-y-2 text-sm text-orange-800">
                <li>• <strong>Valor Inicial K'(0):</strong> 20 → aprendizado muito rápido no começo.</li>
                <li>• <strong>Comportamento:</strong> Como <em>e<sup>-0.2t</sup></em> cai, K'(t) diminui com o tempo (desaceleração).</li>
             </ul>
          </div>
          <p className="text-slate-600 text-sm">
            A derivada é uma ferramenta importante para entender <strong>quando a aprendizagem começa a desacelerar</strong>.
          </p>
        </MathCard>
      </div>

      <MathCard title="Gráfico da Derivada: K'(t)">
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
                label={{ value: "Taxa K'(t)", angle: -90, position: 'insideLeft' }} 
                stroke="#64748b"
              />
              <Tooltip 
                contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                formatter={(value: number) => [value, 'Velocidade de Aprendizado']}
                labelFormatter={(label) => `Tempo: ${label}`}
              />
              <Line 
                type="monotone" 
                dataKey="val" 
                stroke="#ea580c" 
                strokeWidth={3} 
                dot={false} 
                activeDot={{ r: 6 }} 
                name="K'(t)"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="mt-6 bg-orange-50 p-4 rounded-lg border border-orange-100">
           <p className="text-orange-800 text-sm leading-relaxed">
             Note como a curva começa alta (no valor 20) e decai rapidamente. Isso visualiza exatamente a ideia de que aprendemos muito rápido no início de um novo tema, e depois a "velocidade" de absorção diminui.
           </p>
        </div>
      </MathCard>
    </div>
  );
};
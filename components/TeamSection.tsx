import React from 'react';
import { User } from 'lucide-react';
import { TeamMember } from '../types';

const members: TeamMember[] = [
  { name: "Bruna Sadi Duarte", rm: "561870" },
  { name: "Bernardo Moreira", rm: "564103" },
  { name: "Sara Marangon", rm: "563807" },
];

export const TeamSection: React.FC = () => {
  return (
    <section>
      <h3 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-2">
        <span className="bg-brand-100 text-brand-600 p-2 rounded-lg"><User size={24}/></span>
        Integrantes
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {members.map((member) => (
          <div key={member.rm} className="bg-white p-4 rounded-lg shadow-sm border border-slate-200 flex flex-col items-center text-center hover:border-brand-300 transition-colors">
            <div className="w-12 h-12 bg-brand-50 rounded-full flex items-center justify-center text-brand-600 font-bold mb-3">
              {member.name.charAt(0)}
            </div>
            <p className="font-semibold text-slate-800">{member.name}</p>
            <p className="text-sm text-slate-500">RM: {member.rm}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
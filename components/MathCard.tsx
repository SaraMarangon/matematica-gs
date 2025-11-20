import React, { ReactNode } from 'react';

interface MathCardProps {
  title: string;
  children: ReactNode;
  className?: string;
}

export const MathCard: React.FC<MathCardProps> = ({ title, children, className = '' }) => {
  return (
    <div className={`bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden ${className}`}>
      <div className="bg-slate-50 border-b border-slate-100 px-6 py-4">
        <h3 className="text-lg font-semibold text-brand-900">{title}</h3>
      </div>
      <div className="p-6">
        {children}
      </div>
    </div>
  );
};
import { ReactNode } from 'react';

interface HeyoCardProps {
  children: ReactNode;
  className?: string;
  noPadding?: boolean;
}

export function HeyoCard({ children, className = '', noPadding = false }: HeyoCardProps) {
  return (
    <div 
      className={`bg-surface rounded-xl border border-white/10 shadow-lg ${
        noPadding ? '' : 'p-4'
      } ${className}`}
      style={{ boxShadow: 'inset 0 1px 2px rgba(0,0,0,0.3), 0 2px 8px rgba(0,0,0,0.2)' }}
    >
      {children}
    </div>
  );
}

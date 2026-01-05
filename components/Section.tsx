
import React from 'react';

interface SectionProps {
  id: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
}

const Section: React.FC<SectionProps> = ({ id, title, subtitle, children, className = "" }) => {
  return (
    <section id={id} className={`py-20 px-6 max-w-7xl mx-auto ${className}`}>
      <div className="mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 flex items-center">
          <span className="text-blue-500 mr-2 font-mono">#</span>
          {title}
        </h2>
        {subtitle && <p className="text-slate-400 max-w-2xl">{subtitle}</p>}
        <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-emerald-500 mt-4 rounded-full"></div>
      </div>
      {children}
    </section>
  );
};

export default Section;

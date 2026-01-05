
import React from 'react';
import { motion } from 'framer-motion';

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
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className="mb-12"
      >
        <div className="flex items-center space-x-4 mb-4">
          <span className="text-blue-500 font-mono text-xl">#</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
            {title}
          </h2>
          <div className="h-px flex-grow bg-slate-800/50 ml-4"></div>
        </div>
        {subtitle && (
          <p className="text-slate-400 max-w-2xl text-lg leading-relaxed font-light">
            {subtitle}
          </p>
        )}
      </motion.div>
      
      <div>
        {children}
      </div>
    </section>
  );
};

export default Section;

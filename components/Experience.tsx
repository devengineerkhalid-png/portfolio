
import React from 'react';
import { motion } from 'framer-motion';
import Section from './Section';
import { EXPERIENCES } from '../constants';

const Experience: React.FC = () => {
  return (
    <Section id="experience" title="Trajectory" subtitle="A timeline of leading infrastructure transformations and cloud engineering excellence.">
      <div className="relative pt-8">
        {/* Static Central Timeline Line */}
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-slate-800 -translate-x-1/2"></div>
        
        <div className="space-y-16">
          {EXPERIENCES.map((exp, idx) => (
            <motion.div 
              key={`${exp.company}-${idx}`}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className={`md:flex items-center justify-between ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                {/* Dot */}
                <div className="absolute left-0 md:left-1/2 top-0 md:top-1/2 w-4 h-4 rounded-full bg-slate-900 border border-violet-500 -translate-x-1/2 md:-translate-y-1/2 z-10"></div>
                
                <div className={`w-full md:w-[45%] p-8 glass rounded-2xl border border-slate-800/50 shadow-lg ${idx % 2 === 0 ? 'text-right' : 'text-left'}`}>
                  <span className="text-[10px] font-mono font-bold text-violet-500 mb-4 block uppercase tracking-widest">
                    {exp.period}
                  </span>
                  <h3 className="text-2xl font-bold text-white mb-1">
                    {exp.title}
                  </h3>
                  <h4 className="text-slate-500 font-mono text-xs mb-6 uppercase tracking-widest">{exp.company}</h4>
                  
                  <ul className="space-y-3 text-slate-400 text-base font-light leading-relaxed">
                    {exp.description.map((item, i) => (
                      <li key={i} className={`flex items-start ${idx % 2 === 0 ? 'flex-row-reverse' : ''}`}>
                        <span className={`text-violet-500/50 mt-1.5 flex-shrink-0 ${idx % 2 === 0 ? 'ml-3' : 'mr-3'}`}>•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  
                  <div className={`mt-8 flex items-center space-x-2 text-[10px] font-mono text-slate-600 ${idx % 2 === 0 ? 'justify-end' : 'justify-start'}`}>
                    <span>{exp.location.toUpperCase()}</span>
                  </div>
                </div>
                <div className="hidden md:block w-[45%]"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Experience;
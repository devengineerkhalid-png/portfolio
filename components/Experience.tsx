
import React from 'react';
import Section from './Section';
import { EXPERIENCES } from '../constants';

const Experience: React.FC = () => {
  return (
    <Section id="experience" title="Work History">
      <div className="space-y-12">
        {EXPERIENCES.map((exp, idx) => (
          <div key={`${exp.company}-${idx}`} className="relative pl-8 md:pl-0">
            {/* Timeline Line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-slate-800 -translate-x-1/2"></div>
            
            <div className={`md:flex items-center justify-between mb-2 ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
              {/* Dot */}
              <div className="absolute left-0 md:left-1/2 top-0 w-4 h-4 rounded-full bg-blue-600 border-4 border-slate-950 -translate-x-1/2 z-10"></div>
              
              <div className={`w-full md:w-[45%] p-6 bg-slate-900/50 rounded-xl border border-slate-800 hover:border-slate-700 transition-all shadow-lg ${idx % 2 === 0 ? 'text-right' : 'text-left'}`}>
                <span className="text-xs font-mono text-blue-400 bg-blue-400/10 px-2 py-1 rounded mb-4 inline-block">
                  {exp.period}
                </span>
                <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                <h4 className="text-slate-400 font-medium mb-4">{exp.company}</h4>
                <p className="text-xs text-slate-500 mb-6 uppercase tracking-widest">{exp.location}</p>
                
                <ul className="space-y-3 text-sm text-slate-400">
                  {exp.description.map((item, i) => (
                    <li key={i} className={`flex items-start ${idx % 2 === 0 ? 'flex-row-reverse text-right' : 'text-left'}`}>
                      <span className={`text-blue-500 mt-1 flex-shrink-0 ${idx % 2 === 0 ? 'ml-2' : 'mr-2'}`}>▹</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="hidden md:block w-[45%]"></div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Experience;


import React from 'react';
import Section from './Section';
import { SKILL_CATEGORIES } from '../constants';

const Skills: React.FC = () => {
  return (
    <Section id="skills" title="Arsenal" subtitle="A multi-layered technical stack focusing on cloud performance, security, and developer productivity.">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {SKILL_CATEGORIES.map((category) => (
          <div 
            key={category.title}
            className="p-8 glass rounded-xl border border-slate-800/50 hover:border-violet-500/30 transition-colors"
          >
            <div className="mb-6">
              <h3 className="text-xs font-mono font-bold text-violet-400 uppercase tracking-widest flex items-center">
                <span className="w-1.5 h-1.5 bg-violet-500 rounded-full mr-3"></span>
                {category.title}
              </h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span 
                  key={skill} 
                  className="px-2.5 py-1.5 bg-slate-900/50 text-slate-400 text-[10px] font-mono border border-slate-800 rounded transition-colors hover:text-white hover:border-violet-500/50"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Skills;

import React from 'react';
import Section from './Section';
import { SKILL_CATEGORIES } from '../constants';

const Skills: React.FC = () => {
  return (
    <Section id="skills" title="Arsenal" subtitle="Expertise across the full cloud lifecycle, from provisioning to production monitoring.">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {SKILL_CATEGORIES.map((category) => (
          <div key={category.title} className="p-8 bg-slate-900/40 rounded-2xl border border-slate-800 hover:bg-slate-900/60 transition-all">
            <div className="mb-8">
              <h3 className="text-sm font-mono font-bold text-slate-500 uppercase tracking-widest flex items-center">
                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3"></span>
                {category.title.replace(' ', '_')}
              </h3>
            </div>
            <div className="flex flex-wrap gap-2.5">
              {category.skills.map((skill) => (
                <span 
                  key={skill} 
                  className="px-3 py-1.5 bg-slate-950/50 text-slate-300 text-[11px] font-mono border border-slate-800 rounded hover:border-slate-600 transition-colors"
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

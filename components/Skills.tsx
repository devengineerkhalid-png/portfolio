
import React from 'react';
import Section from './Section';
import { SKILL_CATEGORIES } from '../constants';

const Skills: React.FC = () => {
  // Brand color mapping
  const colorMap: Record<string, string> = {
    "Cloud & Platform": "text-orange-400 border-orange-500/30 bg-orange-500/5",
    "Automation & CI/CD": "text-blue-400 border-blue-500/30 bg-blue-500/5",
    "Containers & IaC": "text-cyan-400 border-cyan-500/30 bg-cyan-500/5",
    "Security & Observability": "text-green-400 border-green-500/30 bg-green-500/5"
  };

  return (
    <Section id="skills" title="Arsenal" subtitle="Battle-tested technical stack leveraging industry-standard cloud and DevOps tooling.">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {SKILL_CATEGORIES.map((category) => (
          <div 
            key={category.title}
            className={`p-8 glass rounded-xl border transition-all hover:scale-[1.02] duration-300 ${colorMap[category.title]?.split(' ')[1]}`}
          >
            <div className="mb-6">
              <h3 className={`text-xs font-mono font-bold uppercase tracking-widest flex items-center ${colorMap[category.title]?.split(' ')[0]}`}>
                <span className={`w-2 h-2 rounded-full mr-3 ${colorMap[category.title]?.split(' ')[0].replace('text', 'bg')}`}></span>
                {category.title}
              </h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span 
                  key={skill} 
                  className="px-2.5 py-1.5 bg-slate-900/40 text-slate-400 text-[10px] font-mono border border-slate-800/50 rounded transition-colors hover:text-white hover:border-orange-500/50"
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

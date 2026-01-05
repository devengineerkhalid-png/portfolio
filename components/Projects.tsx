
import React from 'react';
import Section from './Section';
import { PROJECTS } from '../constants';

const Projects: React.FC = () => {
  return (
    <Section id="projects" title="Showcase" subtitle="Production-grade systems engineered for high scale, reliability, and security.">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PROJECTS.map((project) => (
          <div 
            key={project.id}
            className="group glass rounded-2xl overflow-hidden flex flex-col border border-slate-800/50 hover:border-slate-700 transition-all shadow-lg"
          >
            <div className="relative h-56 overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transition-opacity group-hover:opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent"></div>
              
              <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
                {project.tags.slice(0, 2).map(tag => (
                  <span key={tag} className="px-2 py-0.5 glass text-[9px] text-white rounded font-mono uppercase">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="p-6 flex-grow flex flex-col space-y-4">
              <h3 className="text-xl font-bold text-white">
                {project.title}
              </h3>
              
              <p className="text-slate-400 text-sm leading-relaxed line-clamp-2 font-light">
                {project.description}
              </p>
              
              <div className="py-4 border-t border-slate-800/50">
                <h4 className="text-[9px] uppercase tracking-widest text-blue-500 font-bold mb-1">Impact</h4>
                <p className="text-xs text-slate-300">
                  {project.impact}
                </p>
              </div>
              
              <a 
                href={project.link || "#"}
                className="mt-auto w-full py-3 glass hover:bg-slate-800 rounded-lg text-xs font-bold transition-all border-slate-800 flex items-center justify-center space-x-2"
              >
                <span>View Details</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Projects;

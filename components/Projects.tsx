
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
            className="group glass rounded-2xl overflow-hidden flex flex-col border border-slate-800/50 hover:border-violet-500/30 transition-all shadow-lg"
          >
            <div className="relative h-56 overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transition-opacity group-hover:opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent"></div>
              
              <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
                {project.tags.slice(0, 3).map(tag => (
                  <span key={tag} className="px-2 py-0.5 glass text-[9px] text-white rounded font-mono uppercase border-violet-500/20">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="p-6 flex-grow flex flex-col space-y-4">
              <h3 className="text-xl font-bold text-white group-hover:text-violet-400 transition-colors">
                {project.title}
              </h3>
              
              <p className="text-slate-400 text-sm leading-relaxed line-clamp-2 font-light">
                {project.description}
              </p>
              
              <div className="py-4 border-t border-slate-800/50">
                <h4 className="text-[9px] uppercase tracking-widest text-cyan-500 font-bold mb-1">Impact</h4>
                <p className="text-xs text-slate-300">
                  {project.impact}
                </p>
              </div>
              
              <a 
                href={project.link || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto w-full py-3 glass hover:bg-violet-600/20 rounded-lg text-xs font-bold transition-all border-violet-800 flex items-center justify-center space-x-2 text-white"
              >
                <span>View Live Instance</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 00-2 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Projects;
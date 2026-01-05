
import React from 'react';
import Section from './Section';
import { PROJECTS } from '../constants';

const Projects: React.FC = () => {
  const featuredIds = ['phi-pos-platform', 'naxi-optimization'];

  return (
    <Section id="projects" title="Featured Projects" subtitle="A selection of high-impact engineering projects showcasing automation, cost-reduction, and scalable architecture.">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PROJECTS.map((project) => (
          <div key={project.id} className="bg-slate-900/50 rounded-2xl border border-slate-800 overflow-hidden flex flex-col group hover:-translate-y-2 transition-all duration-300 relative">
            {/* Featured Badge for Key Projects */}
            {featuredIds.includes(project.id) && (
              <div className="absolute top-4 right-4 z-20">
                <span className="px-3 py-1 bg-amber-500 text-slate-950 text-[10px] font-bold rounded-full uppercase tracking-tighter shadow-xl shadow-amber-500/20">
                  Featured
                </span>
              </div>
            )}
            
            <div className="relative h-48 overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  if (project.id === 'phi-pos-platform') {
                    target.src = "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=800&auto=format&fit=crop";
                  } else {
                    target.src = "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=1200&auto=format&fit=crop";
                  }
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
                {project.tags.slice(0, 3).map(tag => (
                  <span key={tag} className="px-2 py-1 bg-blue-600/80 backdrop-blur-md text-[10px] text-white rounded font-bold uppercase">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="p-6 flex-grow flex flex-col">
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                {project.title}
              </h3>
              <p className="text-slate-400 text-sm mb-4 line-clamp-2 italic">
                {project.description}
              </p>
              
              <div className="space-y-4 mb-6">
                <div>
                  <h4 className="text-[10px] uppercase tracking-widest text-slate-500 font-bold mb-1">Problem</h4>
                  <p className="text-xs text-slate-300">{project.problem}</p>
                </div>
                <div>
                  <h4 className="text-[10px] uppercase tracking-widest text-emerald-500 font-bold mb-1">Impact</h4>
                  <p className="text-xs text-emerald-400/80 font-medium">{project.impact}</p>
                </div>
              </div>
              
              <button className="mt-auto w-full py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg text-xs font-semibold transition-colors border border-slate-700 flex items-center justify-center space-x-2">
                <span>View Case Study</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Projects;

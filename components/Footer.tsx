
import React from 'react';
import { PERSONAL_INFO } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 border-t border-slate-900 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-6 md:mb-0">
          <a href="#" className="text-2xl font-bold font-mono">
            <span className="text-orange-500">[</span>
            <span className="text-white">MKhalid</span>
            <span className="text-orange-500">]</span>
          </a>
          <p className="text-slate-500 text-sm mt-2 max-w-xs font-light">
            Automating infrastructure, securing workflows, and optimizing cloud costs globally.
          </p>
        </div>
        
        <div className="flex flex-col items-center md:items-end space-y-4">
          <div className="flex space-x-6">
            <a href="#about" className="text-slate-400 hover:text-orange-400 transition-colors text-xs font-mono">About</a>
            <a href="#projects" className="text-slate-400 hover:text-orange-400 transition-colors text-xs font-mono">Projects</a>
            <a href="#experience" className="text-slate-400 hover:text-orange-400 transition-colors text-xs font-mono">Experience</a>
            <a href="#contact" className="text-slate-400 hover:text-orange-400 transition-colors text-xs font-mono">Contact</a>
          </div>
          <p className="text-slate-600 text-[10px] uppercase font-mono tracking-widest">
            © {new Date().getFullYear()} {PERSONAL_INFO.name} // version 1.0.4-stable
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

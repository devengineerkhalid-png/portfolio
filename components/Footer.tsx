
import React from 'react';
import { PERSONAL_INFO } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 border-t border-slate-900 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-6 md:mb-0">
          <a href="#" className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent font-mono">
            &lt;MKhalid /&gt;
          </a>
          <p className="text-slate-500 text-sm mt-2 max-w-xs">
            Automating infrastructure, securing workflows, and optimizing cloud costs.
          </p>
        </div>
        
        <div className="flex flex-col items-center md:items-end space-y-4">
          <div className="flex space-x-6">
            <a href="#about" className="text-slate-400 hover:text-white transition-colors text-sm">About</a>
            <a href="#projects" className="text-slate-400 hover:text-white transition-colors text-sm">Projects</a>
            <a href="#experience" className="text-slate-400 hover:text-white transition-colors text-sm">Experience</a>
            <a href="#contact" className="text-slate-400 hover:text-white transition-colors text-sm">Contact</a>
          </div>
          <p className="text-slate-600 text-xs">
            © {new Date().getFullYear()} {PERSONAL_INFO.name}. Built with React & Tailwind.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

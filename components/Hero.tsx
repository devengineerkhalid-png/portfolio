
import React from 'react';
import { motion } from 'framer-motion';
import { PERSONAL_INFO } from '../constants';

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center justify-center pt-24 pb-12 px-6 overflow-hidden relative">
      {/* Static Background Blurs */}
      <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-violet-600 opacity-[0.08] rounded-full blur-[150px] -z-10"></div>
      <div className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] bg-cyan-600 opacity-[0.08] rounded-full blur-[150px] -z-10"></div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-10"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full glass text-violet-400 text-xs font-mono font-medium tracking-widest border-violet-500/20">
            SYSTEM_STATUS: NOMINAL
          </div>
          
          <div className="space-y-4">
            <h1 className="text-6xl md:text-8xl font-black text-white tracking-tighter leading-tight">
              <span className="block">{PERSONAL_INFO.name.split(' ')[0]}</span>
              <span className="block text-slate-500">
                {PERSONAL_INFO.name.split(' ')[1]}
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-violet-500 font-mono font-medium flex items-center">
              <span className="mr-2">&gt;</span>
              {PERSONAL_INFO.title}
            </p>
          </div>
          
          <p className="text-slate-400 text-xl max-w-lg leading-relaxed font-light">
            Architecting <span className="text-white font-medium">high-availability</span> cloud solutions and reducing operational overhead through <span className="text-violet-400 font-medium">autonomous automation</span>.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <a 
              href="#projects" 
              className="px-8 py-4 bg-violet-600 text-white rounded-xl font-bold transition-all hover:bg-violet-700 flex items-center shadow-lg shadow-violet-500/20"
            >
              View Projects
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
            <a 
              href="#contact" 
              className="px-8 py-4 glass text-white rounded-xl font-bold transition-all hover:bg-slate-800 border-violet-500/20"
            >
              Contact Me
            </a>
          </div>
        </motion.div>

        <div className="hidden lg:block relative">
          <div className="p-[1px] rounded-3xl bg-slate-800 shadow-2xl">
            <div className="bg-slate-950 rounded-3xl overflow-hidden border border-slate-800/50">
              <div className="flex items-center justify-between px-6 py-4 bg-slate-900/50 border-b border-slate-800/50">
                <div className="flex space-x-2.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/70"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-500/70"></div>
                  <div className="w-3 h-3 rounded-full bg-emerald-500/70"></div>
                </div>
                <div className="text-[10px] text-slate-600 font-mono uppercase tracking-[0.3em]">session_host.sh</div>
              </div>
              <div className="p-10 font-mono text-sm space-y-6">
                <div className="space-y-4">
                  <div className="flex space-x-3 items-center">
                    <span className="text-violet-500">➜</span>
                    <span className="text-emerald-400">~</span>
                    <span className="text-white">whoami --details</span>
                  </div>
                  <div className="text-slate-500 pl-6 border-l border-violet-800/30 space-y-2">
                    <p className="flex items-center">
                      <span className="text-slate-600 mr-2">USER:</span> 
                      <span className="text-slate-300">Muhammad Khalid</span>
                    </p>
                    <p className="flex items-center">
                      <span className="text-slate-600 mr-2">ARCH:</span> 
                      <span className="text-slate-300">Cloud Agnostic / Hybrid Lead</span>
                    </p>
                    <p className="flex items-center">
                      <span className="text-slate-600 mr-2">LOC:</span> 
                      <span className="text-slate-300">{PERSONAL_INFO.location}</span>
                    </p>
                    <p className="flex items-center">
                      <span className="text-slate-600 mr-2">EFFICIENCY:</span> 
                      <span className="text-emerald-500 font-bold">+50% Cost Savings</span>
                    </p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex space-x-3 items-center">
                    <span className="text-violet-500">➜</span>
                    <span className="text-emerald-400">~</span>
                    <span className="text-white">k9s --namespace prod</span>
                  </div>
                  <div className="text-cyan-500/60 pl-6 border-l border-violet-800/30 font-mono text-xs">
                    <p>● pod/phi-pos-v1.0.4  RUNNING</p>
                    <p>● pod/naxi-ae-service  RUNNING</p>
                    <p className="text-slate-600">○ node/aws-worker-01 READY</p>
                  </div>
                </div>

                <div className="flex">
                  <span className="text-violet-500">➜</span>
                  <span className="text-emerald-400 ml-2">~</span>
                  <span className="ml-2 w-2 h-5 bg-violet-500 animate-pulse"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
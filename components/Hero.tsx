
import React from 'react';
import { motion } from 'framer-motion';
import { PERSONAL_INFO } from '../constants';

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center justify-center pt-24 pb-12 px-6 overflow-hidden relative">
      {/* Cloud Provider Background Blurs */}
      <div className="absolute top-1/4 -left-20 w-[600px] h-[600px] bg-orange-600 opacity-[0.05] rounded-full blur-[160px] -z-10"></div>
      <div className="absolute bottom-1/4 -right-20 w-[600px] h-[600px] bg-blue-600 opacity-[0.05] rounded-full blur-[160px] -z-10"></div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center z-10">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-10"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full glass text-orange-400 text-xs font-mono font-medium tracking-widest border-orange-500/20">
            <span className="w-2 h-2 rounded-full bg-green-500 mr-3 animate-pulse"></span>
            CLOUD_DEPLOYMENT: SUCCESSFUL
          </div>
          
          <div className="space-y-4">
            <h1 className="text-6xl md:text-8xl font-black text-white tracking-tighter leading-tight">
              <span className="block">{PERSONAL_INFO.name.split(' ')[0]}</span>
              <span className="block text-slate-500">
                {PERSONAL_INFO.name.split(' ')[1]}
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-400 font-mono font-medium flex items-center">
              <span className="text-orange-500 mr-2">$</span>
              {PERSONAL_INFO.title}
            </p>
          </div>
          
          <p className="text-slate-400 text-xl max-w-lg leading-relaxed font-light">
            Architecting <span className="text-orange-400 font-medium underline decoration-orange-500/30">resilient AWS</span> ecosystems and orchestrating <span className="text-blue-400 font-medium">multi-cloud</span> pipelines with zero-downtime precision.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <a 
              href="#projects" 
              className="px-8 py-4 bg-orange-600 text-white rounded-xl font-bold transition-all hover:bg-orange-500 flex items-center shadow-lg shadow-orange-600/20"
            >
              Explore Infrastructure
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
            <a 
              href="#contact" 
              className="px-8 py-4 glass text-white rounded-xl font-bold transition-all hover:bg-slate-800 border-blue-500/20"
            >
              Open Shell
            </a>
          </div>
        </motion.div>

        <div className="hidden lg:block relative">
          <div className="p-[1px] rounded-3xl bg-slate-800/50 shadow-2xl glow-blue">
            <div className="bg-slate-950 rounded-3xl overflow-hidden border border-slate-800/50">
              <div className="flex items-center justify-between px-6 py-4 bg-slate-900/50 border-b border-slate-800/50">
                <div className="flex space-x-2.5">
                  <div className="w-3 h-3 rounded-full bg-[#EA4335]"></div> {/* GCP Red */}
                  <div className="w-3 h-3 rounded-full bg-[#FBBC05]"></div> {/* GCP Yellow */}
                  <div className="w-3 h-3 rounded-full bg-[#34A853]"></div> {/* GCP Green */}
                </div>
                <div className="text-[10px] text-slate-600 font-mono uppercase tracking-[0.3em]">cloudinit.tf</div>
              </div>
              <div className="p-10 font-mono text-sm space-y-6">
                <div className="space-y-4">
                  <div className="flex space-x-3 items-center">
                    <span className="text-orange-500">aws</span>
                    <span className="text-slate-500">config</span>
                    <span className="text-white">--profile production</span>
                  </div>
                  <div className="text-slate-500 pl-6 border-l border-orange-500/30 space-y-2">
                    <p className="flex items-center">
                      <span className="text-slate-600 mr-2">REGION:</span> 
                      <span className="text-orange-400">us-east-1</span>
                    </p>
                    <p className="flex items-center">
                      <span className="text-slate-600 mr-2">CLUSTER:</span> 
                      <span className="text-blue-400">eks-prod-khalid</span>
                    </p>
                    <p className="flex items-center">
                      <span className="text-slate-600 mr-2">STATUS:</span> 
                      <span className="text-green-500 font-bold">READY</span>
                    </p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex space-x-3 items-center">
                    <span className="text-blue-500">kubectl</span>
                    <span className="text-slate-500">get</span>
                    <span className="text-white">nodes -o wide</span>
                  </div>
                  <div className="text-cyan-500/60 pl-6 border-l border-blue-500/30 font-mono text-xs">
                    <p>● node/aws-m5.large  ACTIVE (2m)</p>
                    <p>● node/azure-standard READY (10d)</p>
                    <p className="text-orange-500">○ node/spot-instance PROVISIONING</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <span className="text-orange-500 mr-2">➜</span>
                  <span className="text-white mr-2">terraform apply</span>
                  <span className="w-2 h-5 bg-orange-500 animate-pulse"></span>
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

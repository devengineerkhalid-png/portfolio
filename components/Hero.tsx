
import React from 'react';
import { motion } from 'framer-motion';
import { PERSONAL_INFO } from '../constants';

const Hero: React.FC = () => {
  const profileImageUrl = "https://media.licdn.com/dms/image/v2/D4D03AQHYH54aCAzg9g/profile-displayphoto-scale_200_200/B4DZsP6hoMLkAY-/0/1765498560803?e=2147483647&v=beta&t=0pnoVgec1mA3FzxWPwrjZXtZsiamJJMmpx3kVf-5-hQ";

  return (
    <section className="min-h-screen flex items-center justify-center pt-24 pb-12 px-6 overflow-hidden relative">
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-emerald-600/10 rounded-full blur-[120px]"></div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center z-10">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-8"
        >
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-emerald-400 text-xs font-mono font-medium tracking-wider">
            <span className="relative flex h-2 w-2 mr-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            SYSTEMS_ONLINE: DEPLOYMENT_ACTIVE
          </div>
          
          <div className="space-y-4">
            <h1 className="text-6xl md:text-8xl font-bold text-white tracking-tighter leading-none">
              {PERSONAL_INFO.name.split(' ')[0]} <br />
              <span className="text-slate-500">{PERSONAL_INFO.name.split(' ')[1]}</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-400 font-mono font-medium">
              &gt; {PERSONAL_INFO.title}
            </p>
          </div>
          
          <p className="text-slate-400 text-lg max-w-lg leading-relaxed">
            {PERSONAL_INFO.tagline} Focused on <span className="text-white">automation</span>, <span className="text-white">security</span>, and <span className="text-white">cloud efficiency</span>.
          </p>

          <div className="flex flex-wrap gap-4">
            <motion.a 
              whileHover={{ scale: 1.05, y: -4 }}
              whileTap={{ scale: 0.95 }}
              href="#projects" 
              className="px-8 py-4 bg-white text-slate-950 hover:bg-blue-400 rounded-lg font-bold transition-all shadow-xl shadow-blue-500/10"
            >
              Launch Projects
            </motion.a>
            <motion.a 
              whileHover={{ scale: 1.05, y: -4 }}
              whileTap={{ scale: 0.95 }}
              href="#contact" 
              className="px-8 py-4 bg-slate-900 text-white border border-slate-800 hover:border-slate-600 rounded-lg font-bold transition-all"
            >
              Establish Connection
            </motion.a>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="hidden lg:block relative"
        >
          <div className="p-0.5 rounded-2xl bg-gradient-to-br from-slate-800 to-slate-950 shadow-2xl">
            <div className="bg-slate-950 rounded-2xl overflow-hidden border border-slate-800">
              <div className="flex items-center justify-between px-5 py-3 bg-slate-900 border-b border-slate-800">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-slate-700"></div>
                  <div className="w-3 h-3 rounded-full bg-slate-700"></div>
                  <div className="w-3 h-3 rounded-full bg-slate-700"></div>
                </div>
                <div className="text-[10px] text-slate-500 font-mono uppercase tracking-widest">devops_env_v1.sh</div>
              </div>
              <div className="p-8 font-mono text-sm space-y-4">
                <div className="flex space-x-2 items-center">
                  <span className="text-blue-500">➜</span>
                  <span className="text-emerald-400">~</span>
                  <span className="text-slate-300 flex items-center">
                    fetch --profile 
                    <img 
                      src={profileImageUrl} 
                      className="w-5 h-5 rounded-full mx-2 border border-slate-700 grayscale hover:grayscale-0 transition-all object-cover" 
                      alt="avatar" 
                      onError={(e) => (e.target as HTMLImageElement).style.display = 'none'}
                    />
                    khalidx
                  </span>
                </div>
                <div className="text-slate-500 pl-6 border-l border-slate-800 space-y-1">
                  <p>NAME: Muhammad Khalid</p>
                  <p>ROLE: Cloud Architect</p>
                  <p>STACK: AWS / K8s / Terraform</p>
                  <p>COST_SAVED: 50% YoY</p>
                  <p>STATUS: "Automating Infrastructure..."</p>
                </div>
                <div className="flex space-x-2">
                  <span className="text-blue-500">➜</span>
                  <span className="text-emerald-400">~</span>
                  <span className="text-white">terraform apply</span>
                </div>
                <div className="text-emerald-500/80 pl-6 border-l border-slate-800">
                  <p>Plan: 15 to add, 0 to change, 0 to destroy.</p>
                  <p className="text-emerald-400">Apply complete! Resources: 15 added.</p>
                </div>
                <div className="flex">
                  <span className="text-blue-500">➜</span>
                  <span className="text-emerald-400 ml-2">~</span>
                  <span className="ml-2 w-2 h-5 bg-blue-500 animate-pulse"></span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

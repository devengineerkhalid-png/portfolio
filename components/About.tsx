
import React from 'react';
import { motion } from 'framer-motion';
import Section from './Section';
import { PERSONAL_INFO } from '../constants';

const About: React.FC = () => {
  const profileImageUrl = "https://media.licdn.com/dms/image/v2/D4D03AQHYH54aCAzg9g/profile-displayphoto-crop_800_800/B4DZsP6hoMLkAI-/0/1765498560680?e=1769040000&v=beta&t=CQk3uVrHPQ2s0dPB9hKq3xoVu4IVBOUd0gXPp5SPIqA";

  return (
    <Section id="about" title="Philosophy">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
        <div className="space-y-10">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-white tracking-tight">Systematic Thinking</h3>
            <p className="text-slate-400 leading-relaxed text-xl font-light">
              {PERSONAL_INFO.summary}
            </p>
            <div className="p-6 glass border-l-4 border-blue-500 rounded-r-2xl italic text-slate-300 text-lg">
              "If it needs to be done twice, it needs to be automated. If it needs to be reliable, it needs to be code."
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { label: 'Security First', desc: 'Embedded DevSecOps practices.' },
              { label: 'Cost Efficiency', desc: 'Architecture-led optimization.' },
              { label: 'Scalability', desc: 'Cloud-native growth strategies.' },
              { label: 'Reliability', desc: 'Zero-downtime mission.' },
            ].map((item, idx) => (
              <motion.div 
                key={item.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -5, borderColor: "rgba(59, 130, 246, 0.4)" }}
                className="p-6 rounded-2xl glass transition-all"
              >
                <h4 className="text-white font-black text-sm mb-2 uppercase tracking-widest">{item.label}</h4>
                <p className="text-slate-500 text-xs font-mono leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
        
        <div className="relative group">
          <motion.div 
            initial={{ opacity: 0, rotate: -5 }}
            whileInView={{ opacity: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative z-10 aspect-[4/5] rounded-[2rem] overflow-hidden glass border-white/5 shadow-2xl"
          >
            <img 
              src={profileImageUrl}
              alt="Muhammad Khalid" 
              className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110" 
              onError={(e) => {
                (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop";
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent"></div>
          </motion.div>
          
          {/* Decorative background cards */}
          <div className="absolute -top-10 -left-10 w-full h-full bg-blue-600/5 rounded-[2.5rem] -z-10 rotate-3"></div>
          <div className="absolute -bottom-10 -right-10 w-full h-full bg-emerald-600/5 rounded-[2.5rem] -z-10 -rotate-3"></div>
          
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity }}
            className="absolute -bottom-8 -right-8 p-8 glass rounded-3xl border-blue-500/20 shadow-2xl z-20 hidden lg:block"
          >
            <div className="flex items-center space-x-4">
              <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse"></div>
              <div>
                <p className="text-[10px] text-slate-500 font-mono uppercase tracking-[0.4em] mb-1">Region_Active</p>
                <p className="text-white font-black tracking-tighter text-2xl uppercase">{PERSONAL_INFO.location}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </Section>
  );
};

export default About;

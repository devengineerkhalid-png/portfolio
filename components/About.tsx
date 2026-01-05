
import React from 'react';
import Section from './Section';
import { PERSONAL_INFO } from '../constants';

const About: React.FC = () => {
  const profileImageUrl = "https://media.licdn.com/dms/image/v2/D4D03AQHYH54aCAzg9g/profile-displayphoto-crop_800_800/B4DZsP6hoMLkAI-/0/1765498560680?e=1769040000&v=beta&t=CQk3uVrHPQ2s0dPB9hKq3xoVu4IVBOUd0gXPp5SPIqA";

  return (
    <Section id="about" title="Philosophy">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white tracking-tight">Engineer Mindset</h3>
            <p className="text-slate-400 leading-relaxed text-lg">
              {PERSONAL_INFO.summary}
            </p>
            <p className="text-slate-400 leading-relaxed italic">
              "If it needs to be done twice, it needs to be automated."
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { label: 'Security First', desc: 'Embedded DevSecOps practices.' },
              { label: 'Cost Efficiency', desc: 'Architecture-led optimization.' },
              { label: 'Scalability', desc: 'Cloud-native growth strategies.' },
              { label: 'Reliability', desc: 'Zero-downtime mission.' },
            ].map((item) => (
              <div key={item.label} className="p-5 rounded-xl border border-slate-800 bg-slate-900/30 group hover:border-amber-400/50 transition-all">
                <h4 className="text-white font-bold text-sm mb-1 group-hover:text-amber-400 transition-colors">{item.label}</h4>
                <p className="text-slate-500 text-xs">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
        
        <div className="relative group">
          {/* Accent glow matching the yellow background of the photo */}
          <div className="absolute -inset-1 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-2xl blur opacity-10 group-hover:opacity-30 transition duration-1000 group-hover:duration-200"></div>
          
          <div className="relative aspect-square md:aspect-[4/5] rounded-2xl overflow-hidden border border-slate-800 bg-slate-900 shadow-2xl">
            <img 
              src={profileImageUrl}
              alt="Muhammad Khalid" 
              className="w-full h-full object-cover transition-all duration-700 scale-105 group-hover:scale-100" 
              onError={(e) => {
                (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop";
              }}
            />
          </div>
          
          <div className="absolute -bottom-6 -right-6 p-6 glass rounded-2xl border border-slate-800 shadow-2xl hidden lg:block">
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
              <div>
                <p className="text-[10px] text-slate-500 font-mono uppercase tracking-[0.2em]">Deployment_Region</p>
                <p className="text-white font-bold tracking-tight text-lg">{PERSONAL_INFO.location}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;

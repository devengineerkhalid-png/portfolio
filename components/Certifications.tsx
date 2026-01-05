
import React from 'react';
import Section from './Section';
import { CERTIFICATIONS } from '../constants';

const Certifications: React.FC = () => {
  return (
    <Section id="certs" title="Certifications">
      <div className="max-w-3xl space-y-4">
        {CERTIFICATIONS.map((cert) => (
          <div key={cert.name} className="flex flex-col md:flex-row gap-6 p-6 glass rounded-xl border border-slate-800 items-start hover:border-violet-500/20 transition-all">
            <div className="w-16 h-16 bg-violet-600/10 rounded-lg flex items-center justify-center flex-shrink-0 border border-violet-500/20">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-violet-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M12 14l9-5-9-5-9 5 9 5z" />
                <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
              </svg>
            </div>
            <div className="flex-grow">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-bold text-white">{cert.name}</h3>
                <span className="text-[10px] font-mono font-bold text-violet-500 bg-violet-500/5 px-2 py-1 rounded">{cert.date}</span>
              </div>
              <p className="text-cyan-400 text-sm font-medium mb-3">{cert.issuer}</p>
              <p className="text-slate-400 text-sm leading-relaxed">{cert.description}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Certifications;
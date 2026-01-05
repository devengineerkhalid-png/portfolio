
import React from 'react';
import Section from './Section';
import { PERSONAL_INFO } from '../constants';

const Contact: React.FC = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const subject = formData.get('subject') as string;
    const message = formData.get('message') as string;
    
    const mailtoUrl = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(subject || 'Portfolio Inquiry')}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`)}`;
    window.location.href = mailtoUrl;
  };

  return (
    <Section id="contact" title="Get In Touch" subtitle="Have a project in mind or want to discuss automation and cloud architecture? Drop me a message!">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
        <div className="lg:col-span-2 space-y-8">
          <div className="p-6 glass rounded-xl border border-slate-800 space-y-6">
            <h3 className="text-xl font-bold text-white">Contact Information</h3>
            
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 rounded-lg bg-violet-600/10 flex items-center justify-center text-violet-500 border border-violet-500/20">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <p className="text-xs text-slate-500 uppercase tracking-widest font-bold">Email</p>
                <a href={`mailto:${PERSONAL_INFO.email}`} className="text-slate-300 hover:text-violet-400 transition-colors break-all">{PERSONAL_INFO.email}</a>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 rounded-lg bg-green-600/10 flex items-center justify-center text-green-500 border border-green-500/20">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.162 16.499c-2.336 0-4.426.05-6.82.05h-.033c-1.033 0-1.1-.567-1.1-.567 0-1.033.466-2.133 1.233-3.133.433-.567.9-.967 1.4-1.2 1.266-.6 2.466-.6 2.466-.6s1.2 0 2.466.6c.5.233.967.633 1.4 1.2.767 1 1.233 2.1 1.233 3.133 0 0-.067.567-1.1.567h-.145zm-14.162-4.5c0-4.418 3.582-8 8-8s8 3.582 8 8-3.582 8-8 8-8-3.582-8-8zm11 0c0-.552-.448-1-1-1s-1 .448-1 1 .448 1 1 1 1-.448 1-1zm-4 0c0-.552-.448-1-1-1s-1 .448-1 1 .448 1 1 1 1-.448 1-1z"/>
                  <text x="4" y="16" font-family="Arial" font-size="12" font-weight="bold" fill="currentColor">fi</text>
                </svg>
              </div>
              <div>
                <p className="text-xs text-slate-500 uppercase tracking-widest font-bold">Fiverr</p>
                <a href={PERSONAL_INFO.fiverr} target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-green-400 transition-colors">techkhalid_</a>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 rounded-lg bg-cyan-600/10 flex items-center justify-center text-cyan-500 border border-cyan-500/20">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </div>
              <div>
                <p className="text-xs text-slate-500 uppercase tracking-widest font-bold">LinkedIn</p>
                <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-cyan-400 transition-colors">Muhammad Khalid</a>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 rounded-lg bg-amber-600/10 flex items-center justify-center text-amber-500 border border-amber-500/20">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <p className="text-xs text-slate-500 uppercase tracking-widest font-bold">Location</p>
                <p className="text-slate-300">{PERSONAL_INFO.location}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-3">
          <form onSubmit={handleSubmit} className="p-8 glass rounded-xl border border-slate-800 space-y-6 shadow-2xl">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-400">Full Name</label>
                <input 
                  type="text" 
                  name="name"
                  required
                  placeholder="John Doe" 
                  className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg text-white placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-400">Email Address</label>
                <input 
                  type="email" 
                  name="email"
                  required
                  placeholder="john@example.com" 
                  className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg text-white placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-400">Subject</label>
              <input 
                type="text" 
                name="subject"
                required
                placeholder="Cloud Infrastructure Inquiry" 
                className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg text-white placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-400">Message</label>
              <textarea 
                rows={5} 
                name="message"
                required
                placeholder="Describe your technical requirements..." 
                className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg text-white placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all"
              ></textarea>
            </div>
            <button type="submit" className="w-full py-4 bg-violet-600 hover:bg-violet-700 text-white rounded-lg font-bold transition-all shadow-lg shadow-violet-500/20 active:scale-95">
              Send Transmission
            </button>
          </form>
        </div>
      </div>
    </Section>
  );
};

export default Contact;

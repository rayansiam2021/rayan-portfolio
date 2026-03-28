import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Globe, ArrowUpRight } from 'lucide-react';

const SocialGrid = () => {
  const socials = [
    { 
      name: 'LinkedIn', 
      label: 'Professional_Logs', 
      description: 'Insights on Frontend Architecture & Leadership.',
      icon: <Linkedin size={20} />, 
      url: 'https://linkedin.com/in/rayan-siam', 
      color: '#0077b5',
      tag: 'Available'
    },
    { 
      name: 'GitHub', 
      label: 'Source_Control', 
      description: 'Open-source React components & IoT logic.',
      icon: <Github size={20} />, 
      url: 'https://github.com/rayan-siam', 
      color: '#a855f7',
      tag: 'Codebase'
    },
    { 
      name: 'Upwork', 
      label: 'Service_Market', 
      description: 'Verified history of Full-Stack delivery.',
      icon: <Globe size={20} />, 
      url: 'https://www.upwork.com/freelancers/~010b9b0bfb0905eb7e', 
      color: '#10b981',
      tag: 'Available'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full animate-in fade-in slide-in-from-bottom duration-1000 delay-200">
      {socials.map((social, idx) => (
        <motion.div 
          key={social.name} 
          whileHover={{ y: -5 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
          className="h-full"
        >
          <a 
            href={social.url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="group relative flex flex-col items-center text-center gap-4 p-8 rounded-2xl border border-white/5 bg-[#030712] hover:border-white/20 transition-all duration-500 h-full overflow-hidden"
          >
            {/* Ambient Background Glow */}
            <div 
              className="absolute inset-0 opacity-0 group-hover:opacity-[0.05] transition-opacity duration-500 blur-3xl pointer-events-none"
              style={{ backgroundColor: social.color }}
            />

            {/* Corner Tag: Absolute positioning to keep it out of the center flow */}
            <div className="absolute top-4 right-4 z-20">
              <span className="text-[7px] uppercase tracking-[0.3em] font-black px-2 py-1 rounded-full border border-white/10 text-slate-500 group-hover:text-white transition-colors bg-[#030712]/50 backdrop-blur-sm">
                {social.tag}
              </span>
            </div>

            {/* Icon: Centered */}
            <div 
              className="relative z-10 p-4 rounded-2xl bg-white/5 transition-all duration-500 group-hover:scale-110 group-hover:bg-white/10 flex items-center justify-center"
              style={{ color: social.color }}
            >
              {social.icon}
            </div>

            {/* Text Content: Centered */}
            <div className="relative z-10 flex flex-col items-center">
              <p className="text-[10px] uppercase tracking-[0.4em] font-black text-slate-600 mb-2 group-hover:text-slate-400 transition-colors">
                {social.label}
              </p>
              <h5 
                className="text-xl font-black uppercase italic tracking-tighter mb-3"
                style={{ color: social.color }}
              >
                {social.name}
              </h5>
              <p className="text-[12px] text-slate-500 leading-relaxed font-medium group-hover:text-slate-300 transition-colors max-w-[200px]">
                {social.description}
              </p>
            </div>

            {/* Bottom Arrow: Absolute position in corner */}
            <div className="absolute bottom-4 right-4 z-10">
               <ArrowUpRight size={16} className="text-slate-700 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </div>

            {/* The Subtle Dashed Frame */}
            <div 
              className="absolute inset-0 border border-dashed border-transparent rounded-2xl transition-all duration-700 group-hover:scale-[1.02] pointer-events-none" 
              style={{ borderColor: `${social.color}30` }}
            />
          </a>
        </motion.div>
      ))}
    </div>
  );
};

export default SocialGrid;
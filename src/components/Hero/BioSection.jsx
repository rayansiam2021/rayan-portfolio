import React from 'react';
import GradientText from '../bits/GradientText';
import { Linkedin, Github, Briefcase, Facebook, Instagram, Download } from 'lucide-react';

const BioSection = () => {
  const personalBio = "Full-stack developer and professional video editor specializing in React architecture, Python FastAPI, and cinematic storytelling.";

  return (
    <div className="flex flex-col items-center lg:items-start text-center lg:text-left max-w-2xl">
      <h3 className="text-cyan-500 font-mono text-[10px] uppercase tracking-[0.5em] mb-6 flex items-center gap-2">
        <span className="w-8 h-[1px] bg-cyan-500/30"></span>
        Professional_Summary
      </h3>
      
      <div className="border-l-2 border-cyan-500/50 pl-6 py-2 mb-10">
        <GradientText
          colors={["#ffffff", "#f8fafc", "#cbd5e1", "#ffffff", "#94a3b8"]}
          animationSpeed={15} 
          showBorder={false}
          className="text-xl md:text-3xl leading-relaxed font-light italic !justify-start !mx-0 text-white tracking-tight"
        >
          "{personalBio}"
        </GradientText>
      </div>

      <div className="flex flex-col xl:flex-row items-center gap-8 w-full">
        {/* DOWNLOAD BUTTON */}
        <a 
          href="#" 
          className="group relative flex items-center justify-center gap-4 px-10 py-4 
                     bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl 
                     transition-all duration-500 hover:scale-105 active:scale-95 
                     hover:border-cyan-500/50 hover:bg-white/10 overflow-hidden shadow-2xl"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="relative z-10 flex items-center gap-3">
            <span className="font-black text-[11px] uppercase tracking-[0.3em] text-white group-hover:text-cyan-400 transition-colors">
              Download_CV
            </span>
            <Download size={20} className="text-white group-hover:text-cyan-400 group-hover:animate-bounce transition-colors" />
          </div>
          <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-cyan-500 group-hover:w-full transition-all duration-700 shadow-[0_0_15px_#22d3ee]" />
        </a>

        {/* SOCIAL ENGINE */}
        <div className="flex items-center gap-3 flex-wrap justify-center">
          <IconButton href="#" icon={<Linkedin size={20} />} color="text-blue-400" />
          <IconButton href="#" icon={<Briefcase size={20} />} color="text-emerald-400" />
          <IconButton href="https://github.com/rayansiam2021" icon={<Github size={20} />} color="text-white" />
          <div className="w-[1px] h-6 bg-white/10 mx-1 hidden sm:block" />
          <IconButton href="#" icon={<Facebook size={20} />} color="text-cyan-500" />
          <IconButton href="#" icon={<Instagram size={20} />} color="text-pink-500" />
        </div>
      </div>
    </div>
  );
};

const IconButton = ({ href, icon, color }) => (
  <a href={href} target="_blank" rel="noopener noreferrer"
    className={`group relative p-3.5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:border-cyan-500/30 hover:-translate-y-1.5 ${color}`}>
    <div className="absolute inset-0 bg-current opacity-0 group-hover:opacity-10 blur-2xl transition-opacity" />
    <div className="relative z-10 group-hover:scale-110 transition-transform duration-300">{icon}</div>
  </a>
);

export default BioSection;
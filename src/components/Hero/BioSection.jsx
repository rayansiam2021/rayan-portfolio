import React from 'react';
import { Download, ExternalLink, Mail, Terminal, Cpu, Layout, Sparkles } from 'lucide-react';

const BioSection = () => {
  return (
    <div className="flex flex-col items-center lg:items-start text-center lg:text-left max-w-2xl transform-gpu">
      
      {/* 1. STATUS TAGS */}
      <div className="flex items-center gap-3 mb-6">
        <div className="flex items-center gap-2 px-3 py-1 bg-cyan-500/10 border border-cyan-500/20 rounded-full shadow-[0_0_15px_rgba(6,182,212,0.1)]">
          <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-pulse" />
          <span className="text-[9px] font-mono font-bold text-cyan-400 uppercase tracking-[0.2em]">Available_For_Hire</span>
        </div>
        <div className="flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full">
          <Sparkles size={10} className="text-yellow-500" />
          <span className="text-[9px] font-mono font-bold text-slate-400 uppercase tracking-[0.2em]">Full_Stack_Dev</span>
        </div>
      </div>

      {/* 2. THE MAIN HOOK */}
      <h1 className="text-4xl md:text-5xl font-black text-white tracking-tighter mb-6 leading-[1.1]">
        Engineering <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Scalable</span> <br className="hidden md:block" /> Web & IoT Solutions.
      </h1>
      
      <div className="border-l-2 border-slate-800 pl-6 mb-4">
        <p className="text-slate-400 text-lg leading-relaxed font-light">
          Hi, I'm <span className="text-white font-medium">Rayan Ahmed</span>. I specialize in building 
          <span className="text-cyan-400 font-medium italic"> coded web applications</span>, 
          developing high-performance <span className="text-blue-400 font-medium">WordPress & Shopify</span> stores, 
          and creating <span className="text-emerald-400 font-medium">IoT systems</span> with Arduino to solve real-world problems.
        </p>
      </div>
      
      {/* FOCUS LINE */}
      <div className="flex items-center gap-2 mb-10 opacity-70">
         <span className="text-[10px] md:text-[11px] text-slate-500 font-mono uppercase tracking-[0.3em] italic">
           Efficient • Scalable • Real-World
         </span>
      </div>

      {/* 3. CORE SPECIALTIES (Color-Coded Cards) */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full mb-12">
        <SpecialtyCard 
          icon={<Terminal size={18} />} 
          title="Full-Stack Dev" 
          desc="Scalable Web Apps" 
          color="cyan"
        />
        <SpecialtyCard 
          icon={<Layout size={18} />} 
          title="CMS Solutions" 
          desc="WordPress & Shopify" 
          color="blue"
        />
        <SpecialtyCard 
          icon={<Cpu size={18} />} 
          title="IoT Engineering" 
          desc="Arduino & Sensors" 
          color="emerald"
        />
      </div>

      {/* 4. ACTIONS */}
      <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 w-full">
        
        {/* VIEW PROJECTS */}
        <a href="#projects" className="group relative px-8 py-4 bg-cyan-500 rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 active:scale-95 transform-gpu shadow-[0_0_25px_rgba(6,182,212,0.4)]">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] pointer-events-none" />
          <span className="relative flex items-center gap-2 text-[#020617] font-black text-[11px] uppercase tracking-[0.2em]">
            View Projects <ExternalLink size={14} strokeWidth={3} />
          </span>
        </a>

        {/* HIRE ME */}
        <a href="mailto:rayan@example.com" className="group relative px-8 py-4 bg-slate-900 border border-white/10 rounded-xl transition-all duration-300 hover:border-cyan-500/50 hover:bg-slate-800 hover:scale-105 active:scale-95 transform-gpu">
          <div className="absolute -bottom-[1px] left-1/2 -translate-x-1/2 w-0 h-[1px] bg-cyan-500 group-hover:w-1/2 transition-all duration-500 shadow-[0_0_10px_#22d3ee]" />
          <span className="relative flex items-center gap-2 text-white font-black text-[11px] uppercase tracking-[0.2em] group-hover:text-cyan-400 transition-colors">
            Hire Me <Mail size={14} strokeWidth={3} />
          </span>
        </a>

        {/* DOWNLOAD CV */}
        <a href="/resume.pdf" download className="p-4 bg-white/5 border border-white/10 rounded-xl text-slate-400 hover:text-cyan-500 hover:border-cyan-500/30 transition-all duration-300 active:scale-90 transform-gpu">
          <Download size={20} />
        </a>
      </div>
    </div>
  );
};

const SpecialtyCard = ({ icon, title, desc, color }) => {
  const colors = {
    cyan: "active:border-cyan-500/50 active:bg-cyan-500/10 text-cyan-400 group-hover:border-cyan-500/50 group-hover:bg-cyan-500/10",
    blue: "active:border-blue-500/50 active:bg-blue-500/10 text-blue-400 group-hover:border-blue-500/50 group-hover:bg-blue-500/10",
    emerald: "active:border-emerald-500/50 active:bg-emerald-500/10 text-emerald-400 group-hover:border-emerald-500/50 group-hover:bg-emerald-500/10"
  };

  return (
    <div className={`
      flex flex-col gap-3 p-5 border border-white/5 bg-white/[0.02] rounded-2xl 
      transition-all duration-200 ease-out group cursor-pointer
      touch-manipulation transform-gpu will-change-transform
      active:scale-[0.97] lg:hover:scale-[1.02]
      ${colors[color]}
    `}>
      {/* Icon: Using simple scale/rotate which is cheap for mobile GPUs */}
      <div className="transition-transform duration-300 group-active:scale-110 group-hover:scale-110 lg:group-hover:rotate-[8deg] w-fit">
        {icon}
      </div>
      
      <div>
        <h4 className="text-white text-[10px] font-black uppercase tracking-tight leading-tight mb-1 transition-colors">
          {title}
        </h4>
        <p className="text-slate-500 text-[9px] leading-tight font-medium uppercase tracking-tighter transition-colors group-active:text-slate-300 lg:group-hover:text-slate-300">
          {desc}
        </p>
      </div>
    </div>
  );
};

export default BioSection;
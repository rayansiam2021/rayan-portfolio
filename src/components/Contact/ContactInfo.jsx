import React from 'react';
import { Mail, MapPin, Terminal, Cpu } from 'lucide-react';

const ContactInfo = () => {
  return (
    <div className="space-y-10 animate-in fade-in slide-in-from-left duration-700">
      {/* 🧬 THE HUMAN ARCHITECT BIO */}
      <div className="space-y-4">
        <div className="flex items-center gap-3 text-cyan-500/80">
          <Terminal size={18} />
          <span className="text-xs uppercase tracking-[0.3em] font-black italic">Architect_Profile</span>
        </div>
        <h3 className="text-3xl font-black text-white leading-tight uppercase italic tracking-tighter">
          Bridging <span className="text-cyan-400">Human Design</span> <br /> 
          with <span className="text-purple-500 font-mono">Machine Logic.</span>
        </h3>
        <p className="text-slate-400 text-[15px] leading-relaxed max-w-sm font-medium">
          I specialize in high-end <span className="text-slate-200">Frontend engineering</span> backed by a solid 
          understanding of <span className="text-slate-200">Scalable Backends</span> and <span className="text-slate-200">IoT Ecosystems</span>. 
          I don't just ship code; I build digital experiences that breathe.
        </p>
      </div>

      {/* 📡 THE UPLINK NODES */}
      <div className="grid gap-5">
        {/* Email Node */}
        <a href="mailto:rayansiam2021@gmail.com" 
           className="group flex items-center gap-5 p-5 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition-all duration-300">
          <div className="p-3.5 rounded-xl bg-cyan-500/10 text-cyan-400 group-hover:scale-110 transition-transform">
            <Mail size={22} />
          </div>
          <div>
            <p className="text-[11px] uppercase tracking-[0.2em] font-black text-cyan-500/60 mb-1">Direct_Uplink</p>
            <p className="text-base font-bold text-slate-200 group-hover:text-white transition-colors">rayansiam2021@gmail.com</p>
          </div>
        </a>

        {/* Location Node */}
        <div className="group flex items-center gap-5 p-5 rounded-2xl border border-white/5 bg-white/[0.02]">
          <div className="p-3.5 rounded-xl bg-purple-500/10 text-purple-400">
            <MapPin size={22} />
          </div>
          <div>
            <p className="text-[11px] uppercase tracking-[0.2em] font-black text-purple-500/60 mb-1">Base_Coordinates</p>
            <p className="text-base font-bold text-slate-200 tracking-wide uppercase italic">Dhaka, Bangladesh</p>
          </div>
        </div>
      </div>

      {/* 🛠️ TECH STACK RIBBON */}
      <div className="flex items-center gap-8 pt-6 border-t border-white/5">
        <div className="flex flex-col gap-1">
          <span className="text-[10px] uppercase tracking-widest text-slate-500 font-black">Frontend Focus</span>
          <span className="text-xs font-mono text-cyan-500/70 uppercase font-bold text-nowrap">Senior_Level_UX</span>
        </div>
        <div className="flex flex-col gap-1">
          <span className="text-[10px] uppercase tracking-widest text-slate-500 font-black">Architecture</span>
          <span className="text-xs font-mono text-purple-500/70 uppercase font-bold text-nowrap">IoT_&_Backend</span>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
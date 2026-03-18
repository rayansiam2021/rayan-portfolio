import React from 'react';
import { Download, ExternalLink, Mail, Terminal, Cpu, Layout, ShieldCheck } from 'lucide-react';

const BioSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center py-12 px-6 lg:px-24 bg-[#020617] selection:bg-cyan-500/30">
      <div className="max-w-6xl w-full flex flex-col items-center lg:items-start">
        
        {/* 1. STATUS TAGS */}
        <div className="flex gap-3 mb-8">
          <div className="flex items-center gap-2 px-3 py-1 bg-emerald-500/5 border border-emerald-500/20 rounded-full">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_#10b981] animate-pulse" />
            <span className="text-[9px] font-mono font-black text-emerald-400 uppercase tracking-widest">Available_For_Hire</span>
          </div>
          <div className="flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full">
            <ShieldCheck size={10} className="text-blue-400" />
            <span className="text-[9px] font-mono font-black text-slate-400 uppercase tracking-widest">Verified_Engineer</span>
          </div>
        </div>

        {/* 2. HEADLINE */}
        <div className="mb-6 text-center lg:text-left">
          <h2 className="text-[10px] md:text-xs font-black uppercase tracking-[0.6em] text-white/30 mb-2">
            CIS Engineer
          </h2>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-tighter leading-tight text-white">
            Engineering Scalable <br />
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-emerald-400 bg-clip-text text-transparent italic">
              Web & IoT
            </span> Solutions.
          </h1>
        </div>

        {/* 3. UPDATED DESCRIPTION */}
        <p className="max-w-3xl text-slate-400 text-base md:text-lg leading-relaxed mb-10 text-center lg:text-left">
          Hi, I'm <span className="text-white font-bold">Rayan Ahmed</span>. I specialize in building <span className="text-white font-medium border-b border-cyan-500/20">Full-stack coded web applications</span>, 
          developing high-performance <span className="text-blue-400 font-medium">WordPress & Shopify</span> stores, 
          and creating <span className="text-emerald-400 font-medium">IoT systems</span> with Microcontroller and sensors to solve real-world problems.
        </p>

        {/* 4. SPECIALTY CARDS (Row Layout) */}
        <div className="flex flex-wrap lg:flex-nowrap gap-4 w-full mb-10">
          <CompactCard icon={<Terminal size={18} />} title="Full-Stack Dev" tech="React & FastAPI" color="cyan" />
          <CompactCard icon={<Layout size={18} />} title="CMS Solutions" tech="WordPress & Shopify" color="blue" />
          <CompactCard icon={<Cpu size={18} />} title="IoT Systems" tech="Arduino & Hardware" color="emerald" />
        </div>

        {/* 5. BUTTONS (Row Layout) */}
        <div className="flex flex-wrap items-center gap-4">
          <a href="#portfolio" className="px-8 py-4 bg-white text-black rounded-full font-black text-[10px] uppercase tracking-widest hover:bg-cyan-400 transition-all flex items-center gap-2 shadow-lg">
            View Project <ExternalLink size={14} strokeWidth={3} />
          </a>
          <a href="mailto:rayan@example.com" className="px-8 py-4 bg-white/5 border border-white/10 text-white rounded-full font-black text-[10px] uppercase tracking-widest hover:bg-white/10 transition-all flex items-center gap-2">
            Direct Inquiry <Mail size={14} strokeWidth={3} />
          </a>
          <button className="p-4 bg-transparent border border-white/5 text-slate-500 hover:text-cyan-400 hover:border-cyan-500/30 rounded-full transition-all group">
            <Download size={16} strokeWidth={3} className="group-hover:translate-y-0.5 transition-transform" />
          </button>
        </div>

      </div>
    </section>
  );
};

const CompactCard = ({ icon, title, tech, color }) => {
  const styles = {
    cyan: "border-cyan-500/10 text-cyan-400",
    blue: "border-blue-500/10 text-blue-400",
    emerald: "border-emerald-500/10 text-emerald-400"
  };

  return (
    <div className={`flex-1 min-w-[200px] flex items-center gap-4 p-4 border rounded-2xl bg-white/[0.02] transition-all hover:bg-white/[0.05] ${styles[color]}`}>
      <div className="p-2 bg-white/5 rounded-lg">{icon}</div>
      <div className="flex flex-col">
        <h3 className="text-white text-[10px] font-black uppercase tracking-wider">{title}</h3>
        <span className="text-slate-500 text-[8px] font-mono uppercase opacity-60">{tech}</span>
      </div>
    </div>
  );
};

export default BioSection;
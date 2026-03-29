import React from 'react';
import { Search, PenTool, Terminal, CheckCircle2 } from 'lucide-react';

const ProcessStage = ({ step, title, description, icon, accentColor = "#22d3ee" }) => (
  <div className="relative p-[1.5px] rounded-[2.5rem] overflow-hidden group bg-[#030712] h-full transition-all duration-500 hover:-translate-y-2">
    
    {/* 🐍 ALWAYS-ACTIVE HIGH-GLOW SNAKE */}
    <div className="absolute inset-[-150%] pointer-events-none opacity-100">
      <div 
        className="w-full h-full animate-[spin_6s_linear_infinite]"
        style={{ 
          background: `conic-gradient(from 0deg, transparent 50%, ${accentColor} 70%, #fff 90%, ${accentColor} 100%)`,
          filter: 'blur(20px)', 
        }}
      />
    </div>

    <div className="relative z-10 bg-[#030712]/98 backdrop-blur-3xl rounded-[calc(2.5rem-1.5px)] h-full p-10 flex flex-col items-center text-center border border-white/5 group-hover:border-white/10 transition-colors">
      
      {/* 🧬 BACKGROUND STAGE NUMBER */}
      <span className="absolute top-4 right-8 font-black italic text-6xl text-white/[0.02] group-hover:text-white/[0.05] transition-colors pointer-events-none font-mono">
        0{step}
      </span>

      {/* ICON NODE */}
      <div className="mb-8 relative">
        <div className="p-5 bg-white/5 border border-white/10 rounded-2xl text-slate-400 group-hover:text-white transition-all duration-500 group-hover:border-white/20 relative z-10">
          {icon}
        </div>
        {/* Sub Icon Glow */}
        <div className="absolute inset-0 blur-2xl opacity-20 group-hover:opacity-40 transition-opacity" style={{ backgroundColor: accentColor }} />
      </div>

      {/* STEP LABEL */}
      <div className="flex items-center gap-2 mb-4">
        <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-pulse" />
        <span className="text-[10px] font-mono font-black text-cyan-500 uppercase tracking-[0.4em]">
          Phase_0{step}
        </span>
      </div>
      
      {/* CONTENT */}
      <h3 className="text-xl font-black text-white uppercase italic tracking-tighter mb-4 leading-tight">
        {title}
      </h3>
      
      <p className="text-slate-500 text-xs font-medium leading-relaxed max-w-[200px] group-hover:text-slate-300 transition-colors">
        {description}
      </p>
    </div>
  </div>
);

const HowWeWork = () => {
  const workflow = [
    {
      step: 1,
      icon: <Search size={24} />,
      title: "Understanding Your Needs",
      description: "I start by understanding your idea, goals, and what you want to achieve.",
      accentColor: "#22d3ee"
    },
    {
      step: 2,
      icon: <PenTool size={24} />,
      title: "Planning & Design",
      description: "I plan the system, design the structure, and choose the right technologies.",
      accentColor: "#3b82f6"
    },
    {
      step: 3,
      icon: <Terminal size={24} />,
      title: "Development",
      description: "I build the project step by step, focusing on performance and clean structure.",
      accentColor: "#a855f7"
    },
    {
      step: 4,
      icon: <CheckCircle2 size={24} />,
      title: "Testing & Launch",
      description: "I test everything carefully and deploy the final product for real-world use.",
      accentColor: "#10b981"
    }
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-24 relative z-10">
      
      {/* 🌌 REFINED HEADER */}
      <div className="flex flex-col items-center text-center mb-20">
        <div className="flex items-center gap-3 mb-6">
          <div className="h-[1px] w-8 bg-cyan-500/50" />
          <span className="text-[10px] font-mono uppercase tracking-[0.6em] text-cyan-500 font-bold">
            Workflow
          </span>
          <div className="h-[1px] w-8 bg-cyan-500/50" />
        </div>
        
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase italic tracking-tighter text-white leading-none mb-6">
          My Work <span className="text-slate-800">Process</span>
        </h2>
        
        <p className="max-w-xl text-slate-400 text-sm md:text-base font-medium leading-relaxed italic opacity-80">
          A simple and structured approach to turn ideas into <br className="hidden md:block" />
          real, working solutions.
        </p>
      </div>

      {/* 🚀 INDIVIDUAL CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
        {workflow.map((phase, index) => (
          <ProcessStage 
            key={index} 
            {...phase} 
          />
        ))}
      </div>
    </section>
  );
};

export default HowWeWork;
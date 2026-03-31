import React from 'react';
import { Search, PenTool, Terminal, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
import GradientText from '../bits/GradientText';


const ProcessStage = ({ step, title, description, icon, accentColor = "#22d3ee" }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: step * 0.1 }}
    className="relative p-[2px] rounded-[2.5rem] overflow-hidden group bg-[#030712] h-full transition-all duration-500 hover:-translate-y-2 smooth-gpu-layer"
    style={{ 
      /* 🎨 HIGH-VOLTAGE BORDER: Pure color to White transition */
      background: `linear-gradient(135deg, 
        ${accentColor} 0%, 
        ${accentColor} 30%, 
        #ffffff 50%, 
        ${accentColor} 70%, 
        ${accentColor} 100%)` 
    }}
  >
    
    {/* ⚡ INTENSE BACK-GLOW: Doubled opacity and increased blur */}
    <div 
      className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-700 pointer-events-none"
      style={{ 
        background: `radial-gradient(circle at center, ${accentColor} 0%, transparent 70%)`,
        filter: 'blur(60px)'
      }} 
    />

    <div className="relative z-10 bg-[#030712] rounded-[calc(2.5rem-2px)] h-full p-10 flex flex-col items-center text-center border border-white/10 group-hover:border-white/20 transition-colors">
      
      {/* 🧬 STAGE NUMBER: Increased visibility on hover */}
      <span className="absolute top-4 right-8 font-black italic text-6xl text-white/[0.03] group-hover:text-white/[0.08] transition-colors pointer-events-none font-mono">
        0{step}
      </span>

      {/* ICON NODE WITH OVERGLOW */}
      <div className="mb-8 relative">
        <div className="p-5 bg-white/5 border border-white/10 rounded-2xl text-slate-400 group-hover:text-white transition-all duration-500 group-hover:border-white/30 relative z-10" style={{ color: accentColor }}>
          <div className="relative z-20 group-hover:scale-110 group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)] transition-all">
            {icon}
          </div>
        </div>
        {/* Core Icon Bloom: Very intense center glow */}
        <div className="absolute inset-0 blur-3xl opacity-40 group-hover:opacity-90 transition-opacity duration-500 rounded-full scale-150" style={{ backgroundColor: accentColor }} />
      </div>

      {/* STEP LABEL: Synced pulse color */}
      <div className="flex items-center gap-2 mb-4">
        <div className="w-2 h-2 rounded-full animate-pulse shadow-[0_0_10px_rgba(255,255,255,0.5)]" style={{ backgroundColor: accentColor }} />
        <span className="text-[11px] font-black uppercase tracking-[0.5em]" style={{ color: accentColor }}>
          Phase_0{step}
        </span>
      </div>
      
      {/* CONTENT */}
      <h3 className="text-xl font-black text-white uppercase italic tracking-tighter mb-4 leading-tight group-hover:scale-105 transition-transform duration-500">
        {title}
      </h3>
      
      <p className="text-slate-500 text-xs font-medium leading-relaxed max-w-[200px] group-hover:text-slate-200 transition-colors">
        {description}
      </p>
    </div>
  </motion.div>
);

const HowWeWork = () => {
  const workflow = [
    {
      step: 1,
      icon: <Search size={24} />,
      title: "Understanding Your Needs",
      description: "I start by understanding your idea, goals, and what you want to achieve.",
      accentColor: "#00f2ff" 
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
        
                               <GradientText
                                                                                  colors={["#00f2ff", "#ffffff", "#00d4ff", "#3b82f6", "#00f2ff"]}
                                                                                  className="text-5xl md:text-4xl font-black uppercase tracking-tighter"
                                                                                >
                                                                                  My Work Process
                                                                                </GradientText>
        
        <p className="max-w-xl text-slate-400 text-sm md:text-base font-medium leading-relaxed italic opacity-80 mt-2">
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
import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, BookOpen, School } from 'lucide-react';
import GradientText from '../bits/GradientText';

const EducationStage = ({ step, inst, degree, dept, metric, status, icon, accentColor }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: step * 0.1 }}
    className="relative p-[2px] rounded-[2.5rem] overflow-hidden group bg-[#020617] h-full transition-all duration-500 hover:-translate-y-2 smooth-gpu-layer"
    style={{ 
      background: `linear-gradient(135deg, ${accentColor} 0%, ${accentColor} 30%, #ffffff 50%, ${accentColor} 70%, ${accentColor} 100%)` 
    }}
  >
    {/* ⚡ INTENSE BACK-GLOW */}
    <div 
      className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-700 pointer-events-none"
      style={{ 
        background: `radial-gradient(circle at center, ${accentColor} 0%, transparent 70%)`,
        filter: 'blur(60px)'
      }} 
    />

    <div className="relative z-10 bg-[#020617] rounded-[calc(2.5rem-2px)] h-full p-10 flex flex-col items-center text-center border border-white/10 group-hover:border-white/20 transition-colors">
      
      {/* 🧬 BACKGROUND STAGE NUMBER */}
      <span className="absolute top-4 right-8 font-black italic text-6xl text-white/[0.03] group-hover:text-white/[0.08] transition-colors pointer-events-none font-mono">
        0{step}
      </span>

      {/* ICON NODE WITH OVERGLOW */}
      <div className="mb-8 relative">
        <div className="p-5 bg-white/5 border border-white/10 rounded-2xl group-hover:border-white/30 relative z-10 transition-all duration-500" style={{ color: accentColor }}>
          <div className="relative z-20 group-hover:scale-110 group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)] transition-all">
            {icon}
          </div>
        </div>
        <div className="absolute inset-0 blur-3xl opacity-40 group-hover:opacity-90 transition-opacity duration-500 rounded-full scale-150" style={{ backgroundColor: accentColor }} />
      </div>

      {/* STATUS LABEL */}
      <div className="flex items-center gap-2 mb-4">
        <div className="w-2 h-2 rounded-full animate-pulse shadow-[0_0_10px_rgba(255,255,255,0.5)]" style={{ backgroundColor: accentColor }} />
        <span className="text-[10px] font-black uppercase tracking-[0.5em] font-mono" style={{ color: accentColor }}>
          [{status}]
        </span>
      </div>
      
      {/* CONTENT */}
      <h3 className="text-xl md:text-2xl font-black text-white uppercase italic tracking-tighter mb-2 leading-tight group-hover:text-cyan-400 transition-colors">
        {inst}
      </h3>
      
      <div className="space-y-1 mb-8">
        <p className="text-slate-200 text-sm font-bold uppercase italic">{degree}</p>
        <p className="text-slate-500 text-[9px] font-mono uppercase tracking-widest">{dept}</p>
      </div>

      {/* SCORE METRIC */}
      <div className="mt-auto inline-flex items-center gap-3 px-6 py-3 bg-white/5 rounded-2xl border border-white/10 group-hover:border-white/20 transition-all">
        <Award size={16} style={{ color: accentColor }} />
        <span className="text-white font-mono font-black text-lg">{metric}</span>
      </div>
    </div>
  </motion.div>
);

const EducationModule = () => {
  const education = [
    {
      step: 1,
      inst: "Daffodil Int. University",
      degree: "BSc – CIS",
      dept: "Faculty: FSIT // Dept: CIS",
      metric: "CGPA: 3.40",
      status: "Ongoing",
      icon: <GraduationCap size={24} />,
      accentColor: "#00f2ff"
    },
    {
      step: 2,
      inst: "Milestone College",
      degree: "HSC – Science",
      dept: "Division: Science",
      metric: "GPA: 5.00",
      status: "Completed",
      icon: <BookOpen size={24} />,
      accentColor: "#3b82f6"
    },
    {
      step: 3,
      inst: "M.A Latif Memorial Inst.",
      degree: "SSC – Science",
      dept: "Division: Science",
      metric: "GPA: 4.90",
      status: "Completed",
      icon: <School size={24} />,
      accentColor: "#a855f7"
    }
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-32 relative z-10 bg-[#020617]">
      
      {/* 🌌 HEADER WITH SUBHEADING */}
      <div className="flex flex-col items-center text-center mb-24">
        <div className="flex items-center gap-3 mb-6">
          <div className="h-[1px] w-8 bg-cyan-500/50" />
          <span className="text-[10px] font-mono uppercase tracking-[0.6em] text-cyan-500 font-bold">
            Academic_Logic
          </span>
          <div className="h-[1px] w-8 bg-cyan-500/50" />
        </div>
        
        <GradientText
          colors={["#00f2ff", "#ffffff", "#00d4ff", "#3b82f6", "#00f2ff"]}
          className="text-5xl md:text-6xl font-black uppercase tracking-tighter"
        >
          Educational Foundation
        </GradientText>
        
        <p className="max-w-2xl text-slate-400 text-sm md:text-base font-medium leading-relaxed italic opacity-80 mt-6 border-t border-white/5 pt-6">
          A track record of academic excellence and continuous learning, <br className="hidden md:block" />
          forming the core of my technical and analytical problem-solving skills.
        </p>
      </div>

      {/* 🚀 EDUCATION CARDS GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {education.map((edu, index) => (
          <EducationStage 
            key={index} 
            {...edu} 
          />
        ))}
      </div>

      {/* SYSTEM FOOTER */}
      <div className="mt-24 pt-12 border-t border-white/5 w-full flex justify-center opacity-30">
        <p className="text-[9px] font-mono text-slate-500 uppercase tracking-[0.5em]">
          Institutional_Verified // Source: Bangladesh_Education_Board
        </p>
      </div>
    </section>
  );
};

export default EducationModule;
import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Cpu, Globe, ArrowRight } from 'lucide-react';
import GradientText from '../bits/GradientText';

const ExperienceNode = ({ step, date, title, company, points, icon, accentColor }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: step * 0.1 }}
    className="relative p-[2px] rounded-[2.5rem] overflow-hidden group bg-[#020617] h-full transition-all duration-500 hover:-translate-y-2 smooth-gpu-layer w-full max-w-3xl"
    style={{ 
      background: `linear-gradient(135deg, ${accentColor} 0%, ${accentColor} 30%, #ffffff 50%, ${accentColor} 70%, ${accentColor} 100%)` 
    }}
  >
    {/* ⚡ INTENSE BACK-GLOW */}
    <div 
      className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-700 pointer-events-none"
      style={{ 
        background: `radial-gradient(circle at center, ${accentColor} 0%, transparent 70%)`,
        filter: 'blur(80px)'
      }} 
    />

    <div className="relative z-10 bg-[#020617] rounded-[calc(2.5rem-2px)] h-full p-10 flex flex-col items-center text-center border border-white/10 group-hover:border-white/20 transition-colors">
      
      {/* 🧬 BACKGROUND SEQUENCE NUMBER */}
      <span className="absolute top-4 right-8 font-black italic text-7xl text-white/[0.03] group-hover:text-white/[0.07] transition-colors pointer-events-none font-mono">
        0{step}
      </span>

      {/* DATE BADGE */}
      <div className="mb-8 px-5 py-1.5 bg-white/5 border border-white/10 rounded-full backdrop-blur-md">
        <span className="text-[10px] font-black text-cyan-400 uppercase tracking-[0.2em] font-mono">
          [{date}]
        </span>
      </div>

      {/* ICON NODE WITH OVERGLOW */}
      <div className="mb-6 relative">
        <div className="p-5 bg-white/5 border border-white/10 rounded-2xl group-hover:border-white/30 relative z-10 transition-all duration-500" style={{ color: accentColor }}>
          <div className="relative z-20 group-hover:scale-110 group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)] transition-all">
            {icon}
          </div>
        </div>
        <div className="absolute inset-0 blur-3xl opacity-30 group-hover:opacity-80 transition-opacity duration-500 rounded-full scale-150" style={{ backgroundColor: accentColor }} />
      </div>

      {/* TITLES */}
      <h3 className="text-3xl md:text-4xl font-black text-white uppercase italic tracking-tighter mb-2 group-hover:text-cyan-400 transition-colors">
        {title}
      </h3>
      <p className="text-slate-500 font-mono text-[11px] uppercase tracking-[0.4em] mb-10">
        {company}
      </p>

      {/* POINTS LIST */}
      <ul className="space-y-4 text-left w-full max-w-md mx-auto">
        {points.map((p, idx) => (
          <li key={idx} className="flex gap-4 text-slate-400 text-sm md:text-base leading-snug border-l border-white/5 pl-5 hover:border-cyan-500/50 transition-colors py-1 group/item">
            <ArrowRight size={14} className="mt-1 flex-shrink-0 group-hover/item:translate-x-1 transition-transform" style={{ color: accentColor }} />
            {p}
          </li>
        ))}
      </ul>
    </div>
  </motion.div>
);

const VersionHistory = () => {
  const experiences = [
    {
      step: 1,
      date: "2024 – Present",
      title: "Freelance Developer",
      company: "Upwork // Remote",
      icon: <Globe size={24} />,
      accentColor: "#00f2ff",
      points: [
        "Developed and deployed multiple WordPress websites for real clients",
        "Handled full website setup, customization, and hosting configuration",
        "Improved website performance, structure, and usability",
        "Delivered complete client projects with a focus on reliability"
      ]
    },
    {
      step: 2,
      date: "2024",
      title: "Obstacle Avoiding Car",
      company: "IoT // Academic Project",
      icon: <Cpu size={24} />,
      accentColor: "#10b981",
      points: [
        "Designed an autonomous vehicle using Arduino and ultrasonic sensors",
        "Implemented real-time obstacle detection and navigation logic",
        "Worked on hardware integration and system testing"
      ]
    },
    {
      step: 3,
      date: "2023",
      title: "Fire Detection System",
      company: "IoT // Academic Project",
      icon: <Terminal size={24} />,
      accentColor: "#3b82f6",
      points: [
        "Built a sensor-based fire detection system using Arduino",
        "Integrated detection logic to trigger automated alerts",
        "Participated in system setup, testing, and debugging"
      ]
    }
  ];

  return (
    <section className="py-32 px-6 bg-[#020617] overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        
        {/* 🌌 HEADER SECTION */}
        <div className="flex flex-col items-center text-center mb-24">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-[1px] w-8 bg-cyan-500/50" />
            <span className="text-[10px] font-mono uppercase tracking-[0.6em] text-cyan-500 font-bold">
              Deployment_Archive
            </span>
            <div className="h-[1px] w-8 bg-cyan-500/50" />
          </div>
          
          <GradientText
            colors={["#00f2ff", "#ffffff", "#00d4ff", "#3b82f6", "#00f2ff"]}
            className="text-5xl md:text-6xl font-black uppercase tracking-tighter"
          >
            Experience and history
          </GradientText>
          
          <p className="max-w-2xl text-slate-400 text-sm md:text-base font-medium leading-relaxed italic opacity-80 mt-6 border-t border-white/5 pt-6">
            A chronological breakdown of my professional freelance journey <br className="hidden md:block" />
            and specialized IoT hardware development projects.
          </p>
        </div>

        {/* 🚀 EXPERIENCE STACK */}
        <div className="w-full flex flex-col items-center space-y-12">
          {experiences.map((exp, index) => (
            <ExperienceNode 
              key={index} 
              {...exp} 
            />
          ))}
        </div>

        {/* FOOTER METADATA */}
        <div className="mt-24 pt-12 border-t border-white/5 w-full flex justify-center opacity-30">
          <p className="text-[9px] font-mono text-slate-500 uppercase tracking-[0.5em]">
            Sequence_Verified // Data_Integrity_Locked
          </p>
        </div>
      </div>
    </section>
  );
};

export default VersionHistory;
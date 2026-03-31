import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Cpu, Globe } from 'lucide-react';
import GradientText from '../bits/GradientText';

const VersionHistory = () => {
  const experiences = [
    {
      date: "2024 – Present",
      title: "Freelance Web Developer",
      company: "Upwork",
      icon: <Globe size={18} className="text-cyan-400" />,
      points: [
        "Developed and deployed multiple WordPress websites for real clients",
        "Handled full website setup, customization, and hosting configuration",
        "Improved website performance, structure, and usability",
        "Delivered complete client projects with a focus on reliability"
      ]
    },
    {
      date: "2024",
      title: "Obstacle Avoiding Car",
      company: "IoT Academic Project",
      icon: <Cpu size={18} className="text-emerald-400" />,
      points: [
        "Designed an autonomous vehicle using Arduino and ultrasonic sensors",
        "Implemented real-time obstacle detection and navigation logic",
        "Worked on hardware integration and system testing"
      ]
    },
    {
      date: "2023",
      title: "Fire Detection System",
      company: "IoT Academic Project",
      icon: <Terminal size={18} className="text-blue-400" />,
      points: [
        "Built a sensor-based fire detection system using Arduino",
        "Integrated detection logic to trigger automated alerts",
        "Participated in system setup, testing, and debugging"
      ]
    }
  ];

  return (
    <section className="py-32 px-6 bg-[#020617] overflow-hidden">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        
        {/* 1. SECTION HEADER - Professional Spacing */}
        <div className="flex flex-col items-center mb-24">
          <span className="text-[10px] font-black uppercase tracking-[0.5em] text-cyan-500 mb-6 font-mono">
             Deployment_Archive
          </span>
          <GradientText
            colors={["#00f2ff", "#ffffff", "#00d4ff", "#3b82f6", "#00f2ff"]}
            className="text-2xl md:text-6xl font-black uppercase tracking-tighter text-center"
          >
            Experience and history
          </GradientText>
          <div className="h-[1px] w-24 bg-cyan-500/30 mt-10" />
        </div>

        {/* 2. TIMELINE STACK - Centered */}
        <div className="w-full space-y-24 relative">
          {/* Vertical Center Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-white/5 hidden md:block -translate-x-1/2" />

          {experiences.map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col items-center relative z-10"
            >
              {/* Date Badge */}
              <div className="mb-8 px-5 py-2 bg-white/5 border border-white/10 rounded-full backdrop-blur-sm shadow-xl">
                <span className="text-[10px] font-mono font-black text-cyan-400 uppercase tracking-widest">
                  [{item.date}]
                </span>
              </div>

              {/* Content Card */}
              <div className="w-full max-w-2xl p-10 rounded-[32px] bg-white/[0.02] border border-white/5 hover:border-cyan-500/20 transition-all group text-center shadow-2xl">
                <div className="flex justify-center mb-8">
                  <div className="p-4 bg-white/5 rounded-2xl border border-white/10 group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                </div>

                <h4 className="text-3xl md:text-4xl font-black text-white uppercase italic tracking-tighter mb-3 group-hover:text-cyan-400 transition-colors">
                  {item.title}
                </h4>
                <p className="text-slate-500 font-bold text-[11px] uppercase tracking-[0.4em] mb-10 font-mono">
                  {item.company}
                </p>

                <ul className="space-y-5 inline-block text-left">
                  {item.points.map((p, idx) => (
                    <li key={idx} className="flex gap-4 text-slate-400 text-base md:text-lg leading-snug max-w-xl mx-auto border-l border-white/5 pl-6 py-1">
                      <span className="text-cyan-500 font-bold text-sm">●</span>
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 3. FINAL FOOTER METADATA */}
        <div className="mt-32 pt-16 border-t border-white/5 w-full flex flex-col items-center gap-4 opacity-50">
          <p className="text-[9px] font-mono text-slate-500 uppercase tracking-[0.6em]">
            Institutional_Node_Locked // End_of_Sequence
          </p>
          <div className="text-[8px] font-mono text-slate-600 uppercase tracking-[0.3em]">
            Updated_03.2026 // Rayan_Ahmed_DIU
          </div>
        </div>
      </div>
    </section>
  );
};

export default VersionHistory;
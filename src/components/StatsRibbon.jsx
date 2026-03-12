import React from 'react';
import { Code2, Trophy, Cpu, Briefcase } from 'lucide-react';

const StatsRibbon = () => {
  const stats = [
    { 
      label: "Experience", 
      value: "3+ Yrs", 
      icon: <Code2 size={20} />,
      desc: "University & Freelance"
    },
    { 
      label: "Projects", 
      value: "20+", 
      icon: <Trophy size={20} />,
      desc: "Full-Stack & Static"
    },
    { 
      label: "IoT Solutions", 
      value: "5+", 
      icon: <Cpu size={20} />,
      desc: "Arduino & Team Lead"
    },
    { 
      label: "Upwork", 
      value: "Verified", 
      icon: <Briefcase size={20} />,
      desc: "Live Deployments"
    },
  ];

  return (
    <div className="w-full bg-slate-900/40 backdrop-blur-md border-y border-white/5 py-10 my-12 relative overflow-hidden">
      {/* Subtle cyan glow to match your ElectricBorder theme */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-cyan-500/5 blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
        {stats.map((s, i) => (
          <div key={i} className="flex flex-col items-center lg:items-start group transition-all duration-300">
            <div className="flex items-center gap-3 mb-2">
              <div className="text-cyan-500 group-hover:text-cyan-300 transition-colors duration-300">
                {s.icon}
              </div>
              <span className="text-3xl font-black text-white tracking-tighter">
                {s.value}
              </span>
            </div>
            <p className="text-[10px] uppercase font-bold text-cyan-500/70 tracking-[0.3em] mb-1">
              {s.label}
            </p>
            <p className="text-[10px] text-slate-500 font-medium italic">
              {s.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatsRibbon;
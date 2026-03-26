import React from 'react';
import { motion } from 'framer-motion';

const ProjectFilters = ({ active, setActive }) => {
  const categories = [
    { id: 'all', label: 'All_PROJECT' },
    { id: 'Coded Web Solutions', label: 'Coded_Web' },
    { id: 'IOT', label: 'IOT_Systems' },
    { id: 'Wordpress', label: 'WP_Sites' },
    { id: 'Other', label: 'Others' },
  ];

  return (
    <div className="w-full mb-16 font-mono">
      {/* 🖥️ TERMINAL HEADER BAR */}
      <div className="bg-slate-800/40 px-5 py-3.5 flex items-center gap-4 border border-white/5 border-b-0 rounded-t-[22px]">
        <div className="flex gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
        </div>
        <div className="h-4 w-[1px] bg-white/10 mx-1" />
        <span className="text-[9px] md:text-[10px] font-black text-slate-500 tracking-[0.3em] uppercase">
          PROJECT_FILTER
        </span>
      </div>

      {/* 🛸 GRID NAVIGATION - No Scrolling, Serial Display */}
      <nav className="relative bg-slate-900/40 border border-white/5 backdrop-blur-2xl">
        <div className="grid grid-cols-2 md:grid-cols-5 w-full">
          {categories.map((cat, index) => {
            const isActive = active === cat.id;
            
            // "Other" takes full width on mobile if odd number, 
            // otherwise the grid handles it.
            const isLastOnMobile = index === categories.length - 1;

            return (
              <button
                key={cat.id}
                onClick={() => setActive(cat.id)}
                className={`
                  relative py-5 text-[9px] md:text-[10px] font-black uppercase tracking-widest transition-all
                  border-b border-white/5 md:border-b-0
                  ${isActive ? 'text-cyan-400 bg-cyan-500/5' : 'text-slate-500 hover:text-slate-300'}
                  ${index % 2 === 0 ? 'border-r md:border-r' : 'md:border-r'}
                  ${index === categories.length - 1 ? 'md:border-r-0 col-span-2 md:col-span-1' : ''}
                `}
              >
                <span className="relative z-10">{cat.label}</span>
                
                {/* ⚡ ACTIVE NEON UNDERLINE */}
                {isActive && (
                  <motion.div 
                    layoutId="activeFilterTab" 
                    className="absolute bottom-0 left-0 w-full h-[2px] bg-cyan-400 shadow-[0_0_15px_#00f2ff]"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </div>
      </nav>

      {/* Grounding Glow */}
      <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent mt-[-1px]" />
    </div>
  );
};

export default ProjectFilters;
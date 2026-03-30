import React from 'react';
import { motion } from 'framer-motion';

const MyToolbox = () => {
  const tools = [
    "React.js", "FastAPI", "Python", "PHP", "MySQL", 
    "Tailwind", "WordPress", "Dokan", "Shopify", "Arduino", "C++", "Vite"
  ];

  const accentColor = "#22d3ee"; // Electric Cyan

  return (
    <div className="h-full">
      <motion.div 
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="relative p-[2px] rounded-[2rem] overflow-hidden group h-full transition-all duration-500 hover:-translate-y-2 smooth-gpu-layer"
        style={{ 
          /* 🎨 ULTRA-GLOW BORDER: Tightened stops for a "Neon Tube" look */
          background: `linear-gradient(135deg, 
            ${accentColor} 0%, 
            ${accentColor} 30%, 
            #ffffff 50%, 
            ${accentColor} 70%, 
            ${accentColor} 100%)` 
        }}
      >
        {/* ⚡ LAYER 1: AMBIENT GLOW (Always slightly visible) */}
        <div 
          className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-700 pointer-events-none"
          style={{ 
            background: `radial-gradient(circle at center, ${accentColor} 0%, transparent 70%)`,
            filter: 'blur(40px)'
          }} 
        />

        {/* ⚡ LAYER 2: INTENSE HOVER BLOOM (The 'Service Engine' feel) */}
        <div 
          className="absolute inset-0 opacity-0 group-hover:opacity-40 transition-opacity duration-500 pointer-events-none"
          style={{ 
            background: `radial-gradient(circle at center, ${accentColor} 20%, transparent 80%)`,
            filter: 'blur(80px)'
          }} 
        />

        <div className="relative z-10 bg-[#030712] p-8 lg:p-12 rounded-[calc(2rem-2px)] h-full flex flex-col justify-center border border-white/10 group-hover:border-white/20 transition-colors">
          
          <h3 className="text-xl font-black text-white uppercase italic tracking-widest mb-10 text-center relative">
            Mastered <span className="text-slate-500 transition-all duration-500 group-hover:text-white group-hover:drop-shadow-[0_0_15px_#22d3ee]">Technologies</span>
            {/* Active Underline Glow */}
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-12 h-[2px] bg-cyan-500/20 rounded-full group-hover:w-24 group-hover:bg-cyan-400 group-hover:shadow-[0_0_15px_#22d3ee] transition-all duration-500" />
          </h3>
          
          <div className="flex flex-wrap justify-center gap-3 relative z-20">
            {tools.map((tool) => (
              <div 
                key={tool} 
                className="px-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-[10px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-3 hover:text-white hover:border-cyan-400/50 hover:bg-cyan-400/10 transition-all duration-300 group/tool cursor-default"
              >
                {/* High-Intensity Neon Dot */}
                <div className="h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_12px_#22d3ee] group-hover/tool:scale-125 group-hover/tool:shadow-[0_0_20px_#22d3ee] transition-all" />
                {tool}
              </div>
            ))}
          </div>

          <p className="text-[10px] font-mono text-slate-600 uppercase tracking-[0.4em] text-center mt-12 opacity-60 group-hover:opacity-100 transition-opacity">
            // "I choose the tool based on the problem"
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default MyToolbox;
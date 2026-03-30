import React from 'react';
import { 
  Cpu, 
  Code2, 
  Globe2, 
  Zap, 
  Activity, 
  LayoutTemplate, 
  TerminalSquare 
} from 'lucide-react';
import { motion } from 'framer-motion';

const FieldSector = ({ icon, title, tech, status, shadowColor }) => (
  <div className="p-4 rounded-2xl bg-white/[0.04] border border-white/5 flex items-center justify-between group hover:bg-white/[0.08] hover:border-white/20 transition-all duration-300">
    <div className="flex items-center gap-4">
      {/* Icon with constant subtle glow */}
      <div className="p-2 rounded-lg bg-white/5 group-hover:scale-110 transition-all" 
           style={{ color: shadowColor, filter: `drop-shadow(0 0 5px ${shadowColor}40)` }}>
        {icon}
      </div>
      <div className="flex flex-col text-left">
        <h4 className="text-white font-black uppercase italic text-[10px] tracking-wider group-hover:text-white transition-colors">{title}</h4>
        <span className="text-[9px] font-mono text-slate-500 uppercase tracking-widest">{tech}</span>
      </div>
    </div>
    <div className="flex items-center gap-3">
      <span className="text-[8px] font-mono text-slate-600 uppercase tracking-tighter hidden sm:block">{status}</span>
      {/* High-Intensity Status Dot */}
      <div className="w-2 h-2 rounded-full animate-pulse" 
           style={{ 
             backgroundColor: shadowColor, 
             boxShadow: `0 0 15px ${shadowColor}, 0 0 30px ${shadowColor}60` 
           }} />
    </div>
  </div>
);

const HardwareWins = () => {
  const accentColor = "#b700ff"; // Max Saturation Cyan

  return (
    <div className="h-full">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative p-[2px] rounded-[2.5rem] overflow-hidden group/card h-full bg-[#030712] transition-all duration-500 hover:-translate-y-2 smooth-gpu-layer"
        style={{ 
          /* 🎨 THE "NEON TUBE" BORDER: Tight stops for a white-hot center */
          background: `linear-gradient(135deg, 
            ${accentColor} 0%, 
            ${accentColor} 40%, 
            #ffffff 50%, 
            ${accentColor} 60%, 
            ${accentColor} 100%)` 
        }}
      >
        {/* ⚡ LAYER 1: ATMOSPHERIC HAZE (Wide blur) */}
        <div 
          className="absolute inset-0 opacity-10 group-hover/card:opacity-20 transition-opacity duration-1000 pointer-events-none"
          style={{ 
            background: `radial-gradient(circle at center, ${accentColor} 0%, transparent 80%)`,
            filter: 'blur(80px)'
          }} 
        />

        {/* ⚡ LAYER 2: CORE BLOOM (Intense hover center) */}
        <div 
          className="absolute inset-0 opacity-0 group-hover/card:opacity-40 transition-opacity duration-500 pointer-events-none"
          style={{ 
            background: `radial-gradient(circle at center, ${accentColor} 20%, transparent 60%)`,
            filter: 'blur(40px)'
          }} 
        />

        <div className="relative z-10 bg-[#030712] rounded-[calc(2.5rem-2px)] p-8 lg:p-12 h-full flex flex-col border border-white/10 group-hover/card:border-white/20 transition-colors">
          
          {/* HEADER: CENTERED & GLOWING */}
          <div className="mb-10 flex flex-col items-center text-center">
            <div className="mb-6 relative">
              <div className="p-5 bg-white/5 text-white rounded-2xl border border-white/10 relative z-10 group-hover/card:border-cyan-400/50 transition-all duration-500">
                <TerminalSquare size={28} strokeWidth={2.5} className="text-white" />
              </div>
              {/* Ultra Icon Bloom */}
              <div className="absolute inset-0 blur-3xl opacity-50 group-hover/card:opacity-100 transition-opacity duration-700 rounded-full scale-150" 
                   style={{ backgroundColor: accentColor }} />
            </div>
            
            <div className="mb-4">
              <h2 className="text-2xl md:text-4xl font-black text-white italic uppercase tracking-tighter leading-none mb-3 group-hover/card:drop-shadow-[0_0_15px_rgba(0,242,255,0.8)] transition-all">
                Core <span className="text-slate-600 group-hover/card:text-white transition-colors">Architecture</span>
              </h2>
              <span className="text-[11px] font-mono text-cyan-400 font-black uppercase tracking-[0.5em] drop-shadow-[0_0_8px_rgba(0,242,255,0.5)]">
                RYN_SYS_MANIFEST_V2
              </span>
            </div>
            
            <div className="h-[2px] w-32 bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent mb-6 group-hover/card:w-48 transition-all duration-700" />

            <p className="max-w-[340px] text-slate-400 text-sm font-medium leading-relaxed italic opacity-80 group-hover/card:opacity-100 group-hover/card:text-slate-200 transition-all">
              “Integrating high-performance <span className="text-cyan-400 drop-shadow-[0_0_5px_#00f2ff]">software</span> with intelligent <span className="text-cyan-400 drop-shadow-[0_0_5px_#00f2ff]">hardware</span>.”
            </p>
          </div>

          {/* THE CROSS-FIELD DATA STACK */}
          <div className="grid grid-cols-1 gap-3 flex-grow">
            <FieldSector icon={<Code2 size={16} />} title="Frontend Dev" tech="React + Vite + Tailwind" status="UI_STABLE" shadowColor="#00f2ff" />
            <FieldSector icon={<Zap size={16} />} title="Backend Ops" tech="FastAPI + PHP + SQL" status="API_ACTIVE" shadowColor="#3b82f6" />
            <FieldSector icon={<LayoutTemplate size={16} />} title="WP / E-Commerce" tech="Dokan + WooCommerce" status="MARKET_LIVE" shadowColor="#a855f7" />
            <FieldSector icon={<Cpu size={16} />} title="IoT / Robotics" tech="ESP32 + Arduino IDE" status="PHYS_SYNCED" shadowColor="#10b981" />
            <FieldSector icon={<Globe2 size={16} />} title="SEO & Marketing" tech="Strategic Rank + Ads" status="INDEXED" shadowColor="#f59e0b" />
          </div>

          {/* FOOTER: SYSTEM STATUS */}
          <div className="mt-10 pt-8 border-t border-white/10 flex flex-col items-center gap-4">
            <div className="flex items-center gap-3">
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_15px_#10b981]" />
              <span className="text-[10px] font-mono text-slate-400 uppercase font-black tracking-[0.5em] group-hover/card:text-emerald-400 transition-colors">
                System_Ready_For_Deployment
              </span>
            </div>
            <div className="flex gap-2">
               {[1,2,3,4,5,6,7].map(i => (
                 <div key={i} className="w-1 h-4 bg-white/10 rounded-full group-hover/card:bg-cyan-500/40 group-hover/card:h-5 transition-all" />
               ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default HardwareWins;
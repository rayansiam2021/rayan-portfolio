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

const FieldSector = ({ icon, title, tech, status, colorClass, shadowColor }) => (
  <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 flex items-center justify-between group hover:bg-white/[0.04] hover:border-white/20 transition-all duration-300">
    <div className="flex items-center gap-4">
      <div className={`p-2 rounded-lg bg-white/5 ${colorClass} group-hover:scale-110 transition-all`}>
        {icon}
      </div>
      <div className="flex flex-col">
        <h4 className="text-white font-black uppercase italic text-[10px] tracking-wider">{title}</h4>
        <span className="text-[9px] font-mono text-slate-500 uppercase tracking-widest">{tech}</span>
      </div>
    </div>
    <div className="flex items-center gap-2">
      <span className="text-[8px] font-mono text-slate-600 uppercase tracking-tighter hidden sm:block">{status}</span>
      <div className={`w-1 h-1 rounded-full animate-pulse shadow-[0_0_8px_${shadowColor}]`} style={{ backgroundColor: shadowColor }} />
    </div>
  </div>
);

const HardwareWins = () => {
  return (
    <div className="relative p-[1.5px] rounded-[2.5rem] overflow-hidden group/card h-full bg-[#030712]">
      {/* ⚡ THE SYSTEM SCAN ANIMATION (Multicolor Glow) */}
      <div className="absolute inset-[-150%] pointer-events-none opacity-20 group-hover/card:opacity-100 transition-opacity duration-700">
        <div 
          className="w-full h-full animate-[spin_8s_linear_infinite]"
          style={{ 
            background: `conic-gradient(from 0deg, transparent 60%, #00f2ff 75%, #10b981 85%, #fff 95%, #a855f7 100%)`,
            filter: 'blur(20px)', 
          }}
        />
      </div>

      <div className="relative z-10 bg-[#030712] rounded-[calc(2.5rem-1.5px)] p-8 lg:p-12 h-full flex flex-col border border-white/5">
        {/* HEADER: SYSTEM ARCHITECTURE */}
        <div className="mb-10">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-white/5 text-white rounded-2xl border border-white/10">
                <TerminalSquare size={22} strokeWidth={2.5} />
              </div>
              <div>
                <h2 className="text-2xl font-black text-white italic uppercase tracking-tighter leading-none">
                  Core <span className="text-slate-400">Architecture</span>
                </h2>
                <span className="text-[9px] font-mono text-cyan-500/70 uppercase tracking-[0.3em]">RYN_SYS_MANIFEST_V2</span>
              </div>
            </div>
            <Activity size={16} className="text-slate-800" />
          </div>
          
          <p className="text-slate-400 text-sm font-medium leading-relaxed italic border-l-2 border-white/10 pl-4">
            “Integrating high-performance <span className="text-white">software</span> with intelligent <span className="text-white">hardware</span> and scalable <span className="text-white">e-commerce</span> ecosystems.”
          </p>
        </div>

        {/* THE CROSS-FIELD DATA STACK */}
        <div className="grid grid-cols-1 gap-3 flex-grow">
          <FieldSector 
            icon={<Code2 size={16} />} 
            title="Frontend Dev" 
            tech="React + Vite + Tailwind" 
            status="UI_STABLE"
            colorClass="text-cyan-400"
            shadowColor="#22d3ee"
          />
          <FieldSector 
            icon={<Zap size={16} />} 
            title="Backend Ops" 
            tech="FastAPI + PHP + SQL" 
            status="API_ACTIVE"
            colorClass="text-blue-500"
            shadowColor="#3b82f6"
          />
          <FieldSector 
            icon={<LayoutTemplate size={16} />} 
            title="WP / E-Commerce" 
            tech="Dokan + WooCommerce" 
            status="MARKET_LIVE"
            colorClass="text-purple-500"
            shadowColor="#a855f7"
          />
          <FieldSector 
            icon={<Cpu size={16} />} 
            title="IoT / Robotics" 
            tech="ESP32 + Arduino IDE" 
            status="PHYS_SYNCED"
            colorClass="text-emerald-500"
            shadowColor="#10b981"
          />
          <FieldSector 
            icon={<Globe2 size={16} />} 
            title="SEO & Marketing" 
            tech="Strategic Rank + Ads" 
            status="INDEXED"
            colorClass="text-amber-500"
            shadowColor="#f59e0b"
          />
        </div>

        {/* FOOTER: SYSTEM STATUS */}
        <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-[9px] font-mono text-slate-500 uppercase font-bold tracking-widest">
              Ready_For_Deployment
            </span>
          </div>
          <div className="flex gap-1">
             {[1,2,3,4].map(i => <div key={i} className="w-1 h-3 bg-white/10 rounded-full" />)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HardwareWins;
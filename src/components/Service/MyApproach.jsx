import React from 'react';
import { Target, Zap, Shield, Hexagon } from 'lucide-react';
import { motion } from 'framer-motion';
import GradientText from '../bits/GradientText'; 

const ApproachCard = ({ title, children, label, accentColor = "#22d3ee" }) => (
  <div className="relative p-[1.5px] rounded-[3rem] overflow-hidden group bg-[#030712] h-full transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(34,211,238,0.15)]">
    
    {/* 🐍 ALWAYS-ACTIVE SNAKE LIGHTING (High Glow) */}
    <div className="absolute inset-[-150%] pointer-events-none opacity-100">
      <div 
        className="w-full h-full animate-[spin_6s_linear_infinite]"
        style={{ 
          background: `conic-gradient(from 0deg, transparent 50%, ${accentColor} 70%, #fff 90%, ${accentColor} 100%)`,
          filter: 'blur(25px)', 
        }}
      />
    </div>

    {/* Content Layer */}
    <div className="relative z-10 bg-[#030712]/98 backdrop-blur-3xl rounded-[calc(3rem-1.5px)] h-full p-10 lg:p-12 flex flex-col border border-white/5 group-hover:border-white/10 transition-colors">
      <div className="flex items-center gap-3 mb-8">
        <Hexagon size={14} className="text-cyan-500 fill-cyan-500/10 animate-pulse" />
        <span className="text-[10px] font-mono font-black text-slate-500 uppercase tracking-[0.4em]">
          {label}
        </span>
      </div>
      <h3 className="text-2xl lg:text-3xl font-black text-white uppercase italic tracking-tighter mb-8 leading-[1.1]">
        {title}
      </h3>
      <div className="flex-grow">
        {children}
      </div>
    </div>
  </div>
);

const MetricItem = ({ icon: Icon, label, value }) => (
  <div className="flex items-center justify-between border-b border-white/5 pb-5 last:border-0 group/item transition-all duration-300 hover:pl-2">
    <div className="flex items-center gap-4">
      <div className="p-2.5 rounded-xl bg-white/5 text-slate-500 group-hover/item:text-cyan-400 group-hover/item:bg-cyan-500/10 transition-all">
        <Icon size={18} strokeWidth={2} />
      </div>
      <span className="text-[10px] font-mono font-black text-slate-500 uppercase tracking-widest">{label}</span>
    </div>
    <span className="text-xs font-black text-white uppercase italic tracking-widest group-hover/item:text-cyan-400 transition-colors">
      {value}
    </span>
  </div>
);

const MyApproach = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-24 mb-32 relative z-10">
      
      {/* 🌌 INSTITUTIONAL HEADER */}
      <div className="flex flex-col items-center text-center mb-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col items-center w-full"
        >
          {/* Status Badges */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            <div className="px-4 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/5 flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[10px] font-bold tracking-[0.3em] text-emerald-500 uppercase">Available_For_Roles</span>
            </div>
            <div className="px-4 py-1.5 rounded-full border border-white/10 bg-white/5 flex items-center gap-2">
              <span className="text-[10px] font-bold tracking-[0.3em] text-slate-300 uppercase font-mono">
                B.Sc. CIS // CGPA 3.40
              </span>
            </div>
          </div>

          {/* Institutional Line */}
          <div className="flex items-center gap-4 mb-10">
            <div className="h-[1px] w-8 md:w-12 bg-white/20" />
            <span className="text-[10px] md:text-xs font-black tracking-[0.5em] text-slate-400 uppercase font-mono">
              Daffodil_International_University // DEPT:CIS
            </span>
            <div className="h-[1px] w-8 md:w-12 bg-white/20" />
          </div>

          {/* 🚀 SIMPLIFIED & HIGH-VISIBILITY TITLE */}
          <div className="mb-10 w-full flex flex-col items-center gap-2">
            <div className="flex flex-wrap justify-center items-center gap-x-4">
              <GradientText colors={["#00f2ff", "#ffffff", "#00d4ff", "#3b82f6", "#00f2ff"]} animationSpeed={8}>
                <h2 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter leading-none">
                  Building
                </h2>
              </GradientText>
              <h2 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter leading-none text-slate-800/80">
                Systems,
              </h2>
            </div>
            
            <div className="flex flex-wrap justify-center items-center gap-x-4">
              <GradientText colors={["#00f2ff", "#ffffff", "#00d4ff", "#3b82f6", "#00f2ff"]} animationSpeed={8}>
                
              <h2 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter leading-none text-white">
                Not Just Websites.
              </h2>
              </GradientText>
            </div>
          </div>

          {/* Subheading Narrative */}
          <div className="max-w-3xl mx-auto">
            <p className="text-lg md:text-xl text-slate-400 leading-relaxed font-medium mb-10 italic">
              As a graduate from <span className="text-white font-bold">Daffodil International University (CIS)</span>, 
              I have engineered technical solutions across <span className="text-white font-bold">API development</span>, 
              <span className="text-white font-bold"> Web ecosystems</span>, and <span className="text-cyan-400 font-bold">IoT systems</span>.
            </p>
          </div>
        </motion.div>
      </div>

      {/* 🚀 DUAL-MODULE GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
        <ApproachCard title="More Than Websites — Real Solutions" label="Philosophy_SYS">
          <div className="space-y-6">
            <p className="text-slate-300 text-base lg:text-lg font-medium leading-relaxed italic border-l-2 border-cyan-500/50 pl-6">
              I design and develop scalable web applications, WordPress platforms, and IoT systems 
              that work reliably in real-world environments. 
            </p>
            <p className="text-slate-500 text-sm lg:text-base font-bold uppercase tracking-tight">
              Focus: <span className="text-white">Performance, Architecture, & Results.</span>
            </p>
          </div>
        </ApproachCard>

        <ApproachCard title="System_Metrics" label="Architecture_Data" accentColor="#3b82f6">
          <div className="space-y-6 mb-10">
            <MetricItem icon={Target} label="Focus" value="User Experience" />
            <MetricItem icon={Zap} label="Speed" value="Optimized Performance" />
            <MetricItem icon={Shield} label="Reliability" value="Tested & Stable" />
          </div>
          <div className="mt-auto p-5 bg-white/[0.03] border border-white/5 rounded-2xl border-dashed">
            <p className="text-xs text-slate-500 leading-relaxed italic group-hover:text-slate-300 transition-colors">
              "Everything is designed to perform, scale, and deliver results."
            </p>
          </div>
        </ApproachCard>
      </div>
    </section>
  );
};

export default MyApproach;
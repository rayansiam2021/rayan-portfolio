import React from 'react';
import { motion } from 'framer-motion';
import GradientText from '../bits/GradientText'; 

const ProjectHero = () => {
  return (
    <section className="relative pt-24 pb-20 md:pt-40 md:pb-32 px-6 overflow-hidden bg-[#020617]">
      {/* Refined Ambient Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none opacity-20">
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-cyan-500/10 blur-[150px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center w-full"
        >
          {/* Top Status Badges */}
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

          {/* Institutional Header */}
          <div className="flex items-center gap-4 mb-8">
            <div className="h-[1px] w-8 md:w-12 bg-white/20" />
            <span className="text-[10px] md:text-xs font-black tracking-[0.5em] text-slate-400 uppercase font-mono">
              Daffodil_International_University // DEPT:CIS
            </span>
            <div className="h-[1px] w-8 md:w-12 bg-white/20" />
          </div>

          {/* Adjusted Heading: Gradient Title */}
          <div className="mb-8 w-full flex justify-center px-4">
            <GradientText
              colors={["#00f2ff", "#ffffff", "#00d4ff", "#3b82f6", "#00f2ff"]}
              animationSpeed={6}
              className="justify-center items-center text-center w-full"
            >
              <h1 className="text-3xl md:text-[40px] font-black uppercase italic leading-[0.9] tracking-tighter">
                Full-Stack & <br className="hidden md:block" /> Systems Engineer
                <span className="ml-2 animate-pulse" style={{ color: '#00f2ff' }}>_</span>
              </h1>
            </GradientText>
          </div>

          {/* Subheading: Balanced Text Size */}
          <div className="max-w-3xl px-6 mx-auto">
            <p className="text-lg md:text-xl text-slate-300 leading-relaxed font-medium mb-10">
              As a graduate from <span className="text-white font-bold">Daffodil International University (CIS)</span>, 
              I have engineered a diverse range of technical solutions. Below is a definitive archive 
              of my work across <span className="text-white">API development</span>, 
              <span className="text-white"> Web ecosystems</span>, and <span className="text-cyan-400">IoT systems</span>.
            </p>

            {/* High-Visibility Tech Stack */}
            <div className="flex flex-wrap justify-center gap-x-4 gap-y-4 text-[12px] md:text-[13px] font-mono text-white tracking-[0.15em] uppercase border-y border-white/10 py-6 bg-white/[0.02]">
              <span className="flex items-center gap-2 px-4 py-1.5 bg-slate-800/40 rounded border border-white/5 transition-colors hover:bg-slate-800/80">
                <span className="text-cyan-400">●</span> Python (FastAPI)
              </span>
              <span className="flex items-center gap-2 px-4 py-1.5 bg-slate-800/40 rounded border border-white/5 transition-colors hover:bg-slate-800/80">
                <span className="text-cyan-400">●</span> PHP (MySQL)
              </span>
              <span className="flex items-center gap-2 px-4 py-1.5 bg-slate-800/40 rounded border border-white/5 transition-colors hover:bg-slate-800/80">
                <span className="text-cyan-400">●</span> WordPress / Elementor
              </span>
              <span className="flex items-center gap-2 px-4 py-1.5 bg-cyan-950/20 rounded border border-cyan-500/30 text-cyan-300 italic">
                <span className="text-cyan-400 animate-pulse">●</span> Shopify App Dev (Learning)
              </span>
            </div>
          </div>

          {/* High-Contrast System Metadata */}
          <div className="mt-16 w-full flex justify-center">
            <div className="text-[11px] font-mono text-slate-300 leading-relaxed uppercase tracking-[0.35em] flex flex-wrap justify-center gap-x-12 gap-y-4">
              <span className="flex items-center gap-2">
                <span className="text-slate-500 font-bold">[</span> Total_Projects: <span className="text-cyan-400 font-black">04</span> <span className="text-slate-500 font-bold">]</span>
              </span>
              <span className="flex items-center gap-2">
                <span className="text-slate-500 font-bold">[</span> Region: <span className="text-white font-bold">Bangladesh</span> <span className="text-slate-500 font-bold">]</span>
              </span>
              <span className="flex items-center gap-2">
                <span className="text-slate-500 font-bold">[</span> Last_Sync: <span className="text-white font-bold">03.2026</span> <span className="text-slate-500 font-bold">]</span>
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectHero;
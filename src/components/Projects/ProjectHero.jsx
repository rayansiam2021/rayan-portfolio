import React from 'react';
import { motion } from 'framer-motion';

const ProjectHero = () => {
  return (
    <section className="relative pt-24 pb-20 md:pt-40 md:pb-32 px-6 overflow-hidden bg-[#020617]">
      {/* Refined Ambient Light - Less "Glowy", More Depth */}
      <div className="absolute top-0 right-0 w-[50%] h-full pointer-events-none opacity-30">
        <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-cyan-500/10 blur-[140px] rounded-full" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Version / Status Tag */}
          <div className="inline-flex items-center gap-4 mb-10 px-4 py-2 bg-white/[0.03] border border-white/10 rounded-full">
            <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-pulse" />
            <span className="text-[10px] font-black tracking-[0.4em] text-slate-400 uppercase">
              System_Archive_v2.0 // 2026
            </span>
          </div>

          <h1 className="text-6xl md:text-[120px] font-black tracking-tighter uppercase leading-[0.8] mb-12 text-white">
            Proven <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/20">
              Solutions
            </span>
          </h1>

          <div className="grid md:grid-cols-12 gap-8 items-start">
            <div className="md:col-span-6">
              <p className="text-lg md:text-xl text-slate-400 leading-relaxed font-medium border-l border-white/10 pl-8">
                A definitive collection of engineering milestones across 
                <span className="text-white"> Full-Stack Architectures</span>, 
                <span className="text-white"> Hardware Integration</span>, and 
                <span className="text-white"> Enterprise Scalability</span>. 
              </p>
            </div>
            
            <div className="md:col-span-4 md:col-start-9">
               <div className="text-[10px] font-mono text-slate-500 leading-relaxed uppercase tracking-widest pt-2">
                 [ Total_Entries: 14 ] <br />
                 [ Last_Sync: 03.2026 ] <br />
                 [ Status: Production_Ready ]
               </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectHero;
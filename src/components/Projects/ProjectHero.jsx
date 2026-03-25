import React from 'react';
import { motion } from 'framer-motion';

const ProjectHero = () => {
  return (
    <section className="relative pt-20 pb-16 md:pt-32 md:pb-24 px-6 overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none">
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-cyan-500/10 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center md:text-left"
        >
          <div className="flex items-center justify-center md:justify-start gap-3 mb-6">
            <div className="h-[1px] w-8 bg-cyan-500/50" />
            <span className="text-[10px] font-black tracking-[0.5em] text-cyan-400 uppercase">
              Digital_Archive_v2.0
            </span>
          </div>

          <h1 className="text-5xl md:text-8xl font-black tracking-tighter uppercase leading-[0.85] mb-8">
            Selected <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/20">
              Deployments
            </span>
          </h1>

          <p className="max-w-xl text-slate-400 text-sm md:text-base leading-relaxed font-medium">
            A comprehensive index of engineering solutions across 
            <span className="text-white"> Full-Stack Development</span>, 
            <span className="text-white"> IoT Architecture</span>, and 
            <span className="text-white"> Strategic E-Commerce</span>. 
            Each entry represents a verified technical milestone.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectHero;
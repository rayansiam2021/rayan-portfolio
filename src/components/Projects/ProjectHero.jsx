import React from 'react';
import { motion } from 'framer-motion';
import GradientText from '../bits/GradientText'; 

const ProjectHero = () => {
  return (
    <section className="relative pt-24 pb-16 md:pt-40 md:pb-24 px-6 overflow-hidden bg-[#020617]">
      {/* Subtle background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none opacity-20">
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-cyan-500/10 blur-[150px] rounded-full" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center w-full"
        >
          {/* Personal Introduction */}
          <div className="mb-6">
            <span className="text-[12px] font-bold tracking-[0.2em] text-cyan-400 uppercase">
              Rayan // Web Developer & IoT Enthusiast
            </span>
          </div>

          {/* Heading */}
          <div className="mb-8 w-full px-4">
            <GradientText
              colors={["#00f2ff", "#ffffff", "#00d4ff", "#3b82f6", "#00f2ff"]}
              animationSpeed={6}
              className="justify-center"
            >
              <h1 className="text-4xl md:text-6xl font-black uppercase italic leading-[0.9] tracking-tighter">
                My Projects
              </h1>
            </GradientText>
          </div>

          {/* The Story */}
          <div className="max-w-2xl px-6">
            <p className="text-lg md:text-xl text-slate-300 leading-relaxed mb-10">
  Since graduating from <span className="text-white font-semibold">Daffodil International University</span>, 
  I've dedicated my time to one thing: turning complex problems into clean, functional code. 
  From high-performance client websites to experimental IoT hardware, this is an archive 
  of the work I'm most proud of.
</p>
            
            {/* The Hook */}
            <div className="flex justify-center items-center gap-4">
               <span className="text-sm font-mono text-slate-500 italic">
                 Here’s what I’ve been building...
               </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectHero;
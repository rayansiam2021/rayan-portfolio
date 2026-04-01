import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Cpu, Mail } from 'lucide-react';
import GradientText from '../bits/GradientText';

const AboutHero = () => {
  return (
    <section className="relative pt-40 pb-24 px-6 overflow-hidden bg-[#020617]">
      {/* AMBIENT BACKGROUND DECOR */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full opacity-[0.03] pointer-events-none z-0">
        <div className="absolute inset-0" style={{ backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`, backgroundSize: '40px 40px' }} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center w-full"
        >
          {/* --- EXACT HEADING DESIGN START --- */}
          <div className="flex items-center gap-4 mb-6">
            <div className="h-[1px] w-8 bg-cyan-500/50" />
            <span className="text-[11px] font-mono uppercase tracking-[0.6em] text-cyan-500 font-bold">
              Identity_Protocol
            </span>
            <div className="h-[1px] w-8 bg-cyan-500/50" />
          </div>
          
          <GradientText
            colors={["#00f2ff", "#ffffff", "#00d4ff", "#3b82f6", "#00f2ff"]}
            className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-8"
          >
            About <br className="md:hidden" /> Me
          </GradientText>
          
          <p className="max-w-2xl text-slate-400 text-lg md:text-xl font-medium leading-relaxed italic mb-4">
            “Hey, I’m <span className="text-cyan-400 font-black not-italic">Rayan Ahmed</span> 👋 
            I build web applications and IoT systems <br className="hidden md:block" /> 
            that solve real-world problems.”
          </p>

          <span className="text-[12px] font-mono text-slate-600 uppercase tracking-[0.4em] font-bold mb-12">
            High Performance. Scalable architecture. Clean Code.
          </span>
          {/* --- EXACT HEADING DESIGN END --- */}

          {/* Quick Info Grid (The rest as it is) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl">
            <InfoCard icon={<Globe size={20}/>} label="Location" value="Bangladesh" accentColor="#3b82f6" />
            <InfoCard icon={<Cpu size={20}/>} label="Status" value="DIU // CIS" accentColor="#00f2ff" />
            <InfoCard icon={<Mail size={20}/>} label="Contact" value="rayansiam2021@gmail.com" accentColor="#a855f7" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const InfoCard = ({ icon, label, value, accentColor }) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className="relative p-[1px] rounded-[2rem] overflow-hidden group transition-all duration-500 bg-white/5"
  >
    <div className="relative z-10 bg-[#030712] rounded-[calc(2rem-1px)] p-8 flex flex-col items-center border border-white/5 group-hover:border-white/10 transition-colors">
      <div className="mb-4 p-3 rounded-xl bg-white/[0.03] border border-white/10" style={{ color: accentColor }}>
        {icon}
      </div>
      <span className="text-[9px] font-mono font-black tracking-[0.5em] text-slate-600 uppercase mb-2">
        {label}_Sector
      </span>
      <p className="text-white font-bold font-mono text-xs md:text-sm tracking-tight">{value}</p>
    </div>
  </motion.div>
);

export default AboutHero;
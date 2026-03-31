import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Globe, Cpu, Mail } from 'lucide-react';
import GradientText from '../bits/GradientText';

const AboutHero = () => {
  return (
    <section className="relative pt-32 pb-20 px-6 overflow-hidden bg-[#020617]">
      <div className="max-w-7xl mx-auto relative z-10 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col items-center w-full"
        >
          {/* Status Badges */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            <div className="px-4 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/5 flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[10px] font-bold tracking-[0.3em] text-emerald-400 uppercase">Available_For_Hire</span>
            </div>
            <div className="px-4 py-1.5 rounded-full border border-white/10 bg-white/5 flex items-center gap-2">
              <ShieldCheck size={12} className="text-blue-400" />
              <span className="text-[10px] font-bold tracking-[0.3em] text-slate-300 uppercase font-mono">Verified_Engineer</span>
            </div>
          </div>

          {/* Main Title */}
          <GradientText
                                                   colors={["#00f2ff", "#ffffff", "#00d4ff", "#3b82f6", "#00f2ff"]}
                                                   className="text-5xl md:text-4xl font-black uppercase tracking-tighter"
                                                 >
                                                   About Me
                                                 </GradientText>

          {/* Core Introduction */}
          <div className="max-w-3xl border-y border-white/5 py-10 my-8">
            <p className="text-xl md:text-2xl text-white  italic leading-relaxed">
              “Hey, I’m <span className="text-cyan-400 font-black">Rayan Ahmed</span> 👋 I’m a Computer Information Systems student, and I enjoy building things — from websites to IoT projects.”
            </p>
          </div>

          {/* Quick Info Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-4xl mt-10">
            <InfoCard icon={<Globe size={16}/>} label="Location" value="Bangladesh" />
            <InfoCard icon={<Cpu size={16}/>} label="Status" value="DIU // CIS" />
            <InfoCard icon={<Mail size={16}/>} label="Contact" value="rayansiam2021@gmail.com" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const InfoCard = ({ icon, label, value }) => (
  <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 backdrop-blur-sm group hover:border-cyan-500/30 transition-all">
    <div className="flex items-center justify-center gap-2 mb-2">
      {icon}
      <span className="text-[9px] font-bold text-slate-500 uppercase tracking-widest">{label}</span>
    </div>
    <p className="text-white font-bold font-mono text-sm">{value}</p>
  </div>
);

export default AboutHero;
import React from 'react';
import { Layout, Server, Globe, Cpu, Hexagon } from 'lucide-react';
import { motion } from 'framer-motion';
import GradientText from '../bits/GradientText';

const ServiceCard = ({ label, title, description, tech, icon: Icon, accentColor }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="relative p-[2px] rounded-[3rem] overflow-hidden group h-full transition-all duration-500 hover:-translate-y-2 smooth-gpu-layer"
      style={{ 
        /* 🎨 HIGH-VOLTAGE BORDER: Pure color to White specular transition */
        background: `linear-gradient(135deg, 
          ${accentColor} 0%, 
          ${accentColor} 30%, 
          #ffffff 50%, 
          ${accentColor} 70%, 
          ${accentColor} 100%)` 
      }}
    >
      {/* ⚡ INTENSE BACK-GLOW: Deep atmospheric spread */}
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-25 transition-opacity duration-700 pointer-events-none"
        style={{ 
          background: `radial-gradient(circle at center, ${accentColor} 0%, transparent 70%)`,
          filter: 'blur(60px)'
        }} 
      />

      <div className="relative z-10 bg-[#030712] rounded-[calc(3rem-2px)] h-full p-10 lg:p-12 flex flex-col border border-white/10 group-hover:border-white/20 transition-colors">
        
        {/* TOP: ICON & SECTOR ID */}
        <div className="flex justify-between items-start mb-10">
          <div className="relative">
            {/* ICON CONTAINER */}
            <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 text-white relative z-10 transition-transform duration-500 group-hover:scale-110 group-hover:border-white/30" style={{ color: accentColor }}>
              <Icon size={28} strokeWidth={1.5} className="group-hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]" />
            </div>
            {/* 🧬 ICON BLOOM: Intense center glow */}
            <div className="absolute inset-0 blur-3xl opacity-30 group-hover:opacity-80 transition-opacity duration-500 rounded-full scale-125" style={{ backgroundColor: accentColor }} />
          </div>
          <span className="text-[10px] font-mono font-black tracking-[0.5em] text-slate-600 uppercase pt-2 group-hover:text-slate-400 transition-colors">
            {label}_Sector
          </span>
        </div>

        {/* CENTER: CONTENT */}
        <div className="flex-grow">
          <h3 className="text-2xl lg:text-4xl font-black text-white uppercase italic tracking-tighter mb-5 leading-none group-hover:scale-[1.02] origin-left transition-transform duration-500">
            {title}
          </h3>
          
          <p className="text-slate-400 text-sm lg:text-base leading-relaxed mb-12 font-medium opacity-80 group-hover:text-slate-200 group-hover:opacity-100 transition-all">
            {description}
          </p>
        </div>

        {/* BOTTOM: TECH STACK */}
        <div className="pt-8 border-t border-white/10 group-hover:border-white/20 transition-colors">
          <div className="grid grid-cols-2 gap-y-4 gap-x-2">
            {tech.split(' • ').map((item, idx) => (
              <div key={idx} className="flex items-center gap-3 group/item">
                <Hexagon 
                  size={10} 
                  style={{ fill: `${accentColor}20`, color: accentColor }} 
                  className="group-hover/item:rotate-90 transition-transform duration-300 group-hover/item:drop-shadow-[0_0_5px_rgba(255,255,255,0.3)]" 
                />
                <span className="text-[10px] font-mono font-bold text-slate-500 group-hover:text-slate-200 transition-colors uppercase tracking-widest">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const WhatIBuild = () => {
  const services = [
    {
      label: "FRONTEND",
      title: "User Interface Development",
      description: "I build clean, responsive, and fast user interfaces using modern tools. My focus is on smooth experience, clear design, and easy navigation.",
      tech: "React • Vite • Tailwind CSS • Framer Motion",
      icon: Layout,
      accentColor: "#00f2ff" 
    },
    {
      label: "BACKEND",
      title: "Backend Development",
      description: "I develop secure and scalable backend systems using FastAPI and databases. I handle APIs, data processing, and server-side logic.",
      tech: "FastAPI • REST APIs • MySQL • Authentication",
      icon: Server,
      accentColor: "#3b82f6"
    },
    {
      label: "WORDPRESS",
      title: "WordPress Development",
      description: "I create and deploy professional WordPress websites with full customization, performance optimization, and hosting setup.",
      tech: "WordPress • WooCommerce • Hosting • Customization",
      icon: Globe,
      accentColor: "#a855f7"
    },
    {
      label: "IOT",
      title: "IoT & Smart Systems",
      description: "I build Arduino-based systems with sensors for automation and real-world problem solving.",
      tech: "Arduino • Sensors • Embedded Systems • Prototyping",
      icon: Cpu,
      accentColor: "#10b981"
    }
  ];

  return (
    <section className="relative py-24 lg:py-32 bg-[#030712] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-24 relative z-10 flex flex-col items-center text-center">
        <div className="flex items-center gap-4 mb-6">
          <div className="h-[1px] w-8 bg-cyan-500/50" />
          <span className="text-[11px] font-mono uppercase tracking-[0.6em] text-cyan-500 font-bold">
            Capabilities
          </span>
          <div className="h-[1px] w-8 bg-cyan-500/50" />
        </div>
        
        <GradientText
                                                           colors={["#00f2ff", "#ffffff", "#00d4ff", "#3b82f6", "#00f2ff"]}
                                                           className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-8"
                                                         >
                                                           What I Do
                                                         </GradientText>
        
        <p className="max-w-2xl text-slate-400 text-lg md:text-xl font-medium leading-relaxed italic mb-4">
          I build web applications, WordPress websites, and IoT systems <br className="hidden md:block" />
          that solve real-world problems.
        </p>

        <span className="text-[12px] font-mono text-slate-600 uppercase tracking-[0.4em] font-bold">
          High Performance. Scalable architecture. Clean Code.
        </span>
      </div>

      {/* GRID */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 relative z-10">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>

      {/* AMBIENT BACKGROUND DECOR */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full opacity-[0.03] pointer-events-none z-0">
        <div className="absolute inset-0" style={{ backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`, backgroundSize: '40px 40px' }} />
      </div>
    </section>
  );
};

export default WhatIBuild;
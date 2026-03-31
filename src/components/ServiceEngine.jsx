import React from 'react';
import { Globe, Layout, Cpu, ArrowRight, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import GradientText from './bits/GradientText';

const services = [
  {
    title: "WEB APPLICATION DEVELOPMENT",
    subtitle: "CODED WEB APPLICATION",
    desc: "Developing scalable full-stack web applications using React, FastAPI, and MySQL with clean architecture and high performance.",
    icon: <Globe size={22} />,
    color: "#00d4ff",
  },
  {
    title: "WORDPRESS DEVELOPMENT",
    subtitle: "ALL KINDS OF WORDPRESS",
    desc: "Developing and deploying high-performance WordPress websites with full customization, optimization, and secure hosting.",
    icon: <Layout size={22} />,
    color: "#10b981",
  },
  {
    title: "IOT SYSTEMS",
    subtitle: "SMART SYSTEMS",
    desc: "Building Microcontroller-based smart systems with sensor integration for automation and real-time control.",
    icon: <Cpu size={22} />,
    color: "#e0e41a",
  }
];

const ServiceCard = ({ service, index }) => {
  return (
    <motion.div                     
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="group relative h-full smooth-gpu-layer"
    >
      {/* 🔗 REDIRECTION: Ensure this matches your route in App.jsx */}
      <Link to="/service" className="block h-full cursor-pointer">
        <div 
          className="relative h-full min-h-[360px] p-[2px] rounded-[24px] overflow-hidden transition-all duration-500 ease-out hover:-translate-y-2 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.7)]"
          style={{ 
            /* 🎨 ULTRA GLOW BORDER: Higher saturation and white highlights */
            background: `linear-gradient(135deg, 
              ${service.color} 0%, 
              ${service.color} 30%, 
              #ffffff 50%, 
              ${service.color} 70%, 
              ${service.color} 100%)` 
          }}
        >
          
          {/* ⚡ INTENSE RADIAL GLOW: Increased opacity (0.2) and spread */}
          <div 
            className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-700 pointer-events-none"
            style={{ 
              background: `radial-gradient(circle at center, ${service.color} 0%, transparent 70%)`,
              filter: 'blur(40px)'
            }} 
          />

          {/* CONTENT PANEL */}
          <div className="relative bg-[#030712] p-8 md:p-10 h-full rounded-[23px] flex flex-col items-center text-center z-10 overflow-hidden border border-white/10 group-hover:border-white/20 transition-colors">
            
            {/* ICON WITH OVERGLOW */}
            <div className="mb-6 p-5 rounded-2xl bg-white/[0.05] border border-white/[0.1] relative transition-all duration-500 group-hover:border-white/30" 
                 style={{ color: service.color }}>
              {/* This div creates the glow behind the icon */}
              <div className="absolute inset-0 blur-3xl opacity-40 group-hover:opacity-80 transition-opacity duration-500 rounded-full" 
                   style={{ backgroundColor: service.color }} />
              <div className="relative z-10 group-hover:scale-110 group-hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.5)] transition-all duration-500">
                {service.icon}
              </div>
            </div>
            
            <h3 className="text-xl md:text-2xl font-black uppercase tracking-tight text-white mb-2">
              {service.title}
            </h3>

            <p className="text-[10px] font-black tracking-[0.4em] mb-4 uppercase"
               style={{ color: service.color }}>
              {service.subtitle}
            </p>
            
            <p className="text-slate-300 text-[16px] leading-[1.6] mb-8 flex-grow font-light">
              {service.desc}
            </p>

            {/* INTERACTIVE FOOTER */}
            <div className="mt-auto flex items-center gap-3 text-white/40 group-hover:text-white transition-all duration-300 text-[10px] font-black uppercase tracking-[0.3em]">
              <span className="group-hover:tracking-[0.4em] transition-all">Learn More</span>
              <div className="p-2 rounded-full bg-white/5 group-hover:bg-white/10 transition-colors">
                <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" style={{ color: service.color }} />
              </div>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

const ServiceEngine = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-12 md:py-16 flex flex-col items-center">
      
      {/* HEADER */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-12 text-center w-full flex flex-col items-center"
      >
                           <GradientText
                                                                              colors={["#00f2ff", "#ffffff", "#00d4ff", "#3b82f6", "#00f2ff"]}
                                                                              className="text-5xl md:text-4xl font-black uppercase tracking-tighter"
                                                                            >
                                                                              What I Do
                                                                            </GradientText>
          <div className="mt-4 h-[2px] w-20 bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-50" />
      </motion.div>

      {/* GRID */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl">
        {services.map((service, index) => (
          <ServiceCard key={index} index={index} service={service} />
        ))}
      </div>
    </section>
  );
};

export default ServiceEngine;
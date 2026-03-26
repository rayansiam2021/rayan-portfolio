import React from 'react';
import { Globe, Layout, Cpu, ArrowRight, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import GradientText from './bits/GradientText';


const services = [
  {
    title: "Digital Solutions",
    subtitle: "FULL-STACK DEVELOPMENT",
    desc: "Developing scalable full-stack web applications using React, FastAPI, and MySQL with clean architecture and high performance.",
    icon: <Globe size={22} />,
    color: "#00d4ff",
  },
  {
    title: "Web Platforms",
    subtitle: "WORDPRESS DEVELOPMENT",
    desc: "Developing and deploying high-performance WordPress websites with full customization, optimization, and secure hosting.",
    icon: <Layout size={22} />,
    color: "#10b981",
  },
  {
    title: "Smart Systems",
    subtitle: "IOT SYSTEMS",
    desc: "Building Arduino-based smart systems with sensor integration for automation and real-time control.",
    icon: <Cpu size={22} />,
    color: "#f97316",
  }
];

const ServiceCard = ({ service, index }) => {
  return (
    <motion.div                    
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="group relative h-full transform-gpu"
    >
      <div className="relative h-full min-h-[360px] p-[2px] rounded-[24px] overflow-hidden transition-all duration-500 ease-out hover:-translate-y-2 shadow-[0_10px_30px_-15px_rgba(0,0,0,0.5)]">
        
        {/* SNAKE BORDER */}
        <div 
          className="absolute inset-[-150%] animate-snake pointer-events-none z-0 opacity-100"
          style={{ 
            background: `conic-gradient(from 0deg, transparent 70%, ${service.color} 88%, #fff 96%, ${service.color} 100%)`,
            WebkitBackfaceVisibility: 'hidden'
          }}
        />

        {/* CONTENT */}
        <div className="relative bg-[#030712] p-8 md:p-10 h-full rounded-[23px] flex flex-col items-center text-center z-10 overflow-hidden border border-white/5">
          <div className="absolute inset-0 opacity-[0.03] group-hover:opacity-10 transition-opacity duration-700 pointer-events-none"
               style={{ backgroundColor: service.color, filter: 'blur(60px)' }} />

          {/* ICON */}
          <div className="mb-6 p-5 rounded-2xl bg-white/[0.03] border border-white/[0.05] relative transition-all duration-500 group-hover:border-white/20" 
               style={{ color: service.color }}>
            <div className="absolute inset-0 blur-2xl opacity-20 group-hover:opacity-50 transition-opacity duration-500 rounded-full" 
                 style={{ backgroundColor: service.color }} />
            <div className="relative z-10 group-hover:scale-110 transition-transform duration-500">
              {service.icon}
            </div>
          </div>
          
          <h3 className="text-xl md:text-2xl font-black uppercase tracking-tight text-white mb-2">
            {service.title}
          </h3>

          <p className="text-[9px] font-mono text-slate-500 tracking-[0.3em] mb-4 uppercase font-bold">
            {service.subtitle}
          </p>
          
          <p className="text-[#a0a0a0] text-[14px] leading-[1.6] mb-6 flex-grow font-light max-w-[280px]">
            {service.desc}
          </p>

          <div className="mt-auto flex items-center gap-2 text-white/40 group-hover:text-white transition-all duration-300 text-[10px] font-black uppercase tracking-[0.2em]">
            <span>Learn More</span>
            <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-2" style={{ color: service.color }} />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const ServiceEngine = () => {
  return (
    /* REDUCED: py-12 md:py-20 to py-8 md:py-12 */
    <section className="max-w-7xl mx-auto px-6 py-8 md:py-12 flex flex-col items-center overflow-visible">
      
      {/* HEADER: Reduced mb from 16 to 8 */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-8 md:mb-10 text-center w-full flex flex-col items-center"
      >
          <GradientText
                                colors={["#00f2ff", "#ffffff", "#00d4ff", "#3b82f6", "#00f2ff"]}
                                className="text-3xl md:text-4xl font-black uppercase tracking-tighter"
                              >
                                WHAT I DO
                              </GradientText>
          <p className="text-slate-400 text-sm md:text-base font-light leading-relaxed max-w-[500px]">
            I build full-stack web applications, WordPress websites, and smart IoT systems focused on solving real-world problems.
          </p>
          <div className="mt-4 h-[1px] w-16 bg-cyan-500/50 rounded-full" />
      </motion.div>

      {/* GRID: Reduced mb from 12 to 8 */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-8 w-full max-w-6xl">
        {services.map((service, index) => (
          <ServiceCard key={index} index={index} service={service} />
        ))}
      </div>

      {/* FOOTER */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="flex justify-center"
      >
        <a 
          href="/services" 
          className="group flex items-center gap-4 px-8 py-3 bg-white/5 border border-white/10 rounded-xl transition-all duration-200 hover:bg-white/10 hover:border-cyan-500/50 active:scale-95"
        >
          <span className="text-white font-black text-[10px] uppercase tracking-[0.2em]">View All Services</span>
          <ChevronRight size={14} className="text-cyan-500" />
        </a>
      </motion.div>
    </section>
  );
};

export default ServiceEngine;
import React from 'react';
import { Globe, Layout, Cpu, ArrowRight, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

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
      {/* CARD WRAPPER */}
      <div className="relative h-full min-h-[380px] p-[2px] rounded-[24px] overflow-hidden transition-all duration-500 ease-out hover:-translate-y-3 shadow-[0_10px_30px_-15px_rgba(0,0,0,0.5)] hover:shadow-[0_20px_50px_-20px_rgba(0,0,0,0.7)]">
        
        {/* ⚡ CONTINUOUS SNAKE - Always Visible & Synced */}
        <div 
          className="absolute inset-[-150%] animate-snake pointer-events-none z-0 opacity-100"
          style={{ 
            background: `conic-gradient(from 0deg, transparent 70%, ${service.color} 88%, #fff 96%, ${service.color} 100%)`,
            WebkitBackfaceVisibility: 'hidden'
          }}
        />

        {/* INNER CONTENT CONTAINER */}
        <div className="relative bg-[#030712] p-8 md:p-10 h-full rounded-[23px] flex flex-col items-center text-center z-10 overflow-hidden mobile-optimized-bg border border-white/5">
          
          {/* Static Background Glow (Subtle) */}
          <div className="absolute inset-0 opacity-[0.03] group-hover:opacity-10 transition-opacity duration-700 pointer-events-none"
               style={{ backgroundColor: service.color, filter: 'blur(60px)' }} />

          {/* ICON CONTAINER */}
          <div className="mb-8 p-5 rounded-2xl bg-white/[0.03] border border-white/[0.05] relative transition-all duration-500 group-hover:border-white/20 group-hover:bg-white/[0.07]" 
               style={{ color: service.color }}>
            <div className="absolute inset-0 blur-2xl opacity-20 group-hover:opacity-50 transition-opacity duration-500 rounded-full" 
                 style={{ backgroundColor: service.color }} />
            <div className="relative z-10 group-hover:scale-110 transition-transform duration-500">
              {service.icon}
            </div>
          </div>
          
          <h3 className="text-xl md:text-2xl font-black uppercase tracking-tight text-white mb-2 transition-colors duration-300">
            {service.title}
          </h3>

          <p className="text-[9px] font-mono text-slate-500 tracking-[0.3em] mb-6 uppercase font-bold opacity-70">
            {service.subtitle}
          </p>
          
          <p className="text-[#a0a0a0] text-[14px] md:text-[15px] leading-[1.7] mb-8 flex-grow font-light max-w-[280px]">
            {service.desc}
          </p>

          {/* LEARN MORE */}
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
    <section className="max-w-7xl mx-auto px-6 py-20 md:py-32 my-10 flex flex-col items-center overflow-visible">
      
      {/* HEADER SECTION */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-20 md:mb-28 text-center w-full flex flex-col items-center"
      >
          <h2 className="text-white font-black text-4xl md:text-6xl uppercase tracking-tighter mb-6">
            What <span className="text-cyan-500">I Do</span>
          </h2>
          <p className="text-slate-400 text-lg md:text-xl font-light leading-relaxed max-w-[600px]">
            I specialize in building <span className="text-white font-medium">scalable digital solutions</span> across web and embedded systems.
          </p>
          <div className="mt-8 h-[2px] w-20 bg-cyan-500 rounded-full shadow-[0_0_15px_#06b6d4]" />
      </motion.div>

      {/* CARDS GRID */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 mb-24 w-full max-w-6xl">
        {services.map((service, index) => (
          <ServiceCard key={index} index={index} service={service} />
        ))}
      </div>

      {/* FOOTER BUTTON */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="flex justify-center"
      >
        <a 
          href="/services" 
          className="group flex items-center gap-5 px-12 py-5 bg-white/5 border border-white/10 rounded-[20px] transition-all duration-200 hover:scale-105 hover:bg-white/10 hover:border-cyan-500/50 active:scale-95 transform-gpu shadow-2xl relative overflow-hidden"
        >
          <span className="relative z-10 text-white font-black text-[12px] uppercase tracking-[0.3em]">View All Services</span>
          <div className="relative z-10 p-1.5 bg-cyan-500 rounded-lg text-[#030712] shadow-[0_0_15px_rgba(6,182,212,0.4)] transition-transform duration-300 group-hover:translate-x-1">
             <ChevronRight size={18} strokeWidth={3} />
          </div>
        </a>
      </motion.div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes snake {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        .animate-snake {
          animation: snake 4s linear infinite;
        }
        @media (max-width: 768px) {
          .mobile-optimized-bg {
            backdrop-filter: none !important;
            background-color: #030712 !important;
          }
        }
      `}} />
    </section>
  );
};

export default ServiceEngine;
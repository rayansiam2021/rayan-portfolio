import React from 'react';
import { Layout, Database, Cpu, Globe2 } from 'lucide-react';
import { motion } from 'framer-motion';
import GradientText from '../bits/GradientText';


const ServiceHighlights = () => {
  const services = [
    {
      title: "Full-Stack Web Apps",
      desc: "I build the front and the back. Usually using FastAPI, PHP, and MySQL to make sure everything is fast and secure.",
      icon: <Database size={24} />,
      color: "#06b6d4" // Cyan
    },
    {
      title: "WordPress & Marketplaces",
      desc: "From custom themes to complex multi-vendor setups using Dokan and Elementor. I make WordPress actually perform.",
      icon: <Layout size={24} />,
      color: "#a855f7" // Purple
    },
    {
      title: "API & Integrations",
      desc: "Connecting different systems together. Whether it's payment gateways or custom data pipelines, I make them talk.",
      icon: <Globe2 size={24} />,
      color: "#10b981" // Emerald
    },
    {
      title: "IoT & Smart Systems",
      desc: "I love working with hardware. Arduino, sensors, and real-world automation—like the fire systems I've built.",
      icon: <Cpu size={24} />,
      color: "#fb923c" // Orange
    }
  ];

  return (
    <div className="mt-24 mb-32 px-4">
      {/* 🎯 CENTERED HEADER WITH HIGH-GLOW DIVIDER */}
      <div className="flex flex-col mb-20 items-center text-center">
        
                         <GradientText
                                                   colors={["#00f2ff", "#ffffff", "#00d4ff", "#3b82f6", "#00f2ff"]}
                                                   className="text-5xl md:text-4xl font-black uppercase tracking-tighter"
                                                 >
                                                   I can help you with
                                                 </GradientText>
                                                 
        
        <div className="w-24 h-[2px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent mt-8 shadow-[0_0_15px_#06b6d4]" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="relative p-[2px] rounded-[2rem] overflow-hidden group h-full transition-all duration-500 hover:-translate-y-2 smooth-gpu-layer"
            style={{ 
              /* 🎨 LASER-EDGE BORDER: High intensity white-hot center */
              background: `linear-gradient(135deg, 
                ${service.color} 0%, 
                ${service.color} 40%, 
                #ffffff 50%, 
                ${service.color} 60%, 
                ${service.color} 100%)` 
            }}
          >
            {/* ⚡ LAYER 1: CONSTANT AMBIENT GLOW (20% Baseline) */}
            <div 
              className="absolute inset-0 opacity-20 group-hover:opacity-40 transition-opacity duration-700 pointer-events-none"
              style={{
                background: `radial-gradient(circle at center, ${service.color} 0%, transparent 70%)`,
                filter: 'blur(40px)'
              }}
            />

            {/* ⚡ LAYER 2: INTENSE HOVER BLOOM (Activates on hover) */}
            <div 
              className="absolute inset-0 opacity-0 group-hover:opacity-60 transition-opacity duration-500 pointer-events-none"
              style={{
                background: `radial-gradient(circle at center, ${service.color} 20%, transparent 60%)`,
                filter: 'blur(80px)'
              }}
            />

            <div className="relative z-10 bg-[#030712] p-10 rounded-[calc(2rem-2px)] h-full flex flex-col border border-white/10 group-hover:border-white/20 transition-all">
              
              {/* Glowing Icon Container */}
              <div className="mb-8 p-4 w-fit rounded-2xl bg-white/5 border border-white/10 relative group-hover:scale-110 group-hover:border-white/30 transition-all duration-500"
                   style={{ color: service.color }}>
                {service.icon}
                {/* Icon Back-Glow */}
                <div className="absolute inset-0 blur-xl opacity-40 group-hover:opacity-100 transition-opacity rounded-full" 
                     style={{ backgroundColor: service.color }} />
              </div>

              <h4 className="text-xl font-black text-white mb-4 tracking-tight uppercase italic group-hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">
                {service.title}
              </h4>
              
              <p className="text-sm text-slate-500 leading-relaxed font-medium group-hover:text-slate-300 transition-colors italic">
                {service.desc}
              </p>

              {/* Decorative Footer Bars */}
              <div className="mt-auto pt-8 flex gap-1">
                {[1,2,3].map(i => (
                  <div key={i} className="w-4 h-1 rounded-full bg-white/10 group-hover:bg-current transition-colors" 
                       style={{ color: service.color }} />
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ServiceHighlights;
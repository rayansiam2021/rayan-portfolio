import React from 'react';
import { Globe, Cpu, ShoppingCart, Zap, ArrowRight, ShieldCheck } from 'lucide-react';
import ElectricBorder from './bits/ElectricBorder';
import GradientText from './bits/GradientText';

const services = [
  {
    title: "Digital Solutions",
    subtitle: "FULL_STACK_WEB_APPS",
    desc: "Custom high-performance web applications built with React, FastAPI, and modern cloud architecture.",
    icon: <Globe size={24} />,
    color: "#00f2ff", // Cyan
    colorArray: ["#00f2ff", "#ffffff", "#00d4ff", "#3b82f6", "#00f2ff"]
  },
  {
    title: "Hardware Solutions",
    subtitle: "IOT_&_FIRMWARE",
    desc: "End-to-end hardware prototyping. ESP32/Arduino sensor integration and custom C++ firmware development.",
    icon: <Cpu size={24} />,
    color: "#fb923c", // Orange
    colorArray: ["#fb923c", "#ffffff", "#ffedd5", "#f97316", "#fb923c"]
  },
  {
    title: "Commercial Solutions",
    subtitle: "HIGH_PERFORMANCE_ECOMM",
    desc: "Scalable WordPress & WooCommerce stores optimized for speed, SEO, and high conversion rates.",
    icon: <ShoppingCart size={24} />,
    color: "#10b981", // Green
    colorArray: ["#10b981", "#ffffff", "#d1fae5", "#059669", "#10b981"]
  }
];

const ServiceEngine = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-24">
      
      {/* --- Cyber-Style Header --- */}
      <div className="text-center mb-20">
        <h2 className="text-[11px] font-black tracking-[0.8em] uppercase text-slate-500 opacity-80">
          Service_Engine_v2.0
        </h2>
        <div className="h-[1px] w-48 bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent mx-auto mt-4 shadow-[0_0_10px_rgba(6,182,212,0.3)]"></div>
      </div>

      {/* --- Services Grid --- */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div key={index} className="group cursor-pointer">
            <ElectricBorder 
              color={service.color} 
              speed={1} 
              chaos={0.02} 
              borderRadius={20}
            >
              <div className="bg-[#0b1222]/80 backdrop-blur-md p-8 h-full border border-white/5 rounded-[20px] hover:bg-[#0f172a] transition-colors duration-500 flex flex-col">
                
                {/* Icon with matching color glow */}
                <div 
                  className="mb-6 inline-block p-3 bg-white/5 rounded-xl group-hover:scale-110 transition-transform duration-500 w-fit"
                  style={{ color: service.color }}
                >
                  {service.icon}
                </div>
                
                {/* Gradient Title matching the card's color theme */}
                <div className="mb-1">
                  <GradientText
                    colors={service.colorArray}
                    animationSpeed={8}
                    showBorder={false}
                    className="text-xl font-bold !justify-start !mx-0"
                  >
                    {service.title}
                  </GradientText>
                </div>

                <p className="text-[10px] font-mono text-slate-500 tracking-[0.2em] mb-4 uppercase">
                  {service.subtitle}
                </p>
                
                <p className="text-slate-400 text-sm leading-relaxed mb-8 flex-grow">
                  {service.desc}
                </p>

                {/* Footer Inquiry with matching hover effect */}
                <div className="mt-auto flex items-center gap-2 text-white/40 group-hover:text-white transition-colors text-[10px] font-black uppercase tracking-widest">
                  Initialize Inquiry 
                  <ArrowRight 
                    size={14} 
                    className="group-hover:translate-x-1 transition-transform" 
                    style={{ color: service.color }} 
                  />
                </div>
              </div>
            </ElectricBorder>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceEngine;
import React from 'react';
import { Globe, Cpu, ShoppingCart, ArrowRight } from 'lucide-react';
import GradientText from './bits/GradientText';

const services = [
  {
    title: "Digital Solutions",
    subtitle: "FULL_STACK_WEB_APPS",
    desc: "Custom high-performance web applications built with React, FastAPI, and modern cloud architecture.",
    icon: <Globe size={24} />,
    color: "#00f2ff",
    colorArray: ["#00f2ff", "#ffffff", "#00d4ff", "#3b82f6", "#00f2ff"]
  },
  {
    title: "Hardware Solutions",
    subtitle: "IOT_&_FIRMWARE",
    desc: "End-to-end hardware prototyping. ESP32/Arduino sensor integration and custom C++ firmware development.",
    icon: <Cpu size={24} />,
    color: "#fb923c",
    colorArray: ["#fb923c", "#ffffff", "#ffedd5", "#f97316", "#fb923c"]
  },
  {
    title: "Commercial Solutions",
    subtitle: "HIGH_PERFORMANCE_ECOMM",
    desc: "Scalable WordPress & WooCommerce stores optimized for speed, SEO, and high conversion rates.",
    icon: <ShoppingCart size={24} />,
    color: "#10b981",
    colorArray: ["#10b981", "#ffffff", "#d1fae5", "#059669", "#10b981"]
  }
];

const ServiceCard = ({ service }) => {
  return (
    <div className="group relative p-[2px] rounded-[24px] overflow-hidden transition-all duration-500 hover:-translate-y-2 transform-gpu shadow-2xl">
      
      {/* ALWAYS ACTIVE SPINNING BORDER */}
      <div 
        className="absolute inset-[-150%] animate-[spin_4s_linear_infinite] opacity-100"
        style={{ 
          background: `conic-gradient(from 0deg, transparent 70%, ${service.color} 88%, #fff 96%, ${service.color} 100%)`,
          filter: 'blur(1px)' // Makes the "Snake" look more electric
        }}
      />

      {/* INNER CONTENT CONTAINER */}
      <div className="relative bg-[#030712] p-8 h-full rounded-[23px] flex flex-col z-10 overflow-hidden">
        
        {/* HOVER EFFECT: Internal Bloom/Glow */}
        <div 
          className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-700 pointer-events-none"
          style={{ backgroundColor: service.color, filter: 'blur(60px)' }}
        />

        {/* Icon with Hover-Triggered Bloom */}
        <div 
          className="mb-6 inline-block p-4 bg-white/5 rounded-2xl group-hover:scale-110 transition-all duration-500 w-fit relative"
          style={{ color: service.color }}
        >
          {/* Internal Glow behind icon - Only pops on hover */}
          <div className="absolute inset-0 blur-xl opacity-0 group-hover:opacity-70 transition-opacity duration-500 rounded-full" 
               style={{ backgroundColor: service.color }} />
          <div className="relative z-10">{service.icon}</div>
        </div>
        
        <div className="mb-1">
          <GradientText
            colors={service.colorArray}
            animationSpeed={10} 
            showBorder={false}
            className="text-2xl font-black uppercase tracking-tight !justify-start !mx-0"
          >
            {service.title}
          </GradientText>
        </div>

        <p className="text-[10px] font-mono text-slate-500 tracking-[0.3em] mb-4 uppercase font-bold">
          {service.subtitle}
        </p>
        
        <p className="text-slate-400 text-sm leading-relaxed mb-8 flex-grow font-medium">
          {service.desc}
        </p>

        <div className="mt-auto flex items-center gap-2 text-white/30 group-hover:text-white transition-colors text-[10px] font-black uppercase tracking-[0.2em]">
          <span>Initialize_Inquiry</span>
          <ArrowRight size={14} className="group-hover:translate-x-3 transition-transform duration-500" style={{ color: service.color }} />
        </div>
      </div>
    </div>
  );
};

const ServiceEngine = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 py-32">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {services.map((service, index) => (
          <ServiceCard key={index} service={service} />
        ))}
      </div>

      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  );
};

export default ServiceEngine;
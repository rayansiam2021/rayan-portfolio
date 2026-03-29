import React from 'react';
import { Layout, Server, Globe, Cpu, Hexagon } from 'lucide-react';

const ServiceCard = ({ label, title, description, tech, icon: Icon, accentColor }) => {
  return (
    <div className="relative p-[1px] rounded-[3rem] overflow-hidden group bg-[#030712] h-full transition-all duration-500 hover:-translate-y-2">
      
      {/* 🐍 THE SNAKE SPIN (Always Active) */}
      <div className="absolute inset-[-150%] pointer-events-none transition-opacity duration-1000">
        <div 
          className="w-full h-full animate-[spin_4s_linear_infinite]"
          style={{ 
            background: `conic-gradient(from 0deg, transparent 60%, ${accentColor} 80%, #fff 95%, ${accentColor} 100%)`,
            filter: 'blur(15px)', 
          }}
        />
      </div>

      <div className="relative z-10 bg-[#030712]/98 backdrop-blur-xl rounded-[calc(3rem-1px)] h-full p-10 lg:p-12 flex flex-col border border-white/5 group-hover:border-white/10 transition-colors">
        
        {/* TOP: ICON & SECTOR ID */}
        <div className="flex justify-between items-start mb-10">
          <div className="relative">
            <div className="p-4 rounded-2xl bg-white/5 text-white relative z-10 transition-transform duration-500 group-hover:scale-110" style={{ color: accentColor }}>
              <Icon size={28} strokeWidth={1.5} />
            </div>
            <div className="absolute inset-0 blur-2xl opacity-20 group-hover:opacity-40 transition-opacity" style={{ backgroundColor: accentColor }} />
          </div>
          <span className="text-[10px] font-mono font-black tracking-[0.5em] text-slate-600 uppercase pt-2">
            {label}_Sector
          </span>
        </div>

        {/* CENTER: CONTENT */}
        <div className="flex-grow">
          <h3 className="text-2xl lg:text-3xl font-black text-white uppercase italic tracking-tighter mb-5 leading-none">
            {title}
          </h3>
          
          <p className="text-slate-400 text-sm lg:text-base leading-relaxed mb-12 font-medium opacity-80 group-hover:opacity-100 transition-opacity">
            {description}
          </p>
        </div>

        {/* BOTTOM: TECH STACK */}
        <div className="pt-8 border-t border-white/5">
          <div className="grid grid-cols-2 gap-y-4 gap-x-2">
            {tech.split(' • ').map((item, idx) => (
              <div key={idx} className="flex items-center gap-3 group/item">
                <Hexagon size={10} style={{ fill: `${accentColor}20`, color: accentColor }} className="group-hover/item:rotate-90 transition-transform duration-300" />
                <span className="text-[10px] font-mono font-bold text-slate-500 group-hover:text-slate-200 transition-colors uppercase tracking-widest">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
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
      accentColor: "#22d3ee"
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
    <section className="relative py-32 bg-[#030712] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-24 relative z-10 flex flex-col items-center text-center">
        <div className="flex items-center gap-4 mb-6">
          <div className="h-[1px] w-8 bg-cyan-500/50" />
          <span className="text-[11px] font-mono uppercase tracking-[0.6em] text-cyan-500 font-bold">
            Services
          </span>
          <div className="h-[1px] w-8 bg-cyan-500/50" />
        </div>
        
        <h2 className="text-5xl md:text-7xl font-black uppercase italic tracking-tighter text-white leading-none mb-8">
          What <span className="text-slate-800">I</span> Do
        </h2>
        
        <p className="max-w-2xl text-slate-400 text-lg md:text-xl font-medium leading-relaxed italic mb-4">
          I build web applications, WordPress websites, and IoT systems <br className="hidden md:block" />
          that solve real-world problems.
        </p>

        <span className="text-[10px] font-mono text-slate-600 uppercase tracking-[0.4em] font-bold">
          Simple solutions. Scalable systems. Real results.
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 relative z-10">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full opacity-[0.02] pointer-events-none z-0">
        <div className="absolute inset-0" style={{ backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`, backgroundSize: '40px 40px' }} />
      </div>
    </section>
  );
};

export default WhatIBuild;
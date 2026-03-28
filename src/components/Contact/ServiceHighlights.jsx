import React from 'react';
import { Layout, Database, Cpu, Globe2 } from 'lucide-react';

const ServiceHighlights = () => {
  const services = [
    {
      title: "Full-Stack Web Apps",
      desc: "I build the front and the back. Usually using FastAPI, PHP, and MySQL to make sure everything is fast and secure.",
      icon: <Database className="text-cyan-500" size={24} />,
      color: "from-cyan-500/20"
    },
    {
      title: "WordPress & Marketplaces",
      desc: "From custom themes to complex multi-vendor setups using Dokan and Elementor. I make WordPress actually perform.",
      icon: <Layout className="text-purple-500" size={24} />,
      color: "from-purple-500/20"
    },
    {
      title: "API & Integrations",
      desc: "Connecting different systems together. Whether it's payment gateways or custom data pipelines, I make them talk.",
      icon: <Globe2 className="text-emerald-500" size={24} />,
      color: "from-emerald-500/20"
    },
    {
      title: "IoT & Smart Systems",
      desc: "I love working with hardware. Arduino, sensors, and real-world automation—like the fire systems I've built.",
      icon: <Cpu className="text-orange-500" size={24} />,
      color: "from-orange-500/20"
    }
  ];

  return (
    <div className="mt-24 mb-32">
      <div className="flex flex-col mb-12">
        <span className="text-[10px] font-black uppercase tracking-[0.5em] text-cyan-500 mb-2">Capabilities_v2.0</span>
        <h2 className="text-3xl font-black text-white italic uppercase tracking-tighter">
          Here are a few things <br /> <span className="text-slate-500">I can help you with:</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service, idx) => (
          <div 
            key={idx} 
            className="group relative p-8 rounded-3xl bg-[#030712] border border-white/5 hover:border-white/10 transition-all duration-500 overflow-hidden"
          >
            {/* Subtle Gradient Glow */}
            <div className={`absolute inset-0 bg-gradient-to-br ${service.color} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
            
            <div className="relative z-10">
              <div className="mb-6 p-3 w-fit rounded-2xl bg-white/5 border border-white/5 group-hover:scale-110 transition-transform duration-500">
                {service.icon}
              </div>
              <h4 className="text-lg font-bold text-white mb-3 tracking-tight">
                {service.title}
              </h4>
              <p className="text-sm text-slate-500 leading-relaxed font-medium group-hover:text-slate-400 transition-colors">
                {service.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceHighlights;
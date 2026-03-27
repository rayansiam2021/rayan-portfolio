import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, User, ChevronRight } from 'lucide-react';
import GradientText from '../bits/GradientText';

const ContactInfo = () => {
  const coordinates = [
    { icon: <Mail size={18} />, label: 'Direct_Uplink', value: 'rayan_siam@example.com', type: 'email' },
    { icon: <MapPin size={18} />, label: 'Base_Coordinates', value: 'Dhaka, Bangladesh', type: 'static' },
    { icon: <User size={18} />, label: 'System_Identity', value: 'Rayan Siam', type: 'static' },
  ];

  return (
    <div className="space-y-12">
      {/* HEADER: Storytelling description matching ProjectMatrix */}
      <div className="flex flex-col items-center text-center">
        <div className="p-3 bg-rose-500/10 border border-rose-500/20 rounded-full text-rose-500 mb-6">
           <User size={28} />
        </div>
        <p className="text-slate-400 text-sm md:text-base font-light leading-relaxed max-w-sm mb-6">
          I turned complex code into intuitive experiences. Whether it's a 
          <span className="text-rose-400 font-bold"> corporate build</span> or a 
          <span className="text-rose-400 font-bold"> video sequence</span>, let's establish a direct dialogue.
        </p>
        <div className="w-16 h-[1px] bg-rose-500/50 rounded-full" />
      </div>

      {/* DATA COORDINATES with "Snake Spin" border */}
      <div className="relative p-[1.5px] rounded-[2rem] overflow-hidden group bg-[#030712] shadow-2xl">
        {/* shared-conic-spin logic added via global CSS in Contact.jsx */}
        <div className="absolute inset-[-180%] pointer-events-none global-snake-spin">
          <div className="w-full h-full" style={{ background: `conic-gradient(from 0deg, transparent 70%, #f43f5e 80%, #fff 90%, #f43f5e 100%)`, filter: 'blur(10px)' }} />
        </div>

        <div className="relative z-10 bg-[#0f172a] rounded-[calc(2rem-1.5px)] p-10 border border-white/5 space-y-6">
          <h4 className="text-[12px] font-black uppercase tracking-[0.5em] text-rose-500 italic mb-8">Base_Logistics</h4>
          {coordinates.map((coord, idx) => (
            <motion.div key={idx} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: idx * 0.15 }} viewport={{ once: true }}>
              {coord.type === 'email' ? (
                <a href={`mailto:${coord.value}`} className="group flex items-center justify-between gap-4 p-5 rounded-xl bg-white/[0.03] border border-white/5 hover:border-rose-500/50 hover:bg-rose-500/[0.03] transition-all">
                  <div className="flex items-center gap-4">
                    <div className="p-2.5 rounded-lg bg-rose-500/10 text-rose-500 group-hover:scale-110 transition-transform">{coord.icon}</div>
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-slate-500">{coord.label}</p>
                      <p className="text-slate-100 font-medium tracking-tight group-hover:text-white transition-colors">{coord.value}</p>
                    </div>
                  </div>
                  <ChevronRight size={18} className="text-slate-600 group-hover:text-rose-500 transition-colors" />
                </a>
              ) : (
                <div className="flex items-center gap-4 p-5">
                  <div className="p-2.5 rounded-lg bg-rose-500/10 text-rose-500">{coord.icon}</div>
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-slate-500">{coord.label}</p>
                    <p className="text-slate-100 font-medium italic tracking-tighter">{coord.value}</p>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
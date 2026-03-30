import React from 'react';
import { Mail, MapPin, CheckCircle2, Terminal } from 'lucide-react';
import { motion } from 'framer-motion';

const ContactInfo = () => {
  const achievements = [
    "Built business marketplaces using WordPress & Dokan",
    "Developed an Arduino-based obstacle avoiding car",
    "Created a smart fire detection system using sensors"
  ];

  return (
    <div className="flex flex-col gap-10">
      {/* 🛠️ HEADER MODULE */}
      <div className="relative group">
        <div className="flex items-center gap-3 mb-4">
          <Terminal size={18} className="text-cyan-500 animate-pulse" />
          <span className="text-[10px] font-black uppercase tracking-[0.5em] text-slate-500">
            System_Operator_Profile
          </span>
        </div>
        <h3 className="text-3xl md:text-4xl font-black uppercase italic tracking-tighter text-white mb-6 group-hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.3)] transition-all">
          The Human <span className="text-cyan-500">Behind the Code</span>
        </h3>
        <p className="text-slate-400 leading-relaxed font-medium italic border-l-2 border-white/10 pl-6 group-hover:border-cyan-500/50 transition-colors">
          I’m a CIS student specializing in full-stack architecture and IoT integration. 
          Currently focused on building high-performance systems and seeking opportunities 
           to deploy real-world solutions.
        </p>
      </div>

      {/* ⚡ CONTACT CHIPS: HIGH-LEVEL GLOW FROM START */}
      <div className="grid gap-4">
        {[
          { 
            icon: <Mail size={20} />, 
            label: "Direct_Inquiry", 
            val: "rayansiam2021@gmail.com", 
            color: "#06b6d4",
            font: "font-mono"
          },
          { 
            icon: <MapPin size={20} />, 
            label: "Base_Coordinates", 
            val: "Dhaka, Bangladesh", 
            color: "#a855f7",
            font: "font-sans"
          }
        ].map((info, idx) => (
          <div 
            key={idx}
            className="relative p-[1.5px] rounded-2xl overflow-hidden group/chip transition-all duration-500 hover:-translate-y-1"
            style={{ 
              background: `linear-gradient(135deg, ${info.color} 0%, #ffffff 50%, ${info.color} 100%)` 
            }}
          >
            <div className="relative z-10 flex items-center gap-5 p-5 bg-[#030712] rounded-[calc(1.5rem-1.5px)] border border-white/5 group-hover/chip:border-white/20 transition-all">
              {/* Standby Glow for Icons */}
              <div 
                className="p-3 rounded-xl bg-white/5 relative flex items-center justify-center transition-transform group-hover/chip:scale-110"
                style={{ color: info.color }}
              >
                {info.icon}
                <div className="absolute inset-0 blur-lg opacity-30 group-hover/chip:opacity-100 transition-opacity"
                     style={{ backgroundColor: info.color }} />
              </div>
              
              <div className="flex flex-col">
                <p className="text-[9px] uppercase tracking-[0.3em] text-slate-500 font-black mb-1">
                  {info.label}:
                </p>
                <p className={`text-white text-sm md:text-base ${info.font} tracking-tight`}>
                  {info.val}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 🚀 TRUST DEPLOYMENT: ACHIEVEMENT LIST */}
      <div className="pt-8 border-t border-white/10 relative">
        {/* Decorative background glow for the list */}
        <div className="absolute -top-24 -left-24 w-48 h-48 bg-cyan-500/5 blur-[100px] pointer-events-none" />

        <p className="text-[11px] font-black uppercase tracking-[0.5em] text-cyan-500 mb-6 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-cyan-500 animate-ping" />
          Validated_Build_History:
        </p>
        
        <ul className="space-y-4">
          {achievements.map((item, i) => (
            <motion.li 
              key={i} 
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              className="group flex items-start gap-4 p-3 rounded-xl hover:bg-white/[0.02] transition-colors"
            >
              <div className="mt-1">
                <CheckCircle2 size={18} className="text-cyan-500 drop-shadow-[0_0_8px_#06b6d4]" />
              </div>
              <span className="text-sm text-slate-400 group-hover:text-slate-200 transition-colors font-medium leading-relaxed italic">
                {item}
              </span>
            </motion.li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ContactInfo;
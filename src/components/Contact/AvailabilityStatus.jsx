import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Clock, Activity, Signal } from 'lucide-react';
import GradientText from '../bits/GradientText';

const AvailabilityStatus = () => {
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const dhakaTime = new Intl.DateTimeFormat('en-US', {
        timeZone: 'Asia/Dhaka', 
        hour: '2-digit', 
        minute: '2-digit', 
        second: '2-digit', 
        hour12: true,
      }).format(new Date());
      setTime(dhakaTime);
    };
    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom duration-1000">
      
      {/* 🟢 THE HUMAN STATUS CARD - MAX GLOW EDITION */}
      <div 
        className="relative p-[1.5px] rounded-2xl overflow-hidden group transition-all duration-500 hover:-translate-y-1"
        style={{ background: `linear-gradient(135deg, #10b981 0%, #ffffff 50%, #10b981 100%)` }}
      >
        {/* Ambient Haze */}
        <div className="absolute inset-0 opacity-20 group-hover:opacity-40 transition-opacity duration-700 blur-[40px] pointer-events-none bg-emerald-500/30" />
        
        <div className="relative z-10 bg-[#030712] p-6 rounded-[calc(1rem-1.5px)] border border-white/5 flex flex-col gap-4">
          <div className="flex items-center gap-3 relative z-10">
            <div className="relative flex items-center justify-center">
              <div className="w-2.5 h-2.5 bg-emerald-500 rounded-full animate-pulse shadow-[0_0_10px_#10b981]" />
              <div className="absolute inset-0 w-2.5 h-2.5 bg-emerald-500 rounded-full animate-ping opacity-40" />
            </div>
            <GradientText
              colors={["#10b981", "#ffffff", "#10b981"]}
              className="text-xs font-black uppercase tracking-[0.3em] italic"
            >
              ACTIVE_MODE // READY_FOR_SIGNALS
            </GradientText>
          </div>
          <p className="text-[14px] text-slate-400 leading-relaxed relative z-10 font-medium italic">
            I usually work on both <span className="text-slate-200">frontend and backend</span>, making sure everything actually works together properly. I’m currently looking for opportunities where I can <span className="text-emerald-400 font-black drop-shadow-[0_0_8px_rgba(16,182,225,0.4)]">learn, build real things, and grow</span> as a developer.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        
        {/* TIME NODE (Dhaka, BD) - HIGH VOLTAGE BORDER */}
        <div className="relative p-[1.5px] rounded-2xl overflow-hidden group transition-all duration-500"
             style={{ background: `linear-gradient(135deg, #00f2ff 0%, #ffffff 50%, #00f2ff 100%)` }}>
          
          <div className="absolute inset-0 opacity-10 group-hover:opacity-30 transition-opacity duration-700 blur-2xl bg-cyan-500/40" />

          <div className="relative z-10 bg-[#030712] rounded-[calc(1rem-1.5px)] p-6 flex flex-col gap-2 border border-white/5 h-full">
             <div className="flex items-center gap-2 text-slate-500 group-hover:text-cyan-400 transition-colors">
                <Clock size={16} strokeWidth={2.5} />
                <span className="text-[11px] uppercase tracking-[0.2em] font-black font-mono">Current_Node_Time</span>
             </div>
             <p className="font-mono text-3xl font-black tracking-tight text-white group-hover:drop-shadow-[0_0_12px_rgba(0,242,255,0.5)] transition-all">
                {time}
             </p>
             <span className="text-[9px] text-slate-600 font-bold uppercase tracking-widest italic group-hover:text-slate-400">Dhaka, Bangladesh // UTC+6</span>
          </div>
        </div>

        {/* RESPONSE FREQUENCY - PURPLE PULSE */}
        <div className="relative p-[1.5px] rounded-2xl overflow-hidden group transition-all duration-500"
             style={{ background: `linear-gradient(135deg, #a855f7 0%, #ffffff 50%, #a855f7 100%)` }}>
          
          <div className="absolute inset-0 opacity-10 group-hover:opacity-30 transition-opacity duration-700 blur-2xl bg-purple-500/40" />

          <div className="relative z-10 bg-[#030712] rounded-[calc(1rem-1.5px)] p-6 flex flex-col gap-3 h-full justify-between border border-white/5">
             <div className="flex items-center gap-2 text-slate-500 group-hover:text-purple-400 transition-colors">
                <Activity size={16} strokeWidth={2.5} />
                <span className="text-[11px] uppercase tracking-[0.2em] font-black font-mono">Sync_Frequency</span>
             </div>
             <div>
                <p className="text-sm font-black text-slate-200 italic uppercase tracking-tight">Fast Response</p>
                <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mt-1 opacity-70 group-hover:opacity-100">Within 24 hours</p>
             </div>
             <div className="flex gap-1.5 mt-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} 
                       className={`h-1.5 w-full rounded-full transition-all duration-500 ${i < 5 ? 'bg-purple-500 shadow-[0_0_8px_#a855f7]' : 'bg-white/10'}`} 
                       style={{ opacity: i < 5 ? 1 : 0.2 }}
                  />
                ))}
             </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default AvailabilityStatus;
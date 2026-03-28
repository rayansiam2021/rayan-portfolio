import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Clock, MessageCircle, Activity } from 'lucide-react';
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
      
      {/* 🟢 THE HUMAN STATUS CARD */}
      <div className="flex flex-col gap-4 p-6 rounded-2xl bg-[#030712] border border-white/5 relative overflow-hidden group">
        <div className="flex items-center gap-3 relative z-10">
          <div className="relative flex items-center justify-center">
            <div className="w-2.5 h-2.5 bg-emerald-500 rounded-full animate-pulse" />
            <div className="absolute inset-0 w-2.5 h-2.5 bg-emerald-500 rounded-full animate-ping opacity-30" />
          </div>
          <GradientText
            colors={["#10b981", "#ffffff", "#10b981"]}
            className="text-xs font-black uppercase tracking-[0.2em] italic"
          >
            ACTIVE_MODE // READY_FOR_SIGNALS
          </GradientText>
        </div>
        <p className="text-[14px] text-slate-400 leading-relaxed relative z-10 font-medium">
          I usually work on both <span className="text-slate-200">frontend and backend</span>, making sure everything actually works together properly. I’m currently looking for opportunities where I can <span className="text-emerald-400 font-bold italic text-glow-sm">learn, build real things, and grow</span> as a developer.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        
        {/* TIME NODE (Dhaka, BD) */}
        <div className="relative p-[1px] rounded-2xl overflow-hidden bg-white/5 group">
          <div className="absolute inset-[-200%] pointer-events-none global-snake-spin opacity-0 group-hover:opacity-100 transition-opacity duration-700">
            <div className="w-full h-full" style={{ background: `conic-gradient(from 0deg, transparent 75%, #00f2ff 80%, #fff 90%, #00f2ff 100%)`, filter: 'blur(8px)' }} />
          </div>
          
          <div className="relative z-10 bg-[#030712] rounded-[calc(1rem-1px)] p-6 flex flex-col gap-2">
             <div className="flex items-center gap-2 text-slate-500">
                <Clock size={16} />
                <span className="text-[11px] uppercase tracking-[0.1em] font-black font-mono">Current_Node_Time</span>
             </div>
             <p className="font-mono text-3xl font-black tracking-tight text-white group-hover:text-cyan-400 transition-colors">
                {time}
             </p>
             <span className="text-[9px] text-slate-600 font-bold uppercase tracking-widest italic">Dhaka, Bangladesh // UTC+6</span>
          </div>
        </div>

        {/* RESPONSE FREQUENCY */}
        <div className="relative p-[1px] rounded-2xl overflow-hidden bg-white/5 group">
          <div className="absolute inset-[-200%] pointer-events-none global-snake-spin opacity-0 group-hover:opacity-100 transition-opacity duration-700">
            <div className="w-full h-full" style={{ background: `conic-gradient(from 0deg, transparent 75%, #a855f7 80%, #fff 90%, #a855f7 100%)`, filter: 'blur(8px)' }} />
          </div>

          <div className="relative z-10 bg-[#030712] rounded-[calc(1rem-1px)] p-6 flex flex-col gap-3 h-full justify-between">
             <div className="flex items-center gap-2 text-slate-500">
                <Activity size={16} />
                <span className="text-[11px] uppercase tracking-[0.1em] font-black font-mono">Sync_Frequency</span>
             </div>
             <div>
                <p className="text-sm font-black text-slate-200 italic">Fast Response</p>
                <p className="text-[10px] text-slate-500 font-bold uppercase tracking-tighter">Usually within 24 hours</p>
             </div>
             <div className="flex gap-1.5 mt-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className={`h-1.5 w-full rounded-full ${i < 5 ? 'bg-purple-500/60' : 'bg-white/10'}`} />
                ))}
             </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default AvailabilityStatus;
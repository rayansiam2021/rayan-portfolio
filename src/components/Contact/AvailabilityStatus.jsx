import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Clock, Radio, Activity } from 'lucide-react';
import GradientText from '../bits/GradientText';

const AvailabilityStatus = () => {
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const dhakaTime = new Intl.DateTimeFormat('en-US', {
        timeZone: 'Asia/Dhaka', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true,
      }).format(new Date());
      setTime(dhakaTime);
    };
    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="space-y-10 p-4">
      {/* 🔴 PULSING SYSTEM STATUS */}
      <div className="flex items-center gap-4 bg-rose-500/5 p-4 rounded-xl border border-rose-500/20 shadow-[0_0_15px_rgba(244,63,94,0.1)]">
        <div className="relative">
          <div className="w-3.5 h-3.5 bg-rose-500 rounded-full animate-pulse" />
          <div className="absolute inset-0 w-3.5 h-3.5 bg-rose-500 rounded-full animate-ping opacity-75" />
        </div>
        <GradientText
          colors={["#f43f5e", "#ffffff", "#f43f5e", "#fb7185", "#f43f5e"]}
          className="text-sm font-black uppercase tracking-[0.4em] italic"
        >
          SYSTEM_OPERATIONAL // ACCEPTING_SIGNALS
        </GradientText>
      </div>

      {/* 🔮 "SNAKE SPIN" DATA DATA LOGS */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* LOG A: LOCAL TIME (With shared spin aesthetic) */}
        <div className="relative p-[1.5px] rounded-2xl overflow-hidden group bg-[#030712]">
          {/* shared-conic-spin logic added via global CSS in Contact.jsx */}
          <div className="absolute inset-[-200%] pointer-events-none global-snake-spin">
            <div className="w-full h-full" style={{ background: `conic-gradient(from 0deg, transparent 75%, #f43f5e 80%, #fff 90%, #f43f5e 100%)`, filter: 'blur(10px)' }} />
          </div>
          <div className="relative z-10 bg-[#0f172a] rounded-[calc(1rem-1.5px)] p-6 border border-white/5 flex flex-col gap-3">
             <div className="flex items-center gap-3 text-rose-500">
                <Clock size={16} />
                <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-slate-500">Local_Node_Time (Dhaka_BD)</span>
             </div>
             <p className="font-mono text-3xl font-black tracking-tight text-white">{time}</p>
          </div>
        </div>

        {/* LOG B: RESPONSE FREQUENCY */}
        <div className="relative p-[1.5px] rounded-2xl overflow-hidden group bg-[#030712]">
          <div className="absolute inset-[-200%] pointer-events-none global-snake-spin">
            <div className="w-full h-full" style={{ background: `conic-gradient(from 0deg, transparent 75%, #f43f5e 80%, #fff 90%, #f43f5e 100%)`, filter: 'blur(10px)' }} />
          </div>
          <div className="relative z-10 bg-[#0f172a] rounded-[calc(1rem-1.5px)] p-6 border border-white/5 flex flex-col gap-3 h-full">
             <div className="flex items-center gap-3 text-rose-500">
                <Radio size={16} />
                <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-slate-500">Signal_Strength</span>
             </div>
             <p className="text-sm font-light text-slate-400 leading-tight">Response_Frequency: <span className="text-white font-black italic">HIGH_PRIORITY [~24H]</span></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AvailabilityStatus;
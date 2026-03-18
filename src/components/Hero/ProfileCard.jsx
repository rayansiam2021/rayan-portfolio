import React from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import GradientText from '../bits/GradientText'; 

const ProfileCard = () => {
  const themeColor = "#00f2ff";
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

  const handleMouseMove = (e) => {
    // ⚡ TURBO FIX: Disable hover logic on mobile to keep scroll thread free
    if (window.innerWidth < 1024) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const xPct = (e.clientX - rect.left) / rect.width - 0.5;
    const yPct = (e.clientY - rect.top) / rect.height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  return (
    <div className="profile-container py-6 md:py-20 px-4">
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={() => { x.set(0); y.set(0); }}
        style={{ rotateY, rotateX, transformStyle: "preserve-3d" }}
        className="group relative w-full max-w-md mx-auto cursor-pointer transform-gpu will-change-transform"
      >
        {/* SVG BORDER: Optimized for Mobile GPU */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none z-50 overflow-visible">
          <rect
            x="0" y="0" width="100%" height="100%"
            rx="28" ry="28"
            fill="none"
            stroke={themeColor}
            strokeWidth="2"
            pathLength="1"
            className="opacity-40 md:opacity-60 group-hover:opacity-100 transition-all duration-500 profile-border-flow"
            style={{ strokeDasharray: '0.15 0.85' }}
          />
        </svg>

        {/* MAIN BODY: Uses backdrop-blur ONLY on desktop */}
        <div className="relative bg-[#0b1222]/95 md:bg-[#0b1222]/80 border border-white/10 p-8 md:p-10 rounded-[28px] shadow-2xl overflow-hidden preserve-3d md:backdrop-blur-xl">
          
          {/* PROFILE IMAGE */}
          <div className="relative w-40 h-40 md:w-48 md:h-48 mx-auto mb-8 flex items-center justify-center profile-layer-hero">
            <div className="absolute inset-0 bg-cyan-500 rounded-2xl blur-[40px] opacity-10" />
            <div className="p-[2px] rounded-2xl bg-gradient-to-br from-cyan-400 to-transparent">
              <img 
                src="/profile.png" 
                alt="Rayan Ahmed"
                className="w-36 h-36 md:w-44 md:h-44 object-cover rounded-2xl grayscale-[15%] group-hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </div>

          {/* TEXT CONTENT */}
          <div className="text-center mb-8 profile-layer-text">
            <GradientText
              colors={["#00f2ff", "#ffffff", "#00d4ff", "#3b82f6", "#00f2ff"]}
              className="text-3xl md:text-4xl font-black uppercase tracking-tighter"
            >
              Rayan Ahmed
            </GradientText>
            <div className="mt-2 flex items-center justify-center gap-2">
               <div className="h-[1px] w-6 bg-cyan-500/50" />
               <p className="text-cyan-400 font-mono text-[10px] uppercase tracking-[0.4em] font-bold">
                 "Engineering Scalable
Web & IoT Solutions."
               </p>
               <div className="h-[1px] w-6 bg-cyan-500/50" />
            </div>
          </div>

          {/* ACADEMIC INFO */}
          <div className="space-y-4 profile-layer-base">
            <div className="px-6 py-4 bg-white/[0.03] border border-white/5 rounded-2xl">
              <span className="block text-slate-500 text-[9px] uppercase tracking-widest mb-1">Graduated From</span>
              <span className="text-slate-200 font-semibold text-xs md:text-sm block">Daffodil International University</span>
            </div>

            <div className="flex gap-4">
               <div className="flex-1 px-4 py-4 bg-white/[0.03] border border-white/5 rounded-2xl text-center">
                  <span className="block text-slate-500 text-[9px] uppercase mb-1">Dept</span>
                  <span className="text-cyan-400 font-mono font-bold text-sm">CIS</span>
               </div>
               <div className="flex-1 px-4 py-4 bg-cyan-500/10 border border-cyan-500/20 rounded-2xl text-center">
                  <span className="block text-cyan-500/50 text-[9px] uppercase mb-1">CGPA</span>
                  <span className="text-white font-mono font-bold text-sm">3.40</span>
               </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProfileCard;
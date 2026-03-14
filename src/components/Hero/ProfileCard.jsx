import React, { useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import GradientText from '../bits/GradientText'; 

const ProfileCard = () => {
  const themeColor = "#00f2ff";
  
  // 3D Motion Controls
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  // Tilt and Parallax Transformations
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);
  
  // Shine Effect position logic
  const shineX = useTransform(mouseXSpring, [-0.5, 0.5], ["0%", "100%"]);
  const shineY = useTransform(mouseYSpring, [-0.5, 0.5], ["0%", "100%"]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const xPct = (e.clientX - rect.left) / rect.width - 0.5;
    const yPct = (e.clientY - rect.top) / rect.height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  return (
    <div className="perspective-[1500px] py-20 px-4">
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={() => { x.set(0); y.set(0); }}
        style={{ rotateY, rotateX, transformStyle: "preserve-3d" }}
        className="group relative w-full max-w-md mx-auto cursor-pointer"
      >
        {/* --- LIGHTNING BORDER --- */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none z-50 overflow-visible translate-z-[60px]">
          <rect
            x="0" y="0" width="100%" height="100%"
            rx="28" ry="28"
            fill="none"
            stroke={themeColor}
            strokeWidth="2"
            pathLength="1"
            className="opacity-60 group-hover:opacity-100 group-hover:stroke-[3] transition-all duration-500"
            style={{
              strokeDasharray: '0.15 0.85',
              filter: `drop-shadow(0 0 12px ${themeColor})`,
              animation: 'border-flow 4s linear infinite'
            }}
          />
        </svg>

        {/* --- MAIN CARD BODY --- */}
        <div className="relative bg-[#0b1222]/90 border border-white/10 p-10 rounded-[28px] backdrop-blur-2xl shadow-[0_50px_100px_rgba(0,0,0,0.8)] overflow-hidden preserve-3d">
          
          {/* GLASS SHINE OVERLAY */}
          <motion.div 
            style={{ 
              background: `radial-gradient(circle at ${shineX} ${shineY}, rgba(255,255,255,0.15) 0%, transparent 80%)`,
            }}
            className="absolute inset-0 z-10 pointer-events-none"
          />

          {/* PROFILE IMAGE LAYER */}
          <div className="relative w-48 h-48 mx-auto mb-8 flex items-center justify-center translate-z-[120px]">
            <div className="absolute inset-0 bg-cyan-500 rounded-2xl blur-[50px] opacity-10 group-hover:opacity-30 transition-opacity" />
            <div className="p-[2px] rounded-2xl bg-gradient-to-br from-cyan-400 to-transparent shadow-2xl">
              <img 
                src="/profile.png" 
                alt="Rayan Ahmed"
                className="w-44 h-44 object-cover rounded-2xl grayscale-[20%] group-hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </div>

          {/* TEXT CONTENT LAYERS */}
          <div className="text-center mb-8 translate-z-[80px]">
            <GradientText
              colors={["#00f2ff", "#ffffff", "#00d4ff", "#3b82f6", "#00f2ff"]}
              className="text-4xl font-black uppercase tracking-tighter"
            >
              Rayan Ahmed
            </GradientText>
            <div className="mt-2 flex items-center justify-center gap-2">
               <div className="h-[1px] w-8 bg-cyan-500/50" />
               <p className="text-cyan-400 font-mono text-[10px] uppercase tracking-[0.4em] font-bold">
                 System_Developer
               </p>
               <div className="h-[1px] w-8 bg-cyan-500/50" />
            </div>
          </div>

          {/* INFO GRID LAYER */}
          <div className="space-y-4 translate-z-[40px]">
            <div className="px-6 py-4 bg-white/[0.03] border border-white/5 rounded-2xl group-hover:bg-white/[0.07] transition-colors">
              <span className="block text-slate-500 text-[9px] uppercase tracking-widest mb-1">Affiliation</span>
              <span className="text-slate-200 font-semibold text-sm">Daffodil International University</span>
            </div>

            <div className="flex gap-4">
               <div className="flex-1 px-5 py-4 bg-white/[0.03] border border-white/5 rounded-2xl text-center">
                  <span className="block text-slate-500 text-[9px] uppercase mb-1">Dept</span>
                  <span className="text-cyan-400 font-mono font-bold">CIS</span>
               </div>
               <div className="flex-1 px-5 py-4 bg-cyan-500/10 border border-cyan-500/20 rounded-2xl text-center">
                  <span className="block text-cyan-500/50 text-[9px] uppercase mb-1">Rank</span>
                  <span className="text-white font-mono font-bold">3.40 <span className="text-[10px] opacity-50">GPA</span></span>
               </div>
            </div>
          </div>
        </div>
      </motion.div>

      <style jsx>{`
  @keyframes border-flow {
    from { stroke-dashoffset: 1; }
    to { stroke-dashoffset: 0; }
  }

  @keyframes float {
    0%, 100% { transform: translateZ(120px) translateY(0px); }
    50% { transform: translateZ(140px) translateY(-10px); }
  }

  .preserve-3d { 
    transform-style: preserve-3d; 
  }

  /* Using standard class names to avoid ESLint escape errors */
  .translate-z-40 { transform: translateZ(40px); }
  .translate-z-60 { transform: translateZ(60px); }
  .translate-z-80 { transform: translateZ(80px); }
  
  /* Applying the floating animation to the profile image layer */
  .translate-z-120 { 
    transform: translateZ(120px);
    animation: float 6s ease-in-out infinite;
  }
`}</style>
    </div>
  );
};

export default ProfileCard;
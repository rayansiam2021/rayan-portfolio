import React from 'react';
import ElectricBorder from '../bits/ElectricBorder';
import GradientText from '../bits/GradientText';

const ProfileCard = () => {
  const electricColors = ["#00f2ff", "#ffffff", "#00d4ff", "#3b82f6", "#00f2ff"];

  return (
    <ElectricBorder 
      color="#00f2ff" 
      speed={1.2} 
      chaos={0.1} 
      borderRadius={28}
    >
      <div className="bg-[#0f172a]/95 border border-slate-800 p-10 rounded-[28px] backdrop-blur-xl shadow-2xl transition-all duration-500">
        
        {/* Profile Image - Rounded Square */}
        <div className="relative w-48 h-48 mx-auto mb-8 flex items-center justify-center">
          <div className="absolute inset-2 bg-cyan-500 rounded-2xl blur-3xl opacity-20 animate-pulse"></div>
          
          <GradientText
            colors={["#00f2ff", "#ffffff", "#00f2ff"]}
            animationSpeed={3}
            showBorder={false}
            className="rounded-2xl"
          >
            <img 
              src="/profile.png" 
              alt="Rayan Ahmed"
              className="relative w-44 h-44 object-cover rounded-2xl grayscale-[20%] hover:grayscale-0 transition-all duration-500"
            />
          </GradientText>
        </div>

        {/* Identity Header */}
        <div className="text-center mb-8">
          <GradientText
            colors={electricColors}
            animationSpeed={6}
            showBorder={false}
            className="text-4xl font-extrabold tracking-tight"
          >
            Rayan Ahmed
          </GradientText>
          <p className="text-cyan-400 font-mono text-xs uppercase tracking-[0.4em] mt-2 font-bold">
            Full-Stack Developer & Editor
          </p>
        </div>

        {/* Info Grid */}
        <div className="space-y-5">
          <div className="text-center group cursor-default">
            <span className="block text-slate-500 text-[10px] uppercase tracking-[0.2em] font-black mb-1">
              Graduated From
            </span>
            <GradientText
              colors={["#cbd5e1", "#00f2ff", "#ffffff", "#00f2ff", "#cbd5e1"]}
              animationSpeed={10}
              showBorder={false}
              className="text-lg font-semibold leading-snug !justify-center"
            >
              Daffodil International University
            </GradientText>
          </div>

          <div className="flex flex-col gap-4 pt-2">
            <div className="flex items-center justify-between px-5 py-4 bg-slate-800/40 border border-slate-700/50 rounded-2xl transition-all duration-300 hover:bg-slate-800/60 hover:border-blue-500/50 group/dept cursor-default">
              <span className="text-slate-500 text-[11px] font-bold uppercase tracking-widest group-hover/dept:text-slate-300 transition-colors">
                Department
              </span>
              <span className="text-white font-mono font-bold text-sm bg-blue-600/10 px-3 py-1 rounded-lg border border-blue-500/30 group-hover/dept:bg-blue-600/30 group-hover/dept:border-blue-400 transition-all">
                CIS
              </span>
            </div>

            <div className="flex items-center justify-between px-5 py-4 bg-cyan-500/5 border border-cyan-500/10 rounded-2xl transition-all duration-300 hover:bg-cyan-500/10 hover:border-cyan-400/50 group/cgpa cursor-default shadow-sm hover:shadow-[0_0_20px_rgba(6,182,212,0.15)]">
              <span className="text-slate-500 text-[11px] font-bold uppercase tracking-widest group-hover/cgpa:text-cyan-200/70 transition-colors">
                Academic Rank
              </span>
              <div className="flex items-center gap-3">
                 <span className="text-[10px] text-cyan-500/40 font-black tracking-tighter uppercase group-hover/cgpa:text-cyan-400 transition-colors">
                   CGPA
                 </span>
                 <span className="text-3xl text-cyan-400 font-mono font-black tracking-tighter group-hover/cgpa:scale-110 transition-transform duration-300">
                   3.40
                 </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ElectricBorder>
  );
};

export default ProfileCard;
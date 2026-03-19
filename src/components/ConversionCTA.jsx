import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Sparkles } from 'lucide-react';
import GradientText from './bits/GradientText';

const ConversionCTA = ({ badge, title, description, primaryAction, secondaryAction, variant = 'primary' }) => {
  const theme = {
    primary: "#06b6d4",   
    secondary: "#3b82f6", 
    minimal: "#a855f7"    
  };

  const activeColor = theme[variant] || theme.primary;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="relative w-full max-w-7xl mx-auto p-[1px] rounded-3xl overflow-hidden group transform-gpu"
    >
      {/* ⚡ SNAKE BORDER */}
      <div 
        className="absolute inset-[-300%] animate-snake pointer-events-none z-0 opacity-30"
        style={{ background: `conic-gradient(from 0deg, transparent 75%, ${activeColor} 90%, #fff 98%, ${activeColor} 100%)` }}
      />

      <div className="relative z-10 bg-[#030712] rounded-[23px] px-6 py-12 md:px-14 md:py-10 border border-white/5 flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-20">
        
        {/* CONTENT AREA */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left relative z-20 flex-1">
          
          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-4">
             <Sparkles size={10} style={{ color: activeColor }} />
             <span className="text-[8px] font-bold uppercase tracking-[0.3em] text-white/50">{badge}</span>
          </div>

          <div className="max-w-2xl">
            {/* Title with Gradient Text */}
            <GradientText
                          colors={["#00f2ff", "#ffffff", "#00d4ff", "#3b82f6", "#00f2ff"]}
                          className="text-3xl md:text-4xl font-black uppercase tracking-tighter"
                        >
                          {title}
                        </GradientText>
            {/* Description */}
              
            <p className="text-white text-base md:text-lg leading-[1.7] mb-8 mt-4 ml-2 flex-grow font-normal opacity-90">
  {description}
</p>

            
          </div>
        </div>

        {/* ACTION AREA */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full lg:w-auto relative z-20">
          
          <a href={primaryAction?.link} className="group flex items-center justify-center gap-6 px-16 py-4 bg-white/5 border border-white/10 rounded-2xl transition-all duration-300 hover:scale-[1.02] hover:bg-white/10 hover:border-cyan-500/50 active:scale-95 transform-gpu w-full sm:w-auto">
            <span className="text-white font-black text-[10px] uppercase tracking-[0.3em] whitespace-nowrap">{primaryAction?.label}</span>
            <div className="p-1.5 rounded-lg text-[#030712] transition-transform duration-300 group-hover:translate-x-1" style={{ backgroundColor: activeColor }}>
                <ChevronRight size={16} strokeWidth={3} />
            </div>
          </a>

          <a href={secondaryAction?.link} className="group flex items-center justify-center gap-6 px-16 py-4 bg-transparent border border-white/5 rounded-2xl transition-all duration-300 hover:bg-white/5 active:scale-95 w-full sm:w-auto">
            <span className="text-white/40 group-hover:text-white transition-colors font-black text-[10px] uppercase tracking-[0.3em] whitespace-nowrap">{secondaryAction?.label}</span>
            <ChevronRight size={16} className="text-white/20 group-hover:text-white transition-transform" />
          </a>

        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes snake { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
        .animate-snake { animation: snake 14s linear infinite; }
      `}} />
    </motion.div>
  );
};

export default ConversionCTA;
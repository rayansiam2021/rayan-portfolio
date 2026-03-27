import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Sparkles } from 'lucide-react';
import GradientText from './bits/GradientText';

const ConversionCTA = ({ badge, title, description, primaryAction, secondaryAction, variant = 'primary' }) => {
  const theme = {
    primary: "#00f2ff", // Brighter Cyan for visibility
    secondary: "#3b82f6", 
    minimal: "#a855f7"    
  };

  const activeColor = theme[variant] || theme.primary;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="relative w-full max-w-7xl mx-auto p-[1.5px] rounded-3xl overflow-hidden group transform-gpu"
    >
      {/* ⚡ UPDATED ELECTRIC BORDER: Increased opacity and added glow blur */}
      <div 
        className="absolute inset-[-300%] animate-snake pointer-events-none z-0 opacity-80 blur-[2px]" 
        style={{ background: `conic-gradient(from 0deg, transparent 70%, ${activeColor} 85%, #fff 95%, ${activeColor} 100%)` }}
      />

      <div className="relative z-10 bg-[#030712] rounded-[23px] px-6 py-12 md:px-14 md:py-10 border border-white/10 flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-20">
        
        {/* CONTENT AREA */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left relative z-20 flex-1">
          
          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-4">
             <Sparkles size={10} style={{ color: activeColor }} />
             <span className="text-[12px] font-bold uppercase tracking-[0.3em] text-white/50">{badge}</span>
          </div>

          <div className="max-w-2xl">
            {/* Title with High Contrast Gradient */}
            <GradientText
              colors={["#00f2ff", "#ffffff", "#00d4ff", "#3b82f6", "#00f2ff"]}
              className="text-2xl md:text-5xl font-black tracking-tighter "
            >
              {title}
            </GradientText>
              
            <p className="text-white text-base md:text-lg leading-[1.7] mb-8 mt-4 ml-1 flex-grow font-medium opacity-90">
              {description}
            </p>
          </div>
        </div>

        {/* ACTION AREA */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full lg:w-auto relative z-20">
          
          <a href={primaryAction?.link} className="group flex items-center justify-center gap-6 px-12 py-4 bg-white border border-white rounded-2xl transition-all duration-300 hover:scale-[1.02] hover:bg-cyan-400 hover:border-cyan-400 active:scale-95 transform-gpu w-full sm:w-auto shadow-[0_0_20px_rgba(255,255,255,0.1)]">
            <span className="text-black font-black text-[10px] uppercase tracking-[0.4em] whitespace-nowrap">{primaryAction?.label}</span>
            <div className="p-1.5 rounded-lg text-white bg-black transition-transform duration-300 group-hover:translate-x-1">
                <ChevronRight size={16} strokeWidth={3} />
            </div>
          </a>

          <a href={secondaryAction?.link} className="group flex items-center justify-center gap-6 px-12 py-4 bg-transparent border-2 border-white/10 rounded-2xl transition-all duration-300 hover:bg-white/5 hover:border-white/20 active:scale-95 w-full sm:w-auto">
            <span className="text-white font-black text-[10px] uppercase tracking-[0.4em] whitespace-nowrap">{secondaryAction?.label}</span>
            <ChevronRight size={16} className="text-white/40 group-hover:text-white transition-transform" />
          </a>

        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes snake { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
        .animate-snake { animation: snake 8s linear infinite; }
      `}} />
    </motion.div>
  );
};

export default ConversionCTA;
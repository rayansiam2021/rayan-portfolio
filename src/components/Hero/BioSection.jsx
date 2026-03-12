import React from 'react';
import GradientText from '../bits/GradientText';

const BioSection = ({ bio, links = {} }) => {
  return (
    <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
      <h3 className="text-cyan-500 font-mono text-xs uppercase tracking-[0.4em] mb-4">
        Professional_Summary
      </h3>
      
      {/* Animated Electric Bio Text */}
      <div className="border-l-2 border-cyan-600/50 pl-6 py-2">
        <GradientText
          colors={["#ffffff", "#00f2ff", "#cbd5e1", "#00f2ff", "#ffffff"]}
          animationSpeed={15} // Slower speed for long-form reading
          showBorder={false}
          className="text-xl md:text-2xl leading-relaxed font-light italic !justify-start !mx-0"
        >
          "{bio}"
        </GradientText>
      </div>

      <div className="mt-10 flex flex-col sm:flex-row items-center gap-8">
        {/* CV Download Button */}
        <a 
          href={links.cv || "#"} 
          target="_blank"
          rel="noopener noreferrer"
          className="px-10 py-4 bg-white text-black hover:bg-cyan-500 hover:text-white rounded-full font-black text-xs uppercase tracking-widest transition-all duration-300 shadow-xl shadow-cyan-500/10"
        >
          Download CV
        </a>

        {/* Social Links Row */}
        <div className="flex flex-wrap items-center gap-5 text-slate-500">
          <a href={links.fb || "#"} className="hover:text-cyan-400 transition-colors text-[10px] font-black uppercase tracking-widest">Facebook</a>
          <span className="hidden sm:block w-1 h-1 bg-slate-800 rounded-full"></span>
          <a href={links.li || "#"} className="hover:text-cyan-400 transition-colors text-[10px] font-black uppercase tracking-widest">LinkedIn</a>
          <span className="hidden sm:block w-1 h-1 bg-slate-800 rounded-full"></span>
          <a href={links.ig || "#"} className="hover:text-cyan-400 transition-colors text-[10px] font-black uppercase tracking-widest">Instagram</a>
        </div>
      </div>
    </div>
  );
};

export default BioSection;
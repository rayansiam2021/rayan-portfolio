import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

const ProjectCard = ({ project }) => {
  if (!project) return null;

  // 🌈 HIGH-SATURATION COLOR ENGINE
  const colors = (() => {
    switch (project.category) {
      case 'Coded Web Solutions': 
        return { primary: '#00f2ff', secondary: '#0ea5e9', accent: '#ffffff' }; 
      case 'IOT': 
        return { primary: '#fb923c', secondary: '#f97316', accent: '#ffffff' }; 
      case 'Wordpress': 
        return { primary: '#a855f7', secondary: '#7c3aed', accent: '#ffffff' }; 
      default: 
        return { primary: '#10b981', secondary: '#059669', accent: '#ffffff' }; 
    }
  })();

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="relative p-[2px] rounded-[2rem] overflow-hidden group h-full transition-all duration-500 hover:-translate-y-2 smooth-gpu-layer"
      style={{ 
        /* 🎨 THE NEON TUBE BORDER: Tight white highlight for max intensity */
        background: `linear-gradient(135deg, 
          ${colors.primary} 0%, 
          ${colors.primary} 40%, 
          #ffffff 50%, 
          ${colors.primary} 60%, 
          ${colors.primary} 100%)` 
      }}
    >
      {/* ⚡ LAYER 1: ATMOSPHERIC HAZE (Always 10%, 30% on hover) */}
      <div 
        className="absolute inset-0 opacity-10 group-hover:opacity-30 transition-opacity duration-700 pointer-events-none"
        style={{
          background: `radial-gradient(circle at center, ${colors.primary} 0%, transparent 75%)`,
          filter: 'blur(60px)'
        }}
      />

      {/* ⚡ LAYER 2: CORE BLOOM (Intense hover center) */}
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-50 transition-opacity duration-500 pointer-events-none"
        style={{
          background: `radial-gradient(circle at center, ${colors.primary} 20%, transparent 60%)`,
          filter: 'blur(30px)'
        }}
      />

      <div className="relative z-10 bg-[#030712] rounded-[calc(2rem-2px)] h-full overflow-hidden flex flex-col border border-white/10 group-hover:border-white/20 transition-colors">
        
        {/* Banner Image with Bottom-Up Glow */}
        <div className="relative h-52 overflow-hidden bg-slate-900">
          <img 
            src={project.banner} 
            alt={project.title}
            loading="lazy"
            className="w-full h-full object-cover opacity-60 group-hover:opacity-90 group-hover:scale-110 transition-all duration-700 ease-in-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-transparent to-transparent opacity-90" />
          
          {/* Subtle Banner light bleed */}
          <div className="absolute -bottom-2 left-0 right-0 h-4 blur-xl opacity-0 group-hover:opacity-100 transition-opacity"
               style={{ backgroundColor: colors.primary }} />
        </div>

        {/* Content Area */}
        <div className="p-8 flex flex-col flex-grow">
          <div className="flex justify-between items-start mb-4 gap-4">
            <div className="flex flex-col gap-1">
              <h3 className="text-2xl font-black tracking-tighter text-white uppercase leading-tight group-hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.4)] transition-all">
                {project.title}
              </h3>
              <span 
                className="text-[11px] font-black tracking-[0.4em] uppercase"
                style={{ color: colors.primary, textShadow: `0 0 10px ${colors.primary}80` }}
              >
                {project.category}
              </span>
            </div>
            
            <Link 
              to={`/project/${project.id}`}
              style={{ color: colors.primary }}
              className="p-3 rounded-full bg-white/5 border border-white/10 hover:bg-white hover:text-black hover:scale-110 transition-all shrink-0 shadow-[0_0_15px_rgba(0,0,0,0.5)]"
            >
              <ArrowUpRight size={20} strokeWidth={3} />
            </Link>
          </div>

          <p className="text-slate-400 text-sm leading-relaxed mb-8 mt-2 line-clamp-2 font-medium italic group-hover:text-slate-200 transition-colors">
            {project.shortDesc}
          </p>

          {/* Refined Tech Stack with Neon Indicators */}
          <div className="flex flex-wrap gap-2 mb-8 items-center">
            {project.techStack?.slice(0, 3).map((tech, idx) => (
              <span 
                key={idx} 
                className="text-[10px] font-mono font-black tracking-wider uppercase px-3 py-1.5 bg-white/[0.04] border border-white/10 rounded-lg text-slate-400 group-hover:text-white transition-all flex items-center gap-2"
              >
                <div className="w-1.5 h-1.5 rounded-full animate-pulse" 
                     style={{ backgroundColor: colors.primary, boxShadow: `0 0 10px ${colors.primary}` }} />
                {typeof tech === 'string' ? tech : tech.name}
              </span>
            ))}
          </div>

          <Link 
            to={`/project/${project.id}`}
            style={{ 
                borderColor: `${colors.primary}60`,
            }}
            className="mt-auto flex items-center justify-center w-full py-5 bg-white/5 border-2 rounded-xl text-[10px] font-black tracking-[0.5em] uppercase hover:bg-white hover:text-black transition-all duration-300 text-slate-200 group-hover:shadow-[0_0_25px_${colors.primary}20]"
          >
            Deploy-Documentation
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
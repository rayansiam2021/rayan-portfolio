import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

const ProjectCard = ({ project }) => {
  if (!project) return null;

  // 🌈 ENHANCED COLOR ENGINE
  const colors = (() => {
    switch (project.category) {
      case 'Coded Web Solutions': 
        return { primary: '#22d3ee', secondary: '#0ea5e9', accent: '#ffffff' }; 
      case 'IOT': 
        return { primary: '#fb923c', secondary: '#f97316', accent: '#ffedd5' }; 
      case 'Wordpress': 
        return { primary: '#a855f7', secondary: '#7c3aed', accent: '#f3e8ff' }; 
      default: 
        return { primary: '#34d399', secondary: '#10b981', accent: '#ecfdf5' }; 
    }
  })();

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="relative p-[1.5px] rounded-[2rem] overflow-hidden group h-full transition-all duration-500 hover:-translate-y-2 smooth-gpu-layer"
      style={{ 
        /* 🎨 THE ELECTRIC BORDER: Static but high-impact */
        background: `linear-gradient(135deg, 
          ${colors.primary} 0%, 
          ${colors.secondary} 25%, 
          #1e293b 50%, 
          ${colors.secondary} 75%, 
          ${colors.accent} 100%)` 
      }}
    >
      {/* ⚡ RADIAL GLOW: Subtle lighting that activates on hover */}
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: `radial-gradient(circle at center, ${colors.primary}20 0%, transparent 70%)`
        }}
      />

      <div className="relative z-10 bg-[#030712] rounded-[calc(2rem-1.5px)] h-full overflow-hidden flex flex-col border border-white/5 group-hover:border-white/20 transition-colors">
        
        {/* Banner Image */}
        <div className="relative h-52 overflow-hidden bg-slate-900">
          <img 
            src={project.banner} 
            alt={project.title}
            loading="lazy"
            className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-in-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-transparent to-transparent" />
        </div>

        {/* Content Area */}
        <div className="p-8 flex flex-col flex-grow">
          <div className="flex justify-between items-start mb-2 gap-4">
            <div className="flex flex-col gap-1">
              <h3 className="text-2xl font-bold tracking-tight text-white uppercase leading-tight">
                {project.title}
              </h3>
              <span 
                className="text-[10px] font-black tracking-[0.3em] uppercase opacity-80"
                style={{ color: colors.primary }}
              >
                {project.category}
              </span>
            </div>
            
            <Link 
              to={`/project/${project.id}`}
              style={{ color: colors.primary }}
              className="p-3 rounded-full bg-white/5 border border-white/5 hover:bg-white hover:text-black transition-all shrink-0"
            >
              <ArrowUpRight size={18} />
            </Link>
          </div>

          <p className="text-slate-400 text-sm leading-relaxed mb-6 mt-4 line-clamp-2 font-medium">
            {project.shortDesc}
          </p>

          {/* Refined Tech Stack */}
          <div className="flex flex-wrap gap-2 mb-8 items-center">
            {project.techStack?.slice(0, 3).map((tech, idx) => (
              <span 
                key={idx} 
                className="text-[10px] font-mono font-bold tracking-wider uppercase px-3 py-1.5 bg-white/[0.03] border border-white/10 rounded-md text-slate-300 group-hover:border-white/20 transition-all flex items-center gap-2"
              >
                <div className="w-1 h-1 rounded-full" style={{ backgroundColor: colors.primary }} />
                {typeof tech === 'string' ? tech : tech.name}
              </span>
            ))}
          </div>

          <Link 
            to={`/project/${project.id}`}
            style={{ 
                borderColor: `${colors.primary}40`,
                boxShadow: `0 0 20px ${colors.primary}10` 
            }}
            className="mt-auto flex items-center justify-center w-full py-5 bg-white/5 border rounded-xl text-[10px] font-bold tracking-[0.4em] uppercase hover:bg-white hover:text-black transition-all duration-300 text-slate-200"
          >
            View-Documentation
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
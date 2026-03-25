import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

const ProjectCard = ({ project }) => {
  if (!project) return null;

  // Professional Category-Based Accent Colors
  const accentColor = (() => {
    switch (project.category) {
      case 'Coded Web Solutions': return '#22d3ee'; // Cyan
      case 'IOT': return '#fb923c';               // Orange
      case 'Wordpress': return '#a855f7';          // Purple
      default: return '#34d399';                  // Emerald
    }
  })();

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.98 }}
      className="relative p-[1.5px] rounded-[2rem] overflow-hidden group bg-[#030712] shadow-2xl h-full"
    >
      
      {/* 🔮 STYLE INJECTION TO SYNC ANIMATIONS GRACEFULLY */}
      {/* This ensures that all 'group' spin instances start at the same time */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes shared-conic-spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .global-snake-spin {
          animation: shared-conic-spin 4s linear infinite !important;
          will-change: transform;
        }
        @media (max-width: 768px) {
           .global-snake-spin {
              filter: none !important; /* Mobile battery patch */
           }
        }
      `}} />
      
      {/* ⚡ ALWAYS RUNNING SYNCED ELECTRIC BEAM */}
      {/* Increased inset and blurred to match standard 'Vercel' laser style */}
      <div className="absolute inset-[-180%] pointer-events-none group smooth-gpu-layer">
        <div 
          className="w-full h-full global-snake-spin"
          style={{ 
            background: `conic-gradient(from 0deg, transparent 70%, ${accentColor} 80%, #fff 90%, ${accentColor} 100%)`,
            filter: 'blur(10px)', /* Softens the laser for a premium feel */
          }}
        />
      </div>

      {/* CARD INNER CONTAINER */}
      <div className="relative z-10 bg-[#030712] rounded-[calc(2rem-1.5px)] h-full overflow-hidden flex flex-col border border-white/5">
        
        {/* Banner - Professional High Contrast */}
        <div className="relative h-52 overflow-hidden bg-slate-900">
          <img 
            src={project.banner} 
            alt={project.title}
            className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-in-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-transparent to-transparent" />
        </div>

        {/* Content Area */}
        <div className="p-8 flex flex-col flex-grow">
          <div className="flex justify-between items-start mb-4 gap-4">
            <h3 className="text-2xl font-bold tracking-tight text-white uppercase leading-tight group-hover:text-cyan-400 transition-colors">
              {project.title}
            </h3>
            <Link 
              to={`/project/${project.id}`}
              style={{ color: accentColor }}
              className="p-3 rounded-full bg-white/5 border border-white/5 hover:bg-white hover:text-black transition-all shrink-0"
            >
              <ArrowUpRight size={18} />
            </Link>
          </div>

          <p className="text-slate-400 text-sm leading-relaxed mb-10 line-clamp-2 font-medium">
            {project.shortDesc}
          </p>

          {/* Tech Stack - Editorial Style */}
          <div className="flex flex-wrap gap-2 mb-10 mt-auto">
            {project.techStack && project.techStack.length > 0 && project.techStack.slice(0, 3).map((tech, idx) => (
              <span 
                key={idx} 
                className="text-[10px] font-bold tracking-wider uppercase px-4 py-2 bg-white/5 border border-white/5 rounded-full text-slate-300 group-hover:border-cyan-500/30 transition-colors"
              >
                {typeof tech === 'string' ? tech : tech.name}
              </span>
            ))}
          </div>

          {/* Action Button */}
          <Link 
            to={`/project/${project.id}`}
            style={{ borderColor: `${accentColor}30` }}
            className="flex items-center justify-center w-full py-5 bg-white/5 border rounded-xl text-[10px] font-bold tracking-[0.4em] uppercase hover:bg-white hover:text-black transition-all duration-300 text-slate-200"
          >
            Access_Technical_Logs
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
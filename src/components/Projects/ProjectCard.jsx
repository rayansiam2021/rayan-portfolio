import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

const ProjectCard = ({ project }) => {
  if (!project) return null;

  const accentColor = (() => {
    switch (project.category) {
      case 'Coded Web Solutions': return '#22d3ee'; 
      case 'IOT': return '#fb923c';               
      case 'Wordpress': return '#a855f7';          
      default: return '#34d399';                  
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
      
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes shared-conic-spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .global-snake-spin {
          animation: shared-conic-spin 4s linear infinite !important;
          will-change: transform;
        }
      `}} />
      
      <div className="absolute inset-[-180%] pointer-events-none group smooth-gpu-layer">
        <div 
          className="w-full h-full global-snake-spin"
          style={{ 
            background: `conic-gradient(from 0deg, transparent 70%, ${accentColor} 80%, #fff 90%, ${accentColor} 100%)`,
            filter: 'blur(10px)', 
          }}
        />
      </div>

      <div className="relative z-10 bg-[#030712] rounded-[calc(2rem-1.5px)] h-full overflow-hidden flex flex-col border border-white/5">
        
        {/* Banner Image */}
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
          <div className="flex justify-between items-start mb-2 gap-4">
            <div className="flex flex-col gap-1">
              <h3 className="text-2xl font-bold tracking-tight text-white uppercase leading-tight group-hover:text-white transition-colors">
                {project.title}
              </h3>
              <span 
                className="text-[10px] font-black tracking-[0.3em] uppercase opacity-80"
                style={{ color: accentColor }}
              >
                {project.category}
              </span>
            </div>
            
            <Link 
              to={`/project/${project.id}`}
              style={{ color: accentColor }}
              className="p-3 rounded-full bg-white/5 border border-white/5 hover:bg-white hover:text-black transition-all shrink-0"
            >
              <ArrowUpRight size={18} />
            </Link>
          </div>

          <p className="text-slate-400 text-sm leading-relaxed mb-6 mt-4 line-clamp-2 font-medium">
            {project.shortDesc}
          </p>

          {/* Refined Tech Stack Layout */}
          <div className="flex flex-wrap gap-2 mb-8 items-center">
            {project.techStack?.slice(0, 3).map((tech, idx) => (
              <span 
                key={idx} 
                className="text-[10px] font-mono font-bold tracking-wider uppercase px-3 py-1.5 bg-white/[0.03] border border-white/10 rounded-md text-slate-300 group-hover:border-white/20 transition-all flex items-center gap-2"
              >
                <div className="w-1 h-1 rounded-full" style={{ backgroundColor: accentColor }} />
                {typeof tech === 'string' ? tech : tech.name}
              </span>
            ))}
            {project.techStack?.length > 3 && (
              <span className="text-[10px] font-mono text-slate-500 font-bold px-1 italic">
                // +{project.techStack.length - 3}
              </span>
            )}
          </div>

          <Link 
            to={`/project/${project.id}`}
            style={{ borderColor: `${accentColor}30` }}
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
import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { useNavigate, Link } from 'react-router-dom';
import { ChevronRight, Terminal, ArrowUpRight } from 'lucide-react';
import { projectsData } from '../data/projectsData';
import GradientText from './bits/GradientText';

const ProjectCard = ({ project }) => {
  if (!project) return null;

  // Logic to determine color based on category
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
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="relative p-[1.5px] rounded-[2rem] overflow-hidden group bg-[#030712] shadow-2xl h-full"
    >
      {/* 🔮 SNAKE SPIN ANIMATION */}
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

          {/* Refined Tech Stack */}
          <div className="flex flex-wrap gap-2 mb-8 items-center">
            {project.techStack?.slice(0, 3).map((tech, idx) => (
              <span 
                key={idx} 
                className="text-[12px] font-mono font-bold tracking-wider uppercase px-3 py-1.5 bg-white/[0.03] border border-white/10 rounded-md text-slate-300 group-hover:border-white/20 transition-all flex items-center gap-2"
              >
                <div className="w-1 h-1 rounded-full" style={{ backgroundColor: accentColor }} />
                {typeof tech === 'string' ? tech : tech.name}
              </span>
            ))}
            {project.techStack?.length > 3 && (
              <span className="text-[14px] font-mono text-slate-500 font-bold px-1 italic">
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

const ProjectMatrix = () => {
  const navigate = useNavigate();

  // Curate unique projects based on your specific categories
  const filteredProjects = useMemo(() => {
    const categories = ['Coded Web Solutions', 'IOT', 'Wordpress', 'Other'];
    return categories.map(cat => 
      projectsData.find(p => p.category === cat)
    ).filter(Boolean);
  }, []);

  return (
    <section className="max-w-7xl mx-auto py-24 px-6">
      
      {/* 🎯 SYNCED ELECTRIC HEADER DESIGN */}
      <motion.div 
  className="mb-10 text-center w-full flex flex-col items-center"
>
                    <GradientText
    colors={["#00f2ff", "#ffffff", "#00d4ff", "#3b82f6", "#00f2ff"]}
    
    className="text-2xl md:text-4xl font-black uppercase tracking-tight"
  >
    SELECTED DEPLOYMENTS
</GradientText>
  <p className="mt-3 text-slate-400 text-sm md:text-base font-light leading-relaxed max-w-[550px]">
    Below is a curated list of full-stack web applications and IoT systems 
    focused on solving real-world problems through 
    <span className="text-cyan-400 font-bold"> clean, efficient code. </span>
  </p>
  <div className="mt-6 h-[1px] w-16 bg-cyan-500/50 rounded-full" />
</motion.div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}

        {/* Explore Archive Card - Designed to match the geometry of ProjectCard */}
        <div 
          onClick={() => navigate('/projects')}
          className="group relative cursor-pointer border-2 border-dashed border-white/10 rounded-[2rem] p-8 flex flex-col items-center justify-center text-center transition-all hover:border-cyan-500/50 hover:bg-cyan-500/[0.02] min-h-[450px]"
        >
          <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
            <Terminal size={24} className="text-slate-500 group-hover:text-cyan-400" />
          </div>
          <h3 className="text-lg font-bold text-white uppercase tracking-widest mb-2">Explore_Projects</h3>
          <p className="text-[14px] font-mono text-slate-400 uppercase tracking-tight mb-8">
            Access complete project with details <br /> 
            <span className="text-cyan-400/60 font-bold">[ Total_Entries: {projectsData.length} ]</span>
          </p>
          <div className="flex items-center gap-2 text-cyan-400 font-black text-[14px] tracking-[0.3em] uppercase">
            View_All_Projects <ChevronRight size={14} />
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes shared-conic-spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .global-snake-spin {
          animation: shared-conic-spin 4s linear infinite !important;
        }
      `}} />
    </section>
  );
};

export default ProjectMatrix;
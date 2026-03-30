import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { useNavigate, Link } from 'react-router-dom';
import { ChevronRight, Terminal, ArrowUpRight } from 'lucide-react';
import { projectsData } from '../data/projectsData';
import GradientText from './bits/GradientText';

const ProjectCard = ({ project }) => {
  if (!project) return null;

  // 🌈 ENHANCED COLOR PALETTE
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
      className="relative p-[2px] rounded-[2rem] overflow-hidden group h-full transition-all duration-500 hover:-translate-y-2 smooth-gpu-layer"
      style={{ 
        /* 🎨 MULTI-STOP ELECTRIC BORDER */
        background: `linear-gradient(135deg, 
          ${colors.primary} 0%, 
          ${colors.secondary} 25%, 
          #1e293b 50%, 
          ${colors.secondary} 75%, 
          ${colors.accent} 100%)` 
      }}
    >
      {/* GLOW OVERLAY: Subtle radial glow that follows the group hover */}
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: `radial-gradient(circle at center, ${colors.primary}30 0%, transparent 70%)`
        }}
      />

      <div className="relative z-10 bg-[#030712] rounded-[calc(2rem-2px)] h-full overflow-hidden flex flex-col border border-white/5 group-hover:border-white/20 transition-colors">
        
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
                className="text-[12px] font-mono font-bold tracking-wider uppercase px-3 py-1.5 bg-white/[0.03] border border-white/10 rounded-md text-slate-300 group-hover:border-white/20 transition-all flex items-center gap-2"
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

const ProjectMatrix = () => {
  const navigate = useNavigate();

  const filteredProjects = useMemo(() => {
    const categories = ['Coded Web Solutions', 'IOT', 'Wordpress', 'Other'];
    return categories.map(cat => 
      projectsData.find(p => p.category === cat)
    ).filter(Boolean);
  }, []);

  return (
    <section className="max-w-7xl mx-auto py-24 px-6 relative z-10">
      
      {/* 🎯 SYNCED ELECTRIC HEADER DESIGN */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
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
          focused on solving real-world problems.
        </p>
        <div className="mt-6 h-[1px] w-16 bg-cyan-500/50 rounded-full" />
      </motion.div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}

        {/* Explore Archive Card */}
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
    </section>
  );
};

export default ProjectMatrix;
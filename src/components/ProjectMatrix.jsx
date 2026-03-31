import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { useNavigate, Link } from 'react-router-dom';
import { ChevronRight, Terminal, ArrowUpRight } from 'lucide-react';
import { projectsData } from '../data/projectsData';
import GradientText from './bits/GradientText';

const ProjectCard = ({ project }) => {
  if (!project) return null;

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
        /* 🎨 NEON TUBE BORDER: Tight stops for white-hot intensity */
        background: `linear-gradient(135deg, 
          ${colors.primary} 0%, 
          ${colors.primary} 40%, 
          #ffffff 50%, 
          ${colors.primary} 60%, 
          ${colors.primary} 100%)` 
      }}
    >
      {/* ⚡ LAYER 1: ATMOSPHERIC HAZE (Wide blur) */}
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-1000 pointer-events-none"
        style={{
          background: `radial-gradient(circle at center, ${colors.primary} 0%, transparent 80%)`,
          filter: 'blur(80px)'
        }}
      />

      {/* ⚡ LAYER 2: CORE BLOOM (Intense hover center) */}
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-40 transition-opacity duration-500 pointer-events-none"
        style={{
          background: `radial-gradient(circle at center, ${colors.primary} 20%, transparent 60%)`,
          filter: 'blur(40px)'
        }}
      />

      <div className="relative z-10 bg-[#030712] rounded-[calc(2rem-2px)] h-full overflow-hidden flex flex-col border border-white/10 group-hover:border-white/20 transition-colors">
        
        {/* Banner Image with Internal Glow */}
        <div className="relative h-52 overflow-hidden bg-slate-900">
          <img 
            src={project.banner} 
            alt={project.title}
            loading="lazy"
            className="w-full h-full object-cover opacity-60 group-hover:opacity-90 group-hover:scale-110 transition-all duration-700 ease-in-out"
          />
          {/* Top-down and bottom-up shading */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-transparent to-transparent opacity-90" />
          
          {/* Banner Accent Bloom */}
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-32 h-8 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
               style={{ backgroundColor: colors.primary }} />
        </div>

        {/* Content Area */}
        <div className="p-8 flex flex-col flex-grow">
          <div className="flex justify-between items-start mb-2 gap-4">
            <div className="flex flex-col gap-1">
              <h3 className="text-2xl font-black tracking-tighter text-white uppercase leading-tight group-hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.3)] transition-all">
                {project.title}
              </h3>
              <span 
                className="text-[11px] font-black tracking-[0.4em] uppercase drop-shadow-[0_0_8px_rgba(0,0,0,0.5)]"
                style={{ color: colors.primary }}
              >
                {project.category}
              </span>
            </div>
            
            <Link 
              to={`/project/${project.id}`}
              style={{ color: colors.primary, boxShadow: `0 0 15px ${colors.primary}30` }}
              className="p-3 rounded-full bg-white/5 border border-white/10 hover:bg-white hover:text-black hover:scale-110 transition-all shrink-0"
            >
              <ArrowUpRight size={20} strokeWidth={3} />
            </Link>
          </div>

          <p className="text-slate-400 text-sm leading-relaxed mb-6 mt-4 line-clamp-2 font-medium group-hover:text-slate-200 transition-colors italic">
            {project.shortDesc}
          </p>

          {/* Refined Tech Stack with Neon Dots */}
          <div className="flex flex-wrap gap-2 mb-8 items-center">
            {project.techStack?.slice(0, 3).map((tech, idx) => (
              <span 
                key={idx} 
                className="text-[11px] font-mono font-black tracking-wider uppercase px-3 py-1.5 bg-white/[0.03] border border-white/10 rounded-lg text-slate-400 group-hover:text-white group-hover:border-white/20 transition-all flex items-center gap-2"
              >
                <div className="w-1.5 h-1.5 rounded-full animate-pulse shadow-[0_0_8px_#fff]" 
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
            className="mt-auto flex items-center justify-center w-full py-5 bg-white/5 border-2 rounded-xl text-[10px] font-black tracking-[0.5em] uppercase hover:bg-white hover:text-black transition-all duration-300 text-slate-200 shadow-[0_0_20px_rgba(0,0,0,0.5)] group-hover:shadow-[0_0_30px_rgba(0,242,255,0.1)]"
          >
            Deploy-Documentation
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
      
      {/* 🎯 HEADER DESIGN */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-20 text-center w-full flex flex-col items-center"
      >
                             <GradientText
                                                                                colors={["#00f2ff", "#ffffff", "#00d4ff", "#3b82f6", "#00f2ff"]}
                                                                                className="text-5xl md:text-4xl font-black uppercase tracking-tighter"
                                                                              >
                                                                                Selected deplotments
                                                                              </GradientText>
                                                     
        <div className="mt-8 h-[2px] w-32 bg-gradient-to-r from-transparent via-cyan-500 to-transparent rounded-full shadow-[0_0_15px_#00f2ff]" />
      </motion.div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}

        {/* Explore Archive Card with Pulsing Glow */}
        <div 
          onClick={() => navigate('/projects')}
          className="group relative cursor-pointer border-2 border-dashed border-white/10 rounded-[2rem] p-8 flex flex-col items-center justify-center text-center transition-all hover:border-cyan-500 hover:bg-cyan-500/[0.05] min-h-[450px] overflow-hidden"
        >
          {/* Background Archive Glow */}
          <div className="absolute inset-0 bg-radial from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          
          <div className="relative z-10 w-20 h-20 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:border-cyan-500/50 group-hover:shadow-[0_0_30px_rgba(0,242,255,0.2)] transition-all duration-500">
            <Terminal size={32} strokeWidth={2.5} className="text-slate-500 group-hover:text-cyan-400 transition-colors" />
          </div>
          
          <h3 className="relative z-10 text-xl font-black text-white uppercase italic tracking-widest mb-3">Explore_Archive</h3>
          <p className="relative z-10 text-[12px] font-mono text-slate-500 uppercase tracking-widest mb-10 leading-relaxed">
            Access full repository <br /> 
            <span className="text-cyan-400 font-black animate-pulse">[ Entries: {projectsData.length} ]</span>
          </p>
          
          <div className="relative z-10 flex items-center gap-3 text-cyan-400 font-black text-[12px] tracking-[0.5em] uppercase group-hover:translate-x-2 transition-transform">
            Initialize_Full_List <ChevronRight size={18} strokeWidth={3} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectMatrix;
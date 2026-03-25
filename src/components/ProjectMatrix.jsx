import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ChevronRight, Terminal, Box, Cpu, Globe } from 'lucide-react';
import { projectsData } from '../data/projectsData';

const ProjectCard = React.memo(({ project }) => {
  const navigate = useNavigate();

  const getIcon = () => {
    if (project.category.includes('IOT')) return <Cpu size={14} />;
    if (project.category.includes('Wordpress')) return <Globe size={14} />;
    return <Box size={14} />;
  };

  return (
    <div className="group relative bg-[#030712] rounded-[2rem] p-[1.5px] overflow-hidden transition-all duration-500 hover:shadow-[0_0_40px_rgba(6,182,212,0.15)] h-full flex flex-col">
      
      {/* 🔮 SYNCED ELECTRIC BORDER */}
      <div className="absolute inset-[-150%] pointer-events-none">
        <div 
          className="w-full h-full animate-[spin_4s_linear_infinite]"
          style={{ 
            background: `conic-gradient(from 0deg, transparent 75%, ${project.color} 85%, #fff 95%, ${project.color} 100%)`,
          }}
        />
      </div>

      <div className="relative z-10 bg-[#030712] rounded-[calc(2rem-1.5px)] h-full overflow-hidden flex flex-col border border-white/5">
        <div className="relative h-48 overflow-hidden bg-slate-900/50">
          <img 
            src={project.banner} 
            alt={project.title}
            className="w-full h-full object-cover opacity-50 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-in-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#030712] to-transparent" />
        </div>

        <div className="p-8 flex flex-col flex-grow">
          <div className="flex justify-between items-start mb-4 gap-4">
            <h3 className="text-xl font-bold tracking-tight text-white uppercase group-hover:text-cyan-400 transition-colors">
              {project.title}
            </h3>
            <span className="p-2 rounded-full bg-white/5 text-slate-500 border border-white/5 shrink-0">
              {getIcon()}
            </span>
          </div>

          <p className="text-slate-400 text-xs leading-relaxed mb-8 line-clamp-2 font-medium border-l border-white/10 pl-4">
            {project.shortDesc}
          </p>

          <button 
            onClick={() => navigate(`/project/${project.id}`)}
            className="mt-auto flex items-center justify-center w-full py-4 bg-white/5 border border-white/10 rounded-xl text-[10px] font-black tracking-[0.3em] uppercase hover:bg-white hover:text-black transition-all"
          >
            Access_Technical_Logs
          </button>
        </div>
      </div>
    </div>
  );
});

const ProjectMatrix = () => {
  const navigate = useNavigate();

  // Curate one unique project per category
  const filteredProjects = useMemo(() => {
    const categories = ['Coded Web Solutions', 'IOT', 'Wordpress', 'Other'];
    return categories.map(cat => 
      projectsData.find(p => p.category === cat)
    ).filter(Boolean);
  }, []);

  return (
    <section className="max-w-7xl mx-auto py-24 px-6">
      
      {/* 🎯 CUSTOM HEADER DESIGN */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16 md:mb-20 text-center w-full flex flex-col items-center"
      >
        <h2 className="text-white font-black text-3xl md:text-5xl uppercase tracking-tighter mb-3">
          Selected <span className="text-cyan-500">Deployments</span>
        </h2>
        <p className="text-slate-400 text-sm md:text-base font-light leading-relaxed max-w-[500px]">
          A high-level index of my work across full-stack development, 
          IoT architecture, and professional WordPress solutions.
        </p>
        <div className="mt-6 h-[1px] w-16 bg-cyan-500/50 rounded-full" />
      </motion.div>

      {/* GRID LAYOUT */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}

        {/* VIEW ALL CTA CARD */}
        <div 
          onClick={() => navigate('/projects')}
          className="group relative cursor-pointer border-2 border-dashed border-white/10 rounded-[2rem] p-8 flex flex-col items-center justify-center text-center transition-all hover:border-cyan-500/50 hover:bg-cyan-500/[0.02] min-h-[400px]"
        >
          <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
            <Terminal size={24} className="text-slate-500 group-hover:text-cyan-400" />
          </div>
          <h3 className="text-lg font-bold text-white uppercase tracking-widest mb-2">Explore_Archive</h3>
          <p className="text-[10px] font-mono text-slate-500 uppercase tracking-tight mb-8">
            Access complete project database <br /> [ Total_Entries: {projectsData.length} ]
          </p>
          <div className="flex items-center gap-2 text-cyan-400 font-black text-[10px] tracking-[0.3em] uppercase">
            View_Full_Archive <ChevronRight size={14} />
          </div>
        </div>
      </div>

      {/* Animation Styles */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}} />
    </section>
  );
};

export default ProjectMatrix;
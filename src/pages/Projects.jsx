import React, { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projectsData } from '../data/projectsData';

import ProjectHero from '../components/Projects/ProjectHero';
import ProjectFilters from '../components/Projects/ProjectFilters';
import ProjectCard from '../components/Projects/ProjectCard';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filteredProjects = useMemo(() => {
    if (!projectsData) return [];
    if (activeFilter === 'all') return projectsData;
    
    return projectsData.filter((project) => {
      const category = project?.category?.toLowerCase() || "";
      const filter = activeFilter.toLowerCase();
      return category.includes(filter);
    });
  }, [activeFilter]);

  return (
    <div className="min-h-screen bg-[#020617] text-white selection:bg-cyan-500/30">
      <ProjectHero />

      <section className="max-w-7xl mx-auto px-6 pb-32">
        <ProjectFilters 
          active={activeFilter} 
          setActive={setActiveFilter} 
        />

        <div className="flex items-center gap-4 mb-12 opacity-50">
          <div className="h-[1px] flex-1 bg-gradient-to-r from-cyan-500/50 to-transparent" />
          <span className="text-[10px] font-mono tracking-widest uppercase">
            Showing_{filteredProjects?.length || 0}_Verified_Entries
          </span>
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <ProjectCard 
                key={project.id} 
                project={project} 
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredProjects.length === 0 && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="py-32 text-center border border-dashed border-white/10 rounded-[2rem]"
          >
            <p className="text-slate-500 font-mono text-xs uppercase tracking-[0.3em]">
              [!] No_Data_Found_In_This_Sector
            </p>
          </motion.div>
        )}
      </section>

      {/* Global Background Glow */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] bg-indigo-600/5 blur-[120px]" />
      </div>
    </div>
  );
};

export default Projects;
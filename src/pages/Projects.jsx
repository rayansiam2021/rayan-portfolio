import React, { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projectsData } from '../data/projectsData';
import { CTA_CONFIGS } from '../data/ctaData';

import ProjectHero from '../components/Projects/ProjectHero';
import ProjectFilters from '../components/Projects/ProjectFilters';
import ProjectCard from '../components/Projects/ProjectCard';
import ContactForm from '../components/ContactForm'; 
import StatsRibbon from '../components/StatsRibbon'; 
import ConversionCTA from '../components/ConversionCTA';
import GradientText from '../components/bits/GradientText';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const ctaData = CTA_CONFIGS.projects;

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

      {/* PRIMARY CONTENT SECTION */}
      <section className="max-w-7xl mx-auto px-6 pb-32 relative z-10">
        <ProjectFilters active={activeFilter} setActive={setActiveFilter} />

        {/* System Counter Bar */}
        <div className="flex items-center gap-4 mb-12 opacity-50">
          <div className="h-[1px] flex-1 bg-gradient-to-r from-cyan-500/50 to-transparent" />
          <span className="text-[10px] font-mono tracking-widest uppercase">
            Showing_{filteredProjects?.length || 0}_Verified_Entries
          </span>
        </div>

        {/* Project Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredProjects.length === 0 && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="py-32 text-center border border-dashed border-white/10 rounded-[2rem] bg-white/[0.01]">
            <p className="text-slate-500 font-mono text-xs uppercase tracking-[0.3em]">[!] No_Data_Found_In_This_Sector</p>
          </motion.div>
        )}

        {/* ⚡ CONTACT FORM */}
        <div className="mt-32 max-w-5xl mx-auto">
          <ContactForm />
        </div>
      </section>

      {/* ⚡ FULL WIDTH STATS RIBBON (Transparent Layer) */}
      <div className="relative z-20 w-full border-y border-white/5 py-6">
        <StatsRibbon />
      </div>

      {/* FINAL CTA SECTION */}
      <section className="max-w-7xl mx-auto px-6 pb-32 relative z-10">
        <div className="mt-20">
           <ConversionCTA 
            variant={ctaData.variant}
            badge={ctaData.badge}
            title={ctaData.title}
            description={ctaData.description}
            primaryAction={ctaData.primaryAction}
            secondaryAction={ctaData.secondaryAction}
          />
        </div>
      </section>

      {/* GLOBAL BACKGROUND FX */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] bg-indigo-600/5 blur-[120px]" />
        <div className="absolute bottom-[-5%] left-[-5%] w-[30%] h-[30%] bg-cyan-600/5 blur-[100px]" />
      </div>
    </div>
  );
};

export default Projects;
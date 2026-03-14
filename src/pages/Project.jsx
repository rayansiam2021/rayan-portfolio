import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { projectsData } from '../data/projectsData';
import { Terminal, Cpu, Trophy, ArrowLeft, Globe, Github } from 'lucide-react';

const Project = () => {
  const { projectId } = useParams();

  // Scroll to top whenever the projectId changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [projectId]);

  const project = projectsData.find((p) => p.id === projectId);

  // Safety Shield: Handle missing data or incorrect IDs
  if (!project) {
    return (
      <div className="h-screen flex flex-col items-center justify-center bg-[#020617] text-white font-mono">
        <h2 className="text-2xl mb-4 text-cyan-400">/SYSTEM/DATA_NOT_FOUND</h2>
        <p className="text-slate-500 mb-8 text-sm">Target ID: {projectId}</p>
        <Link to="/" className="px-6 py-2 border border-cyan-500/50 text-cyan-400 rounded-full hover:bg-cyan-500/10 transition-all">
          RETURN_TO_BASE
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#020617] text-white font-sans selection:bg-cyan-500/30">
      
      {/* 1. CINEMATIC HERO SECTION */}
      <section className="relative h-[50vh] md:h-[70vh] w-full overflow-hidden border-b border-white/5">
        <motion.img 
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.3 }}
          transition={{ duration: 1.5 }}
          src={project.banner} 
          alt={project.title} 
          className="w-full h-full object-cover" 
        />
        
        <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/40 to-transparent" />

        <div className="absolute inset-0 flex flex-col items-center justify-center px-4">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-center"
          >
            <span className="text-cyan-400 font-mono tracking-[0.4em] uppercase text-xs mb-4 block">
              // Project_Dossier
            </span>
            <h1 className="text-5xl md:text-8xl font-black bg-gradient-to-b from-white to-white/40 bg-clip-text text-transparent uppercase tracking-tighter mb-4">
              {project.title}
            </h1>
            <div className="flex items-center justify-center gap-3">
              <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] text-slate-400 font-bold uppercase tracking-widest">
                {project.category}
              </span>
              <span className="w-1 h-1 bg-slate-700 rounded-full"></span>
              <span className="text-[10px] text-cyan-500 font-mono uppercase tracking-widest">
                {project.status}
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. CONTENT GRID */}
      <main className="max-w-7xl mx-auto px-6 py-16 md:py-24 grid grid-cols-1 lg:grid-cols-12 gap-16">
        
        {/* LEFT: Technical Sidebar */}
        <aside className="lg:col-span-4 space-y-8">
          <div className="sticky top-24 p-8 bg-white/[0.02] border border-white/5 rounded-3xl backdrop-blur-xl">
            <div className="flex items-center gap-3 mb-8">
              <Cpu className="text-cyan-400" size={20} />
              <h3 className="text-sm font-bold uppercase tracking-widest text-white">Stack_Specs</h3>
            </div>
            
            <div className="flex flex-wrap gap-2 mb-10">
              {project.techStack.map((tech) => (
                <span key={tech} className="text-[11px] font-mono bg-white/5 text-slate-300 px-3 py-1.5 rounded-lg border border-white/5">
                  {tech}
                </span>
              ))}
            </div>

            <div className="space-y-4 pt-6 border-t border-white/5">
               <div className="flex justify-between items-center text-[11px] font-mono">
                  <span className="text-slate-500 uppercase">Deployed</span>
                  <span className="text-slate-300">{project.date}</span>
               </div>
               <div className="flex justify-between items-center text-[11px] font-mono">
                  <span className="text-slate-500 uppercase">Protocol</span>
                  <span className="text-cyan-500">SSL_ENCRYPTED</span>
               </div>
            </div>

            <div className="mt-10 space-y-3">
              <button className="w-full py-3 bg-white text-black font-bold text-xs uppercase tracking-widest rounded-xl hover:bg-cyan-400 transition-colors flex items-center justify-center gap-2">
                <Globe size={14} /> Live Preview
              </button>
              <button className="w-full py-3 bg-white/5 border border-white/10 text-white font-bold text-xs uppercase tracking-widest rounded-xl hover:bg-white/10 transition-colors flex items-center justify-center gap-2">
                <Github size={14} /> Source Code
              </button>
            </div>
          </div>
        </aside>

        {/* RIGHT: Blog/Case Study */}
        <div className="lg:col-span-8 space-y-20">
          
          <section>
            <div className="flex items-center gap-4 mb-6">
              <Terminal className="text-cyan-400" size={24} />
              <h2 className="text-3xl font-bold">Overview</h2>
            </div>
            <p className="text-slate-400 leading-relaxed text-lg font-light">
              {project.blogContent.overview}
            </p>
          </section>

          <section className="relative p-8 md:p-12 bg-white/[0.02] border border-white/5 rounded-3xl overflow-hidden">
            <div className="absolute top-0 left-0 w-1 h-full bg-cyan-500" />
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <span className="text-cyan-500">#</span> The Challenge
            </h2>
            <p className="text-slate-400 leading-relaxed italic">
              "{project.blogContent.challenge}"
            </p>
          </section>

          <section>
            <div className="flex items-center gap-4 mb-6">
              <Trophy className="text-yellow-500" size={24} />
              <h2 className="text-3xl font-bold">The Result</h2>
            </div>
            <p className="text-slate-400 leading-relaxed text-lg font-light">
              {project.blogContent.results}
            </p>
          </section>

          <div className="pt-12 border-t border-white/5">
            <Link 
              to="/" 
              className="group inline-flex items-center gap-3 text-sm font-bold tracking-widest text-slate-500 hover:text-cyan-400 transition-colors uppercase"
            >
              <ArrowLeft size={18} className="group-hover:-translate-x-2 transition-transform" />
              Back to System Matrix
            </Link>
          </div>

        </div>
      </main>
    </div>
  );
};

export default Project;
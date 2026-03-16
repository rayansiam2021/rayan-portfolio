import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { projectsData } from '../data/projectsData';
import { Terminal, Cpu, Trophy, ArrowLeft, Globe, Github, FileText, Download } from 'lucide-react';

const Project = () => {
  const { projectId } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [projectId]);

  const project = projectsData.find((p) => p.id === projectId);

  if (!project) {
    return (
      <div className="h-screen flex flex-col items-center justify-center bg-[#020617] text-white font-mono text-xs tracking-widest">
        <h2 className="mb-4 text-cyan-400">/SYSTEM/DATA_NOT_FOUND</h2>
        <Link to="/" className="px-6 py-2 border border-white/10 rounded-full hover:bg-white/5 transition-all">
          RETURN_TO_ARCHIVE
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#020617] text-white font-sans selection:bg-indigo-500/30 antialiased">
      
      {/* 1. CINEMATIC HERO SECTION */}
      <section className="relative h-[50vh] md:h-[65vh] w-full overflow-hidden border-b border-white/5">
        <motion.img 
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.35 }}
          transition={{ duration: 1.5 }}
          src={project.banner} 
          alt={project.title} 
          className="w-full h-full object-cover" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/40 to-transparent" />
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4">
          <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }} className="text-center">
            <span className="text-indigo-400 font-mono tracking-[0.4em] uppercase text-[10px] mb-4 block">// SYSTEM_ANALYSIS</span>
            <h1 className="text-5xl md:text-8xl font-black bg-gradient-to-b from-white to-white/40 bg-clip-text text-transparent uppercase tracking-tighter mb-4 leading-none">
              {project.title}
            </h1>
            <div className="flex items-center justify-center gap-3">
              <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[9px] text-slate-400 font-bold uppercase tracking-widest">{project.category}</span>
              <span className="text-[9px] text-indigo-500 font-mono uppercase tracking-widest font-black">{project.status}</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. TECHNICAL CONTENT */}
      <main className="max-w-7xl mx-auto px-6 py-16 md:py-24 grid grid-cols-1 lg:grid-cols-12 gap-16">
        
        {/* LEFT: TECH SIDEBAR */}
        <aside className="lg:col-span-4 space-y-8">
          <div className="sticky top-24 p-8 bg-white/[0.02] border border-white/5 rounded-3xl backdrop-blur-xl border-t-white/10 transform-gpu">
            <div className="flex items-center gap-3 mb-8">
              <Cpu className="text-indigo-400" size={18} />
              <h3 className="text-xs font-black uppercase tracking-[0.2em] text-white">System_Specs</h3>
            </div>
            
            <div className="flex flex-wrap gap-2 mb-10">
              {project.techStack.map((tech, index) => (
                <span key={index} className="flex items-center gap-2 text-[10px] font-mono bg-white/5 text-slate-300 px-3 py-1.5 rounded-lg border border-white/5">
                  {typeof tech === 'object' && tech.icon && (
                    <img src={tech.icon} alt="" className="w-3 h-3 object-contain" />
                  )}
                  {typeof tech === 'string' ? tech : tech.name}
                </span>
              ))}
            </div>

            <div className="mt-10 space-y-3">
              {project.links?.live && (
                <a href={project.links.live} target="_blank" rel="noreferrer" className="w-full py-4 bg-white text-black font-black text-[10px] uppercase tracking-[0.2em] rounded-xl hover:bg-indigo-400 transition-colors flex items-center justify-center gap-2 shadow-lg shadow-indigo-500/10">
                  <Globe size={14} /> LIVE_PREVIEW
                </a>
              )}
              <a href={project.links?.github} target="_blank" rel="noreferrer" className="w-full py-4 bg-white/5 border border-white/10 text-white font-black text-[10px] uppercase tracking-[0.2em] rounded-xl hover:bg-white/10 transition-colors flex items-center justify-center gap-2">
                <Github size={14} /> SOURCE_CODE
              </a>
            </div>
          </div>
        </aside>

        {/* RIGHT: CONTENT BLOCKS */}
        <div className="lg:col-span-8 space-y-20">
          
          <section>
            <div className="flex items-center gap-4 mb-6 text-indigo-500">
              <Terminal size={22} />
              <h2 className="text-sm font-black tracking-[0.3em] uppercase">Overview</h2>
            </div>
            <p className="text-slate-300 leading-relaxed text-lg font-medium opacity-80">
              {project.blogContent.overview}
            </p>
          </section>

          <section className="relative p-10 bg-white/[0.02] border border-white/5 rounded-[2rem] overflow-hidden transform-gpu">
            <div className="absolute top-0 left-0 w-1 h-full bg-indigo-500 shadow-[0_0_15px_rgba(99,102,241,0.5)]" />
            <h2 className="text-xs font-black text-white mb-4 uppercase tracking-[0.2em]">The Challenge</h2>
            <p className="text-slate-400 leading-relaxed italic font-medium">"{project.blogContent.challenge}"</p>
          </section>

          <section>
            <div className="flex items-center gap-4 mb-6 text-emerald-500">
              <Trophy size={22} />
              <h2 className="text-sm font-black tracking-[0.3em] uppercase">Results</h2>
            </div>
            <p className="text-slate-300 leading-relaxed text-lg font-medium opacity-80">
              {project.blogContent.results}
            </p>
          </section>

          {/* SYSTEM ARCHITECTURE IMAGE */}
          {(project.blogContent.projectimg || project.blogContent.diagram) && (
            <section className="pt-10">
              <div className="rounded-3xl overflow-hidden border border-white/5 bg-[#030712] p-2">
                <img 
                  src={project.blogContent.projectimg || project.blogContent.diagram} 
                  alt="Architecture" 
                  className="w-full h-auto rounded-2xl grayscale hover:grayscale-0 transition-all duration-700" 
                />
              </div>
            </section>
          )}

          {/* UNIVERSAL ARTIFACTS SECTION */}
          {project.links?.report && (
            <section className="p-8 md:p-12 bg-white/[0.02] border border-white/5 rounded-[2.5rem] relative overflow-hidden flex flex-col md:flex-row items-center gap-10">
              <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 blur-[100px] rounded-full" />
              
              {/* CYBER SCANNER CARD */}
              <div className="relative group shrink-0">
                <div className="w-44 h-56 bg-[#030712] rounded-lg shadow-2xl overflow-hidden transform -rotate-2 group-hover:rotate-0 transition-all duration-500 border border-white/10 relative">
                  <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'linear-gradient(#4f46e5 1px, transparent 1px), linear-gradient(90deg, #4f46e5 1px, transparent 1px)', backgroundSize: '15px 15px' }} />
                  <div className="absolute top-0 left-0 w-full h-1 bg-indigo-500/50 shadow-[0_0_15px_#4f46e5] animate-scan" />
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
                    <FileText size={40} className="text-indigo-500/40 mb-2" />
                    <div className="w-full space-y-2 opacity-30">
                      <div className="h-1 w-full bg-indigo-500/50 rounded" />
                      <div className="h-1 w-3/4 bg-indigo-500/50 rounded" />
                    </div>
                  </div>
                  <div className="absolute bottom-2 left-2 font-mono text-[6px] text-indigo-400/60 leading-tight">
                    {`> SYSTEM_VERIFIED\n> LOGIC_AUDIT_PASS\n> ENCRYPTED_STREAMS`}
                  </div>
                </div>
                <div className="absolute -bottom-3 -right-3 bg-[#020617] border border-white/10 text-indigo-400 text-[8px] font-black px-3 py-2 rounded-lg shadow-xl uppercase tracking-widest">
                  v2.0_Verified
                </div>
              </div>

              <div className="flex-1 text-center md:text-left z-10">
                <div className="flex items-center gap-3 mb-2 justify-center md:justify-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <h3 className="text-xl font-black uppercase tracking-tighter text-white">Technical_Deliverables</h3>
                </div>
                <p className="text-slate-400 text-sm mb-6 font-medium leading-relaxed max-w-xl">
                  High-fidelity documentation mapping the <strong>system architecture</strong> and 
                  <strong>performance benchmarks</strong>. This artifact validates my ability to 
                  engineer stable, scalable, and fully-audited technical solutions.
                </p>
                <a href={project.links.report} download className="inline-flex items-center gap-3 px-8 py-4 bg-white text-black font-black text-[10px] tracking-[0.2em] rounded-xl hover:bg-indigo-500 hover:text-white transition-all transform hover:-translate-y-1 active:scale-95">
                  <Download size={14} /> DOWNLOAD_TECHNICAL_REPORT
                </a>
              </div>
            </section>
          )}

          {/* FOOTER NAVIGATION */}
          <div className="pt-12 border-t border-white/5">
            <Link to="/" className="group inline-flex items-center gap-3 text-[10px] font-black tracking-[0.3em] text-slate-500 hover:text-white transition-colors uppercase">
              <ArrowLeft size={16} className="group-hover:-translate-x-2 transition-transform" />
              BACK_TO_ARCHIVE
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Project;
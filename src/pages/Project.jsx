import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { projectsData } from '../data/projectsData';
import { 
  ArrowLeft, ExternalLink, FileText, Github, 
  Cpu, Layout, CheckCircle2, AlertCircle, Terminal 
} from 'lucide-react';

const Project = () => {
  const { projectId } = useParams();
  const project = projectsData.find(p => p.id === projectId);

  // Define Accent Color based on Category
  const accentColor = (() => {
    if (!project) return '#22d3ee';
    switch (project.category) {
      case 'Coded Web Solutions': return '#22d3ee'; // Cyan
      case 'IOT': return '#fb923c';               // Orange
      case 'Wordpress': return '#a855f7';          // Purple
      default: return '#34d399';                  // Emerald
    }
  })();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [projectId]);

  if (!project) return (
    <div className="h-screen flex items-center justify-center bg-[#020617] text-cyan-500 font-mono tracking-widest uppercase">
      [!] ERROR: PROJECT_ID_NOT_FOUND
    </div>
  );

  return (
    <div className="min-h-screen bg-[#020617] text-slate-300 pt-32 pb-20 px-6 font-sans selection:bg-cyan-500/30">
      <div className="max-w-6xl mx-auto">
        
        {/* --- NAVIGATION & HEADER --- */}
        <header className="mb-24 max-w-5xl">
          <Link to="/projects" className="inline-flex items-center gap-2 text-slate-500 hover:text-white transition-colors uppercase font-mono text-[10px] tracking-[0.3em] mb-12">
            <ArrowLeft size={12} /> Return_to_Archive
          </Link>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-8">
               <div className="h-[2px] w-12" style={{ backgroundColor: accentColor }} />
               <span className="text-[10px] font-black tracking-[0.4em] text-slate-500 uppercase">
                 Verified_Deployment_Log // {project.date}
               </span>
            </div>

            <h1 className="text-6xl md:text-[100px] font-black uppercase italic mb-10 leading-[0.85] tracking-tighter text-white">
              {project.title}<span style={{ color: accentColor }}>_</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-400 leading-relaxed font-medium border-l-2 border-white/10 pl-8 max-w-3xl">
              {project.shortDesc}
            </p>
          </motion.div>
        </header>

        {/* --- MAIN CONTENT GRID --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
          
          {/* LEFT SIDE: TECHNICAL DOCUMENTATION */}
          <div className="lg:col-span-8 space-y-24">
            
            {/* 01_OVERVIEW */}
            <section className="border-t border-white/5 pt-12">
              <div className="grid md:grid-cols-4 gap-8">
                <div className="md:col-span-1">
                  <h2 className="text-[10px] font-black uppercase tracking-[0.3em]" style={{ color: accentColor }}>
                    01_Overview
                  </h2>
                </div>
                <div className="md:col-span-3">
                  <p className="text-xl text-white mb-10 leading-relaxed font-semibold italic">
                    "{project.blogContent?.overview?.intro}"
                  </p>
                  <ul className="space-y-6">
                    {project.blogContent?.overview?.points?.map((point, i) => (
                      <li key={i} className="flex gap-4 group">
                        <span className="font-mono text-xs mt-1 opacity-30 group-hover:opacity-100 transition-opacity" style={{ color: accentColor }}>
                          {i + 1 < 10 ? `0${i+1}` : i+1}
                        </span>
                        <span className="text-slate-300 text-lg leading-snug">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            {/* 02_VISUAL_ASSET */}
            {project.blogContent?.projectimg && (
              <section className="relative rounded-xl overflow-hidden bg-slate-900 border border-white/5 shadow-2xl">
                <img 
                  src={project.blogContent.projectimg} 
                  alt="System Architecture" 
                  className="w-full opacity-80 hover:opacity-100 transition-opacity duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#020617]/40 to-transparent" />
              </section>
            )}

            {/* 03_IMPLEMENTATION */}
            <section className="border-t border-white/5 pt-12">
              <div className="grid md:grid-cols-4 gap-8">
                <div className="md:col-span-1">
                  <h2 className="text-[10px] font-black uppercase tracking-[0.3em]" style={{ color: accentColor }}>
                    02_Execution
                  </h2>
                </div>
                <div className="md:col-span-3">
                   <p className="text-lg text-slate-300 mb-10 leading-relaxed">{project.blogContent?.implementation?.intro}</p>
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {project.blogContent?.implementation?.points?.map((p, i) => (
                        <div key={i} className="p-5 bg-white/[0.02] border border-white/5 rounded-lg flex items-center gap-4 group hover:border-white/10 transition-colors">
                          <Terminal size={14} style={{ color: accentColor }} className="opacity-50" />
                          <span className="text-xs font-mono text-slate-400 group-hover:text-slate-200 transition-colors">{p}</span>
                        </div>
                      ))}
                   </div>
                </div>
              </div>
            </section>

            {/* 04_CHALLENGE & SOLUTION GRID */}
            <section className="grid md:grid-cols-2 gap-1 bg-white/5 border border-white/5 rounded-2xl overflow-hidden shadow-2xl">
              <div className="p-10 bg-[#020617]">
                <h3 className="text-[10px] font-bold text-red-500 uppercase tracking-[0.3em] mb-8 flex items-center gap-2">
                  <AlertCircle size={14} /> The_Challenge
                </h3>
                <p className="text-slate-300 leading-relaxed font-medium">
                  {project.blogContent?.challenge?.intro}
                </p>
              </div>
              <div className="p-10 bg-[#020617] border-l border-white/5">
                <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] mb-8 flex items-center gap-2" style={{ color: accentColor }}>
                  <CheckCircle2 size={14} /> The_Outcome
                </h3>
                <p className="text-slate-300 leading-relaxed font-medium">
                  {project.blogContent?.results?.intro}
                </p>
              </div>
            </section>
          </div>

          {/* RIGHT SIDE: METADATA & ASSETS */}
          <aside className="lg:col-span-4">
            <div className="sticky top-32 space-y-12">
              
              {/* Primary Actions */}
              <div>
                <h4 className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.3em] mb-6">Production_Links</h4>
                <div className="space-y-3">
                  {project.links?.live && (
                    <a href={project.links.live} target="_blank" rel="noreferrer" 
                      className="flex items-center justify-between p-5 bg-white text-black text-xs font-black hover:bg-cyan-400 transition-all rounded-xl">
                      LAUNCH_LIVE_SYSTEM <ExternalLink size={18} />
                    </a>
                  )}
                  {project.links?.github && (
                    <a href={project.links.github} target="_blank" rel="noreferrer" 
                      className="flex items-center justify-between p-5 border border-white/10 text-xs font-black hover:bg-white/5 transition-all text-white rounded-xl">
                      REPOS_SOURCE <Github size={18} />
                    </a>
                  )}
                </div>
              </div>

              {/* Stack Composition */}
              <div>
                <h4 className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.3em] mb-6">Stack_Composition</h4>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, i) => (
                    <span key={i} className="text-[11px] font-mono text-slate-300 border border-white/10 px-3 py-1.5 rounded-md bg-white/[0.02] hover:border-cyan-500/30 transition-colors">
                      {typeof tech === 'string' ? tech : tech.name}
                    </span>
                  ))}
                </div>
              </div>

              {/* System Stats Block */}
              <div className="p-8 bg-white/[0.02] border-l-2 rounded-r-2xl" style={{ borderColor: accentColor }}>
                <div className="space-y-4 font-mono text-[10px] uppercase tracking-widest text-slate-500">
                  <div className="flex justify-between">
                    <span>Status:</span>
                    <span className="text-white">{project.status}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Category:</span>
                    <span className="text-white">{project.category}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Build_ID:</span>
                    <span className="text-white">PX-{project.id.toUpperCase()}</span>
                  </div>
                </div>
              </div>

            </div>
          </aside>

        </div>
      </div>
    </div>
  );
};

export default Project;
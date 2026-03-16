import React, { useMemo, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Terminal, ChevronLeft, ChevronRight, Cpu, Code2, ExternalLink, Zap } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { projectsData } from '../data/projectsData';
import GradientText from './bits/GradientText';

// Swiper Styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const ProjectCard = React.memo(({ project, isActive }) => {
  const navigate = useNavigate();

  return (
    <div className={`relative h-[540px] w-full transition-all duration-500 ease-out select-none transform-gpu ${
        isActive ? 'z-30 opacity-100 scale-100' : 'z-10 opacity-40 scale-90'
      }`}>
      
      {/* OUTER GLOW BORDER */}
      {isActive && (
        <div className="absolute inset-[-1px] rounded-[16px] overflow-hidden z-0">
            <div className="absolute inset-[-150%] animate-[spin_4s_linear_infinite]"
             style={{ background: `conic-gradient(from 0deg, transparent 70%, ${project.color} 90%, transparent 100%)` }} />
        </div>
      )}

      {/* CARD BODY */}
      <div className="relative h-full bg-[#030712] border border-white/10 rounded-[15px] overflow-hidden flex flex-col shadow-2xl">
        
        {/* TACTICAL HEADER WITH UPDATED DESIGN */}
        <div className="flex items-center justify-between px-4 py-4 bg-[#0d111c] border-b border-white/10 shrink-0 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          
          <div className="flex items-center gap-4">
            {/* Pulsing Status Orb */}
            <div className="relative">
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 shadow-[0_0_10px_#10b981]" />
              <div className="absolute inset-0 w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping opacity-40" />
            </div>
            
            {/* UPDATED DESIGN BLOCK */}
            <div className="flex flex-col border-l-2 pl-3" style={{ borderColor: project.color }}>
              <span className="text-[11px] font-black font-mono text-white tracking-[0.25em] uppercase leading-none mb-1.5">
                PROJECT SOLVED 
              </span>
              <div className="flex items-center gap-2">
                <span className="text-[8px] font-mono text-slate-500 font-bold tracking-tighter uppercase opacity-70">
                  ID_REF //
                </span>
                <span className="text-[8px] font-mono font-black text-cyan-400 tracking-[0.15em] uppercase">
                  0x{project.id.slice(0, 4).toUpperCase()}
                </span>
              </div>
            </div>
          </div>

          <div className="hidden sm:flex items-center gap-2">
            <div className="px-2 py-1 rounded border border-white/10 bg-white/5 backdrop-blur-md">
               <span className="text-[8px] font-black font-mono text-slate-400 tracking-widest">v2.6.0_STABLE</span>
            </div>
          </div>
        </div>

        {/* CYBER-GRID HERO AREA */}
        <div className="relative h-44 shrink-0 bg-[#010409] overflow-hidden group/preview">
          <div 
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `
                linear-gradient(to right, ${project.color}33 1px, transparent 1px),
                linear-gradient(to bottom, ${project.color}33 1px, transparent 1px)
              `,
              backgroundSize: '20px 20px',
            }}
          />

          <div className="absolute inset-0 opacity-40"
            style={{ background: `radial-gradient(circle at center, ${project.color}44 0%, transparent 70%)` }}
          />

          <div className="absolute inset-0 w-full h-[2px] opacity-30 shadow-[0_0_15px_rgba(255,255,255,0.5)] z-10 animate-matrix-scan"
            style={{ background: `linear-gradient(to right, transparent, ${project.color}, transparent)` }}
          />

          {/* GRADIENT TITLE PLATE */}
          <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
             <div className="relative z-20 backdrop-blur-md bg-black/60 border border-white/10 p-5 rounded-xl shadow-2xl">
                <p className="text-[8px] font-mono font-bold text-white/30 mb-2 tracking-[0.5em] uppercase">Identification_Plate</p>
                
                <GradientText
                  colors={isActive ? ["#ffffff", project.color, "#ffffff"] : ["#475569", "#1e293b"]}
                  className="text-lg md:text-xl font-black uppercase tracking-wider !justify-center !mx-0"
                >
                  {project.title}
                </GradientText>
                
                <div className="h-[2px] w-12 mx-auto mt-3 rounded-full" style={{ backgroundColor: project.color, boxShadow: `0 0 10px ${project.color}` }} />
             </div>
          </div>

          <div className="absolute bottom-3 left-3 p-1.5 rounded-md bg-[#0d111c] border border-white/10 z-20">
             <Terminal size={10} style={{ color: project.color }} />
          </div>
        </div>

        {/* CONTENT AREA */}
        <div className="p-5 flex flex-col flex-grow overflow-hidden bg-gradient-to-b from-[#030712] to-[#010409]">
          <div className="flex items-center justify-between mb-4">
            <p className="text-[9px] font-mono font-black text-cyan-500/80 tracking-widest uppercase flex items-center gap-2">
              <span className="w-1 h-1 rounded-full bg-cyan-500 animate-pulse" />
              {project.status || 'STATUS_ONLINE'}
            </p>
            <span className="text-[8px] font-mono text-slate-600">LATEST_SYNC_2026</span>
          </div>

          <p className="text-[12px] text-slate-400 leading-snug line-clamp-3 mb-6 font-medium border-l-2 pl-3" style={{ borderColor: `${project.color}44` }}>
             {project.shortDesc}
          </p>
          
          {/* COLORFUL TECH STACK */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.techStack.slice(0, 6).map((tech, index) => (
              <div key={index} className="flex items-center gap-1.5 px-2.5 py-1 bg-white/5 border border-white/10 rounded-md transition-all hover:bg-white/10">
                {tech.icon ? (
                  <img src={tech.icon} alt="" className="w-3.5 h-3.5 object-contain" />
                ) : (
                  <div className="w-1.5 h-1.5 rounded-full" style={{ background: project.color }} />
                )}
                <span className="text-[9px] font-bold text-slate-200 uppercase tracking-tighter">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>

          {/* ACTION BUTTON */}
          <button 
            onClick={() => navigate(`/project/${project.id}`)}
            className="mt-auto group flex items-center justify-between py-4 px-6 rounded-lg bg-white/5 border border-white/10 hover:border-white/20 transition-all active:scale-95 overflow-hidden relative"
          >
            <div className="flex items-center gap-2 relative z-10">
              <Code2 size={14} style={{ color: project.color }} />
              <span className="text-[10px] font-black tracking-[0.2em] text-white uppercase">Execute_Module</span>
            </div>
            <ExternalLink size={14} className="text-white/40 relative z-10" />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
          </button>
        </div>

        {/* FOOTER */}
        <div className="px-4 py-2 bg-[#0d111c] border-t border-white/5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_#10b981]" />
            <span className="text-[9px] font-mono font-bold text-slate-500 tracking-tighter uppercase">system_integrity_100%</span>
          </div>
          <div className="flex items-center gap-3">
             <Zap size={10} className="text-yellow-500 animate-pulse" />
             <span className="text-[8px] font-mono text-slate-600 tracking-widest uppercase">node_src_v2</span>
          </div>
        </div>
      </div>
    </div>
  );
});

const ProjectMatrix = () => {
  const slides = useMemo(() => projectsData, []);
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className="w-full py-12 px-4 overflow-hidden relative group bg-[#010409]">
      <button ref={prevRef} className="absolute left-6 md:left-10 top-1/2 -translate-y-1/2 z-50 p-4 rounded-full bg-black/80 border border-white/20 text-white/40 hover:text-white transition-all opacity-0 group-hover:opacity-100 hidden md:flex"><ChevronLeft size={28} /></button>
      <button ref={nextRef} className="absolute right-6 md:right-10 top-1/2 -translate-y-1/2 z-50 p-4 rounded-full bg-black/80 border border-white/20 text-white/40 hover:text-white transition-all opacity-0 group-hover:opacity-100 hidden md:flex"><ChevronRight size={28} /></button>

      <Swiper
        effect={'coverflow'}
        centeredSlides={true}
        loop={true}
        slidesPerView={'auto'}
        speed={800}
        navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
        }}
        coverflowEffect={{ rotate: 0, stretch: 0, depth: 100, modifier: 2.5, slideShadows: false }}
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        modules={[EffectCoverflow, Navigation, Pagination, Autoplay]}
        className="project-swiper !pb-16"
      >
        {slides.map((project) => (
          <SwiperSlide key={project.id} className="!w-[340px] md:!w-[420px] py-10">
            {({ isActive }) => <ProjectCard project={project} isActive={isActive} />}
          </SwiperSlide>
        ))}
      </Swiper>

      <style>{`
        @keyframes matrix-scan { 0% { top: 0%; opacity: 0; } 10% { opacity: 1; } 90% { opacity: 1; } 100% { top: 100%; opacity: 0; } }
        .animate-matrix-scan { animation: matrix-scan 3s linear infinite; }
        .swiper-pagination-bullet { background: rgba(255,255,255,0.1) !important; opacity: 1 !important; }
        .swiper-pagination-bullet-active { background: white !important; width: 24px !important; border-radius: 4px !important; }
      `}</style>
    </div>
  );
};

export default ProjectMatrix;
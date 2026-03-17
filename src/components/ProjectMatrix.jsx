import React, { useMemo, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Terminal, ChevronLeft, ChevronRight, Code2, ExternalLink, Zap } from 'lucide-react';
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
    <div className={`relative h-[520px] sm:h-[540px] w-full transition-all duration-700 cubic-bezier(0.4, 0, 0.2, 1) select-none will-change-transform ${
        isActive ? 'z-30 opacity-100 scale-100' : 'z-10 opacity-40 scale-90'
      }`}>
      
      {/* ⚡ OPTIMIZED OUTER GLOW */}
      {isActive && (
        <div className="absolute inset-[-1px] rounded-[16px] overflow-hidden z-0 pointer-events-none">
            <div className="absolute inset-[-150%] animate-[spin_4s_linear_infinite]"
             style={{ 
               background: `conic-gradient(from 0deg, transparent 70%, ${project.color} 90%, transparent 100%)`,
               WebkitBackfaceVisibility: 'hidden'
             }} />
        </div>
      )}

      <div className="relative h-full bg-[#030712] border border-white/10 rounded-[15px] overflow-hidden flex flex-col shadow-2xl mobile-no-blur">
        {/* HEADER */}
        <div className="flex items-center justify-between px-4 py-4 bg-[#0d111c] border-b border-white/10 shrink-0 relative">
          <div className="flex items-center gap-4">
            <div className="relative">
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 shadow-[0_0_10px_#10b981]" />
            </div>
            <div className="flex flex-col border-l-2 pl-3" style={{ borderColor: project.color }}>
              <span className="text-[10px] font-black font-mono text-white tracking-[0.2em] uppercase leading-none mb-1.5">PROJECT SOLVED</span>
              <span className="text-[8px] font-mono font-black text-cyan-400 uppercase">0x{project.id.slice(0, 4).toUpperCase()}</span>
            </div>
          </div>
        </div>

        {/* HERO AREA */}
        <div className="relative h-40 sm:h-44 shrink-0 bg-[#010409] overflow-hidden">
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `linear-gradient(to right, ${project.color}33 1px, transparent 1px), linear-gradient(to bottom, ${project.color}33 1px, transparent 1px)`, backgroundSize: '30px 30px' }} />
          <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center">
             <div className="relative z-20 md:backdrop-blur-md bg-black/60 border border-white/10 p-4 rounded-xl shadow-2xl w-[90%]">
                <GradientText colors={isActive ? ["#ffffff", project.color, "#ffffff"] : ["#475569", "#1e293b"]} className="text-base sm:text-xl font-black uppercase tracking-wider !justify-center !mx-0">
                  {project.title}
                </GradientText>
                <div className="h-[2px] w-12 mx-auto mt-3 rounded-full" style={{ backgroundColor: project.color, boxShadow: `0 0 10px ${project.color}` }} />
             </div>
          </div>
        </div>

        {/* CONTENT AREA */}
        <div className="p-5 flex flex-col flex-grow overflow-hidden bg-[#030712]">
          <p className="text-[12px] text-slate-400 leading-snug line-clamp-3 mb-6 font-medium border-l-2 pl-3" style={{ borderColor: `${project.color}44` }}>
             {project.shortDesc}
          </p>
          
          {/* 🛠️ FIXED TECH STACK: Shows everything from projectdata.js */}
          <div className="flex flex-wrap gap-2 mb-4 overflow-y-auto max-h-[100px] pr-1 custom-card-scroll">
            {project.techStack && project.techStack.map((tech, index) => {
              const techName = typeof tech === 'object' ? tech.name : tech;
              const techIcon = typeof tech === 'object' ? tech.icon : null;

              return (
                <div key={index} className="flex items-center gap-2 px-2.5 py-1 bg-white/5 border border-white/10 rounded-md hover:bg-white/10 transition-colors">
                  {techIcon ? (
                    <img src={techIcon} alt={techName} className="w-3.5 h-3.5 object-contain" />
                  ) : (
                    <div className="w-1.5 h-1.5 rounded-full" style={{ background: project.color }} />
                  )}
                  <span className="text-[9px] font-bold text-slate-200 uppercase tracking-tighter">
                    {techName}
                  </span>
                </div>
              );
            })}
          </div>

          <button onClick={() => navigate(`/project/${project.id}`)} className="mt-auto group flex items-center justify-between py-4 px-6 rounded-lg bg-white/5 border border-white/10 transition-all active:scale-95 relative z-20">
            <div className="flex items-center gap-2 relative z-10">
              <Code2 size={14} style={{ color: project.color }} />
              <span className="text-[10px] font-black tracking-[0.2em] text-white uppercase">Execute_Module</span>
            </div>
            <ExternalLink size={14} className="text-white/40" />
          </button>
        </div>
      </div>
    </div>
  );
});

const ProjectMatrix = () => {
  const slides = useMemo(() => projectsData, []);

  return (
    <div className="w-full py-12 px-0 sm:px-4 overflow-hidden relative group bg-[#010409]">
      <Swiper
        effect={'coverflow'}
        centeredSlides={true}
        loop={true}
        slidesPerView={'auto'}
        speed={600}
        grabCursor={true}
        watchSlidesProgress={true}
        touchEventsTarget="container"
        coverflowEffect={{ 
            rotate: 0, 
            stretch: 0, 
            depth: 100, 
            modifier: 1, 
            slideShadows: false 
        }}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: true }}
        modules={[EffectCoverflow, Navigation, Pagination, Autoplay]}
        className="project-swiper !pb-16 !px-4"
      >
        {slides.map((project) => (
          <SwiperSlide key={project.id} className="!w-[85vw] xs:!w-[320px] sm:!w-[400px] py-10 transform-gpu">
            {({ isActive }) => <ProjectCard project={project} isActive={isActive} />}
          </SwiperSlide>
        ))}
      </Swiper>

      <style dangerouslySetInnerHTML={{ __html: `
        .swiper-wrapper {
          transition-timing-function: cubic-bezier(0.16, 1, 0.3, 1) !important;
          will-change: transform;
          touch-action: pan-y !important; 
        }
        .swiper-slide {
           backface-visibility: hidden;
           -webkit-backface-visibility: hidden;
           transform: translateZ(0);
        }
        .custom-card-scroll::-webkit-scrollbar {
          width: 2px;
        }
        .custom-card-scroll::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 10px;
        }
        @media (max-width: 768px) {
          .mobile-no-blur {
            backdrop-filter: none !important;
            -webkit-backdrop-filter: none !important;
          }
        }
      `}} />
    </div>
  );
};

export default ProjectMatrix;
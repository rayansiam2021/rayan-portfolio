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
      
      {/* OUTER GLOW */}
      {isActive && (
        <div className="absolute inset-[-1px] rounded-[16px] overflow-hidden z-0">
            <div className="absolute inset-[-150%] animate-[spin_4s_linear_infinite]"
             style={{ background: `conic-gradient(from 0deg, transparent 70%, ${project.color} 90%, transparent 100%)` }} />
        </div>
      )}

      <div className="relative h-full bg-[#030712] border border-white/10 rounded-[15px] overflow-hidden flex flex-col shadow-2xl">
        {/* HEADER */}
        <div className="flex items-center justify-between px-4 py-4 bg-[#0d111c] border-b border-white/10 shrink-0 relative">
          <div className="flex items-center gap-4">
            <div className="relative">
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 shadow-[0_0_10px_#10b981]" />
              <div className="absolute inset-0 w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping opacity-40" />
            </div>
            <div className="flex flex-col border-l-2 pl-3" style={{ borderColor: project.color }}>
              <span className="text-[10px] font-black font-mono text-white tracking-[0.2em] uppercase leading-none mb-1.5">PROJECT SOLVED</span>
              <span className="text-[8px] font-mono font-black text-cyan-400 uppercase">0x{project.id.slice(0, 4).toUpperCase()}</span>
            </div>
          </div>
        </div>

        {/* HERO AREA */}
        <div className="relative h-40 sm:h-44 shrink-0 bg-[#010409] overflow-hidden">
          <div className="absolute inset-0 opacity-20" style={{ backgroundImage: `linear-gradient(to right, ${project.color}33 1px, transparent 1px), linear-gradient(to bottom, ${project.color}33 1px, transparent 1px)`, backgroundSize: '20px 20px' }} />
          <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center">
             <div className="relative z-20 backdrop-blur-md bg-black/60 border border-white/10 p-4 rounded-xl shadow-2xl w-[90%]">
                <GradientText colors={isActive ? ["#ffffff", project.color, "#ffffff"] : ["#475569", "#1e293b"]} className="text-base sm:text-xl font-black uppercase tracking-wider !justify-center !mx-0">
                  {project.title}
                </GradientText>
                <div className="h-[2px] w-12 mx-auto mt-3 rounded-full" style={{ backgroundColor: project.color, boxShadow: `0 0 10px ${project.color}` }} />
             </div>
          </div>
        </div>

        {/* CONTENT AREA */}
        <div className="p-5 flex flex-col flex-grow overflow-hidden bg-gradient-to-b from-[#030712] to-[#010409]">
          <p className="text-[12px] text-slate-400 leading-snug line-clamp-3 mb-6 font-medium border-l-2 pl-3" style={{ borderColor: `${project.color}44` }}>
             {project.shortDesc}
          </p>
          
          {/* COLORFUL TECH ICONS FIXED */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.techStack.slice(0, 5).map((tech, index) => (
              <div key={index} className="flex items-center gap-2 px-2.5 py-1 bg-white/5 border border-white/10 rounded-md transition-colors hover:bg-white/10">
                {tech.icon ? (
                  <img src={tech.icon} alt={tech.name} className="w-4 h-4 object-contain brightness-110" />
                ) : (
                  <div className="w-1.5 h-1.5 rounded-full" style={{ background: project.color }} />
                )}
                <span className="text-[9px] font-bold text-slate-200 uppercase tracking-tighter">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>

          <button onClick={() => navigate(`/project/${project.id}`)} className="mt-auto group flex items-center justify-between py-4 px-6 rounded-lg bg-white/5 border border-white/10 hover:border-white/20 transition-all active:scale-95 overflow-hidden relative">
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
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className="w-full py-12 px-0 sm:px-4 overflow-hidden relative group bg-[#010409]">
      <Swiper
        effect={'coverflow'}
        centeredSlides={true}
        loop={true}
        slidesPerView={'auto'}
        speed={700}
        grabCursor={true}
        watchSlidesProgress={true}
        touchEventsTarget="container"
        coverflowEffect={{ rotate: 0, stretch: 0, depth: 150, modifier: 1, slideShadows: false }}
        pagination={{ clickable: true }}
        modules={[EffectCoverflow, Navigation, Pagination, Autoplay]}
        className="project-swiper !pb-16 !px-4"
      >
        {slides.map((project) => (
          <SwiperSlide key={project.id} className="!w-[88vw] xs:!w-[340px] sm:!w-[420px] py-10 transform-gpu">
            {({ isActive }) => <ProjectCard project={project} isActive={isActive} />}
          </SwiperSlide>
        ))}
      </Swiper>

      <style>{`
        .swiper-wrapper {
          transition-timing-function: cubic-bezier(0.2, 1, 0.3, 1) !important;
          will-change: transform;
        }
        .swiper-slide {
           backface-visibility: hidden;
           -webkit-backface-visibility: hidden;
        }
        .swiper-pagination-bullet { background: rgba(255,255,255,0.1) !important; opacity: 1 !important; }
        .swiper-pagination-bullet-active { background: white !important; width: 24px !important; border-radius: 4px !important; }
      `}</style>
    </div>
  );
};

export default ProjectMatrix;
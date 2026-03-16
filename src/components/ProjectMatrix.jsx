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
    <div className={`relative h-[480px] w-full transition-all duration-500 ease-out select-none transform-gpu ${
        isActive ? 'z-30 opacity-100 scale-100' : 'z-10 opacity-40 scale-90'
      }`}>
      
      {/* GLOWING BORDER */}
      {isActive && (
        <div className="absolute inset-[-1px] rounded-[16px] overflow-hidden z-0">
           <div className="absolute inset-[-150%] animate-[spin_4s_linear_infinite]"
            style={{ background: `conic-gradient(from 0deg, transparent 70%, ${project.color} 90%, transparent 100%)` }} />
        </div>
      )}

      {/* COMPACT BODY */}
      <div className="relative h-full bg-[#030712] border border-white/10 rounded-[15px] overflow-hidden flex flex-col">
        
        {/* HEADER */}
        <div className="flex items-center justify-between px-4 py-2 bg-[#0d111c] border-b border-white/5 shrink-0">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
          </div>
          <div className="text-[8px] font-mono font-black text-slate-500 tracking-tighter uppercase">
            ID::{project.id.split('-')[0]}
          </div>
        </div>

        {/* IMAGE PREVIEW */}
        <div className="relative h-32 shrink-0 bg-black">
          <img src={project.banner} alt="" className="w-full h-full object-cover opacity-60" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#030712] to-transparent" />
          <div className="absolute bottom-3 right-3 p-2 rounded-lg bg-[#0d111c] border border-white/10" style={{ color: project.color }}>
            <Cpu size={14} />
          </div>
        </div>

        {/* CONTENT AREA */}
        <div className="p-5 flex flex-col flex-grow overflow-hidden">
          <div className="mb-2">
            <GradientText
              colors={isActive ? ["#ffffff", project.color] : ["#475569", "#1e293b"]}
              className="text-lg font-black uppercase tracking-tight !justify-start !mx-0"
            >
              {project.title}
            </GradientText>
          </div>
          
          <p className="text-[9px] font-mono font-black text-cyan-500/80 mb-3 tracking-widest uppercase">
            {project.status ? `STATUS_${project.status}` : 'STATUS_ONLINE'}
          </p>

          <p className="text-[12px] text-slate-300 leading-snug line-clamp-3 mb-4 font-medium">
             {project.shortDesc || project.blogContent.overview}
          </p>
          
          {/* DYNAMIC TECH STACK WITH COLORFUL ACCENTS */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.techStack.map((tech, index) => {
              const techName = typeof tech === 'string' ? tech : tech.name;
              const techIcon = typeof tech === 'object' ? tech.icon : null;

              return (
                <div key={index} className="flex items-center gap-1.5 px-2.5 py-1 bg-white/5 border border-white/10 rounded-md">
                  {techIcon ? (
                    <img src={techIcon} alt="" className="w-3 h-3 object-contain" />
                  ) : (
                    <div className="w-1.5 h-1.5 rounded-full" style={{ background: project.color }} />
                  )}
                  <span className="text-[10px] font-bold text-white uppercase tracking-tighter">
                    {techName}
                  </span>
                </div>
              );
            })}
          </div>

          {/* ACTION BUTTON */}
          <button 
            onClick={() => navigate(`/project/${project.id}`)}
            className="mt-auto group flex items-center justify-between py-3 px-5 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-all active:scale-95"
          >
            <div className="flex items-center gap-2">
              <Code2 size={14} style={{ color: project.color }} />
              <span className="text-[10px] font-black tracking-[0.2em] text-white">EXECUTE_ARCHIVE</span>
            </div>
            <ExternalLink size={14} className="text-white/40" />
          </button>
        </div>

        {/* COMPACT FOOTER */}
        <div className="px-4 py-2 bg-[#0d111c] border-t border-white/5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full animate-pulse bg-emerald-500" />
            <span className="text-[9px] font-mono font-bold text-slate-500">LIVE_SRC v2.0</span>
          </div>
          <Zap size={10} className="text-yellow-500" />
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
    <div className="w-full py-8 px-4 overflow-hidden relative group bg-[#010409]">
      
      {/* ARROW BUTTONS */}
      <button 
        ref={prevRef} 
        className="absolute left-10 top-1/2 -translate-y-1/2 z-50 p-4 rounded-full bg-black/80 border border-white/20 text-white/40 hover:text-white transition-all opacity-0 group-hover:opacity-100 cursor-pointer hidden md:flex"
      >
        <ChevronLeft size={28} />
      </button>
      
      <button 
        ref={nextRef} 
        className="absolute right-10 top-1/2 -translate-y-1/2 z-50 p-4 rounded-full bg-black/80 border border-white/20 text-white/40 hover:text-white transition-all opacity-0 group-hover:opacity-100 cursor-pointer hidden md:flex"
      >
        <ChevronRight size={28} />
      </button>

      <Swiper
        effect={'coverflow'}
        centeredSlides={true}
        loop={true}
        slidesPerView={'auto'}
        speed={600}
        navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
        }}
        coverflowEffect={{ rotate: 0, stretch: 0, depth: 100, modifier: 2, slideShadows: false }}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        modules={[EffectCoverflow, Navigation, Pagination, Autoplay]}
        className="project-swiper !pb-16"
      >
        {slides.map((project) => (
          <SwiperSlide key={project.id} className="!w-[300px] md:!w-[380px] py-10">
            {({ isActive }) => <ProjectCard project={project} isActive={isActive} />}
          </SwiperSlide>
        ))}
      </Swiper>

      <style>{`
        .swiper-pagination-bullet { background: rgba(255,255,255,0.1) !important; opacity: 1 !important; }
        .swiper-pagination-bullet-active { background: white !important; width: 24px !important; border-radius: 4px !important; }
      `}</style>
    </div>
  );
};

export default ProjectMatrix;
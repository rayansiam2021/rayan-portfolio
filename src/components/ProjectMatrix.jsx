import React, { useMemo } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';
import { ChevronRight, Code2, Layers, Cpu } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { projectsData } from '../data/projectsData';
import GradientText from './bits/GradientText';

// Swiper Styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

const ProjectCard = React.memo(({ project, isActive }) => {
  const navigate = useNavigate();

  return (
    <div className={`relative h-[580px] w-full transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] select-none will-change-transform ${
        isActive ? 'opacity-100 scale-100' : 'opacity-30 scale-[0.85] grayscale'
      }`}>
      
      {/* ⚡ SNAKE BORDER - Restored for Active Card */}
      {isActive && (
        <div className="absolute inset-[-1px] rounded-[24px] overflow-hidden z-0 pointer-events-none">
            <div className="absolute inset-[-150%] animate-[spin_4s_linear_infinite]"
             style={{ 
               background: `conic-gradient(from 0deg, transparent 70%, ${project.color} 90%, #fff 96%, ${project.color} 100%)`,
               WebkitBackfaceVisibility: 'hidden'
             }} />
        </div>
      )}

      <div className="relative h-full bg-[#030712] border border-white/10 rounded-[23px] overflow-hidden flex flex-col shadow-2xl transform-gpu">
        
        {/* HEADER: Restored Project ID & Status */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#0d111c] border-b border-white/5 shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full shadow-[0_0_8px_currentcolor]" style={{ backgroundColor: project.color, color: project.color }} />
            <span className="text-[10px] font-black font-mono text-slate-400 uppercase tracking-[0.2em]">System_Active</span>
          </div>
          <span className="text-[9px] font-mono font-bold text-white/20 uppercase tracking-widest">
            ID: {project.id.slice(0, 6).toUpperCase()}
          </span>
        </div>

        {/* HERO AREA: With Gradient Text and Pattern */}
        <div className="relative h-44 shrink-0 bg-[#010409] overflow-hidden">
          <div className="absolute inset-0 opacity-10" style={{ 
            backgroundImage: `linear-gradient(to right, ${project.color}33 1px, transparent 1px), linear-gradient(to bottom, ${project.color}33 1px, transparent 1px)`, 
            backgroundSize: '25px 25px' 
          }} />
          <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
              <div className="relative z-20 bg-black/40 backdrop-blur-md border border-white/5 p-4 rounded-xl w-full">
                <GradientText colors={isActive ? ["#ffffff", project.color, "#ffffff"] : ["#475569", "#1e293b"]} 
                              className="text-lg sm:text-xl font-black uppercase tracking-wider !justify-center !mx-0">
                  {project.title}
                </GradientText>
                <div className="h-[2px] w-10 mx-auto mt-3 rounded-full" style={{ backgroundColor: project.color, boxShadow: `0 0 10px ${project.color}` }} />
              </div>
          </div>
        </div>

        {/* CONTENT AREA: Restored Tech Stack with Icons */}
        <div className="p-6 flex flex-col flex-grow bg-[#030712]">
          <p className="text-[12px] text-slate-400 leading-[1.6] line-clamp-3 mb-6 font-medium border-l-2 pl-4 italic" style={{ borderColor: `${project.color}66` }}>
             {project.shortDesc}
          </p>
          
          {/* 🛠️ TECH STACK: Restored Icons & Names */}
          <div className="flex flex-wrap gap-2 mb-6 overflow-y-auto max-h-[120px] pr-2 custom-card-scroll">
            {project.techStack && project.techStack.map((tech, index) => {
              const techName = typeof tech === 'object' ? tech.name : tech;
              const techIcon = typeof tech === 'object' ? tech.icon : null;

              return (
                <div key={index} className="flex items-center gap-2 px-3 py-1.5 bg-white/[0.03] border border-white/10 rounded-lg hover:bg-white/[0.08] transition-all duration-300">
                  {techIcon ? (
                    <img src={techIcon} alt={techName} className="w-3.5 h-3.5 object-contain" />
                  ) : (
                    <Cpu size={12} style={{ color: project.color }} />
                  )}
                  <span className="text-[9px] font-black text-slate-200 uppercase tracking-tight">
                    {techName}
                  </span>
                </div>
              );
            })}
          </div>

          {/* ACTION BUTTON */}
          <button 
            onClick={() => navigate(`/project/${project.id}`)} 
            className="mt-auto group flex items-center justify-between py-4 px-6 rounded-xl bg-white/5 border border-white/10 hover:border-white/20 transition-all active:scale-95"
          >
            <div className="flex items-center gap-3 relative z-10">
              <Code2 size={16} style={{ color: project.color }} />
              <span className="text-[10px] font-black tracking-[0.2em] text-white uppercase">Initialize_Analysis</span>
            </div>
            <div className="p-1 rounded-md bg-white/5 group-hover:bg-white/10 transition-colors">
                <ChevronRight size={14} className="text-white" />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
});

const ProjectMatrix = () => {
  const slides = useMemo(() => projectsData, []);

  return (
    <section className="w-full py-24 bg-[#010409] flex flex-col items-center">
      
      {/* CENTERED HEADER */}
      <div className="mb-20 text-center">
          <h2 className="text-white font-black text-4xl md:text-6xl uppercase tracking-tighter mb-6">
            Project <span className="text-cyan-500">Matrix</span>
          </h2>
          <p className="text-slate-500 text-sm font-mono tracking-[0.3em] uppercase">Architecture_Archive_v4.0</p>
          <div className="mt-6 h-[2px] w-24 bg-gradient-to-r from-transparent via-cyan-500 to-transparent mx-auto" />
      </div>

      <Swiper
        effect={'coverflow'}
        centeredSlides={true}
        loop={true}
        slidesPerView={'auto'}
        speed={800}
        grabCursor={true}
        coverflowEffect={{ 
            rotate: 0, 
            stretch: 0, 
            depth: 100, 
            modifier: 2.5, 
            slideShadows: false 
        }}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: true }}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="project-swiper !pb-20 !px-4 w-full"
      >
        {slides.map((project) => (
          <SwiperSlide key={project.id} className="!w-[85vw] xs:!w-[340px] sm:!w-[420px] py-10 transform-gpu">
            {({ isActive }) => <ProjectCard project={project} isActive={isActive} />}
          </SwiperSlide>
        ))}
      </Swiper>

      <style dangerouslySetInnerHTML={{ __html: `
        .custom-card-scroll::-webkit-scrollbar { width: 3px; }
        .custom-card-scroll::-webkit-scrollbar-thumb { 
            background: rgba(255,255,255,0.1); 
            border-radius: 10px; 
        }
        .swiper-pagination-bullet { background: #fff !important; opacity: 0.2 !important; }
        .swiper-pagination-bullet-active { background: #06b6d4 !important; opacity: 1 !important; width: 30px !important; border-radius: 4px !important; }
        .project-swiper { overflow: visible !important; }
      `}} />
    </section>
  );
};

export default ProjectMatrix;
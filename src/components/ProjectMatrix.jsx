import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Navigation, Pagination, Autoplay } from 'swiper/modules';
import { motion } from 'framer-motion';
import { Terminal, Zap, ArrowUpRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { projectsData } from '../data/projectsData';
import GradientText from './bits/GradientText';

// Swiper Styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const ProjectCard = ({ project, isActive }) => {
  const navigate = useNavigate();

  // Simple, bug-free click handler
  const handleAction = (e) => {
    e.preventDefault();
    e.stopPropagation(); 
    navigate(`/project/${project.id}`);
  };

  return (
    <div
      className={`relative h-[530px] w-full transition-all duration-700 ${
        isActive ? 'z-30 opacity-100 scale-105' : 'z-10 opacity-30 blur-[2px] scale-90'
      }`}
    >
      {/* --- VIBRANT AURA GLOW --- */}
      {isActive && (
        <div 
          className="absolute inset-[-40px] opacity-25 blur-[60px] pointer-events-none rounded-full"
          style={{ background: project.color }}
        />
      )}

      <div className="relative h-full w-full">
        
        {/* --- SPINNING BORDER LINE --- */}
        {isActive && (
          <div className="absolute inset-[-2px] rounded-[26px] overflow-hidden z-0">
             <div 
              className="absolute inset-[-150%] animate-[spin_4s_linear_infinite]"
              style={{
                background: `conic-gradient(from 0deg, transparent 60%, ${project.color} 80%, transparent 100%)`
              }}
             />
          </div>
        )}

        {/* --- MAIN CARD BODY (2D ONLY) --- */}
        <div className={`relative h-full bg-[#0b1222]/98 border rounded-[24px] overflow-hidden flex flex-col transition-all duration-700 ${
          isActive ? 'border-white/20 shadow-[0_20px_50px_rgba(0,0,0,0.8)]' : 'border-white/5'
        }`}>
          
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4 bg-white/5 border-b border-white/5">
            <div className="flex gap-2">
              <div className={`w-2 h-2 rounded-full bg-red-500/80 ${isActive && 'animate-pulse shadow-[0_0_8px_red]'}`} />
              <div className={`w-2 h-2 rounded-full bg-green-500/80 ${isActive && 'shadow-[0_0_8px_green]'}`} />
            </div>
            <span className="text-[10px] font-mono tracking-[0.3em] text-slate-500">ID::{project.id.split('-')[0]}</span>
          </div>

          {/* Banner */}
          <div className="relative h-44 shrink-0 overflow-hidden">
            <img 
              src={project.banner} 
              className={`w-full h-full object-cover transition-all duration-1000 ${isActive ? 'opacity-90 scale-100' : 'opacity-10'}`} 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0b1222] via-transparent" />
          </div>

          {/* Content Area */}
          <div className="p-8 flex flex-col flex-grow">
            <GradientText
              colors={isActive ? [project.color, "#ffffff", project.color] : ["#334155", "#0f172a"]}
              className="text-2xl font-black uppercase mb-3 tracking-tighter"
            >
              {project.title}
            </GradientText>
            
            <p className={`text-sm line-clamp-3 mb-8 font-light leading-relaxed ${isActive ? 'text-slate-400' : 'text-slate-800'}`}>
              {project.shortDesc || project.blogContent.overview}
            </p>

            {/* BUTTON: Solid Hitbox without 3D interference */}
            <div className="mt-auto">
              <button 
                onClick={handleAction}
                className="group relative w-full inline-flex items-center justify-center gap-3 text-[11px] font-bold tracking-widest uppercase py-4 px-6 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-all active:scale-95 overflow-hidden"
                style={{ color: isActive ? project.color : 'transparent' }}
              >
                {/* Internal Hover Glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity" style={{ background: project.color }} />
                
                <Terminal size={14} className="group-hover:rotate-12 transition-transform" /> 
                Open Project Data 
                <ArrowUpRight size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Footer */}
          <div className="px-7 py-4 bg-white/[0.02] border-t border-white/5 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className={`w-1.5 h-1.5 rounded-full ${isActive ? 'animate-pulse' : 'opacity-10'}`} style={{ backgroundColor: project.color }} />
              <span className="text-[9px] font-mono uppercase text-slate-500">Node::{project.id.split('-')[0]}</span>
            </div>
            <Zap size={14} className={isActive ? 'opacity-100' : 'opacity-0'} style={{ color: project.color }} />
          </div>
        </div>
      </div>
    </div>
  );
};

const ProjectMatrix = () => {
  return (
    <div className="w-full py-12 overflow-hidden">
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={'auto'}
        slideToClickedSlide={true}
        coverflowEffect={{ 
          rotate: 0, 
          stretch: -15, 
          depth: 150, 
          modifier: 1, 
          slideShadows: false 
        }}
        autoplay={{ delay: 6000, disableOnInteraction: true }}
        navigation={true}
        pagination={{ clickable: true }}
        modules={[EffectCoverflow, Navigation, Pagination, Autoplay]}
        className="project-swiper !pb-28"
      >
        {projectsData.map((project) => (
          <SwiperSlide key={project.id} className="!w-[340px] md:!w-[400px] px-2 py-12">
            {({ isActive }) => <ProjectCard project={project} isActive={isActive} />}
          </SwiperSlide>
        ))}
      </Swiper>

      <style jsx>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        :global(.swiper-button-next), :global(.swiper-button-prev) {
          z-index: 100 !important;
          color: rgba(255,255,255,0.1);
        }
        :global(.swiper-button-next:hover), :global(.swiper-button-prev:hover) {
          color: white;
        }
      `}</style>
    </div>
  );
};

export default ProjectMatrix;
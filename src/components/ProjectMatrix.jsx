import React from 'react';
import { ExternalLink, Github, Zap, Terminal, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom'; // 1. Import Link
import { projectsData } from '../data/projectsData'; // 2. Import your "Brain" file
import ElectricBorder from './bits/ElectricBorder';
import GradientText from './bits/GradientText';

const ProjectMatrix = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto px-4 py-20">
      {/* 3. Map over projectsData instead of a local array */}
      {projectsData.map((project, index) => (
        <div key={project.id} className="group relative">
          
          {/* Ambient Glow */}
          <div 
            className="absolute -inset-2 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none"
            style={{ backgroundColor: `${project.color || '#00f2ff'}10` }}
          ></div>
          
          <ElectricBorder 
            color={project.color || '#00f2ff'} 
            speed={1.2} 
            chaos={0.02} 
            borderRadius={16}
          >
            <div className="relative bg-[#0b1222]/90 backdrop-blur-xl border border-white/5 rounded-2xl p-8 transition-all duration-500 h-full flex flex-col">
              
              {/* Header Info */}
              <div className="flex justify-between items-center mb-6">
                <div className="flex items-center gap-2">
                  <div 
                    className="w-2 h-2 rounded-full animate-pulse" 
                    style={{ backgroundColor: project.color || '#00f2ff' }}
                  ></div>
                  <span className="text-[10px] font-black tracking-[0.3em] text-slate-500 uppercase">
                    {project.category}
                  </span>
                </div>
                <div className="flex gap-4 text-slate-500">
                  <Github size={18} className="hover:text-white cursor-pointer transition-colors" />
                  {/* 4. Functional Link to the dynamic page */}
                  <Link to={`/project/${project.id}`}>
                    <ExternalLink size={18} className="hover:text-cyan-400 cursor-pointer transition-colors" />
                  </Link>
                </div>
              </div>

              {/* Animated Title */}
              <div className="mb-4">
                <GradientText
                  colors={project.colorArray || ["#00f2ff", "#ffffff"]}
                  animationSpeed={8}
                  showBorder={false}
                  className="text-2xl font-bold !justify-start !mx-0"
                >
                  {project.title}
                </GradientText>
              </div>
              
              <p className="text-sm text-slate-400 leading-relaxed mb-6 flex-grow">
                {project.shortDesc}
              </p>

              {/* 5. View Project Button - The "Call to Action" */}
              <div className="mb-8">
                 <Link 
                   to={`/project/${project.id}`}
                   className="group/btn inline-flex items-center gap-2 text-[11px] font-black tracking-widest text-cyan-400 uppercase hover:text-white transition-all"
                 >
                   Open Dossier 
                   <ArrowUpRight size={14} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                 </Link>
              </div>

              {/* Footer System Status */}
              <div className="pt-5 flex items-center justify-between border-t border-white/5">
                <div className="flex items-center gap-2">
                  <Terminal size={12} style={{ color: project.color || '#00f2ff' }} />
                  <span className="text-[10px] text-slate-500 font-mono tracking-tighter">
                    REF_ID::<span style={{ color: `${project.color || '#00f2ff'}cc` }}>{project.id.toUpperCase()}</span>
                  </span>
                </div>
                <Zap 
                  size={16} 
                  style={{ color: project.color || '#00f2ff' }} 
                  className="opacity-20 group-hover:opacity-100 transition-all duration-500" 
                />
              </div>
            </div>
          </ElectricBorder>
        </div>
      ))}
    </div>
  );
};

export default ProjectMatrix;
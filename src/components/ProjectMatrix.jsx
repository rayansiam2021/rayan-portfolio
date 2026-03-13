import React from 'react';
import { ExternalLink, Github, Zap, Terminal } from 'lucide-react';
import ElectricBorder from './bits/ElectricBorder';
import GradientText from './bits/GradientText';

const projects = [
  {
    title: "SatSport Exchange",
    category: "Web Development",
    desc: "A high-performance sports betting exchange platform with real-time API integration for cricket and football markets.",
    tags: ["Angular", "FastAPI", "API"],
    status: "DEPLOYED",
    color: "#00f2ff", // Cyan
    colorArray: ["#00f2ff", "#ffffff", "#00d4ff", "#3b82f6", "#00f2ff"]
  },
  {
    title: "IoT Smart Car",
    category: "Embedded Systems",
    desc: "Autonomous vehicle prototype featuring obstacle avoidance, real-time sensor processing, and firmware logic.",
    tags: ["C++", "Arduino", "Sensors"],
    status: "PROTOTYPE",
    color: "#fb923c", // Orange
    colorArray: ["#fb923c", "#ffffff", "#ffedd5", "#f97316", "#fb923c"]
  },
  {
    title: "Multi Drop Fusion",
    category: "E-Commerce",
    desc: "A retail powerhouse specializing in mobile tech accessories with a high-conversion SEO architecture.",
    tags: ["WooCommerce", "SEO", "Marketing"],
    status: "LIVE",
    color: "#10b981", // Green/Emerald
    colorArray: ["#10b981", "#ffffff", "#d1fae5", "#059669", "#10b981"]
  },
  {
    title: "AI Content Guard",
    category: "Full-Stack AI",
    desc: "Enterprise-grade plagiarism and AI detection system utilizing custom FastAPI logic and Python models.",
    tags: ["FastAPI", "Python", "React"],
    status: "STABLE",
    color: "#ef4444", // Red
    colorArray: ["#ef4444", "#ffffff", "#fee2e2", "#b91c1c", "#ef4444"]
  }
];

const ProjectMatrix = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto px-4 py-20">
      {projects.map((project, index) => (
        <div key={index} className="group relative">
          
          {/* Ambient Glow matching the specific project color */}
          <div 
            className="absolute -inset-2 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none"
            style={{ backgroundColor: `${project.color}10` }}
          ></div>
          
          <ElectricBorder 
            color={project.color} 
            speed={1.2} 
            chaos={0.02} 
            borderRadius={16}
          >
            <div className="relative bg-[#0b1222]/90 backdrop-blur-xl border border-white/5 rounded-2xl p-8 transition-all duration-500 h-full flex flex-col">
              
              {/* Header Info */}
              <div className="flex justify-between items-center mb-6">
                <div className="flex items-center gap-2">
                  <div 
                    className="w-2 h-2 rounded-full animate-pulse shadow-[0_0_8px_rgba(255,255,255,0.5)]" 
                    style={{ backgroundColor: project.color }}
                  ></div>
                  <span className="text-[10px] font-black tracking-[0.3em] text-slate-500 uppercase">
                    {project.category}
                  </span>
                </div>
                <div className="flex gap-4 text-slate-500">
                  <Github size={18} className="hover:text-white cursor-pointer transition-colors" />
                  <ExternalLink size={18} className="hover:text-cyan-400 cursor-pointer transition-colors" />
                </div>
              </div>

              {/* Animated Title with Dynamic Gradient */}
              <div className="mb-4">
                <GradientText
                  colors={project.colorArray}
                  animationSpeed={8}
                  showBorder={false}
                  className="text-2xl font-bold !justify-start !mx-0"
                >
                  {project.title}
                </GradientText>
              </div>
              
              <p className="text-sm text-slate-400 leading-relaxed mb-6 flex-grow">
                {project.desc}
              </p>

              {/* Tech Tags */}
              <div className="flex flex-wrap gap-2 mb-8">
                {project.tags.map((tag, i) => (
                  <span 
                    key={i} 
                    className="text-[9px] font-mono font-bold bg-white/5 text-slate-400 px-3 py-1 rounded-full border border-white/5 group-hover:border-white/20 transition-all"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Footer System Status */}
              <div className="pt-5 flex items-center justify-between border-t border-white/5">
                <div className="flex items-center gap-2">
                  <Terminal size={12} style={{ color: project.color }} />
                  <span className="text-[10px] text-slate-500 font-mono tracking-tighter">
                    SYSTEM::AUTO_REF_ID_<span style={{ color: `${project.color}cc` }}>{project.status}</span>
                  </span>
                </div>
                <div className="relative">
                   <Zap 
                     size={16} 
                     style={{ color: project.color }} 
                     className="opacity-20 group-hover:opacity-100 group-hover:animate-bounce transition-all duration-500" 
                   />
                   <div 
                     className="absolute inset-0 blur-lg opacity-0 group-hover:opacity-40 rounded-full transition-opacity"
                     style={{ backgroundColor: project.color }}
                   ></div>
                </div>
              </div>
            </div>
          </ElectricBorder>
        </div>
      ))}
    </div>
  );
};

export default ProjectMatrix;
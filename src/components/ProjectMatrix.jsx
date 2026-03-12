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
    status: "DEPLOYED"
  },
  {
    title: "Multi Drop Fusion",
    category: "E-Commerce",
    desc: "A retail powerhouse specializing in mobile tech accessories with a high-conversion SEO architecture.",
    tags: ["WooCommerce", "SEO", "Marketing"],
    status: "LIVE"
  },
  {
    title: "AI Content Guard",
    category: "Full-Stack AI",
    desc: "Enterprise-grade plagiarism and AI detection system utilizing custom FastAPI logic and Python models.",
    tags: ["FastAPI", "Python", "React"],
    status: "STABLE"
  },
  {
    title: "IoT Smart Car",
    category: "Embedded Systems",
    desc: "Autonomous vehicle prototype featuring obstacle avoidance, real-time sensor processing, and firmware logic.",
    tags: ["C++", "Arduino", "Sensors"],
    status: "PROTOTYPE"
  }
];

const ProjectMatrix = () => {
  const electricColors = ["#00f2ff", "#ffffff", "#00d4ff", "#3b82f6", "#00f2ff"];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto px-4 py-20">
      {projects.map((project, index) => (
        <div key={index} className="group relative">
          
          {/* Subtle outer glow that pulses with the card */}
          <div className="absolute -inset-2 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition duration-500"></div>
          
          {/* ElectricBorder with slightly tuned "chaos" for smoother lines */}
          <ElectricBorder 
            color="#00f2ff" 
            speed={1.8} // Faster speed feels more "electric"
            chaos={0.15} // Reduced from 0.2 for less irregular curves
            borderRadius={16}
          >
            <div className="relative bg-[#0b1222]/90 backdrop-blur-xl border border-white/5 rounded-2xl p-8 transition-all duration-500 h-full">
              
              {/* Header Info */}
              <div className="flex justify-between items-center mb-6">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse"></div>
                  <span className="text-[10px] font-black tracking-[0.3em] text-slate-500 uppercase">
                    {project.category}
                  </span>
                </div>
                <div className="flex gap-4 text-slate-500">
                  <Github size={18} className="hover:text-white cursor-pointer transition-colors" />
                  <ExternalLink size={18} className="hover:text-cyan-400 cursor-pointer transition-colors" />
                </div>
              </div>

              {/* Animated Title */}
              <div className="mb-4">
                <GradientText
                  colors={electricColors}
                  animationSpeed={8}
                  showBorder={false}
                  className="text-2xl font-bold !justify-start !mx-0"
                >
                  {project.title}
                </GradientText>
              </div>
              
              <p className="text-sm text-slate-400 leading-relaxed mb-6 h-16">
                {project.desc}
              </p>

              {/* Tech Tags - Clean Rounded Pills */}
              <div className="flex flex-wrap gap-2 mb-8">
                {project.tags.map((tag, i) => (
                  <span key={i} className="text-[9px] font-mono font-bold bg-cyan-500/5 text-cyan-400/80 px-3 py-1 rounded-full border border-cyan-500/10 group-hover:border-cyan-500/30 transition-all">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Footer System Status */}
              <div className="pt-5 flex items-center justify-between border-t border-white/5">
                <div className="flex items-center gap-2">
                  <Terminal size={12} className="text-cyan-500" />
                  <span className="text-[10px] text-slate-500 font-mono tracking-tighter">
                    SYSTEM::AUTO_REF_ID_<span className="text-cyan-500/50">{project.status}</span>
                  </span>
                </div>
                <div className="relative">
                   <Zap size={16} className="text-cyan-400 opacity-20 group-hover:opacity-100 group-hover:animate-bounce transition-all duration-500" />
                   <div className="absolute inset-0 bg-cyan-400 blur-lg opacity-0 group-hover:opacity-40 rounded-full transition-opacity"></div>
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
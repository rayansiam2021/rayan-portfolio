import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { 
  Terminal, Cpu, Globe, Database, Layers, 
  Code2, Zap, ShoppingCart, Settings2, Boxes, Share2 
} from 'lucide-react';
import GradientText from './bits/GradientText';

const SkillTerminal = () => {
  const [activeTab, setActiveTab] = useState('frontend');

  const skillData = useMemo(() => ({
    frontend: [
      { name: "React + Vite", label: "MODERN_SPA", icon: <Boxes size={18} className="text-cyan-400" /> },
      { name: "HTML5 & CSS3", label: "STRUCTURE", icon: <Code2 size={18} className="text-orange-400" /> },
      { name: "Tailwind CSS", label: "STYLING_JIT", icon: <Layers size={18} className="text-sky-400" /> },
      { name: "Responsive Design", label: "ADAPTIVE_UX", icon: <Globe size={18} className="text-slate-400" /> },
    ],
    backend: [
      { name: "Python FastAPI", label: "ASYNC_PYTHON", icon: <Zap size={18} className="text-yellow-400" /> },
      { name: "PHP", label: "SERVER_LOGIC", icon: <Code2 size={18} className="text-indigo-400" /> },
      { name: "REST API", label: "INTEGRATION", icon: <Settings2 size={18} className="text-cyan-400" /> },
      { name: "MySQL & SQLite", label: "DATABASE", icon: <Database size={18} className="text-emerald-400" /> },
    ],
    iot_hardware: [
      { name: "Arduino IDE", label: "C++_FIRMWARE", icon: <Cpu size={18} className="text-orange-400" /> },
      { name: "ESP32", label: "IOT_CORE", icon: <Zap size={18} className="text-blue-400" /> },
      { name: "Sensor & Hardware", label: "PROTOTYPING", icon: <Settings2 size={18} className="text-red-400" /> },
      { name: "Microcontrollers", label: "I/O_LOGIC", icon: <Boxes size={18} className="text-amber-400" /> },
    ],
    cms_seo: [
      { name: "WordPress", label: "CMS_CUSTOM", icon: <Globe size={18} className="text-blue-500" /> },
      { name: "WooCommerce", label: "ECOMMERCE", icon: <ShoppingCart size={18} className="text-green-500" /> },
      { name: "SEO Optimization", label: "MARKETING", icon: <Zap size={18} className="text-lime-400" /> },
      { name: "Deployment", label: "PRODUCTION", icon: <Layers size={18} className="text-purple-400" /> },
    ],
    tools: [
      { name: "Git", label: "VERSION_CONTROL", icon: <Share2 size={18} className="text-orange-500" /> },
      { name: "XAMPP", label: "LOCAL_SERVER", icon: <Settings2 size={18} className="text-blue-400" /> },
      { name: "Web Hosting", label: "DEPLOYMENT", icon: <Globe size={18} className="text-cyan-500" /> },
    ]
  }), []);

  return (
    <div className="w-full max-w-4xl mx-auto font-mono relative">
      
      {/* 🎯 CUSTOM HEADER INTEGRATION */}
      
                    <motion.div 
                           initial={{ opacity: 0, y: 20 }}
                           whileInView={{ opacity: 1, y: 0 }}
                           viewport={{ once: true }}
                           className="mb-8 md:mb-10 text-center w-full flex flex-col items-center"
                         >
                             <GradientText
                                                   colors={["#00f2ff", "#ffffff", "#00d4ff", "#3b82f6", "#00f2ff"]}
                                                   className="text-5xl md:text-4xl font-black uppercase tracking-tighter"
                                                 >
                                                   CAPABILITIES
                                                 </GradientText>
                             <p className="text-slate-400 text-sm md:text-base font-light leading-relaxed max-w-[500px]">
                                               Below is a list of the tech stack that I have used to solve problems across a 
          <span className="text-cyan-400 font-bold"> 3-year development cycle </span> 
           while being in my university and through freelance.
                             </p>
                             <div className="mt-4 h-[1px] w-16 bg-cyan-500/50 rounded-full" />
                         </motion.div>
      {/* TERMINAL OUTER FRAME */}
      <div className="relative p-[1px] md:p-[2.5px] rounded-[24px] overflow-hidden group smooth-gpu-layer">
        
        {/* CSS INJECTION FOR SYNCED SPIN */}
        <style dangerouslySetInnerHTML={{ __html: `
          @keyframes terminal-snake-spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          .terminal-spin-layer {
            animation: terminal-snake-spin 5s linear infinite !important;
            will-change: transform;
          }
          @media (max-width: 768px) {
            .mobile-terminal-patch {
              backdrop-filter: none !important;
              background-color: #0b1222 !important;
            }
            .terminal-spin-layer { filter: none !important; }
          }
        `}} />
        
        {/* ⚡ SPINNING BORDER */}
        <div className="absolute inset-[-150%] terminal-spin-layer pointer-events-none">
          <div 
            className="w-full h-full"
            style={{ 
              background: `conic-gradient(from 0deg, transparent 70%, #22d3ee 85%, #fff 95%, #22d3ee 100%)`,
            }} 
          />
        </div>

        {/* TERMINAL INNER CONTENT */}
        <div className="relative mobile-terminal-patch bg-[#0b1222]/98 backdrop-blur-2xl rounded-[22px] overflow-hidden z-10 border border-white/5 shadow-2xl">
          
          {/* Header Bar */}
          <div className="bg-slate-800/40 px-6 py-4 flex items-center justify-between border-b border-white/5">
            <div className="flex items-center gap-4">
              <div className="flex gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
              </div>
              <div className="h-4 w-[1px] bg-white/10 mx-1 hidden md:block" />
              <Terminal size={12} className="text-cyan-400/50 hidden md:block" />
              <span className="text-[9px] md:text-[10px] font-black text-slate-500 tracking-[0.3em] uppercase">
                SYSTEM_SKILL_ARCHIVE // V2.4.8
              </span>
            </div>
          </div>

          {/* Tab Navigation */}
          <div className="flex bg-slate-900/40 border-b border-white/5 flex-wrap">
            {Object.keys(skillData).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex-1 min-w-[100px] md:min-w-[120px] py-4 text-[9px] md:text-[10px] font-black uppercase tracking-widest transition-all relative ${
                  activeTab === tab 
                  ? 'text-cyan-400 bg-cyan-500/5' 
                  : 'text-slate-500 hover:text-slate-300'
                }`}
              >
                {tab.replace('_', ' ')}
                {activeTab === tab && (
                  <motion.div 
                    layoutId="activeTab" 
                    className="absolute bottom-0 left-0 w-full h-[2px] bg-cyan-400 shadow-[0_0_15px_#00f2ff]" 
                  />
                )}
              </button>
            ))}
          </div>

          {/* Grid Body */}
          <div className="p-6 md:p-10 min-h-[380px] bg-black/20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {skillData[activeTab].map((skill, index) => (
                <div 
                  key={index} 
                  className="group/item flex items-center justify-between p-5 bg-white/[0.02] border border-white/5 rounded-2xl transition-all duration-300 hover:bg-white/[0.05] hover:border-cyan-500/20"
                >
                  <div className="flex items-center gap-5">
                    <div className="p-2.5 bg-slate-900/80 rounded-xl border border-white/5 group-hover/item:border-cyan-500/30 transition-colors">
                      {skill.icon}
                    </div>
                    <div>
                      <h4 className="text-white text-sm font-bold tracking-tight">{skill.name}</h4>
                      <p className="text-[9px] font-black text-slate-500 uppercase mt-1 tracking-wider">{skill.label}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Footer CLI */}
            <div className="mt-12 flex items-center gap-3 border-t border-white/5 pt-8">
              <span className="text-cyan-500 font-bold text-sm">rayan@dev:~$</span>
              <span className="text-slate-400 text-sm font-mono tracking-tight">fetch --capabilities --full</span>
              <span className="w-2 h-5 bg-cyan-400 animate-pulse shadow-[0_0_10px_#22d3ee]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillTerminal;
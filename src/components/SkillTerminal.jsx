import React, { useState, useMemo } from 'react';
import { 
  Terminal, Cpu, Globe, Database, Layers, 
  Code2, Zap, ShoppingCart, Settings2, Boxes, Share2 
} from 'lucide-react';

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
    <div className="mt-16 w-full max-w-4xl mx-auto font-mono relative p-[1px] md:p-[2px] rounded-[24px] overflow-hidden group smooth-gpu-layer">
      {/* 🔮 PERFORMANCE PATCH INJECTION */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes force-spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .snake-spinning-layer {
          animation: force-spin 4s linear infinite !important;
          will-change: transform;
        }
        /* Mobile Performance: Remove blurs and simplify shadows */
        @media (max-width: 768px) {
          .mobile-optimized-bg {
            backdrop-filter: none !important;
            -webkit-backdrop-filter: none !important;
            background-color: #0b1222 !important;
          }
          .snake-spinning-layer {
            filter: none !important; /* Rotation + Filter = Mobile Lag */
          }
        }
      `}} />
      
      {/* ⚡ THE SPINNING SNAKE - Optimized Inset */}
      <div 
        className="absolute inset-[-150%] snake-spinning-layer pointer-events-none"
        style={{ 
          background: `conic-gradient(from 0deg, transparent 70%, #00f2ff 85%, #fff 95%, #00f2ff 100%)`,
          zIndex: 0,
          WebkitBackfaceVisibility: 'hidden'
        }}
      />

      {/* TERMINAL CONTENT */}
      <div className="relative mobile-optimized-bg bg-[#0b1222]/98 backdrop-blur-2xl rounded-[22px] overflow-hidden z-10 shadow-2xl border border-white/5">
        
        {/* Top Header Bar */}
        <div className="bg-slate-800/40 px-6 py-4 flex items-center justify-between border-b border-white/5">
          <div className="flex items-center gap-4">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
              <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
              <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
            </div>
            <div className="h-4 w-[1px] bg-white/10 mx-1 hidden md:block" />
            <Terminal size={14} className="text-cyan-400/70 hidden md:block" />
            <span className="text-[9px] md:text-[10px] font-black text-slate-400 tracking-[0.2em] md:tracking-[0.3em] uppercase">
              RAYAN_SKILL_ARCHIVE // V2.4
            </span>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex bg-slate-900/60 border-b border-white/5 flex-wrap">
          {Object.keys(skillData).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-1 min-w-[100px] md:min-w-[120px] py-3 md:py-4 text-[9px] md:text-[10px] font-black uppercase tracking-widest transition-all relative ${
                activeTab === tab 
                ? 'text-cyan-400 bg-cyan-500/5' 
                : 'text-slate-500'
              }`}
            >
              {tab.replace('_', ' ')}
              {activeTab === tab && (
                <div className="absolute bottom-0 left-0 w-full h-[2px] bg-cyan-400 shadow-[0_0_15px_#00f2ff]" />
              )}
            </button>
          ))}
        </div>

        {/* Grid Body */}
        <div className="p-5 md:p-8 min-h-[340px] md:min-h-[360px] bg-black/20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
            {skillData[activeTab].map((skill, index) => (
              <div 
                key={index} 
                className="group/item flex items-center justify-between p-4 md:p-5 bg-white/[0.03] border border-white/5 rounded-2xl transition-all duration-300 md:hover:bg-white/[0.07] md:hover:border-cyan-500/30 md:hover:-translate-y-1"
              >
                <div className="flex items-center gap-4 md:gap-5">
                  <div className="p-2 bg-slate-900/50 rounded-lg md:group-hover/item:scale-110 transition-transform">
                    {skill.icon}
                  </div>
                  <div>
                    <h4 className="text-white text-xs md:text-sm font-bold tracking-tight">{skill.name}</h4>
                    <p className="text-[8px] md:text-[9px] font-black text-slate-500 uppercase mt-0.5">{skill.label}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Footer CLI Prompt */}
          <div className="mt-8 md:mt-12 flex items-center gap-3 border-t border-white/5 pt-6 md:pt-8">
            <span className="text-cyan-500 font-bold text-xs md:text-sm">rayan@dev:~$</span>
            <span className="text-slate-400 text-xs md:text-sm font-mono tracking-tight">fetch --skills --detailed</span>
            <span className="w-2.5 h-5 md:h-6 bg-cyan-400 animate-pulse shadow-[0_0_10px_#00f2ff]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillTerminal;
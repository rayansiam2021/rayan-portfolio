import { useState } from 'react';
import { 
  Terminal, Cpu, Globe, Database, Layers, 
  Code2, Zap, ShoppingCart, Settings2, Boxes, Share2
} from 'lucide-react';
import ElectricBorder from './bits/ElectricBorder';

const SkillTerminal = () => {
  const [activeTab, setActiveTab] = useState('frontend');

  const skillData = {
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
  };

  return (
    <div className="mt-8 w-full max-w-3xl mx-auto font-mono relative">
      <ElectricBorder color="#00f2ff" chaos={0.05} speed={1} borderRadius={20}>
        <div className="bg-[#0b1222] rounded-[20px] overflow-hidden border border-slate-800 shadow-2xl relative">
          
          {/* Header Bar */}
          <div className="bg-slate-800/80 px-5 py-4 flex items-center justify-between border-b border-slate-700/50 relative z-10">
            <div className="flex items-center gap-3">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
              </div>
              <div className="h-4 w-[1px] bg-slate-700 mx-1"></div>
              <Terminal size={14} className="text-slate-400" />
              <span className="text-[10px] font-black text-slate-400 tracking-[0.2em] uppercase">
                RAYAN_SKILL_ARCHIVE // V2.0
              </span>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex bg-slate-900/40 border-b border-slate-800 relative z-[100] flex-wrap">
            {Object.keys(skillData).map((tab) => (
              <button
                key={tab}
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  setActiveTab(tab);
                }}
                className={`flex-1 min-w-[100px] py-4 text-[10px] font-black uppercase tracking-widest transition-all relative cursor-pointer pointer-events-auto ${
                  activeTab === tab 
                  ? 'text-white bg-cyan-500/10' 
                  : 'text-slate-500 hover:text-slate-300'
                }`}
              >
                {tab.replace('_', ' ')}
                {activeTab === tab && (
                  <div className="absolute bottom-0 left-0 w-full h-[2px] bg-cyan-400 shadow-[0_0_10px_#00f2ff]"></div>
                )}
              </button>
            ))}
          </div>

          {/* Terminal Body */}
          <div className="p-8 min-h-[320px] bg-black/40 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {skillData[activeTab].map((skill, index) => (
                <div 
                  key={index} 
                  className="group flex items-center justify-between p-4 bg-slate-800/20 border border-slate-700/30 rounded-xl hover:border-cyan-500/40 transition-all duration-300"
                >
                  <div className="flex items-center gap-4">
                    {skill.icon}
                    <span className="text-white text-sm font-bold">{skill.name}</span>
                  </div>
                  <span className="text-[9px] font-black text-slate-500 uppercase">{skill.label}</span>
                </div>
              ))}
            </div>

            {/* Footer Prompt */}
            <div className="mt-12 flex items-center gap-3 border-t border-slate-800/50 pt-6">
              <span className="text-cyan-500 font-bold text-sm">rayan@dev:~$</span>
              <span className="text-slate-400 text-sm font-mono tracking-tight">fetch --skills --detailed</span>
              <span className="w-2 h-5 bg-cyan-400 animate-pulse"></span>
            </div>
          </div>

          {/* Overlays */}
          <div className="absolute inset-0 pointer-events-none z-50 overflow-hidden">
          </div>
        </div>
      </ElectricBorder>
    </div>
  );
};

export default SkillTerminal;
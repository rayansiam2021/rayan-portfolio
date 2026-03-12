import { useState } from 'react';
import { 
  Terminal, Cpu, Globe, Database, Layers, 
  Code2, Zap, ShoppingCart, Settings2, Boxes
} from 'lucide-react';
import ElectricBorder from './bits/ElectricBorder';

const SkillTerminal = () => {
  const [activeTab, setActiveTab] = useState('backend');

  const skillData = {
    backend: [
      { name: "Python FastAPI", label: "ASYNCHRONOUS", icon: <Zap size={18} className="text-yellow-400" /> },
      { name: "PHP Server-side", label: "SCRIPTER", icon: <Code2 size={18} className="text-indigo-400" /> },
      { name: "MySQL & SQLite", label: "RELATIONAL_DB", icon: <Database size={18} className="text-emerald-400" /> },
      { name: "RESTful APIs", label: "ARCHITECTURE", icon: <Settings2 size={18} className="text-cyan-400" /> },
    ],
    frontend: [
      { name: "React + Vite", label: "VIRTUAL_DOM", icon: <Boxes size={18} className="text-cyan-400" /> },
      { name: "Tailwind CSS v4", label: "JIT_ENGINE", icon: <Layers size={18} className="text-sky-400" /> },
      { name: "JavaScript ES6+", label: "LOGIC_CORE", icon: <Code2 size={18} className="text-yellow-400" /> },
      { name: "ReactBits Motion", label: "UI_ANIMATION", icon: <Zap size={18} className="text-pink-400" /> },
      { name: "Structure/Raw Code", label: "DOM_SKELETON", icon: <Globe size={18} className="text-slate-400" /> },
    ],
    iot_hardware: [
      { name: "C++ (Arduino IDE)", label: "FIRMWARE_LOGIC", icon: <Cpu size={18} className="text-orange-400" /> },
      { name: "Sensor Integration", label: "DATA_ACQUISITION", icon: <Settings2 size={18} className="text-red-400" /> },
      { name: "Microcontrollers", label: "HARDWARE_IO", icon: <Boxes size={18} className="text-amber-400" /> },
    ],
    CMS: [
      { name: "WordPress & Woocommerce", label: "ECOMMERCE_SOLUTION", icon: <ShoppingCart size={18} className="text-blue-500" /> },
      { name: "Full Website Build", label: "DEPLOYMENT", icon: <Globe size={18} className="text-green-400" /> },
      { name: "SEO Optimization", label: "MARKETING_LOGIC", icon: <Zap size={18} className="text-lime-400" /> },
    ]
  };

  {/* ... keep your imports and skillData the same ... */}

return (
  <div className="mt-8 w-full max-w-3xl mx-auto font-mono relative">
    <ElectricBorder color="#00f2ff" chaos={0.05} speed={1} borderRadius={20}>
      <div className="bg-[#0b1222] rounded-[20px] overflow-hidden border border-slate-800 shadow-2xl relative">
        
        {/* 1. Header Bar */}
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

        {/* 2. Navigation - ADDED z-[100] and relative to force it to the front */}
        <div className="flex bg-slate-900/40 border-b border-slate-800 relative z-[100]">
          {Object.keys(skillData).map((tab) => (
            <button
              key={tab}
              type="button"
              onClick={(e) => {
                e.preventDefault();
                setActiveTab(tab);
              }}
              // pointer-events-auto ensures the button remains clickable
              className={`flex-1 py-4 text-[11px] font-black uppercase tracking-widest transition-all relative cursor-pointer pointer-events-auto ${
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

        {/* 3. Terminal Body */}
        <div className="p-8 min-h-[320px] bg-black/40 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {skillData[activeTab].map((skill, index) => (
              <div 
                key={index} 
                className="group flex items-center justify-between p-4 bg-slate-800/20 border border-slate-700/30 rounded-xl hover:border-cyan-500/40 transition-all duration-300"
              >
                <div className="flex items-center gap-4">
                  {skill.icon}
                  <span className="text-white text-base font-bold">{skill.name}</span>
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

        {/* 4. OVERLAYS - Ensure these have pointer-events-none */}
        <div className="absolute inset-0 pointer-events-none z-50 overflow-hidden">
             {/* This is where your scanning line animation lives in Home.jsx or here */}
             {/* If the scanning line is in Home.jsx, ensure it also has pointer-events-none */}
        </div>
      </div>
    </ElectricBorder>
  </div>
);
};

export default SkillTerminal;
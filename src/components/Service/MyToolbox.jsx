import React from 'react';
import ElectricBorder from '../bits/ElectricBorder';

const MyToolbox = () => {
  const tools = [
    "React.js", "FastAPI", "Python", "PHP", "MySQL", 
    "Tailwind", "WordPress", "Dokan", "Shopify", "Arduino", "C++", "Vite"
  ];

  return (
    <div className="h-full">
      <ElectricBorder borderRadius="2rem">
        <div className="bg-[#030712] p-8 lg:p-12 rounded-[2rem] h-full flex flex-col justify-center">
          <h3 className="text-xl font-black text-white uppercase italic tracking-widest mb-8 text-center">
            Mastered <span className="text-slate-500 text-glow-sm">Technologies</span>
          </h3>
          
          <div className="flex flex-wrap justify-center gap-3">
            {tools.map((tool) => (
              <div 
                key={tool} 
                className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-[10px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2 hover:text-cyan-400 hover:border-cyan-500/30 transition-all"
              >
                <div className="h-1 w-1 rounded-full bg-cyan-500 shadow-[0_0_5px_#06b6d4]" />
                {tool}
              </div>
            ))}
          </div>

          <p className="text-[9px] font-mono text-slate-600 uppercase tracking-[0.3em] text-center mt-10">
            // "I choose the tool based on the problem, not the preference."
          </p>
        </div>
      </ElectricBorder>
    </div>
  );
};

export default MyToolbox;
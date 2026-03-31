import React from 'react';
import { GraduationCap, BookOpen, Scale } from 'lucide-react';

const CoreTraining = () => {
  const education = [
    {
      degree: "BSc in Computer Information Systems",
      institution: "Daffodil International University",
      metric: "CGPA: 3.40 (Ongoing)",
      icon: <GraduationCap size={26} />,
      color: "#00f2ff", // Cyan for visibility
      focusAreas: [
        "Software Development",
        "System Design",
        "Practical Project Implementation"
      ]
    },
    {
      degree: "Higher Secondary Certificate (Science)",
      institution: "Milestone College",
      metric: "GPA: 5.00",
      icon: <BookOpen size={26} />,
      color: "#a855f7", // Purple for consistency
    }
  ];

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <div className="flex items-center gap-4 mb-16">
        <h3 className="text-3xl font-black uppercase italic tracking-tighter text-white">
          Education
        </h3>
        <div className="h-[2px] flex-1 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full opacity-50" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {education.map((edu, i) => (
          <div 
            key={i} 
            className="group relative p-[1px] rounded-[2.5rem] overflow-hidden transition-all duration-700 ease-out hover:-translate-y-2 transform-gpu"
            style={{ background: `linear-gradient(135deg, ${edu.color}30 0%, #ffffff10 50%, ${edu.color}30 100%)` }}
          >
            {/* ⚡ THE GLOW EFFECT: Static Ambient Bloom */}
            <div className="absolute inset-0 opacity-15 group-hover:opacity-30 transition-opacity duration-1000 blur-[80px] pointer-events-none"
                 style={{ backgroundColor: edu.color }} />

            {/* Content Layer (Inner Border and Background) */}
            <div className="relative z-10 bg-[#030712] rounded-[calc(2.5rem-1px)] p-12 h-full border border-white/5 flex flex-col justify-between">
              
              <div className="flex items-start justify-between mb-10">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <p className="font-black text-[10px] uppercase tracking-[0.4em]" style={{ color: edu.color }}>
                      {edu.degree}
                    </p>
                  </div>
                  <h4 className="text-3xl font-black text-white uppercase italic tracking-tighter leading-tight mb-3">
                    {edu.institution}
                  </h4>
                  <p className="text-slate-400 font-bold italic text-lg tracking-tight">
                    {edu.metric}
                  </p>
                </div>
                
                {/* Visual Icon with subtle background */}
                <div className="p-4 rounded-xl bg-white/5 border border-white/5 text-white" style={{ color: edu.color }}>
                  {edu.icon}
                </div>
              </div>

              {/* Conditional Focus Areas for DIU */}
              {edu.focusAreas && (
                <div className="mt-6 pt-10 border-t border-white/5 space-y-4">
                  <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest flex items-center gap-2">
                    <Scale size={12}/> Focus Areas:
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm font-bold text-white uppercase italic tracking-tight opacity-90">
                    {edu.focusAreas.map((focus, idx) => (
                      <li key={idx} className="flex gap-2.5 items-center">
                        <span className="text-cyan-500 font-black">•</span>
                        {focus}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CoreTraining;
import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, BookOpen } from 'lucide-react';

const EducationModule = () => {
  const education = [
    {
      inst: "Daffodil International University",
      degree: "BSc – Computing and Information System",
      metric: "CGPA: 3.40",
      status: "Ongoing",
      icon: <GraduationCap size={24} className="text-cyan-400" />
    },
    {
      inst: "Milestone College",
      degree: "HSC – Science",
      metric: "GPA: 5.00",
      status: "Completed",
      icon: <BookOpen size={24} className="text-blue-400" />
    }
  ];

  return (
    <section className="py-32 px-6 bg-[#020617] overflow-hidden">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        
        {/* 1. SECTION HEADER - Centered */}
        <div className="flex flex-col items-center mb-20 text-center">
          <span className="text-[10px] font-black uppercase tracking-[0.5em] text-cyan-500 mb-4 font-mono">
            Academic_Logic_Nodes
          </span>
          <h3 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter text-white">
            Educational <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Foundation</span>
          </h3>
          <div className="h-[1px] w-24 bg-cyan-500/30 mt-8" />
        </div>

        {/* 2. EDUCATION NODES - Centered Column */}
        <div className="w-full space-y-8 flex flex-col items-center">
          {education.map((edu, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="w-full max-w-2xl relative p-10 rounded-[32px] bg-white/[0.02] border border-white/5 hover:border-cyan-500/20 transition-all group overflow-hidden"
            >
              {/* Background Decorative Icon */}
              <div className="absolute -top-4 -right-4 p-8 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity">
                <GraduationCap size={120} />
              </div>

              <div className="flex flex-col items-center text-center relative z-10">
                {/* Status Indicator */}
                <div className="mb-6 px-4 py-1.5 bg-cyan-500/5 border border-cyan-500/20 rounded-full">
                  <span className="text-[9px] font-black text-cyan-400 uppercase tracking-widest font-mono">
                    [{edu.status}]
                  </span>
                </div>

                {/* Institution Icon */}
                <div className="mb-6 p-4 bg-white/5 rounded-2xl border border-white/10 group-hover:scale-110 transition-transform">
                  {edu.icon}
                </div>

                <h3 className="text-2xl md:text-3xl font-black text-white uppercase italic tracking-tighter mb-2 group-hover:text-cyan-400 transition-colors">
                  {edu.inst}
                </h3>
                
                <p className="text-slate-400 font-bold text-[11px] uppercase tracking-[0.2em] mb-8 font-mono">
                  {edu.degree}
                </p>

                {/* Score Metric Card */}
                <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/5 rounded-2xl border border-white/10 shadow-lg">
                  <Award size={18} className="text-cyan-400" />
                  <span className="text-white font-mono font-black text-lg tracking-tight uppercase">
                    {edu.metric}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 3. SYSTEM FOOTER */}
        <div className="mt-20 pt-10 border-t border-white/5 w-full flex justify-center opacity-40">
          <p className="text-[9px] font-mono text-slate-500 uppercase tracking-[0.4em]">
            Institutional_Source_Verified // DIU_CIS_NODE
          </p>
        </div>
      </div>
    </section>
  );
};

export default EducationModule;
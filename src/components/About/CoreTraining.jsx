import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, CheckCircle2, Cpu, GraduationCap, Briefcase, Award } from 'lucide-react';
import GradientText from '../bits/GradientText';

const CoreTraining = () => {
  // 📚 ACADEMIC FOCUS (Distinct from raw tech stack)
  const academicHighlights = [
    { cat: "Degree", detail: "BSc in CIS", sub: "Daffodil Int. University", icon: <GraduationCap size={14} />, color: "#3b82f6" },
    { cat: "Current CGPA", detail: "3.40 / 4.00", sub: "Computing & Information System", icon: <Award size={14} />, color: "#10b981" },
    { cat: "Research/IoT", detail: "Microcontroller Systems", sub: "Smart Automation Projects", icon: <Cpu size={14} />, color: "#f59e0b" }
  ];

  return (
    <section className="py-32 px-6 bg-[#020617] relative overflow-hidden">
      {/* BACKGROUND EFFECTS */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/5 blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* HEADER SECTION - Matching your Industrial Protocol design */}
        <div className="flex flex-col items-center text-center mb-24">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-[1px] w-8 bg-emerald-500/50" />
            <span className="text-[10px] font-mono uppercase tracking-[0.6em] text-emerald-500 font-bold">
              Professional_Foundation
            </span>
            <div className="h-[1px] w-8 bg-emerald-500/50" />
          </div>
          
          <GradientText
            colors={["#10b981", "#ffffff", "#00f2ff", "#3b82f6", "#10b981"]}
            className="text-5xl md:text-6xl font-black uppercase tracking-tighter mb-8"
          >
            Academic & Career
          </GradientText>
          
          <span className="text-[12px] font-mono text-slate-600 uppercase tracking-[0.4em] font-bold">
            Bridging Theoretical Knowledge with Industry Deployment
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
          
          {/* 💼 LEFT SIDE: PROFESSIONAL EXPERIENCE (Freelance focus) */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative p-[1px] rounded-[2.5rem] bg-gradient-to-b from-white/10 to-transparent"
          >
            <div className="bg-[#03081a] rounded-[2.5rem] p-10 h-full border border-white/5 relative overflow-hidden group">
              <div className="absolute -top-24 -left-24 w-64 h-64 bg-cyan-500/10 blur-[80px] group-hover:bg-cyan-500/20 transition-colors" />
              
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-10">
                  <div className="p-3 bg-cyan-500/10 rounded-xl border border-cyan-500/20 text-cyan-400">
                    <Briefcase size={24} />
                  </div>
                  <div>
                    <h3 className="text-white text-2xl font-black italic uppercase tracking-tight">Experience</h3>
                    <p className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">Marketplace_Track_Record</p>
                  </div>
                </div>

                <div className="border-l-2 border-cyan-500/20 pl-8 space-y-12">
                  <div className="relative">
                    <div className="absolute -left-[41px] top-2 w-4 h-4 rounded-full bg-[#020617] border-2 border-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.5)]" />
                    
                    <h4 className="text-white font-black text-xl uppercase italic group-hover:text-cyan-400 transition-colors">Web Developer — Upwork / Freelance</h4>
                    <p className="text-slate-400 mt-2 mb-6 text-sm italic font-medium leading-relaxed">
                      "Delivering full-stack solutions and WordPress ecosystems for global clients since 2024."
                    </p>
                    
                    <ul className="space-y-4">
                      {[
                        "Multi-vendor Marketplace (Bird Bajar) Integration",
                        "E-commerce Strategy for Multi Drop Fusion",
                        "Scalable API development with FastAPI",
                        "Performance Tuning & SEO Optimization"
                      ].map((item, i) => (
                        <li key={i} className="flex items-center gap-4 text-slate-300 text-sm font-medium group/item">
                          <div className="p-1 rounded-md bg-emerald-500/10 border border-emerald-500/20">
                            <CheckCircle2 size={12} className="text-emerald-500" />
                          </div>
                          <span className="group-hover/item:text-white transition-colors">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* 🎓 RIGHT SIDE: ACADEMIC TERMINAL (CIS Specific) */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative p-[1px] rounded-[2.5rem] bg-gradient-to-tr from-cyan-500/40 via-white/20 to-purple-500/40"
          >
            <div className="bg-[#020617] rounded-[2.5rem] p-10 h-full border border-white/10 relative overflow-hidden group">
              <div className="absolute -bottom-32 -right-32 w-80 h-80 bg-purple-500/10 blur-[100px] group-hover:bg-purple-500/20 transition-colors" />

              <div className="relative z-10">
                <div className="flex justify-between items-center mb-12">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-red-500/50" />
                    <div className="w-2 h-2 rounded-full bg-yellow-500/50" />
                    <div className="w-2 h-2 rounded-full bg-green-500/50" />
                  </div>
                  <span className="text-[9px] font-mono text-slate-500 uppercase tracking-[0.3em]">System.exec(Academic_Ledger)</span>
                </div>

                <div className="space-y-4">
                  {academicHighlights.map((s, i) => (
                    <div 
                      key={i} 
                      className="group/line flex flex-col gap-2 p-5 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/10 hover:bg-white/[0.04] transition-all"
                    >
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-3">
                          <span style={{ color: s.color }} className="opacity-70 group-hover/line:opacity-100 transition-opacity">
                            {s.icon}
                          </span>
                          <span className="text-slate-500 text-[10px] font-black uppercase tracking-widest font-mono">
                            {s.cat}
                          </span>
                        </div>
                        <span className="text-[10px] font-mono text-slate-600">ID_0{i + 1}</span>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-white font-bold text-lg tracking-tight font-mono group-hover/line:text-cyan-400 transition-colors">
                          {s.detail}
                        </span>
                        <span className="text-slate-500 text-xs font-mono italic">{s.sub}</span>
                      </div>
                    </div>
                  ))}
                  
                  {/* Extra Highlight for HSC Result */}
                  <div className="mt-6 p-4 border-t border-white/5">
                    <p className="text-[11px] font-mono text-slate-400 leading-relaxed italic">
                      // Completed HSC (Science) at Milestone College <br/>
                      // Academic Result: GPA 5.00
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* SYSTEM FOOTER */}
        <div className="mt-20 pt-10 border-t border-white/5 w-full flex justify-center opacity-30">
          <p className="text-[9px] font-mono text-slate-500 uppercase tracking-[0.5em]">
            Credentials_Verified // DIU_Student // Build_v3.0_Final
          </p>
        </div>
      </div>
    </section>
  );
};

export default CoreTraining;
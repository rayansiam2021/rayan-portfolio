import React from 'react';
import { Download, ExternalLink, Mail, Terminal, Cpu, Layout, ShieldCheck, Import } from 'lucide-react';
import GradientText from '../bits/GradientText';


const BioSection = () => {
  return (
    <section className="min-h-screen w-full flex items-center justify-center py-12 px-6 sm:px-12 lg:px-24 bg-[#020617] selection:bg-cyan-500/30 overflow-x-hidden">
      <div className="max-w-[1200px] w-full flex flex-col items-center lg:items-start">
        
        {/* 1. STATUS TAGS - Tightened Margin */}
        {/* Badge Container - Centered for all screen sizes */}
<div className="flex flex-wrap justify-center items-center gap-3 mb-6 w-full">
  
  {/* Available For Hire Badge */}
  <div className="flex items-center gap-2 px-4 py-1.5 bg-emerald-500/5 border border-emerald-500/20 rounded-full backdrop-blur-sm">
    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_#10b981] animate-pulse" />
    <span className="text-[10px] font-mono font-black text-emerald-400 uppercase tracking-[0.2em]">
      Available_For_Hire
    </span>
  </div>

  {/* Verified Engineer Badge */}
  <div className="flex items-center gap-2 px-4 py-1.5 bg-white/5 border border-white/10 rounded-full backdrop-blur-sm">
    <ShieldCheck size={12} className="text-blue-400" />
    <span className="text-[10px] font-mono font-black text-slate-400 uppercase tracking-[0.2em]">
      Verified_Engineer
    </span>
  </div>

</div>

        {/* 2. HEADLINE - Gap Removed */}
        <GradientText
                      colors={["#00f2ff", "#ffffff", "#00d4ff", "#3b82f6", "#00f2ff"]}
                      className="text-3xl md:text-4xl font-black uppercase tracking-tighter"
                    >
                      CIS DEVELOPER
                    </GradientText>

        {/* 3. DESCRIPTION */}
        <p className="max-w-2xl text-slate-400 text-base md:text-lg leading-relaxed mb-10 text-center lg:text-left">
          Hi, I'm <span className="text-white font-bold">Rayan Ahmed</span>. I specialize in building <span className="text-emerald-400 font-medium">Full-stack coded web applications</span>, 
          developing high-performance <span className="text-blue-400 font-medium">WordPress & Shopify</span> stores, 
          and creating <span className="text-emerald-400 font-medium">IoT systems</span> with Microcontrollers and sensors to solve real-world problems.
        </p>

        {/* 4. SPECIALTY CARDS - Fixed Visibility */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full mb-10">
          <CompactCard icon={<Terminal size={18} />} title="Full-Stack Dev" tech="React & FastAPI" color="cyan" />
          <CompactCard icon={<Layout size={18} />} title="CMS Solutions" tech="WordPress & Shopify" color="blue" />
          <CompactCard icon={<Cpu size={18} />} title="IoT Systems" tech="Arduino & Hardware" color="emerald" />
        </div>

        {/* 5. BUTTONS */}
        <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 w-full">
  
  {/* 1. UPWORK - EXTERNAL LINK */}
  <a 
    href="https://www.upwork.com/freelancers/~010b9b0bfb0905eb7e" 
    target="_blank" 
    rel="noopener noreferrer"
    className="px-8 py-4 bg-white text-black rounded-full font-black text-[10px] uppercase tracking-widest hover:bg-cyan-400 hover:scale-105 transition-all flex items-center gap-2 shadow-lg"
  >
    Work With Me <ExternalLink size={14} strokeWidth={3} />
  </a>

  {/* 2. EMAIL - DIRECT INQUIRY + AUTO-COPY FALLBACK */}
  {/* 2. EMAIL - DIRECT INQUIRY (GMAIL AUTO-OPEN + COPY) */}
<a 
  href="https://mail.google.com/mail/?view=cm&fs=1&to=rayansiam2021@gmail.com"
  target="_blank"
  rel="noopener noreferrer"
  onClick={() => {
    navigator.clipboard.writeText("rayansiam2021@gmail.com");
  }}
  className="px-8 py-4 bg-white/5 border border-white/10 text-white rounded-full font-black text-[10px] uppercase tracking-widest hover:bg-white/10 hover:border-white/20 transition-all flex items-center gap-2 group"
>
  <span className="group-active:scale-95 transition-transform">Direct Inquiry</span>
  <Mail size={14} strokeWidth={3} className="text-cyan-400" />
</a>

  {/* 3. CV - DOWNLOAD FROM ASSETS/DOCS */}
  <a 
    href="/assets/docs/Rayan_Ahmed_ATS_CV.docx" 
    download="Rayan_Ahmed_ATS_CV.docx"
    className="p-4 bg-transparent border border-white/5 text-slate-500 hover:text-cyan-400 hover:border-cyan-500/30 rounded-full transition-all group flex items-center justify-center"
    title="Download CV"
  >
    <Download 
      size={16} 
      strokeWidth={3} 
      className="group-hover:translate-y-0.5 transition-transform" 
    />
  </a>
  
</div>

      </div>
    </section>
  );
};

const CompactCard = ({ icon, title, tech, color }) => {
  const styles = {
    cyan: "border-cyan-500/10 text-cyan-400 hover:border-cyan-500/30",
    blue: "border-blue-500/10 text-blue-400 hover:border-blue-500/30",
    emerald: "border-emerald-500/10 text-emerald-400 hover:border-emerald-500/30"
  };

  return (
    <div className={`flex items-center gap-4 p-4 border rounded-2xl bg-white/[0.02] transition-all duration-300 hover:bg-white/[0.05] ${styles[color]}`}>
      <div className="flex-shrink-0 p-2 bg-white/5 rounded-lg">
        {icon}
      </div>
      <div className="flex flex-col min-w-0">
        <h3 className="text-white text-[10px] font-black uppercase tracking-wider truncate">{title}</h3>
        <span className="text-slate-500 text-[8px] font-mono uppercase opacity-60 truncate">{tech}</span>
      </div>
    </div>
  );
};

export default BioSection;
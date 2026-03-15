import React from 'react';
import HeroContainer from '../components/Hero/HeroContainer';
import StatsRibbon from '../components/StatsRibbon';
import SkillTerminal from '../components/SkillTerminal';
import ProjectMatrix from '../components/ProjectMatrix';
import ServiceEngine from '../components/ServiceEngine';

const Home = ({ data }) => {
  return (
    <main className="bg-[#020617] min-h-screen text-white overflow-x-hidden selection:bg-cyan-500/30">
      
      {/* 1. HERO SECTION */}
      <section className="min-h-[90vh] flex items-center justify-center pt-24 px-4 relative">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/5 blur-[120px] pointer-events-none transform-gpu isolate"></div>
        <HeroContainer data={data} />
      </section>

      {/* 2. STATS RIBBON */}
      <StatsRibbon />

      {/* 3. CAPABILITIES */}
      <section id="capabilities" className="py-32 px-4 relative" style={{ contentVisibility: 'auto', containIntrinsicSize: '0 600px' }}>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[60%] bg-cyan-500/5 blur-[150px] pointer-events-none transform-gpu"></div>

        <div className="max-w-5xl mx-auto relative">
          <header className="text-center mb-16">
            <h2 className="text-[10px] font-black tracking-[0.8em] uppercase text-slate-500">
              System_Capabilities
            </h2>
            <div className="h-[1px] w-32 bg-cyan-500/50 mx-auto mt-4 shadow-[0_0_15px_#06b6d4]"></div>
          </header>

          <div className="relative bg-[#020617]/40 backdrop-blur-md rounded-lg overflow-hidden border border-white/5 shadow-2xl">
             <SkillTerminal />
          </div>
        </div>
      </section>

      {/* 4. ARCHIVE (Project Matrix) */}
      <section id="archive" className="py-32 px-4 relative border-t border-white/5 bg-[#030712]/30" style={{ contentVisibility: 'auto', containIntrinsicSize: '0 800px' }}>
        <div className="max-w-7xl mx-auto relative">
          <header className="text-center mb-20">
            <h2 className="text-[10px] font-black tracking-[0.8em] uppercase text-slate-500">
              Deployment_Matrix
            </h2>
            <div className="h-[1px] w-40 bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent mx-auto mt-4"></div>
          </header>
          
          <ProjectMatrix />
          
          <div className="mt-20 text-center">
            <a href="https://github.com/rayansiam2021" target="_blank" rel="noreferrer" className="inline-block group">
              <button className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400 group-hover:text-cyan-400 transition-all border border-slate-800 px-8 py-4 rounded-full hover:border-cyan-500/50 hover:bg-cyan-500/5">
                View_System_Archive [20+]
              </button>
            </a>
          </div>
        </div>
      </section>

      {/* 5. SERVICES */}
      <section id="services" className="py-32 px-4 relative border-t border-white/5 bg-[#030712]/50" style={{ contentVisibility: 'auto' }}>
        <ServiceEngine />
      </section>

    </main>
  );
};

export default Home;
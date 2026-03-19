import React, { memo } from 'react';
import HeroContainer from '../components/Hero/HeroContainer';
import StatsRibbon from '../components/StatsRibbon';
import ServiceEngine from '../components/ServiceEngine';
import ProjectMatrix from '../components/ProjectMatrix';
import SkillTerminal from '../components/SkillTerminal';
import ConversionCTA from '../components/ConversionCTA';
import { CTA_CONFIGS } from '../data/ctaData';

// Memoized for performance during scroll
const MemoizedProjectMatrix = memo(ProjectMatrix);
const MemoizedSkillTerminal = memo(SkillTerminal);

const Home = ({ data }) => {
  return (
    <main className="bg-[#020617] min-h-screen text-white overflow-x-hidden selection:bg-cyan-500/30 antialiased">
      
      {/* PERFORMANCE LAYER */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden transform-gpu">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-600/5 blur-[120px] will-change-transform" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-cyan-500/5 blur-[120px] will-change-transform" />
      </div>

      <div className="relative z-10">
        
        {/* 1. HERO: Tighter bottom padding to meet the Stats Ribbon */}
        <section className="min-h-[80vh] flex items-center justify-center pt-24 pb-12 px-4 relative">
          <HeroContainer data={data} />
        </section>

        {/* 2. STATS RIBBON: Negative margin pulls Hero and Services together */}
        <div className="relative z-20 -my-8 md:-my-12">
          <StatsRibbon />
        </div>

        {/* 3. SERVICES: Standardized top padding creates the 'perfect' gap */}
        <section id="services" className="pt-16 pb-20 md:pt-24 md:pb-28 px-4 border-t border-white/5 bg-[#030712]/40">
          <ServiceEngine />
        </section>

        {/* 4. PROJECTS: Consistent vertical rhythm */}
        <section id="archive" className="py-20 md:py-28 px-4 border-t border-white/5 bg-[#030712]/20" style={{ contentVisibility: 'auto' }}>
          <div className="max-w-7xl mx-auto">
            <MemoizedProjectMatrix />
            <div className="mt-12 md:mt-16 text-center">
              <a href="https://github.com/rayansiam2021" target="_blank" rel="noreferrer" className="inline-block group">
                <button className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400 group-hover:text-cyan-400 transition-all border border-slate-800 px-8 py-4 rounded-full hover:border-cyan-500/50 hover:bg-cyan-500/5 active:scale-95">
                  View_System_Archive [20+]
                </button>
              </a>
            </div>
          </div>
        </section>

        {/* 5. SKILLS: Consistent vertical rhythm */}
        <section id="capabilities" className="py-20 md:py-28 px-4 border-t border-white/5" style={{ contentVisibility: 'auto' }}>
          <div className="max-w-5xl mx-auto">
            <header className="text-center mb-12">
              <h2 className="text-[10px] font-black tracking-[0.8em] uppercase text-slate-500">I AM EXPERIENCED IN</h2>
              <div className="h-[1px] w-32 bg-cyan-500/50 mx-auto mt-4" />
            </header>
            <div className="relative bg-[#030712] rounded-lg overflow-hidden border border-white/5 shadow-2xl will-change-transform">
                <MemoizedSkillTerminal />
            </div>
          </div>
        </section>

        {/* 6. FINAL CTA: Matches section padding exactly */}
        <section className="py-20 md:py-28 px-4 border-t border-white/5">
          <div className="max-w-7xl mx-auto">
            <ConversionCTA {...CTA_CONFIGS.homepage} />
          </div>
        </section>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        * { -webkit-backface-visibility: hidden; backface-visibility: hidden; }
        html { scroll-behavior: smooth; }
      `}} />
    </main>
  );
};

export default Home;
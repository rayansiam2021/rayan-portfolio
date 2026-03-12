import HeroContainer from '../components/Hero/HeroContainer';
import StatsRibbon from '../components/StatsRibbon';
import SkillTerminal from '../components/SkillTerminal.jsx';
import ProjectMatrix from '../components/ProjectMatrix';

const Home = ({ data }) => {
  return (
    <main className="bg-[#020617] min-h-screen text-white overflow-x-hidden">
      
      {/* 1. HERO SECTION */}
      <section className="min-h-[85vh] flex items-center justify-center pt-10 px-4">
        <HeroContainer data={data} />
      </section>

      {/* 2. STATS RIBBON */}
      <StatsRibbon />

      {/* 3. SKILL TERMINAL SECTION */}
      <section className="py-24 px-4 relative">
        {/* Background Aura - Large Soft Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[60%] bg-cyan-500/10 blur-[120px] pointer-events-none"></div>

        <div className="max-w-5xl mx-auto relative">
          <div className="text-center mb-16">
            <h2 className="text-xs font-black tracking-[0.8em] uppercase text-slate-500">
              System_Capabilities
            </h2>
            <div className="h-[1px] w-32 bg-cyan-500/50 mx-auto mt-4 shadow-[0_0_15px_#06b6d4] animate-pulse"></div>
          </div>

          {/* THE ELECTRIC WRAPPER */}
          <div className="relative group p-[1px] rounded-lg transition-all duration-500">
            
            {/* 1. The Outer Surge Glow - Now z-0 so it stays behind everything */}
            <div className="absolute -inset-2 bg-cyan-500/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 animate-surge z-0"></div>
            
            {/* 2. The Animated Scanning Line - ADDED pointer-events-none so clicks pass through it */}
            <div className="absolute top-0 left-0 w-full h-[2px] bg-cyan-400 shadow-[0_0_20px_#22d3ee,0_0_40px_#06b6d4] animate-scan pointer-events-none z-50"></div>
            
            {/* 3. The Border/Frame - ADDED pointer-events-none so it doesn't block buttons */}
            <div className="absolute inset-0 border border-cyan-500/20 rounded-lg group-hover:border-cyan-400/50 transition-colors z-10 pointer-events-none"></div>
            
            {/* 4. The Terminal Itself - CHANGED to z-30 to be above the borders but below the scan line */}
            <div className="relative bg-[#020617]/80 backdrop-blur-sm rounded-lg overflow-hidden z-30">
              <SkillTerminal />
            </div>

          </div>
        </div>
      </section>
     
      {/* 4. PROJECT MATRIX SECTION */}
      <section className="py-32 px-4 relative">
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-20">
            <h2 className="text-xs font-black tracking-[0.8em] uppercase text-slate-500">
              Deployment_Matrix
            </h2>
            <div className="h-[1px] w-40 bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent mx-auto mt-4"></div>
          </div>
          
          <ProjectMatrix />
          
          <div className="mt-20 text-center">
            <button className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-600 hover:text-cyan-400 transition-all border border-slate-800 px-8 py-4 rounded-full hover:border-cyan-500/50 hover:bg-cyan-500/5">
              View_System_Archive [20+]
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
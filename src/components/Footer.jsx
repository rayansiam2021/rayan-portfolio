import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full py-12 border-t border-white/5 bg-[#020617] mt-auto relative overflow-hidden">
      {/* ⚡ Tactical Top Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent shadow-[0_0_15px_rgba(34,211,238,0.2)]"></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row justify-between items-center gap-12">
        
        {/* --- LEFT: BRAND CORE --- */}
        <div className="flex flex-col items-center md:items-start group">
          <div className="flex items-center gap-3 mb-2">
            <div className="relative">
              <div className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse shadow-[0_0_10px_#22d3ee]"></div>
              <div className="absolute inset-0 w-2 h-2 bg-cyan-400 rounded-full animate-ping opacity-20"></div>
            </div>
            <span className="text-[13px] font-black uppercase tracking-[0.6em] text-white">
              Rayan_Dev
            </span>
          </div>
          <p className="text-[10px] font-mono text-slate-500 uppercase tracking-[0.2em] italic">
            Architecture // V2.0.1_STABLE
          </p>
        </div>

        {/* --- CENTER: STATUS PROTOCOL --- */}
        <div className="flex flex-col items-center space-y-3 order-3 md:order-none">
          <div className="px-6 py-2 bg-white/[0.03] border border-white/5 rounded-full backdrop-blur-md shadow-inner">
            <p className="text-[10px] text-slate-400 uppercase tracking-[0.25em] font-bold">
              © 2026 // <span className="text-white text-glow-sm">Built_for_Performance</span>
            </p>
          </div>
          <p className="text-[9px] font-mono text-slate-600 uppercase tracking-[0.3em] font-medium">
            Lat_23.8103_Lon_90.4125 // DHAKA_BD
          </p>
        </div>

        {/* --- RIGHT: REAL-TIME METRICS --- */}
        <div className="flex items-center gap-8">
          <div className="flex flex-col items-end gap-1.5">
            <div className="flex items-center gap-3">
              <span className="text-[9px] font-mono text-slate-600 uppercase tracking-widest">Latency:</span>
              <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-widest font-black">14ms</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-[9px] font-mono text-slate-600 uppercase tracking-widest">Status:</span>
              <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-widest font-black">SSL_SECURED</span>
            </div>
          </div>
          
          {/* Vertical Separator */}
          <div className="h-10 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent hidden md:block"></div>
          
          {/* Audio/Data Visualizer Animation */}
          <div className="hidden lg:flex flex-col items-center">
            <span className="text-[8px] font-mono text-slate-600 uppercase tracking-widest italic mb-2">
              Runtime
            </span>
            <div className="flex items-end gap-1.5 h-4">
              <div className="w-1 bg-cyan-500/20 rounded-full overflow-hidden h-full">
                <div className="w-full bg-cyan-500 rounded-full animate-[bounce_1.5s_infinite_ease-in-out]" style={{ height: '60%' }}></div>
              </div>
              <div className="w-1 bg-cyan-500/20 rounded-full overflow-hidden h-full">
                <div className="w-full bg-cyan-500 rounded-full animate-[bounce_1s_infinite_ease-in-out]" style={{ height: '100%' }}></div>
              </div>
              <div className="w-1 bg-cyan-500/20 rounded-full overflow-hidden h-full">
                <div className="w-full bg-cyan-500 rounded-full animate-[bounce_1.2s_infinite_ease-in-out]" style={{ height: '40%' }}></div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
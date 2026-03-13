import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full py-10 border-t border-white/5 bg-[#020617] mt-auto relative overflow-hidden">
      {/* Subtle top glow to match the tactical theme */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row justify-between items-center gap-10">
        
        {/* --- LEFT: BRAND CORE --- */}
        <div className="flex flex-col items-center md:items-start group cursor-default">
          <div className="flex items-center gap-3 mb-1">
            <div className="relative">
              <div className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse shadow-[0_0_10px_#22d3ee]"></div>
              <div className="absolute inset-0 w-2 h-2 bg-cyan-400 rounded-full animate-ping opacity-20"></div>
            </div>
            <span className="text-[12px] font-black uppercase tracking-[0.5em] text-white">
              Rayan_Dev
            </span>
          </div>
          <p className="text-[9px] font-mono text-slate-500 uppercase tracking-[0.2em]">
            System_Architecture // V2.0.1_STABLE
          </p>
        </div>

        {/* --- CENTER: STATUS PROTOCOL --- */}
        <div className="flex flex-col items-center space-y-2">
          <div className="px-4 py-1.5 bg-white/5 border border-white/10 rounded-full backdrop-blur-sm">
            <p className="text-[10px] text-slate-400 uppercase tracking-[0.2em] font-medium">
              © 2026 // <span className="text-white">Built_for_Performance</span>
            </p>
          </div>
          <p className="text-[8px] font-mono text-slate-600 uppercase tracking-widest">
            Lat_23.8103_Lon_90.4125 // DHAKA_BD
          </p>
        </div>

        {/* --- RIGHT: REAL-TIME METRICS --- */}
        <div className="flex items-center gap-8">
          <div className="flex flex-col items-end gap-1">
            <div className="flex items-center gap-2">
              <span className="text-[9px] font-mono text-slate-500 uppercase tracking-widest">Latency:</span>
              <span className="text-[9px] font-mono text-emerald-400 uppercase tracking-widest font-bold">14ms</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[9px] font-mono text-slate-500 uppercase tracking-widest">Protocol:</span>
              <span className="text-[9px] font-mono text-cyan-400 uppercase tracking-widest font-bold">SSL_ENCRYPTED</span>
            </div>
          </div>
          
          {/* Vertical Separator */}
          <div className="h-8 w-px bg-white/10 hidden md:block"></div>
          
          <div className="hidden lg:flex flex-col items-end">
             <span className="text-[9px] font-mono text-slate-600 uppercase tracking-widest italic">
              Runtime_Ready
            </span>
            <div className="flex gap-1 mt-1">
              <div className="w-1 h-3 bg-cyan-500/20 rounded-full overflow-hidden">
                <div className="w-full h-full bg-cyan-500 animate-[bounce_1.5s_infinite]"></div>
              </div>
              <div className="w-1 h-3 bg-cyan-500/20 rounded-full overflow-hidden">
                <div className="w-full h-[60%] bg-cyan-500 animate-[bounce_1s_infinite]"></div>
              </div>
              <div className="w-1 h-3 bg-cyan-500/20 rounded-full overflow-hidden">
                <div className="w-full h-[80%] bg-cyan-500 animate-[bounce_1.2s_infinite]"></div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
import React, { useState, useEffect, memo } from 'react';
import { Link } from 'react-router-dom';
import { 
  Menu, X, Home, User, Layers, Briefcase, Mail, 
  Github, Linkedin, Facebook, Instagram, MapPin, 
  Cpu, Zap, Database, Code2, GraduationCap, Globe
} from 'lucide-react';

// Optimized Social Icon
const IconButton = ({ href, icon, color }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer"
    className={`p-3.5 rounded-2xl bg-white/5 border border-white/10 hover:border-white/30 transition-all transform hover:-translate-y-1.5 active:scale-90 ${color} shadow-lg hover:shadow-cyan-500/20`}
  >
    {icon}
  </a>
);

// High-Performance NavLink with Permanent Vibrancy
const NavLink = memo(({ link, index, setIsOpen }) => (
  <a 
    href={link.path}
    onClick={() => setIsOpen(false)}
    className={`group relative flex items-center justify-between p-7 rounded-[2rem] border border-white/10 bg-[#0a0f24]/50 transition-all duration-300 hover:bg-[#0f173a] hover:border-white/20 hover:-translate-y-1 transform-gpu overflow-hidden`}
  >
    {/* Animated Hover Background Beam */}
    <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 bg-gradient-to-r ${link.gradient}`} />
    
    <div className="flex items-center gap-6 relative z-10">
      <span className={`text-[11px] font-mono font-black tracking-[0.3em] ${link.textColor}`}>
        0{index + 1}
      </span>
      <span className="text-3xl font-black uppercase italic tracking-tighter text-white group-hover:scale-105 transition-transform duration-300 origin-left">
        {link.name}
      </span>
    </div>
    
    <div className={`relative z-10 p-4 rounded-2xl border transition-all duration-500 group-hover:rotate-[360deg] ${link.iconBorder} ${link.textColor} bg-white/5`}>
      {React.cloneElement(link.icon, { size: 26, strokeWidth: 2.5 })}
    </div>
  </a>
));

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'unset';
  }, [isOpen]);

  const navLinks = [
    { name: "Home", path: "/", icon: <Home />, textColor: "text-blue-400", iconBorder: "border-blue-500/30", gradient: "from-blue-500 to-transparent" },
    { name: "About", path: "/about", icon: <User />, textColor: "text-emerald-400", iconBorder: "border-emerald-500/30", gradient: "from-emerald-500 to-transparent" },
    { name: "Project", path: "/#archive", icon: <Layers />, textColor: "text-violet-400", iconBorder: "border-violet-500/30", gradient: "from-violet-500 to-transparent" },
    { name: "Service", path: "/service", icon: <Briefcase />, textColor: "text-amber-400", iconBorder: "border-amber-500/30", gradient: "from-amber-500 to-transparent" },
    { name: "Contact", path: "/contact", icon: <Mail />, textColor: "text-rose-400", iconBorder: "border-rose-500/30", gradient: "from-rose-500 to-transparent" },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-[100] bg-[#020617]/90 backdrop-blur-md border-b border-white/10 px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link to="/" onClick={() => setIsOpen(false)} className="text-white font-black tracking-tighter text-2xl italic uppercase">
            Rayan<span className="text-cyan-500">.</span>Dev
          </Link>

          <button onClick={() => setIsOpen(!isOpen)} className="z-[110] flex items-center gap-4 px-5 py-2.5 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-all active:scale-90">
            <span className={`text-xs font-mono font-black tracking-widest ${isOpen ? 'text-rose-500' : 'text-cyan-400'}`}>
              {isOpen ? 'TERMINATE' : 'OPERATE'}
            </span>
            <div className="text-white">{isOpen ? <X size={22} /> : <Menu size={22} />}</div>
          </button>
        </div>
      </nav>

      {/* ULTRA-SMOOTH OVERLAY */}
      <div className={`fixed inset-0 z-[95] transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] transform-gpu ${isOpen ? 'translate-y-0' : '-translate-y-full'}`}>
        <div className="absolute inset-0 bg-[#020617] lg:bg-[#020617]/98" onClick={() => setIsOpen(false)} />
        
        <div className="relative h-full overflow-y-auto pt-32 pb-16 px-6 sm:px-12">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 items-stretch h-full">
            
            {/* LEFT SIDE: NAVIGATION */}
            <div className="w-full lg:w-1/2 flex flex-col gap-5">
              <div className="flex items-center gap-3 mb-2 px-2">
                <div className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />
                <p className="text-[10px] font-mono font-black text-slate-500 tracking-[0.6em] uppercase">Navigation_Index</p>
              </div>
              {navLinks.map((link, i) => (
                <NavLink key={link.name} link={link} index={i} setIsOpen={setIsOpen} />
              ))}
            </div>

            {/* RIGHT SIDE: PREMIUM DOSSIER CARD */}
            <div className="w-full lg:w-1/2">
              <div className="relative h-full p-[2px] rounded-[3.5rem] bg-gradient-to-br from-cyan-500/40 via-transparent to-purple-600/40 shadow-2xl">
                <div className="h-full p-10 md:p-14 rounded-[3.4rem] bg-[#080c1d] border border-white/5 relative overflow-hidden group/dossier">
                  
                  {/* Decorative Grid Background */}
                  <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#2dd4bf_1px,transparent_1px)] [background-size:24px_24px]" />

                  {/* Header Section */}
                  <div className="relative z-10 mb-12">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-[10px] font-mono font-black text-cyan-400">
                        LIFESIGN: ACTIVE
                      </div>
                      <div className="h-[1px] flex-1 bg-gradient-to-r from-cyan-500/50 to-transparent" />
                    </div>
                    <h2 className="text-6xl font-black text-white italic tracking-tighter mb-4 group-hover/dossier:text-cyan-400 transition-colors duration-500">
                      Rayan Ahmed
                    </h2>
                    <p className="text-base font-mono text-slate-400 tracking-wider uppercase">
                      CIS Graduate <span className="text-cyan-500 mx-2">//</span> Independent Dev
                    </p>
                  </div>

                  {/* HIGH-VIBRANCY TECH STACK */}
                  <div className="relative z-10 space-y-5 mb-14">
                    <div className="grid grid-cols-1 gap-4">
                      {/* FRONTEND */}
                      <div className="group/tech p-5 rounded-[1.5rem] bg-white/5 border border-white/5 hover:border-cyan-500/50 transition-all">
                        <div className="flex items-center gap-4">
                          <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-400 group-hover/tech:scale-110 transition-transform"><Code2 size={24} /></div>
                          <div>
                            <p className="text-[10px] font-mono text-slate-500 font-bold uppercase mb-1">Frontend_Module</p>
                            <p className="text-sm font-black text-white tracking-tight uppercase">HTML CSS JS • <span className="text-cyan-400">React Tailwind Bootstrap</span></p>
                          </div>
                        </div>
                      </div>

                      {/* BACKEND */}
                      <div className="group/tech p-5 rounded-[1.5rem] bg-white/5 border border-white/5 hover:border-emerald-500/50 transition-all">
                        <div className="flex items-center gap-4">
                          <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-400 group-hover/tech:scale-110 transition-transform"><Zap size={24} /></div>
                          <div>
                            <p className="text-[10px] font-mono text-slate-500 font-bold uppercase mb-1">Core_Engine</p>
                            <p className="text-sm font-black text-white tracking-tight uppercase">Python <span className="text-emerald-400">FastAPI</span> • PHP • MySQL <span className="text-blue-400">SQLite</span></p>
                          </div>
                        </div>
                      </div>

                      {/* HARDWARE */}
                      <div className="group/tech p-5 rounded-[1.5rem] bg-white/5 border border-white/5 hover:border-purple-500/50 transition-all">
                        <div className="flex items-center gap-4">
                          <div className="p-3 rounded-xl bg-purple-500/10 text-purple-400 group-hover/tech:scale-110 transition-transform"><Cpu size={24} /></div>
                          <div>
                            <p className="text-[10px] font-mono text-slate-500 font-bold uppercase mb-1">Embedded_Logic</p>
                            <p className="text-sm font-black text-white tracking-tight uppercase">ESP32 • Arduino C++ • <span className="text-purple-400">Sensor Systems</span></p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* PREMIUM FOOTER SOCIALS */}
                  <div className="relative z-10 pt-10 border-t border-white/10 flex justify-center gap-5 flex-wrap">
                    <IconButton href="#" icon={<Linkedin size={24} />} color="text-blue-400" />
                    <IconButton href="https://github.com/rayansiam2021" icon={<Github size={24} />} color="text-white" />
                    <IconButton href="#" icon={<Briefcase size={24} />} color="text-emerald-400" /> 
                    <IconButton href="#" icon={<Facebook size={24} />} color="text-cyan-500" />
                    <IconButton href="#" icon={<Instagram size={24} />} color="text-pink-500" />
                  </div>

                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
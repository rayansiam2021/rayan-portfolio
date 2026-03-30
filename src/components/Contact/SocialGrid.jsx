import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Globe, ArrowUpRight } from 'lucide-react';

const SocialGrid = () => {
  const socials = [
    { 
      name: 'LinkedIn', 
      label: 'Professional_Logs', 
      description: 'Insights on Frontend Architecture & Leadership.',
      icon: <Linkedin size={22} />, 
      url: 'https://linkedin.com/in/rayan-siam', 
      color: '#00a0dc', // Boosted saturation
      tag: 'Available'
    },
    { 
      name: 'GitHub', 
      label: 'Source_Control', 
      description: 'Open-source React components & IoT logic.',
      icon: <Github size={22} />, 
      url: 'https://github.com/rayan-siam', 
      color: '#a855f7',
      tag: 'Codebase'
    },
    { 
      name: 'Upwork', 
      label: 'Service_Market', 
      description: 'Verified history of Full-Stack delivery.',
      icon: <Globe size={22} />, 
      url: 'https://www.upwork.com/freelancers/~010b9b0bfb0905eb7e', 
      color: '#14cf93', // High-intensity emerald
      tag: 'Available'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full animate-in fade-in slide-in-from-bottom duration-1000 delay-200">
      {socials.map((social, idx) => (
        <motion.div 
          key={social.name} 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: idx * 0.1 }}
          className="h-full"
        >
          <a 
            href={social.url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="group relative flex flex-col items-center text-center gap-6 p-10 rounded-[2rem] overflow-hidden bg-[#030712] transition-all duration-500 h-full smooth-gpu-layer"
            style={{ 
              /* 🎨 LASER-EDGE BORDER: High-voltage white center */
              background: `linear-gradient(135deg, 
                ${social.color} 0%, 
                ${social.color} 40%, 
                #ffffff 50%, 
                ${social.color} 60%, 
                ${social.color} 100%)` 
            }}
          >
            {/* ⚡ STANDBY GLOW: Visible constant atmospheric bloom */}
            <div 
              className="absolute inset-0 opacity-15 group-hover:opacity-40 transition-opacity duration-1000 pointer-events-none"
              style={{
                background: `radial-gradient(circle at center, ${social.color} 0%, transparent 80%)`,
                filter: 'blur(50px)'
              }}
            />

            {/* ⚡ CORE BLOOM: Sharp hover center brightness */}
            <div 
              className="absolute inset-0 opacity-0 group-hover:opacity-60 transition-opacity duration-500 pointer-events-none"
              style={{
                background: `radial-gradient(circle at center, ${social.color} 20%, transparent 60%)`,
                filter: 'blur(30px)'
              }}
            />

            <div className="relative z-10 w-full h-full bg-[#030712] rounded-[calc(2rem-2px)] p-8 flex flex-col items-center border border-white/10 group-hover:border-white/20 transition-colors">
              
              {/* STATUS TAG: Floating with glow */}
              <div className="absolute top-6 right-6">
                <span className="text-[8px] uppercase tracking-[0.4em] font-black px-3 py-1.5 rounded-lg border border-white/10 text-slate-500 group-hover:text-white group-hover:border-white/30 transition-all bg-[#030712]/80 backdrop-blur-md shadow-xl"
                      style={{ boxShadow: `0 0 10px ${social.color}10` }}>
                  {social.tag}
                </span>
              </div>

              {/* ICON: High-saturation module with back-glow */}
              <div 
                className="relative mb-8 p-5 rounded-2xl bg-white/5 border border-white/10 transition-all duration-500 group-hover:scale-110 group-hover:border-white/30 flex items-center justify-center shadow-inner"
                style={{ color: social.color }}
              >
                {social.icon}
                <div className="absolute inset-0 blur-2xl opacity-40 group-hover:opacity-100 transition-opacity rounded-full" 
                     style={{ backgroundColor: social.color }} />
              </div>

              {/* CONTENT: Centered and SPECULAR */}
              <div className="flex flex-col items-center">
                <p className="text-[10px] uppercase tracking-[0.5em] font-black text-slate-500 mb-3 group-hover:text-slate-300 transition-colors">
                  {social.label}
                </p>
                <h5 
                  className="text-2xl font-black uppercase italic tracking-tighter mb-4 transition-all duration-500 group-hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.4)]"
                  style={{ color: social.color }}
                >
                  {social.name}
                </h5>
                <p className="text-[13px] text-slate-400 leading-relaxed font-medium italic group-hover:text-slate-200 transition-colors max-w-[220px]">
                  {social.description}
                </p>
              </div>

              {/* DECORATIVE SPECS: Bottom accent bars */}
              <div className="mt-auto pt-8 flex gap-2">
                {[1,2,3,4,5].map(i => (
                  <div key={i} className="w-1 h-3 bg-white/10 rounded-full group-hover:bg-white/30 transition-colors" />
                ))}
              </div>

              {/* BOTTOM ARROW: High-contrast specular */}
              <div className="absolute bottom-6 right-6">
                 <ArrowUpRight size={20} strokeWidth={3} className="text-slate-700 group-hover:text-white group-hover:drop-shadow-[0_0_8px_#fff] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </div>
            </div>
          </a>
        </motion.div>
      ))}
    </div>
  );
};

export default SocialGrid;
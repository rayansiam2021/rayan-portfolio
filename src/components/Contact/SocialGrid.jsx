import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Globe, ArrowUpRight } from 'lucide-react';

const SocialGrid = () => {
  const socials = [
    { name: 'LinkedIn', label: 'Pro_Logs', icon: <Linkedin size={18} />, url: 'https://linkedin.com/in/rayan-siam', color: '#3b82f6' },
    { name: 'GitHub', label: 'Source', icon: <Github size={18} />, url: 'https://github.com/rayan-siam', color: '#a855f7' },
    { name: 'Upwork', label: 'Market', icon: <Globe size={18} />, url: '#', color: '#34d399' }
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
      {socials.map((social, idx) => (
        <motion.div key={social.name} initial={{ opacity: 0, scale: 0.98 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ delay: idx * 0.1 }} viewport={{ once: true }} className="h-full">
          <a href={social.url} target="_blank" rel="noopener noreferrer"
             className="relative flex flex-col gap-5 p-6 rounded-2xl border border-white/5 bg-[#0f172a] hover:bg-white/[0.03] transition-all h-full group">
            
            <div className="flex justify-between items-center w-full">
              <div className="text-slate-400 transition-colors group-hover:text-white">{social.icon}</div>
              <div style={{ color: social.color }} className="p-1.5 rounded-full bg-white/5 opacity-50 group-hover:opacity-100 transition-opacity"><ArrowUpRight size={14} /></div>
            </div>

            <div className="flex-grow">
              <p className="text-[9px] uppercase tracking-[0.4em] font-bold text-slate-500 mb-1 group-hover:text-slate-300 transition-colors">{social.label}</p>
              <h5 style={{ color: social.color }} className="text-lg font-black uppercase italic tracking-tighter transition-colors">{social.name}</h5>
            </div>

            {/* Glowing accent border on hover matching ProjectMatrix Cards */}
            <div className="absolute inset-0 border-2 border-dashed border-transparent rounded-2xl transition-all group-hover:border-rose-500/50 group-hover:scale-[1.03] pointer-events-none" />
          </a>
        </motion.div>
      ))}
    </div>
  );
};

export default SocialGrid;
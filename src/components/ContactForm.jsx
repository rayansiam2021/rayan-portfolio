import React, { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { 
  Send, 
  CheckCircle2, 
  Linkedin, 
  Sparkles,
  Zap,
  Globe
} from 'lucide-react';

const ContactForm = () => {
  const formRef = useRef();
  const [status, setStatus] = useState('IDLE');

  const handleUplink = (e) => {
    e.preventDefault();
    setStatus('SENDING');

    const SERVICE_ID = "service_jwgnrsw"; 
    const TEMPLATE_ID = "template_ivdj4on";
    const PUBLIC_KEY = "1YnQANybrI4mDAYLp"; 

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
      .then(() => {
        setStatus('SUCCESS');
        formRef.current.reset();
      })
      .catch(() => setStatus('ERROR'));
  };

  // High-visibility text with fixed electric glow borders
  const inputClass = "w-full bg-[#0a1120]/80 border border-cyan-500/40 rounded-xl px-5 py-4 text-base text-white placeholder:text-slate-500 focus:outline-none focus:border-cyan-400 focus:shadow-[0_0_15px_rgba(34,211,238,0.2)] transition-all font-medium";
  const labelClass = "block text-xs font-black uppercase tracking-[0.25em] text-cyan-500 mb-3 ml-1";

  return (
    <div className="relative max-w-4xl mx-auto px-4 py-12 selection:bg-cyan-500/30">
      {/* Container with Electric Border Glow */}
      <form 
        ref={formRef} 
        onSubmit={handleUplink} 
        className="relative bg-[#030712] border border-cyan-500/30 p-8 md:p-12 rounded-[2.5rem] shadow-[0_0_40px_rgba(6,182,212,0.1)] overflow-hidden"
      >
        <div className="mb-10">
          <h4 className="text-2xl md:text-3xl font-black tracking-tighter text-white mb-3 ">
           Do you have<span className="text-cyan-400"> project </span>in   <span className="text-cyan-400"> mind ? </span>
          </h4>
          <p className="text-slate-400 text-base font-medium leading-relaxed max-w-lg">
            Let’s discuss your project, ideas together and make it reality.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="space-y-1">
            <label className={labelClass}>Your Name</label>
            <input name="user_name" required type="text" placeholder="e.g. Rayan Ahmed" className={inputClass} />
          </div>

          <div className="space-y-1">
            <label className={labelClass}>Email Address</label>
            <input name="user_email" required type="email" placeholder="name@provider.com" className={inputClass} />
          </div>
        </div>

        <div className="mb-10 space-y-1">
          <label className={labelClass}>Project Details</label>
          <textarea name="message" required rows="4" placeholder="Tell me about your project, requirements, or idea..." className={inputClass + " resize-none"} />
        </div>

        {/* Primary Action Button */}
        <button
          type="submit"
          disabled={status === 'SENDING' || status === 'SUCCESS'}
          className={`w-full flex items-center justify-center gap-4 py-5 rounded-xl text-sm font-black tracking-[0.5em] uppercase transition-all duration-500 ${
            status === 'SUCCESS' 
              ? "hidden" 
              : "bg-white text-black hover:bg-cyan-400 active:scale-[0.98] shadow-lg shadow-cyan-500/10"
          }`}
        >
          {status === 'IDLE' ? (
            <>Send Message <Send size={18} /></>
          ) : "Syncing..."}
        </button>

        <AnimatePresence>
          {status === 'SUCCESS' && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-8">
              {/* Successfully Sent Button */}
              <div className="w-full flex items-center justify-center gap-4 py-5 rounded-xl border border-emerald-500/40 bg-emerald-500/10 text-emerald-400 text-sm font-black tracking-[0.5em] uppercase">
                <CheckCircle2 size={20} /> Successfully Sent
              </div>

              {/* Success Message Banner */}
              <div className="flex items-center justify-center gap-4 py-5 px-8 border border-cyan-400/30 rounded-xl bg-cyan-400/5">
                <Sparkles size={16} className="text-cyan-400" />
                <span className="text-xs font-bold tracking-wider text-cyan-100 uppercase italic text-center">
                  Message sent successfully. I’ll get back to you soon.
                </span>
              </div>

              {/* Direct Links */}
              <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-8 border-t border-white/5">
                <p className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em]">
                  Or connect with me directly:
                </p>
                <div className="flex items-center gap-4">
                  <a href="#" className="flex items-center gap-2 px-6 py-3 bg-cyan-500/5 border border-cyan-500/20 rounded-lg text-cyan-400 text-[10px] font-black tracking-widest uppercase hover:bg-cyan-500 hover:text-white transition-all">
                    <Linkedin size={14} /> LinkedIn
                  </a>
                  <a href="#" className="flex items-center gap-2 px-6 py-3 bg-emerald-500/5 border border-emerald-500/20 rounded-lg text-emerald-400 text-[10px] font-black tracking-widest uppercase hover:bg-emerald-400 hover:text-white transition-all">
                    <Zap size={14} /> Upwork
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Status Footer */}
        <div className="mt-12 pt-6 border-t border-white/5 flex items-center justify-between opacity-60">
          <div className="flex items-center gap-2 text-slate-500">
            <Globe size={12} className="animate-pulse" />
            <span className="text-[12px] font-mono tracking-[0.2em] uppercase font-bold">
              Powered by<span className="text-cyan-400"> Rayan.Dev </span>
            </span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full shadow-[0_0_8px_#22d3ee]" />
            <span className="text-[12px] font-mono tracking-[0.2em] uppercase font-bold text-slate-400">
              Status:<span className="text-cyan-400"> Available For Work </span>
            </span>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
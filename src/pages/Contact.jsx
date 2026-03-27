import React from 'react';
import { motion } from 'framer-motion';
import ContactInfo from '../components/Contact/ContactInfo';
import SocialGrid from '../components/Contact/SocialGrid';
import AvailabilityStatus from '../components/Contact/AvailabilityStatus';
import ContactForm from '../components/ContactForm';
import GradientText from '../components/bits/GradientText';

const Contact = () => {
  return (
    <div className="min-h-screen pt-32 pb-20 px-6 md:px-10 lg:px-20 bg-[#030712]">
      <div className="max-w-7xl mx-auto">
        
        {/* --- ELECTRIC HEADER: Switched to Rose/Red --- */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-16 md:mb-24 text-center w-full flex flex-col items-center">
          <GradientText
            colors={["#f43f5e", "#ffffff", "#f43f5e", "#fb7185", "#f43f5e"]}
            className="text-3xl md:text-5xl font-black uppercase tracking-tighter italic"
          >
            ESTABLISH_SIGNAL
          </GradientText>
          <p className="mt-4 text-slate-400 text-sm md:text-base font-light leading-relaxed max-w-[550px]">
            Every great build starts with a simple conversation. Whether it's a 
            <span className="text-rose-500 font-bold"> corporate project</span> or a 
            <span className="text-rose-500 font-bold"> custom web experience</span>, let's establish a direct dialogue.
          </p>
          <div className="mt-8 h-[1px] w-24 bg-rose-500/50 rounded-full animate-pulse" />
        </motion.div>

        {/* --- MAIN GRID: Optimized Mobile Order --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          
          {/* RIGHT SIDE (Mobile: TOP): Form first for instant action */}
          <div className="lg:col-span-7 order-1 lg:order-2">
             <div className="bg-[#0f172a]/70 backdrop-blur-xl p-8 md:p-12 rounded-[2rem] border border-white/5 relative overflow-hidden group shadow-2xl">
                {/* Visual Accent from ProjectMatrix */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-rose-500/5 blur-[50px] pointer-events-none" />
                
                <h3 className="text-[12px] font-black uppercase tracking-[0.4em] text-rose-500 italic mb-10 flex items-center gap-4">
                  <span className="w-12 h-[1px] bg-rose-500/50"></span>
                  Transmit_Message
                </h3>
                
                <ContactForm />
                
                {/* Embedded status footer */}
                <div className="mt-10 pt-6 border-t border-white/5 flex items-center justify-between opacity-50">
                   <p className="text-[10px] font-mono uppercase tracking-[0.2em] font-bold text-slate-500">Node_Secure: SSL_Encrypted</p>
                   <p className="text-[10px] font-mono uppercase tracking-[0.2em] font-bold text-rose-500 animate-pulse italic">● Online</p>
                </div>
             </div>
          </div>

          {/* LEFT SIDE (Mobile: BOTTOM): Story details */}
          <div className="lg:col-span-5 space-y-12 order-2 lg:order-1">
            <section> <ContactInfo /> </section>
            <section className="mt-12"> <AvailabilityStatus /> </section>
          </div>
        </div>

        {/* --- FOOTER: Synced with ProjectMatrix Footer Vibe --- */}
        <footer className="mt-28 md:mt-44 pt-12 border-t border-white/5">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-10">
            <div className="max-w-sm">
              <h4 className="text-xs font-black uppercase tracking-[0.4em] text-rose-500 italic mb-3">
                DIGITAL_FOOTPRINT
              </h4>
              <p className="text-slate-500 text-xs font-light uppercase tracking-widest leading-relaxed">
                Tracing my activity across professional frequencies and source control networks.
              </p>
            </div>
            
            <div className="w-full md:w-auto">
              <SocialGrid />
            </div>
          </div>
        </footer>

      </div>

      {/* 🔮 SYNCED ELECTRIC SPIN KEYFRAMES (Critical Design Logic from ProjectMatrix) */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes shared-conic-spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .global-snake-spin {
          animation: shared-conic-spin 4.5s linear infinite !important;
        }
      `}} />
    </div>
  );
};

export default Contact;
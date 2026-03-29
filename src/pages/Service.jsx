import React, { useEffect } from 'react';
import MyApproach from '../components/Service/MyApproach';
import WhatIBuild from '../components/Service/WhatIBuild';
import HowWeWork from '../components/Service/HowWeWork';
import MyToolbox from '../components/Service/MyToolbox';
import HardwareWins from '../components/Service/HardwareWins';
import ContactForm from '../components/ContactForm';
import ConversionCTA from '../components/ConversionCTA'; 
import { CTA_CONFIGS } from '../data/ctaData'; 
import { Mail, ArrowUpRight } from 'lucide-react';

const Service = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const ctaData = CTA_CONFIGS.service || CTA_CONFIGS.contact; 

  return (
    <div className="min-h-screen bg-[#020617] pt-32 pb-20 selection:bg-cyan-500/30 relative overflow-hidden text-white">
      
      {/* 01. STORY HERO */}
      <MyApproach />

      {/* 02. SERVICE CATEGORIES */}
      <WhatIBuild />

      {/* 03. PROCESS LOGIC */}
      <HowWeWork />

      {/* 🚀 04. CONVERSION BANNER */}
      <section className="max-w-7xl mx-auto px-6 mb-32 relative z-10" id="contact-hub">
        <ConversionCTA 
          variant={ctaData.variant}         
          badge={ctaData.badge}             
          title={ctaData.title}             
          description={ctaData.description} 
          primaryAction={ctaData.primaryAction}
          secondaryAction={ctaData.secondaryAction}
        />
      </section>

      {/* 🛠️ 05. TECHNICAL DEEP DIVE */}
      <section className="max-w-7xl mx-auto px-6 py-24 relative z-10 border-t border-white/5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          <MyToolbox /> 
          <HardwareWins />
        </div>
      </section>

      {/* 📝 06. FINAL INTERACTION (Background & Glows Removed) */}
      <section className="max-w-4xl mx-auto px-6 py-24 relative z-10" id="contact-form">
        <div className="flex flex-col items-center mb-16 text-center">
          <div className="flex items-center gap-4 mb-4">
            <div className="h-[1px] w-12 bg-cyan-500/30" />
            <span className="text-[11px] font-black uppercase tracking-[0.4em] text-slate-500 font-mono italic">
              Initialize_Direct_Message
            </span>
            <div className="h-[1px] w-12 bg-cyan-500/30" />
          </div>
          <h3 className="text-2xl md:text-3xl font-black uppercase italic tracking-tighter text-white">
            Send a <span className="text-cyan-400 text-glow-sm">Direct Message</span>
          </h3>
        </div>

        {/* Form is now standing alone without the dark box or glow behind it */}
        <div className="relative w-full">
          <ContactForm />
        </div>
      </section>

      {/* 🌌 AMBIENT BACKGROUND EFFECTS */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[-10%] right-[-10%] w-[45%] h-[45%] bg-indigo-600/5 blur-[140px]" />
        <div className="absolute bottom-[-5%] left-[-5%] w-[35%] h-[35%] bg-cyan-600/5 blur-[110px]" />
        <div className="absolute top-[30%] left-[20%] w-[20%] h-[20%] bg-blue-600/[0.02] blur-[100px]" />
      </div>
    </div>
  );
};

export default Service;
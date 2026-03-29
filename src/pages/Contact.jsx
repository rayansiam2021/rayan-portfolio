﻿import React from 'react';
import ContactInfo from '../components/Contact/ContactInfo';
import ContactForm from '../components/ContactForm';
import AvailabilityStatus from '../components/Contact/AvailabilityStatus';
import SocialGrid from '../components/Contact/SocialGrid';
import ConversionCTA from '../components/ConversionCTA';
import ServiceHighlights from '../components/Contact/ServiceHighlights'; // The new component
import { CTA_CONFIGS } from '../data/ctaData'; 

const Contact = () => {
  const ctaData = CTA_CONFIGS.contact; 

  return (
    <div className="min-min-h-screen bg-[#020617] pt-32 pb-20 px-6 sm:px-12 lg:px-24 overflow-x-hidden selection:bg-cyan-500/30 relative">
      
      {/* 🚀 HERO: HUMAN INTRODUCTION */}
      <section className="max-w-7xl mx-auto mb-24 relative z-10">
        <ConversionCTA 
          variant={ctaData.variant}         
          badge={ctaData.badge}             
          title={ctaData.title}             
          description={ctaData.description} 
          primaryAction={ctaData.primaryAction}
          secondaryAction={ctaData.secondaryAction}
        />
      </section>

      {/* 💼 SERVICES: WHAT I CAN HELP WITH (The new section) */}
      <section className="max-w-7xl mx-auto relative z-10">
        <ServiceHighlights />
      </section>

      {/* 🏗️ MAIN INTERACTION GRID */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-start relative z-10">
        
        {/* LEFT: PERSONAL INFO & TRUST */}
        <div className="lg:col-span-5 flex flex-col gap-10">
          <ContactInfo />
          <AvailabilityStatus />
        </div>

        {/* RIGHT: THE CONVERSATION (Form) */}
        <div className="lg:col-span-7 flex flex-col" id="contact-form">
          <div className="flex items-center gap-4 mb-10">
            <div className="h-[1px] flex-grow bg-white/10" />
            <span className="text-[11px] font-black uppercase tracking-[0.4em] text-slate-500 font-mono italic">
              Send_A_Message
            </span>
            <div className="h-2 w-2 rounded-full border border-cyan-500/40 animate-pulse" />
          </div>

          <div className="relative w-full">
            <ContactForm />
            
            {/* Ambient Glow behind form */}
            <div className="absolute -top-20 -right-20 w-80 h-80 bg-cyan-600/5 blur-[120px] pointer-events-none -z-10" />
          </div>
        </div>
      </div>

      {/* 🌐 FOOTER: NODES */}
      <div className="max-w-7xl mx-auto mt-40 relative z-10">
        <div className="flex items-center gap-6 mb-12">
          <span className="text-[12px] font-black uppercase tracking-[0.5em] text-cyan-500">
            Network_Nodes
          </span>
          <div className="h-[1px] flex-grow bg-white/5" />
        </div>
        <SocialGrid />
      </div>

      {/* 🌌 GLOBAL BACKGROUND FX (Matching Projects page) */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[-10%] right-[-10%] w-[45%] h-[45%] bg-indigo-600/5 blur-[140px]" />
        <div className="absolute bottom-[-5%] left-[-5%] w-[35%] h-[35%] bg-cyan-600/5 blur-[110px]" />
        <div className="absolute top-[30%] left-[20%] w-[20%] h-[20%] bg-blue-600/[0.02] blur-[100px]" />
      </div>
    </div>
  );
};

export default Contact;
import React from 'react';
import ContactInfo from '../components/Contact/ContactInfo';
import ContactForm from '../components/ContactForm';
import AvailabilityStatus from '../components/Contact/AvailabilityStatus';
import SocialGrid from '../components/Contact/SocialGrid';
import ConversionCTA from '../components/ConversionCTA';
import { CTA_CONFIGS } from '../data/ctaData'; 

const Contact = () => {
  // We define it as 'ctaData' here...
  const ctaData = CTA_CONFIGS.contact; 

  return (
    <div className="min-h-screen bg-[#020617] pt-32 pb-20 px-6 sm:px-12 lg:px-24 overflow-x-hidden selection:bg-cyan-500/30">
      
      {/* 🚀 HERO: DYNAMIC CONVERSION CTA */}
      <section className="max-w-7xl mx-auto mb-24 relative z-10">
        <ConversionCTA 
          // ...and we MUST use 'ctaData' exactly here
          variant={ctaData.variant}         
          badge={ctaData.badge}             
          title={ctaData.title}             
          description={ctaData.description} 
          primaryAction={ctaData.primaryAction}
          secondaryAction={ctaData.secondaryAction}
        />
      </section>

      {/* 🏗️ ARCHITECTURAL LAYERS */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        <div className="lg:col-span-5 flex flex-col gap-10">
          <ContactInfo />
          <AvailabilityStatus />
        </div>

        <div className="lg:col-span-7 flex flex-col" id="contact-form">
          <div className="flex items-center gap-4 mb-10">
            <div className="h-[1px] flex-grow bg-white/10" />
            <span className="text-[11px] font-black uppercase tracking-[0.4em] text-slate-500 font-mono italic">
              Transmit_Packet_Data
            </span>
          </div>

          <div className="relative z-10 w-full">
            <ContactForm />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-40">
        <div className="flex items-center gap-6 mb-12">
          <span className="text-[12px] font-black uppercase tracking-[0.5em] text-cyan-500">
            Network_Nodes
          </span>
          <div className="h-[1px] flex-grow bg-white/5" />
        </div>
        <SocialGrid />
      </div>
    </div>
  );
};

export default Contact;
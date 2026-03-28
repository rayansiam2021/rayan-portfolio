import React from 'react';
import { Mail, MapPin, CheckCircle2 } from 'lucide-react';

const ContactInfo = () => {
  const achievements = [
    "Built business marketplaces using WordPress & Dokan",
    "Developed an Arduino-based obstacle avoiding car",
    "Created a smart fire detection system using sensors"
  ];

  return (
    <div className="flex flex-col gap-8">
      {/* Human Greeting & Intro */}
      <div className="space-y-4">
        <h3 className="text-2xl font-black uppercase italic tracking-tighter text-white">
          The Human Behind the Code
        </h3>
        <p className="text-slate-400 leading-relaxed font-medium">
          I’m a CIS student and I’ve been working on full-stack projects, APIs, and some IoT stuff. 
          I’m looking for opportunities where I can learn, build real things, and grow as a developer.
        </p>
      </div>

      {/* Direct Contact Info */}
      <div className="grid gap-4">
        <div className="group flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-cyan-500/30 transition-all">
          <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-500">
            <Mail size={20} />
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">You can reach me directly:</p>
            <p className="text-white font-mono">rayansiam2021@gmail.com</p>
          </div>
        </div>

        <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5">
          <div className="p-2 rounded-lg bg-purple-500/10 text-purple-500">
            <MapPin size={20} />
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">Base Coordinates:</p>
            <p className="text-white">Dhaka, Bangladesh</p>
          </div>
        </div>
      </div>

      {/* Trust Section: Simple Achievements */}
      <div className="pt-6 border-t border-white/5">
        <p className="text-[11px] font-black uppercase tracking-[0.3em] text-cyan-500 mb-4">
          Real things I've built:
        </p>
        <ul className="space-y-3">
          {achievements.map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-sm text-slate-400">
              <CheckCircle2 size={16} className="text-cyan-500 mt-0.5 shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ContactInfo;
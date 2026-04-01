import React from 'react';
import AboutHero from '../components/About/AboutHero';
import VersionHistory from '../components/About/VersionHistory';
import EducationModule from '../components/About/EducationModule'; // New Integrated Component
import CoreTraining from '../components/About/CoreTraining'; 
import SkillTerminal from '../components/SkillTerminal'; 
import ConversionCTA from '../components/ConversionCTA'; 

const About = () => {
  return (
    <div className="min-h-screen bg-[#020617] text-white selection:bg-cyan-500/30">
      
      {/* 1. IDENTITY LAYER: Hero & Introduction */}
      <AboutHero />

      {/* 2. EXPERIENCE LAYER: Professional & IoT Projects Archive */}
      <VersionHistory />

      {/* 3. ACADEMIC LAYER: University & Foundation Logic */}
      <EducationModule />

      {/* 4. SKILLS SECTION: Terminal-Style Tech Stack */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col items-center mb-16">
          <div className="h-[1px] w-12 bg-white/10" />
        </div>
        <SkillTerminal />
      </section>

      {/* 5. TRAINING LAYER: In-depth Skill Categories */}
      <CoreTraining />

      {/* 6. CONVERSION LAYER: Call to Action */}
      <div className="py-32 px-6">
        <ConversionCTA 
          badge="COLLABORATION_PROTOCOL"
          title="Let’s Work Together"
          description="I’m currently open to freelance work and collaboration. Whether you have a fully-formed project or just an idea, I can help you build, test, and launch it."
          primaryAction={{ 
            label: "Send Message", 
            link: "mailto:rayansiam2021@gmail.com" 
          }}
          secondaryAction={{ 
            label: "Hire on Upwork", 
            link: "https://www.upwork.com/freelancers/~010b9b0bfb0905eb7e" 
          }}
          variant="primary"
        />
      </div>

    </div>
  );
};

export default About;
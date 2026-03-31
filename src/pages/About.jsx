import React from 'react';
import AboutHero from '../components/About/AboutHero';
import VersionHistory from '../components/About/VersionHistory';
import CoreTraining from '../components/About/CoreTraining'; // matching your file name
import SkillTerminal from '../components/SkillTerminal'; 
import ConversionCTA from '../components/ConversionCTA'; 

const About = () => {
  return (
    <div className="min-h-screen bg-[#030712] text-white selection:bg-cyan-500/30">
      
      <AboutHero />

      <VersionHistory />

      {/* SKILLS SECTION - EXPANDED VIEW */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <SkillTerminal />
      </section>

      <CoreTraining />

      {/* STRONGER CTA */}
      <div className="py-32 px-6">
        <ConversionCTA 
          badge="COLLABORATION"
          title="Let’s Work Together"
          description="I’m available for freelance work and open to collaboration opportunities. If you have a project idea, need a website, or want to build a system, I’d be happy to help."
          primaryAction={{ label: "Contact Me", link: "/contact" }}
          secondaryAction={{ label: "Hire Me on Upwork", link: "https://upwork.com" }}
          variant="primary"
        />
      </div>

    </div>
  );
};

export default About;
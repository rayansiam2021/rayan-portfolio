import React from 'react';
import ProfileCard from './ProfileCard';
import BioSection from './BioSection';
import { motion } from 'framer-motion';

const HeroContainer = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center min-h-[85vh] py-4 md:py-12 overflow-visible">
      {/* LEFT COLUMN: PROFILE CARD */}
      <motion.div 
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="lg:col-span-5 flex justify-center transform-gpu will-change-transform"
        style={{ contain: 'layout' }}
      >
        <ProfileCard />
      </motion.div>

      {/* RIGHT COLUMN: BIO CONTENT */}
      <motion.div 
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        className="lg:col-span-7 flex flex-col justify-center space-y-6 transform-gpu will-change-transform"
      >
        <BioSection />
      </motion.div>
    </div>
  );
};

export default HeroContainer;
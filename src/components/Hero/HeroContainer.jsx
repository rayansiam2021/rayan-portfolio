import ProfileCard from './ProfileCard';
import BioSection from './BioSection';
import GradientText from '../bits/GradientText';// Import your new component
import { motion } from 'framer-motion';

const HeroContainer = ({ data }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center min-h-[85vh] py-12">
      
      {/* Left Column - Profile Card */}
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="lg:col-span-5 flex justify-center"
      >
        <ProfileCard 
          name={data.full_name} 
          university={data.university} 
          cgpa={data.cgpa} 
        />
      </motion.div>

      {/* Right Column - Bio & Animated Headline */}
      <motion.div 
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="lg:col-span-7 flex flex-col justify-center space-y-6"
      >
        {/* New Animated Tagline */}
        

        <BioSection 
          bio={data.bio}
          links={{
            fb: data.facebook_url,
            li: data.linkedin_url,
            ig: data.instagram_url,
            cv: data.cv_url
          }}
        />
      </motion.div>
    </div>
  );
};

export default HeroContainer;
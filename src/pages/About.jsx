import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-10">
      <div className="max-w-2xl border-l-2 border-cyan-500 pl-8">
        <h1 className="text-5xl font-black text-white tracking-tighter uppercase italic mb-4">
          Core_Identity<span className="text-cyan-500">.</span>
        </h1>
        <p className="text-slate-400 text-lg font-light leading-relaxed">
          BSc in Computer Information Systems student specializing in 
          Full-stack development and IoT system prototyping.
        </p>
      </div>
    </div>
  );
};

export default About;
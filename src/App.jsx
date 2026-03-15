import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Optimization: Lazy load pages so the initial home scroll is instant
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Project = lazy(() => import('./pages/Project'));
const Service = lazy(() => import('./pages/Service'));
const Contact = lazy(() => import('./pages/Contact'));

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#020617] text-white selection:bg-cyan-500/30 antialiased">
        <Navbar />
        
        {/* GPU Accelerated Wrapper */}
        <main className="w-full transform-gpu">
          <Suspense fallback={<div className="h-screen bg-[#020617]" />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/project/:projectId" element={<Project />} />
              <Route path="/service" element={<Service />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Suspense>
          <Footer />
        </main>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        /* Remove scroll stutter globally */
        html { scroll-behavior: smooth; }
        body { overscroll-behavior-y: none; }
        
        /* Force hardware acceleration for all route changes */
        .w-full { will-change: contents; }
      `}} />
    </Router>
  );
}

export default App;
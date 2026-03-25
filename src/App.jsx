import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Direct imports to bypass Lazy-Loading bugs for now
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects'; // This MUST be plural
import Project from './pages/Project';   // This MUST be singular
import Service from './pages/Service';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#020617] text-white selection:bg-cyan-500/30">
        <Navbar />
        <main className="w-full">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            
            {/* Standard Archive Grid */}
            <Route path="/projects" element={<Projects />} />
            
            {/* Individual Log Detail */}
            <Route path="/project/:projectId" element={<Project />} />
            
            <Route path="/service" element={<Service />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Home, User, Layers, Briefcase, Mail } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/", icon: <Home size={18} /> },
    { name: "About", path: "/about", icon: <User size={18} /> },
    
    /* UPDATED: Path matches the id="archive" in your Home.jsx */
    { name: "Project", path: "/#archive", icon: <Layers size={18} /> }, 
    
    { name: "Service", path: "/service", icon: <Briefcase size={18} /> },
    { name: "Contact", path: "/contact", icon: <Mail size={18} /> },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#020617]/80 backdrop-blur-md border-b border-white/5 px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        
        <Link to="/" className="text-white font-black tracking-tighter text-xl italic uppercase">
          Rayan<span className="text-cyan-500">.</span>Dev
        </Link>

        {/* Desktop Links - Using <a> for reliable hash navigation */}
        <div className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.path}
              className={`text-[11px] font-mono uppercase tracking-[0.2em] transition-colors ${
                location.pathname === link.path ? 'text-cyan-400' : 'text-slate-400 hover:text-white'
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>

        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-[#020617] border-b border-white/10 p-6 flex flex-col gap-4 md:hidden">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.path}
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-4 text-white font-bold uppercase italic"
            >
              <span className="text-cyan-500">{link.icon}</span>
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
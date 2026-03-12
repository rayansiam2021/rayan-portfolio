import { useEffect, useState } from 'react';
import Home from './pages/Home';

function App() {
  const [personalData, setPersonalData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/api/personal-info');
        if (!response.ok) throw new Error("Backend not reached");
        const data = await response.json();
        setPersonalData(data);
      } catch (err) {
        console.warn("Using Fallback Data:", err.message);
        setPersonalData({
          full_name: "Rayan Ahmed",
          university: "Daffodil International University",
          cgpa: "3.40",
          bio: "Full-Stack Developer & IoT Enthusiast with 3+ years of coding experience. Team lead in various group projects involving microcontroller programming and sensor integration.",
          cv_url: "#",
          facebook_url: "#",
          linkedin_url: "#",
          instagram_url: "#"
        });
      }
    };

    fetchData();
  }, []);

  if (!personalData) {
    return (
      <div className="bg-[#020617] h-screen flex flex-col items-center justify-center">
        <div className="w-16 h-16 border-4 border-cyan-500/20 border-t-cyan-500 rounded-full animate-spin"></div>
        <p className="mt-4 text-cyan-500 font-mono text-xs animate-pulse tracking-widest">BOOTING_SYSTEM...</p>
      </div>
    );
  }

  return <Home data={personalData} />;
}

export default App;
export const projectsData = [
  {
    id: "satsport-exchange",
    title: "SatSport-Exchange",
    category: "Web Development",
    shortDesc: "A high-performance sports betting exchange platform with real-time API integration.",
    banner: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1200",
    techStack: ["Angular", "FastAPI", "Python", "API"],
    status: "DEPLOYED",
    color: "#00f2ff",
    colorArray: ["#00f2ff", "#ffffff", "#00d4ff", "#3b82f6", "#00f2ff"],
    date: "Feb 2026",
    blogContent: {
      overview: "Built a high-concurrency platform focusing on sub-second latency and real-time data streaming.",
      challenge: "Managing high-frequency data updates from multiple sports APIs simultaneously.",
      results: "Successfully launched with 99.9% uptime for live cricket and football markets."
    }
  },
  {
  id: "ai-plagiarism-detection-system",
  title: "AI & Plagiarism Detection System",
  category: "Full-Stack AI & Engineering",
  shortDesc: "A dual-engine security suite providing forensic-level analysis of AI-generated content and web-based plagiarism.",
  banner: "/assets/projects/plagiarism-detector-bg.jpg",
  techStack: [
    { name: "FastAPI", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg" },
    { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "HuggingFace", icon: "https://huggingface.co/front/assets/huggingface_logo-noborder.svg" },
    { name: "SQLite", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg" },
    { name: "Google API", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg" }
  ],
  status: "STATUS_STABLE",
  color: "#6366f1",
  date: "March 2026",
  blogContent: {
    overview: "Engineered a high-integrity document validation system. The platform executes parallel processing workflows: one branch leverages HuggingFace Transformer models for AI-content probability, while the other utilizes Google Search API for global web-plagiarism indexing.",
    challenge: "Optimizing the asynchronous execution of API calls and machine learning inference. I architected a non-blocking backend to ensure sub-3-second processing times for large document uploads without server latency.",
    results: "Delivered a production-ready forensic reporting engine. The system automatically generates comprehensive .docx audits, featuring precision text-highlighting and actionable writing improvements for academic development.",
    // Corrected path based on your VS Code sidebar
    projectimg: "/assets/projectimg/ai-plagiarism-architecture.png" 
  },
  links: {
    github: "https://github.com/rayansiam2021/A-plagiarism-and-web-content-detection-system",
    // Matches your actual folder structure in public/assets/docs/
    report: "/assets/docs/ai-plagiarism-report-221.docx"
  }
},
  {
  id: "iot-obstacle-avoiding-robot",
  title: "IoT Obstacle Avoiding Car",
  category: "Robotics & Embedded Systems",
  shortDesc: "An autonomous terrestrial vehicle engineered with ultrasonic spatial awareness and real-time decision-making logic.",
  banner: "/assets/projects/robot-bg.jpg",
  techStack: [
    { name: "C++", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
    { name: "Arduino", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/arduino/arduino-original.svg" },
    { name: "L293D Shield", icon: "https://img.icons8.com/color/48/pci-card.png" }, 
    { name: "Ultrasonic", icon: "https://img.icons8.com/color/48/radar.png" },
    { name: "Servo Motor", icon: "https://img.icons8.com/color/48/engine.png" },
    { name: "Embedded", icon: "https://img.icons8.com/color/48/integrated-circuit.png" },
    { name: "IoT", icon: "https://img.icons8.com/color/48/internet-of-things.png" }
  ],
  status: "STATUS_VERIFIED",
  color: "#3b82f6", 
  date: "October 2025",
  blogContent: {
    overview: "Developed a fully autonomous robotic system utilizing ultrasonic sensing and servo-actuated scanning for real-time environment mapping. The complete project source—including the C++ firmware and circuit schematics—is archived in a ZIP file on GitHub for full engineering transparency.",
    challenge: "Managing power-to-torque ratios while optimizing the 'Scan and React' loop. I implemented a hierarchical logic system in C++ that compares lateral distances (lookRight vs lookLeft) to determine the optimal path of least resistance, ensuring collision avoidance at various speeds.",
    results: "Achieved a stable autonomous platform with a detection range of 200cm and a neutral scanning alignment of 115 degrees. The system utilizes software-level speed ramping to prevent voltage spikes, ensuring the longevity of the L293D motor shield and internal circuitry.",
    projectimg: "/assets/projectimg/robot-circuitry.png" 
  },
  links: {
    github: "https://github.com/rayansiam2021/IOT/blob/main/221-16-641_Rayan%20Ahmed_IOT%20ALL.zip",
    report: "/assets/docs/221-16-641_Rayan_IOT.docx" 
  }
},

  {
    id: "multi-drop-fusion",
    title: "Multi Drop Fusion",
    category: "E-Commerce",
    shortDesc: "A retail powerhouse specializing in mobile tech accessories with high-conversion SEO.",
    banner: "https://images.unsplash.com/photo-1556742044-3c52d6e88c62?auto=format&fit=crop&q=80&w=1200",
    techStack: ["WooCommerce", "SEO", "Marketing"],
    status: "LIVE",
    color: "#10b981",
    colorArray: ["#10b981", "#ffffff", "#d1fae5", "#059669", "#10b981"],
    date: "Dec 2025",
    blogContent: {
      overview: "A specialized e-commerce platform for high-demand mobile power banks and accessories.",
      challenge: "Optimizing the store for high traffic surges from social media marketing.",
      results: "Built a conversion-ready architecture that sustained 35% monthly growth."
    }
  }
];

// 12-item filling loop for UI testing
for (let i = 5; i <= 16; i++) {
  projectsData.push({
    id: `project-ref-${i}`,
    title: `Operation Genesis ${i}`,
    category: "Development",
    shortDesc: `Automated Project System Reference ${i} for internal testing and UI layout.`,
    banner: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200",
    techStack: ["Node.js", "Docker"],
    status: "TESTING",
    color: "#a855f7",
    colorArray: ["#a855f7", "#ffffff", "#f3e8ff", "#7e22ce", "#a855f7"],
    date: "2026",
    blogContent: {
      overview: "Automated scaling test for matrix layout.",
      challenge: "Handling dynamic mapping of 16+ items.",
      results: "System verified for production-ready portfolio scaling."
    }
  });
}
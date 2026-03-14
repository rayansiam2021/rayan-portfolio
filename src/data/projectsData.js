export const projectsData = [
  {
    id: "satsport-exchange", // This MUST match the URL: /project/satsport-exchange
    title: "satsport-exchange",
    category: "Web Development",
    shortDesc: "A high-performance sports betting exchange platform with real-time API integration.",
    banner: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1200",
    techStack: ["Angular", "FastAPI", "API"],
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
    id: "iot-smart-car",
    title: "IoT Smart Car",
    category: "Embedded Systems",
    shortDesc: "Autonomous vehicle prototype featuring obstacle avoidance and real-time sensor processing.",
    banner: "https://images.unsplash.com/photo-1511818471343-70e248b11a91?auto=format&fit=crop&q=80&w=1200",
    techStack: ["C++", "Arduino", "Sensors"],
    status: "PROTOTYPE",
    color: "#fb923c",
    colorArray: ["#fb923c", "#ffffff", "#ffedd5", "#f97316", "#fb923c"],
    date: "Jan 2026",
    blogContent: {
      overview: "An autonomous prototype utilizing ultrasonic sensors for spatial awareness.",
      challenge: "Synchronizing sensor feedback with motor controller latency for smooth stopping.",
      results: "Achieved 100% successful navigation in obstacle-heavy environments."
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
  },
  {
    id: "ai-content-guard",
    title: "AI Content Guard",
    category: "Full-Stack AI",
    shortDesc: "Enterprise-grade plagiarism and AI detection system using custom Python models.",
    banner: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1200",
    techStack: ["FastAPI", "Python", "React"],
    status: "STABLE",
    color: "#ef4444",
    colorArray: ["#ef4444", "#ffffff", "#fee2e2", "#b91c1c", "#ef4444"],
    date: "March 2026",
    blogContent: {
      overview: "A sophisticated tool designed to distinguish between human and machine-generated text.",
      challenge: "Reducing false positives in academic contexts where technical language is common.",
      results: "Reached 94% detection accuracy across diverse document types."
    }
  }
];

// Helper to fill up to 16 items for your Grid
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
export const projectsData = [
  // --- CODED WEB SOLUTIONS ---
  {
    id: "ai-plagiarism-detection-system",
    title: "AI & Plagiarism Detection System",
    category: "Coded Web Solutions",
    shortDesc: "An intelligent document analysis platform that detects plagiarism and AI-generated content with detailed scoring and source tracking.",
    banner: "/assets/projects/plagiarism-detector-bg.jpg",
    techStack: [
      { name: "FastAPI" }, { name: "Python" }, { name: "HuggingFace" }, { name: "SQLite" }, { name: "Google API" }
    ],
    status: "STATUS_STABLE",
    color: "#6366f1",
    date: "March 2026",
    blogContent: {
      overview: {
        intro: "A full-stack document intelligence system designed to detect plagiarism and AI-generated content with high accuracy and clear reporting.",
        points: [
          "Secure user authentication with personalized dashboard access",
          "Supports PDF & DOC uploads with automated text extraction pipeline",
          "Performs real-time plagiarism detection using Google-based web search",
          "Utilizes HuggingFace NLP model to classify AI-generated content",
          "Highlights matched text with source links and similarity scoring"
        ]
      },
      challenge: {
        intro: "Building a reliable and scalable analysis engine required solving multiple technical and performance challenges.",
        points: [
          "Ensuring accurate text extraction from complex PDF and DOC formats",
          "Optimizing asynchronous API calls for faster web search results",
          "Integrating ML model inference without degrading system performance",
          "Detecting paraphrased content beyond exact string matching",
          "Designing structured, readable, and automated report generation"
        ]
      },
      results: {
        intro: "The final system delivers a production-ready solution tailored for academic and professional validation workflows.",
        points: [
          "Developed a complete end-to-end document analysis platform",
          "Achieved reliable plagiarism and AI detection with scoring system",
          "Generated professional audit reports with highlighted insights",
          "Implemented rule-based thresholds (25% / 35%) for validation",
          "Delivered a fast, scalable, and user-friendly experience"
        ]
      },
      projectimg: "/assets/projectimg/ai-plagiarism-architecture.png"
    },
    links: {
      github: "https://github.com/rayansiam2021/A-plagiarism-and-web-content-detection-system",
      report: "/assets/docs/ai-plagiarism-report-221.docx"
    }
  }, // ADDED MISSING COMMA

  // --- WORDPRESS ---
  {
    id: "vidmocraft-wordpress",
    title: "VidmoCraft",
    category: "Wordpress",
    shortDesc: "A high-end WordPress portfolio platform engineered with Elementor Pro, featuring advanced scroll-based animations and optimized asset delivery.",
    // Updated to your local high-res hero image
    banner: "/assets/projectimg/vidmocraft/vidmocraft.png", 
    techStack: [
      { name: "WordPress" }, 
      { name: "Elementor Pro" }, 
      { name: "SEO" }, 
      { name: "UI/UX Design" }
    ],
    // New: Professional Gallery Array
    screenshots: [
      "/assets/projectimg/vidmocraft/vidmocraft.png",
      "/assets/projectimg/vidmocraft/vidmocraft1.png",
      "/assets/projectimg/vidmocraft/vidmocraft2.png"
    ],
    status: "LIVE_PRODUCTION",
    color: "#06b6d4", // Changed to Cyan-500 to match your branding
    date: "Jan 2026",
    blogContent: {
      overview: {
        intro: "VidmoCraft is a bespoke WordPress solution designed to bridge the gap between cinematic video editing services and a high-conversion digital interface.",
        points: [
          "Custom Elementor architecture with a focus on modular section design",
          "Advanced asset optimization for high-bitrate video portfolio displays",
          "Seamless responsive breakpoints for mobile-first user experiences",
          "Engineered visual hierarchy using custom CSS and typography scales"
        ]
      },
      implementation: {
        intro: "Focused on technical precision and translating complex client specifications into a functional, scalable CMS environment.",
        points: [
          "Developed reusable design patterns for consistent branding across 10+ pages",
          "Implemented global style variables for rapid UI iteration",
          "Integrated SEO-optimized metadata structures for localized search dominance",
          "Applied hardware-accelerated animations for smooth section transitions"
        ]
      },
      challenge: {
        intro: "The primary technical hurdle involved maintaining high performance while loading heavy visual media assets.",
        points: [
          "Optimizing LCP (Largest Contentful Paint) for image-heavy hero sections",
          "Ensuring cross-browser compatibility for custom Elementor motion effects",
          "Transforming dense client data into intuitive, scannable UI components"
        ]
      },
      results: {
        intro: "The final deployment resulted in a high-performance production environment that exceeded initial speed and engagement KPIs.",
        points: [
          "100% execution of client-requested features with pixel-perfect accuracy",
          "Achieved sub-2s load times through aggressive caching and image optimization",
          "Delivered a fully responsive, enterprise-grade digital portfolio"
        ]
      }
    },
    links: {
      live: "https://vidmocraft.com/"
    }
}, // ADDED MISSING COMMA

  {
    id: "qatar-ac-repairs",
    title: "Qatar AC Repairs",
    category: "Wordpress",
    shortDesc: "A service-focused WordPress website designed to generate leads through a clean, conversion-driven UI.",
    banner: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&q=80&w=1200",
    techStack: [
      { name: "WordPress" }, { name: "Elementor" }, { name: "UI/UX Design" }, { name: "SEO" }
    ],
    status: "LIVE_PRODUCTION",
    color: "#0ea5e9",
    date: "Feb 2026",
    blogContent: {
      overview: {
        intro: "A professionally designed WordPress website built using Elementor, focused on presenting AC repair services with clarity.",
        points: [
          "Designed using Elementor with structured and reusable layout blocks",
          "Clear presentation of AC services (repair, installation, cleaning)",
          "Conversion-focused design with prominent call-to-action sections",
          "Fully responsive layout optimized for all devices"
        ]
      },
      implementation: {
        intro: "Executed client requirements into a structured and visually engaging website.",
        points: [
          "Converted service requirements into organized website sections",
          "Designed service blocks for easy readability and navigation",
          "Implemented CTA sections to drive user engagement"
        ]
      },
      challenge: {
        intro: "The main challenge was to create a simple yet highly effective service website.",
        points: [
          "Structuring multiple services without overwhelming the user",
          "Maintaining clarity while showcasing all service offerings",
          "Designing for quick user decisions and conversions"
        ]
      },
      results: {
        intro: "The final website delivers a professional and conversion-focused experience.",
        points: [
          "Successfully delivered all client requirements with precision",
          "Improved visibility and accessibility of all services",
          "Achieved full responsiveness across all devices"
        ]
      }
    },
    links: {
      live: "https://qataracrepairs.com/"
    }
  }, // ADDED MISSING COMMA

  // --- IOT ---
  {
    id: "iot-autonomous-pathfinder",
    title: "IoT Autonomous Path-Finder",
    category: "IOT",
    shortDesc: "A self-driving robot car that uses sound waves to 'see' its surroundings. It can navigate through a room on its own by detecting and steering around obstacles.",
    banner: "/assets/projects/robot-bg.jpg",
    techStack: [
      { name: "C++ (Arduino)" }, { name: "L293D Shield" }, { name: "HC-SR04 Sensor" }, { name: "Embedded Systems" }
    ],
    status: "HARDWARE_VERIFIED",
    color: "#3b82f6",
    date: "October 2025",
    blogContent: {
      overview: {
        intro: "This project is a smart robot designed to move safely in unknown areas without hitting any walls or objects.",
        points: [
          "Uses ultrasonic sensors to measure distances like a bat does",
          "A small motor turns the 'eyes' of the robot to look left and right",
          "Custom code calculates the best path to move forward safely",
          "Built on a durable 4-wheel drive chassis for smooth movement",
          "Runs on an Arduino brain with a specialized power control board"
        ]
      },
      challenge: {
        intro: "Building a robot that thinks for itself required solving a few tricky problems.",
        points: [
          "Making the robot react instantly before it hits a wall",
          "Providing enough battery power to the motors and the computer",
          "Stopping the sensors from getting 'confused' by soft surfaces"
        ]
      },
      results: {
        intro: "The final version is a successful prototype that can explore a room completely on its own.",
        points: [
          "Can detect objects up to 2 meters away with high accuracy",
          "Moves smoothly and stops automatically if an obstacle is too close",
          "Full source code and wiring diagrams are published",
          "Proven hardware setup that is ready for further AI upgrades"
        ]
      },
      projectimg: "/assets/projectimg/robot-circuitry.png" 
    },
    links: {
      github: "https://github.com/rayansiam2021/IOT",
      download: "https://github.com/rayansiam2021/IOT/raw/main/221-16-641_Rayan%20Ahmed_IOT%20ALL.zip"
    }
  }
];
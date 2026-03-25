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
    shortDesc: "A client-driven WordPress website built with Elementor, focused on delivering a clean, engaging, and conversion-oriented UI.",
    banner: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&q=80&w=1200",
    techStack: [
      { name: "WordPress" }, { name: "Elementor Pro" }, { name: "SEO" }, { name: "Creative Suite" }
    ],
    status: "LIVE_PRODUCTION",
    color: "#f43f5e",
    date: "Jan 2026",
    blogContent: {
      overview: {
        intro: "A visually engaging WordPress platform developed using Elementor, designed to transform detailed client requirements into a structured interface.",
        points: [
          "Fully built using Elementor with custom section-based layout design",
          "Structured content flow to clearly explain the platform concept",
          "Responsive design optimized for mobile, tablet, and desktop",
          "Clean UI with strong typography, spacing, and visual hierarchy",
          "Designed to improve user engagement and content clarity"
        ]
      },
      implementation: {
        intro: "Focused on accurate execution of client requirements while maintaining modern UI/UX standards.",
        points: [
          "Translated client-provided specifications into structured page sections",
          "Built reusable Elementor components for consistent design",
          "Applied balanced color schemes, spacing, and typography",
          "Used images and visual elements to enhance storytelling"
        ]
      },
      challenge: {
        intro: "The main challenge was aligning detailed client requirements with a clean and intuitive user experience.",
        points: [
          "Interpreting and executing structured client requirements precisely",
          "Maintaining consistency across multiple sections and layouts",
          "Simplifying complex platform ideas into visual components"
        ]
      },
      results: {
        intro: "Delivered a polished and professional website that meets client expectations.",
        points: [
          "Successfully implemented all client requirements with accuracy",
          "Created a modern and visually appealing website interface",
          "Ensured full responsiveness across all devices"
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
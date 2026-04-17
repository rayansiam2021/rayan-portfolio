export const projectsData = [
  // --- CODED WEB SOLUTIONS ---
  {
    id: "ai-plagiarism-detection-system",
    title: "AI & Plagiarism Detection System",
    category: "Coded Web Solutions",
    shortDesc: "An intelligent document analysis platform that detects plagiarism and AI-generated content with detailed scoring and source tracking.",
    banner: "/assets/projectimg/ai-plagiarism/ai-banner.png", 
    techStack: [
      { name: "FastAPI" }, { name: "Python" }, { name: "HuggingFace" }, { name: "SQLite" }, { name: "Google API" }
    ],
    screenshots: [
      "/assets/projectimg/ai-plagiarism/ai.png",
      "/assets/projectimg/ai-plagiarism/ai-1.png",
      "/assets/projectimg/ai-plagiarism/ai-2.png",
      "/assets/projectimg/ai-plagiarism/ai-architecture.png"
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
      projectimg: "/assets/projectimg/ai-plagiarism/ai-architecture.png"
    },
    links: {
      github: "https://github.com/rayansiam2021/A-plagiarism-and-web-content-detection-system",
      report: "/assets/docs/ai-plagiarism-report-221.docx"
    }
  },

  // --- WORDPRESS ---
  {
    id: "vidmocraft-wordpress",
    title: "VidmoCraft",
    category: "Wordpress",
    shortDesc: "A high-end WordPress portfolio platform engineered with Elementor Pro, featuring advanced scroll-based animations and optimized asset delivery.",
    banner: "/assets/projectimg/vidmocraft/vidmocraft-banner.png", 
    techStack: [
      { name: "WordPress" }, { name: "Elementor Pro" }, { name: "SEO" }, { name: "UI/UX Design" }
    ],
    screenshots: [
      "/assets/projectimg/vidmocraft/vidmocraft.png",
      "/assets/projectimg/vidmocraft/vidmocraft1.png",
      "/assets/projectimg/vidmocraft/vidmocraft2.png"
    ],
    status: "LIVE_PRODUCTION",
    color: "#06b6d4",
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
  },
   
  

  {
    id: "qatar-ac-repairs",
    title: "Qatar AC Repairs",
    category: "Wordpress",
    shortDesc: "A service-focused WordPress website designed to generate leads through a clean, conversion-driven UI.",
    banner: "/assets/projectimg/qatar-ac/ac-repair-banner.png", 
    techStack: [
      { name: "WordPress" }, { name: "Elementor" }, { name: "UI/UX Design" }, { name: "SEO" }
    ],
    screenshots: [
      "/assets/projectimg/qatar-ac/ac-repair.png",
      "/assets/projectimg/qatar-ac/ac-repair1.png",
      "/assets/projectimg/qatar-ac/ac-repair2.png",
      "/assets/projectimg/qatar-ac/ac-repair3.png",
      "/assets/projectimg/qatar-ac/ac-repair4.png"
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
  },

  {
  id: "paddleboard-qc",
  title: "PaddleBoard QC",
  category: "Wordpress",
  shortDesc: "A professionally developed eCommerce WordPress website for a Canadian client, focused on showcasing paddleboard products with a clean and conversion-driven user experience.",
  
  banner: "/assets/projectimg/paddleboard/paddleboard-banner.png",

  techStack: [
    { name: "WordPress" },
    { name: "WooCommerce" },
    { name: "Elementor" },
    { name: "UI/UX Design" },
    { name: "SEO" }
  ],

  screenshots: [
    "/assets/projectimg/paddleboard/paddleboard.png",
    "/assets/projectimg/paddleboard/paddleboard1.png",
    "/assets/projectimg/paddleboard/paddleboard2.png",
    "/assets/projectimg/paddleboard/paddleboard3.png"
  ],

  status: "LIVE_PRODUCTION",
  color: "#06b6d4",
  date: "2026",

  blogContent: {
    overview: {
      intro: "A professionally designed eCommerce website built using WordPress and Elementor for an international client, focused on presenting paddleboard products in a clean and engaging format.",
      points: [
        "Designed a modern and structured layout using Elementor",
        "Showcased paddleboards and accessories with clear product sections",
        "Conversion-focused UI with strong call-to-action placements",
        "Fully responsive design optimized for all devices"
      ]
    },
    implementation: {
      intro: "Executed the client’s vision into a scalable and high-performing eCommerce platform.",
      points: [
        "Integrated WooCommerce for complete product and order management",
        "Structured product categories for better navigation and usability",
        "Designed promotional and featured product sections",
        "Optimized performance for faster loading and smoother experience"
      ]
    },
    challenge: {
      intro: "The main challenge was balancing visual appeal with performance and usability.",
      points: [
        "Managing high-quality images without affecting load speed",
        "Maintaining a clean layout while displaying multiple products",
        "Ensuring smooth user experience across all screen sizes"
      ]
    },
    results: {
      intro: "The final product delivers a professional and conversion-optimized shopping experience.",
      points: [
        "Successfully delivered a scalable and client-focused website",
        "Improved product visibility and user engagement",
        "Achieved a responsive and performance-optimized platform"
      ]
    }
  },

  links: {
    live: "https://paddleboardqc.ca/"
  }
},
{
    id: "dave-mayer-construction",
    title: "Dave Mayer Construction",
    category: "Wordpress",
    shortDesc: "An enterprise-grade service platform for a premier construction firm, featuring bilingual content architecture and high-performance media delivery.",
    banner: "/assets/projectimg/davemayer/davemayer-banner.png", 
    techStack: [
      { name: "WordPress" }, { name: "Elementor Pro" }, { name: "WPML (Bilingual)" }, { name: "Asset Optimization" }
    ],
    screenshots: [
      "/assets/projectimg/davemayer/davemayer.png",
      "/assets/projectimg/davemayer/davemayer1.png",
      "/assets/projectimg/davemayer/davemayer2.png",
      "/assets/projectimg/davemayer/davemayer3.png"
    ],
    status: "LIVE_PRODUCTION",
    color: "#10b981", // Emerald Green for an industrial yet premium professional look
    date: "Jan 2026",
    blogContent: {
      overview: {
        intro: "Developed as a flagship client project for Vista Web, this platform was engineered for Dave Mayer Construction & Rénovation, an industry leader in the Outaouais region with 30+ years of expertise.",
        points: [
          "Enterprise WordPress deployment focused on service transparency and lead generation",
          "Engineered a bilingual (French/English) UI to cater to a diverse regional market",
          "Showcasing high-end architectural solutions like Sunspace and custom renovations",
          "Strategically designed for a 'Virtual Showroom' user experience"
        ]
      },
      implementation: {
        intro: "The technical execution focused on translating complex physical construction services into a highly scannable, high-conversion digital environment.",
        points: [
          "Developed modular service components for 10+ distinct construction categories",
          "Implemented hardware-accelerated gallery systems for high-resolution project displays",
          "Customized global CSS design tokens to maintain brand integrity across all sub-pages",
          "Integrated SEO-optimized metadata structures for competitive regional ranking"
        ]
      },
      challenge: {
        intro: "The primary challenge was balancing heavy visual storytelling with extreme technical performance requirements.",
        points: [
          "Optimizing 'Largest Contentful Paint' (LCP) for media-heavy landing pages",
          "Ensuring a seamless, responsive experience for complex technical tables and galleries",
          "Maintaining sub-2-second load times while handling high-bitrate image assets"
        ]
      },
      results: {
        intro: "A robust, scalable digital ecosystem that successfully mirrors the client's 30-year legacy of honesty and quality.",
        points: [
          "Successfully digitized 30+ years of construction expertise into a modern lead-gen tool",
          "100% feature execution including bilingual architecture and custom project portfolios",
          "Delivered an intuitive CMS that allows the client to update their 'Réalisations' independently"
        ]
      }
    },
    links: {
      live: "https://davemayerconstruction.com/"
    }
},
  // --- IOT ---
  {
    id: "iot-autonomous-pathfinder",
    title: "IoT Autonomous Path-Finder",
    category: "IOT",
    shortDesc: "A self-driving robot car that uses sound waves to 'see' its surroundings. It can navigate through a room on its own by detecting and steering around obstacles.",
    banner: "/assets/projectimg/obstacle-car/banner.png",
    techStack: [
      { name: "C++ (Arduino)" }, { name: "L293D Shield" }, { name: "HC-SR04 Sensor" }, { name: "Embedded Systems" }
    ],
    screenshots: [
      "/assets/projectimg/obstacle-car/banner.png",
      "/assets/projectimg/obstacle-car/circuit.png"
    ],
    status: "HARDWARE_VERIFIED",
    color: "#15e059",
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
      projectimg: "/assets/projectimg/obstacle-car/banner.png" 
    },
    links: {
      github: "https://github.com/rayansiam2021/IOT",
      download: "https://github.com/rayansiam2021/IOT/raw/main/221-16-641_Rayan%20Ahmed_IOT%20ALL.zip"
    }
  },
  {
    id: "solarium-hautes-laurentides",
    title: "Solarium Hautes Laurentides",
    category: "Wordpress",
    shortDesc: "A premium architectural service platform for a high-end French client, specializing in custom sunroom solutions and outdoor living spaces.",
    banner: "/assets/projectimg/solarium/solarium-banner.png", 
    techStack: [
      { name: "WordPress" }, { name: "Elementor Pro" }, { name: "Multilingual Architecture" }, { name: "Custom CSS" }
    ],
    screenshots: [
      "/assets/projectimg/solarium/solarium-1.png",
      "/assets/projectimg/solarium/solarium-2.png",
      "/assets/projectimg/solarium/solarium-3.png",
      "/assets/projectimg/solarium/solarium-4.png"
    ],
    status: "LIVE_PRODUCTION",
    color: "#f59e0b", // Warm Amber
    date: "Feb 2026",
    blogContent: {
      overview: {
        intro: "Developed for a French client in the Québec region, Solarium Hautes Laurentides is a robust digital platform showcasing 30+ years of expertise in high-end exterior construction.",
        points: [
          "Bespoke WordPress environment designed for high-ticket architectural services",
          "Advanced product categorization for Sunspace Model 100-400 systems",
          "Bilingual integration (FR/EN) to capture a wide regional demographic",
          "Engineered with a 'Clé en main' (Turnkey) business logic to drive high-value leads"
        ]
      },
      implementation: {
        intro: "The implementation focused on a 'High-Light' design language—prioritizing clarity, warmth, and visual expansiveness to match the physical product.",
        points: [
          "Integrated dynamic gallery modules with hardware-accelerated transitions",
          "Developed custom responsive break-points for media-heavy service pages",
          "Applied global typography scales optimized for professional French content",
          "Configured secure, automated lead-capture pipelines for project quotations"
        ]
      },
      challenge: {
        intro: "The challenge was conveying technical architectural details while maintaining an emotional, lifestyle-oriented visual appeal.",
        points: [
          "Optimizing multi-layered image compositions for rapid mobile rendering",
          "Maintaining layout integrity across complex French text strings (often longer than English)",
          "Balancing high-resolution architectural renders with site performance KPIs"
        ]
      },
      results: {
        intro: "A sophisticated production environment that successfully digitizes a heritage family business into a modern competitive force.",
        points: [
          "Delivered a pixel-perfect digital showroom covering 12+ specialized product lines",
          "Achieved zero-latency navigation across heavy image-driven landing pages",
          "100% client satisfaction in translating a 30-year physical legacy into a digital brand"
        ]
      }
    },
    links: {
      live: "https://solariumhauteslaurentides.com/"
    }
},
];
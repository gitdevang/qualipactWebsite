import {
  FaDesktop,
  FaLaptopCode,
  FaMicrochip,
  FaMobileAlt,
  FaPen,
  FaTools,
  FaBuilding,
  FaHospital,
  FaRoute,
  FaSchool,
  FaShoppingBag,
  FaFileInvoiceDollar,
  FaWarehouse,
  FaTruck,
  FaHotel,
  FaNewspaper,
  FaObjectGroup,
  FaCode,
  FaVial,
  FaRocket,
  FaHeadphones,
} from "react-icons/fa";

export const services = [
  {
    name: "Web Development",
    desc: "At Qualipact, we specialize in developing robust, responsive web applications tailored to your business needs, ensuring seamless digital experiences.",
    icon: FaDesktop,
    subservices: [
      {
        name: "Custom Web Development",
        desc: "Create bespoke web solutions aligned with your business goals.",
      },
      {
        name: "Enterprise Web Applications",
        desc: "Build high-performance, scalable applications for complex enterprise requirements.",
      },
      {
        name: "E-Commerce Web Applications",
        desc: "Develop feature-rich online stores with secure payment and inventory management systems.",
      },
      {
        name: "Real-time Web Applications",
        desc: "Build web apps with real-time capabilities like live chat, notifications, and collaboration tools.",
      },
      {
        name: "Web Performance Optimization",
        desc: "Optimize speed, SEO, and user experience for maximum impact.",
      },
      {
        name: "Web Maintenance and Support",
        desc: "Provide continuous support and maintenance for flawless web performance.",
      },
    ],
  },
  {
    name: "Mobile App Development",
    desc: "We create high-performance mobile applications for iOS and Android, ensuring top-tier functionality and user experience.",
    icon: FaMobileAlt,
    subservices: [
      {
        name: "Custom App Development",
        desc: "Develop custom mobile apps tailored to your brand and users.",
      },
      {
        name: "Native iOS & Android Apps",
        desc: "Create optimized, high-quality native apps for iOS and Android platforms.",
      },
      {
        name: "Cross-Platform Mobile Apps",
        desc: "Build apps that run seamlessly across iOS and Android with a single codebase.",
      },
      {
        name: "E-Commerce Mobile Apps",
        desc: "Develop mobile-friendly e-commerce platforms with essential features like offline support and push notifications.",
      },
      {
        name: "App Performance Optimization",
        desc: "Enhance app performance with optimizations and third-party integrations.",
      },
      {
        name: "App Maintenance and Support",
        desc: "Provide ongoing maintenance, updates, and support for reliable performance.",
      },
    ],
  },
  {
    name: "Customised Solutions",
    desc: "We deliver tailored digital solutions that drive innovation and streamline business processes through advanced technology.",
    icon: FaLaptopCode,
    subservices: [
      {
        name: "ERP Systems",
        desc: "Implement ERP systems to optimize financial, HR, and operational workflows.",
      },
      {
        name: "CRM Systems",
        desc: "Develop CRM platforms to enhance customer relationships and drive business growth.",
      },
      {
        name: "Custom E-Learning Platforms",
        desc: "Build bespoke e-learning platforms for employee training and development.",
      },
      {
        name: "Customer Self-Service Portals",
        desc: "Create self-service portals to improve customer satisfaction and reduce operational costs.",
      },
      {
        name: "Industry-Specific Applications",
        desc: "Design custom applications to address specific industry needs, such as school management systems.",
      },
      {
        name: "Automated Business Applications",
        desc: "Develop intelligent automation solutions to optimize workflows and boost efficiency.",
      },
    ],
  },
  {
    name: "UI/UX Designing",
    desc: "We craft intuitive, user-friendly designs that provide exceptional digital experiences, focusing on accessibility and aesthetic appeal.",
    icon: FaPen,
    subservices: [
      {
        name: "UI Design",
        desc: "Design visually engaging, user-centric interfaces for web and mobile applications.",
      },
      {
        name: "VUI Design",
        desc: "Create voice interfaces that enhance accessibility and user engagement.",
      },
      {
        name: "UX Research & Analysis",
        desc: "Conduct in-depth research to inform user-centered design solutions.",
      },
      {
        name: "AR & VR Designing",
        desc: "Design immersive AR and VR experiences for enhanced user interaction.",
      },
      {
        name: "Accessibility Optimization",
        desc: "Ensure digital experiences are inclusive and accessible to all users.",
      },
      {
        name: "Data Visualization",
        desc: "Create clear, impactful data visualizations across devices.",
      },
    ],
  },
  {
    name: "API Solutions",
    desc: "We provide seamless API integrations and custom development to ensure smooth data connectivity across platforms.",
    icon: FaMicrochip,
    subservices: [
      {
        name: "Custom API Development",
        desc: "Create secure, scalable APIs for efficient system integration.",
      },
      {
        name: "Third-Party API Integrations",
        desc: "Integrate essential third-party services such as payment gateways and social logins.",
      },
      {
        name: "Microservices Architecture",
        desc: "Develop microservices for scalable, modular application structures.",
      },
      {
        name: "REST & GraphQL API Development",
        desc: "Build flexible, data-access solutions with REST and GraphQL.",
      },
      {
        name: "API Testing & Monitoring",
        desc: "Ensure API reliability through continuous testing and monitoring.",
      },
      {
        name: "API Documentation & Support",
        desc: "Provide comprehensive documentation for easy API usage and integration.",
      },
    ],
  },
  {
    name: "Maintenance & Support",
    desc: "At Qualipact, we ensure your systems operate at peak performance with continuous support, updates, and monitoring.",
    icon: FaTools,
    subservices: [
      {
        name: "Web & App Maintenance",
        desc: "Provide 24/7 maintenance and support for web and mobile applications.",
      },
      {
        name: "Performance Optimization",
        desc: "Monitor and optimize system performance to ensure high efficiency.",
      },
      {
        name: "Security Checks & Updates",
        desc: "Conduct regular security audits to safeguard your data.",
      },
      {
        name: "Bug Fixing & Issue Resolution",
        desc: "Resolve bugs swiftly to maintain stability and performance.",
      },
      {
        name: "Application Updates & Upgrades",
        desc: "Keep your applications up-to-date with the latest technology.",
      },
      {
        name: "Data Backup & Recovery",
        desc: "Implement data backup and recovery solutions to ensure business continuity.",
      },
    ],
  },
];


export const industryList = [
  {
    heading: "E-Commerce",
    icon: FaShoppingBag,
  },
  {
    heading: "Tours & Travels",
    icon: FaRoute,
  },
  {
    heading: "Supply Chain",
    icon: FaTruck,
  },
  {
    heading: "Manufacturing",
    icon: FaWarehouse,
  },
  {
    heading: "Real Estate",
    icon: FaBuilding,
  },
  {
    heading: "Healthcare",
    icon: FaHospital,
  },
  {
    heading: "Education",
    icon: FaSchool,
  },
  {
    heading: "Accounting",
    icon: FaFileInvoiceDollar,
  },
  {
    heading: "Hotels",
    icon: FaHotel,
  },
];

export const devprocess = [
  {
    heading: "Research & Planning",
    icon: FaNewspaper,
  },
  {
    heading: "UX/UI Design",
    icon: FaObjectGroup,
  },
  {
    heading: "Development",
    icon: FaCode,
  },
  {
    heading: "Testing",
    icon: FaVial,
  },
  {
    heading: "Launch",
    icon: FaRocket,
  },
  {
    heading: "Support",
    icon: FaHeadphones,
  },
];

// feature card for Ai Development
export const aiFeatures = [
  {
    title: "Intelligent Customer Engagement Systems",
    description:
      "Leverage AI-driven chatbots and virtual assistants to provide continuous, personalized customer interactions. Qualipact empowers businesses with cutting-edge engagement solutions.",
    colorClass: "bg-blue-800",
  },
  {
    title: "Predictive Analytics for Smarter Decisions",
    description:
      "Harness AI to forecast trends and behaviors, enabling data-driven decisions. At Qualipact, we transform analytics into strategic insights that propel business growth.",
    colorClass: "bg-green-800",
  },
  {
    title: "AI-Powered Personalization",
    description:
      "Deliver tailored content and experiences that evolve with user preferences. Qualipact employs advanced AI to enhance user engagement and retention.",
    colorClass: "bg-purple-800",
  },
  {
    title: "AI-Enhanced Automation",
    description:
      "Automate repetitive processes and optimize workflows with AI, driving operational excellence. Qualipact streamlines operations through intelligent automation.",
    colorClass: "bg-yellow-800",
  },
  {
    title: "AI-Powered Analytics and Reporting",
    description:
      "Utilize AI to analyze data in real-time, offering dynamic reports and predictive insights. Qualipact empowers businesses to make informed, proactive decisions.",
    colorClass: "bg-red-800",
  },
  {
    title: "Smart Image & Video Recognition",
    description:
      "Integrate AI-powered visual recognition for real-time object and pattern identification. Qualipact enhances security and analytics with state-of-the-art image and video AI solutions.",
    colorClass: "bg-teal-800",
  },
  {
    title: "Voice-Activated Applications",
    description:
      "Develop intuitive voice-powered applications that enhance accessibility and user experience. Qualipact leads innovation in voice-interactive AI solutions.",
    colorClass: "bg-indigo-800",
  },
  {
    title: "Custom AI Solutions for Business Challenges",
    description:
      "Create bespoke AI applications tailored to your unique business needs. Qualipact delivers innovative, purpose-built AI solutions to solve complex challenges.",
    colorClass: "bg-orange-800",
  },
];


export const webDevFeatures = {
  basic: [
    "Basic responsive design with customizable templates.",
    "Basic SEO setup to drive traffic and visibility.",
    "Basic E-Commerce Setup.",
    "Basic API Integration, if needed.",
    "Basic optimization for faster load times.",
    "Payment gateways not included, but can integrate if needed.",
    "Basic CDN usage to improve website load times.",
    "Basic Contact Form.",
    "AI Tools Not Included.",
  ],
  standard: [
    "Custom-designing with branding integration.",
    "Advanced SEO (sitemap, schema, keyword optimization).",
    "Advanced E-Commerce Setup.",
    "API integrations with CRM and business tools",
    "Speed optimization with lazy loading and caching.",
    "Integrated payment gateways.",
    "Full CDN integration for improved performance.",
    "Live chat, ticketing systems.",
    "AI-powered tools.",
  ],
  premium: [
    "Fully custom UI/UX with branding, animations, and accessibility.",
    "Enterprise-level SEO with competitive analysis and SEO auditing.",
    "Custom E-Commerce Setup.",
    "Robust API architecture with third-party integration.",
    "Advanced optimizations.",
    "Complex and scalable payment gateways.",
    "Advanced CDN solutions for consistent global performance.",
    "AI-driven support systems.",
    "Full-scale AI-driven systems.",
  ],
};

export const appDevFeatures = {
  basic: [
    "Basic mobile apps with simple features.",
    "Single platform (Android or iOS).",
    "Basic login/signup (email/password).",
    "Pre-designed templates with minor customizations.",
    "Limited API integrations (e.g., maps, weather).",
    "Local database storage (SQLite, Firebase).",
    "Basic app performance with no intensive features.",
    "No integrated payment systems or advanced services.",
    "Basic security (SSL, encrypted database).",
  ],
  standard: [
    "Feature-rich mobile apps with moderate complexity.",
    "Cross-platform (Android & iOS).",
    "Advanced authentication (OAuth, Google/Facebook login).",
    "Custom UI/UX design tailored to business branding.",
    "Multiple API integrations (e.g., payment, CRM).",
    "Cloud storage (AWS, Google Firebase).",
    "Basic real-time features (notifications, updates).",
    "Integration with basic payment gateways (e.g., Stripe, PayPal).",
    "Advanced security (encryption, secure APIs).",
  ],
  premium: [
    "Enterprise-grade mobile apps with advanced features.",
    "Native apps for Android and iOS with custom architecture.",
    "Enterprise-grade authentication (SSO, biometric login).",
    "Advanced custom UI/UX with animations.",
    "Complex API integrations (AI/ML, real-time analytics).",
    "Distributed database with advanced scalability.",
    "Full-scale real-time features (live tracking, chat).",
    "Multi-currency, subscription-based payment systems.",
    "Enterprise-level security (OWASP standards, DDoS protection).",
  ],
};

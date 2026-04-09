export const eduCoreCaseStudyData = {
  metaTitle: "Unified Institutional & Financial Management Engine | Qualipact Case Study",
  metaDescription: "Discover how Qualipact built a centralized headless EdTech platform to eliminate operational bottlenecks, secure academic data, and automate financials. Explore the technical architecture, engineering challenges, and measurable impact of this transformative school management solution.",
  metaKeywords: "Qualipact EdTech, institutional management software, headless education platform, automated fee management, school administration engine, B2B EdTech architecture",
  // 1. HERO SECTION
  heroTitle: "Institutional - Management Engine",
  heroDescription:
    "Qualipact engineered a secure, headless EdTech infrastructure to replace fragmented legacy systems. Built to automate fee tracking, centralize student data, and eliminate manual redundancy.",
  heroImage: "/Media/img/Case-Study/Educational-Management-Portal-V1.png",
  metrics: [
    {
      value: "100/100",
      label: "Core Web Vitals",
      description: "Lightning-fast UI rendering with Next.js SSR",
    },
    {
      value: "RBAC",
      label: "Role-Based Access",
      description: "Secure data isolation for Admins & Teachers",
    },
    {
      value: "Zero",
      label: "Data Redundancy",
      description: "Centralized MongoDB schema for single-source-of-truth",
    },
  ],

  // 2. INDUSTRY BOTTLENECK
  bottleneckTitle: "The Legacy Bottleneck",
  bottleneckDescription:
    "Traditional administrative workflows suffer from a chaotic mix of disconnected legacy software and paper-based processes. Relying on physical registers, manual fee slips, and fragmented databases severely stalls operational efficiency.",
  painPoints: [
    {
      title: "Manual Fee Reconciliation Leakage",
      description:
        "Fragmented fee records lead to a 15-20% discrepancy in collection tracking, causing significant revenue leakage and hours of manual audit every quarter.",
    },
    {
      title: "The Parent-School Communication Gap",
      description:
        "Reliance on physical diaries and unread SMS leads to missed deadlines and poor parent engagement, directly impacting the institution's digital reputation.",
    },
    {
      title: "Fragmented Data Silos",
      description:
        "Academic records, attendance, and financial data live in different 'heads,' making it impossible for principals to get a real-time 360-degree view of school health.",
    },
    {
      title: "Teacher 'Data-Entry' Fatigue",
      description:
        "Teachers spend nearly 10 hours a week on manual registers instead of teaching, reducing the overall quality of education and increasing staff burnout.",
    },
    {
      title: "Sluggish Legacy Infrastructure",
      description:
        "Outdated PHP/ASP systems take very long time to load on mobile networks, frustrating parents and making the system practically unusable during peak admission seasons.",
    },
  ],

  // 3. PROJECT OVERVIEW
  projectOverview: {
    title: "The Unified - Platform",
    description:
      "To eliminate this operational chaos, Qualipact engineered a high-velocity administrative dashboard. Moving beyond generic web portals, the core architecture surfaces real-time financial and academic metrics, drastically reducing decision-making latency.",
    image: "/Media/img/Case-Study/Educational-Management-Portal-V2.png",
    keyFeatures: [
      {
        title: "Centralized Administration Panel",
        description:
          "A single-source-of-truth interface that integrates academic, financial, and administrative data silos into a unified view.",
      },
      {
        title: "Real-time Fee Insights",
        description:
          "Automated tracking of collected vs. due fees with interactive visualization, eliminating manual spreadsheet errors.",
      },
      {
        title: "Granular Management Grid",
        description:
          "An intuitive class-wise student management system that allows administrators to drill down into individual student performance and payment history.",
      },
      {
        title: "Headless Performance",
        description:
          "Leveraging Next.js for instant page transitions and server-side rendering, ensuring zero lag even during peak admission traffic.",
      },
    ],
  },

  // 4. ENGINEERING CHALLENGES
  challengesTitle: "Engineering Challenges",
  challengesDescription:
    "Building a system to handle sensitive financial data and high-concurrency traffic goes beyond standard UI components. Qualipact engineered specific technical solutions to overcome these core architectural hurdles.",
  engineeringChallenges: [
    {
      id: "01",
      themeColor: "red",
      title: "Handling Real-Time Fee Synchronization",
      challenge:
        "School clerks often update fee payments simultaneously. Traditional databases caused race conditions, leading to inaccurate 'Total Collected' numbers on the principal's dashboard during peak hours.",
      solution:
        "Implemented MongoDB's atomic document updates alongside a caching layer. This ensured that even if 50 fee receipts are generated at the exact same second, the dashboard metrics update flawlessly in real-time without locking the database.",
      tags: ["MongoDB", "Atomic Updates"],
    },
    {
      id: "02",
      themeColor: "orange",
      title: "Strict Data Isolation (RBAC)",
      challenge:
        "Teachers needed access to attendance, but zero access to financial records. Building separate dashboards for every role creates a maintenance nightmare and slows down feature updates.",
      solution:
        "Engineered a unified UI with a centralized headless API and JWT-based middleware. The API intercepts every request, checks the user's role payload, and dynamically strips sensitive JSON data before it even reaches the Next.js client.",
      tags: ["JWT Middleware", "Headless API"],
    },
    {
      id: "03",
      themeColor: "yellow",
      title: "Slow Network Environments",
      challenge:
        "Many school administrators access the system via mobile networks (3G/4G). A standard React application requires downloading heavy JS bundles, causing 5+ second blank screens.",
      solution:
        "Leveraged Next.js Server-Side Rendering (SSR). The server pre-builds the entire HTML dashboard and sends a lightweight document instead of massive JS files. This reduced the initial load time to under 800ms.",
      tags: ["Next.js SSR", "Vercel Edge"],
    },
  ],

  // 5. ARCHITECTURE FLOW
  architectureTitle: "Headless EdTech Architecture",
  architectureDescription:
    "Here is how the data securely flows from the MongoDB clusters to the Next.js client.",
  architectureImage:
    "/Media/img/Case-Study/Educational-Management-Portal-Diagram.png",
  architectureImageMobile:
    "/Media/img/Case-Study/Educational-Management-Portal-Diagram-Mobile.png",
  techStack: [
    {
      id: "tech-1",
      name: "Next.js",
      role: "Frontend & SSR Engine",
      logoPath: "/Media/img/TechStack/NextJS.webp",
      description:
        "Chosen for Server-Side Rendering, ensuring the dashboard loads in milliseconds even on unstable 3G networks.",
    },
    {
      id: "tech-2",
      name: "MongoDB",
      role: "Primary Database",
      logoPath: "/Media/img/TechStack/MongoDB.webp",
      description:
        "A NoSQL approach allowed us to design a highly flexible schema, easily accommodating variable student attributes.",
    },
    {
      id: "tech-3",
      name: "Node.js & JWT",
      role: "Headless API & Auth",
      logoPath: "/Media/img/TechStack/Node.webp",
      description:
        "Powered the backend logic with strict JSON Web Token middleware to ensure absolute financial data isolation.",
    },
    {
      id: "tech-4",
      name: "Tailwind CSS",
      role: "Styling Architecture",
      logoPath: "/Media/img/TechStack/Tailwind.png",
      description:
        "Enabled rapid, highly maintainable UI development with a utility-first approach, keeping bundle size lightweight.",
    },
  ],

  businessBenefitsData: [
    {
      id: "ben-1",
      metric: "15%+",
      title: "Revenue Leakage Plugged",
      description:
        "By automating fee tracking, the school eliminated manual accounting errors and recovered pending dues faster.",
    },
    {
      id: "ben-2",
      metric: "40 Hrs",
      title: "Admin Time Saved Monthly",
      description:
        "Clerks no longer spend weeks cross-checking Excel sheets. Reports are generated with a single click.",
    },
    {
      id: "ben-3",
      metric: "100%",
      title: "Data Security Compliance",
      description:
        "Role-Based Access Control ensures teachers only see academics, and accountants only see finances.",
    },
    {
      id: "ben-4",
      metric: "3x",
      title: "Higher Parent Engagement",
      description:
        "Sub-second load times on mobile networks resulted in parents actively using the portal for updates rather than relying on SMS.",
    },
  ],
};
export const propSyncCaseStudyData = {
  metaTitle: "Enterprise Real Estate & Lead Management Engine | Qualipact Case Study",
  metaDescription: "Explore how Qualipact engineered a headless real estate engine with sub-second geospatial search and algorithmic lead management for modern brokerages. Discover the technical architecture, engineering challenges, and measurable business impact of this dual-engine PropTech platform.",
  metaKeywords: "Qualipact PropTech, real estate software engineering, headless real estate architecture, geospatial property search, B2B lead management system, custom proptech solutions, real estate CRM, scalable property platforms",
  // 1. HERO SECTION
  heroTitle: "High-Velocity - Proptech Engine",
  heroDescription:
    "Qualipact engineered a headless real estate architecture to eliminate lead leakage and unify scattered property inventory. Built to deliver sub-second geospatial search, algorithmic lead scoring, and complete data ownership for modern brokerages.",
  heroImage: "/Media/img/Case-Study/Real-Estate-Engine-V1.png",
  metrics: [
    {
      value: "<50ms",
      label: "Spatial Search Latency",
      description:
        "Sub-second property discovery via MongoDB 2dsphere indexing.",
    },
    {
      value: "85%+",
      label: "AI Lead Accuracy",
      description:
        "Custom predictive engine to identify high-intent buyer behavior.",
    },
    {
      value: "3.5x",
      label: "Conversion Velocity",
      description:
        "Faster lead-to-close ratio compared to manual Excel-based tracking.",
    },
  ],

  // 2. INDUSTRY BOTTLENECK
  bottleneckTitle: "The Operational Bottleneck",
  bottleneckDescription:
    "Mid-to-large scale real estate agencies lose millions in commissions due to fragmented data and rigid systems. Managing leads on WhatsApp, tracking properties in Excel, and relying on static, non-interactive websites creates a massive operational disconnect.",
  painPoints: [
    {
      title: "Massive Lead Leakage",
      description:
        "High-value inquiries from marketing campaigns get lost in chaotic WhatsApp chats and spreadsheets, leading to a 30% drop-off before the first agent outreach.",
    },
    {
      title: "Static & Frustrating Discovery",
      description:
        "Traditional list-based websites lack interactive geospatial context, making it nearly impossible for clients to visualize neighborhood clusters or proximity to landmarks.",
    },
    {
      title: "Lack of Actionable Intelligence",
      description:
        "Legacy CRMs act as mere digital filing cabinets. They fail to alert agencies about stagnant inventory or prioritize leads based on user behavior and intent.",
    },
    {
      title: "Inventory Desync",
      description:
        "Sold or rented properties remain live on the website because systems lack real-time live fetching, resulting in dead-end inquiries and frustrated clients.",
    },
    {
      title: "Aggregator Dependency",
      description:
        "Agencies pay exorbitant monthly fees to third-party listing platforms, effectively renting their own audience instead of building internal asset value.",
    },
  ],

  // 3. PROJECT OVERVIEW
  projectOverview: {
    title: "The Dual Engine Platform",
    description:
      "To eliminate this operational chaos, Qualipact delivered a dual-engine Prop-Tech platform. We decoupled a lightning-fast, map-based client portal from a secure, intelligence-driven internal CRM, enabling brokerages to scale without technical limits.",
    image: "/Media/img/Case-Study/Real-Estate-Engine-V2.png",
    keyFeatures: [
      {
        title: "Geospatial Cluster Analysis",
        description:
          "An interactive map interface that groups properties into density hotspots, allowing users and admins to instantly visualize high-demand micro-markets.",
      },
      {
        title: "Algorithmic AI Insights",
        description:
          "A smart CRM widget that analyzes pipeline velocity and user interactions to flag high-probability leads and warn against stagnant inventory.",
      },
      {
        title: "Real-Time State Synchronization",
        description:
          "WebSockets and live-fetching ensure that the moment an agent updates a property status in the CRM, the public map updates instantly without refreshing.",
      },
      {
        title: "Sub-Second Search Engine",
        description:
          "An advanced filtering system that instantly queries thousands of properties by radius, price, and amenities utilizing deep database indexing.",
      },
    ],
  },

  // 4. ENGINEERING CHALLENGES
  challengesTitle: "Engineering Complexities",
  challengesDescription:
    "Building enterprise real estate software requires processing geospatial coordinates, high-resolution media, and real-time state changes simultaneously. Here is how Qualipact engineered around these heavy architectural bottlenecks.",
  engineeringChallenges: [
    {
      id: "01",
      themeColor: "indigo",
      title: "Rendering High-Density Map Clusters",
      challenge:
        "Loading thousands of property pins on a mobile web map causes extreme DOM bloat, freezing the browser and destroying the user experience.",
      solution:
        "Implemented a dynamic viewport-rendering strategy using Mapbox/Leaflet principles. The engine only fetches and renders coordinate data within the user's active screen radius, grouping distant properties into lightweight cluster bubbles.",
      tags: ["Geospatial UI", "Viewport Rendering", "Cluster Algorithms"],
    },
    {
      id: "02",
      themeColor: "emerald",
      title: "Real-Time Live Fetching at Scale",
      challenge:
        "Standard HTTP polling for inventory updates creates massive server load, yet agencies need instant reflection of sold properties to prevent double-booking.",
      solution:
        "Utilized WebSockets combined with Next.js On-Demand Incremental Static Regeneration (ISR). The system maintains a live connection for dynamic metrics while selectively rebuilding static property pages in the background via webhooks.",
      tags: ["WebSockets", "Next.js ISR", "Event-Driven Architecture"],
    },
    {
      id: "03",
      themeColor: "purple",
      title: "Processing AI Heuristics Without Latency",
      challenge:
        "Calculating 'Lead Closing Probability' and 'Inventory Stagnation' required running complex analytical logic against the entire database, which threatened to slow down the admin dashboard.",
      solution:
        "Decoupled the analytics engine from the main transactional database. We deployed background cron-jobs and heuristic aggregations that pre-calculate these insights during off-peak hours, serving them instantly to the dashboard.",
      tags: ["Data Aggregation", "Heuristic Modeling", "Async Processing"],
    },
  ],

  // 5. ARCHITECTURE FLOW
  architectureTitle: "Headless Proptech Architecture",
  architectureDescription:
    "By severing the front-end map interface from the database, Qualipact ensured the CRM remains highly secure behind a firewall, while the public search portal scales infinitely on the edge.",
  architectureImage:
    "/Media/img/Case-Study/Real-Estate-Engine-Diagram.png",
  architectureImageMobile:
    "/Media/img/Case-Study/Real-Estate-Engine-Diagram-Mobile.png",
  techStack: [
    {
      id: "tech-1",
      name: "Next.js",
      role: "Edge Frontend & ISR Engine",
      logoPath: "/Media/img/TechStack/NextJS.webp",
      description:
        "Crucial for Real Estate SEO. Pre-renders property pages for Google bots while keeping the map search experience highly interactive and fluid.",
    },
    {
      id: "tech-2",
      name: "MongoDB",
      role: "Geospatial Database",
      logoPath: "/Media/img/TechStack/MongoDB.webp",
      description:
        "Leveraged for its native $geoNear and 2dsphere indexing, allowing the API to execute complex coordinate-based radius searches in milliseconds.",
    },
    {
      id: "tech-3",
      name: "Node.js & WebSockets",
      role: "Real-Time Lead Router",
      logoPath: "/Media/img/TechStack/Node.webp",
      description:
        "A lightweight, asynchronous backend designed to handle live data fetching, secure authentication, and rapid lead ingestion from external campaigns.",
    },
    {
      id: "tech-4",
      name: "Tailwind CSS",
      role: "Styling Architecture",
      logoPath: "/Media/img/TechStack/Tailwind.png",
      description:
        "Enabled rapid, highly maintainable UI development with a utility-first approach, keeping bundle size lightweight.",
    },
    {
      id: "tech-5",
      name: "Mapbox / Leaflet UI",
      role: "Geospatial Rendering",
      logoPath: "/Media/img/TechStack/Mapbox.png", // Update this path if needed
      description:
        "Integrated custom map tiles and clustering logic to provide a highly interactive, Zillow-like property discovery experience on mobile and desktop.",
    },
    {
      id: "tech-6",
      name: "Python Analytics",
      role: "Heuristic Processing Engine",
      logoPath: "/Media/img/TechStack/Python.webp",
      description:
        "Used for processing complex lead-scoring algorithms and inventory heatmaps without relying on slow third-party AI APIs.",
    },
  ],

  businessBenefitsData: [
    {
      id: "ben-1",
      metric: "85%+",
      title: "Targeted Deal Closing",
      description:
        "Qualipact's internal scoring engine flags high-intent leads and stagnant inventory, ensuring team energy is focused strictly on revenue-generating assets.",
    },
    {
      id: "ben-2",
      metric: "<50ms",
      title: "Enhanced Spatial Discovery",
      description:
        "Interactive geospatial search retains user attention 3x better than static listings, drastically reducing bounce rates and increasing engagement.",
    },
    {
      id: "ben-3",
      metric: "100%",
      title: "Sovereign Digital Infrastructure",
      description:
        "A completely proprietary ecosystem that ensures total data sovereignty, eliminating reliance on expensive third-party aggregators and restrictive platform algorithms.",
    },
    {
      id: "ben-4",
      metric: "Live",
      title: "Zero Operational Collision",
      description:
        "Real-time state synchronization ensures that once a lead is claimed or a property is sold, the entire network updates instantly across all nodes.",
    },
  ],
};

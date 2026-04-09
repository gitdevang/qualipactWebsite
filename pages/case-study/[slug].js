import { useRouter } from 'next/router';
import Head from 'next/head';
import Image from "next/image";
import { CallToAction } from '.';
import Footer from '@/components/Footer';
import { eduCoreCaseStudyData, propSyncCaseStudyData } from '@/data/CaseStudyData';

export default function SchoolManagementCaseStudy() {
  const router = useRouter();
  const { slug } = router.query;

  // 1. Map your data objects to their respective slugs
  const allCaseStudies = {
    'school-management': eduCoreCaseStudyData,
    'real-estate': propSyncCaseStudyData,
    // Future projects yahan add karte rehna...
  };

  // 2. Hydration check
  if (!router.isReady) {
    return <div className="min-h-screen bg-[#050510] text-white flex items-center justify-center">Loading...</div>;
  }

  const caseStudyData = allCaseStudies[slug];

  if (!caseStudyData) {
    return (
      <div className="min-h-screen bg-[#050510] text-white flex flex-col items-center justify-center p-6 text-center">
        <h1 className="text-6xl font-p_black text-blue-500 mb-4">404</h1>
        <h2 className="text-2xl font-p_sbold mb-6">Case Study Not Found</h2>
        <p className="text-gray-400 font-p_regular max-w-md mb-8">
          The project you are looking for doesn't exist or has been moved.
          Check out our other engineering masterpieces.
        </p>
        <button
          onClick={() => router.push('/')}
          className="px-8 py-3 bg-white text-black font-p_bold rounded-full hover:bg-gray-200 transition-all"
        >
          Back to Home
        </button>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>{caseStudyData.metaTitle}</title>
        <meta name="description" content={caseStudyData.metaDescription} />
        <meta name="keywords" content={caseStudyData.metaKeywords} />
        <link rel="canonical" href={`https://qualipact.com/case-study/${slug}`} />
      </Head>
    <main className="min-h-screen bg-[#050510] text-white overflow-hidden lg:overflow-visible">
      {/* 1. HERO SECTION (Horizontal Split: Text Left, Mockup Right) */}
      <section className="relative w-full pt-16 md:pt-20 pb-16 px-6 md:px-12 lg:px-16">
        {/* Subtle Ambient Glows */}
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-6 lg:gap-16">

          {/* Left Column: Text & Context */}
          <div className="flex-1 text-left">
            <h1 className="text-4xl lg:text-[2.5rem] xl:text-5xl font-p_bold tracking-tight leading-tight mb-6">
              {caseStudyData.heroTitle.split(' - ')[0]} {" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">
                {caseStudyData.heroTitle.split(' - ')[1]}
              </span>
            </h1>

            <p className="md:text-lg text-gray-400 font-mont max-w-2xl leading-relaxed mb-8">
              {caseStudyData.heroDescription}
            </p>
          </div>

          {/* Right Column: Hero Mockup */}
          <div className="flex-1 w-full max-w-2xl lg:max-w-none [perspective:2000px] group">
            <div className="relative w-full aspect-[4/3] md:aspect-[16/10] rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-blue-900/20 bg-[#0a0a1a] transition-all duration-700 ease-out">

              <Image
                src={caseStudyData.heroImage}
                alt={`${caseStudyData.heroTitle} Hero Image`}
                fill
                className="object-contain"
                priority
              />

            </div>
          </div>

        </div>
      </section>

      {/* 2. THE IMPACT METRICS BAR (Full width below the hero) */}
      <section className="relative z-20 max-w-7xl mx-auto px-6 md:px-12 pb-20">
        <div className="bg-[#0a0a1a] border border-white/10 rounded-2xl p-8 shadow-2xl backdrop-blur-xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 divide-y md:divide-y-0 md:divide-x divide-white/10">

            {caseStudyData.metrics.map((metric, index) => (
              <div key={index} className="flex flex-col items-center md:items-start text-center md:text-left px-4 pt-4 md:pt-0">
                <h3 className={`text-3xl md:text-4xl font-p_black mb-1 ${index === 0 ? 'text-blue-500' : index === 1 ? 'text-purple-500' : 'text-indigo-400'}`}>{metric.value}</h3>
                <p className="font-p_sbold text-white text-sm mb-1">{metric.label}</p>
                <p className="text-gray-500 font-p_regular text-xs md:text-sm">{metric.description}</p>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* 3. BOTTLENECK ANALYSIS */}
      <section className="w-full py-24 px-6 md:px-12 lg:px-16 bg-[#0a0a1a] border-t border-white/5">
        {/* flex-col for mobile/tablet, lg:flex-row for desktop to put text left and list right */}
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-6 lg:gap-24 items-start">

          {/* LEFT SIDE: The Main Narrative (Sticky on desktop so it stays while scrolling the list) */}
          <div className="lg:w-5/12 w-full flex flex-col items-start lg:sticky lg:top-32 mb-12 lg:mb-0">
            <h2 className="text-4xl lg:text-[2.5rem] xl:text-5xl font-p_ebold text-white mb-6 leading-tight">
              {caseStudyData.bottleneckTitle.split('Bottleneck')[0]} {" "} <span className="text-blue-500">Bottleneck</span>
            </h2>
            <p className="text-gray-400 font-mont md:text-lg leading-relaxed mb-8 max-w-xl">
              {caseStudyData.bottleneckDescription}
            </p>
            <div className="w-20 h-1.5 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full"></div>
          </div>
          {/* RIGHT SIDE: Specific Pain Points (Single Column Vertical List) */}
          <div className="lg:w-7/12 w-full flex flex-col gap-10">
            {caseStudyData.painPoints.map((point, index) => {

              // Array defining dynamic colors and SVGs for each index to recreate the design
              const visualConfig = [
                { // 0: Leakage (Red)
                  color: "text-red-400", bgGlow: "bg-red-500",
                  svg: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                },
                { // 1: Communication (Blue)
                  color: "text-blue-400", bgGlow: "bg-blue-500",
                  svg: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                },
                { // 2: Silos/Data (Purple)
                  color: "text-purple-400", bgGlow: "bg-purple-500",
                  svg: <><ellipse cx="12" cy="5" rx="9" ry="3" strokeWidth="1.5" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" /></>
                },
                { // 3: Fatigue (Orange)
                  color: "text-orange-400", bgGlow: "bg-orange-500",
                  svg: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8v4l3 3M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z" />
                },
                { // 4: Security (Emerald)
                  color: "text-emerald-400", bgGlow: "bg-emerald-500",
                  svg: <><rect x="3" y="11" width="18" height="11" rx="2" ry="2" strokeWidth="1.5" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7 11V7a5 5 0 0 1 10 0v4" /></>
                },
              ];

              const visual = visualConfig[index % visualConfig.length];

              return (
                <div key={index} className="flex flex-col sm:flex-row gap-6 group">

                  {/* Glowing Icon Container */}
                  <div className="relative flex-shrink-0 mt-1 w-14 h-14">
                    {/* The Blur Glow behind the icon (Matching your 2nd image) */}
                    <div className={`absolute inset-0 ${visual.bgGlow} blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-300 rounded-full`}></div>

                    {/* The actual Icon Box */}
                    <div className="relative w-14 h-14 rounded-full bg-[#050510] border border-white/10 flex items-center justify-center z-10 overflow-hidden shadow-lg">
                      {/* Subtle background tint inside the circle */}
                      <div className={`absolute inset-0 ${visual.bgGlow} opacity-10`}></div>
                      <svg className={`w-6 h-6 ${visual.color} relative z-20`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {visual.svg}
                      </svg>
                    </div>
                  </div>

                  {/* Text Content */}
                  <div>
                    <h4 className={`font-p_sbold text-xl mb-2 ${visual.color} group-hover:translate-x-1 transition-transform duration-300`}>
                      {point.title}
                    </h4>
                    <p className="text-gray-400 font-p_regular text-base leading-relaxed">
                      {point.description}
                    </p>
                  </div>

                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 4. PROJECT OVERVIEW (The Solution Entry) */}
      <section className="w-full py-24 px-6 md:px-12 lg:px-16 bg-[#050510]">
        <div className="max-w-7xl mx-auto">

          {/* TOP: Headline & Strategy (Centered) */}
          <div className="max-w-3xl mb-12 md:mx-auto md:text-center">
            <h2 className="text-4xl lg:text-[2.5rem] xl:text-5xl font-p_ebold text-white mb-6 leading-tight">
              {caseStudyData.projectOverview.title.split('-')[0]}<span className="text-blue-500">{
                caseStudyData.projectOverview.title.split('-')[1]
              }</span>
            </h2>
            <p className="text-gray-400 font-mont md:text-lg max-w-2xl mx-auto">
              {caseStudyData.projectOverview.description}
            </p>
          </div>

          {/* MIDDLE: The Visual Proof (Fixed Mobile & Overlap Issue) */}
          <div className="w-full max-w-5xl flex flex-col rounded-2xl border border-white/10 overflow-hidden shadow-[0_0_80px_rgba(59,130,246,0.1)] mb-16 group bg-[#0a0a1a] mx-auto">

            {/* Top Part: The Image Container */}
            {/* Mobile par 4:3 aur Desktop par 16:9 ratio with breathing room (padding) */}
            <div className="w-full aspect-[5/4] md:aspect-[16/9] relative p-6 sm:p-12 md:p-0 flex items-center justify-center overflow-hidden">

              {/* Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20 z-0 pointer-events-none"></div>

              {/* Safe Wrapper for Next.js Image (Ensures padding is respected) */}
              <div className="relative w-full h-full z-10">
                <Image
                  src={caseStudyData.projectOverview.image}
                  alt="EduCore Dashboard and Mobile View"
                  fill
                  priority
                  className="object-contain transition-transform duration-700 group-hover:scale-[1.02]"
                />
              </div>
            </div>

            {/* Bottom Part: The Labels (Now completely separate, no overlap!) */}
            <div className="w-full bg-[#050510] border-t border-white/10 p-4 sm:px-8 flex justify-between items-center z-20">
              <div className="text-left">
                <p className="text-blue-500 font-p_sbold text-[10px] md:text-xs uppercase tracking-widest">Interface</p>
                <p className="text-white font-p_md text-xs md:text-sm mt-0.5">Dark Mode Optimized</p>
              </div>
              <div className="text-right">
                <p className="text-purple-500 font-p_sbold text-[10px] md:text-xs uppercase tracking-widest">Responsiveness</p>
                <p className="text-white font-p_md text-xs md:text-sm mt-0.5">100% Mobile Fluid</p>
              </div>
            </div>

          </div>

          {/* BOTTOM: The 4 Features in a clean 2x2 Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {caseStudyData.projectOverview.keyFeatures.map((feature, index) => (
              <div key={index} className="flex gap-4 group p-6 rounded-xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] hover:border-blue-500/20 transition-all">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-all shadow-sm">
                  <span className="text-sm font-p_bold">{index + 1}</span>
                </div>
                <div>
                  <h4 className="text-white font-p_sbold text-lg mb-2">{feature.title}</h4>
                  <p className="text-gray-500 font-p_regular text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. ENGINEERING CHALLENGES (Mapped Array) */}
      <section className="w-full py-24 px-6 md:px-12 lg:px-16 bg-[#0a0a1a] border-t border-white/5 relative overflow-hidden">

        <div className="absolute right-0 top-1/4 w-96 h-96 bg-blue-600/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto">

          <div className="w-full mb-16">
            <h2 className="text-4xl lg:text-[2.5rem] xl:text-5xl font-p_ebold text-white mb-4">
              Engineering <span className="text-blue-500">Complexities</span>
            </h2>
            <p className="text-gray-400 font-mont max-w-3xl md:text-lg leading-relaxed">
              {caseStudyData.challengesDescription}
            </p>
          </div>

          <div className="space-y-8">
            {caseStudyData.engineeringChallenges.map((item) => {

              let bgTint = 'bg-slate-500/5';
              let textBig = 'text-slate-500/10';
              let textLabel = 'text-slate-400';
              let bgLabel = 'bg-slate-500/10';

              switch (item.themeColor) {
                case 'red':
                  bgTint = 'bg-red-500/5';
                  textBig = 'text-red-500/10';
                  textLabel = 'text-red-400';
                  bgLabel = 'bg-red-500/10';
                  break;
                case 'blue':
                  bgTint = 'bg-blue-500/5';
                  textBig = 'text-blue-500/10';
                  textLabel = 'text-blue-400';
                  bgLabel = 'bg-blue-500/10';
                  break;
                case 'purple':
                  bgTint = 'bg-purple-500/5';
                  textBig = 'text-purple-500/10';
                  textLabel = 'text-purple-400';
                  bgLabel = 'bg-purple-500/10';
                  break;
                case 'orange':
                  bgTint = 'bg-orange-500/5';
                  textBig = 'text-orange-500/10';
                  textLabel = 'text-orange-400';
                  bgLabel = 'bg-orange-500/10';
                  break;
                case 'emerald':
                  bgTint = 'bg-emerald-500/5';
                  textBig = 'text-emerald-500/10';
                  textLabel = 'text-emerald-400';
                  bgLabel = 'bg-emerald-500/10';
                  break;
                default:
                  bgTint = 'bg-slate-500/5';
                  textBig = 'text-slate-500/10';
                  textLabel = 'text-slate-400';
                  bgLabel = 'bg-slate-500/10';
              }

              return (
                <div key={item.id} className="flex flex-col md:flex-row bg-[#050510] border border-white/10 rounded-2xl overflow-hidden shadow-lg group hover:border-white/20 transition-colors">

                  {/* Left Side: The Problem */}
                  <div className={`md:w-5/12 p-8 md:p-10 border-b md:border-b-0 md:border-r border-white/10 relative overflow-hidden ${bgTint}`}>
                    <div className={`absolute -top-10 -left-10 text-9xl font-p_black z-0 ${textBig}`}>
                      {item.id}
                    </div>
                    <div className="relative z-10">
                      <div className={`inline-flex items-center gap-2 px-3 py-1 rounded text-xs font-p_bold uppercase tracking-widest mb-4 ${bgLabel} ${textLabel}`}>
                        The Problem
                      </div>
                      <h3 className="text-xl md:text-2xl font-p_ebold text-white mb-3">{item.title}</h3>
                      <p className="text-gray-400 font-p_regular text-sm leading-relaxed">
                        {item.challenge}
                      </p>
                    </div>
                  </div>

                  {/* Right Side: The Solution */}
                  <div className="md:w-7/12 p-8 md:p-10 flex flex-col justify-center relative">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-blue-500/10 text-blue-400 text-xs font-p_bold uppercase tracking-widest mb-4 w-max">
                      The Engineering Solution
                    </div>
                    <p className="text-gray-300 font-p_regular text-base leading-relaxed mb-6">
                      {item.solution}
                    </p>
                    <div className="flex flex-wrap gap-3 mt-auto">
                      {item.tags.map((tag, i) => (
                        <span key={i} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-gray-400 font-p_md">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 6. TECHNICAL ARCHITECTURE (The Solution & Diagram) */}
      <section className="w-full py-16 px-6 md:px-12 lg:px-16 bg-[#050510] relative overflow-hidden">

        {/* Glow effect for the diagram area */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-blue-600/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl md:mx-auto">

          <div className="md:text-center mb-16">
            <h2 className="text-4xl lg:text-[2.5rem] xl:text-5xl font-p_ebold text-white mb-4">
              {caseStudyData.architectureTitle.split('Architecture')[0]} <span className="text-blue-500">Architecture</span>
            </h2>
            <p className="text-gray-400 font-mont md:text-lg max-w-2xl mx-auto">
              {caseStudyData.architectureDescription}
            </p>
          </div>

          {/* Outer container with base background and border */}
          <div className="w-full bg-[#0a0a1a] border border-white/10 rounded-2xl mb-16 shadow-2xl overflow-hidden relative group">

            {/* Aspect Ratio Logic:
              - Mobile: aspect-[3/4] or aspect-[4/5] (Provides a tall container for your vertical image)
              - Desktop: aspect-[21/9] (Provides an ultrawide container for your horizontal image)
            */}
            <div className="w-full aspect-[2/3] md:aspect-[21/9] relative flex items-center justify-center">

              {/* Desktop Image */}
              <Image
                src={caseStudyData.architectureImage}
                alt="Architecture Flow Diagram"
                fill
                className="object-contain transition-transform duration-700 group-hover:scale-[1.02] p-8 hidden md:block"
              />

              {/* Mobile Image */}
              <Image
                src={caseStudyData.architectureImageMobile}
                alt="Architecture Flow Diagram Mobile"
                fill
                className="object-contain transition-transform duration-700 group-hover:scale-[1.02] p-4 md:hidden"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 7. THE TECH STACK (Left-Right Layout) */}
      <section className="w-full py-16 px-6 md:px-12 lg:px-16 bg-[#0a0a1a]">
        <div className="max-w-7xl md:mx-auto">

          <div className="md:text-center mb-16">
            <h2 className="text-4xl lg:text-[2.5rem] xl:text-5xl font-p_ebold text-white mb-4">
              Tech <span className="text-blue-500">Stack</span>
            </h2>
            <p className="text-gray-400 font-mont md:text-lg max-w-2xl mx-auto">
              Our architecture is built on a purpose-driven tech stack. We prioritize tools that guarantee sub-second performance, bank-grade security, and the flexibility to scale as the platform grows.
            </p>
          </div>

          {/* Changed to a 2-column grid to allow wide left-right cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {caseStudyData.techStack.map((tech) => (
              // Changed from flex-col to flex-row for Left-Right layout
              <div key={tech.id} className="flex flex-col sm:flex-row gap-6 p-8 bg-[#0a0a1a] border border-white/10 rounded-2xl hover:border-white/30 transition-all group">

                {/* Tech Logo Area (Left) */}
                <div className="flex-shrink-0 w-20 h-20 relative rounded-xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:bg-white/10 transition-colors p-3">
                  {/* Yahan logo placeholder hai */}
                  <Image
                    src={tech.logoPath}
                    alt={tech.name}
                    fill
                    priority
                    className="object-contain p-4"
                  />
                </div>

                {/* Tech Text Area (Right) */}
                <div className="flex-1">
                  <h4 className="text-xl font-p_sbold text-white leading-tight mb-1">{tech.name}</h4>
                  <p className="text-blue-400 font-p_md text-xs uppercase tracking-wider mb-3">{tech.role}</p>
                  <p className="text-gray-500 font-p_regular text-sm leading-relaxed">
                    {tech.description}
                  </p>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 8. BUSINESS ROI / BENEFITS (Top-Bottom Layout for 4 Cards) */}
      <section className="w-full py-24 px-6 md:px-12 lg:px-16 bg-gradient-to-b from-[#050510] to-[#020205] border-t border-white/5">
        <div className="max-w-7xl mx-auto relative">

          {/* Subtle Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-indigo-600/10 rounded-full blur-[150px] pointer-events-none" />

          <div className="relative z-10">

            {/* TOP: The ROI Narrative & CTA (Centered) */}
            <div className="max-w-3xl md:mx-auto md:text-center mb-16">
              <h2 className="text-4xl lg:text-[2.5rem] xl:text-5xl font-p_ebold text-white mb-6 leading-tight">
                The Business <span className="text-blue-500">Impact</span>
              </h2>
              <p className="text-gray-400 font-mont md:text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
                Beyond code, we deliver operational excellence. This framework transforms fragmented manual workflows into a high-performance digital asset, driving measurable ROI and long-term technical sovereignty.
              </p>
            </div>

            {/* BOTTOM: The Metric Cards (4 Cards Grid) */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 lg:max-w-4xl xl:max-w-none mx-auto gap-6">
              {caseStudyData.businessBenefitsData.map((benefit) => (
                <div key={benefit.id} className="p-8 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-md hover:-translate-y-1 hover:border-indigo-500/30 transition-all duration-300 group">
                  <h3 className="text-4xl md:text-5xl font-p_black text-indigo-400 mb-4 group-hover:text-blue-400 transition-colors">{benefit.metric}</h3>
                  <h4 className="text-white font-p_sbold text-lg mb-3 leading-snug">{benefit.title}</h4>
                  <p className="text-gray-500 font-p_regular text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>
      <CallToAction />
      <Footer />
    </main>
    </>
  );
}
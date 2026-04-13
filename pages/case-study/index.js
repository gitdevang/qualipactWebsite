import useTorchEffect from "@/hooks/TorchEffect";
import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/Footer";
import Head from "next/head";

export default function CaseStudy() {
  return (
    <>
      <Head>
        <title>Technical Case Studies & Proven Engineering Impact | Qualipact</title>
        <meta name="description" content="Explore Qualipact's technical portfolio. Deep dives into how we engineer dual-engine platforms and centralized data hubs for maximum scalability and security." />
        <meta name="keywords" content="Qualipact case studies, engineering portfolio, B2B tech examples, scalable architecture examples, headless tech stack, software impact" />
        <link rel="canonical" href="https://www.qualipact.com/case-study" />
      </Head>
      <CaseStudyHero />
      <CaseStudyGrid />
      <CallToAction />
      <Footer />
    </>
  )
}

function CaseStudyHero() {
  const { torchRef, handleMouseMove } = useTorchEffect();

  return (
    <section
      id="torchactive"
      onMouseMove={handleMouseMove}
      // 'group' class use ki hai taaki andar ke elements ko hover state pata chale
      className="relative w-full bg-[#050510] text-white py-24 px-6 md:px-12 lg:px-24 overflow-hidden group"
    >
      {/* Dynamic Torch Effect (Tumhara CSS ise handle karega) */}
      <div className="torch" ref={torchRef}></div>

      {/* Static Background Glows - group-hover:opacity-0 se hover par gayab honge */}
      <div className="absolute top-[-20%] left-[20%] w-96 h-96 bg-blue-600/15 rounded-full blur-[120px] pointer-events-none transition-opacity duration-700 group-hover:opacity-0" />
      <div className="absolute bottom-[-10%] right-[10%] w-80 h-80 bg-purple-600/15 rounded-full blur-[100px] pointer-events-none transition-opacity duration-700 group-hover:opacity-0" />

      {/* Content (z-10 ensures text torch ke upar rahe) */}
      <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center justify-center">

        <h1 className="text-4xl lg:text-[2.5rem] xl:text-5xl font-p_sbold tracking-tight mb-6">
          Proven <span className="text-blue-500">Engineering Impact</span> <br className="hidden md:block" />
          in Scalable Digital Infrastructure
        </h1>

        {/* The Pitch Sub-headline */}
        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed tracking-wide font-p_light">
          Explore how Qualipact architected custom engines and headless frameworks
          to solve complex operational hurdles and deliver measurable technical ROI.
        </p>
      </div>
    </section>
  );
}

const caseStudies = [
  {
    id: "real-estate",
    // Radix Style: Tech + Core Benefit + Result
    title: "High-Velocity Real Estate Engine with Geospatial Search & Analytics",
    techStack: ["Next.js", "MongoDB", "Node.js", "Mapbox/Leaflet", "Python"],
    imagePath: "/Media/img/Case-Study/Real-Estate-Engine-Feature.png",
    link: "/case-study/real-estate",
  },
  {
    id: "school-management",
    // Radix Style: Problem it solves + Scale
    title: "Centralized Institutional Engine for Financial & Academic Operations",
    techStack: ["Next.js", "Node.js/JWT", "MongoDB", "Tailwind CSS"],
    imagePath: "/Media/img/Case-Study/Educational-Management-Feature.png",
    link: "/case-study/school-management",
  },
];

function CaseStudyGrid() {
  return (
    <section className="w-full bg-[#050510] py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <div className="flex items-center gap-4">
          <h2 className="text-sm font-p_bold text-slate-500 uppercase tracking-[0.2em] whitespace-nowrap">
            Featured Case Studies
          </h2>
          <div className="h-[1px] w-full bg-white/10"></div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {caseStudies.map((study) => (
            <Link href={study.link} key={study.id} className="group cursor-pointer">
              <div className="flex flex-col h-full rounded-2xl bg-white/[0.02] border border-white/10 overflow-hidden transition-all duration-500 hover:border-blue-500/30 hover:bg-white/[0.04] hover:shadow-[0_0_40px_rgba(59,130,246,0.1)]">

                <div className="relative w-full aspect-[16/10] overflow-hidden bg-[#0a0a1a] border-b border-white/10">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20 z-0" />
                  <Image
                    src={study.imagePath}
                    alt={study.title}
                    fill
                    className="object-contain z-10 transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex flex-wrap gap-2 mb-5">
                    {study.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs font-p_regular text-blue-300 bg-blue-500/10 rounded-full border border-blue-500/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Title with Poppins Bold */}
                  <h2 className="text-2xl font-p_md text-white mb-3 group-hover:text-blue-400 transition-colors">
                    {study.title}
                  </h2>

                  {/* Action link with Poppins Semibold */}
                  <div className="flex items-center text-sm font-p_regular text-white transition-colors group-hover:text-blue-400 mt-5">
                    Read Case Study
                    <svg
                      className="w-4 h-4 ml-2 transform transition-transform group-hover:translate-x-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
export function CallToAction() {
  return (
    <section className="w-full bg-[#050510] py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-5xl mx-auto relative group">

        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-3xl blur-2xl transition-all duration-700 group-hover:blur-3xl group-hover:opacity-100 opacity-70"></div>

        <div className="relative bg-[#0a0a1a]/80 backdrop-blur-xl border border-white/10 rounded-3xl p-10 md:p-16 text-center overflow-hidden transition-colors duration-500 hover:border-blue-500/30">

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.1),transparent_50%)] pointer-events-none"></div>

          {/* Headline with Poppins Extrabold */}
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-p_sbold text-white mb-6 tracking-tight">
            Ready to Upgrade Your <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">
              Digital Infrastructure?
            </span>
          </h2>

          {/* Pitch with Poppins Regular */}
          <p className="font-mont text-gray-400 text-md md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            Whether you need a custom internal dashboard or a scalable B2B architecture, we have the technical muscle to deliver it. Let's engineer your next asset.
          </p>

          {/* CTA Button with Poppins Bold */}
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 text-base font-p_md text-white transition-all duration-300 bg-blue-600 rounded-full hover:bg-blue-500 hover:shadow-[0_0_40px_rgba(37,99,235,0.5)] hover:tracking-wide"
          >
            Start the Conversation
            <svg
              className="w-5 h-5 ml-2 -mr-1 transition-transform duration-300"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
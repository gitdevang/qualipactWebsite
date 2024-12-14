import React, { useRef } from "react";
import { FaMobileAlt, FaDesktop, FaMicrochip, FaMagic } from "react-icons/fa"; // Importing React Icons
import { AiOutlineArrowRight } from "react-icons/ai";
import useWatchAnimation from "@/hooks/useWatchAnimation";
import  Link  from "next/link";

export const Article = ({ icon, name, desc, i, blue, blue2, blue3, blue4 }) => {
  const articleStyle = {
    "--i": i,
    "--n": 4,
    "--name": name,
  };

  const cardRef = useRef(null); // Ref for the card
  const visibility = useWatchAnimation([cardRef], 0.1); // Hook for visibility animation

  return (
    <article
      ref={cardRef}
      className="articleofhome"
      style={visibility[0] ? articleStyle : null}
    >
      <header
        className={`flex h-full relative overflow-hidden header flex-col  ${
          visibility[0] ? "opacity-1" : "opacity-0"
        } justify-start`}
      >
        <div
          className={`w-16 aspect-square rounded-3xl mx-auto ${
            visibility[0] ? "animate-increase" : ""
          } flex opacity-0 justify-center items-center bg-[#ffffff]`}
        >
          <div className="text-[#18092e] text-3xl">{icon}</div>
        </div>
        <h3
          className={`h3ofhome font-p_bold text-2xl uppercase text-center ${
            visibility[0] ? "block" : "hidden"
          }`}
          data-name={visibility[0] ? name : null}
        ></h3>
        <div
          className={`h-[0.15rem] w-[90%] scale-x-0 rounded-full ${
            visibility[0] ? "animate-line" : ""
          } opacity-0 bg-white mx-auto`}
        ></div>
        <div>
          <p
            className={`text-sm font-mont ${
              visibility[0] ? "animate-para" : ""
            } opacity-0 font-regular text-justify px-5`}
          >
            {desc}
          </p>
        </div>
        <div
          style={{ "--deg": "135deg" }}
          className={`absolute top-0 left-0 size-44 bgminblue ${blue} transition-all duration-200`}
        ></div>
        <div
          style={{ "--deg": "225deg" }}
          className={`absolute top-0 right-0 size-44 bgminblue ${blue2} transition-all duration-200`}
        ></div>
        <div
          style={{ "--deg": "45deg" }}
          className={`absolute bottom-0 left-0 size-44 bgminblue ${blue3} transition-all duration-200`}
        ></div>
        <div
          style={{ "--deg": "315deg" }}
          className={`absolute bottom-0 right-0 size-44 bgminblue ${blue4} transition-all duration-200`}
        ></div>
      </header>
    </article>
  );
};

function ExpertiseHome(){
  return (
    <section className="text-white z-[51] bg-[#0f092e] relative body-font py-16 pb-32">
      <div className="flex justify-center items-center flex-col mx-auto">
        <h1 className="text-3xl sm:text-4xl lg:text-[2.6rem] px-3 sm:px-8 md:px-20 lg:px-0 uppercase text-center max-w-screen-md leading-tight font-p_bold">
          Discover Our Expertise
        </h1>
        <p className="z-10 font-mont font-normal leading-relaxed px-3 sm:px-16 max-w-screen-xl text-justify xl:text-lg text-white mt-5 lg:mt-7">
          Explore every aspect of our skills and expertise, which are intended
          to strengthen your business. Our Services are designed to transform
          your ideas into applications that are efficient, effective, and meet
          the needs of your business. From tactical applications to strategic
          insights, we are here to aid you at every stage of the process.
        </p>
      </div>
      <div
        className={` max-w-screen-2xl gap-10 px-5 sm:px-10 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 justify-items-center lg:w-3/4 xl:w-full  mx-auto mt-16`}
      >
        <Article
          i={0}
          blue2={"hidden"}
          blue3={"hidden"}
          blue4={"hidden"}
          icon={<FaMobileAlt />} // React Icon for Mobile
          name="App Development"
          desc="Bring your app ideas to life with Qualipact's app development services. We create highly engaging, responsive apps for cross-platform, iOS, and Android, ensuring smooth user experiences and high interaction rates."
        />
        <Article
          i={1}
          blue3={"hidden"}
          blue4={"hidden"}
          icon={<FaDesktop />} // React Icon for Desktop
          name="Web Development"
          desc="Unlock your business's potential with Qualipact's web development services. From stunning designs to robust backend solutions, we build optimized, user-friendly websites that enhance your digital presence and engage audiences effectively."
        />
        <Article
          i={2}
          blue3={"hidden"}
          icon={<FaMicrochip />} // React Icon for Microchip (AI)
          name="AI Applications"
          desc="Leverage AI to transform your business with smart, data-driven applications. From automation to predictive analytics, Qualipact’s AI solutions help optimize processes and enhance decision-making."
        />
        <Article
          i={3}
          icon={<FaMagic />} // React Icon for Magic (Custom Apps)
          name="Custom Applications"
          desc="Qualipact's custom application development services are tailored to meet your unique needs. We build intuitive applications designed to enhance user satisfaction, streamline operations, and drive business success."
        />
      </div>
      <div className="relative w-max mx-auto top-16">
        <Link href={'/services'}>
        <button className="btn-glow cursor-pointer active:scale-95 transition-all duration-100 flex items-center font-p_regular rounded-full">
          See More
          <AiOutlineArrowRight className="ml-2" />
        </button>
        </Link>
      </div>

      <div className="glowingExp">
        <div className="curGlowing"></div>
      </div>
    </section>
  );
};

export default ExpertiseHome;

import React, { useMemo, useEffect, useRef, useState } from "react";
import { aiFeatures } from "@/data/ServiceData";
import { RiSendPlane2Fill } from "react-icons/ri";
import Link from "next/link";

function AiSection() {
  return (
    <div className="w-full bg-[#020230]">
    <div className="w-full max-w-screen-2xl mx-auto bg-[#020230]">
      <div className="w-full grid grid-cols-1 md:grid-cols-2 px-6 lg:px-20 sm:px-10 py-20 gap-16">
        <div className="relative">
          <div className="sticky top-1/4 text-center md:text-left">
            <h2 className="text-3xl sm:text-4xl lg:text-[2.6rem] uppercase text-center md:text-left leading-tight font-p_bold text-white z-10">
              AI-Driven Solutions
            </h2>
            <p className="text-white z-20 leading-relaxed font-mont lg:leading-relaxed tracking-wide lg:pr-10 text-justify opacity-100 font-normal mt-5">
              At Qualipact, we specialize in leveraging the power of artificial
              intelligence to create custom, data-powered solutions that help
              you make smarter decisions, automate processes, and personalize
              customer interactions. Whether you're looking to optimize your
              website, develop AI-powered applications, or integrate predictive
              analytics, our team provides innovative, scalable, and reliable AI
              solutions tailored to your unique business needs.
            </p>
            <Link href={"/contact"}>
            <button
              type="submit"
              className="text-[#000] text-lg flex justify-center items-center gap-3 w-max bg-[#fff] hover:gap-4 transition-all duration-100 hover:text-white hover:bg-[#197cd0] rounded-md font-p_md px-7 py-3 mt-6 active:scale-95"
            >
              Get Started
              <RiSendPlane2Fill/>
            </button>
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8">
          {aiFeatures.map((data, index) => (
            <div
              key={index}
              className={`rounded-lg shadow-md px-3 sm:px-6 sticky top-36 h-72 lg:h-52 flex flex-col justify-center items-center transition-transform transform ${data.colorClass}`}
            >
              <h3 className="md:text-2xl text-xl font-p_sbold text-center text-white mb-2">
                {data.title}
              </h3>
              <p className="text-white font-mont text-center font-medium">
                {data.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
  );
}

export default AiSection;

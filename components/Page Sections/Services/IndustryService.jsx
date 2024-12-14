import React, { useMemo, useEffect, useRef, useState } from "react";
import { industryList } from "@/data/ServiceData";
import IndustryCard from "@/components/IndustryCard";
import AdjustableCard from "@/components/AdjustableCard";
import useImageContent from "@/hooks/useImageContent";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";

function IndustryService() {
  const { content, imgChange, setImgChange } = useImageContent(industryList);

  return (
    <>
      <div className="bg-[#020024] py-20 story-section">
        <h1 className="text-[#ffffff] mx-auto text-3xl sm:text-4xl lg:text-[2.5rem] px-3 sm:px-8 md:px-20 lg:px-0 uppercase text-center  leading-tight font-p_bold">
          Industry-Centric Digital Applications
        </h1>
        <p className="text-[#ffffff] mx-auto z-10 font-mont font-normal leading-relaxed px-3 sm:px-16 max-w-screen-xl text-justify xl:text-lg mt-5">
          At Qualipact, we offer a full suite of digital services designed to
          drive growth and transform your business in the digital age. From web
          and mobile app development to cloud solutions, digital transformation,
          and API integrations, our expertise ensures scalable, secure, and
          innovative solutions tailored to meet your unique demands.
        </p>

        {/* For mobile */}
        <div className="lg:hidden px-2 mt-10 sm:px-10">
          <Swiper
            spaceBetween={20}
            slidesPerView={1}
            centeredSlides={true}
            loop={true}
            pagination={{ type: "bullets", clickable: true }}
            autoplay={{
              delay: 1500,
              disableOnInteraction: false,
            }}
            effect="coverflow"
            modules={[EffectCoverflow, Pagination, Autoplay]}
            className="relative"
          >
            {industryList.map((data, index) => (
              <SwiperSlide
                key={index}
                className="flex-row-center text-white rounded-lg px-4"
              >
                <IndustryCard heading={data.heading} index={index} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <div className="bg-[#020024] w-full">
        {/* For laptop */}
        <div className="hidden lg:flex  items-center relative pb-20 max-w-screen-2xl mx-auto">
          {/* Left Column */}
          <div className="flex flex-col w-1/2 justify-start h-[50vh] overflow-y-auto items-center relative flex-grow">
            {industryList.map((data, index) => (
              <div
                key={index}
                className={`transition-all duration-100 w-[80%] cursor-pointer z-[10] relative industrycard ${
                  imgChange === index ? "active" : ""
                }`}
                onClick={() => setImgChange(index)}
              >
                <AdjustableCard
                  divstyle={`gap-5 w-full transition-all duration-300 hover:text-white items-center ${
                    imgChange === index
                      ? "border-b-2 border-[#197cd0] text-white"
                      : "border-b-2 text-neutral-400"
                  }`}
                  iconstyle={`transition-all duration-100 ${
                    imgChange === index
                      ? "bg-white text-blue-600"
                      : "bg-blue-600 text-white"
                  }`}
                  heading={data.heading}
                  headingstyle="xl:text-xl font-p_sbold"
                  IconComp={data.icon}
                />
              </div>
            ))}
          </div>

          {/* Image Display */}
          <div className="w-1/2 flex justify-center items-center">
            {content}
          </div>
        </div>
      </div>
    </>
  );
}

export default IndustryService;

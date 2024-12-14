import React, { useEffect, useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { AiOutlineRocket, AiOutlineBuild } from "react-icons/ai";
import { RiLightbulbFlashLine } from "react-icons/ri";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import Link from "next/link";
import { EffectCards, Pagination, Autoplay } from "swiper/modules";

function MainpageHome() {
  return (
    <div className="relative z-40 bg-black flex h-screen flex-col justify-center items-center overflow-hidden home-hero-section">
      <h1 className="z-20 text-3xl sm:text-4xl lg:text-[2.6rem] px-3 sm:px-8 md:px-20 lg:px-0 uppercase text-center max-w-screen-md leading-tight font-p_bold text-white">
        Smart System <br />{" "}
        <span className="text-[#197cd0]">Better Business</span>
      </h1>
      <p className="z-20 relative opacity-0 animate-scale-fade font-mont leading-relaxed px-5 sm:px-16 lg:px-0 text-sm lg:text-lg sm:text-base max-w-[855px] text-justify md:text-center text-white mt-3 sm:mt-6">
        As a young provider of digital solutions, We offer a comprehensive range
        of web, mobile app, and AI development services designed to meet the
        unique needs of businesses of all sizes from small startups to large
        enterprises.
      </p>

      {/* Static Card Container for larger screens */}
      <div className="carContainer z-20 md:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 hidden px-10 mt-10 2xl:mt-16 text-center relative mx-auto max-w-screen-xl">
        {/* Card Box 1 */}
        <div className="text-white px-6 py-2 rounded-2xl carbox-left">
          <div className="w-12 mb-2 aspect-square bg-[#197cd0] text-white border-2 rounded-full flex justify-center items-center">
            <AiOutlineRocket size={35} />
          </div>
          <h2 className="text-xl xl:text-2xl font-p_sbold mb-2">
            Unlock Digital Potential
          </h2>
          <p className="text-neutral-300 text-sm xl:text-base mb-2 font-mont font-medium">
            Unlock the full potential of your business with our cutting-edge
            digital solutions.
          </p>
        </div>

        {/* Card Box 2 (Center) */}
        <div className="text-white p-6 rounded-2xl carbox-center">
          <div className="w-12 mb-3 aspect-square bg-[#197cd0] text-white border-2 rounded-full flex justify-center items-center">
            <AiOutlineBuild size={35} />
          </div>
          <h2 className="text-xl xl:text-2xl font-p_sbold mb-2">
            Stay Ahead in Business
          </h2>
          <p className="text-neutral-300 text-sm xl:text-base mb-2 font-mont font-medium">
            We are committed to building the systems that will elevate your
            business into the future.
          </p>
        </div>

        {/* Card Box 3 */}
        <div className="text-white p-6 rounded-2xl carbox-right">
          <div className="w-12 mb-2 aspect-square bg-[#197cd0] text-white border-2 rounded-full flex justify-center items-center">
            <RiLightbulbFlashLine size={35} />
          </div>
          <h2 className="text-xl xl:text-2xl font-p_sbold mb-2">
            Trailblazing Innovation
          </h2>
          <p className="text-neutral-300 text-sm xl:text-base mb-2 font-mont font-medium">
            Our team is ready to solve your toughest challenges with innovative
            solutions.
          </p>
        </div>
      </div>

      <Swiper
        modules={[EffectCards, Pagination, Autoplay]}
        pagination={{ type: "bullets", clickable: true }}
        spaceBetween={20}
        loop={true}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        effect="cards"
        slidesPerView={"auto"}
        className="hero-slider-mobile"
      >
        {/* Swiper Slide 1 */}
        <SwiperSlide className="text-white bg-[#0000007d] backdrop-blur-3xl glow-button flex-col-every-center text-center px-6 py-0 h-32 rounded-2xl ">
          <div className="w-12 mb-2 aspect-square bg-[#197cd0] text-white border-2 mx-auto rounded-full flex justify-center items-center">
            <AiOutlineRocket size={35} />
          </div>
          <h2 className="text-xl xl:text-2xl font-p_sbold mb-2">
            Unlock Digital Potential
          </h2>
          <p className="text-neutral-300 text-sm xl:text-base mb-2 font-mont font-medium">
            Unlock the full potential of your business with our cutting-edge
            digital solutions.
          </p>
        </SwiperSlide>
        {/* Swiper Slide 2 */}
        <SwiperSlide className="text-white bg-[#0000007d] backdrop-blur-3xl glow-button flex-col-every-center text-center px-6 py-0 rounded-2xl ">
          <div className="w-12 mb-3 aspect-square bg-[#197cd0] text-white border-2 mx-auto rounded-full flex justify-center items-center">
            <AiOutlineBuild size={35} />
          </div>
          <h2 className="text-xl xl:text-2xl font-p_sbold mb-2">
            Stay Ahead in Business
          </h2>
          <p className="text-neutral-300 text-sm xl:text-base mb-2 font-mont font-medium">
            We are committed to building the systems that will elevate your
            business into the future.
          </p>
        </SwiperSlide>

        {/* Swiper Slide 3 */}
        <SwiperSlide className="text-white bg-[#0000007d] backdrop-blur-3xl glow-button flex-col-every-center text-center px-6 py-0 rounded-2xl ">
          <div className="w-12 mb-2 aspect-square bg-[#197cd0] text-white border-2 mx-auto rounded-full flex justify-center items-center">
            <RiLightbulbFlashLine size={35} />
          </div>
          <h2 className="text-xl xl:text-2xl font-p_sbold mb-2">
            Trailblazing Innovation
          </h2>
          <p className="text-neutral-300 text-sm xl:text-base mb-2 font-mont font-medium">
            Our team is ready to solve your toughest challenges with innovative
            solutions.
          </p>
        </SwiperSlide>
      </Swiper>

      {/* Connect Button */}
      <button className="z-20 bg-[#0000007d] backdrop-blur-3xl transition-all lg:hover:border-[#197cd0] lg:hover:text-[#197cd0] text-center py-3 text-white tracking-wide font-p_regular w-max mx-auto mt-12 px-10 rounded-lg cursor-pointer glow-button 2xl:mt-16">
        <Link
          className="flex justify-center items-center gap-2"
          href="/contact"
        >
          <h1>Connect with us</h1>
          <IoIosArrowForward className="text-2xl" />
        </Link>
      </button>

      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        className="z-10 absolute left-1/2 top-1/2 w-screen h-screen -translate-x-1/2 -translate-y-1/2 object-cover opacity-20"
        loading="lazy"
      >
        <source src="/Media/video/background.mp4" type="video/mp4" />
      </video>
    </div>
  );
}

export default MainpageHome;

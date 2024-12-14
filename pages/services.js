import React, { useMemo, useEffect, useRef, useState } from "react";
import IndustryService from "@/components/Page Sections/Services/IndustryService";
import ServiceList from "@/components/Page Sections/Services/ServiceList";
import { motion, useScroll, useTransform } from "framer-motion";
import StackHome from "@/components/Page Sections/Home Page/StackHome";
import DetailedService from "@/components/Page Sections/Services/DetailedService";
import AiSection from "@/components/Page Sections/Services/AiSection";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import Footer from "@/components/Footer";

function Services() {
  const { scrollY } = useScroll();
  const scale = useTransform(scrollY, [0, 400], [1, 0.8]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (<>
    <Head>
      <title>Services - Qualipact</title>
      <meta
        name="description"
        content="Explore Qualipact's expert digital services, including custom web and mobile applications, AI-powered technologies, and e-commerce platforms. Our agile approach ensures robust, scalable, and secure digital experiences"
      />
    </Head>
    <div className="w-full h-[75vh] service-hero-section lg:h-screen overflow-hidden flex flex-col items-center relative radial-bg z-[-2]">
      {/* Animated text section */}
      <motion.div className="fixed z-[-1]" style={{ scale, opacity }}>
        <h1 className="relative opacity-0 tracking-wide animate-scale-fade text-center text-[#fff] font-p_ebold text-3xl sm:text-4xl md:text-5xl lg:text-6xl mt-8 sm:mt-10 lg:mt-16">
          Our Services
        </h1>
        <p className="relative opacity-0 animate-scale-fade z-10 font-mont font-normal text-white lg:text-lg 2xl:text-xl max-w-screen-lg text-justify lg:text-center px-4 sm:px-7 md:px-16 lg:px-32 md:mt-8 lg:mt-10 mt-5 leading-relaxed tracking-wide">
          Whether you're looking to create a robust website, a custom mobile
          application, or implement artificial intelligence, We offer a
          comprehensive range of services with end-to-end support, from
          conceptualization and design to development and deployment.
        </p>
      </motion.div>

      {/* Background image with dynamic sizing */}

      <Image
        src="/Media/img/Service/devices.webp"
        alt="Devices"
        // You should specify the width and height for proper optimization
        width={800}
        // Adjust according to your image's aspect ratio
        height={600}
        className="z-10 object-contain max-w-[100%] max-h-[100vh] sm:max-w-[80%] sm:max-h-[80vh] md:max-w-[60%] md:max-h-[60vh] pt-10 mx-auto absolute bottom-0 left-1/2 transform -translate-x-1/2 animate-scale opacity-0"
        style={{
          maxWidth: "100%",
          height: "auto"
        }} />
    </div>
    <IndustryService />
    <ServiceList />
    <DetailedService />
    <AiSection />
    <StackHome />
    <Footer/>
  </>);
}

export default Services;

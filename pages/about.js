import React, { useMemo, useEffect, useRef, useState } from "react";
import { RiSendPlane2Fill } from "react-icons/ri";
import Values from "@/components/Page Sections/About/Values";
import MisVis from "@/components/Page Sections/About/MisVis";
import Policies from "@/components/Page Sections/About/Policies";
import AdjustableCard from "@/components/AdjustableCard";
import { techArrays, whyChooseUs } from "@/data/AboutData";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import Footer from "@/components/Footer";

const ScrollingTechs = () => {
  return (
    <>
      <div
        className="wrapper"
        style={{
          "--items-count": techArrays[0].length, // Set the number of items dynamically
        }}
      >
        {techArrays[0].map((tag, idx) => (
          <div
            key={idx}
            className={`itemRight`}
            style={{
              /*backgroundColor: textcolArrays[0][idx],*/
              "--index": idx + 1, // Set the index for each item dynamically
            }}
          >
            {tag}
          </div>
        ))}
        <div className="fade" />
      </div>
      <div
        className="wrapper"
        style={{
          "--items-count": techArrays[1].length, // Set the number of items dynamically
        }}
      >
        {techArrays[1].map((tag, idx) => (
          <div
            key={idx}
            className={`itemLeft`}
            style={{
              /*backgroundColor: textcolArrays[1][idx],*/
              "--index": idx + 1, // Set the index for each item dynamically
            }}
          >
            {tag}
          </div>
        ))}
        <div className="fade" />
      </div>
      <div
        className="wrapper"
        style={{
          "--items-count": techArrays[2].length, // Set the number of items dynamically
        }}
      >
        {techArrays[2].map((tag, idx) => (
          <div
            key={idx}
            className={`itemRight`}
            style={{
              /*backgroundColor: textcolArrays[2][idx],*/
              "--index": idx + 1, // Set the index for each item dynamically
            }}
          >
            {tag}
          </div>
        ))}
        <div className="fade" />
      </div>
      <div
        className="wrapper"
        style={{
          "--items-count": techArrays[3].length, // Set the number of items dynamically
        }}
      >
        {techArrays[3].map((tag, idx) => (
          <div
            key={idx}
            className={`itemLeft`}
            style={{
              /*backgroundColor: textcolArrays[3][idx],*/
              "--index": idx + 1, // Set the index for each item dynamically
            }}
          >
            {tag}
          </div>
        ))}
        <div className="fade" />
      </div>
    </>
  );
};

function About() {
  return (
    <>
      <Head>
        <title>About - Qualipact</title>
        <meta
          name="description"
          content="Qualipact delivers expert web and app development, AI solutions, and custom technology integrations, driven by an agile, client-focused approach that fosters innovation and accelerates business growth."
        />
      </Head>
      <div className="w-full flex flex-col justify-center py-20 bg-[#e2e2e2] z-20 relative">
        {/* Content Section */}
        <div className="flex flex-col lg:px-20 space-y-8 justify-center items-center text-[#111030]">
          <h1 className="text-3xl sm:text-4xl lg:text-[2.6rem] px-3 sm:px-8 md:px-20 lg:px-0 uppercase text-center max-w-screen-md leading-tight font-p_bold">
            Transforming your ideas into Smart Solutions
          </h1>
          <p className="text-[#3a375d] z-10 font-mont font-semibold leading-relaxed px-5 sm:px-16 lg:px-0 lg:text-lg max-w-[855px] text-justify lg:text-center">
            We collaborate closely with you to understand your unique goals and
            challenges, creating digital solutions whether on desktop or mobile.
            By leveraging the latest technology, we ensure your project is
            crafted with scalable, secure, and future-ready foundations.
          </p>
        </div>
        <div className="flex flex-col">
          <Link href={"/contact"}>
            <button className="px-6 py-2 w-max gap-3 border-[3px] border-[#111030] text-[#111030] active:scale-95 hover:gap-4 text-lg rounded-2xl font-p_md flex items-center justify-center transition duration-300 mx-auto mt-8 mb-12">
              Get Started <RiSendPlane2Fill />
            </button>
          </Link>
          {/* ScrollingTechs */}
          <div className="flex flex-col justify-center items-center w-full rounded-2xl">
            <ScrollingTechs />
          </div>
        </div>
      </div>
      {/* Our Policies */}
      <div className="bg-black relative z-[51]">
        <div className="container mx-auto px-4 pt-16 flex flex-col justify-center items-center gap-10">
          <h1 className="text-3xl sm:text-4xl lg:text-[2.6rem] px-3 sm:px-8 md:px-20 lg:px-0 uppercase text-center max-w-screen-md leading-tight font-p_bold text-gray-100">
            Our Policies
          </h1>
          <p className="z-10 font-mont font-normal leading-relaxed px-3 sm:px-16 max-w-screen-xl text-justify xl:text-lg text-gray-200">
            At Qualipact, we are dedicated to delivering exceptional service and
            innovative technology solutions that meet the highest standards of
            security, reliability, and. To this, we have developed a set of core
            policies that guide our operations and interactions with clients,
            employees, and partners. These policies are built around our to
            transparency, ethical practices, and continuous improvement. Below
            is an overview of the key policies:
          </p>
        </div>
        <Policies />
      </div>
      <div className="bg-[#ffffff] relative z-[51]">
        <div className="container mx-auto px-4 pt-16 flex flex-col justify-center items-center gap-10">
          <h1 className="text-3xl sm:text-4xl lg:text-[2.6rem] px-3 sm:px-8 md:px-20 lg:px-0 uppercase text-center max-w-screen-md leading-tight font-p_bold text-gray-800">
            Our Values
          </h1>
          <p className="z-10 font-mont font-medium leading-relaxed px-3 sm:px-16 max-w-screen-xl text-justify xl:text-lg text-gray-700 ">
            Qualipact was established on the foundation of our values which
            define our mission, vision and culture for a supportive, innovative,
            and committed environment. Since our founding, we have vision to
            developed into a trustworthy resource for organizations aiming to
            use technology to improve user experiences, accelerate growth, and
            achieve strategic objectives.
          </p>
        </div>
        <Values />
      </div>
      <div className="bg-[#ffffff] relative z-[51]">
        <div className="container mx-auto px-4 pt-16 flex flex-col justify-center items-center gap-10">
          <h1 className="text-3xl sm:text-4xl lg:text-[2.6rem] px-3 sm:px-8 md:px-20 lg:px-0 uppercase text-center max-w-screen-md leading-tight font-p_bold text-gray-800">
            Mission & Vision
          </h1>
          <p className="z-10 font-mont font-medium leading-relaxed px-3 sm:px-16 max-w-screen-xl text-justify xl:text-lg text-gray-700 ">
            At Qualipact, our mission is to deliver outstanding web, app, and AI
            development solutions that drive success for our clients. Guided by
            the values of innovation, excellence, and integrity, we strive to
            exceed expectations and uphold the highest standards in every
            project. Our vision is to be a global leader, providing
            user-friendly, goal-oriented services that help businesses of all
            sizes achieve their objectives with unparalleled quality and
            customer satisfaction.
          </p>
        </div>
        <MisVis />
      </div>
      {/* Our Strengths */}
      <section className="relative z-[51] bg-white text-center w-full">
        <section className="relative z-[51] bg-white py-10 px-5 md:px-10 lg:px-20 xl:px-32 gap-10 text-center grid grid-cols-1 md:grid-cols-2 pt-20 w-full max-w-screen-2xl mx-auto">
          <div className="relative">
            <div className="sticky top-36">
              <h1 className="text-3xl sm:text-4xl lg:text-[2.6rem] uppercase text-center md:text-left leading-tight font-p_bold text-gray-800">
                our strengths
              </h1>
              <p className="z-20 leading-relaxed font-mont lg:leading-relaxed tracking-wide xl:text-lg text-gray-800 text-justify opacity-100 font-medium mt-5">
                We are goal-oriented, focused on delivering quantifiable results
                that align with our clients' goals. Our innovative strategies
                are crafted to achieving our goals with optimal customer
                expectations.
              </p>
            </div>
          </div>
          <div className="mx-auto lg:w-[90%] mt-10 md:mt-0 grid grid-cols-1 justify-center  gap-10 ">
            {whyChooseUs.map((data, index) => (
              <AdjustableCard
                key={index}
                divstyle={
                  "bg-[#fff] rounded-xl text-[#197cd0] shadow-md  transition-all duration-500 p-5"
                }
                IconComp={data.icon}
                iconstyle={"rounded-xl text-[#197cd0] text-xl"}
                heading={data.title}
                headingstyle="text-lg"
                para={data.desc}
                pstyle={"text-[#333] text-sm"}
                rowcol={true}
              />
            ))}
          </div>
        </section>
        {/* Process Chart */}
        <div className="relative flex flex-col py-16 justify-center items-center gap-10 lg:gap-10">
          <h1 className="text-3xl sm:text-4xl lg:text-[2.6rem] uppercase text-center md:text-left leading-tight font-p_bold text-gray-800">
            Our Development Process
          </h1>
          <p className="z-20 leading-relaxed lg:leading-relaxed tracking-wide text-lg md:w-3/4 text-center font-mont font-bold opacity-100 px-[8%] lg:px-[2%]"></p>
          <div className="h-full md:hidden">
            <Image
              src="/Media/img/PFC.svg"
              alt="PFC Image"
              // Adjust based on the image's size
              width={500}
              // Adjust based on the image's size
              height={500}
              className="object-contain"
              style={{
                maxWidth: "100%",
                height: "auto",
              }}
            />
          </div>

          {/* Desktop Image (visible only on medium screens and above) */}
          <div className="hidden md:block w-[80%] max-w-screen-lg mx-auto">
            <Image
              src="/Media/img/Process Chart.png"
              alt="Process Chart"
              // Adjust width based on the image's size
              width={1200}
              // Adjust height based on the image's size
              height={800}
              className="object-contain"
              style={{
                maxWidth: "100%",
                height: "auto",
              }}
            />
          </div>
        </div>
      </section>
      <Footer/>
    </>
  );
}

export default About;

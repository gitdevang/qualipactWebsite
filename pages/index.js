import React, { useMemo, useEffect, useRef, useState } from "react";
import MainpageHome from "@/components/Page Sections/Home Page/MainpageHome";
import ChooseUSHome from "@/components/Page Sections/Home Page/ChooseUSHome";
import IndustryHome from "@/components/Page Sections/Home Page/IndustryHome";
import StackHome from "@/components/Page Sections/Home Page/StackHome";
import ExpertiseHome from "@/components/Page Sections/Home Page/ExpertiseHome";
import DevProcessHome from "@/components/Page Sections/Home Page/DevProcessHome";
import FormMain from "@/components/FormMain";
import "swiper/css";
import Link from "next/link";
import Head from "next/head";
import Footer from "@/components/Footer";

function App() {
  return (
    <>
      <Head>
        <title>Qualipact | AI-Integrated Digital Infrastructure & Apps</title>
        <meta name="description" content="Qualipact engineers scalable digital infrastructure, headless web architectures, and cross-platform mobile apps. We integrate AI and smart systems to accelerate enterprise growth." />
        <meta name="keywords" content="Qualipact, AI-integrated systems, cross-platform mobile apps, headless architecture, B2B software engineering, smart enterprise solutions" />
        <link rel="canonical" href="https://qualipact.com" />
      </Head>
      <MainpageHome />
      <ChooseUSHome />
      <ExpertiseHome />
      <IndustryHome />
      <DevProcessHome />
      <StackHome />
      <FormMain />
      <Footer />
    </>
  );
}

export default App;

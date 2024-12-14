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
        <title>Qualipact - Web and App Development Company</title>
        <meta
          name="description"
          content="Qualipact is a leading web and app development company offering custom web apps, mobile solutions, AI integration, and digital transformation. We empower businesses to drive growth through innovative designs, automation, and tailored technology solutions."
        />
      </Head>
      <MainpageHome />
      <ChooseUSHome />
      <ExpertiseHome />
      <IndustryHome />
      <DevProcessHome />
      <StackHome />
      <FormMain />
      <Footer/>
    </>
  );
}

export default App;

import React, { useMemo, useEffect, useRef, useState } from "react";
import { FaArrowRight,FaRegCircle } from "react-icons/fa"; // React Icons for arrow
import { Link } from 'next/link';
import { appDevFeatures, webDevFeatures } from "@/data/ServiceData";
import FeatureBox from "./FeatureBox";

function DetailedService() {
  const [plan, setPlan] = useState(0);
  const [appPlan, setAppPlan] = useState(0);

  const planKeys = ["basic", "standard", "premium"];
  const planAppKeys = ["basic", "standard", "premium"];

  return (
    <>
      <section className="bg-[#020024] font-p_regular text-white body-font py-20">
        <div className="px-2 md:px-5 py-5 mx-auto flex flex-col">
          <h1 className="text-[#ffffff] mx-auto text-3xl sm:text-4xl lg:text-[2.6rem] px-3 sm:px-8 md:px-20 lg:px-0 uppercase text-center max-w-screen-md leading-tight font-p_bold">
            Digital Services - Features
          </h1>
          <p className="text-[#ffffff] mx-auto z-10 font-mont font-normal leading-relaxed px-3 sm:px-16 max-w-screen-xl text-justify xl:text-lg mt-5">
            Our digital service includes valuable features for businesses of all
            sizes, from small startups to large enterprises.
          </p>
          <div className="flex flex-col lg:flex-row justify-between md:px-16 lg:px-8 lg:gap-8 xl:px-16 xl:gap-16 w-full max-w-screen-2xl mx-auto">
            <FeatureBox
              givenArr={webDevFeatures}
              planKeys={planKeys}
              plan={plan}
              setPlan={setPlan}
            />
            <FeatureBox
              givenArr={appDevFeatures}
              planKeys={planAppKeys}
              plan={appPlan}
              setPlan={setAppPlan}
              app={true}
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default DetailedService;

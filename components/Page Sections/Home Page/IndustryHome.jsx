import React, { useRef } from "react";
import useWatchAnimation from "@/hooks/useWatchAnimation";
import { industryGrid } from "@/data/HomeData";
 export function IconComp({ Ico }) {
  return (
    <Ico/>
  );
}
export const Glasscard = ({
  icon,
  heading,
  desc,
  startGrad,
  endGrad,
  startGradOpaque,
  lastCard,
  endGradOpaque,
}) => {
  const cardRef = useRef(null); // Ref for the card
  const visibility = useWatchAnimation([cardRef], 0.1); // Hook for visibility animation
  return (
    <div
      ref={cardRef}
      className={`GlassCard relative ${visibility[0] ? "animate-scale-fade" : ""} ${lastCard?"sm:col-span-2 lg:col-span-1":""} opacity-0 px-5`}
    >
      <div
        className="glassBox"
        style={{
          "--startGrad": startGrad,
          "--endGrad": endGrad,
          "--startGradOpaque": startGradOpaque,
          "--endGradOpaque": endGradOpaque,
        }}
      >
        <span></span>
        <div className="content text-white z-10 text-center flex flex-col gap-2">
          <div className="text-2xl mx-auto"><IconComp Ico={icon}/></div> {/* Displaying the React Icon */}
          <h2 className="text-xl font-p_sbold font-bold">{heading}</h2>
          <p className="font-mont font-medium text-sm xl:text-base">{desc}</p>
        </div>
      </div>
    </div>
  );
};

/* Home\Industry */

function IndustryHome() {
  return (
    <div className="sticky text-blue-900 z-[51] flex flex-col py-16 justify-center bg-white items-center gap-5 lg:gap-10">
      <h1 className="text-3xl sm:text-4xl lg:text-[2.6rem] px-3 sm:px-8 md:px-20 lg:px-0 uppercase text-center max-w-[855px] leading-tight font-p_bold">
        Industry-Specific Digital Services
      </h1>
      <p className="z-10 font-mont font-medium leading-relaxed px-3 sm:px-16 max-w-screen-xl text-justify xl:text-lg text-black">
      Qualipact team creates customized applications that seamlessly integrate with client's existing systems, providing an easy-to-use experience while ensuring scalability and security. Our focus on delivering digital solutions helps organizations improve operational efficiency, gain a competitive advantage, and accelerate business growth.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 xl:gap-16 max-w-screen-xl mt-8 mx-auto px-3 md:px-5 xl:px-10 ">
        {/* Here we pass the industryGrid data to GlassCardComponent */}
        {industryGrid.map((data, idx) => {
          return (
            <Glasscard
              icon={data.icon} // React Icon passed as a component
              heading={data.name}
              desc={data.desc}
              startGrad={data.startGrad}
              endGradOpaque={data.endGradOpaque}
              startGradOpaque={data.startGradOpaque}
              endGrad={data.endGrad}
              lastCard={idx===industryGrid.length-1}
              key={idx}
            />
          );
        })}
      </div>
    </div>
  );
}

export default IndustryHome;

import React, { useMemo, useEffect, useRef, useState } from "react";
import AdjustableCard from "@/components/AdjustableCard";

function TechStack() {
  const [stack, setStack] = useState("Frontend");

  const data=[
    {
      title: "Frontend",
      stacks: ["HTML", "CSS", "Javascript","Angular","React","VUE","NextJS"],
    },
    {
      title: "Backend",
      stacks: ["Python", "Node", "ExpressJS","Java"],
    },
    {
      title: "Database",
      stacks: ["SQLite", "MySQL", "PostgreSQL","MongoDB","Firebase"],
    },
    {
      title: "Mobile",
      stacks: ["Android","iOS", "Flutter", "React"],
    },
    {
      title: "CMS",
      stacks: ["Strapi", "WordPress", "Wix","Shopify"],
    },
    {
      title: "Cloud",
      stacks: ["MS Azure", "GCP", "AWS","DigitalOcean"],
    },
  ]

  const content = useMemo(() => {
    const currentStack = data?.find((single) => single.title === stack);
    if (currentStack?.stacks) {
      return currentStack.stacks.map((stacks, index) => (
        <AdjustableCard
          key={index}
          divstyle={"justify-evenly items-center flex-col techStackCard"}
          img={`/Media/img/TechStack/${stacks}.webp`}
          heading={stacks}
        />
      ));
    } 
    return null;
  }, [stack, data]);

  return (
    <>
      <div className="flex overflow-x-auto scroll-smooth w-max px-10 max-w-[90%] justify-evenly border-b-[1px] border-blue-400 whitespace-nowrap gap-5 relative scrollable-container">
        {data.map((single, index) => (
          <div
            key={index}
            onClick={() => setStack(single.title)}
            className={`px-5 py-5 font-p_sbold ${
              stack === single.title
                ? "border-b-[1px] font-p_sbold border-[#212280] text-[#212280]"
                : "bg-transparent"
            } cursor-pointer transition-all duration-300`}
          >
            <h1 className="">{single.title}</h1>
          </div>
        ))}
      </div>
      <div className="flex flex-wrap justify-center items-center py-5 gap-5">
        {content}
      </div>
    </>
  );
}

export default TechStack;

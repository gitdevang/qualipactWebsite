import React, { useEffect } from "react";
import useImageContent from "../hooks/useImageContent";
import { industryList } from "../data/ServiceData";

function IndustryCard({ heading, index }) {
  const { content, imgChange, setImgChange } = useImageContent(industryList);
  useEffect(() => {
    setImgChange(index)
  }, [])
  
  return (
    <div
      className={`lg:hidden flex flex-col items-center sm:w-[80%] h-full relative rounded-xl shadow-2xl px-5 bg-[#1925d0] text-white overflow-hidden transition-all`}
    >
      <div className="flex justify-center items-center w-full py-5 gap-5">
        <h1 className="text-[1.3rem] font-p_sbold mt-1 sm:text-3xl">
          {heading}
        </h1>
      </div>
      <div className="font-p_regular text-center tracking-wider leading-relaxed mt-1 md:w-3/4 sm:text-lg">
        <p>
        Our commitment to excellence empowers businesses to reach new heights with technology.
        </p>
      </div>
      <div className="flex justify-center py-6 items-center">
        {content}
      </div>
    </div>
  );
}

export default IndustryCard;

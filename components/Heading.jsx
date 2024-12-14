import React from "react";

function Heading({heading, description}) {
  return (
    <div className="flex flex-col items-center justify-center gap-8 text-white">
        <h1 className="text-3xl xl:text-4xl text-center px-5 font-p_bold text-balance tracking-wide leading-snug">
            {heading}
        </h1>
        <p className="z-20 leading-relaxed lg:leading-relaxed tracking-wide xl:text-lg text-center font-mont px-[8%] max-w-screen-2xl">
          {description}
        </p>
    </div>
  );
}

export default Heading;

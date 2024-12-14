import React, { useMemo, useEffect, useRef, useState } from "react";
import TechStack from '@/components/TechStack'

function StackHome() {
  return (
    <div className="relative z-[51] flex flex-col py-16 justify-center items-center bg-[#ffffff] gap-5 lg:gap-10">
        <h1 className="z-20 sm:text-4xl text-3xl sm:leading-snug lg:leading-snug lg:text-5xl text-center leading-normal px-10  font-p_sbold opacity-100">
          Technology Stack
        </h1>
        <TechStack />
      </div>
  )
}

export default StackHome

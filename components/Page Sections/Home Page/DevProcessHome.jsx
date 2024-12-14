import React, { useState, useEffect, useRef } from "react";
import {
  FaCode,
  FaHeadset,
  FaNewspaper,
  FaRocket,
  FaUsers,
} from "react-icons/fa"; // Import React Icons
import useWatchAnimation from "@/hooks/useWatchAnimation";
import { developmentprocess } from "@/data/HomeData";

export const IconComp = React.memo(function IconComp({ Ico, idx, visible }) {
  return (
    <Ico
      className={`w-8 h-8 sm:w-9 sm:h-9 scale-90 opacity-0 ${
        visible ? `contact-scale${idx + 1}` : ""
      }`}
    />
  );
});

function DevProcessHome() {
  const processAnim = useRef(null);
  const visibile = useWatchAnimation([processAnim], 0.05);
  const [screenWidth, setScreenWidth] = useState(null);
  useEffect(() => {
    // Only run on the client-side
    setScreenWidth(window.innerWidth);
  }, []);
  return (
    <>
      <div className="bgprocess relative bg-gradient-to-tr from-[#473623] via-[#101962] to-[#38042f] z-[51]">
        <div className="max-w-screen-lg mx-auto flex flex-wrap w-full items-center justify-center py-10">
          <p
            style={{ lineHeight: 1.2 }}
            className="mx-auto mt-2 text-center tracking-wide text-4xl font-p_bold text-gray-300 sm:text-5xl"
          >
            Our Development Process
          </p>
          <div className="py-10 mt-10 lg:px-5 xl:px-10" ref={processAnim}>
            {developmentprocess.map((data, idx) => {
              const stepIndex = idx + 1; // Adjust the index to start from 1 for easier reference
              return (
                <div
                  className="flex relative w-full h-48 sm:h-44 lg:h-40 px-5"
                  key={idx}
                >
                  <div
                    className={`flex-grow w-[40%] ${
                      stepIndex % 2 === 0
                        ? visibile[0]
                          ? `contact-right${stepIndex}`
                          : ""
                        : ""
                    } pr-8 relative opacity-0 md:flex hidden justify-end`}
                  >
                    <div>
                      <h2
                        className={`text-lg sm:text-xl lg:text-2xl font-p_sbold ${
                          visibile[0]
                            ? `${
                                stepIndex === 1
                                  ? "text-orange-500"
                                  : stepIndex === 2
                                  ? "text-red-500"
                                  : stepIndex === 3
                                  ? "text-pink-500"
                                  : stepIndex === 4
                                  ? "text-purple-500"
                                  : stepIndex === 5
                                  ? "text-blue-500"
                                  : stepIndex === 6
                                  ? "text-teal-500"
                                  : stepIndex === 7
                                  ? "text-green-500"
                                  : stepIndex === 8
                                  ? "text-yellow-500"
                                  : "" // Default case (if needed)
                              }`
                            : ""
                        } tracking-wide text-right`}
                      >
                        {data.title}
                      </h2>
                      <div className="font-p_regular pl-20 lg:pl-0 text-gray-300 tracking-wide">
                        <p className="mt-2 text-left sm:text-justify">
                          {data.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="relative ">
                    <div className="h-[100%] w-16 absolute inset-0 flex items-center justify-center">
                      {stepIndex !== 7 && (
                        <div
                          className={`${
                            stepIndex === 1
                              ? "bg-gradient-to-b from-orange-500 from-50% to-red-500"
                              : stepIndex === 2
                              ? "bg-gradient-to-b from-red-500 from-50% to-pink-500"
                              : stepIndex === 3
                              ? "bg-gradient-to-b from-pink-500 from-50% to-purple-500"
                              : stepIndex === 4
                              ? "bg-gradient-to-b from-purple-500 from-50% to-blue-500"
                              : stepIndex === 5
                              ? "bg-gradient-to-b from-blue-500 from-50% to-teal-500"
                              : stepIndex === 6
                              ? "bg-gradient-to-b from-teal-500 from-50% to-green-500"
                              : stepIndex === 7
                              ? "bg-gradient-to-b from-green-500 from-50% to-yellow-500"
                              : stepIndex === 8
                              ? "bg-gradient-to-b from-yellow-500 from-50% to-orange-500"
                              : "" // Default case (if needed)
                          }
                             w-2 h-full scale-y-0 absolute top-0 pointer-events-none`}
                          id={visibile[0] ? `divgray${stepIndex}` : ""}
                        ></div>
                      )}
                    </div>

                    {/* Icon */}
                    <div
                      className={`flex-shrink-0 w-16 h-16 rounded-full ${
                        visibile[0]
                          ? `${
                              stepIndex === 1
                                ? "bg-orange-500"
                                : stepIndex === 2
                                ? "bg-red-500"
                                : stepIndex === 3
                                ? "bg-pink-500"
                                : stepIndex === 4
                                ? "bg-purple-500"
                                : stepIndex === 5
                                ? "bg-blue-500"
                                : stepIndex === 6
                                ? "bg-teal-500"
                                : stepIndex === 7
                                ? "bg-green-500"
                                : stepIndex === 8
                                ? "bg-yellow-500"
                                : "" // Default case (if needed)
                            }
                          contact-fade${stepIndex}`
                          : ""
                      } inline-flex items-center justify-center opacity-0 text-white relative z-10`}
                    >
                      {/* Use React Icons here */}
                      <div className="text-white">
                        <IconComp
                          Ico={data.icon}
                          idx={idx}
                          visible={visibile[0]}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Text and Description */}
                  <div
                    className={`flex-grow pl-5 w-[40%] relative ${
                      screenWidth >= 768 ? stepIndex % 2 !== 0
                          ? visibile[0]
                            ? `contact-right${stepIndex}`
                            : ""
                          : ""
                        : visibile[0]
                        ? `contact-right${stepIndex}`
                        : ""
                    } opacity-0 flex`}
                  >
                    <div>
                      <h2
                        className={`text-lg sm:text-xl lg:text-2xl font-p_sbold ${
                          visibile[0]
                            ? `${
                                stepIndex === 1
                                  ? "text-orange-500"
                                  : stepIndex === 2
                                  ? "text-red-500"
                                  : stepIndex === 3
                                  ? "text-pink-500"
                                  : stepIndex === 4
                                  ? "text-purple-500"
                                  : stepIndex === 5
                                  ? "text-blue-500"
                                  : stepIndex === 6
                                  ? "text-teal-500"
                                  : stepIndex === 7
                                  ? "text-green-500"
                                  : stepIndex === 8
                                  ? "text-yellow-500"
                                  : "" // Default case (if needed)
                              }`
                            : ""
                        } tracking-wide`}
                      >
                        {data.title}
                      </h2>
                      <div className="font-p_regular text-gray-300 sm:pr-20 lg:pr-0 tracking-wide">
                        <p className="mt-2 text-left sm:text-justify">
                          {data.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default DevProcessHome;

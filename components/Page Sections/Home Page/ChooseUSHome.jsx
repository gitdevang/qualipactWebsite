import React, { useRef } from "react";
import { FaPython } from "react-icons/fa";
import { MdClose, MdClear } from "react-icons/md";
import useWatchAnimation from "@/hooks/useWatchAnimation";
import Image from "next/image"; // Importing Image from Next.js

function ChooseUSHome() {
  const cardRef1 = useRef(null);
  const cardRef2 = useRef(null);
  const cardRef3 = useRef(null);
  const cardRef4 = useRef(null);
  const visibility = useWatchAnimation(
    [cardRef1, cardRef2, cardRef3, cardRef4],
    0.1
  );

  return (
    (<div className="bg-white pt-20 pb-36 sm:py-20 relative z-[51]">
      <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
        <p
          style={{ lineHeight: 1.2 }}
          className="mx-auto mt-2 max-w-[34rem] text-balance text-center text-4xl font-p_bold text-[#2c2b2b] sm:text-5xl"
        >
          Let us be your trusted Digital Partner
        </p>
        <div className="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-3 lg:grid-rows-2">
          {/* Custom */}
          <div
            ref={cardRef1}
            className={`relative lg:row-span-2 chooseCard opacity-0 ${visibility[0] ? "rightSideAnim" : ""}`}
          >
            <div className="absolute inset-px rounded-lg bg-white lg:rounded-l-[2rem]"></div>
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] lg:rounded-l-[calc(2rem+1px)]">
              <div className="px-8 pb-3 pt-8 sm:px-10 sm:pb-0 sm:pt-10">
                <p className="mt-2 text-lg font-p_sbold text-gray-950 max-lg:text-center">
                  Customized Solutions
                </p>
                <p className="mt-2 max-w-lg text-sm/6 font-mont font-medium text-gray-800 max-lg:text-center">
                  We provide personalized solutions to meet the unique
                  requirements of each client, ensuring a bespoke approach that
                  maximizes results.
                </p>
              </div>
              <div className="relative min-h-[30rem] w-full grow [container-type:inline-size] max-lg:mx-auto max-lg:max-w-sm">
                <div className="absolute inset-x-10 bottom-0 top-10 overflow-hidden">
                  <svg
                    role="img"
                    viewBox="0 0 366 729"
                    xmlns="http://www.w3.org/2000/svg"
                    className="object-cover object-top"
                  >
                    <defs>
                      <clipPath id="2ade4387-9c63-4fc4-b754-10e687a0d332">
                        <rect rx="36" width="316" height="684" />
                      </clipPath>
                    </defs>
                    <path
                      d="M363.315 64.213C363.315 22.99 341.312 1 300.092 1H66.751C25.53 1 3.528 22.99 3.528 64.213v44.68l-.857.143A2 2 0 0 0 1 111.009v24.611a2 2 0 0 0 1.671 1.973l.95.158a2.26 2.26 0 0 1-.093.236v26.173c.212.1.398.296.541.643l-1.398.233A2 2 0 0 0 1 167.009v47.611a2 2 0 0 0 1.671 1.973l1.368.228c-.139.319-.314.533-.511.653v16.637c.221.104.414.313.56.689l-1.417.236A2 2 0 0 0 1 237.009v47.611a2 2 0 0 0 1.671 1.973l1.347.225c-.135.294-.302.493-.49.607v377.681c0 41.213 22 63.208 63.223 63.208h95.074c.947-.504 2.717-.843 4.745-.843l.141.001h.194l.086-.001 33.704.005c1.849.043 3.442.37 4.323.838h95.074c41.222 0 63.223-21.999 63.223-63.212v-394.63c-.259-.275-.48-.796-.63-1.47l-.011-.133 1.655-.276A2 2 0 0 0 366 266.62v-77.611a2 2 0 0 0-1.671-1.973l-1.712-.285c.148-.839.396-1.491.698-1.811V64.213Z"
                      fill="#4B5563"
                    />
                    <path
                      d="M16 59c0-23.748 19.252-43 43-43h246c23.748 0 43 19.252 43 43v615c0 23.196-18.804 42-42 42H58c-23.196 0-42-18.804-42-42V59Z"
                      fill="#343E4E"
                    />
                    <foreignObject
                      width="316"
                      height="684"
                      clipPath="url(#2ade4387-9c63-4fc4-b754-10e687a0d332)"
                      transform="translate(24 24)"
                    >
                      <Image
                        src="/Media/img/Real Estate.avif"
                        alt="Real Estate"
                        width={316}
                        height={684}
                        className="object-cover object-top"
                        sizes="100vw"
                        style={{
                          width: "100%",
                          height: "auto"
                        }} />
                    </foreignObject>
                  </svg>
                </div>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 lg:rounded-l-[2rem]"></div>
          </div>

          {/* Cost */}
          <div
            ref={cardRef2}
            className={`relative chooseCard opacity-0 max-lg:row-start-1 ${visibility[1] ? "bottomSideAnim" : ""}`}
          >
            <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-t-[2rem]"></div>
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)]">
              <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                <p className="mt-2 text-lg font-p_sbold text-gray-950 max-lg:text-center">
                  Cost Effective
                </p>
                <p className="mt-2 max-w-lg text-sm/6 font-mont font-medium text-gray-800 max-lg:text-center">
                  Our robust project management practices ensure projects are
                  completed on time and within budget without compromising
                  quality.
                </p>
              </div>
              <div className="flex flex-1 items-center justify-center px-8 max-lg:pb-12 max-lg:pt-10 sm:px-10 lg:pb-2">
                <Image
                  src="/Media/img/cost.svg"
                  alt="Cost Effective"
                  // Provide width and height for proper sizing
                  width={400}
                  height={400}
                  className="w-full max-lg:max-w-xs opacity-90"
                  style={{
                    maxWidth: "100%",
                    height: "auto"
                  }} />
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 max-lg:rounded-t-[2rem]"></div>
          </div>

          {/* Support */}
          <div
            ref={cardRef3}
            className={`relative chooseCard opacity-0 max-lg:row-start-3 lg:col-start-2 lg:row-start-2 ${visibility[2] ? "topSideAnim" : ""}`}
          >
            <div className="absolute inset-px rounded-lg bg-white"></div>
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)]">
              <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                <p className="mt-2 text-lg font-p_sbold text-gray-950 max-lg:text-center">
                  24*7 Support
                </p>
                <p className="mt-2 max-w-lg text-sm/6 font-mont font-medium text-gray-800 max-lg:text-center">
                  We offer round-the-clock support to assist you with any
                  issues, keeping your business online and operational without
                  interruption.
                </p>
              </div>
              <div className="flex flex-1 items-center [container-type:inline-size] max-lg:py-6 lg:pb-2">
                <Image
                  src="/Media/img/support.svg"
                  alt="Support"
                  width={764}
                  height={152}
                  className="h-[min(152px,40cqw)] object-cover"
                  style={{
                    maxWidth: "100%",
                    height: "auto"
                  }} />
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5"></div>
          </div>

          {/* Quality */}
          <div
            ref={cardRef4}
            className={`relative lg:row-span-2 chooseCard opacity-0 ${visibility[3] ? "leftSideAnim" : ""}`}
          >
            <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-r-[calc(2rem+1px)]">
              <div className="px-8 pb-3 pt-8 sm:px-10 sm:pb-0 sm:pt-10">
                <p className="mt-2 text-lg font-p_sbold text-gray-950 max-lg:text-center">
                  Focus on Quality
                </p>
                <p className="mt-2 max-w-lg text-sm/6 font-mont font-medium text-gray-800 max-lg:text-center">
                  We prioritize quality in every project, employing best
                  practices, code reviews, and rigorous testing to deliver
                  flawless solutions.
                </p>
              </div>
              <div className="relative min-h-[30rem] w-full grow">
                <div className="absolute bottom-0 left-10 right-0 top-10 overflow-hidden shadow-2xl">
                  <div className="flex bg-gray-100 border-t-2 border-l-2 shadow-md">
                    <div className="flex text-sm/6 font-p_regular">
                      <div className="bg-white/100 px-4 py-2 border-r flex items-center justify-center gap-2 border-gray-300 text-gray-800">
                        <FaPython className="text-blue-400/90 text-lg" />
                        views.py
                        <MdClear className="ml-3 text-gray-400/90" />
                      </div>
                      <div className="px-4 py-2 text-gray-600 border-r flex items-center justify-center gap-2 border-gray-300">
                        <FaPython className="text-blue-400/70 text-lg" />
                        serializers.py
                      </div>
                    </div>
                  </div>
                  <div className="px-4 pb-14 pt-2 border-l-2">
                    <pre className="text-[#6c9d98] p-4 rounded-lg overflow-auto text-sm font-light">
                      <code>
                        <span className="  text-purple-700  ">from</span>{" "}
                        django.http{" "}
                        <span className="  text-purple-700  ">import</span>{" "}
                        JsonResponse
                        <br />
                        <span className="  text-purple-700  ">from</span>{" "}
                        rest_framework.decorators{" "}
                        <span className="  text-purple-700  ">import</span>{" "}
                        api_view, permission_classes
                        <br />
                        <span className="  text-purple-700  ">from</span>{" "}
                        django.contrib.auth.hashers{" "}
                        <span className="  text-purple-700  ">import</span>{" "}
                        check_password
                        <br />
                        <span className="  text-purple-700  ">from</span>{" "}
                        django.contrib.auth.models{" "}
                        <span className="  text-purple-700  ">import</span> User
                        <br />
                        <br />
                        <span className="  text-purple-700  ">@api_view</span>
                        ([<span className="text-red-400">'POST'</span>])
                        <br />
                        <span className="  text-purple-700  ">def</span>{" "}
                        register(<span className="text-blue-900">request</span>
                        ):
                        <br />
                        <span className="  text-purple-700  ">if</span>{" "}
                        <span className="text-blue-900">request.method</span> ==
                        <span className="text-red-800">'POST'</span>:
                        <br />
                        <span className="text-blue-900">data </span>=
                        <span> request.data</span>
                        <br />
                        <span className="  text-purple-700  ">try</span>:
                        <br />
                        <span className="text-green-600">
                          # Create new user with the given data
                        </span>
                        <br />
                        <span className="text-blue-900">user</span> ={" "}
                        <span className="text-green-800">
                          User.<span className="text-blue-900">objects</span>
                          .create_user
                        </span>
                        (
                        <br />
                        <span className="text-blue-900">username</span> ={" "}
                        <span className="text-blue-900">data</span>[
                        <span className="text-red-800">'username'</span>],
                        <br />
                        <span className="text-blue-900">password</span> ={" "}
                        <span className="text-blue-900">data</span>[
                        <span className="text-red-800">'password'</span>],
                        <br />
                        <span className="text-blue-900">email</span> ={" "}
                        <span className="text-blue-900">data</span>[
                        <span className="text-red-800">'email'</span>],
                        <br />
                        <span className="text-blue-900">first_name</span> ={" "}
                        <span className="text-blue-900">data</span>[
                        <span className="text-red-800">'fname'</span>],
                        <br />
                        <span className="text-blue-900">last_name</span> ={" "}
                        <span className="text-blue-900">data</span>[
                        <span className="text-red-800">'lname'</span>]
                        <br />
                        )
                        <br />
                        <span className="text-blue-800">user</span>.
                        <span className="text-yellow-800">save</span>()
                        <br />
                        <span className="text-purple-700  ">return</span>{" "}
                        <span className="text-green-900">JsonResponse</span>
                        (&#123;
                        <span className="text-red-800">"msg"</span>:{" "}
                        <span className="text-red-800">
                          "You are registered successfully"
                        </span>
                        &#125;), status=201
                      </code>
                    </pre>
                  </div>
                </div>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
          </div>
        </div>
      </div>
    </div>)
  );
}

export default ChooseUSHome;

import Link from "next/link";
import { FaArrowRight, FaRegCircle } from "react-icons/fa";

const FeatureBox = ({ givenArr, plan, planKeys, setPlan, app }) => {
    return (
      <div className="flex flex-col w-full rounded-xl lg:w-1/2 mt-10 px-3 sm:px-8 py-10 bg-[#151340]">
        <div className="sm:w-full text-center">
          <div className="flex flex-row h-full items-center justify-center text-center gap-6">
            <div className="text-center">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-p_sbold text-white">
                {app ? "App" : "Web"} Development
              </h2>
            </div>
          </div>
        </div>
  
        {/* Feature Section */}
        <div className="sm:w-full rounded-xl mt-5 pt-4 text-center sm:text-left">
          <div className="flex justify-between items-center mb-5">
            <h2 className="text-lg text-gray-300 text-left capitalize">
              Key Features<span className="text-gray-500">*</span>
            </h2>
            <Link
              href="/contact"
              className="text-[#197cd0] flex gap-2 items-center cursor-pointer group"
            >
              Get Started
              <FaArrowRight className="text-[#197cd0] text-xs transform transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
          <div className="flex text-center">
            <div
              className={`flex-grow transition-all duration-200 py-2 px-1 cursor-pointer ${
                plan === 0
                  ? `text-white bg-[#24206b] border-b-2 rounded-t-md border-[#fff]`
                  : "border-b-2 border-gray-500 text-gray-200"
              }`}
              onClick={() => setPlan(0)}
            >
              Basic
            </div>
            <div
              className={`flex-grow transition-all duration-200 py-2 px-1 cursor-pointer ${
                plan === 1
                  ? `text-white bg-[#24206b] border-b-2 rounded-t-md border-[#fff]`
                  : "border-b-2 border-gray-500 text-gray-200"
              }`}
              onClick={() => setPlan(1)}
            >
              Standard
            </div>
            <div
              className={`flex-grow transition-all duration-200 py-2 px-1 cursor-pointer ${
                plan === 2
                  ? `text-white bg-[#24206b] border-b-2 rounded-t-md border-[#fff]`
                  : "border-b-2 border-gray-500 text-gray-200"
              }`}
              onClick={() => setPlan(2)}
            >
              Premium
            </div>
          </div>
          <div className="flex flex-col bg-[#1e1b5b] py-3 md:px-5 rounded-b-md">
            {givenArr[planKeys[plan]]?.map((feature, idx) => (
              <div className="p-2 w-full transition-all duration-300 text-left" key={idx}>
                <div className="text-white rounded-xl gap-5 flex text-sm p-2 h-full items-center text-left">
                  <FaRegCircle />
                  <span className="title-font font-medium">{feature}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
export default FeatureBox;
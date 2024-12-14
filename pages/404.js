import React from "react";
import Link from "next/link";
import { TiArrowBack } from "react-icons/ti";
function ErrorPage() {
  return (
    <div className="h-[90vh] overflow-y-hidden w-screen flex flex-col justify-center items-center bg-white text-black">
    <div className="text-center max-w-screen-sm 2xl:scale-125">
      <h1 className="text-8xl tracking-wider font-p_ebold text-[#197cd0] font-black mb-4">
        404
      </h1>
      <p className="text-xl sm:text-2xl font-p_sbold mb-6">
        Oops! The page you are looking for doesn't exist.
      </p>
      <p className="mb-8 text-sm sm:text-lg sm:px-10 px-5 font-p_regular">
        Don't worry, our team at Qualipact is always here to help you build
        the best web experiences!
      </p>

      <Link href="/" passHref legacyBehavior>
        <button
          type="submit"
          aria-label="Submit Business Inquiry"
          className="mt-5 w-max bg-[#197cd0] font-p_md border-[#197bd0] lg:hover:bg-[#fff] tracking-wider lg:hover:text-[#197cd0] active:scale-95 transition-all duration-100 text-[#ffffff] px-5 py-3 mx-auto rounded-2xl cursor-pointer shadow-xl flex items-center gap-3"
        >
          <TiArrowBack className="text-2xl" /> Go Back Home
        </button>
      </Link>
    </div>
  </div>
    
  );
}
export default ErrorPage;

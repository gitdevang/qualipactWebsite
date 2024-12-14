import React from "react";
import { RiMailAddFill } from "react-icons/ri";

function ServerError({ statusCode }) {
  return (
    <div className="h-[90vh] overflow-y-hidden w-screen flex flex-col justify-center items-center bg-white text-black">
      <div className="text-center max-w-screen-sm 2xl:scale-125">
        <h1 className="text-8xl tracking-wider font-p_ebold text-[#197cd0] font-black mb-4">
          {statusCode}
        </h1>
        <p className="text-xl sm:text-2xl font-p_sbold mb-6">
          Oops! Something went wrong
        </p>
        <p className="mb-8 text-sm sm:text-lg sm:px-10 px-5 font-mont font-medium">
          It looks like there was an unexpected issue occured. Don’t worry,
          Qualipact is working on it to get things back up and running as
          soon as possible.
        </p>
        <a href="mailto:support@qualipact.com">
          <div
            type="submit"
            aria-label="Submit Business Inquiry"
            className="mt-5 w-max bg-[#197cd0] font-p_md border-[#197bd0] lg:hover:bg-[#fff] tracking-wider lg:hover:text-[#197cd0] active:scale-95 transition-all duration-100 text-[#ffffff] px-5 py-3 mx-auto rounded-full cursor-pointer shadow-xl flex items-center gap-3"
          >
            <RiMailAddFill className="text-2xl" /> support@qualipact.com
          </div>
        </a>
      </div>
    </div>
  );
}

ServerError.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};
export default ServerError;

import React from "react";

const MisVisCard = ({ vision }) => {
  return (
    <div className="MisViscard p-5 md:p-10 gap-5">
      <h1 className="font-p_bold text-gray-800 text-4xl">
        {vision ? "Vision" : "Mission"}
      </h1>
      <p className="font-mont font-medium text-justify leading-loose tracking-wider italic text-gray-600">
        {vision
          ? "Our vision is to consistently work on our mission to provide an informative, user friendly and effective strategy to provide excellent products to our clients with goal they are hoping to accomplish. With our goal-oriented services, we want to demonstrate our competitive edge by offering unparalleled and all-inclusive solutions to meet the needs of small, medium and large size businesses."
          : "Our mission is to stand out in the global market for web, app and AI development by consistently delivering excellent work that pleases our clients. Based on our values, we envision our company reaching new heights of success. Our top priorities are ensuring complete client satisfaction with products and services and upholding our ethics, values, and beliefs."}
      </p>
    </div>
  );
};

function MisVis() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 py-20 lg:pt-20 lg:pb-36 px-5 md:px-10 xl:px-20 gap-10 xl:gap-20 max-w-screen-2xl mx-auto">
      <MisVisCard />
      <MisVisCard vision={true} />
    </div>
  );
}

export default MisVis;

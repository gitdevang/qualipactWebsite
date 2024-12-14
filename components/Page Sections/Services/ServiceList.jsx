import React, { useMemo, useEffect, useRef, useState, useCallback } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-cube";
import { Autoplay, EffectCube, Navigation, Pagination } from "swiper/modules";
import { FaCircle } from "react-icons/fa"; // Importing the circle icon from react-icons/fa
import { services } from "@/data/ServiceData";

const ServiceButton = React.memo(({ service, isActive, onClick }) => (
  <button
    className={`${
      isActive ? "bg-[#4f4fdd]" : "bg-[#26268a]"
    } flex flex-col items-start w-full px-3 py-4 rounded-md`}
    onClick={onClick}
  >
    <span className="flex gap-4 items-center font-semibold font-mont text-white tracking-wider text-left px-3">
      <service.icon className="text-xl" /> 
      {service.name}
    </span>
  </button>
));

const MobileSwiper = React.memo(({ service }) => (
  <div className="text-center space-y-4 md:space-y-10 flex flex-col items-center justify-center h-full w-full">
    <div className="space-y-4">
      <h1 className="text-xl sm:text-2xl font-p_bold">{service.name}</h1>
      <h2 className="text-sm sm:text-base font-mont">{service.desc}</h2>
    </div>
    <div className="grid grid-cols-1 gap-4 w-full px-2 sm:px-14">
      {service.subservices.map((subservice, subIdx) => (
        <div
          key={subIdx}
          className="bg-[#26268a] cursor-default shadow-lg text-white p-4 rounded-lg text-center flex items-center justify-center"
        >
          <p className="font-p_md text-sm sm:text-base">{subservice.name}</p>
        </div>
      ))}
    </div>
  </div>
));

function ServiceList() {
  const [activeService, setActiveService] = useState(0);
  const handleSetActiveService = useCallback(
    (idx) => setActiveService(idx),
    []
  );
  const selectedService = useMemo(
    () => services[activeService],
    [activeService]
  );

  return (
    <div className="bg-[#0b0b2a] py-20 story-section">
      <h1 className="text-[#ffffff] mx-auto text-3xl sm:text-4xl lg:text-[2.6rem] px-3 sm:px-8 md:px-20 lg:px-0 uppercase text-center max-w-screen-md leading-tight font-p_bold">
        Comprehensive Digital Services
      </h1>
      <p className="text-[#ffffff] mx-auto z-10 font-mont font-normal leading-relaxed px-3 sm:px-16 max-w-screen-xl text-justify xl:text-lg mt-5">
        At Qualipact, we offer a full suite of digital services designed to
        drive growth and transform your business in the digital age. From web
        and mobile app development to cloud solutions, digital transformation,
        and API integrations, our expertise ensures scalable, secure, and
        innovative solutions tailored to meet your unique demands.
      </p>
      {/* For Laptops */}
      <div className="flex flex-col lg:flex-row gap-10 p-5 px-16 pt-14 max-w-screen-2xl mx-auto">
        <div className="bg-[#151550] rounded-lg p-4 mb-4 lg:mb-0 lg:w-1/3 hidden lg:flex justify-center items-center">
          <div className="h-full flex flex-col justify-evenly items-center w-full">
            {services.map((service, idx) => (
              <ServiceButton
                key={idx}
                service={service}
                isActive={idx === activeService}
                onClick={() => handleSetActiveService(idx)}
              />
            ))}
          </div>
        </div>
        <div className="hidden lg:flex flex-col justify-center py-10 gap-4 bg-[#151550] ease-in-out text-white rounded-lg px-4 lg:px-8 lg:w-2/3">
          <h1 className="text-left xl:px-8 text-[1.7rem] font-p_sbold">
            {services[activeService].name}
          </h1>
          <h2 className="text-left xl:px-8 text-[1.08rem] tracking-wide font-mont">
            {services[activeService].desc}
          </h2>
          <div className="grid grid-cols-2 w-full gap-6 xl:px-8 mt-4">
            {selectedService.subservices.map((subservice, idx) => (
              <div
                className={`cursor-default w-full flex gap-3 items-center bg-[#26268a] text-white p-4 px-5 rounded-lg`}
                key={idx}
              >
                <FaCircle className="text-sm" /> {/* React Icon component */}
                <p className="font-p_regular text-white">{subservice.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="lg:hidden px-2 sm:px-5">
        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          centeredSlides={true}
          loop={true}
          pagination={{ type: "bullets", clickable: true }}
          autoplay={{
            delay: 1500, 
            disableOnInteraction: false, 
          }}
          effect="cube"
          modules={[EffectCube, Pagination, Autoplay]}
          className="relative h-[90vh]" // Set overall height of Swiper to 90vh
        >
          {services.map((service, idx) => (
            <SwiperSlide
              key={idx}
              className="h-[90vh] flex items-center justify-center bg-[#151550] text-white rounded-lg px-4"
            >
              <MobileSwiper service={service} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default ServiceList;

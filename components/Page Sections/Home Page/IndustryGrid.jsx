import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const IndustrySlider = ({ industries }) => {
  return (
    <div className="w-full bg-gray-100 py-8">
      <h2 className="text-3xl font-semibold text-center mb-6">Industries We Serve</h2>
      <Swiper
        spaceBetween={20}
        slidesPerView="auto"
        centeredSlides={true}
        loop={true}
        navigation
        className="flex justify-center items-center"
      >
        {industries.map((industry, index) => (
          <SwiperSlide key={index} className="flex flex-col items-center bg-white rounded-lg shadow-md p-4">
            <div className="w-64 h-auto rounded-lg overflow-hidden border">
              {/* Mockup or device frame */}
              <div className="relative bg-black w-64 h-[400px] flex items-center justify-center">
                <img
                  src={industry.image}
                  alt={`${industry.name} App`}
                  className="object-cover h-[90%] rounded-lg"
                />
              </div>
            </div>
            <h3 className="text-xl font-bold mt-4">{industry.name}</h3>
            <p className="text-sm text-gray-600 mt-2 text-center">{industry.description}</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default IndustrySlider;

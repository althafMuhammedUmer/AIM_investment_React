import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Pagination } from "swiper/modules";

export default function App() {
  const dummyImages = [
    "https://via.placeholder.com/300",
    "https://via.placeholder.com/300",
    "https://via.placeholder.com/300",
    "https://via.placeholder.com/300",
    "https://via.placeholder.com/300",
    "https://via.placeholder.com/300",
    "https://via.placeholder.com/300",
    "https://via.placeholder.com/300",
    "https://via.placeholder.com/300",
  ];

  return (
    <div className="lg:p-24 p-8 mb-5  gap-3 w-full">
        
      <p className="text-center lg:text-4xl text-xl font-bold  mb-8  lg:mb-16 text-colorBgVarient">
        Our Sponsor and Partners
      </p>
      <Swiper
        slidesPerView={5}
        spaceBetween={10}
        freeMode={true}
        loop={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        {dummyImages.map((image, index) => (
          <SwiperSlide key={index}>
            <img src={image} alt={`Slide ${index + 1}`} className="w-44"/>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

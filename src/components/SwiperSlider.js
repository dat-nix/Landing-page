"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination} from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import Card from "./Card";

const cardData = [
  { image: "/assets/img1.jpg", title: "Event 1", description: "Description for event 1" },
  { image: "/assets/img2.jpg", title: "Event 2", description: "Description for event 2" },
  { image: "/assets/img3.jpg", title: "Event 3", description: "Description for event 3" },
  { image: "/assets/img4.jpg", title: "Event 4", description: "Description for event 4" },
  { image: "/assets/img5.jpg", title: "Event 5", description: "Description for event 5" },
  { image: "/assets/img6.jpg", title: "Event 6", description: "Description for event 6" },
];

const SwiperSlider = () => {
  return (
    <div className="relative w-full max-w-[90vw]">
      <Swiper
        
      >
        {cardData.map((card, index) => (
          <SwiperSlide key={index} className="relative transition-all duration-300">
            <div className="transition-transform duration-300 hover:scale-105 group-[.swiper-slide-active]:scale-110 group-[.swiper-slide-active]:z-20">
              <Card {...card} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SwiperSlider;

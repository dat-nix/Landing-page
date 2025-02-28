"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination} from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import Card from "./Card";
import '../stylesheets/SwiperSlider.css'

const cardData = [
  { image: "/assets/img1.jpg", title: "Event 1", description: "Description for event 1" },
  { image: "/assets/img2.jpg", title: "Event 2", description: "Description for event 2" },
  { image: "/assets/img3.jpg", title: "Event 3", description: "Description for event 3" },
  { image: "/assets/img4.jpg", title: "Event 4", description: "Description for event 4" },
  { image: "/assets/img5.jpg", title: "Event 5", description: "Description for event 5" },
];

const SwiperSlider = () => {
  return (
    <div className="container">
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={1.5} // Shows 1 full card + part of 2 inactive cards
        spaceBetween={-100} // Reduces gap for partial visibility
        coverflowEffect={{
          rotate: 0,
          stretch: -50,
          depth: 150,
          modifier: 2.5,
        }}
        pagination={{ el: '.swiper-pagination', clickable: true }}
       
        modules={[EffectCoverflow, Pagination]}
        className="swiper_container"
      >
        {cardData.map((card, index) => (
          <SwiperSlide key={index} className="relative transition-all duration-300">
            <div className="transition-transform duration-300 hover:scale-100 group-[.swiper-slide-active]:scale-110 group-[.swiper-slide-active]:z-20">
              <Card {...card} />
            </div>
          </SwiperSlide>
        ))}
      <div className="slider-controler">
        <div className="swiper-pagination"></div>
      </div>

      </Swiper>
    </div>
  );
}

export default SwiperSlider;
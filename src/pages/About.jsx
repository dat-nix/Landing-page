
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import Card from "../components/Card";
import { content } from "../configs/content";
import { LinkPost } from "../components";


const cardData = content.en.cardData;

const About = () => {
    return (
       <section>
         <div className="container mx-auto py-10 bg-white text-black">
        {/* About Us Section */}
           <div className="flex flex-col items-center">
        {/* Header */}
            <div className="bg-[#E25822] text-white py-4 px-10 rounded-md shadow-md w-full max-w-5xl mx-auto text-center">
                    <h1 className="text-4xl font-bold ">RMIT Shinsei Kendo Club</h1>
            </div>
        {/* Content */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mt-8">
        {/* Text Section */}
            <div className="flex flex-col justify-center px-4 max-w-full text-justify">
                <p className="text-xl text-gray-700">
                    We are an official Kendo club in RMIT Saigon South (SGS). Our club is a dedicated space for students to
                <strong> train, grow, and embody the way of the sword with discipline and respect.</strong>
                </p>
                <p className="mt-10 text-xl text-gray-700">
                    Whether you're a beginner <strong>eager to start your journey</strong> or an <strong>experienced kendoka</strong> refining your skills, we provide structured training, traditional techniques, and a strong, supportive community.
                </p>
            </div>
 
        {/* Image Section */}
                <div className="flex justify-center">
                        <img src="/about-rmit-kendo.jpg" alt="Kendo Club" className="shadow-lg w-full max-w-lg" />
                </div>
            </div>
        </div>
 

                {/* What We Offer Section */}
                <div className="mt-16 text-center mb-8">
                <h2 className="text-2xl font-bold bg-[#E25822] text-white py-3 rounded-lg inline-block px-6">What We Offer</h2>
                </div>

            {/* Swiper Section */}
            <Swiper
                effect="coverflow"
                grabCursor={true}
                centeredSlides={true}
                loop={true}
                slidesPerView={1.8}
                spaceBetween={-60}
                coverflowEffect={{
                    rotate: 0,
                    stretch: -20,
                    depth: 100,
                    modifier: 2.1,
                }}
                pagination={{ clickable: true }}
                modules={[EffectCoverflow, Pagination]}
                className="swiper_container mt-10"
            >
                {cardData.map((card, index) => (
                    <SwiperSlide
                        key={index}
                        className="relative transition-all duration-300"
                    >
                        <div className="transition-transform duration-300 hover:scale-105 group-[.swiper-slide-active]:scale-110 group-[.swiper-slide-active]:z-20">
                            <Card {...card} />
                        </div>
                    </SwiperSlide>
                ))}
                <div className="slider-controler">
                    <div className="swiper-pagination"></div>
                </div> 
            </Swiper>
             {/* Empty Space for Facebookposts */}
            {/* <div className="h-96">
                <img
                src={`/images/facebook-imag-01.jpg`}
                alt={`facebook picture`}
                loading="lazy"
                className="w-44 h-44 rounded-lg object-cover"
                />
                <LinkPost />
            </div> */}

            {/* Gallery Section */}
                {/* kendo practive & tutorial class */}
            <div className="text-center mt-20">
                <h2 className="mb-8 text-2xl font-bold bg-[#E25822] text-white py-3 rounded-lg inline-block px-6">Gallery</h2>
                <h2 className="text-2xl font-bold mb-8 ml-30 text-left">Kendo Practice & Tutorial Class</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
                    <img src="/kendo-practice-01.jpg" loading="lazy" alt="Gallery Image" className="w-full shadow-md" />
                    <img src="/kendo-practice-02.jpg" loading="lazy" alt="Gallery Image" className="w-full  shadow-md" />
                    <img src="/kendo-practice-03.jpg" loading="lazy" alt="Gallery Image" className="w-full  shadow-md" />
                    <img src="/kendo-practice-04.jpg" loading="lazy" alt="Gallery Image" className="w-full  shadow-md" />
                    <img src="/kendo-practice-05.jpg" loading="lazy" alt="Gallery Image" className="w-full  shadow-md" />
                    <img src="/kendo-practice-06.jpg" loading="lazy" alt="Gallery Image" className="w-full  shadow-md" />
                </div>

               <div className="h-20"></div>

            </div>
                {/*workshop & events */}
                <h2 className="text-2xl font-bold mb-8 ml-30 text-left">Workshop & Cultural events</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
                    <img src="/event-01.jpg" loading="lazy" alt="Gallery Image" className="w-full shadow-md" />
                    <img src="/event-02.jpg" loading="lazy" alt="Gallery Image" className="w-full  shadow-md" />
                    <img src="/event-03.jpg" loading="lazy" alt="Gallery Image" className="w-full  shadow-md" />
                    <img src="/event-04.jpg" loading="lazy" alt="Gallery Image" className="w-full  shadow-md" />
                    <img src="/event-05.jpg" loading="lazy" alt="Gallery Image" className="w-full  shadow-md" />
                    <img src="/event-06.jpg" loading="lazy" alt="Gallery Image" className="w-full  shadow-md" />
                </div>

                <div className="h-20"></div>

                {/*ASEAN kendo training */}
                <h2 className="text-2xl font-bold mb-8 ml-30 text-left">ASEAN Kendo Training</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
                    <img src="/asean-training-01.jpg" loading="lazy" alt="Gallery Image" className="w-full shadow-md" />
                    <img src="/asean-training-02.jpg" loading="lazy" alt="Gallery Image" className="w-full  shadow-md" />
                    <img src="/asean-training-03.jpg" loading="lazy" alt="Gallery Image" className="w-full  shadow-md" />
                    <img src="/asean-training-04.jpg" loading="lazy" alt="Gallery Image" className="w-full  shadow-md" />
                    <img src="/asean-training-05.jpg" loading="lazy" alt="Gallery Image" className="w-full  shadow-md" />
                    <img src="/asean-training-06.jpg" loading="lazy" alt="Gallery Image" className="w-full  shadow-md" />
                </div>
        </div>
        </section>
    );
};

export default About;

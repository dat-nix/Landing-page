import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import Card from "../components/Card";
import { content } from "../configs/content";
import FacebookPosts from "../components/FacebookPosts";

const About = ({ language }) => {
    const langData = content[language]?.about || content["en"].about; 
    const offerings = content[language]?.offerings || content["en"].offerings;
    const gallery = content[language]?.gallery || content["en"].gallery;
    const cardData = content[language]?.cardData || content["en"].cardData;

    return (
       <section id="about">
         <div className="container mx-auto py-10 bg-white text-black">
            {/* About Us Section */}
            <div className="flex flex-col items-center">
                {/* Header */}
                <div className="bg-[#6f6f6f] text-white py-4 px-10 rounded-md shadow-md w-full max-w-5xl mx-auto text-center">
                    <h1 className="text-4xl font-bold">{langData.title}</h1>
                </div>
                
                {/* Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mt-8">
                    {/* Text Section */}
                    <div className="flex flex-col justify-center px-4 max-w-full text-justify">
                        <p className="text-xl text-gray-700">
                           {langData.description[0]} 
                            <strong> {langData.description[1]} </strong>
                        </p>
                        <p className="mt-10 text-xl text-gray-700">
                            {langData.description[2]} <strong> {langData.description[3]} </strong> {langData.description[4]} <strong> {langData.description[5]} </strong> {langData.description[6]}
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
                <h2 className="text-2xl font-bold bg-[#6f6f6f] text-white py-3 rounded-lg inline-block px-6">
                    {offerings.title}
                </h2>
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

             {/* Facebook Posts Section */}
            <FacebookPosts language={language} />


            {/* Gallery Section */}
            <div className="text-center mt-20">
                <h2 className="mb-8 text-2xl font-bold bg-[#6f6f6f] text-white py-3 rounded-lg inline-block px-6">
                    {gallery.title}
                </h2>

                {gallery.sections.map((section, index) => (
                    <div key={index} className="mt-10">
                        <h2 className="text-2xl font-bold mb-8 text-center">{section.title}</h2>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
                            {section.images.map((image, imgIndex) => (
                                <img
                                    key={imgIndex}
                                    src={`/${image}`}
                                    loading="lazy"
                                    alt="Gallery Image"
                                    className="w-full h-[220px] shadow-md object-cover"
                                />
                            ))}
                        </div>
                        <div className="h-18"></div>
                    </div>
                ))}
            </div>
        </div>
    </section>
    );
};

export default About;

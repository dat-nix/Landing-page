import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import Card from "./Card";
import "../styles/SwiperSlider.css";

const cardData = [
    {
        image: "/about-rmit-kendo-training-01.jpg",
        title: "Kendo Training",
        description:
            "Weekly practice sessions covering footwork, strikes, and sparring.",
    },
    {
        image: "/about-rmit-kendo-training-02.jpg",
        title: "Competitions & Gradings",
        description:
            "Opportunities to compete and advance through official Kendo ranks.",
    },
    {
        image: "/about-rmit-kendo-training-03.jpg",
        title: "Workshops & Events",
        description:
            "Special workshops on techniques, philosophy, and cultural experiences.",
    },
    {
        image: "/about-rmit-kendo-training-04.jpg",
        title: "Kiai & Spirit Training",
        description: "Developing strong Kiai (battle shout) to enhance focus, energy, and presence in combat.",
    },
    {
        image: "/about-rmit-kendo-training-05.jpg",
        title: "Footwork & Movement",
        description: "Drills focusing on agility, balance, and precise movements essential for effective Kendo techniques.",
    },

];

const SwiperSlider = () => {
    return (
        <div className="container mx-auto py-16 bg-[#0D1B2A] text-white">
            {/* About Us Section */}
            <div className="about-us text-center py-14 px-10 bg-gradient-to-b from-[#102A43] to-[#0D1B2A] rounded-2xl shadow-lg">
                {/* Title */}
                <h2 className="text-5xl font-extrabold text-[#FFD700] tracking-wide drop-shadow-lg">
                    Shinsei Kendo Club, RMIT SGS
                </h2>

                {/* Welcome Message */}
                <p className="mt-6 text-lg leading-relaxed max-w-3xl mx-auto text-[#E0E0E0]">
                    Welcome to{" "}
                    <span className="text-[#FFD700] font-semibold">
                        Shinsei Kendo Club
                    </span>
                    , the official Kendo club at{" "}
                    <span className="text-[#FFD700] font-semibold">
                        RMIT Saigon South (SGS)
                    </span>
                    . ⚔️ Our club is a dedicated space for students to train,
                    grow, and embrace the way of the sword with discipline and
                    respect.
                </p>

                <p className="mt-4 text-lg leading-relaxed max-w-3xl mx-auto text-[#E0E0E0]">
                    Whether you're a **beginner** eager to start your journey or
                    an **experienced kendoka** refining your skills, we provide
                    structured training, traditional techniques, and a **strong,
                    supportive community**.
                </p>

                {/* What We Offer Section */}
                <div className="flex flex-col md:flex-row md:justify-center gap-10 mt-12">
                    <div className="w-full md:w-1/3 text-center">
                        <span className="text-[#F4A261] text-4xl">⚔️</span>
                        <h3 className="text-xl font-bold mt-3 text-[#FFD700]">
                            Kendo Training
                        </h3>
                        <p className="mt-2 text-[#E0E0E0]">
                            Master Kendo fundamentals, techniques, and sparring
                            with expert guidance.
                        </p>
                    </div>

                    <div className="w-full md:w-1/3 text-center">
                        <span className="text-[#F4A261] text-4xl">🎌</span>
                        <h3 className="text-xl font-bold mt-3 text-[#FFD700]">
                            Workshops & Events
                        </h3>
                        <p className="mt-2 text-[#E0E0E0]">
                            Immerse yourself in the spirit of Bushido and
                            Japanese martial arts.
                        </p>
                    </div>

                    <div className="w-full md:w-1/3 text-center">
                        <span className="text-[#F4A261] text-4xl">🤝</span>
                        <h3 className="text-xl font-bold mt-3 text-[#FFD700]">
                            A Strong Brotherhood
                        </h3>
                        <p className="mt-2 text-[#E0E0E0]">
                            Train with dedicated members and experienced
                            practitioners in a supportive community.
                        </p>
                    </div>
                </div>

                {/* Call to Action */}
                <div className="mt-12">
                    <p className="text-lg font-semibold text-[#102A43] bg-[#F77F00] px-8 py-3 rounded-full inline-block shadow-md hover:bg-[#D62828] transition-all duration-300 hover:scale-105 cursor-pointer">
                        🔥 <strong>Ready to start your Kendo journey?</strong>
                        Join us and embrace the way of the sword!
                    </p>
                </div>
            </div>

            {/* Swiper Section */}
            <Swiper
                effect="coverflow"
                grabCursor={true}
                centeredSlides={true}
                loop={true}
                slidesPerView={1.3}
                spaceBetween={-60}
                coverflowEffect={{
                    rotate: 0,
                    stretch: -20,
                    depth: 100,
                    modifier: 2.1,
                }}
                pagination={{ clickable: true }}
                modules={[EffectCoverflow, Pagination]}
                className="swiper_container mt-16"
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
        </div>
    );
};

export default SwiperSlider;

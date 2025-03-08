import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import Card from "./Card";
import "../styles/SwiperSlider.css";

const cardData = [
    {
        image: "/img1.jpg",
        title: "Kendo Training",
        description:
            "Weekly practice sessions covering footwork, strikes, and sparring.",
    },
    {
        image: "/img2.jpg",
        title: "Competitions & Gradings",
        description:
            "Opportunities to compete and advance through official Kendo ranks.",
    },
    {
        image: "/img3.jpg",
        title: "Workshops & Events",
        description:
            "Special workshops on techniques, philosophy, and cultural experiences.",
    },
];

const SwiperSlider = () => {
    return (
        <div className="container mx-auto py-12 bg-gray-900 text-white">
            <div className="about-us text-center py-12 px-6 bg-gradient-to-b from-gray-800 to-black rounded-lg shadow-lg">
                <h2 className="text-4xl font-extrabold text-red-500 border-b-4 border-red-500 inline-block pb-2">
                    Shinsei Kendo Club, RMIT SGS
                </h2>
                <p className="mt-6 text-lg leading-relaxed">
                    Welcome to{" "}
                    <strong className="text-yellow-400">
                        Shinsei Kendo Club
                    </strong>
                    , the official Kendo club at{" "}
                    <strong className="text-yellow-400">
                        RMIT Saigon South (SGS)
                    </strong>
                    ! 🏯⚔️ Our club is a dedicated space for students to
                    **train, grow, and embody the way of the sword** with
                    discipline and respect.
                </p>
                <p className="mt-4 text-lg leading-relaxed">
                    Whether you're a **beginner** eager to start your journey or
                    an **experienced kendoka** refining your skills, we provide
                    structured training, traditional techniques, and a strong,
                    supportive community.
                </p>
                <h3 className="mt-8 text-2xl font-semibold text-yellow-400 underline">
                    What We Offer
                </h3>
                <ul className="mt-6 space-y-3 text-lg">
                    <li className="flex items-center gap-3">
                        <span className="text-red-500 text-2xl">⚔️</span>{" "}
                        <strong>Kendo Training</strong> – Learn and practice
                        Kendo fundamentals, techniques, and sparring.
                    </li>

                    <li className="flex items-center gap-3">
                        <span className="text-red-500 text-2xl">🎌</span>{" "}
                        <strong>Workshops & Cultural Events</strong> – Immerse
                        yourself in the spirit of Bushido and Japanese martial
                        arts.
                    </li>
                    <li className="flex items-center gap-3">
                        <span className="text-red-500 text-2xl">🤝</span>{" "}
                        <strong>A Strong Brotherhood</strong> – Train with
                        dedicated members and experienced practitioners.
                    </li>
                </ul>
                <p className="mt-8 text-lg font-semibold text-yellow-400 bg-red-700 px-6 py-2 rounded-lg inline-block shadow-md">
                    🔥 <strong>Ready to start your Kendo journey?</strong> Join
                    us and embrace the way of the sword!
                </p>
            </div>

            <Swiper
                effect="coverflow"
                grabCursor={true}
                centeredSlides={true}
                loop={true}
                slidesPerView={1.5}
                spaceBetween={-100}
                coverflowEffect={{
                    rotate: 0,
                    stretch: -50,
                    depth: 150,
                    modifier: 2.5,
                }}
                pagination={{ clickable: true }}
                modules={[EffectCoverflow, Pagination]}
                className="swiper_container mt-12"
            >
                {cardData.map((card, index) => (
                    <SwiperSlide
                        key={index}
                        className="relative transition-all duration-300"
                    >
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
};

export default SwiperSlider;

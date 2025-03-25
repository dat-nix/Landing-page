import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { content } from "../configs/content";
import FacebookPosts from "../components/FacebookPosts";
import TrainingSchedule from "../components/TrainingSchedule";
import InstructorProfile from "../components/InstructorProfile"; // New import


const About = ({ language }) => {
    const langData = content[language]?.about || content["en"].about;
    const gallery = content[language]?.gallery || content["en"].gallery;

    return (
        <section id="about">
            <div className="bg-white">
                {/* About Us Section */}
                <div className="flex md:flex-col lg:flex-row items-center max-w-full h-screen">
                    {/* Left Side Text */}
                    <div className="py-10 flex md:flex-col lg:flex-row items-start w-3/4 pl-12">
                        <img src="/logo-without-name.png" alt="Logo" className="w-[20vh] h-[20vh]"/>
                        <h1 className="text-orange-600 font-extrabold md:text-6xl lg:text-9xl leading-tight uppercase">
                            RMIT SHINSEI KENDO CLUB
                        </h1>
                    </div>

                    {/* Image Section */}
                    <div className="relative w-2/4 h-full mr-[-50px]">
                        <img
                            src="/training-session.png"
                            alt="Kendo Club"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </div>
             {/* Training Schedule Section */}
            <TrainingSchedule language={language}/>

             {/* Instructor Profile Component */}
             <InstructorProfile />
             <div className="w-[1440px] h-[400px] mx-auto bg-white relative">
             {/* OUR SEONSAENGNIM (Top-Left) */}
                <h2 className="absolute top-1 left-4 text-[100px] font-bold text-orange-500">
                OUR SEONSAENGNIM
                </h2>

             {/* LATEST (Bottom-Right) */}
                <h2 className="absolute bottom-4 right-8 text-[190px] font-bold text-[#232323]">
                LATEST
            </h2>
            </div>

            {/* Facebook Posts Section */}
            <FacebookPosts language={language} />

            {/* Gallery Section */}
            <div className="w-[1286px] h-[2600] flex-shrink-0 bg-[#FFCA5A]">
                <h2 className="text-[#EB4F0B] text-center font-extrabold text-[150px] leading-[96%]" style={{ fontFamily: "Uni Sans" }}>
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
        </section>
    );
};

export default About;

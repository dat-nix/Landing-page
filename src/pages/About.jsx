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
                <div className="flex flex-col lg:flex-row items-center max-w-full h-screen">
                    {/* Left Side: Logo & Club Name */}
                    <div className="py-10 flex flex-col lg:flex-row items-start w-3/4 pl-12">
                        <img src="/logo-without-name.png" alt="Logo" className="w-[15vh] h-[15vh] mb-4" />
                        <h1 className="text-orange-600 font-extrabold leading-tight uppercase">
                            <span className="block text-6xl lg:text-9xl">RMIT</span>
                            <span className="block text-6xl lg:text-9xl">SHINSEI</span>
                            <span className="block text-6xl lg:text-9xl">KENDO</span>
                            <span className="block text-6xl lg:text-9xl">CLUB</span>
                        </h1>
                    </div>

                    {/* Right Side: Club Description */}
                    <div className="w-full lg:w-1/2 px-6">
                        <p className="text-xl text-black">
                            We are an official Kendo club in <strong>RMIT Saigon South (SGS)</strong>. Our club is a dedicated space for students to{" "}
                            <strong>train, grow, and embody the way of the sword with discipline and respect.</strong>
                        </p>
                        <p className="mt-4 text-xl text-black">
                            Whether you're a beginner <strong>eager to start your journey</strong> or an <strong>experienced kendoka</strong> refining your skills, we provide structured training, 
                            traditional techniques, and a strong, supportive community.
                        </p>
                    </div>
                </div>
            </div>

            {/* Training Schedule Section */}
            <TrainingSchedule language={language} />

            {/* Instructor Profile Section */}
            <InstructorProfile />

            {/* Instructor Highlight & Latest Updates */}
            <div className="w-full min-h-[250px] sm:min-h-[50px] md:min-h-[400px] mx-auto bg-white relative sm:pt-1 mt-[-20px] sm:mt-[-10px] pt-0">
                {/* OUR SEONSAENGNIM (Top-Left) */}
                <h2 className="absolute top-0 left-5 sm:left-10 md:left-17 text-[40px] sm:text-[60px] md:text-[100px] font-bold text-orange-500">
                    OUR SEONSAENGNIM
                </h2>

                {/* LATEST (Bottom-Right) */}
                <h2 className="absolute bottom-2 sm:bottom-4 right-5 sm:right-8 text-[60px] sm:text-[100px] md:text-[190px] font-bold text-[#232323]">
                    LATEST
                </h2>
            </div>

            {/* Facebook Posts Section */}
            <FacebookPosts language={language} />

            {/* Gallery Section */}
            <div className="w-full min-h-screen flex-shrink-0 bg-[#FFCA5A] py-10">
                <h2 
                    className="text-[#EB4F0B] text-center font-extrabold text-[150px] leading-[96%]" 
                    style={{ fontFamily: "Uni Sans" }}>
                    {gallery.title}
                </h2>

                {gallery.sections.map((section, index) => (
                    <div key={index} className="mt-10">
                        <h2 className="text-2xl font-bold mb-8 text-center">{section.title}</h2>
                        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-7xl mx-auto">
                            {section.images.map((image, imgIndex) => (
                                <img
                                    key={imgIndex}
                                    src={`/${image}`}
                                    loading="lazy"
                                    alt="Gallery Image"
                                    className="w-full h-[150px] sm:h-[200px] md:h-[220px] shadow-md object-cover transition-transform duration-300 ease-in-out transform hover:scale-105"
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

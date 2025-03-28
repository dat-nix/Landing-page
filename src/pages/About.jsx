import { content } from "../configs/content";
import FacebookPosts from "../components/FacebookPosts";
import TrainingSchedule from "../components/TrainingSchedule";
import InstructorProfile from "../components/InstructorProfile"; // New import

const About = ({ language }) => {
    const langData = content[language]?.about || content["en"].about;
    const gallery = content[language]?.gallery || content["en"].gallery;
    const instructor= content[language]?.instructor || content["en"].instructor;

    return (
        <section id="about">
            <div className="bg-white">
               {/* About Us Section */}
               <div className="flex flex-col lg:flex-row items-center max-w-full h-auto lg:h-screen">
                    {/* Left Side: Logo & Club Name */}
                    <div className="py-6 lg:py-10 flex flex-col lg:flex-row items-start w-full lg:w-3/4 px-6 lg:pl-12">
                        <img src="/logo-without-name.png" alt="Logo" className="w-[10vh] h-[10vh] lg:w-[15vh] lg:h-[15vh] mb-4" />
                        <h1 className="text-orange-600 font-extrabold leading-tight uppercase">
                            <span className="block text-4xl lg:text-9xl font-[Anton] tracking-[0.15em]">RMIT</span>
                            <span className="block text-4xl lg:text-9xl font-[Anton] tracking-[0.15em]">SHINSEI</span>
                            <span className="block text-4xl lg:text-9xl font-[Anton] tracking-[0.15em]">KENDO</span>
                            <span className="block text-4xl lg:text-9xl font-[Anton] tracking-[0.15em]">CLUB</span>
                        </h1>
                    </div>
                    {/* Right Side: Club Description */}
                    <div className="w-full lg:w-1/2 px-14 py-6 lg:py-0">
                        <p className="text-lg lg:text-3xl text-black">
                            {langData.description[0]} <strong>{langData.description[1]}</strong> {langData.description[2]} <strong>{langData.description[3]}</strong>
                        </p>
                        <p className="mt-4 text-lg lg:text-3xl text-black">
                            {langData.description[4]} <strong>{langData.description[5]}</strong> {langData.description[6]} <strong>{langData.description[7]}</strong> {langData.description[8]}
                        </p>
                    </div>
                </div>
            </div>

            {/* Training Schedule Section */}
            <TrainingSchedule language={language} />

            {/* Instructor Profile Section */}
            <InstructorProfile language={language}/>

           {/* Instructor Highlight & Latest Updates */}
           <div className="w-full min-h-[150px] sm:min-h-[250px] md:min-h-[400px] mx-auto bg-white relative pt-4 sm:pt-1 mt-[-10px] sm:mt-[-20px]">
                {/* OUR SEONSAENGNIM (Top-Left) */}
                <h2 className="absolute top-0 left-4 sm:left-10 md:left-17 text-2xl sm:text-[40px] md:text-[100px] font-bold text-orange-500 ">
                    {instructor.description}
                </h2>

                {/* LATEST (Bottom-Right) */}
                <h2 className="absolute bottom-1 sm:bottom-4 right-4 sm:right-8 text-7xl sm:text-[60px] md:text-[190px] font-bold text-[#232323] font-[Anton] tracking-[0.15em]">
                    {instructor.text}
                </h2>
            </div>

            {/* Facebook Posts Section */}
            <FacebookPosts language={language} />

            {/* Gallery Section */}
            <div className="w-full min-h-screen flex-shrink-0  py-10">
                <h2 
                     className="text-[#EB4F0B] text-center font-extrabold text-[48px] sm:text-[80px] md:text-[120px] lg:text-[150px] leading-[100%] tracking-[0.15em]" 
                    style={{ fontFamily: "Anton" }}>
                    {gallery.title}
                </h2>

                {gallery.sections.map((section, index) => (
                    <div key={index} className="mt-10">
                        <h2 className="text-2xl font-bold mb-8 text-center text-orange-500 sm:text-[2rem]">{section.title}</h2>
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

 
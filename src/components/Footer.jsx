import { Link as ScrollLink } from "react-scroll";

const Footer = () => {
    return (
        <footer className="bg-black text-white py-8 px-8 md:px-16">
            {/* Navigation Links */}
            <div className="flex justify-between">
                <div className="flex justify-center md:justify-start text-center md:text-left gap-20">
                    <div className="flex flex-col space-y-3">
                        <ScrollLink
                            to="contact"
                            smooth
                            duration={500}
                            className="cursor-pointer hover:text-yellow-500"
                        >
                            FAQs
                        </ScrollLink>
                        <ScrollLink
                            to="contact"
                            smooth
                            duration={500}
                            className="cursor-pointer hover:text-yellow-500"
                        >
                            Contact Us
                        </ScrollLink>
                    </div>
                    <div className="flex flex-col space-y-3">
                        <ScrollLink
                            to="about"
                            smooth
                            duration={500}
                            className="cursor-pointer hover:text-yellow-500"
                        >
                            About Us
                        </ScrollLink>
                        <a href="/address" className="hover:text-yellow-500">
                            Address
                        </a>
                    </div>
                    <div
                        className="relative cursor-pointer font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-500 
                    before:absolute before:left-0 before:bottom-0 before:w-full before:h-[2px] before:bg-yellow-400 before:scale-x-0 
                    before:origin-left before:transition-transform before:duration-300"
                    >
                        RIKT
                    </div>
                </div>

                <div>
                    <div className="flex gap-3 mr-6 md:pl-9 right-0 top-[40%] bottom-[-40%]">
                        <a
                            href="https://www.facebook.com/rmitshinsei"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
                                src="/facebook.png"
                                alt="facebook"
                                width={40}
                                height={30}
                                className="rounded-full"
                            />
                        </a>
                        <a
                            href="https://www.instagram.com/rmitshinsei"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
                                src="/instagram.png"
                                alt="instagram"
                                width={40}
                                height={40}
                            />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

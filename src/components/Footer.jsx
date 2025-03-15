import { Link as ScrollLink } from "react-scroll";

const Footer = () => {
    return (
        <footer className="bg-black text-white py-8 px-8 md:px-16">
            {/* Navigation Links */}
            <div className="flex lg:justify-between pb-6 sm:flex-col">
                <div className="flex sm:flex-col lg:justify-center md:justify-start text-center md:text-left gap-20">
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

                <div className="lg:flex lg:justify-between lg:items-center">
                    <div className="flex sm:flex-col gap-3 mr-6 md:pl-9 right-0 top-[40%] bottom-[-40%]">
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
            {/* Ownership Statement */}
            <div className="border-t border-gray-700 pt-6 mb-8">
                <p className="text-center text-gray-400 text-sm">
                    This product is fully belonged as a good for RMIT Shinsei Kendo Club
                </p>
            </div>

            {/* Credit Section */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-sm">
                <div>
                    <h4 className="font-bold text-yellow-400 mb-3">Author</h4>
                    <p>RMIT Shinsei Tech Team</p>
                </div>
                
                <div>
                    <h4 className="font-bold text-yellow-400 mb-3">Project Leader</h4>
                    <p>Pham Hoang Duong</p>
                </div>

                <div>
                    <h4 className="font-bold text-yellow-400 mb-3">Developer</h4>
                    <p>Nguyen An</p>
                    <p>Pham Dat</p>
                </div>

                <div>
                    <h4 className="font-bold text-yellow-400 mb-3">Design</h4>
                    <p>Pham Nguyen Ngoc Tran</p>
                    <p>Nguyen Diem Phuong</p>
                </div>
            </div>

        </footer>
    );
};

export default Footer;
import { Link as ScrollLink } from "react-scroll";

const Footer = ({language}) => {
    return (
        <footer className="bg-black text-white py-8 px-6 md:px-12">
            {/* Navigation Links */}
            <div className="flex flex-col lg:flex-row lg:justify-between pb-6">
                <div className="flex flex-col md:flex-row md:justify-center gap-10 md:gap-20 text-center md:text-left">
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
                        before:origin-left before:transition-transform before:duration-300 text-lg"
                    >
                        RIKT
                    </div>
                </div>

                {/* Social Media Links */}
                <div className="mt-6 lg:mt-0 flex justify-center lg:justify-end">
                    <div className="flex gap-4">
                        <a
                            href="https://www.facebook.com/rmitshinsei"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
                                src="/facebook.png"
                                alt="facebook"
                                width={36}
                                height={36}
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
                                width={36}
                                height={36}
                            />
                        </a>
                    </div>
                </div>
            </div>

            {/* Ownership Statement */}
            <div className="border-t border-gray-700 pt-6 mb-6 text-center">
                <p className="text-gray-400 text-sm">
                    This product fully belongs to RMIT Shinsei Kendo Club.
                </p>
            </div>

            {/* Credit Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-sm text-center md:text-left">
                <div>
                    <h4 className="font-bold text-yellow-400 mb-2">Author</h4>
                    <p>RMIT Shinsei Tech Team</p>
                </div>

                <div>
                    <h4 className="font-bold text-yellow-400 mb-2">
                        Project Leader
                    </h4>
                    <p>Pham Hoang Duong (Alex)</p>
                </div>

                <div>
                    <h4 className="font-bold text-yellow-400 mb-2">
                        Developer
                    </h4>
                    <p>Nguyen An</p>
                    <p>Pham Dat</p>
                </div>

                <div>
                    <h4 className="font-bold text-yellow-400 mb-2">Design</h4>
                    <p>Pham Nguyen Ngoc Tran</p>
                    <p>Nguyen Diem Phuong</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

import { Link as ScrollLink } from "react-scroll";
import { content } from "../configs/content";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Footer = ({ language }) => {
    const footer = content[language]?.footer || content["en"].footer || [];
    const location = useLocation();
    const navigate = useNavigate();

    const handleNavigation = (sectionId) => {
        if (location.pathname === "/rikt" && (sectionId === "about" || sectionId === "faqs")) {
            navigate("/", { replace: true });
            setTimeout(() => {
                document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
            }, 100);
        } else {
            document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <section>
            <footer className="bg-black min-h-[260px] text-white py-8 px-6 md:px-12">
                {/* Navigation Links - Responsive */}
                <div className="flex flex-col items-center lg:flex-row lg:justify-between pb-6">
                    <div className="lg:text-xl font-semithin flex flex-col items-center gap-4 sm:flex-row sm:gap-10 md:gap-20 text-center">
                        
                        <button onClick={() => handleNavigation("about")} className="cursor-pointer hover:text-yellow-500">
                            {footer.find(item => item.about)?.about} 
                        </button>
                        <ScrollLink to="contact" smooth duration={500} className="cursor-pointer hover:text-yellow-500" offset={-90}>
                            {footer.find(item => item.contact)?.contact} 
                        </ScrollLink>
                        <a href="https://maps.app.goo.gl/qEVmLVwqFDgyCqKi9" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-500">
                            {footer.find(item => item.address)?.address}
                        </a>
                        <button onClick={() => handleNavigation("faqs")} className="cursor-pointer hover:text-yellow-500">
                            FAQs
                        </button>
                        <div className="relative cursor-pointer font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-500 
                            before:absolute before:left-0 before:bottom-0 before:w-full before:h-[2px] before:bg-yellow-400 before:scale-x-0 
                            before:origin-left before:transition-transform before:duration-300 text-lg lg:text-xl">
                            <Link to="/rikt"
                                onClick={() => setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 100)}>
                                RIKT
                            </Link>
                        </div>
                    </div>

                    {/* Social Media Links */}
                    <div className="mt-6 lg:mt-0 flex justify-center lg:justify-end">
                        <div className="flex gap-4">
                            <a href="https://www.facebook.com/rmitshinsei" target="_blank" rel="noopener noreferrer">
                                <img src="/messenger.png" alt="facebook" width={36} height={36} className="rounded-full" />
                            </a>
                            <a href="https://www.instagram.com/rmitshinsei" target="_blank" rel="noopener noreferrer">
                                <img src="/phone-number.png" alt="instagram" width={36} height={36} />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Ownership Statement */}
                <div className="-mx-6 md:-mx-12 border-t border-gray-600 pt-6 mb-6 text-center">
                    <p className="text-gray-400 text-sm">
                        RMIT Shinsei Kendo Club @2025
                    </p>
                </div>
            </footer>
        </section>
    );
};

export default Footer;

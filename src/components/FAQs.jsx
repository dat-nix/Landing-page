import React, { useState } from "react";
import { content } from "../configs/content";
import { FaEnvelope, FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const FAQ = ({ language = "en" }) => {
    const [openIndex, setOpenIndex] = useState(null);
    const faqs = content[language]?.faqs || content["en"].faqs || [];
    const contact = content[language]?.contact || content["en"].contact;

    const handleToggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="flex flex-col items-center gap-10 mt-10 px-4 lg:px-20 w-full">
            {/* FAQs Section */}
            <div className="bg-[#6f6f6f] text-white py-10 px-6 sm:px-10 rounded-md shadow-md w-full max-w-2xl">
                <h2 className="text-3xl font-semibold text-center mb-6">
                    {content[language]?.faqTitle || "FAQs"}
                </h2>
                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div key={index} className="border-b border-white">
                            <button
                                onClick={() => handleToggle(index)}
                                className="w-full text-left flex justify-between items-center px-4 py-3 bg-gray-100 hover:bg-gray-200 transition duration-300 text-lg sm:text-base font-semibold text-black"
                            >
                                <span>{faq.question}</span>
                                <span
                                    className={`transform transition-transform text-xl ${
                                        openIndex === index ? "rotate-180" : ""
                                    }`}
                                >
                                    ▼
                                </span>
                            </button>
                            {openIndex === index && (
                                <div className="px-4 py-3 bg-white border-t text-md text-gray-700">
                                    {faq.answer}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {/* Contact Us Section */}
            <div id="contact" className="w-full max-w-xl text-black font-[Reddit Sans] text-center p-5 bg-white">
                <p className="lg:text-3xl text-2xl font-thin mb-4">{contact.text}</p>
                <div className="mt-8 flex justify-center gap-10 lg:gap-22 text-4xl lg:text-5xl">
                    <FaEnvelope className="cursor-pointer hover:text-gray-500" />
                    <a href="https://www.facebook.com/rmitshinsei" target="_blank" rel="noopener noreferrer">
                        <FaFacebookF className="cursor-pointer hover:text-gray-500" />
                    </a>
                    <a href="https://www.instagram.com/rmitshinsei/" target="_blank" rel="noopener noreferrer">
                        <FaInstagram className="cursor-pointer hover:text-gray-500" />
                    </a>
                    <FaLinkedinIn className="cursor-pointer hover:text-gray-500" />
                </div>
            </div>
        </div>
    );
};

export default FAQ;

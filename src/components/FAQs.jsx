import React, { useState } from "react";
import { content } from "../configs/content";
import { FaEnvelope, FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const FAQ = ({ language = "en" }) => {
    const [openIndex, setOpenIndex] = useState(null);

    // Get FAQs data based on the selected language
    const faqs = content[language]?.faqs || content["en"].faqs || [];
    const contact = content[language]?.contact || content["en"].contact;

    const handleToggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="flex flex-col lg:flex-row justify-center items-start gap-10 mt-10 lg:ml-20">
            {/* FAQs Section */}
            <div className="bg-[#6f6f6f] text-white py-10 px-10 rounded-md shadow-md w-full max-w-lg">
                <h2 className="text-3xl font-semibold text-center mb-6">
                    {content[language]?.faqTitle || "FAQs"}
                </h2>
                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div key={index} className="border-b border-white">
                            <button
                                onClick={() => handleToggle(index)}
                                className="w-full text-left flex justify-between items-center px-4 py-3 bg-gray-100 hover:bg-gray-200 transition duration-300 text-lg font-semibold text-black"
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
                                <div className="px-4 py-3 bg-white border-t text-md text-gray-700 overflow-hidden">
                                    {faq.answer}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {/* Contact Us Section */}
            <div className="flex flex-col items-start w-[500px] h-[295px] text-black font-[Reddit Sans] text-[32px] font-semibold leading-normal p-5 bg-white rounded-lg shadow-lg">
                <p className="text-3xl mb-4">
                    {contact.text}
                </p>
                <div className="mt-5 grid grid-cols-2 items-center gap-10 text-5xl ml-40">
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

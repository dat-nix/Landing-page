import React, { useState } from "react";
import { content } from "../configs/content";

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const faqs = content.en.faqs;

    const handleToggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="mt-6 flex justify-center">
            <div className="bg-[#E25822] text-white py-10 px-10 rounded-md shadow-md w-full max-w-lg">
                <h2 className="text-3xl font-semibold text-center mb-6">
                    FAQs
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
            </div>{" "}
        </div>
    );
};
export default FAQ;

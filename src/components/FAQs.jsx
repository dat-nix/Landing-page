import React, { useState } from "react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    { question: "Q: Where does our dojo located at ?", answer: "A: Our dojo is in the Sports Hall, Building 10 in RMIT SGS" },
    { question: "Q: How much is the membership fee ?", answer: "A: Our membership fee is 550k per semester (3 months, including 1 month of semester break)" },
    { question: "Q: Do I have to bring my own equipment (shinai, bogu) to the dojo ?", answer: "A: We have spare shinais for everyone who doesn't have it. For anyone who can practice in bogu, you should bring your own bogu since we do not have enough spare bogu and storage to store bogu." },
    { question: "Q: Do we have any requirements to join the club ?", answer: "A: To join our club, you must be a student or alumni of RMIT to access to our dojo. Besides, we welcome beginners who've never practiced Kendo and would like to try out, we also welcome anyone who used to train Kendo before to join us." },
  ];

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="mt-6 flex justify-center">
      <div className="bg-[#E25822] text-white py-10 px-10 rounded-md shadow-md w-full max-w-lg">
        <h2 className="text-3xl font-semibold text-center mb-6">FAQs</h2>
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
      </div> </div>); }; export default FAQ;
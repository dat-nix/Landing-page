import React, { useState } from "react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    { question: "What is React?", answer: "React is a JavaScript library for building user interfaces." },
    { question: "What is Tailwind CSS?", answer: "Tailwind CSS is a utility-first CSS framework for creating custom designs." },
    { question: "How do you install Tailwind CSS?", answer: "You can install Tailwind CSS using npm and configure it in your project." },
    { question: "How do you toggle content visibility?", answer: "You can use state management in React to toggle content visibility." },
    { question: "What is a state in React?", answer: "State is an object that holds values that determine the behavior of a component." }
  ];

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="flex w-full">
      {/* FAQs Section*/}
      <div className="w-[55%] pl-8">
        <h2 className="text-2xl font-bold text-center mb-8">FAQs</h2>
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="border-l-4 border-gray-700 pl-4">
              {/*questions*/}
              <button
                onClick={() => handleToggle(index)}
                className="w-full text-left flex justify-between items-center px-4 py-4 bg-gray-100 hover:bg-gray-200 transition duration-300 text-xl font-semibold"
              >
                <span>{faq.question}</span>
                <span className={`transform transition-transform text-2xl ${openIndex === index ? "rotate-180" : ""}`}>
                  ▼
                </span>
              </button>

              {/*answers*/}
              {openIndex === index && (
                <div className="px-4 py-4 bg-white border-t text-lg text-gray-700">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;

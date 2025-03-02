import React, { useState } from "react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    { question: "What is ?", answer: "jdfsfdsfsflkjsflkjs;lfljs" },
    { question: "What is ?", answer: "dskkjdskjdskjfdskldslkskfklsl;sa" },
    { question: "How do you...?", answer: "jsslklkjfkjsakl" },
    { question: "Where do you...?", answer: "jkskfkskjfkjsflkjskfskjfkljsa" },
  ];

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="flex w-full flex-col">
      {/* FAQs Section*/}
      <div className="md:w-[80%] pl-8 min-h-screen pb-30">
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
                <div className="px-4 py-4 bg-white border-t text-lg text-gray-700 overflow-hidden">
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

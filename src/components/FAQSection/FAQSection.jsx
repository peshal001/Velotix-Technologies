import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const faqData = [
  {
    question: "How is AI and ML used in healthcare?",
    answer: "AI and ML help in diagnostics, personalized treatment, predictive analytics, and administrative workflows."
  },
  {
    question: "Will AI and ML bring value to my health-tech business?",
    answer: "Yes, they can improve efficiency, reduce costs, and offer better patient outcomes."
  },
  {
    question: "What are some concerns about AI in healthcare?",
    answer: "Concerns include data privacy, algorithmic bias, and regulatory compliance."
  },
  {
    question: "What are the applications of AI in healthcare?",
    answer: "Applications include radiology, pathology, genomics, drug discovery, and remote patient monitoring."
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-extrabold text-black mb-8 text-center">
          Frequently Asked Questions
        </h2>

        <div className="bg-indigo-100 text-black rounded-lg p-6 mb-6 shadow-md">
          <h3 className="text-2xl font-semibold mb-2">What is Healthcare Technology?</h3>
          <p className="text-xl">
            Healthcare technology refers to the application of scientific knowledge, tools, and systems to improve the delivery of healthcare services. It encompasses a wide range of technologies, including medical devices, electronic health records, telemedicine, artificial intelligence, and mobile health applications. These technologies aim to enhance patient care, streamline processes, improve efficiency, and advance medical research and innovation.
          </p>
        </div>

        <div className="rounded-md shadow-sm divide-y divide-gray-200 m-10">
          {faqData.map((item, index) => (
            <div
              key={index}
              className={`bg-white rounded-md ${index === 0 ? 'rounded-t-md' : ''} ${index === faqData.length - 1 ? 'rounded-b-md' : ''}`}
            >
              <button
                onClick={() => toggle(index)}
                className="w-full flex justify-between items-center px-10 py-10 text-left font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-300 "
              >
                <span className="text-xl font-bold">{item.question}</span>
                <span className="ml-6 flex-shrink-0">
                  {openIndex === index ? (
                    <FaMinus className="h-5 w-5 " />
                  ) : (
                    <FaPlus className="h-5 w-5 " />
                  )}
                </span>
              </button>
              {openIndex === index && (
                <div className="px-6 py-6 text-2xl text-gray-900 bg-gray-50">
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
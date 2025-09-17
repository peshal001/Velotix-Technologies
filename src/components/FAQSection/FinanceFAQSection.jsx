import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const faqData = [
  {
    question: "How is AI used in the finance industry?",
    answer: "AI is used for fraud detection, algorithmic trading, credit scoring, and personalized financial advice."
  },
  {
    question: "Can AI improve my fintech business?",
    answer: "Yes, AI can enhance decision-making, automate operations, improve customer experience, and reduce risks."
  },
  {
    question: "What are the risks of using AI in finance?",
    answer: "Risks include data breaches, biased algorithms, lack of transparency, and regulatory compliance challenges."
  },
  {
    question: "What are some real-world applications of AI in finance?",
    answer: "Applications include robo-advisors, chatbots, loan underwriting, risk management, and customer service automation."
  }
];

export default function FinanceFAQSection() {
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
          <h3 className="text-2xl font-semibold mb-2">What is Financial Technology (Fintech)?</h3>
          <p className="text-xl">
            Financial technology, or fintech, refers to the integration of technology into financial services to improve their delivery and usage. It includes innovations such as mobile banking, peer-to-peer lending, blockchain, robo-advisors, and AI-based tools that help individuals and businesses manage their finances more efficiently.
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
                className="w-full flex justify-between items-center px-10 py-10 text-left font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-300"
              >
                <span className="text-xl font-bold">{item.question}</span>
                <span className="ml-6 flex-shrink-0">
                  {openIndex === index ? (
                    <FaMinus className="h-5 w-5" />
                  ) : (
                    <FaPlus className="h-5 w-5" />
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

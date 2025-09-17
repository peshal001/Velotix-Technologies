import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const faqData = [
  {
    question: "How is AI used in e-commerce?",
    answer: "AI powers personalized recommendations, chatbots, dynamic pricing, and customer behavior analysis."
  },
  {
    question: "Can AI help grow my online store?",
    answer: "Yes, it can improve customer engagement, automate marketing, and boost conversion rates with smart insights."
  },
  {
    question: "What are some challenges of using AI in e-commerce?",
    answer: "Challenges include data quality, integration with existing systems, cost, and privacy concerns."
  },
  {
    question: "What are some real-world uses of AI in e-commerce?",
    answer: "Examples include product search optimization, voice shopping, inventory forecasting, and fraud detection."
  }
];

export default function EcommerceFAQSection() {
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
          <h3 className="text-2xl font-semibold mb-2">What is E-Commerce Technology?</h3>
          <p className="text-xl">
            E-commerce technology refers to the tools, platforms, and systems used to conduct business transactions online. It includes shopping carts, payment gateways, recommendation engines, chatbots, and AI-driven analytics that enhance the shopping experience, streamline operations, and optimize sales.
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

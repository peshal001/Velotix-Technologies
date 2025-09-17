import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const faqData = [
  {
    question: "What is predictive analytics in e-commerce?",
    answer:
      "Predictive analytics uses historical data, machine learning, and statistical models to forecast future customer behavior, sales trends, and inventory needs.",
  },
  {
    question: "How does predictive analytics help increase sales?",
    answer:
      "By analyzing customer patterns, businesses can recommend products, optimize pricing, and time promotions for better conversions and higher sales.",
  },
  {
    question: "Can predictive analytics reduce inventory costs?",
    answer:
      "Yes, it can accurately forecast product demand, helping you stock smarter, reduce overstocking, and avoid costly stockouts.",
  },
  {
    question: "Is predictive analytics hard to implement?",
    answer:
      "Not anymore. With tools like Google Cloud AI, AWS Forecast, and Shopify analytics, predictive insights can be integrated easily—even for non-tech teams.",
  },
  {
    question: "Is my customer data safe in predictive analytics systems?",
    answer:
      "Yes—reputable tools comply with data protection laws like GDPR. Always choose services that encrypt data and prioritize user privacy.",
  }
];

export default function PredictiveAnalyticsFAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-white py-12 mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-extrabold text-black mb-8 text-center">
          Predictive Analytics in E-Commerce – FAQ
        </h2>

        <div className="bg-indigo-100 text-black rounded-lg p-6 mb-6 shadow-md">
          <h3 className="text-2xl font-semibold mb-2">Why Predictive Analytics?</h3>
          <p className="text-xl">
            Predictive analytics empowers e-commerce businesses to forecast future trends, make data-driven decisions, and stay ahead of market demands. It's a powerful way to personalize shopping, optimize inventory, and increase profitability.
          </p>
        </div>

        <div className="rounded-md shadow-sm divide-y divide-gray-200 m-10">
          {faqData.map((item, index) => (
            <div
              key={index}
              className={`bg-white rounded-md ${
                index === 0 ? "rounded-t-md" : ""
              } ${index === faqData.length - 1 ? "rounded-b-md" : ""}`}
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

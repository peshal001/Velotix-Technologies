import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const faqData = [
  {
    question: "How is AI used in education?",
    answer: "AI is used for personalized learning, grading automation, virtual tutoring, and tracking student progress.",
  },
  {
    question: "Can AI improve student performance?",
    answer: "Yes, by tailoring content to individual needs and providing real-time feedback, AI helps students learn more effectively.",
  },
  {
    question: "What are the benefits of AI for teachers?",
    answer: "AI reduces administrative tasks, grades assignments faster, and provides insights into student learning patterns.",
  },
  {
    question: "Is AI safe for student data?",
    answer: "Most AI systems follow strict data privacy standards, but institutions should always vet tools for compliance and security.",
  },
];

export default function EducationFAQSection() {
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
          <h3 className="text-2xl font-semibold mb-2">What is AI in Education?</h3>
          <p className="text-xl">
            AI in education refers to the use of artificial intelligence technologies like machine learning, natural language processing, and data analytics to enhance teaching and learning experiences.
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

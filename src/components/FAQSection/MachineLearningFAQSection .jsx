// MachineLearningFAQSection.js
import React, { useState } from 'react';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';

const MachineLearningFAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: 'What is Machine Learning (ML)?',
      answer:
        'Machine Learning (ML) is a subfield of artificial intelligence that enables computers to learn from data without being explicitly programmed.',
    },
    {
      question: 'What are the main types of Machine Learning?',
      answer:
        'The main types are supervised learning, unsupervised learning, and reinforcement learning.',
    },
    {
      question: 'What are some common ML algorithms?',
      answer:
        'Common algorithms include linear regression, logistic regression, decision trees, support vector machines, k-means clustering, and neural networks.',
    },
    {
      question: 'How is Machine Learning used in practice?',
      answer:
        'ML is used in various applications such as recommendation systems, fraud detection, image recognition, natural language processing, and predictive analytics.',
    },
    {
      question: 'What is the role of data in Machine Learning?',
      answer:
        'Data is crucial for training ML models. The quality and quantity of data significantly impact the performance and accuracy of the models.',
    },
  ];

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-6 md:px-8 lg:px-12">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-12 text-center">
          Frequently Asked Questions - Machine Learning
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-xl cursor-pointer transition-shadow duration-300 hover:shadow-lg"
              onClick={() => toggleAnswer(index)}
            >
              <div className="p-6 flex items-center justify-between">
                <h3 className="text-xl font-semibold text-[#3AAFA9]">{faq.question}</h3>
                <span className="text-2xl text-[#3AAFA9] font-bold">
                  {activeIndex === index ? <AiOutlineMinus /> : <AiOutlinePlus />}
                </span>
              </div>
              {activeIndex === index && (
                <div className="p-6 border-t border-gray-200">
                  <p className="text-lg text-gray-800">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MachineLearningFAQSection;
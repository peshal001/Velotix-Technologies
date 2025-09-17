import React, { useState } from 'react';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';

const BigDataAnalyticsFAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: 'What is Big Data Analytics?',
      answer:
        'Big Data Analytics is the process of examining large and varied datasets to uncover hidden patterns, unknown correlations, market trends, customer preferences, and other useful information that can help organizations make more-informed business decisions.',
    },
    {
      question: 'What are the key characteristics of Big Data?',
      answer:
        'The key characteristics are often referred to as the "Five Vs": Volume (large amounts of data), Velocity (high speed of data generation), Variety (different forms of data), Veracity (data accuracy and reliability), and Value (the insights derived from the data).',
    },
    {
      question: 'What are some common Big Data Analytics tools and technologies?',
      answer:
        'Common tools and technologies include Hadoop, Spark, Kafka, NoSQL databases, data warehousing solutions, and various business intelligence and data visualization platforms.',
    },
    {
      question: 'How is Big Data Analytics used in business?',
      answer:
        'It is used for customer analytics, predictive maintenance, fraud detection, supply chain optimization, personalized marketing, and many other applications to improve efficiency and drive growth.',
    },
    {
      question: 'What are the challenges in Big Data Analytics?',
      answer:
        'Challenges include data storage, data processing speed, data quality, data security and privacy, and the need for skilled data scientists and analysts.',
    },
  ];

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-6 md:px-8 lg:px-12">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-12 text-center">
          Frequently Asked Questions - Big Data Analytics
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

export default BigDataAnalyticsFAQSection;
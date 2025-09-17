// NaturalLanguageProcessingFAQSection.js
import React, { useState } from 'react';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';

const NaturalLanguageProcessingFAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: 'What is Natural Language Processing (NLP)?',
      answer:
        'Natural Language Processing (NLP) is a field of artificial intelligence that focuses on enabling computers to understand, interpret, and generate human language.',
    },
    {
      question: 'What are some common applications of NLP?',
      answer:
        'Common applications include machine translation, sentiment analysis, chatbots, speech recognition, text summarization, and information extraction.',
    },
    {
      question: 'How does NLP work?',
      answer:
        'NLP involves various techniques such as tokenization, parsing, stemming, lemmatization, and the use of machine learning models to analyze and understand language patterns.',
    },
    {
      question: 'What are the challenges in NLP?',
      answer:
        'Challenges include dealing with ambiguity, context understanding, handling different languages and dialects, and the ever-evolving nature of human language.',
    },
    {
      question: 'What are some key NLP techniques?',
      answer:
        'Key techniques include part-of-speech tagging, named entity recognition, dependency parsing, and transformer networks.',
    },
  ];

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="bg-white py-16 mt-20">
      <div className="container mx-auto px-6 md:px-8 lg:px-12">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-12 text-center">
          Frequently Asked Questions - Natural Language Processing
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

export default NaturalLanguageProcessingFAQSection;
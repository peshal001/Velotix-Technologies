import React, { useState } from 'react';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';

const ComputerVisionFAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: 'What is Computer Vision?',
      answer:
        'Computer Vision is an interdisciplinary field of artificial intelligence that enables computers to "see" and interpret the visual world.',
    },
    {
      question: 'What are some applications of Computer Vision?',
      answer:
        'Applications include image recognition, object detection, facial recognition, autonomous vehicles, medical imaging analysis, and industrial automation.',
    },
    {
      question: 'How does Computer Vision work?',
      answer:
        'Computer Vision involves techniques for image acquisition, processing, analysis, and understanding, often using deep learning models like Convolutional Neural Networks (CNNs).',
    },
    {
      question: 'What are the challenges in Computer Vision?',
      answer:
        'Challenges include dealing with variations in lighting, viewpoint, scale, occlusion, and the need for large amounts of labeled data.',
    },
    {
      question: 'What are some key Computer Vision tasks?',
      answer:
        'Key tasks include image classification, object localization, semantic segmentation, instance segmentation, and image generation.',
    },
  ];

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-6 md:px-8 lg:px-12">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-12 text-center">
          Frequently Asked Questions - Computer Vision
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

export default ComputerVisionFAQSection;
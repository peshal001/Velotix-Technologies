import React, { useState } from 'react';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';

const ChatGptFAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqData = [
    {
      question: 'What kind of support or assistance is available during the integration process?',
      answer: 'Our team provides comprehensive support throughout the entire integration process, including planning, implementation, and post-integration assistance to ensure a smooth and successful deployment.',
    },
    {
      question: 'Is ChatGPT customizable to fit the unique needs of my business?',
      answer: 'Yes, ChatGPT is highly customizable. We work closely with you to tailor the chatbot to your specific business requirements, branding, and target audience.',
    },
    {
      question: 'What platforms does ChatGPT work with?',
      answer: 'ChatGPT can be integrated with a wide range of platforms, including websites, web applications, mobile apps, and various software systems through APIs.',
    },
    {
      question: 'What messengers does ChatGPT work with?',
      answer: 'ChatGPT can be integrated with popular messaging platforms such as Slack, Facebook Messenger, WhatsApp, and more, allowing for seamless communication with your users.',
    },
    {
      question: 'Can I integrate ChatGPT with my healthcare startup?',
      answer: 'Absolutely! ChatGPT can be a valuable asset for healthcare startups, assisting with patient inquiries, scheduling, providing information, and improving overall user experience while adhering to privacy and security standards.',
    },
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-6 md:px-8 lg:px-12">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-12 text-center">
          Frequently Asked Questions - Chat GPT Integrations
        </h2>
        <div className="space-y-4">
          {faqData.map((item, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-xl cursor-pointer transition-shadow duration-300 hover:shadow-lg"
              onClick={() => toggleAccordion(index)}
            >
              <div className="p-6 flex items-center justify-between">
                <h3 className="text-xl font-semibold text-[#3AAFA9]">{item.question}</h3>
                <span className="text-2xl text-[#3AAFA9] font-bold">
                  {activeIndex === index ? <AiOutlineMinus /> : <AiOutlinePlus />}
                </span>
              </div>
              {activeIndex === index && (
                <div className="p-6 border-t border-gray-200">
                  <p className="text-lg text-gray-800">{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChatGptFAQSection;
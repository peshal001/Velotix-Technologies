import React from 'react';
import {
  AiOutlineRobot,
  AiOutlineMessage,
  AiOutlineFileSearch,
  AiOutlineTranslation,
  AiOutlineBarChart,
  AiOutlineCode,
} from 'react-icons/ai';

const NLPBenefitsProcess = () => {
  const benefits = [
    {
      icon: <AiOutlineRobot size={48} className="text-white" />,
      title: 'Enhanced Chatbots',
      description:
        'Build intelligent chatbots that understand user intent, provide accurate responses, and improve customer support.',
    },
    {
      icon: <AiOutlineMessage size={48} className="text-white" />,
      title: 'Sentiment Analysis',
      description:
        'Gain insights into customer opinions and feedback from text data, enabling better product development and service improvements.',
    },
    {
      icon: <AiOutlineFileSearch size={48} className="text-white" />,
      title: 'Text Summarization',
      description:
        'Automatically condense large volumes of text into concise summaries, saving time and improving information consumption.',
    },
    {
      icon: <AiOutlineTranslation size={48} className="text-white" />,
      title: 'Language Translation',
      description:
        'Break down language barriers with accurate and efficient translation services for global communication.',
    },
    {
      icon: <AiOutlineBarChart size={48} className="text-white" />,
      title: 'Information Extraction',
      description:
        'Identify and extract key information from unstructured text data, making it readily available for analysis and decision-making.',
    },
    {
      icon: <AiOutlineCode size={48} className="text-white" />,
      title: 'Natural Language Generation',
      description:
        'Generate human-like text for various applications, such as content creation, report writing, and automated responses.',
    },
    {
      title: 'The Game-Changing Features of NLP Services',
      isTitle: true,
    },
  ];

  return (
    <div className="bg-[#3AAFA9] py-12 mb-20"> 
      <div className="container mx-auto px-6 py-6 md:px-8 lg:px-12">
        {benefits.find((item) => item.isTitle) && (
          <h2 className="text-4xl font-extrabold text-gray-900 mb-12 text-center">
            {benefits.find((item) => item.isTitle)?.title}
          </h2>
        )}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> 
          {benefits
            .filter((item) => !item.isTitle)
            .map((benefit, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md p-8 flex flex-col items-center text-center transition-transform duration-300 hover:scale-105 hover:shadow-lg"
              >
                <div className="w-16 h-16 rounded-full bg-[#3AAFA9] flex items-center justify-center mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-700 text-lg tracking-wide">{benefit.description}</p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default NLPBenefitsProcess;
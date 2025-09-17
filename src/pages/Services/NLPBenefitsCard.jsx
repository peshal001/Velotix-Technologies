import React from 'react';
import {
  AiOutlineRobot,
  AiOutlineMessage,
  AiOutlineFileSearch,
  AiOutlineTranslation,
  AiOutlineBarChart,
  AiOutlineCode,
} from 'react-icons/ai';
 
const NLPBenefitsCard = () => {
  const benefits = [
    {
      icon: <AiOutlineRobot size={32} className="text-[#3AAFA9]" />,
      title: 'Enhanced Chatbots',
      description:
        'Build intelligent chatbots that understand user intent, provide accurate responses, and improve customer support.',
    },
    {
      icon: <AiOutlineMessage size={32} className="text-[#3AAFA9]" />,
      title: 'Sentiment Analysis',
      description:
        'Gain insights into customer opinions and feedback from text data, enabling better product development and service improvements.',
    },
    {
      icon: <AiOutlineFileSearch size={32} className="text-[#3AAFA9]" />,
      title: 'Text Summarization',
      description:
        'Automatically condense large volumes of text into concise summaries, saving time and improving information consumption.',
    },
    {
      icon: <AiOutlineTranslation size={32} className="text-[#3AAFA9]" />,
      title: 'Language Translation',
      description:
        'Break down language barriers with accurate and efficient translation services for global communication.',
    },
    {
      icon: <AiOutlineBarChart size={32} className="text-[#3AAFA9]" />,
      title: 'Information Extraction',
      description:
        'Identify and extract key information from unstructured text data, making it readily available for analysis and decision-making.',
    },
    {
      icon: <AiOutlineCode size={32} className="text-[#3AAFA9]" />,
      title: 'Natural Language Generation',
      description:
        'Generate human-like text for various applications, such as content creation, report writing, and automated responses.',
    },
    {
      title: 'Unlocking the Advantages of NLP Services',
      isTitle: true,
    },
  ];

  return (
    <div className="bg-white py-12 mt-12 mb-20">
      <div className="container mx-auto px-6 py-6 md:px-8 lg:px-12 mb-20">
        {benefits.find((item) => item.isTitle) && (
          <h2 className="text-4xl font-extrabold text-gray-900  text-center mb-20">
            {benefits.find((item) => item.isTitle)?.title}
          </h2>
        )}
        <div className="grid grid-cols-2 md:grid-cols-2 xl:grid-cols-3 gap-10">
          {benefits
            .filter((item) => !item.isTitle)
            .map((benefit, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md p-10 flex flex-col items-center text-center"
              >
                <div className="mb-4">{benefit.icon}</div>
                <h3 className="text-2xl font-semibold text-[#3AAFA9] mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-900 text-xl tracking-wide">{benefit.description}</p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default NLPBenefitsCard;
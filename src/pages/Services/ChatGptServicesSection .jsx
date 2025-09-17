import React from 'react';
import {
  // Example icon imports (replace with your actual icons)
  AiOutlineRobot,
  AiOutlineQuestionCircle,
  AiOutlineFileText,
  AiOutlineGlobal,
  AiOutlinePlus,
  AiOutlineMessage,
} from 'react-icons/ai';

const ChatGptServicesSection = () => {
  return (
    <div className="bg-white ml-55 w-3/4 py-8 px-4 sm:px-6 lg:px-8 mb-20 mt-30">
      <h2 className="text-4xl font-extrabold text-gray-800 text-center mb-8">
        Comprehensive Services In Chat GPT Integrations
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <ServiceCard
          icon={<AiOutlineRobot size={48} className="text-[#3AAFA9] mb-4" />}
          title="Chatbot Development"
          description="For websites, applications, and messaging platforms, Chat GPT offers chatbot development services with natural language interactions that give users assistance and support."
        />
        <ServiceCard
          icon={<AiOutlineQuestionCircle
            size={48}
            className="text-[#3AAFA9] mb-4 text-xl"
          />}
          title="Question Answering Module"
          description="We integrate a powerful question-answering capability into your chatbot, enabling it to provide accurate and relevant answers to user queries."
        />
        <ServiceCard
          icon={<AiOutlineFileText size={48} className="text-[#3AAFA9] mb-4 text-xl" />}
          title="Content Generation"
          description="Our Chat GPT integration service offers content generation. It empowers your website with engaging and personalized written materials."
        />
        <ServiceCard
          icon={<AiOutlineGlobal size={48} className="text-[#3AAFA9] mb-4 text-xl" />}
          title="Language Translation"
          description="We integrate natural language processing capabilities with Chat GPT to offer seamless translation services for users in different countries or regions."
        />
        <ServiceCard
          icon={<AiOutlinePlus size={48} className="text-[#3AAFA9] mb-4 text-xl" />}
          title="Personalized Recommendations"
          description="Experience the power of personalized recommendations with Chat GPT integrations. It is tailored to enhance user experiences and drive conversions."
        />
        <ServiceCard
          icon={<AiOutlineMessage size={48} className="text-[#3AAFA9] mb-4 text-xl" />}
          title="Prompt Engineering"
          description="This service involves creating compelling prompts. These prompts enable the language model to generate high-quality responses that meet user needs and expectations."
        />
      </div>
    </div>
  );
};

const ServiceCard = ({ icon, title, description }) => {
  return (
    <div className="bg-white rounded-lg p-6 shadow-md text-center">
      <div className="flex justify-center">{icon}</div>
      <h3 className="text-2xl font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600 text-xl">{description}</p>
    </div>
  );
};

export default ChatGptServicesSection;
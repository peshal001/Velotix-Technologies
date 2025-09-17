import React from 'react';
import {
  AiOutlineFile,
  AiOutlineDatabase,
  AiOutlineCode,
  AiOutlineRocket,
} from 'react-icons/ai';

const ChatGptIntegrationProcess = () => {
  return (
    <div className="bg-white py-12 px-4 sm:px-6 lg:px-8 ">
      <h2 className="text-4xl font-extrabold text-gray-900 text-center mb-20 mt-20">
        The Development Process Of Chat GPT Integration
      </h2>
      <div className="flex justify-around items-stretch">
        <ProcessCard
          icon={<AiOutlineFile size={48} className="text-[#3AAFA9] mb-4" />}
          stepNumber="Step 1"
          title="Define the use case"
          description="Finding the use case for Chat GPT integration is the first step. The user scenarios and target audience all need to be defined in this process by the Integration Service Provider."
        />
        <ProcessCard
          icon={<AiOutlineDatabase size={48} className="text-[#3AAFA9] mb-4" />}
          stepNumber="Step 2"
          title="Data collection and preparation"
          description="The next step is to collect and prepare the data required to train Chat GPT. This involves gathering conversational data from existing customer interactions."
        />
        <ProcessCard
          icon={<AiOutlineCode size={48} className="text-[#3AAFA9] mb-4" />}
          stepNumber="Step 3"
          title="Development and integration"
          description="The following stage is to create and incorporate the chatbot into the software application. This is after the data has been prepared, and the model has been trained."
        />
        <ProcessCard
          icon={<AiOutlineRocket size={48} className="text-[#3AAFA9] mb-4" />}
          stepNumber="Step 4"
          title="Deployment and monitoring"
          description="The last step entails deploying the chatbot and monitoring its performance over time. This includes setting up analytics to track user interactions accurately."
        />
      </div>
    </div>
  );
};

const ProcessCard = ({ icon, stepNumber, title, description }) => {
  return (
    <div
      className="bg-white rounded-xl shadow-md p-8 flex flex-col items-center text-center w-80 transition-transform duration-300 hover:scale-105 hover:shadow-xl"
    >
      <div className="flex justify-center rounded-full bg-gray-100 p-3 mb-4">
        {icon}
      </div>
      <h4 className="text-2xl font-semibold text-gray-500 mb-2">{stepNumber}</h4>
      <h3 className="text-2xl font-bold text-gray-900 mb-4">{title}</h3>
      <p className="text-gray-800 text-xl">{description}</p>
    </div>
  );
};

export default ChatGptIntegrationProcess;
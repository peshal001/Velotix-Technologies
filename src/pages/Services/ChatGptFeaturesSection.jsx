import React from 'react';
import {
  AiOutlineWechat,
  AiOutlineAim,
  AiOutlineArrowsAlt,
  AiOutlineDollar,
} from 'react-icons/ai';

const ChatGptFeaturesSection = () => {
  return (
    <div className="bg-[#3AAFA9] py-12 px-4 sm:px-6 lg:px-8 mb-25  mt-20">
      <h2 className="text-4xl font-bold text-white text-center mb-8 ml-15 mr-18">
        Chat GPT Integration Services Features
      </h2>
      <div className="overflow-x-auto">
        <div className="flex space-x-6 w-max ml-10 mr-20 mb-5">
          <FeatureCard
            icon={<AiOutlineWechat size={48} className="text-[#64CCC5] mb-4" />}
            title="Natural Language Understanding"
            description="The feature of our Chat GPT Integrations enables the chatbot to interpret and reply to complex queries, resulting in more effective and natural interactions."
          />
          <FeatureCard
            icon={<AiOutlineAim size={48} className="text-[#64CCC5] mb-4" />}
            title="Personalization"
            description="Experience the power of AI Integration in business with our sophisticated algorithms delivering personalized recommendations, answers, and engaging content based on user interests. This ensures a rewarding experience."
          />
          <FeatureCard
            icon={<AiOutlineArrowsAlt
              size={48}
              className="text-[#64CCC5] mb-4"
            />}
            title="Scalability"
            description="Unleash the power of Chat GPT Integration Services with its remarkable scalability feature. It empowers businesses to handle high volumes of requests and interactions effortlessly. Perfect for organizations of all sizes and industries."
            highlighted
          />
          <FeatureCard
            icon={<AiOutlineDollar size={48} className="text-[#64CCC5] mb-4" />}
            title="Time and Cost Savings"
            description="Businesses can save manual labor expenses and streamline workflows by automating processes like content creation and customer service. This frees up resources for high-value activities that can increase profitability."
          />
        </div>
      </div>
    </div>
  );
};

const FeatureCard = ({ icon, title, description, highlighted }) => {
  const cardStyles = highlighted
    ? 'bg-gray-800 shadow-lg'
    : 'bg-gray-800 shadow-md';
  return (
    <div
      className={`rounded-lg p-6 text-white w-90 ml-20 flex-shrink-0 transition-transform duration-300 hover:scale-105 hover:shadow-2xl ${cardStyles}`}
    >
      <div className="flex justify-center">{icon}</div>
      <h3 className="text-xl font-semibold mb-2 text-center">{title}</h3>
      <p className="text-white text-lg tracking-wide text-center">{description}</p>
    </div>
  );
};

export default ChatGptFeaturesSection;
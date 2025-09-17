import React from 'react';
import {
  AiOutlinePlus,
  AiOutlineDollar,
  AiOutlineHome,
  AiOutlineArrowUp,
  AiOutlineSetting,
  AiOutlineStar,
} from 'react-icons/ai';

const FinanceCard = () => {
  const capabilities = [
    {
      icon: <AiOutlinePlus size={32} className="text-[#3AAFA9]" />,
      title: 'Improved Financial Efficiency',
      description:
        'AI and ML automate financial processes and improve operational efficiency for businesses, resulting in reduced costs and improved productivity.',
    },
    {
      icon: <AiOutlineDollar size={32} className="text-[#3AAFA9]" />,
      title: 'Cost Optimization',
      description:
        'Leveraging AI and ML in finance helps businesses identify cost-saving opportunities, streamline operations, and enhance financial decision-making.',
    },
    {
      icon: <AiOutlineHome size={32} className="text-[#3AAFA9]" />,
      title: 'Personalized Financial Solutions',
      description:
        'AI-driven insights help create personalized financial plans, providing clients with tailored investment advice, savings strategies, and risk management techniques.',
    },
    {
      icon: <AiOutlineArrowUp size={32} className="text-[#3AAFA9]" />,
      title: 'Increased Revenue Potential',
      description:
        'With AI tools, businesses can identify profitable opportunities, optimize their investments, and enhance revenue streams, driving long-term financial growth.',
    },
    {
      icon: <AiOutlineSetting size={32} className="bg-[#3AAFA9]" />,
      title: 'Operational Optimization',
      description:
        'AI and ML help financial institutions optimize resources, predict market trends, and automate repetitive tasks, leading to more effective financial management.',
    },
    {
      icon: <AiOutlineStar size={32} className="text-[#3AAFA9]" />,
      title: 'Competitive Market Advantage',
      description:
        'By using AI to analyze data and improve services, financial companies can gain a competitive edge, attract more clients, and boost profitability.',
    },
    {
      title: 'Capabilities And Benefits Of AI And ML In Finance',
      isTitle: true,
    },
  ];

  return (
    <div className="bg-white py-12">
      <div className="container mx-auto px-6 py-6 md:px-8 lg:px-12">
        {capabilities.find((item) => item.isTitle) && (
          <h2 className="text-4xl font-extrabold text-gray-900 mb-8 text-center">
            {capabilities.find((item) => item.isTitle)?.title}
          </h2>
        )}
        <div className="grid grid-cols-2 md:grid-cols-2 xl:grid-cols-3 gap-10">
          {capabilities
            .filter((item) => !item.isTitle)
            .map((capability, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md p-10 flex flex-col items-center text-center"
              >
                <div className="mb-4">{capability.icon}</div>
                <h3 className="text-2xl font-semibold text-[#3AAFA9] mb-2">
                  {capability.title}
                </h3>
                <p className="text-gray-900 text-xl tracking-wide">{capability.description}</p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default FinanceCard;

import React from 'react';
import {
  AiOutlinePlus,
  AiOutlineDollar,
  AiOutlineShoppingCart,
  AiOutlineArrowUp,
  AiOutlineSetting,
  AiOutlineStar,
} from 'react-icons/ai';

const EcommerceBenefitsCard = () => {
  const benefits = [
    {
      icon: <AiOutlinePlus size={32} className="text-[#3AAFA9]" />,
      title: 'Personalized Shopping',
      description:
        'AI recommends products based on user behavior and preferences, increasing engagement and boosting conversions through tailored experiences.',
    },
    {
      icon: <AiOutlineDollar size={32} className="text-[#3AAFA9]" />,
      title: 'Increased Sales',
      description:
        'AI-powered dynamic pricing and predictive analytics help boost revenue by adjusting prices based on demand, trends, and competition.',
    },
    {
      icon: <AiOutlineShoppingCart size={32} className="text-[#3AAFA9]" />,
      title: 'Smarter Inventory Management',
      description:
        'Predictive algorithms optimize stock levels, reduce overstock and understock situations, and improve supply chain efficiency.',
    },
    {
      icon: <AiOutlineArrowUp size={32} className="text-[#3AAFA9]" />,
      title: 'Improved Customer Retention',
      description:
        'AI enhances customer support, loyalty programs, and follow-ups with automation—leading to stronger relationships and higher repeat purchases.',
    },
    {
      icon: <AiOutlineSetting size={32} className="text-[#3AAFA9]" />,
      title: 'Automated Operations',
      description:
        'Automate repetitive tasks like order tracking, customer queries, and marketing—saving time and operational costs.',
    },
    {
      icon: <AiOutlineStar size={32} className="text-[#3AAFA9]" />,
      title: 'Competitive Advantage',
      description:
        'Adopting AI in e-commerce sets your store apart, offering modern shopping experiences and real-time decision-making capabilities.',
    },
    {
      title: 'Benefits of AI & Automation in E-Commerce',
      isTitle: true,
    },
  ];

  return (
    <div className="bg-white py-12">
      <div className="container mx-auto px-6 py-6 md:px-8 lg:px-12">
        {benefits.find((item) => item.isTitle) && (
          <h2 className="text-4xl font-extrabold text-gray-900 mb-8 text-center">
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

export default EcommerceBenefitsCard;

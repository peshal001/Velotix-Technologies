import React from 'react';
import {
  AiOutlinePlus,
  AiOutlineDollar,
  AiOutlineShoppingCart,
  AiOutlineArrowUp,
  AiOutlineSetting,
  AiOutlineStar,
} from 'react-icons/ai';

const RetailBenefitsCard = () => {
  const benefits = [
    {
      icon: <AiOutlinePlus size={32} className="text-[#3AAFA9]" />,
      title: 'Personalized Product Discovery',
      description:
        'AI curates personalized recommendations to help customers find what they love faster, improving satisfaction and boosting conversion rates.',
    },
    {
      icon: <AiOutlineDollar size={32} className="text-[#3AAFA9]" />,
      title: 'Optimized Pricing Strategies',
      description:
        'Dynamic pricing adapts in real-time based on demand, helping retailers stay competitive and increase profits.',
    },
    {
      icon: <AiOutlineShoppingCart size={32} className="text-[#3AAFA9]" />,
      title: 'Smarter Inventory Forecasting',
      description:
        'AI predicts shopping trends, helping retailers stock smarter and reduce inventory waste.',
    },
    {
      icon: <AiOutlineArrowUp size={32} className="text-[#3AAFA9]" />,
      title: 'Higher Customer Retention',
      description:
        'Loyalty programs powered by customer insights help retain shoppers and turn them into brand advocates.',
    },
    {
      icon: <AiOutlineSetting size={32} className="text-[#3AAFA9]" />,
      title: 'Automated Store Operations',
      description:
        'Automation streamlines tasks like order management, returns, and support—saving time and improving service.',
    },
    {
      icon: <AiOutlineStar size={32} className="text-[#3AAFA9]" />,
      title: 'Enhanced Brand Loyalty',
      description:
        'Deliver consistent and delightful shopping experiences that build trust and loyalty across every touchpoint.',
    },
    {
      title: 'Retail E-Commerce Benefits with AI & Automation',
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

export default RetailBenefitsCard;

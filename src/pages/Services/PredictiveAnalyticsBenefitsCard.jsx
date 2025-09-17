import React from 'react';
import {
  AiOutlineLineChart,
  AiOutlineBarChart,
  AiOutlineAreaChart,
  AiOutlinePieChart,
  AiOutlineDatabase,
  AiOutlineEye,
} from 'react-icons/ai';

const PredictiveAnalyticsBenefitsCard = () => {
  const benefits = [
    {
      icon: <AiOutlineLineChart size={32} className="text-[#3AAFA9]" />,
      title: 'Data-Driven Forecasting',
      description:
        'Leverage historical data to anticipate trends, enabling smarter decision-making and accurate demand planning.',
    },
    {
      icon: <AiOutlineBarChart size={32} className="text-[#3AAFA9]" />,
      title: 'Optimized Marketing Strategies',
      description:
        'Predictive insights help tailor campaigns to the right audience at the right time, maximizing ROI.',
    },
    {
      icon: <AiOutlineAreaChart size={32} className="text-[#3AAFA9]" />,
      title: 'Customer Behavior Prediction',
      description:
        'Analyze browsing and purchase patterns to proactively address customer needs and increase satisfaction.',
    },
    {
      icon: <AiOutlinePieChart size={32} className="text-[#3AAFA9]" />,
      title: 'Risk Management',
      description:
        'Identify potential issues before they arise, from fraud detection to inventory shortages, reducing operational risks.',
    },
    {
      icon: <AiOutlineDatabase size={32} className="text-[#3AAFA9]" />,
      title: 'Efficient Resource Allocation',
      description:
        'Use predictive models to allocate budget, staff, and inventory more effectively, minimizing waste and maximizing efficiency.',
    },
    {
      icon: <AiOutlineEye size={32} className="text-[#3AAFA9]" />,
      title: 'Real-Time Business Insights',
      description:
        'Monitor KPIs and business health in real time, enabling faster course corrections and agile responses.',
    },
    {
      title: 'Unveiling the Power of Predictive Analytics Services',
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

export default PredictiveAnalyticsBenefitsCard;

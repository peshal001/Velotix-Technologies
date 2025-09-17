import React from 'react';
import {
  AiOutlinePlus,
  AiOutlineDollar,
  AiOutlineHome,
  AiOutlineArrowUp,
  AiOutlineSetting,
  AiOutlineStar,
} from 'react-icons/ai';

const HealthTechCard = () => {
  const capabilities = [
    {
      icon: <AiOutlinePlus size={32} className="text-[#3AAFA9]" />,
      title: 'Improved Operational Efficiency',
      description:
        'AI and ML automate routine tasks and improve operational efficiency in healthcare organizations. This results in increased productivity and reduced costs.',
    },
    {
      icon: <AiOutlineDollar size={32} className="text-[#3AAFA9]" />,
      title: 'Cost Savings',
      description:
        'Implementing AI and ML in digital healthcare software leads to significant cost savings. It automates processes and identifies cost-effective treatments.',
    },
    {
      icon: <AiOutlineHome size={32} className="text-[#3AAFA9]" />,
      title: 'Improved Clinical Outcomes',
      description:
        'AI and ML can enhance clinical outcomes by enabling early detection and precise diagnosis. It leads to better patient outcomes and lower healthcare costs.',
    },
    {
      icon: <AiOutlineArrowUp size={32} className="text-[#3AAFA9]" />,
      title: 'Enhanced Revenue Streams',
      description:
        'By enabling cutting-edge services like tailored treatment, telemedicine, and remote monitoring, AI and ML can create new revenue streams in the healthcare software industry.',
    },
    {
      icon: <AiOutlineSetting size={32} className="bg-[#3AAFA9]" />,
      title: 'Improved Resource Utilization',
      description:
        'AI and ML help optimize resource utilization by predicting service demand and allocating resources efficiently. This results in improved patient care and reduced costs.',
    },
    {
      icon: <AiOutlineStar size={32} className="text-[#3AAFA9]" />,
      title: 'Competitive Advantage',
      description:
        'Healthcare firms can gain a competitive edge by using AI to offer better services, enhance patient outcomes, and cut costs, boosting market share and profitability.',
    },
    {
      title: 'Capabilities And Benefits Of AI And ML In Health Tech',
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

export default HealthTechCard 
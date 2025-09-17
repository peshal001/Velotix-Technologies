import React from 'react';
import {
    AiOutlineDatabase,
    AiOutlineCloudServer,
    AiOutlinePieChart,
    AiOutlineTable,
    AiOutlineDashboard,
    AiOutlineSearch,
} from 'react-icons/ai';

const BigDataAnalyticsBenefitsCard = () => {
    const benefits = [
        {
            icon: <AiOutlineDatabase size={32} className="text-[#3AAFA9]" />,
            title: 'Data Warehousing',
            description:
                'Centralize and manage large volumes of data for efficient analysis and reporting.',
        },
        {
            icon: <AiOutlineCloudServer size={32} className="text-[#3AAFA9]" />,
            title: 'Scalable Data Processing',
            description:
                'Leverage cloud-based technologies to process and analyze massive datasets with speed and efficiency.',
        },
        {
            icon: <AiOutlinePieChart size={32} className="text-[#3AAFA9]" />,
            title: 'Data Visualization',
            description:
                'Present complex data insights in clear and understandable visual formats for better decision-making.',
        },
        {
            icon: <AiOutlineTable size={32} className="text-[#3AAFA9]" />,
            title: 'Predictive Analytics',
            description:
                'Apply statistical and machine learning techniques to forecast future trends and behaviors from large datasets.',
        },
        {
            icon: <AiOutlineDashboard size={32} className="text-[#3AAFA9]" />,
            title: 'Real-Time Analytics',
            description:
                'Analyze streaming data in real-time to gain immediate insights and respond proactively to events.',
        },
        {
            icon: <AiOutlineSearch size={32} className="text-[#3AAFA9]" />,
            title: 'Data Mining & Discovery',
            description:
                'Explore large datasets to discover hidden patterns, correlations, and valuable insights.',
        },
        {
            title: 'Harnessing the Power of Big Data Analytics',
            isTitle: true,
        },
    ];

    return (
        <div className="bg-white py-12 mt-12 mb-20">
            <div className="container mx-auto px-6 py-6 md:px-8 lg:px-12 mb-20">
                {benefits.find((item) => item.isTitle) && (
                    <h2 className="text-4xl font-extrabold text-gray-900 text-center mb-20">
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

export default BigDataAnalyticsBenefitsCard;
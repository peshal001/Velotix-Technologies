import React from 'react';
import {
    AiOutlineDatabase,
    AiOutlineCloudServer,
    AiOutlinePieChart,
    AiOutlineTable,
    AiOutlineDashboard,
    AiOutlineSearch,
} from 'react-icons/ai';

const BigDataAnalyticsBenefitsProcess = () => {
    const benefits = [
        {
            icon: <AiOutlineDatabase size={48} className="text-white" />,
            title: 'Data Warehousing',
            description:
                'Centralize and manage large volumes of data for efficient analysis and reporting.',
        },
        {
            icon: <AiOutlineCloudServer size={48} className="text-white" />,
            title: 'Scalable Data Processing',
            description:
                'Leverage cloud-based technologies to process and analyze massive datasets with speed and efficiency.',
        },
        {
            icon: <AiOutlinePieChart size={48} className="text-white" />,
            title: 'Data Visualization',
            description:
                'Present complex data insights in clear and understandable visual formats for better decision-making.',
        },
        {
            icon: <AiOutlineTable size={48} className="text-white" />,
            title: 'Predictive Analytics',
            description:
                'Apply statistical and machine learning techniques to forecast future trends and behaviors from large datasets.',
        },
        {
            icon: <AiOutlineDashboard size={48} className="text-white" />,
            title: 'Real-Time Analytics',
            description:
                'Analyze streaming data in real-time to gain immediate insights and respond proactively to events.',
        },
        {
            icon: <AiOutlineSearch size={48} className="text-white" />,
            title: 'Data Mining & Discovery',
            description:
                'Explore large datasets to discover hidden patterns, correlations, and valuable insights.',
        },
        {
            title: 'The Big Data Analytics Process',
            isTitle: true,
        },
    ];

    return (
        <div className="bg-[#3AAFA9] py-12 mb-20">
            <div className="container mx-auto px-6 py-6 md:px-8 lg:px-12">
                {benefits.find((item) => item.isTitle) && (
                    <h2 className="text-4xl font-extrabold text-white mb-12 text-center">
                        {benefits.find((item) => item.isTitle)?.title}
                    </h2>
                )}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {benefits
                        .filter((item) => !item.isTitle)
                        .map((benefit, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-xl shadow-md p-8 flex flex-col items-center text-center transition-transform duration-300 hover:scale-105 hover:shadow-lg"
                            >
                                <div className="w-16 h-16 rounded-full bg-[#3AAFA9] flex items-center justify-center mb-4">
                                    {benefit.icon}
                                </div>
                                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                    {benefit.title}
                                </h3>
                                <p className="text-gray-700 text-lg tracking-wide">{benefit.description}</p>
                            </div>
                        ))}
                </div>
            </div>
        </div>
    );
};

export default BigDataAnalyticsBenefitsProcess;
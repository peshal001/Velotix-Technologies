import React from 'react';
import {
    AiOutlineRobot,
    AiOutlineLineChart,
    AiOutlineCode,
    AiOutlineCheckCircle,
    AiOutlineCloud,
  } from 'react-icons/ai';
  import { FaBrain } from 'react-icons/fa';

const MachineLearningBenefitsProcess = () => {
    const benefits = [
        {
            icon: <FaBrain size={48} className="text-white" />,
            title: 'Predictive Modeling',
            description:
                'Forecast future trends and outcomes with advanced machine learning algorithms for informed decision-making.',
        },
        {
            icon: <AiOutlineLineChart size={48} className="text-white" />,
            title: 'Data Analysis & Insights',
            description:
                'Uncover hidden patterns and valuable insights from complex datasets to drive business growth.',
        },
        {
            icon: <AiOutlineRobot size={48} className="text-white" />,
            title: 'Automation & Efficiency',
            description:
                'Automate repetitive tasks and optimize processes with intelligent machine learning applications.',
        },
        {
            icon: <AiOutlineCode size={48} className="text-white" />,
            title: 'Custom ML Solutions',
            description:
                'Develop tailored machine learning models and algorithms to address your unique business challenges.',
        },
        {
            icon: <AiOutlineCheckCircle size={48} className="text-white" />,
            title: 'Improved Accuracy',
            description:
                'Enhance the precision of predictions and classifications with robust machine learning techniques.',
        },
        {
            icon: <AiOutlineCloud size={48} className="text-white" />,
            title: 'Scalable ML Infrastructure',
            description:
                'Build and deploy machine learning models on scalable cloud platforms for optimal performance.',
        },
        {
            title: 'The Machine Learning Process',
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

export default MachineLearningBenefitsProcess;
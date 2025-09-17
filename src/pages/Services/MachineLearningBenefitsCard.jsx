import React from 'react';
import {
    AiOutlineRobot,
    AiOutlineLineChart,
    AiOutlineCode,
    AiOutlineCheckCircle,
    AiOutlineCloud,
  } from 'react-icons/ai';
  import { FaBrain } from 'react-icons/fa'; 
  



const MachineLearningBenefitsCard = () => {
    const benefits = [
        {
            icon: <FaBrain size={32} className="text-[#3AAFA9]" />,
            title: 'Predictive Modeling',
            description:
                'Forecast future trends and outcomes with advanced machine learning algorithms for informed decision-making.',
        },
        {
            icon: <AiOutlineLineChart size={32} className="text-[#3AAFA9]" />,
            title: 'Data Analysis & Insights',
            description:
                'Uncover hidden patterns and valuable insights from complex datasets to drive business growth.',
        },
        {
            icon: <AiOutlineRobot size={32} className="text-[#3AAFA9]" />,
            title: 'Automation & Efficiency',
            description:
                'Automate repetitive tasks and optimize processes with intelligent machine learning applications.',
        },
        {
            icon: <AiOutlineCode size={32} className="text-[#3AAFA9]" />,
            title: 'Custom ML Solutions',
            description:
                'Develop tailored machine learning models and algorithms to address your unique business challenges.',
        },
        {
            icon: <AiOutlineCheckCircle size={32} className="text-[#3AAFA9]" />,
            title: 'Improved Accuracy',
            description:
                'Enhance the precision of predictions and classifications with robust machine learning techniques.',
        },
        {
            icon: <AiOutlineCloud size={32} className="text-[#3AAFA9]" />,
            title: 'Scalable ML Infrastructure',
            description:
                'Build and deploy machine learning models on scalable cloud platforms for optimal performance.',
        },
        {
            title: 'Unlocking the Power of Machine Learning',
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

export default MachineLearningBenefitsCard;
import React from 'react';
import careersBanner from "../../assets/HealthTech/careersBanner.png";
import remoteMonitoring from "../../assets/HealthTech/remoteMonitoring.png";
import adminTasks from "../../assets/HealthTech/adminTasks.png"; 
import mentalHealth from "../../assets/HealthTech/mentalHealth.png";
import medicalAnalysis from "../../assets/HealthTech/medicalAnalysis.png"; 
import virtualAssistant from "../../assets/HealthTech/virtualAssistant.png"; 

const FinanceCases = () => {
  const useCases = [
    {
      title: 'Fraud Detection',
      description:
        'AI and ML can analyze transactions in real-time to detect patterns of fraud, improving security and reducing financial losses for businesses and customers.',
      imageSrc: careersBanner,
    },
    {
      title: 'Investment Portfolio Management',
      description:
        'AI-powered tools help manage investment portfolios by providing data-driven insights, analyzing market trends, and making automated adjustments to optimize returns.',
      imageSrc: remoteMonitoring,
    },
    {
      title: 'Customer Service Automation',
      description:
        'AI-driven chatbots and virtual assistants can automate customer service tasks, providing instant responses to client inquiries and improving customer satisfaction.',
      imageSrc: adminTasks,
    },
    {
      title: 'Risk Assessment',
      description:
        'AI systems can assist in assessing financial risks by analyzing vast amounts of data, enabling better decision-making and proactive risk management for businesses.',
      imageSrc: mentalHealth,
    },
    {
      title: 'Credit Scoring and Underwriting',
      description:
        'AI can improve credit scoring by evaluating multiple data points beyond traditional methods, helping financial institutions make more accurate lending decisions.',
      imageSrc: medicalAnalysis,
    },
    {
      title: 'Personal Finance Assistants',
      description:
        'Virtual assistants powered by AI help individuals manage their finances by tracking spending, providing budgeting advice, and suggesting investment opportunities.',
      imageSrc: virtualAssistant,
    },
  ];

  return (
    <div className="bg-white py-12">
      <div className="container mx-auto px-4 md:px-8 lg:px-12">
        <h2 className="text-4xl font-extrabold text-gray-800 mb-8 text-center">
          AI Finance Tech Use Cases
        </h2>
        <div className="overflow-x-auto">
          <div className="flex flex-row gap-8 py-4">
            {useCases.map((useCase, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-lg shadow-md overflow-hidden w-80 md:w-96 flex-shrink-0"
              >
                <img
                  src={useCase.imageSrc}
                  alt={useCase.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-700 mb-2">
                    {useCase.title}
                  </h3>
                  <p className="text-gray-900 text-xl">{useCase.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinanceCases;

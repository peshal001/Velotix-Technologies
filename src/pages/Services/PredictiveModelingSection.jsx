import React from 'react';
import {
  AiOutlineLineChart,
  AiOutlineClockCircle,
  AiOutlineTag,
  AiOutlineWarning,
} from 'react-icons/ai';

const PredictiveModelingSection = () => {
  return (
    <div className="bg-[#3AAFA9] py-12 px-4 sm:px-6 lg:px-8 mb-20 mt-20">
      <h2 className="text-3xl font-semibold text-white text-center mb-8">
        Improve Business Decision-Making With Predictive Modeling Services
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <ServiceCard
          icon={<AiOutlineLineChart size={48} className="text-[#3AAFA9] mb-4" />}
          title="Regression Analysis"
          description="With the use of powerful predictive analytics tools, we offer regression analysis. AI capabilities empower businesses to uncover valuable insights, make data-driven decisions, and optimize their strategies for future success."
        />
        <ServiceCard
          icon={<AiOutlineClockCircle size={48} className="text-[#3AAFA9] mb-4" />}
          title="Time Series Forecasting"
          description="Time series forecasting, which involves examining time-stamped data to forecast future patterns, is one of our major services. We accurately predict future trends through advanced techniques and algorithms, enabling businesses to make informed decisions."
        />
        <ServiceCard
          icon={<AiOutlineTag size={48} className="text-[#3AAFA9] mb-4" />}
          title="Classification Analysis"
          description="Industries such as health tech can use the vital classification analysis function in our predictive modeling services. It will help them make sense of their data. We can classify your data into several groups using advanced ML techniques."
        />
        <ServiceCard
          icon={<AiOutlineWarning size={48} className="text-[#3AAFA9] mb-4" />}
          title="Anomaly Detection"
          description="Our predictive analytics provide comprehensive features, including an advanced Anomaly Detection module. This module helps identify and flag unexpected or unusual data points, enabling proactive interventions to prevent potential risks."
        />
      </div>
    </div>
  );
};

const ServiceCard = ({ icon, title, description }) => {
  return (
    <div className="bg-gray-800 rounded-lg p-6 text-white shadow-md transition-transform duration-300 hover:scale-105">
      <div className="flex justify-center">
        {icon}
      </div>
      <h3 className="text-2xl font-semibold mb-2 text-center">{title}</h3>
      <p className="text-gray-400 text-xl">{description}</p>
    </div>
  );
};

export default PredictiveModelingSection;
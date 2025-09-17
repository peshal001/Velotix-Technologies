import React from 'react';
import {
  // Example icon imports (replace with your actual icons)
  AiOutlineSetting,
  AiOutlineDatabase,
  AiOutlineBarChart,
  AiOutlineRocket,
} from 'react-icons/ai';

const PredictiveModelingProcess = () => {
  const marginLeftClass = 'ml-[16%]'; // For ml-55/65 (approximated)

  return (
    <div className={`py-12 px-4 sm:px-6 lg:px-8 bg-white ${marginLeftClass}`}>
      <h2 className="text-3xl font-extrabold text-gray-900 mb-20 ml-85">
        Predictive Modelling Development Process
      </h2>
      <div className="flex space-x-6">
        <ProcessCard
          icon={<AiOutlineSetting size={48} className="text-[#3AAFA9] mb-2" />}
          stepNumber="Step 1"
          title="Data Preprocessing"
          description="This step is part of collecting, purifying, and converting unprocessed data into an analysis-ready format. This entails addressing outliers, eliminating missing data, and changing variables to match the model better."
        />
        <ProcessCard
          icon={<AiOutlineDatabase size={48} className="text-[#3AAFA9] mb-2" />}
          stepNumber="Step 2"
          title="Model Selection"
          description="In this step, the appropriate predictive model is selected based on the type of data and the business problem. The data includes linear regression, decision trees, random forests, neural networks, or other types of models."
        />
        <ProcessCard
          icon={<AiOutlineBarChart size={48} className="text-[#3AAFA9]  mb-2" />}
          stepNumber="Step 3"
          title="Model Training"
          description="The preprocessed data is then used to train the chosen model. The data is often split into training and testing sets to assess performance and accuracy. Adjustments are made based on the model's performance on the test data."
        />
        <ProcessCard
          icon={<AiOutlineRocket size={48} className="text-[#3AAFA9] mb-2" />}
          stepNumber="Step 4"
          title="Model Deployment"
          description="Once the model has been trained and evaluated, it can be deployed in the real world. Model deployment involves integrating the model into a larger system, such as a web application or business process."
        />
      </div>
    </div>
  );
};

const ProcessCard = ({ icon, stepNumber, title, description }) => {
  return (
    <div className="bg-gray-100 rounded-lg p-6 shadow-md w-90">
      <div className="flex justify-center">{icon}</div>
      <h4 className="text-xl font-semibold text-gray-900 mb-1 text-center">
        {stepNumber}
      </h4>
      <h3 className="text-2xl font-semibold text-gray-800 mb-2 text-center">
        {title}
      </h3>
      <p className="text-gray-700 text-xl text-center tracking-wide">{description}</p>
    </div>
  );
};

export default PredictiveModelingProcess;
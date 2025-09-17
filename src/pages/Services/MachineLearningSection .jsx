import React from 'react';
import { useNavigate } from "react-router-dom";

const MachineLearningSection = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/aiconsultant'); 
  };

  return (
    <div className="bg-white py-16 px-4 mb-30 mt-20 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center lg:justify-between">
      <div className="lg:w-1/3 text-left mb-8 lg:mb-0 tracking-wide ml-85">
        <h2 className="text-4xl font-extrabold text-gray-800 mb-6">
          Unlock Insights with Machine Learning Solutions
        </h2>
        <p className="text-gray-800 mb-4 text-xl leading-relaxed">
          At Velotix Technologies, we empower businesses with cutting-edge Machine
          Learning services. Our expertise helps you analyze complex datasets,
          predict future outcomes, and automate intelligent processes for
          enhanced efficiency and innovation.
        </p>
        <p className="text-gray-800 mb-4 text-xl leading-relaxed">
          From predictive modeling to recommendation systems, our tailored ML
          solutions drive data-driven decisions and provide a competitive edge
          across various industries.
        </p>
        <p className="text-gray-800 mb-6 text-xl leading-relaxed">
          Partner with us to harness the transformative power of Machine Learning
          and achieve your strategic objectives.
        </p>
        <button
          onClick={handleButtonClick}
          className="bg-[#3AAFA9] hover:bg-[#3AAFA9] text-white font-bold py-3 mt-20 px-6 rounded-md transition duration-300"
        >
          Schedule a ML Consultation
        </button>
      </div>
      <div className="lg:w-1/3 relative mr-50">
        <img
          src="./education-banner.jpeg" 
          alt="Machine Learning Solutions"
          className="rounded-lg shadow-lg w-full h-auto"
        />
      </div>
    </div>
  );
};

export default MachineLearningSection;
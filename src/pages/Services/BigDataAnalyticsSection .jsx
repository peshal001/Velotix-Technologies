import React from 'react';
import { useNavigate } from "react-router-dom";

const BigDataAnalyticsSection = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/aiconsultant'); 
  };

  return (
    <div className="bg-white py-16 px-4 mb-30 mt-20 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center lg:justify-between">
      <div className="lg:w-1/3 text-left mb-8 lg:mb-0 tracking-wide ml-85">
        <h2 className="text-4xl font-extrabold text-gray-800 mb-6">
          Transform Your Data with Big Data Analytics
        </h2>
        <p className="text-gray-800 mb-4 text-xl leading-relaxed">
          Velotix Technologies provides comprehensive Big Data Analytics services
          to help you unlock the hidden value within your vast datasets. We
          enable you to process, analyze, and visualize complex information for
          strategic insights and informed decision-making.
        </p>
        <p className="text-gray-800 mb-4 text-xl leading-relaxed">
          Our expertise in big data technologies and methodologies empowers
          businesses to identify trends, optimize operations, and gain a deeper
          understanding of their customers and markets.
        </p>
        <p className="text-gray-800 mb-6 text-xl leading-relaxed">
          Embark on your data-driven journey with our powerful Big Data Analytics
          solutions.
        </p>
        <button
          onClick={handleButtonClick}
          className="bg-[#3AAFA9] hover:bg-[#3AAFA9] text-white font-bold py-3 mt-20 px-6 rounded-md transition duration-300"
        >
          Schedule a BDA Consultation
        </button>
      </div>
      <div className="lg:w-1/3 relative mr-50">
        <img
          src="/src/assets/images/finance-banner.jpeg" 
          alt="Big Data Analytics Solutions"
          className="rounded-lg shadow-lg w-full h-auto"
        />
      </div>
    </div>
  );
};

export default BigDataAnalyticsSection;
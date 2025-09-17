import React from 'react';
import { useNavigate } from "react-router-dom";

const RetailHeroSection = () => {
  const navigate = useNavigate();
    
  const handleButtonClick = () => {
    navigate('/aiconsultant');
  };

  return (
    <main>
      <div className="bg-white py-16">
        <div className="container mx-auto px-4 md:px-8 lg:px-12 flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-1/2 mb-8 lg:mb-0">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Your Ultimate Retail Experience Starts Here
            </h2>
            <p className="text-xl tracking-wider text-gray-900 mb-6 mr-20">
              Discover a smarter way to shop with our AI-powered retail platform. From personalized product suggestions to seamless checkout, we make online shopping faster, easier, and more enjoyable.
            </p>
            <button onClick={handleButtonClick} className="bg-[#3AAFA9] hover:bg-[#2C9C95] text-white mt-10 font-bold py-3 px-6 rounded-md">
              Schedule Demo
            </button>
          </div>
          <div className="lg:w-1/2">
            <div className="relative rounded-xl ml-55 overflow-hidden">
              <img
                src="./retail-banner.jpeg"
                alt="Retail Shopping"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default RetailHeroSection;

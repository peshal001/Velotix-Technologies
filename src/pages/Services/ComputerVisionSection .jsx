import React from 'react';
import { useNavigate } from "react-router-dom";


const ComputerVisionSection = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/aiconsultant'); 
  };

  return (
    <div className="bg-white py-16 px-4 mb-30 mt-20 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center lg:justify-between">
      <div className="lg:w-1/3 text-left mb-8 lg:mb-0 tracking-wide ml-85">
        <h2 className="text-4xl font-extrabold text-gray-800 mb-6">
          Empower Your Business with Computer Vision
        </h2>
        <p className="text-gray-800 mb-4 text-xl leading-relaxed">
          Velotix Technologies offers advanced Computer Vision services that enable
          machines to "see" and interpret the visual world. Our solutions drive
          automation, improve accuracy, and unlock valuable insights from images
          and videos.
        </p>
        <p className="text-gray-800 mb-4 text-xl leading-relaxed">
          From object detection and image recognition to video analytics, our
          custom Computer Vision applications cater to diverse industry needs,
          enhancing operational efficiency and creating new possibilities.
        </p>
        <p className="text-gray-800 mb-6 text-xl leading-relaxed">
          Explore the potential of visual intelligence with our expert Computer
          Vision services.
        </p>
        <button
          onClick={handleButtonClick}
          className="bg-[#3AAFA9] hover:bg-[#3AAFA9] text-white font-bold py-3 mt-20 px-6 rounded-md transition duration-300"
        >
          Schedule a CV Consultation
        </button>
      </div>
      <div className="lg:w-1/3 relative mr-50">
        <img
          src="./content_banner.jpg" 
          alt="Computer Vision Solutions"
          className="rounded-lg shadow-lg w-full h-auto"
        />
      </div>
    </div>
  );
};

export default ComputerVisionSection;
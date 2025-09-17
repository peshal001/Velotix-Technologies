import React from 'react';
import { useNavigate } from "react-router-dom";

const VelotixChatGptIntegration = () => {

   const navigate = useNavigate();
      
    const handleButtonClick = () => {
      navigate('/aiconsultant');
    };

  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center lg:justify-between">
      <div className="lg:w-1/3 text-left mb-8 ml-55 lg:mb-0 tracking-wide">
        <h2 className="text-4xl font-extrabold text-gray-800 mb-6">
          Seamless Communication With Chat GPT Integrations
        </h2>
        <p className="text-gray-800 mb-4 text-xl">
          At Velotix Technologies, we strive to provide top-notch AI services to
          our clients. One of our specialties is Seamless Communication with Chat
          GPT Integration Services. We specialize in bringing the power of
          AI-powered chatbots to your website. It enhances user engagement and
          drives conversions.
        </p>
        <p className="text-gray-800 mb-4 text-xl">
          Our extensive experience and commitment to excellence have helped
          businesses across industries, including health tech, to achieve their
          goals. Join us on this journey and unlock the full potential of ChatGPT
          for your website.
        </p>
        <p className="text-gray-800 mb-6 text-xl">
          We take pride in delivering seamless integration solutions that drive
          tangible business results.
        </p>
        <button  onClick = {handleButtonClick} className="bg-[#3AAFA9] hover:bg-[#3AAFA9] text-white font-bold py-3 px-6 rounded-md">
          Schedule a Demo
        </button>
      </div>
      <div className="lg:w-1/3 relative mr-60">
        <img
          src="/src/assets/images/education-banner.jpeg" 
          alt="Chat GPT Integration"
          className="rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
};

export default VelotixChatGptIntegration;
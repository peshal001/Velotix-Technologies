import React from 'react';
import { useNavigate } from "react-router-dom";

const FreeConsultanBtn = () => {
  const navigate = useNavigate();
  
  const handleButtonClick = () => {
    navigate('/aiconsultant');
  };

  return (
    <div>
      <button 
        className="inline-flex items-center bg-gradient-to-r from-[#3AAFA9] to-[#56CCF2] text-white border-0 py-3 px-8 focus:outline-none rounded-lg text-lg font-semibold transform transition-all duration-500 ease-in-out hover:bg-[#56CCF2] hover:scale-105 hover:shadow-xl hover:rotate-3 hover:opacity-90"
        onClick={handleButtonClick}
      >
        Free AI Consultant
      </button>
    </div>
  );
};

export default FreeConsultanBtn;

import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaHandHoldingMedical,
  FaUniversity,
  FaShoppingCart,
  FaStoreAlt,
  FaMoneyBillWave,
} from 'react-icons/fa';

const SpecificIndustryExpertise = () => {
  const industries = [
    { name: 'Health Tech', icon: FaHandHoldingMedical, path: '/industries/healthcare' }, 
    { name: 'Ed Tech', icon: FaUniversity, path: '/industries/education' },      
    { name: 'Retail', icon: FaStoreAlt, path: '/industries/retail' },             
    { name: 'Fin Tech', icon: FaMoneyBillWave, path: '/industries/finance' },     
  ];

  return (
    <div className="py-10 bg-white mt-10">
      <div className="max-w-7xl mx-auto items-center px-6 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-extrabold text-[#3AAFA9] text-center mt-10 mb-10">Industry Expertise</h2>
        <p className="text-gray-900 mb-8 text-xl">
          We've excelled our experience in key industries to bring valuable insights and provide our customers with truly beneficial solutions.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 mx-55 mt-20">
          {industries.map((industry, index) => (
            <Link
              key={index}
              to={industry.path}
              className="bg-white rounded-md shadow-md p-6 flex flex-col items-center justify-center relative overflow-hidden hover:shadow-lg transition duration-300"
            >
              <div className="text-[#3AAFA9]  text-4xl mb-3">
                <industry.icon />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">{industry.name}</h3>
              <div className="absolute top-2 right-2 bg-indigo-100 text-[#3AAFA9] rounded-sm p-1">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SpecificIndustryExpertise;
import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import HeroImageSection from '../../components/HeroSection/HeroImageSection';
import { useNavigate } from "react-router-dom";
import Footer from '../../components/footer/Footer';
import FinanceCard from './FinanceCard';
import FinanceCases from './FinanceCases';
import BlogCardGrid from '../../components/blog/BlogCardGrid';
import FinanceFAQSection from '../../components/FAQSection/FinanceFAQSection';

const Finance = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/aiconsultant'); 
  };

  return (
    <>
      <Navbar />
      <HeroImageSection
        imageSrc={FinanceImage} 
        title="Empowering Financial Growth"
        subtitle="Innovative Solutions for a Prosperous Future"
        textColor="text-white" 
      />
      <main>
        <div className="bg-white py-16">
          <div className="container mx-auto px-4 md:px-8 lg:px-12 flex flex-col lg:flex-row items-center justify-between">
            <div className="lg:w-1/2 mb-8 lg:mb-0">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                AI-Powered Financial Solutions: Transforming Your Financial Future
              </h2>
              <p className="text-xl tracking-wider text-gray-900 mb-6 mr-20">
                At our company, we leverage the power of Artificial Intelligence to provide cutting-edge financial services. Through machine learning algorithms, we offer advanced analytics, personalized financial planning, and intelligent investment strategies. Our goal is to empower individuals and businesses to make smarter financial decisions and achieve long-term financial success.
              </p>
              <button onClick={handleButtonClick} className="bg-[#3AAFA9] hover:bg-[#3AAFA9] text-white mt-10 font-bold py-3 px-6 rounded-md">
                Schedule a Demo
              </button>
            </div>
            <div className="lg:w-1/2">
              <div className="relative rounded-xl ml-55 overflow-hidden">
                <img
                  src="./finance-banner.jpeg" 
                  alt="Financial Growth and Consulting"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </main>
      <div>
        <FinanceCard/>
        <FinanceCases/>
      </div>
      <div>
        <BlogCardGrid/>
        <FinanceFAQSection/>
      </div>
      <Footer />
    </>
  );
};

export default Finance;

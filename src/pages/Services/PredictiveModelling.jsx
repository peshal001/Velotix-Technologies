import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import HeroSection from '../../components/HeroSection/HeroSection'
import Footer from '../../components/footer/Footer'
import { useNavigate } from "react-router-dom";
import PredictiveAnalyticsBenefitsCard from './PredictiveAnalyticsBenefitsCard';
import PredictiveModelingSection from './PredictiveModelingSection';
import BlogCardGrid from '../../components/blog/BlogCardGrid';
import PredictiveModelingProcess from './PredictiveModelingProcess';
import PredictiveAnalyticsFAQ from '../../components/FAQSection/PredictiveAnalyticsFAQ';

const PredictiveModelling = () => {

  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate('/aiconsultant');
  };

  return (
    <>
      <Navbar />
      <HeroSection
        videoSrc="./HomeSLider.mp4"
        title="Predict Tomorrow, Today"
        subtitle="Leverage Predictive Models to Drive Data-Backed Decisions"
        ctaText="Get Insights"
        textColor="text-white"
      />
      <main>
        <div className="bg-white py-16">
          <div className="container mx-auto px-4 md:px-8 lg:px-12 flex flex-col lg:flex-row items-center justify-between">
            <div className="lg:w-1/2 mb-8 lg:mb-0">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Predictive Modelling: Powering Data-Driven E-Commerce Strategies
              </h2>
              <p className="text-xl tracking-wider text-gray-900 mb-6 mr-20">
                Leverage the power of predictive modelling to stay ahead in e-commerce. Our solutions analyze historical data and customer behavior to forecast trends, personalize user experiences, optimize inventory, and improve marketing performance. From churn prediction to dynamic pricing, we enable businesses to make smarter, faster, and more strategic decisions.
              </p>
              <button
                onClick={handleButtonClick}
                className="bg-[#3AAFA9] hover:bg-[#3AAFA9] text-white mt-10 font-bold py-3 px-6 rounded-md"
              >
                Explore Predictive Insights
              </button>
            </div>
            <div className="lg:w-1/2">
              <div className="relative rounded-xl ml-55 overflow-hidden">
                <img
                  src="./PredictiveModelingImg.png"
                  alt="Predictive Modelling in E-commerce"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </main>
      <PredictiveAnalyticsBenefitsCard />
      <PredictiveModelingSection/>
      <PredictiveModelingProcess/>
      <BlogCardGrid/>
      <PredictiveAnalyticsFAQ/>
      <Footer />
    </>
  )
}
export default PredictiveModelling

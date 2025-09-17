import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import HeroImageSection from '../../components/HeroSection/HeroImageSection'
import Footer from '../../components/footer/Footer'
import { useNavigate } from "react-router-dom";
import HealthTechCard from './HealthTechCard';
import BlogCardGrid from "../../components/blog/BlogCardGrid"
import HealthTechCases from './HeathTechCases';
import FAQSection from '../../components/FAQSection/FAQSection';

const Healthcare = () => {
  const navigate = useNavigate();
  
  const handleButtonClick = () => {
    navigate('/aiconsultant');
  };
  
  return (
    <div className='bg-[#FAF0E6]'>
      <Navbar />
      <HeroImageSection
        imageSrc="/Healthtech.png" 
        title="Innovating Healthcare for a Better Tomorrow"
        subtitle="Transforming Care with Technology and Expertise"
        textColor="text-gray-900" 
      />
      <main>
      <div className="bg-white py-16">
      <div className="container mx-auto px-4 md:px-8 lg:px-12 flex flex-col lg:flex-row items-center justify-between">
        <div className="lg:w-1/2 mb-8 lg:mb-0">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            AI-Powered Healthcare Software: Transforming Patient Care
          </h2>
          <p className="text-xl tracking-wider text-gray-900 mb-6 mr-20 ">
            As a pioneering healthcare software development company, we harness the power of Artificial Intelligence to revolutionize health technology. By leveraging cutting-edge technologies such as machine learning and computer vision, we are driving unprecedented advancements in data analysis, intelligent clinical decision support, and the creation of highly personalized treatment strategies. Our expertise is at the forefront of transforming healthcare solutions, enabling us to deliver innovative services that lead to enhanced patient care and significantly improved outcomes.
          </p>
          <button onClick={handleButtonClick} className="bg-[#3AAFA9] hover:bg-[#3AAFA9] text-white mt-10  font-bold py-3 px-6 rounded-md">
            Schedule a Demo
          </button>
        </div>
        <div className="lg:w-1/2">
          <div className="relative rounded-xl ml-55 overflow-hidden">
            <img
              src="/Healthtech.png"
              alt="Healthcare Professionals in a Lab"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </div>
      </main>
      <aside div = "ml-55">
        <HealthTechCard/>
        <HealthTechCases/>
      </aside>
      <div className='mx-auto'>
        <BlogCardGrid/>
        <FAQSection/>
      </div>
      <Footer />
    </div>
  )
}

export default Healthcare

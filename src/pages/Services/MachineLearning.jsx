import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import HeroSection from '../../components/HeroSection/HeroSection'
import Footer from '../../components/footer/Footer'
import MachineLearningFAQSection from '../../components/FAQSection/MachineLearningFAQSection '
import MachineLearningSection from './MachineLearningSection '
import MachineLearningBenefitsCard from './MachineLearningBenefitsCard'
import MachineLearningBenefitsProcess from './MachineLearningBenefitsProcess'

const MachineLearning = () => {
  return (
    <>
      <Navbar />
      <HeroSection
        videoSrc="/src/assets/images/ML.mov"
        title="Turning Data Into Smart Decisions"
        subtitle="Accelerate Innovation with Machine Learning Solutions"
        ctaText="Let’s Build Smarter"
        textColor="text-white" 
      />
      <MachineLearningSection/>
      <MachineLearningBenefitsCard/>
      <MachineLearningBenefitsProcess/>
      <MachineLearningFAQSection/>
      <Footer />
    </>
  )
}

export default MachineLearning

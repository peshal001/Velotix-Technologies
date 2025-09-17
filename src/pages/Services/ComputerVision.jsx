import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import HeroSection from '../../components/HeroSection/HeroSection'
import Footer from '../../components/footer/Footer'
import ComputerVisionFAQSection from '../../components/FAQSection/ComputerVisionFAQSection '
import ComputerVisionSection from './ComputerVisionSection '
import ComputerVisionBenefitsCard from './ComputerVisionBenefitsCard '
import BlogCardGrid from "../../components/blog/BlogCardGrid"
import ComputerVisionBenefitsProcess from './ComputerVisionBenefitsProcess '

const ComputerVision = () => {
  return (
    <>
      <Navbar />
      <HeroSection
        videoSrc="/ComputerVersion.mov"
        title="Empowering Machines to See the World"
        subtitle="Automate Visual Intelligence with Computer Vision"
        textColor="text-black-900" 
      />
      <ComputerVisionSection/>
      <ComputerVisionBenefitsCard/>
      <ComputerVisionBenefitsProcess/>
      <BlogCardGrid/>
      <ComputerVisionFAQSection/>
      <Footer />
    </>
  )
}

export default ComputerVision

import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import HeroImageSection from '../../components/HeroSection/HeroImageSection'
import Footer from '../../components/footer/Footer'

import RetailHeroSection from "../../components/HeroSection/RetailHeroSection"
import RetailBenefitsCard from './RetailBenefitsCard'
import BlogCardGrid from '../../components/blog/BlogCardGrid'
import RetailFAQSection from '../../components/FAQSection/RetailFAQSection'

const Retail = () => {
   
  return (
    <>
      <Navbar />
      <HeroImageSection
        imageSrc="/src/assets/images/retail-banner.jpeg"  
        title="Revolutionizing Retail with Innovation"
        subtitle="Enhancing Customer Experience with Cutting-Edge Solutions"
        textColor="text-white"  
      />
      <RetailHeroSection/>
      <RetailBenefitsCard/>
      <BlogCardGrid/>
      <RetailFAQSection/>
      <Footer />
    </>
  )
}

export default Retail

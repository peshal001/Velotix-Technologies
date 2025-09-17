import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import HeroImageSection from '../../components/HeroSection/HeroImageSection'
import Footer from '../../components/footer/Footer'
import EducationHeroSection from './EducationHeroSection'
import EducationFAQSection from '../../components/FAQSection/EducationFAQSection'
import EducationBenefitsCard from './EducationBenefitsCard'
import BlogCardGrid from '../../components/blog/BlogCardGrid';

const Education = () => {
  return (
    <>
      <Navbar />
      <HeroImageSection
        imageSrc="/src/assets/images/education-banner.jpeg"
        title="Empowering Education Through Technology"
        subtitle="Unlocking Learning Opportunities for a Brighter Future"
        textColor="text-white"  
      />
      <EducationHeroSection/>
      <EducationBenefitsCard/>
      <BlogCardGrid/>
      <EducationFAQSection/>
      <Footer />
    </>
  )
}

export default Education

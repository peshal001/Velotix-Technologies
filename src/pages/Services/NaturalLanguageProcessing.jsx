import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import HeroSection from '../../components/HeroSection/HeroSection'
import Footer from '../../components/footer/Footer'
import NaturalLanguageProcessingFAQSection from '../../components/FAQSection/NaturalLanguageProcessingFAQSection'
import BlogCardGrid from '../../components/blog/BlogCardGrid'
import NLPSection from './NLPSection'
import NLPBenefitsCard from './NLPBenefitsCard'
import NLPBenefitsProcess from './NLPBenefitsProcess'

const NaturalLanguageProcessing = () => {
  return (
    <>
      <Navbar />
      <HeroSection
        videoSrc="/src/assets/images/NLP.mov"
        title="Understand and Generate Human Language"
        subtitle="Unlock the Power of Communication with NLP"
        ctaText="Start Exploring"
        textColor="text-white" 
      />
      <NLPSection/>
      <NLPBenefitsCard/>
      <NLPBenefitsProcess/>
      <BlogCardGrid/>
      <NaturalLanguageProcessingFAQSection/>
      <Footer />
    </>
  )
}

export default NaturalLanguageProcessing

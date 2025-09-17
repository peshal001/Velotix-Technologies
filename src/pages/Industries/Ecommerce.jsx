import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import HeroImageSection from '../../components/HeroSection/HeroImageSection'
import Footer from '../../components/footer/Footer'
import EcommerceIntroSection from './EcommerceIntroSection'
import EcommerceBenefitsCard from './EcommerceBenefitsCard'
import BlogCardGrid from '../../components/blog/BlogCardGrid'
import EcommerceFAQSection from '../../components/FAQSection/EcommerceFAQSection'

const Ecommerce = () => {
  return (
    <>
      <Navbar />
      <HeroImageSection
        imageSrc="/ecommerce-banner.jpeg"
        title="Transform Your Business with E-Commerce"
        subtitle="Elevate Your Brand, Maximize Sales with Our E-Commerce Solutions"
        textColor="text-gray-900"  
      />
      <EcommerceIntroSection/>
      <EcommerceBenefitsCard/>
      <BlogCardGrid/>
      <EcommerceFAQSection/>
      <Footer />
    </>
  )
}

export default Ecommerce

import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import HeroSection from '../../components/HeroSection/HeroSection'
import Footer from "../../components/footer/Footer"
import BigDataAnalyticsFAQSection from '../../components/FAQSection/BigDataAnalyticsFAQSection '
import BigDataAnalyticsBenefitsCard from './BigDataAnalyticsBenefitsCard '
import BigDataAnalyticsBenefitsProcess from './BigDataAnalyticsBenefitsProcess '
import BigDataAnalyticsSection from './BigDataAnalyticsSection '
import BlogCircleGrid from "../../components/blog/BlogCardGrid"

const BigDataAnalytics = () => {
  return (
    <>
      <Navbar />
      <div className='text-white'>
      <HeroSection className='text-white'
        videoSrc="./BigData.mov"
        title="Unleashing the Power of Big Data"
        subtitle="Transforming Complex Data into Actionable Insights"
        ctaText="Discover More"
        textColor="text-black"
      />
      </div>
      <BigDataAnalyticsSection/>
      <BigDataAnalyticsBenefitsCard/>
      <BigDataAnalyticsBenefitsProcess/>
      <BlogCircleGrid/>
      <BigDataAnalyticsFAQSection/>
      <Footer/>
    </>
  )
}

export default BigDataAnalytics

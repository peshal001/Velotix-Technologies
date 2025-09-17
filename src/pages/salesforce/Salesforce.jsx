import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import HeroSection from '../../components/HeroSection/HeroSection'
import Footer from '../../components/footer/Footer'
import SalesforceServices from '../../components/Salesforce/SalesforceServices '
import SalesforceLifecycle from '../../components/Salesforce/SaleforceLifeCycle'
import SalesForceFAQSection from "../../components/FAQSection/SalesForceFAQSection"
import CompanyCultureSection from './CompanyCultureSection '
import SpecificIndustryExpertise from "./SpecificIndustryExpertise"
const Salesforce = () => {
  return (
    <div className='bg-white'>
      <Navbar />
      <HeroSection
        videoSrc="/src/assets/images/Blog.mp4"
        title="Elevate Customer Experiences with Salesforce"
        subtitle="Streamline Sales, Service & Marketing with Cloud CRM"
        ctaText="Unlock Your Potential"
        textColor="text-white" 
      />
      <SalesforceServices/>
      <SalesforceLifecycle/>
      <CompanyCultureSection/>
      <SpecificIndustryExpertise/>
      <SalesForceFAQSection/>
      <Footer />
    </div>
  )
}

export default Salesforce

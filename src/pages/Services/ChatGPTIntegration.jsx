import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import HeroSection from '../../components/HeroSection/HeroSection'
import Footer from '../../components/footer/Footer'
import VelotixChatGptIntegration from './VelotixChatGptIntegration '
import ChatGptServicesSection from './ChatGptServicesSection '
import ChatGptFeaturesSection from './ChatGptFeaturesSection'
import TopChatGptPlatforms from './TopChatGptPlatforms'
import ChatGptIntegrationProcess from './ChatGptIntegrationProcess'
import ChatGptFAQSection from '../../components/FAQSection/ChatGptFAQSection'

const ChatGPTIntegration = () => {
  return (
    <>
      <Navbar />
      <HeroSection
        videoSrc="/src/assets/images/ChatGPT.mov"
        title="Smarter Conversations with ChatGPT"
        subtitle="Integrate AI-Powered Assistants into Your Workflow"
        ctaText="Explore Integration"
        textColor="text-white" 
      />
      <VelotixChatGptIntegration/>
      <ChatGptServicesSection/>
      <ChatGptFeaturesSection/>
      <TopChatGptPlatforms/>
      <ChatGptIntegrationProcess/>
      <ChatGptFAQSection/>
      <Footer />
    </>
  )
}

export default ChatGPTIntegration

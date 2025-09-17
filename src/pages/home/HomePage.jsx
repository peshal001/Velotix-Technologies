import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import HeroSection from '../../components/HeroSection/HeroSection';
import Footer from '../../components/footer/Footer';
import Content from './Content';
import ProvideServices from './ProvideServices';
import About from '../../components/about/About';
import BlogCardGrid from '../../components/blog/BlogCardGrid';
import MeetOurTeamSection from '../company/TeamMemberCard';
import "../../App.css"

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#F9F5F6] bg-opacity-50 ">
    <Navbar />
    <div>
      <HeroSection
        videoSrc="/PredictiveModelling.mov"
        title="Where Intelligence Meets Innovation"
        subtitle="We Engineer AI That Solves Real-World Problems"
        ctaText="Let’s Talk"
      />
    </div>
    <div className='mt-2' id="contact-section">
      <Content />
    </div>
    <div id="services-section">
      <ProvideServices />
    </div>
    <div id="about-us-section">
      <About />
    </div>
    <div id="latest-blogs-section">
      <BlogCardGrid/>
    </div>
    <div className='bg-[#F9F5F6] ml-55' id="meet-our-team-section"> {/* यहाँ bg-white थपियो */}
      <MeetOurTeamSection/>
    </div>
    <Footer />
  </div>
  );
};

export default Home;

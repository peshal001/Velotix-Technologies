import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import HeroImageSection from '../../components/HeroSection/HeroImageSection'
import Footer from '../../components/footer/Footer'

const Gallery = () => (
  <>
    <Navbar />
    <HeroImageSection
      imageSrc="/src/assets/images/gallery-banner.jpg" 
      title="Our Stunning Gallery"
      subtitle="Browse Through Our Beautiful Collection of Images"
      textColor="text-black" />
    <main className="text-black text-5xl font-bold ml-90 mb-20 ">
      <h1 className='mt-30 mb-30'>Team Building Activities</h1>
      <h1 className='mt-30 mb-30'>Employee Tours</h1>

      <h1 className='mt-30 mb-30'>Corporate Ventures</h1>
      <h1 className='mt-30 mb-30'> Our Culture</h1>
    </main>
    <Footer />
  </>
)

export default Gallery
